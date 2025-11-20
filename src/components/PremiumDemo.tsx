'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Trophy, 
  Users, 
  Brain, 
  TrendingUp,
  Star,
  Zap,
  Target,
  BookOpen,
  MessageCircle,
  Award,
  Calendar,
  BarChart3,
  Clock,
  CheckCircle,
  ArrowRight,
  Play,
  GraduationCap,
  Lightbulb,
  Flame,
  User,
  Settings,
  Bell,
  ChevronRight,
  Download,
  Eye,
  ThumbsUp,
  Heart,
  Share2
} from 'lucide-react';

interface DemoQuizResult {
  id: string;
  category: string;
  score: number;
  totalQuestions: number;
  accuracy: number;
  date: string;
  rank: number;
}

interface LeaderboardEntry {
  rank: number;
  name: string;
  score: number;
  avatar: string;
  isCurrentUser?: boolean;
}

interface AISuggestion {
  id: string;
  title: string;
  content: string;
  type: string;
  priority: 'high' | 'medium' | 'low';
  isRead: boolean;
}

interface StudyMaterial {
  id: string;
  title: string;
  category: string;
  type: 'NOTE' | 'VIDEO' | 'PDF' | 'ARTICLE';
  description: string;
  duration?: string;
  views: number;
  isPremium: boolean;
  difficulty: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
}

export default function PremiumDemo() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [demoUser] = useState({
    name: 'Demo Student',
    email: 'demo@takeuup.com',
    plan: 'ALL_IN_ONE',
    streak: 15,
    totalPoints: 8750,
    rank: 8,
    avatar: '🎓'
  });

  const demoQuizResults: DemoQuizResult[] = [
    {
      id: '1',
      category: 'Physics',
      score: 28,
      totalQuestions: 30,
      accuracy: 93.3,
      date: '2 hours ago',
      rank: 5
    },
    {
      id: '2',
      category: 'Mathematics',
      score: 25,
      totalQuestions: 30,
      accuracy: 83.3,
      date: '5 hours ago',
      rank: 12
    },
    {
      id: '3',
      category: 'General Science',
      score: 29,
      totalQuestions: 30,
      accuracy: 96.7,
      date: '1 day ago',
      rank: 3
    }
  ];

  const demoLeaderboard: LeaderboardEntry[] = [
    { rank: 1, name: 'Rahim Khan', score: 9850, avatar: '👨‍🎓' },
    { rank: 2, name: 'Fatima Rahman', score: 9720, avatar: '👩‍🎓' },
    { rank: 3, name: 'Karim Ahmed', score: 9650, avatar: '👨‍💼' },
    { rank: 4, name: 'Nusrat Jahan', score: 9500, avatar: '👩‍💼' },
    { rank: 5, name: 'Abdul Alim', score: 9350, avatar: '👨‍🏫' },
    { rank: 6, name: 'Salma Begum', score: 9200, avatar: '👩‍🏫' },
    { rank: 7, name: 'Mahfuz Rahman', score: 9050, avatar: '👨‍🔬' },
    { rank: 8, name: 'You', score: 8750, avatar: '🎯', isCurrentUser: true }
  ];

  const demoAISuggestions: AISuggestion[] = [
    {
      id: '1',
      title: '🔥 Weak Topic Alert: Thermodynamics',
      content: 'Your recent physics quiz shows room for improvement in thermodynamics. We recommend focusing on heat transfer, laws of thermodynamics, and kinetic theory. Spend 20 minutes daily on these concepts.',
      type: 'WEAK_TOPIC',
      priority: 'high',
      isRead: false
    },
    {
      id: '2',
      title: '📈 Performance Trend: Excellent Progress!',
      content: 'Congratulations! Your accuracy has improved by 15% over the past week. Keep up the great work with your consistent study routine.',
      type: 'PERFORMANCE',
      priority: 'medium',
      isRead: false
    },
    {
      id: '3',
      title: '🎯 Personalized Study Plan',
      content: 'Based on your performance, we suggest: 1) Focus on calculus (2 hours/day), 2) Practice physics numericals (1 hour/day), 3) Review chemistry formulas (30 min/day).',
      type: 'STUDY_PLAN',
      priority: 'high',
      isRead: true
    }
  ];

  const demoStudyMaterials: StudyMaterial[] = [
    {
      id: '1',
      title: 'Complete HSC Physics Guide',
      category: 'Physics',
      type: 'PDF',
      description: 'Comprehensive guide covering all HSC physics topics with solved examples and practice problems.',
      duration: '2 hours 45 min',
      views: 15420,
      isPremium: true,
      difficulty: 'INTERMEDIATE'
    },
    {
      id: '2',
      title: 'Advanced Calculus Video Series',
      category: 'Mathematics',
      type: 'VIDEO',
      description: 'Master calculus with step-by-step video tutorials covering differentiation, integration, and applications.',
      duration: '8 hours 30 min',
      views: 23150,
      isPremium: true,
      difficulty: 'ADVANCED'
    },
    {
      id: '3',
      title: 'Chemistry Formula Sheet',
      category: 'Chemistry',
      type: 'NOTE',
      description: 'Essential chemistry formulas and equations for quick revision and exam preparation.',
      duration: '45 min',
      views: 18900,
      isPremium: true,
      difficulty: 'BEGINNER'
    }
  ];

  const demoMentorMessages = [
    {
      id: '1',
      mentor: 'Dr. Ahmed Khan',
      avatar: '👨‍🏫',
      message: 'Great progress in physics this week! Your understanding of Newton\'s laws has improved significantly. Keep practicing numerical problems.',
      time: '2 hours ago',
      isOnline: true
    },
    {
      id: '2',
      mentor: 'Prof. Fatima Rahman',
      avatar: '👩‍🏫',
      message: 'I noticed you\'re struggling with calculus. Would you like to schedule a 1-on-1 session this weekend?',
      time: '1 day ago',
      isOnline: false
    }
  ];

  const mockTests = [
    {
      id: '1',
      title: 'HSC Physics Mock Test - Full Syllabus',
      category: 'Physics',
      questions: 100,
      duration: '3 hours',
      difficulty: 'ADVANCED',
      attempts: 15420,
      averageScore: 78.5
    },
    {
      id: '2',
      title: 'SSC Mathematics Final Preparation',
      category: 'Mathematics',
      questions: 80,
      duration: '2.5 hours',
      difficulty: 'INTERMEDIATE',
      attempts: 23100,
      averageScore: 82.3
    }
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* Demo Header */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative z-10 flex justify-between items-center px-6 py-4 bg-white/80 backdrop-blur-md border-b border-purple-100"
      >
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                Premium Demo
              </span>
              <p className="text-xs text-gray-600">Experience All Features</p>
            </div>
          </div>
          <Badge className="bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 border-yellow-200">
            <Star className="w-4 h-4 mr-1" />
            All-In-One Plan
          </Badge>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 px-3 py-1 bg-green-100 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-green-700 font-medium">Live Demo</span>
          </div>
          <Button 
            onClick={() => window.location.href = '/'}
            variant="outline"
            className="border-purple-200 hover:bg-purple-50"
          >
            Back to Home
          </Button>
        </div>
      </motion.nav>

      {/* Demo Content */}
      <div className="relative z-10 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          {/* User Stats Overview */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Card className="bg-white/90 backdrop-blur-md border-purple-100 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{demoUser.avatar}</div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">{demoUser.name}</h2>
                      <p className="text-sm text-gray-600">{demoUser.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Button variant="ghost" size="sm" className="text-purple-600">
                      <Settings className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-purple-600">
                      <Bell className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-purple-600">
                      <User className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Flame className="w-8 h-8 text-orange-500 mr-2" />
                      <span className="text-3xl font-bold text-gray-800">{demoUser.streak}</span>
                    </div>
                    <p className="text-sm text-gray-600">Day Streak</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Star className="w-8 h-8 text-yellow-500 mr-2" />
                      <span className="text-3xl font-bold text-gray-800">{demoUser.totalPoints.toLocaleString()}</span>
                    </div>
                    <p className="text-sm text-gray-600">Total Points</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Trophy className="w-8 h-8 text-purple-600 mr-2" />
                      <span className="text-3xl font-bold text-gray-800">#{demoUser.rank}</span>
                    </div>
                    <p className="text-sm text-gray-600">Current Rank</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Target className="w-8 h-8 text-green-600 mr-2" />
                      <span className="text-3xl font-bold text-gray-800">89.2%</span>
                    </div>
                    <p className="text-sm text-gray-600">Avg Accuracy</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Zap className="w-8 h-8 text-pink-600 mr-2" />
                      <span className="text-3xl font-bold text-gray-800">47</span>
                    </div>
                    <p className="text-sm text-gray-600">Quizzes Taken</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Feature Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 bg-white/80 backdrop-blur-md border-purple-100">
              <TabsTrigger value="overview" className="data-[state=active]:bg-purple-100">Overview</TabsTrigger>
              <TabsTrigger value="quizzes" className="data-[state=active]:bg-purple-100">Quizzes</TabsTrigger>
              <TabsTrigger value="leaderboard" className="data-[state=active]:bg-purple-100">Leaderboard</TabsTrigger>
              <TabsTrigger value="ai-suggestions" className="data-[state=active]:bg-purple-100">AI Insights</TabsTrigger>
              <TabsTrigger value="study-materials" className="data-[state=active]:bg-purple-100">Study Materials</TabsTrigger>
              <TabsTrigger value="mentor-support" className="data-[state=active]:bg-purple-100">Mentor Support</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="mt-6">
              <div className="grid lg:grid-cols-2 gap-8">
                <motion.div
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="bg-white/80 backdrop-blur-md border-purple-100">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <BarChart3 className="w-6 h-6 mr-2 text-purple-600" />
                        Progress Analytics
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Physics</span>
                            <span className="text-sm text-purple-600">93%</span>
                          </div>
                          <Progress value={93} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Mathematics</span>
                            <span className="text-sm text-pink-600">85%</span>
                          </div>
                          <Progress value={85} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">General Science</span>
                            <span className="text-sm text-yellow-600">91%</span>
                          </div>
                          <Progress value={91} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Chemistry</span>
                            <span className="text-sm text-green-600">88%</span>
                          </div>
                          <Progress value={88} className="h-2" />
                        </div>
                      </div>
                      <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-purple-800 font-medium">Weekly Goal Progress</p>
                            <p className="text-2xl font-bold text-purple-900">75%</p>
                          </div>
                          <Trophy className="w-8 h-8 text-purple-600" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <Card className="bg-white/80 backdrop-blur-md border-purple-100">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Calendar className="w-6 h-6 mr-2 text-purple-600" />
                        Recent Activity
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {demoQuizResults.map((result) => (
                          <div key={result.id} className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                                <Brain className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <p className="font-semibold text-gray-800">{result.category}</p>
                                <p className="text-sm text-gray-600">{result.date}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-purple-600">{result.score}/{result.totalQuestions}</p>
                              <p className="text-sm text-gray-600">Rank #{result.rank}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <Button variant="outline" className="w-full mt-4 border-purple-200 hover:bg-purple-50">
                        View All Activity
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>

            {/* Quizzes Tab */}
            <TabsContent value="quizzes" className="mt-6">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-white/80 backdrop-blur-md border-purple-100">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Target className="w-6 h-6 mr-2 text-purple-600" />
                        Mock Test Library
                      </div>
                      <Badge className="bg-green-100 text-green-800">
                        2 Tests Available
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      {mockTests.map((test) => (
                        <div key={test.id} className="p-6 border-2 border-purple-200 rounded-xl hover:border-purple-400 transition-colors cursor-pointer">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="font-bold text-gray-800 mb-2">{test.title}</h3>
                              <Badge className="bg-purple-100 text-purple-800 mb-2">
                                {test.category}
                              </Badge>
                            </div>
                            <Badge className={`${
                              test.difficulty === 'ADVANCED' ? 'bg-red-100 text-red-800' :
                              test.difficulty === 'INTERMEDIATE' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-green-100 text-green-800'
                            }`}>
                              {test.difficulty}
                            </Badge>
                          </div>
                          <div className="space-y-2 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-2" />
                              <span>Duration: {test.duration}</span>
                            </div>
                            <div className="flex items-center">
                              <Brain className="w-4 h-4 mr-2" />
                              <span>{test.questions} Questions</span>
                            </div>
                            <div className="flex items-center">
                              <Users className="w-4 h-4 mr-2" />
                              <span>{test.attempts.toLocaleString()} Attempts</span>
                            </div>
                            <div className="flex items-center">
                              <TrendingUp className="w-4 h-4 mr-2" />
                              <span>Avg Score: {test.averageScore}%</span>
                            </div>
                          </div>
                          <Button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                            <Play className="w-4 h-4 mr-2" />
                            Start Mock Test
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Leaderboard Tab */}
            <TabsContent value="leaderboard" className="mt-6">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-white/80 backdrop-blur-md border-purple-100">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Trophy className="w-6 h-6 mr-2 text-purple-600" />
                      Premium Leaderboard
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {demoLeaderboard.map((entry) => (
                        <div
                          key={entry.rank}
                          className={`flex items-center justify-between p-4 rounded-xl ${
                            entry.isCurrentUser
                              ? 'bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-300'
                              : 'bg-purple-50 border border-purple-200'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                              entry.rank <= 3
                                ? 'bg-gradient-to-br from-yellow-400 to-orange-400 text-white'
                                : 'bg-gray-200 text-gray-700'
                            }`}>
                              {entry.rank}
                            </div>
                            <div className="text-2xl">{entry.avatar}</div>
                            <div>
                              <p className="font-semibold text-gray-800">
                                {entry.name}
                                {entry.isCurrentUser && <span className="text-purple-600 ml-1">(You)</span>}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-purple-600">{entry.score.toLocaleString()}</p>
                            <p className="text-sm text-gray-600">points</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 grid grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-yellow-50 rounded-xl">
                        <p className="text-2xl font-bold text-yellow-600">#1</p>
                        <p className="text-sm text-gray-600">Your Best Rank</p>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-xl">
                        <p className="text-2xl font-bold text-green-600">15</p>
                        <p className="text-sm text-gray-600">Day Streak</p>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-xl">
                        <p className="text-2xl font-bold text-purple-600">92%</p>
                        <p className="text-sm text-gray-600">Best Score</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* AI Suggestions Tab */}
            <TabsContent value="ai-suggestions" className="mt-6">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-white/80 backdrop-blur-md border-purple-100">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="w-6 h-6 mr-2 text-purple-600" />
                      AI-Powered Insights
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {demoAISuggestions.map((suggestion) => (
                        <div
                          key={suggestion.id}
                          className={`p-6 rounded-xl border-2 ${
                            suggestion.priority === 'high'
                              ? 'border-red-200 bg-red-50'
                              : suggestion.priority === 'medium'
                              ? 'border-yellow-200 bg-yellow-50'
                              : 'border-green-200 bg-green-50'
                          } ${!suggestion.isRead ? 'border-l-4 border-l-purple-600' : ''}`}
                        >
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="font-bold text-gray-800">{suggestion.title}</h3>
                            <Badge className={`${
                              suggestion.priority === 'high' ? 'bg-red-100 text-red-800' :
                              suggestion.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-green-100 text-green-800'
                            }`}>
                              {suggestion.priority}
                            </Badge>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{suggestion.content}</p>
                          <div className="flex items-center space-x-4 mt-4">
                            <Button variant="outline" size="sm" className="border-purple-200 hover:bg-purple-50">
                              <Eye className="w-4 h-4 mr-2" />
                              View Details
                            </Button>
                            <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Mark as Read
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-purple-800 font-medium">AI Analysis Complete</p>
                          <p className="text-lg font-bold text-purple-900">5 new insights generated</p>
                        </div>
                        <Button className="bg-purple-600 hover:bg-purple-700">
                          <Download className="w-4 h-4 mr-2" />
                          Download Report
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Study Materials Tab */}
            <TabsContent value="study-materials" className="mt-6">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-white/80 backdrop-blur-md border-purple-100">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center">
                        <BookOpen className="w-6 h-6 mr-2 text-purple-600" />
                        Premium Study Materials
                      </div>
                      <Badge className="bg-purple-100 text-purple-800">
                        3 Categories
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      {demoStudyMaterials.map((material) => (
                        <div key={material.id} className="border-2 border-purple-200 rounded-xl overflow-hidden hover:border-purple-400 transition-colors">
                          <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                            <div className="text-center">
                              {material.type === 'VIDEO' && <Play className="w-12 h-12 text-purple-600" />}
                              {material.type === 'PDF' && <Download className="w-12 h-12 text-purple-600" />}
                              {material.type === 'NOTE' && <BookOpen className="w-12 h-12 text-purple-600" />}
                              <p className="text-sm text-purple-800 font-medium mt-2">{material.type}</p>
                            </div>
                          </div>
                          <div className="p-4">
                            <h3 className="font-bold text-gray-800 mb-2">{material.title}</h3>
                            <Badge className="bg-purple-100 text-purple-800 mb-2">
                              {material.category}
                            </Badge>
                            <p className="text-sm text-gray-600 mb-4">{material.description}</p>
                            <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                <span>{material.duration}</span>
                              </div>
                              <div className="flex items-center">
                                <Eye className="w-4 h-4 mr-1" />
                                <span>{material.views.toLocaleString()}</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <Badge className={`${
                                material.difficulty === 'ADVANCED' ? 'bg-red-100 text-red-800' :
                                material.difficulty === 'INTERMEDIATE' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-green-100 text-green-800'
                              }`}>
                                {material.difficulty}
                              </Badge>
                              <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                                <Play className="w-4 h-4 mr-2" />
                                Access
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Mentor Support Tab */}
            <TabsContent value="mentor-support" className="mt-6">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-white/80 backdrop-blur-md border-purple-100">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center">
                        <MessageCircle className="w-6 h-6 mr-2 text-purple-600" />
                        Mentor Support
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-green-700">2 Mentors Online</span>
                        </div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-bold text-gray-800 mb-4">Your Mentors</h3>
                        <div className="space-y-4">
                          {demoMentorMessages.map((mentor) => (
                            <div key={mentor.id} className="flex items-start space-x-3 p-4 bg-purple-50 rounded-xl">
                              <div className="relative">
                                <div className="text-3xl">{mentor.avatar}</div>
                                {mentor.isOnline && (
                                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                                )}
                              </div>
                              <div className="flex-1">
                                <p className="font-semibold text-gray-800 mb-1">{mentor.mentor}</p>
                                <p className="text-sm text-gray-700 mb-2">{mentor.message}</p>
                                <p className="text-xs text-gray-500">{mentor.time}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <Button variant="outline" className="w-full border-purple-200 hover:bg-purple-50">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Schedule Session
                        </Button>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-4">Quick Actions</h3>
                        <div className="space-y-3">
                          <Button variant="outline" className="w-full justify-start border-purple-200 hover:bg-purple-50">
                            <BookOpen className="w-4 h-4 mr-2" />
                            Browse Study Materials
                          </Button>
                          <Button variant="outline" className="w-full justify-start border-purple-200 hover:bg-purple-50">
                            <Target className="w-4 h-4 mr-2" />
                            Take Mock Test
                          </Button>
                          <Button variant="outline" className="w-full justify-start border-purple-200 hover:bg-purple-50">
                            <BarChart3 className="w-4 h-4 mr-2" />
                            View Progress Report
                          </Button>
                          <Button className="w-full justify-start bg-purple-600 hover:bg-purple-700">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Ask a Question
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>

          {/* Upgrade CTA */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8"
          >
            <Card className="bg-gradient-to-br from-purple-600 to-pink-600 border-purple-200 overflow-hidden">
              <CardContent className="p-8 text-center text-white">
                <div className="flex items-center justify-center mb-4">
                  <Award className="w-12 h-12 mr-3" />
                  <h2 className="text-3xl font-bold">Experience Premium Features</h2>
                </div>
                <p className="text-xl mb-6 text-purple-100">
                  This is just a preview! Upgrade to All-In-One plan to unlock all features and start your learning journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => window.location.href = '/#pricing'}
                    className="bg-white text-purple-600 hover:bg-purple-50 text-lg px-8 py-4"
                  >
                    <Star className="w-5 h-5 mr-2" />
                    Upgrade Now - ৳199/month
                  </Button>
                  <Button 
                    onClick={() => window.location.href = '/'}
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-4"
                  >
                    Back to Home
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}