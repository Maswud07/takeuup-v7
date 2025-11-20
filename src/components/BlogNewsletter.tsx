import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Calendar,
  Clock,
  Eye,
  Heart,
  Share2,
  Search,
  User,
  Users,
  MessageCircle,
  Bell,
  BookOpen,
  Star,
  ChevronRight,
  Mail,
  Send,
  CheckCircle,
  ArrowRight
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

interface Newsletter {
  id: string;
  title: string;
  description: string;
  frequency: 'DAILY' | 'WEEKLY' | 'MONTHLY';
  subscriberCount: number;
  isActive: boolean;
}

export default function BlogNewsletter() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('blog');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: '10 Essential Tips for SSC Mathematics Exam Success',
      thumbnail: '📚',
      content: `Mathematics can be challenging, but with the right approach, you can excel in your SSC exams. Here are 10 essential tips:

1. **Master the Fundamentals**: Focus on understanding core concepts rather than memorizing formulas.
2. **Practice Daily**: Solve at least 20 problems every day to build speed and accuracy.
3. **Use Previous Years' Questions**: Analyze patterns and frequently asked topics from past exams.
4. **Create a Formula Sheet**: Write down all important formulas for quick revision.
5. **Time Management**: Practice solving problems within the time limit to build exam stamina.
6. **Work on Weak Areas**: Identify topics you struggle with and give them extra attention.
7. **Group Study**: Join study groups to discuss problems and learn from peers.
8. **Use Visual Aids**: Draw diagrams for geometry problems and use graphs for functions.
9. **Review Mistakes**: Keep an error log to understand and avoid repeated mistakes.
10. **Stay Healthy**: Get enough sleep and eat well before exams for optimal brain function.

Remember: Consistency is key to success in mathematics!`,
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

**First Law (Law of Inertia)**
An object at rest stays at rest, and an object in motion stays in motion unless acted upon by an external force.

**Second Law (F = ma)**
The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass.

**Third Law (Action-Reaction)**
For every action, there is an equal and opposite reaction.

**Real-World Examples:**
- A book on a table stays at rest until you push it
- Heavier objects require more force to accelerate
- When you jump, the ground pushes you up
- A rocket moves by expelling gas downward

**Exam Tips:**
- Remember the three laws in order
- Practice numerical problems regularly
- Draw free-body diagrams for force analysis
- Focus on SI units in calculations

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

1. **Start Early**: Begin preparation at least 6 months before admission tests.

2. **Know Your Target Universities**: Research admission requirements, cutoff scores, and preferred subjects.

3. **Create a Study Schedule**: Allocate specific times for each subject and stick to it.

4. **Focus on Fundamentals**: Master basic concepts before tackling advanced problems.

5. **Practice Mock Tests**: Take regular mock tests under exam conditions.

6. **Develop Time Management**: Practice solving problems within time limits.

7. **Build Strong English Skills**: Focus on vocabulary, grammar, and comprehension.

8. **Stay Updated**: Keep track of admission circulars and deadlines.

9. **Prepare for Interviews**: Practice common interview questions and develop communication skills.

10. **Maintain Health**: Balance study with proper rest, nutrition, and exercise.

**Subject-Wise Tips:**
- **Science**: Focus on concepts, numerical problems, and practical applications
- **Commerce**: Master accounting principles and business mathematics
- **Arts**: Develop creative thinking and analytical writing skills

Success comes to those who prepare systematically and stay focused!`,
      tags: ['Admission', 'University', 'Study Strategy', 'Success Tips'],
      author: 'Prof. Fatima Rahman',
      views: 28900,
      published: true,
      createdAt: '2024-01-10',
      readingTime: '10 min read',
      category: 'admission'
    },
    {
      id: '4',
      title: 'BCS Preparation: Complete Study Plan for 2024',
      thumbnail: '💼',
      content: `BCS preparation requires a comprehensive approach covering multiple subjects. Here's your complete study plan:

**Subject Breakdown:**
- **Bangla**: 40 marks - Focus on grammar, literature, and composition
- **English**: 35 marks - Vocabulary, grammar, and comprehension
- **General Mathematics**: 20 marks - Arithmetic, algebra, geometry
- **General Science**: 35 marks - Physics, chemistry, biology, botany
- **Bangladesh Affairs**: 10 marks - Current events, history, geography
- **International Affairs**: 10 marks - Global events, organizations
- **Computer & ICT**: 15 marks - Basic computer knowledge
- **Mental Ability**: 15 marks - Reasoning, pattern recognition
- **Ethics, Values & Good Governance**: 10 marks - Moral reasoning
- **Geography** (for specific cadres): 10 marks

**Study Strategy:**
1. **Daily Routine**: 8-10 hours of focused study
2. **Weekly Mock Tests**: Every Sunday, simulate exam conditions
3. **Current Affairs**: Read newspapers daily, make notes
4. **Previous Years**: Analyze last 5 years' question patterns
5. **Group Study**: Join study groups for difficult topics
6. **Revision Schedule**: Last month dedicated to revision only

**Time Management Tips:**
- Allocate time based on subject weightage
- Practice with timer regularly
- Take short breaks between study sessions
- Use active recall techniques

**Recommended Resources:**
- BCS preliminary guides
- Previous years' question banks
- Current affairs magazines
- Online mock test platforms
- YouTube educational channels

Remember: Consistency and smart work beat hard work!`,
      tags: ['BCS', 'Job', 'Study Plan', 'Government Job'],
      author: 'Karim Ahmed',
      views: 45200,
      published: true,
      createdAt: '2024-01-08',
      readingTime: '12 min read',
      category: 'job-prep'
    },
    {
      id: '5',
      title: 'Digital Learning: How to Use Online Resources Effectively',
      thumbnail: '💻',
      content: `In today's digital age, online resources are abundant but can be overwhelming. Here's how to use them effectively:

**1. Choose Quality Over Quantity**
- Select 2-3 high-quality resources per subject
- Focus on platforms with proven track records
- Avoid jumping between too many different resources

**2. Create a Structured Learning Environment**
- Have a dedicated study space free from distractions
- Use noise-cancelling headphones during study sessions
- Keep all materials organized and easily accessible

**3. Leverage Video Learning**
- Watch educational videos at 1.25x speed for better comprehension
- Pause and take notes during important concepts
- Use playlists to organize related topics

**4. Practice with Online Quizzes**
- Take regular quizzes to test your understanding
- Use immediate feedback to identify weak areas
- Track your progress over time

**5. Join Online Study Communities**
- Participate in discussion forums and study groups
- Share notes and resources with peers
- Learn from others' questions and insights

**6. Use Productivity Tools**
- Use digital flashcards for memorization
- Set up study reminders and schedules
- Use focus apps to minimize distractions

**7. Balance Screen Time**
- Follow the 20-20-20 rule (20 minutes screen, 20 minutes break)
- Use blue light filters in the evening
- Maintain good posture and ergonomics

**Recommended Platforms:**
- Khan Academy for conceptual learning
- YouTube for visual explanations
- Quizlet for flashcards and practice
- Coursera for structured courses
- Educational apps for mobile learning

Digital learning is most effective when combined with traditional study methods and real-world application!`,
      tags: ['Digital Learning', 'Online Resources', 'Study Tips', 'Technology'],
      author: 'Nusrat Jahan',
      views: 18700,
      published: true,
      createdAt: '2024-01-05',
      readingTime: '8 min read',
      category: 'digital-learning'
    },
    {
      id: '6',
      title: 'SSC English: Mastering Grammar and Composition',
      thumbnail: '📝',
      content: `English is a crucial subject in SSC exams. Here's how to master grammar and composition:

**Grammar Essentials:**
1. **Parts of Speech**: Master nouns, pronouns, verbs, adjectives, adverbs
2. **Tenses**: Practice all 12 tenses with examples
3. **Voice Changes**: Active and passive voice conversions
4. **Narration**: Direct and indirect speech rules
5. **Sentence Structure**: Simple, compound, and complex sentences

**Composition Writing Tips:**
- **Paragraph Writing**: Start with a clear topic sentence
- **Essay Structure**: Introduction, body paragraphs, conclusion
- **Letter Writing**: Format for formal and informal letters
- **Report Writing**: Factual, objective, and well-organized

**Common Mistakes to Avoid:**
- Subject-verb agreement errors
- Incorrect use of articles (a, an, the)
- Spelling mistakes and typos
- Run-on sentences and fragments

**Practice Strategies:**
- Write one paragraph daily on different topics
- Read English newspapers and magazines
- Learn 5 new words every day
- Practice previous years' questions
- Get feedback from teachers or peers

**Recommended Books:**
- Wren & Martin for grammar
- Intermediate English Grammar by Raymond Murphy
- Previous SSC question papers
- English newspapers for vocabulary building

Consistent practice is the key to mastering English!`,
      tags: ['SSC', 'English', 'Grammar', 'Writing Skills'],
      author: 'Sarah Islam',
      views: 22100,
      published: true,
      createdAt: '2024-01-18',
      readingTime: '6 min read',
      category: 'exam-tips'
    },
    {
      id: '7',
      title: 'HSC Chemistry: Organic Chemistry Simplified',
      thumbnail: '🧪',
      content: `Organic Chemistry can be challenging, but with the right approach, it becomes manageable:

**Fundamental Concepts:**
1. **Bonding**: Understand covalent, ionic, and coordinate bonds
2. **Hybridization**: sp, sp2, sp3 hybridizations
3. **Functional Groups**:识别 and memorize important functional groups
4. **Nomenclature**: IUPAC naming conventions
5. **Isomerism**: Structural and stereoisomerism

**Important Reactions:**
- **Substitution Reactions**: SN1 and SN2 mechanisms
- **Elimination Reactions**: E1 and E2 mechanisms
- **Addition Reactions**: Markovnikov and anti-Markovnikov rules
- **Oxidation-Reduction**: Common oxidizing and reducing agents

**Study Techniques:**
- Create reaction mechanism charts
- Use flashcards for functional groups
- Practice naming compounds regularly
- Draw molecular structures
- Understand reaction mechanisms rather than memorizing

**Exam Preparation:**
- Focus on numerical problems
- Practice structural drawings
- Review previous years' questions
- Create summary notes for each chapter
- Solve practice problems daily

**Common Mistakes:**
- Incorrect structural formulas
- Wrong IUPAC names
- Misunderstanding reaction mechanisms
- Forgetting reaction conditions

**Recommended Resources:**
- Organic Chemistry by Morrison and Boyd
- HSC Chemistry textbooks
- Online reaction mechanism videos
- Practice workbooks
- Previous exam papers

Organic Chemistry becomes easy with systematic study and regular practice!`,
      tags: ['HSC', 'Chemistry', 'Organic Chemistry', 'Science'],
      author: 'Dr. Mohammad Ali',
      views: 19800,
      published: true,
      createdAt: '2024-01-16',
      readingTime: '9 min read',
      category: 'science'
    },
    {
      id: '8',
      title: 'Medical Admission: Complete Preparation Strategy',
      thumbnail: '🏥',
      content: `Medical admission is highly competitive. Here's your comprehensive preparation strategy:

**Exam Structure:**
- **Physics**: 100 marks
- **Chemistry**: 100 marks  
- **Biology**: 100 marks
- **Total**: 300 marks, 100 MCQ questions
- **Duration**: 2 hours
- **Negative Marking**: 0.25 marks per wrong answer

**Subject-wise Preparation:**

**Biology (Most Important):**
- Focus on Botany and Zoology equally
- Master classification and taxonomy
- Study human physiology thoroughly
- Practice diagrams and labels
- Memorize scientific names

**Physics:**
- Emphasize numerical problems
- Practice mechanics and electricity
- Study modern physics concepts
- Work on time management
- Use formula sheets for quick revision

**Chemistry:**
- Balance organic and inorganic chemistry
- Practice chemical equations
- Study periodic trends
- Master organic reactions
- Review laboratory techniques

**Study Schedule:**
- **Daily**: 8-10 hours of focused study
- **Weekly**: 2-3 mock tests
- **Monthly**: Complete syllabus revision
- **Last Month**: Only revision and practice tests

**Recommended Books:**
- Biology: Professor's Biology textbooks
- Physics: HSC Physics by Shahabuddin
- Chemistry: HSC Chemistry by Rahman
- Previous years' question banks
- Medical admission guidebooks

**Success Tips:**
- Start preparation at least 1 year early
- Join a good coaching center
- Create a study group
- Stay healthy and manage stress
- Practice time management regularly

Remember: Consistency and smart work lead to success in medical admission!`,
      tags: ['Medical', 'Admission', 'MBBS', 'BDS'],
      author: 'Dr. Farhana Akter',
      views: 35600,
      published: true,
      createdAt: '2024-01-14',
      readingTime: '11 min read',
      category: 'admission'
    },
    {
      id: '9',
      title: 'Engineering Admission: Mathematics and Physics Focus',
      thumbnail: '⚙️',
      content: `Engineering admission requires strong mathematical and physics fundamentals. Here's how to prepare:

**Key Mathematics Topics:**
1. **Algebra**: Quadratic equations, matrices, determinants
2. **Calculus**: Differentiation, integration, applications
3. **Coordinate Geometry**: Straight lines, circles, conics
4. **Trigonometry**: Identities, equations, applications
5. **Probability**: Basic concepts and problems

**Essential Physics Topics:**
1. **Mechanics**: Newton's laws, work-energy, rotational motion
2. **Electricity**: Current, circuits, electromagnetic induction
3. **Optics**: Ray optics, wave optics
4. **Modern Physics**: Atomic structure, nuclear physics
5. **Thermodynamics**: Laws, heat transfer

**Preparation Strategy:**
- **Foundation First**: Master basic concepts before advanced topics
- **Problem Solving**: Practice at least 20 problems daily
- **Mock Tests**: Take weekly tests under exam conditions
- **Time Management**: Practice solving problems quickly
- **Error Analysis**: Keep track of common mistakes

**Study Materials:**
- HSC Mathematics textbooks (all parts)
- HSC Physics textbooks
- Engineering admission guidebooks
- Previous years' question banks
- Calculator techniques guide

**Exam Pattern:**
- **Total Marks**: 300 (Mathematics: 120, Physics: 120, Chemistry: 60)
- **Duration**: 2 hours
- **Question Type**: MCQ with negative marking
- **Difficulty**: Moderate to hard

**Success Tips:**
- Start preparation early (at least 6 months)
- Focus on understanding concepts, not memorization
- Practice with scientific calculator
- Join study groups for difficult topics
- Maintain a formula notebook
- Stay calm during exams

Engineering admission tests your problem-solving skills and conceptual understanding. Regular practice is essential!`,
      tags: ['Engineering', 'Admission', 'Mathematics', 'Physics'],
      author: 'Engr. Hasan Mahmud',
      views: 29400,
      published: true,
      createdAt: '2024-01-11',
      readingTime: '10 min read',
      category: 'admission'
    },
    {
      id: '10',
      title: 'Bank Job Preparation: Complete Guide for Bangladeshi Banks',
      thumbnail: '🏦',
      content: `Bank jobs are prestigious career options in Bangladesh. Here's your complete preparation guide:

**Exam Pattern:**
- **Written Exam**: MCQ + Written
- **Subjects**: Bangla, English, Math, General Knowledge, Computer
- **Viva**: Final selection round
- **Medical Fitness**: Required for final appointment

**Subject-wise Preparation:**

**Bangla (30-40 marks):**
- Grammar and composition
- Bengali literature
- Essay writing
- Translation skills

**English (30-40 marks):**
- Grammar and vocabulary
- Comprehension passages
- Essay and letter writing
- Translation (Bangla to English)

**Mathematics (30-40 marks):**
- Arithmetic: Percentage, profit-loss, interest
- Algebra: Equations, inequalities
- Geometry: Basic concepts
- Mental ability: Series, patterns

**General Knowledge (20-30 marks):**
- Bangladesh affairs
- International current events
- Banking terminology
- Economic concepts

**Computer (10-15 marks):**
- Basic computer operations
- MS Office applications
- Internet and email
- Digital banking concepts

**Study Schedule:**
- **Daily**: 3-4 hours of focused study
- **Weekly**: 1 mock test
- **Monthly**: Syllabus revision
- **Before Exam**: Only revision and practice

**Recommended Resources:**
- Bank job preparation books
- Current affairs magazines
- Daily newspapers
- Online mock tests
- Previous years' question papers

**Interview Preparation:**
- Practice common interview questions
- Research about the bank
- Prepare your introduction
- Dress professionally
- Be confident and honest

**Success Tips:**
- Stay updated with current affairs
- Improve typing speed
- Develop communication skills
- Practice time management
- Maintain professional attitude

Bank job preparation requires consistency and dedication. Start early and stay focused!`,
      tags: ['Bank Job', 'Career', 'Government Job', 'Preparation'],
      author: 'Abdul Karim',
      views: 41200,
      published: true,
      createdAt: '2024-01-09',
      readingTime: '12 min read',
      category: 'job-prep'
    },
    {
      id: '11',
      title: 'Time Management for Students: Balance Study and Life',
      thumbnail: '⏰',
      content: `Effective time management is crucial for academic success. Here's how to master it:

**Create a Study Schedule:**
1. **Weekly Planning**: Set aside time for each subject
2. **Daily Routine**: Fix study times and stick to them
3. **Break Times**: Schedule short breaks between study sessions
4. **Flexibility**: Allow buffer time for unexpected tasks
5. **Review Time**: Weekly schedule review and adjustment

**Pomodoro Technique:**
- **25 minutes**: Focused study session
- **5 minutes**: Short break
- **4 cycles**: Then take a 15-30 minute break
- **Benefits**: Improved focus and reduced burnout

**Prioritization Methods:**
1. **Eisenhower Matrix**: Urgent vs Important classification
2. **ABCDE Method**: Priority ranking system
3. **80/20 Rule**: Focus on high-impact activities
4. **Time Blocking**: Assign specific times to tasks

**Avoid Procrastination:**
- Break large tasks into smaller ones
- Start with the easiest task
- Use the 2-minute rule
- Remove distractions
- Set clear deadlines

**Study Environment:**
- Quiet and well-lit space
- Comfortable seating
- All materials within reach
- Digital distractions minimized
- Good ventilation

**Balancing Study and Personal Life:**
- **Sleep**: 7-8 hours daily
- **Exercise**: 30 minutes daily
- **Hobbies**: Schedule time for interests
- **Social Time**: Maintain relationships
- **Relaxation**: Practice stress management

**Digital Tools for Time Management:**
- Calendar apps for scheduling
- Todo apps for task management
- Focus apps to minimize distractions
- Study timers for session management
- Note-taking apps for organization

**Common Time Management Mistakes:**
- Overcommitting to too many tasks
- Underestimating task duration
- Multitasking instead of focused work
- Not taking regular breaks
- Poor sleep habits affecting productivity

**Success Tips:**
- Start your day early
- Review your schedule daily
- Learn to say no to non-essential tasks
- Celebrate small achievements
- Stay flexible and adapt to changes

Good time management leads to better academic performance and reduced stress!`,
      tags: ['Time Management', 'Study Skills', 'Productivity', 'Student Life'],
      author: 'Rashedul Islam',
      views: 16800,
      published: true,
      createdAt: '2024-01-07',
      readingTime: '8 min read',
      category: 'study-tips'
    },
    {
      id: '12',
      title: 'Memory Improvement Techniques for Better Learning',
      thumbnail: '🧠',
      content: `Improving memory can significantly enhance your learning capabilities. Here are proven techniques:

**1. Spaced Repetition:**
- Review material at increasing intervals
- Use flashcards for effective repetition
- Apps like Anki can automate this process
- Review: 1 day, 3 days, 1 week, 1 month later

**2. Active Recall:**
- Test yourself instead of re-reading
- Practice retrieving information from memory
- Use practice tests and quizzes
- Explain concepts to others

**3. Mnemonic Devices:**
- **Acronyms**: Create words from first letters (e.g., BODMAS)
- **Acrostics**: Make sentences from first letters
- **Visual Associations**: Link concepts with images
- **Chunking**: Group related information

**4. Mind Mapping:**
- Create visual diagrams of concepts
- Connect related ideas with lines
- Use colors and images
- Start with central topic and branch out

**5. The Memory Palace:**
- Associate information with familiar locations
- Place facts in different rooms of your mental house
- Walk through the palace to recall information
- Ancient technique used by memory champions

**6. Teaching Method:**
- Explain concepts to someone else
- Prepare as if you're teaching a class
- Answer questions about the material
- Simplify complex topics

**Lifestyle Factors for Better Memory:**
- **Sleep**: 7-9 hours for memory consolidation
- **Exercise**: Regular physical activity boosts brain function
- **Nutrition**: Omega-3 fatty acids, antioxidants
- **Stress Management**: Chronic stress impairs memory
- **Hydration**: Dehydration affects cognitive function

**Study Techniques:**
- Use multiple senses (visual, auditory, kinesthetic)
- Connect new information to existing knowledge
- Create meaningful associations
- Practice retrieval regularly
- Use varied study methods

**Digital Memory Tools:**
- Spaced repetition apps (Anki, Quizlet)
- Mind mapping software (MindMeister, XMind)
- Note-taking apps (Evernote, Notion)
- Flashcard apps (Brainscape, Cram)
- Voice recording for audio learners

**Common Memory Mistakes:**
- Cramming instead of spaced learning
- Passive reading instead of active engagement
- Multitasking during study sessions
- Not getting enough sleep
- Poor nutrition and hydration

**Memory Exercises:**
- Learn something new daily
- Practice mental math
- Memorize poems or quotes
- Play brain training games
- Learn a new language

Remember: Memory improves with practice and the right techniques. Be consistent and patient!`,
      tags: ['Memory', 'Study Techniques', 'Brain Health', 'Learning'],
      author: 'Dr. Nahid Hasan',
      views: 19500,
      published: true,
      createdAt: '2024-01-04',
      readingTime: '10 min read',
      category: 'study-tips'
    }
  ];

  const newsletters: Newsletter[] = [
    {
      id: '1',
      title: 'Daily Study Tips',
      description: 'Get daily bite-sized study tips, exam strategies, and motivational content delivered to your inbox every morning. Perfect for building consistent study habits.',
      frequency: 'DAILY',
      subscriberCount: 15420,
      isActive: true
    },
    {
      id: '2',
      title: 'Weekly Progress Report',
      description: 'Comprehensive weekly roundup of your learning progress, upcoming exam dates, and personalized recommendations based on your performance.',
      frequency: 'WEEKLY',
      subscriberCount: 8750,
      isActive: true
    },
    {
      id: '3',
      title: 'Monthly Newsletter',
      description: 'In-depth monthly analysis of educational trends, expert interviews, success stories, and exclusive study resources.',
      frequency: 'MONTHLY',
      subscriberCount: 5320,
      isActive: true
    },
    {
      id: '4',
      title: 'SSC Exam Special',
      description: 'Focused content for SSC candidates including subject-wise tips, important questions, exam schedules, and result updates.',
      frequency: 'WEEKLY',
      subscriberCount: 12100,
      isActive: true
    },
    {
      id: '5',
      title: 'HSC Preparation Guide',
      description: 'Advanced preparation materials for HSC students covering science, commerce, and arts streams with practical tips and resources.',
      frequency: 'WEEKLY',
      subscriberCount: 9800,
      isActive: true
    },
    {
      id: '6',
      title: 'Admission Alert',
      description: 'Timely notifications about university admission deadlines, requirements, preparation strategies, and scholarship opportunities.',
      frequency: 'DAILY',
      subscriberCount: 18900,
      isActive: true
    },
    {
      id: '7',
      title: 'Job & Career Insights',
      description: 'Career guidance, job opportunities, BCS updates, bank job notifications, and professional development tips for students and graduates.',
      frequency: 'WEEKLY',
      subscriberCount: 15600,
      isActive: true
    },
    {
      id: '8',
      title: 'Success Stories',
      description: 'Inspiring stories from successful students, exam toppers, and professionals sharing their journey and study strategies.',
      frequency: 'MONTHLY',
      subscriberCount: 7400,
      isActive: true
    },
    {
      id: '9',
      title: 'Quick Quiz Challenge',
      description: 'Daily quiz questions with solutions to test your knowledge and prepare for competitive exams in a fun, engaging way.',
      frequency: 'DAILY',
      subscriberCount: 22100,
      isActive: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', icon: '📚' },
    { id: 'exam-tips', name: 'Exam Tips', icon: '📝' },
    { id: 'physics', name: 'Physics', icon: '⚛' },
    { id: 'science', name: 'Science', icon: '🔬' },
    { id: 'admission', name: 'Admission', icon: '🎓' },
    { id: 'job-prep', name: 'Job Prep', icon: '💼' },
    { id: 'digital-learning', name: 'Digital Learning', icon: '💻' },
    { id: 'study-tips', name: 'Study Tips', icon: '🎯' }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleNewsletterSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
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
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Blog & Newsletter
              </span>
              <p className="text-xs text-gray-600">Educational Resources</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 px-3 py-1 bg-green-100 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-green-700 font-medium">New Content Daily</span>
          </div>
          <Button variant="ghost" size="sm" className="text-purple-600">
            <Bell className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-purple-600">
            <User className="w-4 h-4" />
          </Button>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-10 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <TabsList className="grid w-full grid-cols-2 bg-white/80 backdrop-blur-md border-purple-100">
              <TabsTrigger value="blog" className="data-[state=active]:bg-purple-100">
                <BookOpen className="w-4 h-4 mr-2" />
                Blog
              </TabsTrigger>
              <TabsTrigger value="newsletter" className="data-[state=active]:bg-purple-100">
                <Mail className="w-4 h-4 mr-2" />
                Newsletter
              </TabsTrigger>
            </TabsList>

            {/* Blog Section */}
            <TabsContent value="blog" className="mt-6">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Search and Filter */}
                <motion.div
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="lg:col-span-3"
                >
                  <Card className="bg-white/80 backdrop-blur-md border-purple-100">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Search className="w-5 h-5 mr-2 text-purple-600" />
                          Search & Filter
                        </div>
                        <Badge className="bg-purple-100 text-purple-800">
                          {filteredPosts.length} Articles
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 space-y-4">
                      <div className="relative">
                        <Input
                          placeholder="Search articles by title, content, tags, or author..."
                          value={searchTerm}
                          onChange={handleSearch}
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
                          Found {filteredPosts.length} results for "{searchTerm}"
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Blog Posts Grid */}
                <div className="lg:col-span-3 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="bg-white/80 backdrop-blur-md border-purple-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-3xl">{post.thumbnail}</span>
                            <div className="flex items-center gap-2">
                              <Badge className="bg-green-100 text-green-800">
                                <CheckCircle className="w-3 h-3 mr-1" />
                                Published
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {post.category.replace('-', ' ')}
                              </Badge>
                            </div>
                          </div>
                          <CardTitle className="text-lg leading-tight line-clamp-2 hover:text-purple-600 transition-colors">
                            {post.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                            {post.content.substring(0, 150)}...
                          </p>
                          
                          <div className="flex flex-wrap gap-1 mb-4">
                            {post.tags.slice(0, 3).map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs hover:bg-purple-100 transition-colors">
                                {tag}
                              </Badge>
                            ))}
                            {post.tags.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{post.tags.length - 3}
                              </Badge>
                            )}
                          </div>

                          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                            <div className="flex items-center">
                              <User className="w-4 h-4 mr-1" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                <span>{post.readingTime}</span>
                              </div>
                              <div className="flex items-center">
                                <Heart className="w-4 h-4 mr-1 text-red-500" />
                                <span>{Math.floor(post.views / 100)}</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-3 border-t border-purple-100">
                            <div className="flex items-center space-x-3 text-sm text-gray-500">
                              <div className="flex items-center">
                                <Eye className="w-4 h-4 mr-1" />
                                <span>{post.views.toLocaleString()}</span>
                              </div>
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                <span>{post.createdAt}</span>
                              </div>
                            </div>
                            <Button size="sm" className="text-purple-600 hover:text-purple-700 hover:bg-purple-50">
                              Read More
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Newsletter Section */}
            <TabsContent value="newsletter" className="mt-6">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Newsletter Subscription */}
                <motion.div
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="lg:col-span-1"
                >
                  <Card className="bg-white/80 backdrop-blur-md border-purple-100">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Mail className="w-5 h-5 mr-2 text-purple-600" />
                        Subscribe to Newsletter
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600 text-sm">
                        Choose from our variety of newsletters tailored to your educational needs. Stay updated with the latest content, exam tips, and exclusive resources.
                      </p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-green-600">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          <span>No spam, ever</span>
                        </div>
                        <div className="flex items-center text-sm text-green-600">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          <span>Unsubscribe anytime</span>
                        </div>
                        <div className="flex items-center text-sm text-green-600">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          <span>Free educational content</span>
                        </div>
                      </div>
                      
                      <form onSubmit={handleNewsletterSubscribe} className="space-y-3">
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full"
                          required
                        />
                        <Button 
                          type="submit" 
                          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                          disabled={isSubscribed}
                        >
                          {isSubscribed ? (
                            <>
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Successfully Subscribed!
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4 mr-2" />
                              Subscribe to All Newsletters
                            </>
                          )}
                        </Button>
                      </form>

                      <div className="mt-6 p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-bold text-purple-800 mb-1">Newsletter Benefits</h4>
                            <p className="text-purple-700 text-sm">
                              • Exclusive study tips and strategies<br/>
                              • Early access to new content<br/>
                              • Personalized learning recommendations<br/>
                              • Community of motivated learners
                            </p>
                          </div>
                          <div className="text-purple-600">
                            <Heart className="w-8 h-8" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Newsletter Plans */}
                <div className="lg:col-span-2 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {newsletters.map((newsletter, index) => (
                    <motion.div
                      key={newsletter.id}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="bg-white/80 backdrop-blur-md border-purple-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <Badge className={newsletter.isActive ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}>
                                {newsletter.isActive ? 'Active' : 'Inactive'}
                              </Badge>
                              <Badge variant="outline" className="text-purple-600 border-purple-200">
                                {newsletter.frequency}
                              </Badge>
                            </div>
                            <div className="flex items-center text-yellow-500">
                              <Star className="w-4 h-4 fill-current" />
                            </div>
                          </div>
                          <CardTitle className="text-lg leading-tight">{newsletter.title}</CardTitle>
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

                          <div className="flex gap-2">
                            <Button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                              Subscribe
                            </Button>
                            <Button variant="outline" size="sm" className="hover:bg-purple-50">
                              <Eye className="w-4 h-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}