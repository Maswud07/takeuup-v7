'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import LanguageSelector from '@/components/LanguageSelector';
import { useLanguage, type Language } from '@/contexts/LanguageContext';
import { 
  Mail, 
  Send, 
  Users, 
  Clock, 
  CheckCircle, 
  Star, 
  Sparkles,
  TrendingUp
} from 'lucide-react';

interface Newsletter {
  id: string;
  title: string;
  description: string;
  frequency: 'DAILY' | 'WEEKLY' | 'MONTHLY';
  subscriberCount: number;
  isActive: boolean;
  content?: string[];
  benefits?: string[];
}

const newsletters: Newsletter[] = [
  {
    id: '1',
    title: 'Daily Study Tips',
    description: 'Get daily bite-sized study tips, exam strategies, and motivational content delivered to your inbox every morning. Perfect for building consistent study habits.',
    frequency: 'DAILY',
    subscriberCount: 15420,
    isActive: true,
    content: [
      'Quick study tips and tricks',
      'Daily motivational quotes',
      'Exam preparation strategies',
      'Subject-specific advice',
      'Time management techniques'
    ],
    benefits: [
      'Build consistent study habits',
      'Stay motivated every day',
      'Quick actionable tips',
      'Start your day right'
    ]
  },
  {
    id: '2',
    title: 'Weekly Progress Report',
    description: 'Comprehensive weekly roundup of your learning progress, upcoming exam dates, and personalized recommendations based on your performance.',
    frequency: 'WEEKLY',
    subscriberCount: 8750,
    isActive: true,
    content: [
      'Weekly learning summary',
      'Performance analytics',
      'Upcoming exam alerts',
      'Study recommendations',
      'Progress tracking'
    ],
    benefits: [
      'Track your progress',
      'Get personalized insights',
      'Never miss important dates',
      'Improve study efficiency'
    ]
  },
  {
    id: '3',
    title: 'Monthly Newsletter',
    description: 'In-depth monthly analysis of educational trends, expert interviews, success stories, and exclusive study resources.',
    frequency: 'MONTHLY',
    subscriberCount: 5320,
    isActive: true,
    content: [
      'Educational trend analysis',
      'Expert interviews',
      'Success stories',
      'Exclusive resources',
      'Study strategies'
    ],
    benefits: [
      'Deep educational insights',
      'Learn from experts',
      'Get inspired by success',
      'Access exclusive content'
    ]
  },
  {
    id: '4',
    title: 'SSC Exam Special',
    description: 'Focused content for SSC candidates including subject-wise tips, important questions, exam schedules, and result updates.',
    frequency: 'WEEKLY',
    subscriberCount: 12100,
    isActive: true,
    content: [
      'SSC subject tips',
      'Important questions',
      'Exam schedules',
      'Result updates',
      'Study materials'
    ],
    benefits: [
      'SSC-focused content',
      'Exam schedule alerts',
      'Important question highlights',
      'Result notifications'
    ]
  },
  {
    id: '5',
    title: 'HSC Preparation Guide',
    description: 'Advanced preparation materials for HSC students covering science, commerce, and arts streams with practical tips and resources.',
    frequency: 'WEEKLY',
    subscriberCount: 9800,
    isActive: true,
    content: [
      'Stream-specific content',
      'Advanced study materials',
      'Practical tips',
      'Resource recommendations',
      'Exam strategies'
    ],
    benefits: [
      'Stream-specific guidance',
      'Advanced preparation',
      'Practical study tips',
      'Resource recommendations'
    ]
  },
  {
    id: '6',
    title: 'Admission Alert',
    description: 'Timely notifications about university admission deadlines, requirements, preparation strategies, and scholarship opportunities.',
    frequency: 'DAILY',
    subscriberCount: 18900,
    isActive: true,
    content: [
      'Admission deadlines',
      'University requirements',
      'Scholarship opportunities',
      'Preparation strategies',
      'Application tips'
    ],
    benefits: [
      'Never miss deadlines',
      'Scholarship alerts',
      'Application guidance',
      'University insights'
    ]
  },
  {
    id: '7',
    title: 'Job & Career Insights',
    description: 'Career guidance, job opportunities, BCS updates, bank job notifications, and professional development tips for students and graduates.',
    frequency: 'WEEKLY',
    subscriberCount: 15600,
    isActive: true,
    content: [
      'Job notifications',
      'Career guidance',
      'BCS updates',
      'Bank job alerts',
      'Professional development'
    ],
    benefits: [
      'Career opportunities',
      'Professional growth tips',
      'Job market insights',
      'Skill development'
    ]
  },
  {
    id: '8',
    title: 'Success Stories',
    description: 'Inspiring stories from successful students, exam toppers, and professionals sharing their journey and study strategies.',
    frequency: 'MONTHLY',
    subscriberCount: 7400,
    isActive: true,
    content: [
      'Exam topper stories',
      'Success journeys',
      'Study strategies',
      'Motivational content',
      'Interview experiences'
    ],
    benefits: [
      'Get inspired daily',
      'Learn from achievers',
      'Real success stories',
      'Motivational boost'
    ]
  },
  {
    id: '9',
    title: 'Quick Quiz Challenge',
    description: 'Daily quiz questions with solutions to test your knowledge and prepare for competitive exams in a fun, engaging way.',
    frequency: 'DAILY',
    subscriberCount: 22100,
    isActive: true,
    content: [
      'Daily quiz questions',
      'Instant solutions',
      'Topic-wise challenges',
      'Performance tracking',
      'Competitive fun'
    ],
    benefits: [
      'Daily practice',
      'Knowledge testing',
      'Fun learning',
      'Competitive preparation'
    ]
  }
];

export default function NewsletterPage() {
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState('');
  const [selectedNewsletters, setSelectedNewsletters] = useState<string[]>([]);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [expandedNewsletter, setExpandedNewsletter] = useState<string | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const handleNewsletterToggle = (newsletterId: string) => {
    setSelectedNewsletters(prev => 
      prev.includes(newsletterId) 
        ? prev.filter(id => id !== newsletterId)
        : [...prev, newsletterId]
    );
  };

  const handleSubscribeAll = () => {
    setSelectedNewsletters(newsletters.map(n => n.id));
  };

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

      {/* Header */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative z-10 flex justify-between items-center px-6 py-4 bg-white/80 backdrop-blur-md border-b border-purple-100"
      >
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {t('newsletter.title')}
              </h1>
              <p className="text-xs text-gray-600">{t('newsletter.subtitle')}</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <LanguageSelector />
          <Button variant="ghost" size="sm" className="text-purple-600" onClick={() => window.location.href = '/'}>
            {t('nav.backToHome')}
          </Button>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-10 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="mb-6">
              <Sparkles className="w-16 h-16 mx-auto text-purple-600 mb-4" />
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t('newsletter.stayUpdated')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('newsletter.description')}
            </p>
          </motion.div>

          {/* Subscription Form */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <Card className="bg-white/90 backdrop-blur-md border-purple-100 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <Mail className="w-6 h-6 mr-2 text-purple-600" />
                  {t('newsletter.subscribe')}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubscribe} className="space-y-6">
                  <div className="max-w-md mx-auto">
                    <Input
                      type="email"
                      placeholder={t('newsletter.emailPlaceholder')}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-12 text-lg"
                      required
                    />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      type="submit" 
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8"
                      disabled={isSubscribed}
                    >
                      {isSubscribed ? (
                        <>
                          <CheckCircle className="w-5 h-5 mr-2" />
                          {t('newsletter.subscribed')}
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          {t('newsletter.subscribeSelected')}
                        </>
                      )}
                    </Button>
                    
                    <Button 
                      type="button"
                      variant="outline"
                      size="lg"
                      onClick={handleSubscribeAll}
                      className="px-8"
                    >
                      <Star className="w-5 h-5 mr-2" />
                      {t('newsletter.subscribeAll')}
                    </Button>
                  </div>
                </form>

                <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>No spam, ever</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>{t('newsletter.unsubscribe')}</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>{t('newsletter.freeContent')}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Newsletter Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsletters.map((newsletter, index) => (
              <motion.div
                key={newsletter.id}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`bg-white/80 backdrop-blur-md border-purple-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer ${
                  selectedNewsletters.includes(newsletter.id) ? 'ring-2 ring-purple-300' : ''
                }`}
                  onClick={() => handleNewsletterToggle(newsletter.id)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Badge className={newsletter.isActive ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}>
                          {newsletter.isActive ? 'Active' : 'Inactive'}
                        </Badge>
                        <Badge variant="outline" className="text-purple-600 border-purple-200">
                          {newsletter.frequency}
                        </Badge>
                      </div>
                      <div className="flex items-center">
                        {selectedNewsletters.includes(newsletter.id) ? (
                          <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                        ) : (
                          <div className="w-6 h-6 border-2 border-gray-300 rounded-full"></div>
                        )}
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight mb-2">
                      {newsletter.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {newsletter.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="w-4 h-4 mr-1" />
                        <span>{newsletter.subscriberCount.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center text-xs text-gray-400">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{newsletter.frequency}</span>
                      </div>
                    </div>

                    {expandedNewsletter === newsletter.id && newsletter.content && (
                      <div className="mb-4 p-4 bg-purple-50 rounded-lg">
                        <h4 className="font-semibold text-purple-800 mb-2">What you'll get:</h4>
                        <ul className="space-y-1">
                          {newsletter.content.map((item, idx) => (
                            <li key={idx} className="text-sm text-purple-700 flex items-center">
                              <ArrowRight className="w-3 h-3 mr-2" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex gap-2">
                      <Button 
                        className={`flex-1 ${
                          selectedNewsletters.includes(newsletter.id) 
                            ? 'bg-green-600 hover:bg-green-700' 
                            : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                        }`}
                        size="sm"
                      >
                        {selectedNewsletters.includes(newsletter.id) ? 'Selected' : 'Select'}
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setExpandedNewsletter(expandedNewsletter === newsletter.id ? null : newsletter.id)}
                      >
                        {expandedNewsletter === newsletter.id ? t('newsletter.hide') : t('newsletter.details')}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16"
          >
            <Card className="bg-white/80 backdrop-blur-md border-purple-100">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-purple-800 mb-2">
                      {newsletters.reduce((sum, n) => sum + n.subscriberCount, 0).toLocaleString()}
                    </h3>
                    <p className="text-gray-600">Total Subscribers</p>
                  </div>
                  <div>
                    <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-8 h-8 text-pink-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-pink-800 mb-2">
                      {newsletters.length}
                    </h3>
                    <p className="text-gray-600">Newsletter Options</p>
                  </div>
                  <div>
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-yellow-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-yellow-800 mb-2">
                      98%
                    </h3>
                    <p className="text-gray-600">Satisfaction Rate</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}