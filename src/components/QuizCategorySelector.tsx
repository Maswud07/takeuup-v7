'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  GraduationCap, 
  University, 
  Building, 
  Briefcase, 
  Brain, 
  Beaker, 
  Calculator, 
  Globe,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Subject {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  chapters?: string[];
}

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  subcategories?: string[];
  subjects: Subject[];
}

const quizCategories: Category[] = [
  {
    id: 'ssc',
    name: 'SSC (Class 9–10)',
    icon: <BookOpen className="w-8 h-8" />,
    description: 'Secondary School Certificate examination preparation',
    subcategories: ['Classwise', 'Chapterwise'],
    subjects: [
      {
        id: 'bangla',
        name: 'Bangla',
        icon: <Globe className="w-6 h-6" />,
        description: 'Bangla language and literature',
        chapters: ['Prose', 'Poetry', 'Grammar', 'Composition']
      },
      {
        id: 'english',
        name: 'English',
        icon: <Globe className="w-6 h-6" />,
        description: 'English language and grammar',
        chapters: ['Reading Comprehension', 'Grammar', 'Writing', 'Vocabulary']
      },
      {
        id: 'mathematics',
        name: 'Mathematics',
        icon: <Calculator className="w-6 h-6" />,
        description: 'Mathematics and problem solving',
        chapters: ['Algebra', 'Geometry', 'Trigonometry', 'Statistics']
      },
      {
        id: 'ict',
        name: 'ICT',
        icon: <Brain className="w-6 h-6" />,
        description: 'Information and Communication Technology',
        chapters: ['Computer Fundamentals', 'Programming', 'Internet', 'Digital Safety']
      },
      {
        id: 'bangladesh-studies',
        name: 'Bangladesh & Global Studies',
        icon: <Globe className="w-6 h-6" />,
        description: 'Bangladesh history and world geography',
        chapters: ['History of Bangladesh', 'Geography', 'World Affairs']
      },
      {
        id: 'physics',
        name: 'Physics',
        icon: <Beaker className="w-6 h-6" />,
        description: 'Physical science and mechanics',
        chapters: ['Mechanics', 'Thermodynamics', 'Electricity', 'Modern Physics']
      },
      {
        id: 'chemistry',
        name: 'Chemistry',
        icon: <Beaker className="w-6 h-6" />,
        description: 'Chemical science and reactions',
        chapters: ['Organic Chemistry', 'Inorganic Chemistry', 'Physical Chemistry']
      },
      {
        id: 'biology',
        name: 'Biology',
        icon: <Brain className="w-6 h-6" />,
        description: 'Life sciences and living organisms',
        chapters: ['Botany', 'Zoology', 'Human Physiology', 'Ecology']
      },
      {
        id: 'higher-math',
        name: 'Higher Mathematics',
        icon: <Calculator className="w-6 h-6" />,
        description: 'Advanced mathematics concepts',
        chapters: ['Calculus', 'Linear Algebra', 'Probability', 'Statistics']
      },
      {
        id: 'accounting',
        name: 'Accounting',
        icon: <Calculator className="w-6 h-6" />,
        description: 'Financial accounting principles',
        chapters: ['Basic Accounting', 'Financial Statements', 'Cost Accounting']
      },
      {
        id: 'business-entrepreneurship',
        name: 'Business Entrepreneurship',
        icon: <Briefcase className="w-6 h-6" />,
        description: 'Business studies and entrepreneurship',
        chapters: ['Business Fundamentals', 'Entrepreneurship', 'Management']
      },
      {
        id: 'finance-banking',
        name: 'Finance & Banking',
        icon: <Building className="w-6 h-6" />,
        description: 'Financial institutions and services',
        chapters: ['Banking Operations', 'Financial Services', 'Economics']
      }
    ]
  },
  {
    id: 'hsc',
    name: 'HSC (Class 11–12)',
    icon: <GraduationCap className="w-8 h-8" />,
    description: 'Higher Secondary Certificate examination preparation',
    subcategories: ['Classwise', 'Chapterwise'],
    subjects: [
      {
        id: 'bangla',
        name: 'Bangla',
        icon: <Globe className="w-6 h-6" />,
        description: 'Advanced Bangla language and literature',
        chapters: ['Advanced Prose', 'Advanced Poetry', 'Linguistics', 'Creative Writing']
      },
      {
        id: 'english',
        name: 'English',
        icon: <Globe className="w-6 h-6" />,
        description: 'Advanced English language and literature',
        chapters: ['Advanced Literature', 'Linguistics', 'Critical Analysis', 'Writing Skills']
      },
      {
        id: 'ict',
        name: 'ICT',
        icon: <Brain className="w-6 h-6" />,
        description: 'Advanced Information and Communication Technology',
        chapters: ['Advanced Programming', 'Database Management', 'Networking', 'Cybersecurity']
      },
      {
        id: 'physics',
        name: 'Physics',
        icon: <Beaker className="w-6 h-6" />,
        description: 'Advanced physics concepts',
        chapters: ['Advanced Mechanics', 'Quantum Physics', 'Electromagnetism', 'Nuclear Physics']
      },
      {
        id: 'chemistry',
        name: 'Chemistry',
        icon: <Beaker className="w-6 h-6" />,
        description: 'Advanced chemistry concepts',
        chapters: ['Advanced Organic Chemistry', 'Physical Chemistry', 'Analytical Chemistry']
      },
      {
        id: 'biology',
        name: 'Biology',
        icon: <Brain className="w-6 h-6" />,
        description: 'Advanced biology concepts',
        chapters: ['Molecular Biology', 'Genetics', 'Biotechnology', 'Advanced Ecology']
      },
      {
        id: 'higher-math',
        name: 'Higher Mathematics',
        icon: <Calculator className="w-6 h-6" />,
        description: 'Higher level mathematics',
        chapters: ['Advanced Calculus', 'Differential Equations', 'Linear Algebra', 'Probability Theory']
      },
      {
        id: 'statistics',
        name: 'Statistics',
        icon: <Calculator className="w-6 h-6" />,
        description: 'Statistical analysis and probability',
        chapters: ['Descriptive Statistics', 'Inferential Statistics', 'Probability Theory']
      },
      {
        id: 'accounting',
        name: 'Accounting',
        icon: <Calculator className="w-6 h-6" />,
        description: 'Advanced accounting principles',
        chapters: ['Advanced Accounting', 'Cost Accounting', 'Management Accounting']
      },
      {
        id: 'business-management',
        name: 'Business Organization & Management',
        icon: <Briefcase className="w-6 h-6" />,
        description: 'Business management principles',
        chapters: ['Management Theory', 'Organizational Behavior', 'Strategic Planning']
      },
      {
        id: 'finance-banking-insurance',
        name: 'Finance, Banking & Insurance',
        icon: <Building className="w-6 h-6" />,
        description: 'Financial services and insurance',
        chapters: ['Advanced Banking', 'Insurance Principles', 'Risk Management']
      },
      {
        id: 'production-marketing',
        name: 'Production & Marketing',
        icon: <Briefcase className="w-6 h-6" />,
        description: 'Production and marketing management',
        chapters: ['Production Management', 'Marketing Strategy', 'Consumer Behavior']
      },
      {
        id: 'economics',
        name: 'Economics',
        icon: <Calculator className="w-6 h-6" />,
        description: 'Economic theory and applications',
        chapters: ['Microeconomics', 'Macroeconomics', 'International Economics']
      }
    ]
  },
  {
    id: 'admission',
    name: 'University Admission Test',
    icon: <University className="w-8 h-8" />,
    description: 'All Public Universities admission preparation',
    subcategories: ['Science', 'Business', 'Arts', 'Medical', 'Engineering'],
    subjects: [
      {
        id: 'math',
        name: 'Mathematics',
        icon: <Calculator className="w-6 h-6" />,
        description: 'Advanced mathematics for admission',
        chapters: ['Algebra', 'Geometry', 'Calculus', 'Probability']
      },
      {
        id: 'physics',
        name: 'Physics',
        icon: <Beaker className="w-6 h-6" />,
        description: 'Physics for admission tests',
        chapters: ['Mechanics', 'Electricity', 'Modern Physics', 'Problem Solving']
      },
      {
        id: 'chemistry',
        name: 'Chemistry',
        icon: <Beaker className="w-6 h-6" />,
        description: 'Chemistry for admission tests',
        chapters: ['Organic Chemistry', 'Physical Chemistry', 'Inorganic Chemistry']
      },
      {
        id: 'biology',
        name: 'Biology',
        icon: <Brain className="w-6 h-6" />,
        description: 'Biology for medical admission',
        chapters: ['Botany', 'Zoology', 'Human Physiology', 'Genetics']
      },
      {
        id: 'ict',
        name: 'ICT',
        icon: <Brain className="w-6 h-6" />,
        description: 'Information technology for admission',
        chapters: ['Computer Fundamentals', 'Programming', 'Networking', 'Database']
      },
      {
        id: 'english',
        name: 'English',
        icon: <Globe className="w-6 h-6" />,
        description: 'English for admission tests',
        chapters: ['Grammar', 'Vocabulary', 'Reading Comprehension', 'Writing']
      },
      {
        id: 'accounting',
        name: 'Accounting',
        icon: <Calculator className="w-6 h-6" />,
        description: 'Accounting for business admission',
        chapters: ['Financial Accounting', 'Cost Accounting', 'Management Accounting']
      },
      {
        id: 'business-principles',
        name: 'Business Principles/Management',
        icon: <Briefcase className="w-6 h-6" />,
        description: 'Business studies for admission',
        chapters: ['Management Principles', 'Business Ethics', 'Organizational Behavior']
      },
      {
        id: 'finance-banking',
        name: 'Finance & Banking',
        icon: <Building className="w-6 h-6" />,
        description: 'Finance and banking concepts',
        chapters: ['Financial Management', 'Banking Operations', 'Investment Analysis']
      },
      {
        id: 'marketing',
        name: 'Marketing',
        icon: <Briefcase className="w-6 h-6" />,
        description: 'Marketing principles and strategies',
        chapters: ['Marketing Fundamentals', 'Consumer Behavior', 'Market Research']
      },
      {
        id: 'general-knowledge',
        name: 'General Knowledge',
        icon: <Globe className="w-6 h-6" />,
        description: 'General knowledge for admission',
        chapters: ['Current Affairs', 'History', 'Geography', 'Science']
      }
    ]
  },
  {
    id: 'bcs',
    name: 'BCS Preparation',
    icon: <Building className="w-8 h-8" />,
    description: 'Bangladesh Civil Service examination preparation',
    subcategories: ['Subjectwise', 'Model Tests'],
    subjects: [
      {
        id: 'bangla',
        name: 'Bangla',
        icon: <Globe className="w-6 h-6" />,
        description: 'Bangla for BCS examination',
        chapters: ['Grammar', 'Literature', 'Composition', 'Language History']
      },
      {
        id: 'english',
        name: 'English',
        icon: <Globe className="w-6 h-6" />,
        description: 'English for BCS examination',
        chapters: ['Grammar', 'Vocabulary', 'Comprehension', 'Writing Skills']
      },
      {
        id: 'mathematics',
        name: 'Mathematics',
        icon: <Calculator className="w-6 h-6" />,
        description: 'Mathematics for BCS examination',
        chapters: ['Arithmetic', 'Algebra', 'Geometry', 'Statistics']
      },
      {
        id: 'mental-ability',
        name: 'Mental Ability / IQ',
        icon: <Brain className="w-6 h-6" />,
        description: 'Mental ability and IQ tests',
        chapters: ['Logical Reasoning', 'Pattern Recognition', 'Problem Solving', 'Analytical Ability']
      },
      {
        id: 'general-science',
        name: 'General Science',
        icon: <Beaker className="w-6 h-6" />,
        description: 'General science for BCS',
        chapters: ['Physics', 'Chemistry', 'Biology', 'Environmental Science']
      },
      {
        id: 'ict',
        name: 'ICT',
        icon: <Brain className="w-6 h-6" />,
        description: 'ICT for BCS examination',
        chapters: ['Computer Basics', 'Internet', 'Digital Security', 'Office Applications']
      },
      {
        id: 'bangladesh-affairs',
        name: 'Bangladesh Affairs',
        icon: <Globe className="w-6 h-6" />,
        description: 'Bangladesh current affairs and history',
        chapters: ['History', 'Politics', 'Economy', 'Culture']
      },
      {
        id: 'international-affairs',
        name: 'International Affairs',
        icon: <Globe className="w-6 h-6" />,
        description: 'International current affairs',
        chapters: ['World Politics', 'International Organizations', 'Global Economy', 'Treaties']
      },
      {
        id: 'geography-environment',
        name: 'Geography & Environment',
        icon: <Globe className="w-6 h-6" />,
        description: 'Geography and environmental studies',
        chapters: ['Physical Geography', 'Human Geography', 'Environmental Science']
      },
      {
        id: 'ethics-governance',
        name: 'Ethics & Good Governance',
        icon: <Building className="w-6 h-6" />,
        description: 'Ethics and governance principles',
        chapters: ['Ethics', 'Governance', 'Public Administration', 'Anti-Corruption']
      }
    ]
  },
  {
    id: 'bank',
    name: 'Bank Job Exam',
    icon: <Building className="w-8 h-8" />,
    description: 'Banking job examination preparation',
    subcategories: ['Subjectwise', 'Model Tests'],
    subjects: [
      {
        id: 'bangla',
        name: 'Bangla',
        icon: <Globe className="w-6 h-6" />,
        description: 'Bangla for bank exams',
        chapters: ['Grammar', 'Literature', 'Composition', 'Language Skills']
      },
      {
        id: 'english',
        name: 'English',
        icon: <Globe className="w-6 h-6" />,
        description: 'English for bank exams',
        chapters: ['Grammar', 'Vocabulary', 'Comprehension', 'Business Writing']
      },
      {
        id: 'mathematics',
        name: 'Mathematics',
        icon: <Calculator className="w-6 h-6" />,
        description: 'Mathematics for bank exams',
        chapters: ['Arithmetic', 'Algebra', 'Geometry', 'Data Interpretation']
      },
      {
        id: 'analytical-ability',
        name: 'Analytical Ability / IQ',
        icon: <Brain className="w-6 h-6" />,
        description: 'Analytical ability tests',
        chapters: ['Logical Reasoning', 'Data Analysis', 'Problem Solving', 'Critical Thinking']
      },
      {
        id: 'general-knowledge',
        name: 'General Knowledge',
        icon: <Globe className="w-6 h-6" />,
        description: 'General knowledge for bank exams',
        chapters: ['Current Affairs', 'Banking Knowledge', 'Economy', 'Technology']
      },
      {
        id: 'ict',
        name: 'ICT',
        icon: <Brain className="w-6 h-6" />,
        description: 'ICT for bank exams',
        chapters: ['Computer Fundamentals', 'Digital Banking', 'Cybersecurity', 'Office Software']
      },
      {
        id: 'banking-knowledge',
        name: 'Banking Knowledge / Finance',
        icon: <Building className="w-6 h-6" />,
        description: 'Banking and financial knowledge',
        chapters: ['Banking Operations', 'Financial Products', 'Regulations', 'Economics']
      }
    ]
  }
];

interface QuizCategorySelectorProps {
  onCategorySelect: (category: string, subject?: string) => void;
  onBack: () => void;
}

export default function QuizCategorySelector({ onCategorySelect, onBack }: QuizCategorySelectorProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const { t } = useLanguage();

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedSubject(null);
  };

  const handleSubjectClick = (subjectId: string) => {
    setSelectedSubject(subjectId);
  };

  const handleStartQuiz = () => {
    if (selectedSubject) {
      onCategorySelect(selectedCategory!, selectedSubject);
    }
  };

  const handleBack = () => {
    if (selectedSubject) {
      setSelectedSubject(null);
    } else if (selectedCategory) {
      setSelectedCategory(null);
    } else {
      onBack();
    }
  };

  const currentCategory = quizCategories.find(cat => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 p-6">
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <Button
              onClick={handleBack}
              variant="ghost"
              className="text-purple-600 hover:text-purple-700"
            >
              ← Back
            </Button>
            
            <div className="flex items-center space-x-4">
              {selectedCategory && (
                <Badge className="bg-purple-100 text-purple-800">
                  {currentCategory?.name}
                </Badge>
              )}
              {selectedSubject && (
                <Badge className="bg-pink-100 text-pink-800">
                  {currentCategory?.subjects.find(s => s.id === selectedSubject)?.name}
                </Badge>
              )}
            </div>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {selectedSubject 
                ? `Start Quiz: ${currentCategory?.subjects.find(s => s.id === selectedSubject)?.name}`
                : selectedCategory
                ? `Select Subject: ${currentCategory?.name}`
                : 'Select Quiz Category'
              }
            </h1>
            <p className="text-xl text-gray-600">
              {selectedSubject
                ? 'Choose your difficulty level and start practicing'
                : selectedCategory
                ? 'Choose a subject to start your quiz'
                : 'Choose your exam type to get started'
              }
            </p>
          </div>
        </motion.div>

        {/* Category Selection */}
        {!selectedCategory && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quizCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card 
                  className="bg-white/80 backdrop-blur-md border-purple-100 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
                  onClick={() => handleCategoryClick(category.id)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                        {category.icon}
                      </div>
                      <Badge className="bg-purple-100 text-purple-800">
                        {category.subjects.length} subjects
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800">
                      {category.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    
                    {category.subcategories && (
                      <div className="flex flex-wrap gap-2">
                        {category.subcategories.map((sub) => (
                          <Badge key={sub} variant="outline" className="text-xs">
                            {sub}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* Subject Selection */}
        {selectedCategory && !selectedSubject && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCategory?.subjects.map((subject, index) => (
              <motion.div
                key={subject.id}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Card 
                  className="bg-white/80 backdrop-blur-md border-purple-100 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
                  onClick={() => handleSubjectClick(subject.id)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                        {subject.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg font-bold text-gray-800">
                          {subject.name}
                        </CardTitle>
                        <p className="text-sm text-gray-600">{subject.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    {subject.chapters && (
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-700">Chapters:</p>
                        <div className="flex flex-wrap gap-1">
                          {subject.chapters.slice(0, 3).map((chapter) => (
                            <Badge key={chapter} variant="outline" className="text-xs">
                              {chapter}
                            </Badge>
                          ))}
                          {subject.chapters.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{subject.chapters.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* Quiz Start Options */}
        {selectedSubject && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="bg-white/90 backdrop-blur-md border-purple-100 shadow-xl">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  {currentCategory?.subjects.find(s => s.id === selectedSubject)?.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
                  {currentCategory?.subjects.find(s => s.id === selectedSubject)?.name}
                </CardTitle>
                <p className="text-gray-600">
                  {currentCategory?.subjects.find(s => s.id === selectedSubject)?.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="bg-green-50 border-green-200 cursor-pointer hover:bg-green-100 transition-colors">
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white font-bold">E</span>
                      </div>
                      <h3 className="font-bold text-green-800">Easy</h3>
                      <p className="text-sm text-green-600">Basic concepts</p>
                      <p className="text-xs text-green-500">10 questions</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-yellow-50 border-yellow-200 cursor-pointer hover:bg-yellow-100 transition-colors">
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white font-bold">M</span>
                      </div>
                      <h3 className="font-bold text-yellow-800">Medium</h3>
                      <p className="text-sm text-yellow-600">Intermediate level</p>
                      <p className="text-xs text-yellow-500">15 questions</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-red-50 border-red-200 cursor-pointer hover:bg-red-100 transition-colors">
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white font-bold">H</span>
                      </div>
                      <h3 className="font-bold text-red-800">Hard</h3>
                      <p className="text-sm text-red-600">Advanced concepts</p>
                      <p className="text-xs text-red-500">20 questions</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex justify-center">
                  <Button
                    onClick={handleStartQuiz}
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8"
                  >
                    Start Quiz
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
}
