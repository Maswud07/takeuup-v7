'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import LanguageSelector from '@/components/LanguageSelector';
import Dashboard from '@/components/Dashboard';
import QuizInterface from '@/components/QuizInterface';
import QuizCategorySelector from '@/components/QuizCategorySelector';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  BookOpen, 
  Trophy, 
  Users, 
  Star, 
  Zap, 
  Target,
  Brain,
  Award,
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowRight,
  Play,
  Sparkles,
  GraduationCap,
  Lightbulb,
  Rocket,
  Heart,
  Book,
  MessageCircle
} from 'lucide-react';

type PageView = 'landing' | 'dashboard' | 'quiz' | 'category-select';

export default function TakeUUp() {
  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageView>('landing');
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('SSC');
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const { t, language } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Show Quiz Category Selector
  if (currentPage === 'category-select') {
    const handleCategorySelect = (category: string, subject?: string) => {
      setSelectedCategory(category);
      if (subject) {
        setSelectedSubject(subject);
        setShowQuiz(true);
        setCurrentPage('quiz');
      }
    };

    const handleBack = () => {
      setCurrentPage('landing');
      setSelectedSubject(null);
    };

    return (
      <QuizCategorySelector
        onCategorySelect={handleCategorySelect}
        onBack={handleBack}
      />
    );
  }

  // Show Quiz Interface
  if (showQuiz) {
    const handleQuizComplete = (results: any) => {
      console.log('Quiz completed:', results);
      setShowQuiz(false);
    };

    const handleQuizExit = () => {
      setShowQuiz(false);
    };

    return (
      <QuizInterface
        category={selectedCategory}
        subject={selectedSubject}
        onComplete={handleQuizComplete}
        onExit={handleQuizExit}
      />
    );
  }

  // Show Dashboard
  if (currentPage === 'dashboard') {
    return <Dashboard />;
  }

  // Show Landing Page
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: t('features.dailyQuizzes'),
      description: "Practice MCQs tailored for SSC, HSC, Admission & Job preparation",
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: t('features.leaderboard'),
      description: "Compete with students nationwide and track your ranking",
      color: "from-yellow-400 to-orange-400"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: t('features.aiSuggestions'),
      description: "Get personalized learning recommendations powered by AI",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: t('features.studyMaterials'),
      description: "Access comprehensive notes and advanced preparation materials",
      color: "from-green-400 to-emerald-400"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: t('features.mentorSupport'),
      description: "Get expert advice from experienced mentors",
      color: "from-indigo-400 to-purple-400"
    },
    {
      icon: <BookOpen className="w-6 h-6 mr-2" />,
      title: t('features.blogNewsletter'),
      description: "Read educational articles and subscribe to updates",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: t('features.progressTracking'),
      description: "Monitor your performance with detailed analytics",
      color: "from-red-400 to-pink-400"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Mock Tests",
      description: "Practice with realistic exam simulations and improve your timing",
      color: "from-green-400 to-teal-400"
    }
  ];

  const pricingPlans = [
    {
      name: t('pricing.free'),
      price: "৳0",
      description: "Perfect for getting started",
      features: [
        "3 quizzes per day",
        "10 questions per quiz",
        "Score viewing only",
        "Daily blog access",
        "Basic progress tracking"
      ],
      notIncluded: [
        "Leaderboard access",
        "AI suggestions",
        "Advanced analytics",
        "Study materials"
      ],
      color: "from-gray-100 to-gray-200",
      textColor: "text-gray-800",
      buttonColor: "bg-gray-600 hover:bg-gray-700"
    },
    {
      name: t('pricing.premium'),
      price: "৳99",
      description: "Most popular for students",
      features: [
        "30 questions per quiz",
        "3 quiz sessions per day",
        "Leaderboard access",
        "AI learning suggestions",
        "Progress analytics",
        "Advanced study materials"
      ],
      notIncluded: [
        "Mentor guidance",
        "Newsletter subscription",
        "Mock test library"
      ],
      color: "from-purple-100 to-pink-100",
      textColor: "text-purple-800",
      buttonColor: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700",
      popular: true
    },
    {
      name: t('pricing.allInOne'),
      price: "৳199",
      description: "Complete preparation package",
      features: [
        "All premium features",
        "Mentor guidance",
        "Advanced materials",
        "Newsletter subscription",
        "Mock test library",
        "Topic-wise breakdown"
      ],
      notIncluded: [],
      color: "from-yellow-100 to-orange-100",
      textColor: "text-yellow-800",
      buttonColor: "bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700"
    }
  ];

  const testimonials = [
    {
      name: "Fatima Rahman",
      role: "HSC Student",
      content: "TakeUUp helped me improve my exam scores significantly. The AI suggestions are spot-on!",
      avatar: "👩‍🎓",
      rating: 5
    },
    {
      name: "Rahim Khan",
      role: "University Admission",
      content: "The daily quizzes kept me consistent. I ranked 3rd in the leaderboard last month!",
      avatar: "👨‍🎓",
      rating: 5
    },
    {
      name: "Nusrat Jahan",
      role: "Job Seeker",
      content: "Best platform for BCS and job preparation. The study materials are comprehensive.",
      avatar: "👩‍💼",
      rating: 5
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
          className="absolute top-40 right-10 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-20 left-1/2 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
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
            <GraduationCap className="w-6 h-6 text-white" />
          </motion.div>
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            TakeUUp
          </span>
        </div>
        
        <div className="flex items-center space-x-4">
          <LanguageSelector />
          <div className="hidden md:flex items-center space-x-8">
            <a href="/blog" className="text-gray-600 hover:text-purple-600 transition-colors">{t('nav.blog')}</a>
            <a href="/newsletter" className="text-gray-600 hover:text-purple-600 transition-colors">{t('nav.newsletter')}</a>
            <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">{t('nav.features')}</a>
            <a href="#pricing" className="text-gray-600 hover:text-purple-600 transition-colors">{t('nav.pricing')}</a>
            <a href="#testimonials" className="text-gray-600 hover:text-purple-600 transition-colors">{t('nav.testimonials')}</a>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            className="text-purple-600 hover:text-purple-700"
            onClick={() => setCurrentPage('dashboard')}
          >
            Dashboard
          </Button>
          <Button 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            onClick={() => setCurrentPage('category-select')}
          >
            Try Quiz
          </Button>
          <Button 
            variant="outline"
            className="border-yellow-400 text-yellow-600 hover:bg-yellow-50 px-4 py-2 text-sm"
            onClick={() => window.location.href = '/premium-demo'}
          >
            <Star className="w-4 h-4 mr-2" />
            Try Premium Demo
          </Button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border-purple-200">
                <Sparkles className="w-4 h-4 mr-2" />
                #1 Quiz Platform in Bangladesh
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-600 bg-clip-text text-transparent">
                  {t('hero.title')}
                </span>
                <br />
                <span className="text-gray-800">{t('hero.subtitle')}</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t('hero.description')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8 items-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-6"
                  onClick={() => setCurrentPage('category-select')}
                >
                  <Play className="w-5 h-5 mr-2" />
                  {t('hero.startLearning')}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-6 border-purple-200 hover:bg-purple-50"
                  onClick={() => setCurrentPage('dashboard')}
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  {t('hero.viewDashboard')}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 py-6 border-yellow-400 text-yellow-600 hover:bg-yellow-50 hover:text-yellow-700"
                  onClick={() => window.location.href = '/premium-demo'}
                >
                  <Star className="w-5 h-5 mr-2" />
                  {t('hero.tryPremium')}
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-purple-600" />
                  <span className="font-semibold">50,000+</span> {t('stats.students')}
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 mr-2 text-yellow-500" />
                  <span className="font-semibold">4.9/5</span> {t('stats.rating')}
                </div>
                <div className="flex items-center">
                  <Trophy className="w-5 h-5 mr-2 text-purple-600" />
                  <span className="font-semibold">1M+</span> {t('stats.quizzes')}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="relative z-10"
                >
                  <Card className="bg-white/90 backdrop-blur-md shadow-2xl border-purple-100 overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-gray-800">Daily Challenge</h3>
                        <Badge className="bg-green-100 text-green-800">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Active
                        </Badge>
                      </div>
                      
                      <div className="space-y-4">
                        <div 
                          className="flex items-center justify-between p-4 bg-purple-50 rounded-xl cursor-pointer hover:bg-purple-100 transition-colors"
                          onClick={() => {setSelectedCategory('SSC'); setCurrentPage('category-select');}}
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                              <Brain className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <p className="font-semibold text-gray-800">Mathematics</p>
                              <p className="text-sm text-gray-600">SSC Preparation</p>
                            </div>
                          </div>
                          <ArrowRight className="w-5 h-5 text-purple-600" />
                        </div>

                        <div 
                          className="flex items-center justify-between p-4 bg-pink-50 rounded-xl cursor-pointer hover:bg-pink-100 transition-colors"
                          onClick={() => {setSelectedCategory('HSC'); setCurrentPage('category-select');}}
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl flex items-center justify-center">
                              <Lightbulb className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <p className="font-semibold text-gray-800">Physics</p>
                              <p className="text-sm text-gray-600">HSC Preparation</p>
                            </div>
                          </div>
                          <ArrowRight className="w-5 h-5 text-pink-600" />
                        </div>

                        <div 
                          className="flex items-center justify-between p-4 bg-yellow-50 rounded-xl cursor-pointer hover:bg-yellow-100 transition-colors"
                          onClick={() => {setSelectedCategory('ADMISSION'); setShowQuiz(true);}}
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                              <Target className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <p className="font-semibold text-gray-800">General Science</p>
                              <p className="text-sm text-gray-600">Admission Preparation</p>
                            </div>
                          </div>
                          <ArrowRight className="w-5 h-5 text-yellow-600" />
                        </div>
                      </div>

                      <div className="mt-6 p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-purple-800 font-medium">Your Streak</p>
                            <p className="text-2xl font-bold text-purple-900">7 Days 🔥</p>
                          </div>
                          <div>
                            <p className="text-sm text-pink-800 font-medium">Points</p>
                            <p className="text-2xl font-bold text-pink-900">2,450</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <Star className="w-10 h-10 text-white" />
                </motion.div>

                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg"
                >
                  <Rocket className="w-8 h-8 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-6 py-20 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border-purple-200">
              <Zap className="w-4 h-4 mr-2" />
              Features
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Everything You Need
              </span>
              <br />
              <span className="text-gray-800">to Excel</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive learning tools designed specifically for Bangladeshi students
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-white/80 backdrop-blur-md border-purple-100 hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border-purple-200">
              <Award className="w-4 h-4 mr-2" />
              Pricing Plans
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Choose Your Plan
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flexible pricing options designed for every student's needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <Card className={`h-full bg-gradient-to-br ${plan.color} border-purple-200 hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />
                  <CardContent className="relative p-8">
                    <div className="text-center mb-8">
                      <h3 className={`text-2xl font-bold ${plan.textColor} mb-2`}>{plan.name}</h3>
                      <div className="mb-4">
                        <span className={`text-5xl font-bold ${plan.textColor}`}>{plan.price}</span>
                        <span className={`text-lg ${plan.textColor}`}>/month</span>
                      </div>
                      <p className={`${plan.textColor}`}>{plan.description}</p>
                    </div>

                    <div className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                      {plan.notIncluded.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3 opacity-50">
                          <div className="w-5 h-5 rounded-full border-2 border-gray-400 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button className={`w-full ${plan.buttonColor} text-white py-6 text-lg font-semibold`}>
                      {plan.name === 'Free' ? t('pricing.startFree') : `${t('pricing.upgrade')} ${plan.name}`}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative z-10 px-6 py-20 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border-purple-200">
              <Heart className="w-4 h-4 mr-2" />
              Success Stories
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                What Our Students
              </span>
              <br />
              <span className="text-gray-800">Are Saying</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-white/80 backdrop-blur-md border-purple-100 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="text-4xl mr-4">{testimonial.avatar}</div>
                      <div>
                        <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-gray-700 italic">"{testimonial.content}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Ready to Excel in Your Studies?
              </h2>
              <p className="text-xl mb-8 text-purple-100">
                Join thousands of Bangladeshi students achieving their academic dreams
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-purple-600 hover:bg-purple-50 text-lg px-8 py-6"
                  onClick={() => setShowQuiz(true)}
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Start Free Trial
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6"
                  onClick={() => setCurrentPage('dashboard')}
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  View Dashboard
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-white/80 backdrop-blur-md border-t border-purple-100">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  TakeUUp
                </span>
              </div>
              <p className="text-gray-600">
                Empowering Bangladeshi students to achieve academic excellence through innovative learning.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-purple-600 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-purple-600 transition-colors">Study Materials</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Mock Tests</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">AI Suggestions</a></li>
                <li><a href="#blog" className="hover:text-purple-600 transition-colors">Blog</a></li>
                <li><a href="#newsletter" className="hover:text-purple-600 transition-colors">Newsletter</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Help Center</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-purple-600 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-purple-100 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2024 TakeUUp. All rights reserved. Made with ❤️ for Bangladeshi students.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}