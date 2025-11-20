import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    const quizzes = await db.quiz.findMany({
      take: 10,
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json(quizzes);
  } catch (error) {
    console.error('Error fetching quizzes:', error);
    return NextResponse.json(
      { error: 'Failed to fetch quizzes' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { category, difficulty } = await request.json();

    const quizzes = await db.quiz.findMany({
      where: {
        category: category,
        difficulty: difficulty || undefined
      },
      take: 10,
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json(quizzes);
  } catch (error) {
    console.error('Error creating quiz session:', error);
    return NextResponse.json(
      { error: 'Failed to create quiz session' },
      { status: 500 }
    );
  }
}