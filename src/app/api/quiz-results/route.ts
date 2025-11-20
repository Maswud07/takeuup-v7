import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const { userId, quizId, score, totalQuestions, accuracy, timeSpent, answers, category } = await request.json();

    const quizResult = await db.quizResult.create({
      data: {
        userId,
        quizId,
        score,
        totalQuestions,
        accuracy,
        timeSpent,
        answers: JSON.stringify(answers),
        category
      }
    });

    // Update user's total points
    await db.user.update({
      where: { id: userId },
      data: {
        totalPoints: {
          increment: score
        }
      }
    });

    // Update leaderboard
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const existingLeaderboardEntry = await db.leaderboard.findFirst({
      where: {
        userId,
        date: {
          gte: today
        },
        type: 'DAILY'
      }
    });

    if (existingLeaderboardEntry) {
      await db.leaderboard.update({
        where: { id: existingLeaderboardEntry.id },
        data: {
          score: existingLeaderboardEntry.score + score
        }
      });
    } else {
      await db.leaderboard.create({
        data: {
          userId,
          score,
          type: 'DAILY'
        }
      });
    }

    return NextResponse.json(quizResult);
  } catch (error) {
    console.error('Error saving quiz result:', error);
    return NextResponse.json(
      { error: 'Failed to save quiz result' },
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

    const results = await db.quizResult.findMany({
      where: { userId },
      orderBy: {
        createdAt: 'desc'
      },
      take: 50
    });

    return NextResponse.json(results);
  } catch (error) {
    console.error('Error fetching quiz results:', error);
    return NextResponse.json(
      { error: 'Failed to fetch quiz results' },
      { status: 500 }
    );
  }
}