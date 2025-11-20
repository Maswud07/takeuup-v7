import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Clock, 
  Brain, 
  CheckCircle, 
  XCircle, 
  ArrowRight,
  RotateCcw,
  Trophy,
  Star,
  Target,
  Zap
} from 'lucide-react';

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

interface QuizInterfaceProps {
  category?: string;
  subject?: string;
  onComplete: (results: any) => void;
  onExit: () => void;
}

export default function QuizInterface({ category = 'SSC', subject, onComplete, onExit }: QuizInterfaceProps) {
  const [mounted, setMounted] = useState(false);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [isQuizActive, setIsQuizActive] = useState(true);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = questions.length > 0 ? ((currentQuestionIndex + 1) / questions.length) * 100 : 0;

  useEffect(() => {
    setMounted(true);
    fetchQuestions();
  }, [category, subject]);

  const fetchQuestions = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/quizzes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ category, subject }),
      });
      
      if (response.ok) {
        const fetchedQuestions = await response.json();
        // Parse the options strings into arrays
        const parsedQuestions = fetchedQuestions.map((q: any) => ({
          ...q,
          options: JSON.parse(q.options)
        }));
        setQuestions(parsedQuestions.slice(0, 10)); // Take first 10 questions for quiz
      }
    } catch (error) {
      console.error('Error fetching questions:', error);
      // Fallback to sample questions if API fails
      setQuestions([
        {
          id: '1',
          question: 'What is the value of x in the equation: 2x + 5 = 15?',
          options: ['5', '10', '7', '8'],
          correctAnswer: 0,
          explanation: '2x + 5 = 15, so 2x = 10, therefore x = 5',
          category: 'SSC'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isQuizActive && timeLeft > 0 && questions.length > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleQuizComplete();
    }
  }, [timeLeft, isQuizActive, questions.length]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }

    setAnswers([...answers, selectedAnswer]);
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      handleQuizComplete();
    }
  };

  const handleQuizComplete = () => {
    setIsQuizActive(false);
    setShowResult(true);
    const results = {
      score,
      totalQuestions: questions.length,
      accuracy: questions.length > 0 ? (score / questions.length) * 100 : 0,
      timeSpent: 300 - timeLeft,
      answers
    };
    onComplete(results);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (!mounted) return null;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Loading quiz questions...</p>
        </div>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 flex items-center justify-center p-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl w-full"
        >
          <Card className="bg-white/90 backdrop-blur-md border-purple-100 shadow-2xl overflow-hidden">
            <CardContent className="p-12 text-center">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1 }}
                className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Trophy className="w-12 h-12 text-white" />
              </motion.div>
              
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Quiz Completed!
              </h2>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-purple-50 rounded-xl">
                  <p className="text-3xl font-bold text-purple-600">{score}/{questions.length}</p>
                  <p className="text-gray-600">Score</p>
                </div>
                <div className="p-6 bg-pink-50 rounded-xl">
                  <p className="text-3xl font-bold text-pink-600">{Math.round((score / questions.length) * 100)}%</p>
                  <p className="text-gray-600">Accuracy</p>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-2 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-8 h-8 ${
                      i < Math.ceil((score / questions.length) * 5)
                        ? 'text-yellow-500 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.location.reload()} 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  <RotateCcw className="w-5 h-5 mr-2" />
                  Try Again
                </Button>
                <Button 
                  onClick={onExit}
                  variant="outline"
                  className="border-purple-200 hover:bg-purple-50"
                >
                  Back to Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <Button 
                onClick={onExit}
                variant="ghost"
                className="text-purple-600 hover:text-purple-700"
              >
                Exit Quiz
              </Button>
              <Badge className="bg-purple-100 text-purple-800">
                {subject ? `${category} - ${subject}` : category}
              </Badge>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className={`flex items-center space-x-2 px-4 py-2 rounded-xl ${
                timeLeft < 60 ? 'bg-red-100' : 'bg-green-100'
              }`}>
                <Clock className={`w-5 h-5 ${timeLeft < 60 ? 'text-red-600' : 'text-green-600'}`} />
                <span className={`font-bold ${timeLeft < 60 ? 'text-red-600' : 'text-green-600'}`}>
                  {formatTime(timeLeft)}
                </span>
              </div>
              
              <div className="flex items-center space-x-2 px-4 py-2 bg-purple-100 rounded-xl">
                <Target className="w-5 h-5 text-purple-600" />
                <span className="font-bold text-purple-600">
                  {currentQuestionIndex + 1}/{questions.length}
                </span>
              </div>
            </div>
          </div>
          
          <div className="w-full bg-purple-100 rounded-full h-3 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-600 to-pink-600"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>

        {/* Question Card */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-white/90 backdrop-blur-md border-purple-100 shadow-xl">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl font-bold text-gray-800 flex items-center">
                <Brain className="w-8 h-8 mr-3 text-purple-600" />
                {currentQuestion?.question}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="grid gap-3">
                {currentQuestion?.options?.map((option: string, index: number) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrect = index === currentQuestion.correctAnswer;
                  const showCorrect = showExplanation && isCorrect;
                  const showIncorrect = showExplanation && isSelected && !isCorrect;

                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: showExplanation ? 1 : 1.02 }}
                      whileTap={{ scale: showExplanation ? 1 : 0.98 }}
                      onClick={() => handleAnswerSelect(index)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        showCorrect
                          ? 'border-green-500 bg-green-50'
                          : showIncorrect
                          ? 'border-red-500 bg-red-50'
                          : isSelected
                          ? 'border-purple-500 bg-purple-50'
                          : 'border-purple-200 bg-white hover:border-purple-300'
                      } ${showExplanation ? 'cursor-not-allowed' : ''}`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                            showCorrect
                              ? 'bg-green-500 text-white'
                              : showIncorrect
                              ? 'bg-red-500 text-white'
                              : isSelected
                              ? 'bg-purple-500 text-white'
                              : 'bg-gray-200 text-gray-700'
                          }`}>
                            {String.fromCharCode(65 + index)}
                          </div>
                          <span className="text-lg font-medium">{option}</span>
                        </div>
                        
                        {showCorrect && <CheckCircle className="w-6 h-6 text-green-600" />}
                        {showIncorrect && <XCircle className="w-6 h-6 text-red-600" />}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-blue-50 border-2 border-blue-200 rounded-xl"
                >
                  <div className="flex items-start space-x-3">
                    <Zap className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-bold text-blue-800 mb-2">Explanation:</h4>
                      <p className="text-blue-700">{currentQuestion?.explanation}</p>
                    </div>
                  </div>
                </motion.div>
              )}

              <div className="flex justify-between pt-6">
                {!showExplanation ? (
                  <Button
                    onClick={handleSubmitAnswer}
                    disabled={selectedAnswer === null}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50"
                  >
                    Submit Answer
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleNextQuestion}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  >
                    {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Complete Quiz'}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}