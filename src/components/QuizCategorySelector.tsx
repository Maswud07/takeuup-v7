// quizCategories.ts
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  BookOpen,
  GraduationCap,
  Briefcase,
  Building2,
  Brain,
  Globe,
  Headphones,
  PenLine,
  Mic,
  Shield,
  UserCheck,
  Activity
} from "lucide-react";

export const quizCategories = [
  {
    id: 'ssc',
    name: 'SSC',
    icon: <GraduationCap className="w-8 h-8" />,
    description: 'Secondary School Certificate preparation',
    subcategories: ['Bangla', 'English', 'Math', 'Science', 'ICT'],
    subjects: [
      {
        id: 'bangla',
        name: 'Bangla',
        icon: <BookOpen className="w-6 h-6" />,
        description: 'Bangla 1st & 2nd paper',
        chapters: ['Grammar', 'Prose', 'Poetry', 'Story']
      },
      {
        id: 'english',
        name: 'English',
        icon: <BookOpen className="w-6 h-6" />,
        description: 'English 1st & 2nd paper',
        chapters: ['Grammar', 'Reading', 'Writing']
      }
    ]
  },

  {
    id: 'hsc',
    name: 'HSC',
    icon: <GraduationCap className="w-8 h-8" />,
    description: 'Higher Secondary Certificate preparation',
    subcategories: ['Science', 'Commerce', 'Arts'],
    subjects: [
      {
        id: 'physics',
        name: 'Physics',
        icon: <BookOpen className="w-6 h-6" />,
        description: 'HSC Physics',
        chapters: ['Chapter 1', 'Chapter 2', 'Chapter 3']
      }
    ]
  },

  {
    id: 'admission',
    name: 'Admission',
    icon: <Building2 className="w-8 h-8" />,
    description: 'University admission test preparation',
    subcategories: ['Science', 'Business', 'Humanities'],
    subjects: [
      {
        id: 'math',
        name: 'Math',
        icon: <BookOpen className="w-6 h-6" />,
        description: 'Admission Test Math',
        chapters: ['Algebra', 'Geometry', 'Trigonometry']
      }
    ]
  },

  {
    id: 'bcs',
    name: 'BCS',
    icon: <Briefcase className="w-8 h-8" />,
    description: 'Bangladesh Civil Service Exam preparation',
    subcategories: ['Bangla', 'English', 'GK', 'Math'],
    subjects: [
      {
        id: 'gk',
        name: 'General Knowledge',
        icon: <Brain className="w-6 h-6" />,
        description: 'Bangladesh & International GK',
        chapters: ['Bangladesh Affairs', 'International Affairs']
      }
    ]
  },

  {
    id: 'bank',
    name: 'Bank Job',
    icon: <Building2 className="w-8 h-8" />,
    description: 'Bank recruitment exam preparation',
    subcategories: ['General Math', 'English', 'GK', 'ICT'],
    subjects: [
      {
        id: 'math',
        name: 'Math',
        icon: <BookOpen className="w-6 h-6" />,
        description: 'Bank Math Practice',
        chapters: ['Arithmetic', 'Algebra', 'Geometry']
      }
    ]
  },

  // 🚀 NEW CATEGORY — IELTS
  {
    id: 'ielts',
    name: 'IELTS Preparation',
    icon: <Globe className="w-8 h-8" />,
    description: 'Complete IELTS Academic & GT preparation',
    subcategories: ['Listening', 'Reading', 'Writing', 'Speaking'],
    subjects: [
      {
        id: 'listening',
        name: 'IELTS Listening',
        icon: <Headphones className="w-6 h-6" />,
        description: 'Full Listening test practice',
        chapters: [
          'Part 1 – Conversation',
          'Part 2 – Monologue',
          'Part 3 – Group Discussion',
          'Part 4 – Academic Lecture'
        ]
      },
      {
        id: 'reading',
        name: 'IELTS Reading',
        icon: <BookOpen className="w-6 h-6" />,
        description: 'Academic & GT Reading practice',
        chapters: [
          'Matching Information',
          'True/False/Not Given',
          'Heading Matching',
          'Summary Completion',
          'List of Paragraphs'
        ]
      },
      {
        id: 'writing',
        name: 'IELTS Writing',
        icon: <PenLine className="w-6 h-6" />,
        description: 'Task 1 & Task 2 Writing',
        chapters: [
          'Task 1 – Graphs & Charts',
          'Task 1 – Letters (GT)',
          'Task 2 – Opinion Essay',
          'Task 2 – Discussion Essay',
          'Task 2 – Problem-Solution'
        ]
      },
      {
        id: 'speaking',
        name: 'IELTS Speaking',
        icon: <Mic className="w-6 h-6" />,
        description: 'Speaking test practice',
        chapters: [
          'Part 1 – Introduction',
          'Part 2 – Cue Card',
          'Part 3 – Follow-up Questions'
        ]
      }
    ]
  },

  // 🚀 NEW CATEGORY — ISSB
  {
    id: 'issb',
    name: 'ISSB Preparation',
    icon: <Shield className="w-8 h-8" />,
    description: 'ISSB selection process preparation',
    subcategories: ['Written', 'Psychology', 'Interview', 'Physical'],
    subjects: [
      {
        id: 'written',
        name: 'Written Test',
        icon: <BookOpen className="w-6 h-6" />,
        description: 'Written exam practice',
        chapters: [
          'Bangla',
          'English',
          'General Knowledge',
          'Mathematics',
          'Mental Ability'
        ]
      },
      {
        id: 'psychology',
        name: 'Psychology Test',
        icon: <Brain className="w-6 h-6" />,
        description: 'Psychology assessment preparation',
        chapters: [
          'Sentence Completion',
          'Picture Story Writing',
          'Word Association Test (WAT)',
          'Personality Test'
        ]
      },
      {
        id: 'interview',
        name: 'Interview',
        icon: <UserCheck className="w-6 h-6" />,
        description: 'Officer-level interview prep',
        chapters: [
          'Personal Interview',
          'General IQ Interview',
          'Career Motivation'
        ]
      },
      {
        id: 'physical',
        name: 'Physical Test',
        icon: <Activity className="w-6 h-6" />,
        description: 'Physical tasks and fitness tests',
        chapters: [
          'Running Test',
          'Obstacle Test',
          'Group Task',
          'Command Task'
        ]
      }
    ]
  }
];
