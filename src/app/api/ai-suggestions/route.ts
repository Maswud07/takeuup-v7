import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import ZAI from 'z-ai-web-dev-sdk';

export async function POST(request: NextRequest) {
  try {
    const { userId, type } = await request.json();

    // Fetch user's quiz results to analyze performance
    const userResults = await db.quizResult.findMany({
      where: { userId },
      orderBy: {
        createdAt: 'desc'
      },
      take: 20
    });

    // Fetch user information
    const user = await db.user.findUnique({
      where: { id: userId }
    });

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Initialize Z-AI SDK
    const zai = await ZAI.create();

    // Prepare performance data for AI analysis
    const performanceData = {
      totalQuizzes: userResults.length,
      averageScore: userResults.reduce((acc, result) => acc + result.accuracy, 0) / userResults.length,
      categoryPerformance: userResults.reduce((acc, result) => {
        acc[result.category] = (acc[result.category] || []).concat(result.accuracy);
        return acc;
      }, {} as Record<string, number[]>),
      streak: user.streak,
      totalPoints: user.totalPoints
    };

    // Generate AI suggestion based on type
    let prompt = '';
    let title = '';

    switch (type) {
      case 'WEAK_TOPIC':
        prompt = `Analyze this student's performance data and identify their weakest topics: ${JSON.stringify(performanceData)}. Provide specific suggestions for improvement in weak areas.`;
        title = 'Weak Topic Analysis';
        break;
      case 'STUDY_PLAN':
        prompt = `Based on this student's performance data: ${JSON.stringify(performanceData)}, create a personalized study plan for the next week. Focus on improving weak areas while maintaining strengths.`;
        title = 'Personalized Study Plan';
        break;
      case 'PERFORMANCE':
        prompt = `Analyze this student's performance: ${JSON.stringify(performanceData)}. Provide insights about their progress, strengths, and areas for improvement.`;
        title = 'Performance Analysis';
        break;
      case 'MOTIVATION':
        prompt = `This student has a streak of ${user.streak} days and ${user.totalPoints} points. Write an encouraging message to motivate them to continue learning.`;
        title = 'Keep Going!';
        break;
      default:
        prompt = `Provide general learning advice for a Bangladeshi student based on this performance data: ${JSON.stringify(performanceData)}`;
        title = 'Learning Tips';
    }

    const completion = await zai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You are an expert educational advisor for Bangladeshi students preparing for SSC, HSC, Admission, and Job exams. Provide encouraging, actionable, and culturally relevant advice.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      max_tokens: 500,
      temperature: 0.7
    });

    const aiContent = completion.choices[0]?.message?.content || 'Unable to generate suggestion at this time.';

    // Save the AI suggestion to database
    const suggestion = await db.aISuggestion.create({
      data: {
        userId,
        title,
        content: aiContent,
        type: type as any
      }
    });

    return NextResponse.json(suggestion);
  } catch (error) {
    console.error('Error generating AI suggestion:', error);
    return NextResponse.json(
      { error: 'Failed to generate AI suggestion' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    const suggestions = await db.aISuggestion.findMany({
      where: { userId },
      orderBy: {
        createdAt: 'desc'
      },
      take: 10
    });

    return NextResponse.json(suggestions);
  } catch (error) {
    console.error('Error fetching AI suggestions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch AI suggestions' },
      { status: 500 }
    );
  }
}