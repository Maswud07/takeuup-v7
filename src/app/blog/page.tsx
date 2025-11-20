'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import LanguageSelector from '@/components/LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Calendar,
  Clock,
  Eye,
  Heart,
  User,
  Search,
  CheckCircle,
  ArrowRight,
  Star,
  Share2,
  BookmarkPlus
} from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  thumbnail: string;
  content: string;
  tags: string[];
  author: string;
  views: number;
  published: boolean;
  createdAt: string;
  readingTime: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '10 Essential Tips for SSC Mathematics Exam Success',
    thumbnail: '📚',
    content: `Mathematics can be challenging, but with the right approach, you can excel in your SSC exams. Here are 10 essential tips:

## 1. Master the Fundamentals
Focus on understanding core concepts rather than memorizing formulas. Mathematics builds upon previous knowledge, so ensure you have a strong foundation.

## 2. Practice Daily
Solve at least 20 problems every day to build speed and accuracy. Consistency is key to mathematical proficiency.

## 3. Use Previous Years' Questions
Analyze patterns and frequently asked topics from past exams. This helps you understand the exam format and important topics.

## 4. Create a Formula Sheet
Write down all important formulas for quick revision. This saves time during exams and helps with last-minute preparation.

## 5. Time Management
Practice solving problems within the time limit to build exam stamina. Use a timer during practice sessions.

## 6. Work on Weak Areas
Identify topics you struggle with and give them extra attention. Don't avoid difficult topics.

## 7. Group Study
Join study groups to discuss problems and learn from peers. Teaching others helps reinforce your own understanding.

## 8. Use Visual Aids
Draw diagrams for geometry problems and use graphs for functions. Visual representation helps in understanding.

## 9. Review Mistakes
Keep an error log to understand and avoid repeated mistakes. Learn from your errors.

## 10. Stay Healthy
Get enough sleep and eat well before exams for optimal brain function. Physical health affects mental performance.

## Additional Tips:
- **Mock Tests**: Take regular mock tests under exam conditions
- **Calculator Practice**: Master calculator shortcuts and functions
- **Answer Presentation**: Show all steps clearly for partial marks
- **Question Reading**: Read questions carefully to avoid misunderstandings

Remember: Consistency is key to success in mathematics! Start early and practice regularly.`,
    tags: ['SSC', 'Mathematics', 'Exam Tips', 'Study Guide'],
    author: 'TakeUUp Team',
    views: 15420,
    published: true,
    createdAt: '2024-01-15',
    readingTime: '5 min read',
    category: 'exam-tips'
  },
  {
    id: '2',
    title: 'Understanding Physics: Newton\'s Laws Made Simple',
    thumbnail: '⚛',
    content: `Newton's Laws of Motion form the foundation of classical mechanics. Let's break them down in simple terms:

## First Law (Law of Inertia)
An object at rest stays at rest, and an object in motion stays in motion unless acted upon by an external force.

### Key Points:
- Objects tend to maintain their state of motion
- Force is required to change motion
- Mass affects inertia (heavier objects have more inertia)

### Real-World Examples:
- A book on a table stays at rest until you push it
- A moving car continues moving unless brakes are applied
- Satellites maintain orbit due to inertia

## Second Law (F = ma)
The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass.

### Mathematical Expression:
F = ma
Where:
- F = Force (in Newtons)
- m = Mass (in kilograms)
- a = Acceleration (in m/s²)

### Applications:
- Calculating force needed to move objects
- Understanding acceleration in vehicles
- Rocket propulsion calculations

## Third Law (Action-Reaction)
For every action, there is an equal and opposite reaction.

### Key Concepts:
- Forces always occur in pairs
- Action and reaction forces act on different objects
- They are equal in magnitude but opposite in direction

### Examples:
- When you jump, the ground pushes you up
- Rocket moves by expelling gas downward
- Swimming involves pushing water backward

## Exam Tips:
1. **Remember the three laws in order**
2. **Practice numerical problems regularly**
3. **Draw free-body diagrams for force analysis**
4. **Focus on SI units in calculations**
5. **Understand the concepts, don't memorize**

## Common Mistakes to Avoid:
- Confusing mass and weight
- Forgetting to consider all forces
- Incorrect unit conversions
- Not drawing proper diagrams

Understanding these laws will help you solve 80% of physics problems!`,
    tags: ['HSC', 'Physics', 'Newton\'s Laws', 'Mechanics'],
    author: 'Dr. Ahmed Khan',
    views: 23150,
    published: true,
    createdAt: '2024-01-12',
    readingTime: '7 min read',
    category: 'physics'
  },
  {
    id: '3',
    title: 'University Admission Guide: Top 10 Strategies for Success',
    thumbnail: '🎓',
    content: `Getting into your dream university requires strategic planning and consistent effort. Here are the top 10 strategies:

## 1. Start Early
Begin preparation at least 6 months before admission tests. Early preparation gives you time to cover all topics thoroughly.

## 2. Know Your Target Universities
Research admission requirements, cutoff scores, and preferred subjects. Create a list of target universities.

### What to Research:
- Admission requirements
- Previous year cutoff scores
- Subject combinations
- Application deadlines
- Scholarship opportunities

## 3. Create a Study Schedule
Allocate specific times for each subject and stick to it. A structured approach ensures comprehensive coverage.

## 4. Focus on Fundamentals
Master basic concepts before tackling advanced problems. Strong fundamentals make advanced topics easier.

## 5. Practice Mock Tests
Take regular mock tests under exam conditions. This builds familiarity with the exam pattern.

## 6. Develop Time Management
Practice solving problems within time limits. Time management is crucial in competitive exams.

## 7. Build Strong English Skills
Focus on vocabulary, grammar, and comprehension. English is often a deciding factor.

## 8. Stay Updated
Keep track of admission circulars and deadlines. Missing deadlines can cost you opportunities.

## 9. Prepare for Interviews
Practice common interview questions and develop communication skills. Many universities have interview rounds.

## 10. Maintain Health
Balance study with proper rest, nutrition, and exercise. Physical health affects mental performance.

## Subject-Wise Tips:

### Science Students:
- Focus on concepts, numerical problems, and practical applications
- Practice diagram-based questions
- Master laboratory techniques

### Commerce Students:
- Master accounting principles and business mathematics
- Stay updated with current business trends
- Practice case studies

### Arts Students:
- Develop creative thinking and analytical writing skills
- Read widely to improve general knowledge
- Practice essay writing regularly

## Additional Resources:
- **Coaching Centers**: Consider reputable coaching if needed
- **Study Groups**: Collaborate with motivated peers
- **Online Resources**: Use quality educational websites
- **Previous Papers**: Practice with past exam questions

## Success Mindset:
- Stay positive and motivated
- Learn from failures
- Celebrate small achievements
- Maintain consistency

Success comes to those who prepare systematically and stay focused!`,
    tags: ['Admission', 'University', 'Study Strategy', 'Success Tips'],
    author: 'Prof. Fatima Rahman',
    views: 28900,
    published: true,
    createdAt: '2024-01-10',
    readingTime: '10 min read',
    category: 'admission'
  }
];

export default function BlogPage() {
  const [mounted, setMounted] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedPost, setExpandedPost] = useState<string | null>(null);
  const { t } = useLanguage();

  const categories = [
    { id: 'all', name: t('category.all'), icon: '📚' },
    { id: 'exam-tips', name: t('category.examTips'), icon: '📝' },
    { id: 'physics', name: t('category.physics'), icon: '⚛' },
    { id: 'science', name: t('category.science'), icon: '🔬' },
    { id: 'admission', name: t('category.admission'), icon: '🎓' },
    { id: 'job-prep', name: t('category.jobPrep'), icon: '💼' },
    { id: 'digital-learning', name: t('category.digitalLearning'), icon: '💻' },
    { id: 'study-tips', name: t('category.studyTips'), icon: '🎯' }
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              <span className="text-xl">📝</span>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {t('blog.title')}
              </h1>
              <p className="text-xs text-gray-600">{t('blog.subtitle')}</p>
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
          {/* Search and Filter */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Card className="bg-white/80 backdrop-blur-md border-purple-100">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Search className="w-5 h-5 mr-2 text-purple-600" />
                    {t('blog.searchPlaceholder')}
                  </div>
                  <Badge className="bg-purple-100 text-purple-800">
                    {filteredPosts.length} {t('blog.articlesFound')}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-4">
                <div className="relative">
                  <Input
                    placeholder={t('blog.searchPlaceholder')}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-12"
                  />
                  <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  {searchTerm && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSearchTerm('')}
                      className="absolute right-2 top-2 h-6 w-6 p-0 text-gray-400 hover:text-gray-600"
                    >
                      ×
                    </Button>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category.id)}
                      className="text-xs"
                    >
                      {category.icon} {category.name}
                    </Button>
                  ))}
                </div>
                
                {searchTerm && (
                  <div className="text-sm text-gray-600 bg-purple-50 p-2 rounded">
                    {filteredPosts.length} {t('blog.articlesFound')} "{searchTerm}"
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Blog Posts */}
          <div className="space-y-6">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white/80 backdrop-blur-md border-purple-100 hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <span className="text-4xl">{post.thumbnail}</span>
                        <div>
                          <CardTitle className="text-2xl leading-tight mb-2">
                            {post.title}
                          </CardTitle>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <User className="w-4 h-4 mr-1" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              <span>{post.createdAt}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              <span>{post.readingTime}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-green-100 text-green-800">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Published
                        </Badge>
                        <Badge variant="outline" className="text-purple-600 border-purple-200">
                          {post.category.replace('-', ' ')}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="prose max-w-none">
                      {expandedPost === post.id ? (
                        <div 
                          className="text-gray-700 leading-relaxed"
                          dangerouslySetInnerHTML={{ 
                            __html: post.content.replace(/\n/g, '<br />').replace(/## (.*)/g, '<h2 class="text-xl font-bold mt-4 mb-2">$1</h2>').replace(/### (.*)/g, '<h3 class="text-lg font-semibold mt-3 mb-2">$1</h3>') 
                          }}
                        />
                      ) : (
                        <div className="text-gray-600 line-clamp-3">
                          {post.content.substring(0, 200)}...
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-2 my-4">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs hover:bg-purple-100 transition-colors">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-purple-100">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          <span>{post.views.toLocaleString()} {t('blog.views')}</span>
                        </div>
                        <div className="flex items-center">
                          <Heart className="w-4 h-4 mr-1 text-red-500" />
                          <span>{Math.floor(post.views / 100)}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
                          className="text-purple-600 hover:text-purple-700"
                        >
                          {expandedPost === post.id ? t('blog.showLess') : t('blog.readMore')}
                          <ArrowRight className={`w-4 h-4 ml-1 transition-transform ${expandedPost === post.id ? 'rotate-90' : ''}`} />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-700">
                          <Share2 className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-700">
                          <BookmarkPlus className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{t('blog.noArticles')}</h3>
              <p className="text-gray-600">{t('blog.tryDifferent')}</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}