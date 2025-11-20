'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Brain, 
  Trophy, 
  Target,
  TrendingUp,
  Clock,
  BookOpen,
  Zap,
  Award,
  Calendar,
  BarChart3,
  Users,
  Star,
  Flame,
  ArrowRight,
  Play,
  Settings,
  Bell,
  User,
  LogOut
} from 'lucide-react';

export default function Dashboard() {
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('SSC');
  const [userStats, setUserStats] = useState({
    streak: 7,
    totalPoints: 2450,
    quizzesTaken: 23,
    averageScore: 85,
    rank: 12,
    todayQuizzes: 1,
    maxQuizzes: 3
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const categories = [
    { id: 'SSC', name: 'SSC', icon: '📚', color: 'from-blue-400 to-cyan-400', description: 'Secondary School Certificate' },
    { id: 'HSC', name: 'HSC', icon: '🎓', color: 'from-purple-400 to-pink-400', description: 'Higher Secondary Certificate' },
    { id: 'ADMISSION', name: 'Admission', icon: '🏫', color: 'from-green-400 to-emerald-400', description: 'University Admission' },
    { id: 'JOB', name: 'Job', icon: '💼', color: 'from-orange-400 to-red-400', description: 'Job Preparation' }
  ];

  const recentQuizzes = [
    { id: 1, category: 'SSC', score: 85, totalQuestions: 10, date: '2 hours ago', accuracy: 85 },
    { id: 2, category: 'HSC', score: 90, totalQuestions: 10, date: '5 hours ago', accuracy: 90 },
    { id: 3, category: 'ADMISSION', score: 75, totalQuestions: 10, date: '1 day ago', accuracy: 75 }
  ];

  const leaderboard = [
    { rank: 1, name: 'Rahim Khan', score: 9850, avatar: '👨‍🎓' },
    { rank: 2, name: 'Fatima Rahman', score: 9720, avatar: '👩‍🎓' },
    { rank: 3, name: 'Karim Ahmed', score: 9650, avatar: '👨‍💼' },
    { rank: 12, name: 'You', score: 2450, avatar: '🎯', isCurrentUser: true }
  ];

  const aiSuggestions = [
    {
      title: 'Focus on Algebra',
      content: 'Your recent performance shows room for improvement in algebraic expressions. Practice 15 minutes daily.',
      type: 'WEAK_TOPIC',
      icon: <Brain className="w-5 h-5" />
    },
    {
      title: 'Great Progress!',
      content: 'You\'ve maintained a 7-day streak! Keep up the excellent work.',
      type: 'MOTIVATION',
      icon: <Flame className="w-5 h-5" />
    }
  ];

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

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative z-10 flex justify-between items-center px-6 py-4 bg-white/80 backdrop-blur-md border-b border-purple-100"
      >
        <div className="flex items-center space-x-2">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center"
          >
            <Target className="w-6 h-6 text-white" />
          </motion.div>
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Dashboard
          </span>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-purple-600">
            <Bell className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm" className="text-purple-600">
            <Settings className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm" className="text-purple-600">
            <User className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm" className="text-red-600">
            <LogOut className="w-5 h-5" />
          </Button>
        </div>
      </motion.nav>

      <div className="relative z-10 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold mb-2">
              Welcome back, <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Student!</span>
            </h1>
            <p className="text-xl text-gray-600">Ready to continue your learning journey?</p>
          </motion.div>

          {/* Stats Overview */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
          >
            <Card className="bg-white/80 backdrop-blur-md border-purple-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Flame className="w-8 h-8 text-orange-500" />
                  <Badge className="bg-orange-100 text-orange-800">Streak</Badge>
                </div>
                <p className="text-3xl font-bold text-gray-800">{userStats.streak}</p>
                <p className="text-sm text-gray-600">Days in a row</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-md border-purple-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Star className="w-8 h-8 text-yellow-500" />
                  <Badge className="bg-yellow-100 text-yellow-800">Points</Badge>
                </div>
                <p className="text-3xl font-bold text-gray-800">{userStats.totalPoints.toLocaleString()}</p>
                <p className="text-sm text-gray-600">Total earned</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-md border-purple-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Target className="w-8 h-8 text-green-500" />
                  <Badge className="bg-green-100 text-green-800">Score</Badge>
                </div>
                <p className="text-3xl font-bold text-gray-800">{userStats.averageScore}%</p>
                <p className="text-sm text-gray-600">Average</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-md border-purple-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Trophy className="w-8 h-8 text-purple-500" />
                  <Badge className="bg-purple-100 text-purple-800">Rank</Badge>
                </div>
                <p className="text-3xl font-bold text-gray-800">#{userStats.rank}</p>
                <p className="text-sm text-gray-600">Leaderboard</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Categories & Quiz */}
            <div className="lg:col-span-2 space-y-8">
              {/* Daily Quiz Progress */}
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="bg-white/80 backdrop-blur-md border-purple-100">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center">
                        <Calendar className="w-6 h-6 mr-2 text-purple-600" />
                        Daily Quiz Progress
                      </span>
                      <Badge className="bg-purple-100 text-purple-800">
                        {userStats.todayQuizzes}/{userStats.maxQuizzes} Completed
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Progress 
                      value={(userStats.todayQuizzes / userStats.maxQuizzes) * 100} 
                      className="mb-4 h-3"
                    />
                    <p className="text-sm text-gray-600 mb-4">
                      Complete {userStats.maxQuizzes - userStats.todayQuizzes} more quizzes to reach your daily goal!
                    </p>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                      <Play className="w-5 h-5 mr-2" />
                      Start New Quiz
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Categories */}
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="bg-white/80 backdrop-blur-md border-purple-100">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BookOpen className="w-6 h-6 mr-2 text-purple-600" />
                      Choose Category
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {categories.map((category) => (
                        <motion.div
                          key={category.id}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                            selectedCategory === category.id
                              ? 'border-purple-500 bg-purple-50'
                              : 'border-purple-200 bg-white hover:border-purple-300'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-2xl`}>
                              {category.icon}
                            </div>
                            <div>
                              <h3 className="font-bold text-gray-800">{category.name}</h3>
                              <p className="text-xs text-gray-600">{category.description}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Recent Quizzes */}
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="bg-white/80 backdrop-blur-md border-purple-100">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="w-6 h-6 mr-2 text-purple-600" />
                      Recent Quizzes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentQuizzes.map((quiz) => (
                        <div key={quiz.id} className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                              <Brain className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <p className="font-semibold text-gray-800">{quiz.category}</p>
                              <p className="text-sm text-gray-600">{quiz.date}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-purple-600">{quiz.score}/{quiz.totalQuestions * 10}</p>
                            <p className="text-sm text-gray-600">{quiz.accuracy}% accuracy</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Right Column - Leaderboard & AI Suggestions */}
            <div className="space-y-8">
              {/* Leaderboard */}
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="bg-white/80 backdrop-blur-md border-purple-100">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Trophy className="w-6 h-6 mr-2 text-purple-600" />
                      Leaderboard
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {leaderboard.map((entry) => (
                        <div
                          key={entry.rank}
                          className={`flex items-center justify-between p-3 rounded-xl ${
                            entry.isCurrentUser
                              ? 'bg-purple-100 border-2 border-purple-300'
                              : 'bg-purple-50'
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
                            <p className="text-xs text-gray-600">points</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full mt-4 border-purple-200 hover:bg-purple-50">
                      View Full Leaderboard
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* AI Suggestions */}
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="bg-white/80 backdrop-blur-md border-purple-100">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="w-6 h-6 mr-2 text-purple-600" />
                      AI Suggestions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {aiSuggestions.map((suggestion, index) => (
                        <div key={index} className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                          <div className="flex items-start space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                              {suggestion.icon}
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-1">{suggestion.title}</h4>
                              <p className="text-sm text-gray-600">{suggestion.content}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full mt-4 border-purple-200 hover:bg-purple-50">
                      Get More Suggestions
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}