'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'bn';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

interface LanguageProviderProps {
  children: ReactNode;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.newsletter': 'Newsletter',
    'nav.features': 'Features',
    'nav.pricing': 'Pricing',
    'nav.testimonials': 'Testimonials',
    'nav.dashboard': 'Dashboard',
    'nav.backToHome': '← Back to Home',
    
    // Language
    'lang.english': 'English',
    'lang.bangla': 'বাংলা',
    'lang.select': 'Select Language',
    
    // Hero Section
    'hero.title': 'Excel in Your',
    'hero.subtitle': 'Educational Journey',
    'hero.description': 'Join thousands of Bangladeshi students mastering SSC, HSC, Admission & Job preparation through interactive quizzes, AI-powered learning, and comprehensive study materials.',
    'hero.startLearning': 'Start Learning Free',
    'hero.viewDashboard': 'View Dashboard',
    'hero.tryPremium': 'Try Premium Demo',
    
    // Stats
    'stats.students': 'Students',
    'stats.rating': 'Rating',
    'stats.quizzes': 'Quizzes Taken',
    
    // Features
    'features.dailyQuizzes': 'Daily Quizzes',
    'features.leaderboard': 'Leaderboard',
    'features.aiSuggestions': 'AI Suggestions',
    'features.studyMaterials': 'Study Materials',
    'features.mentorSupport': 'Mentor Support',
    'features.blogNewsletter': 'Blog & Newsletter',
    'features.progressTracking': 'Progress Tracking',
    
    // Pricing
    'pricing.free': 'Free',
    'pricing.premium': 'Premium',
    'pricing.allInOne': 'All-In-One',
    'pricing.startFree': 'Start Free',
    'pricing.upgradePremium': 'Upgrade to Premium',
    'pricing.upgradeAllInOne': 'Upgrade to All-In-One',
    
    // Blog
    'blog.title': 'TakeUUp Blog',
    'blog.subtitle': 'Educational Resources',
    'blog.searchPlaceholder': 'Search articles by title, content, tags, or author...',
    'blog.articlesFound': 'Articles Found',
    'blog.noArticles': 'No articles found',
    'blog.tryDifferent': 'Try adjusting your search terms or filters',
    'blog.readMore': 'Read More',
    'blog.showLess': 'Show Less',
    'blog.views': 'views',
    
    // Newsletter
    'newsletter.title': 'TakeUUp Newsletters',
    'newsletter.subtitle': 'Educational Updates',
    'newsletter.stayUpdated': 'Stay Updated, Stay Ahead',
    'newsletter.description': 'Choose from our variety of newsletters tailored to your educational needs. Get the latest content, exam tips, and exclusive resources delivered to your inbox.',
    'newsletter.subscribe': 'Subscribe to Our Newsletters',
    'newsletter.emailPlaceholder': 'Enter your email address',
    'newsletter.subscribeSelected': 'Subscribe to Selected',
    'newsletter.subscribeAll': 'Subscribe to All',
    'newsletter.subscribed': 'Successfully Subscribed!',
    'newsletter.selected': 'Selected',
    'newsletter.details': 'Details',
    'newsletter.hide': 'Hide',
    'newsletter.noSpam': 'No spam, ever',
    'newsletter.unsubscribe': 'Unsubscribe anytime',
    'newsletter.freeContent': 'Free educational content',
    
    // Categories
    'category.all': 'All Posts',
    'category.examTips': 'Exam Tips',
    'category.physics': 'Physics',
    'category.science': 'Science',
    'category.admission': 'Admission',
    'category.jobPrep': 'Job Prep',
    'category.digitalLearning': 'Digital Learning',
    'category.studyTips': 'Study Tips',
    
    // Quiz
    'quiz.title': 'TakeUUp Quiz',
    'quiz.question': 'Question',
    'quiz.of': 'of',
    'quiz.submit': 'Submit',
    'quiz.next': 'Next',
    'quiz.finish': 'Finish',
    'quiz.exit': 'Exit Quiz',
    'quiz.timeLeft': 'Time Left',
    'quiz.score': 'Score',
    'quiz.correct': 'Correct',
    'quiz.incorrect': 'Incorrect',
    'quiz.results': 'Quiz Results',
    'quiz.performance': 'Your Performance',
    'quiz.completed': 'Quiz Completed!',
    
    // Dashboard
    'dashboard.title': 'TakeUUp Dashboard',
    'dashboard.overview': 'Overview',
    'dashboard.recentActivity': 'Recent Activity',
    'dashboard.progress': 'Your Progress',
    'dashboard.achievements': 'Achievements',
    
    // Common
    'common.published': 'Published',
    'common.active': 'Active',
    'common.inactive': 'Inactive',
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.tryAgain': 'Try Again',
    'common.close': 'Close',
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.confirm': 'Confirm',
    'common.yes': 'Yes',
    'common.no': 'No',
  },
  bn: {
    // Navigation
    'nav.home': 'হোম',
    'nav.blog': 'ব্লগ',
    'nav.newsletter': 'নিউজলেটার',
    'nav.features': 'বৈশিষ্ট্য',
    'nav.pricing': 'মূল্য',
    'nav.testimonials': 'সাক্ষ্যক্ষণ',
    'nav.dashboard': 'ড্যাশবোর্ড',
    'nav.backToHome': '← হোমে ফিরে যান',
    
    // Language
    'lang.english': 'English',
    'lang.bangla': 'বাংলা',
    'lang.select': 'ভাষা নির্বাচন করুন',
    
    // Hero Section
    'hero.title': 'আপনার',
    'hero.subtitle': 'শিক্ষা যাত্রায়',
    'hero.description': 'হাজারো হাজার বাংলাদেশী শিক্ষার্থদের সাথে এসএসি, এইচএসসি, ভর্তি ও চাকরির প্রস্তুতির জন্য মাস্টার করছেন ইন্টারেক্টিভ কুইজ, এআই-চালিত লার্নিং এবং বিস্তারীয় স্টাডি মেটেরিয়্য়াল।',
    'hero.startLearning': 'বিনামুল্যে শিক্ষা শুরু করুন',
    'hero.viewDashboard': 'ড্যাশবোর্ড দেখুন',
    'hero.tryPremium': 'প্রিমিয়াম ডেমো চেষ্টা করুন',
    
    // Stats
    'stats.students': 'শিক্ষার্থীরা',
    'stats.rating': 'রেটিং',
    'stats.quizzes': 'কুইজ সম্পন্ন',
    
    // Features
    'features.dailyQuizzes': 'দৈনিক কুইজ',
    'features.leaderboard': 'লিডারটবোর্ড',
    'features.aiSuggestions': 'এআই পরামর্শ',
    'features.studyMaterials': 'স্টাডি মেটেরিয়্য়াল',
    'features.mentorSupport': 'মেন্টর সাপোর্ট',
    'features.blogNewsletter': 'ব্লগ ও নিউজলেটার',
    'features.progressTracking': 'অগ্রগতি ট্র্যাকিং',
    
    // Pricing
    'pricing.free': 'বিনামুল্যে',
    'pricing.premium': 'প্রিমিয়াম',
    'pricing.allInOne': 'অল-ইন-ওয়ান',
    'pricing.startFree': 'বিনামুল্যে শুরু করুন',
    'pricing.upgradePremium': 'প্রিমিয়ামে আপগ্রেড করুন',
    'pricing.upgradeAllInOne': 'অল-ইন-ওয়ানে আপগ্রেড করুন',
    
    // Blog
    'blog.title': 'টেকইউইউপ ব্লগ',
    'blog.subtitle': 'শিক্ষা সম্পদ',
    'blog.searchPlaceholder': 'শিরোনাম, সম্পদ, ট্যাগ বা লেখক অনুযায়ে অনুসন্ধান করুন...',
    'blog.articlesFound': 'প্রবন্ধ পাওয়া গেল',
    'blog.noArticles': 'কোনো প্রবন্ধ পাওয়া নেই',
    'blog.tryDifferent': 'আপনার অনুসন্ধান শব্দ বা ফিল্টার পরিবর্তন করুন',
    'blog.readMore': 'আরও পড়ুন',
    'blog.showLess': 'কম পড়ুন',
    'blog.views': 'ভিউ',
    
    // Newsletter
    'newsletter.title': 'টেকইউইউপ নিউজলেটার',
    'newsletter.subtitle': 'শিক্ষা আপডেট',
    'newsletter.stayUpdated': 'আপডেট থাকুন, এগিয়ে থাকুন',
    'newsletter.description': 'আপনার শিক্ষা চাহিদা অনুযায়ে আমাদের বিভিন্ন নিউজলেটার থেকে নির্বাচন করুন। সর্বশেষট সম্পদ, পরীক্ষা টিপস এবং এক্সক্লুসিভ সম্পদ আপনার ইনবক্সে পাঠানো হবে।',
    'newsletter.subscribe': 'আমাদের নিউজলেটার সাবস্ক্রাইব করুন',
    'newsletter.emailPlaceholder': 'আপনার ইমেল ঠিকানা লিখুন',
    'newsletter.subscribeSelected': 'নির্বাচিত সাবস্ক্রাইব করুন',
    'newsletter.subscribeAll': 'সব গুলো সাবস্ক্রাইব করুন',
    'newsletter.subscribed': 'সফলভভভ সাবস্ক্রাইব হয়েছে!',
    'newsletter.selected': 'নির্বাচিত',
    'newsletter.details': 'বিস্তারিত',
    'newsletter.hide': 'লুকুনো',
    'newsletter.noSpam': 'কখনই স্প্যাম নেই',
    'newsletter.unsubscribe': 'যেকোনো আনসাবস্ক্রাইব করতে পারবেন',
    'newsletter.freeContent': 'বিনামুল্যে শিক্ষা সম্পদ',
    
    // Categories
    'category.all': 'সব প্রবন্ধ',
    'category.examTips': 'পরীক্ষা টিপস',
    'category.physics': 'পদার্থবিজ্ঞান',
    'category.science': 'বিজ্ঞান',
    'category.admission': 'ভর্তি',
    'category.jobPrep': 'চাকরির প্রস্তুতি',
    'category.digitalLearning': 'ডিজিটাল লার্নিং',
    'category.studyTips': 'স্টাডি টিপস',
    
    // Quiz
    'quiz.title': 'টেকইউইউপ কুইজ',
    'quiz.question': 'প্রশ্ন',
    'quiz.of': 'এর',
    'quiz.submit': 'জমা দিন',
    'quiz.next': 'পরবর্তী',
    'quiz.finish': 'শেষ করুন',
    'quiz.exit': 'কুইজ থেকে বাহির',
    'quiz.timeLeft': 'বাকি সময়',
    'quiz.score': 'স্কোর',
    'quiz.correct': 'সঠিক',
    'quiz.incorrect': 'ভুল',
    'quiz.results': 'কুইজ ফলাফ',
    'quiz.performance': 'আপনার পারফর্মেন্স',
    'quiz.completed': 'কুইজ সম্পন্ন!',
    
    // Dashboard
    'dashboard.title': 'টেকইউইউপ ড্যাশবোর্ড',
    'dashboard.overview': 'ওভারভিউ',
    'dashboard.recentActivity': 'সাম্প্রতিক কার্যকলাপ',
    'dashboard.progress': 'আপনার অগ্রগতি',
    'dashboard.achievements': 'অর্জনয়াস',
    
    // Common
    'common.published': 'প্রকাশিত',
    'common.active': 'সক্রিয়',
    'common.inactive': 'নিষ্ক্রিয়',
    'common.loading': 'লোড হচ্ছে...',
    'common.error': 'ত্রুটি',
    'common.tryAgain': 'আবার চেষ্টা করুন',
    'common.close': 'বন্ধ করুন',
    'common.save': 'সংরক্ষণ করুন',
    'common.cancel': 'বাতিল',
    'common.confirm': 'নিশ্চিত',
    'common.yes': 'হ্যাঁ',
    'common.no': 'না',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['en', 'bn'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  // Force re-render when language changes
  useEffect(() => {
    // This effect runs whenever language changes
  }, [language]);

  const value: LanguageContextType = {
    language,
    setLanguage: handleSetLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}