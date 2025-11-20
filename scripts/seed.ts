import { db } from '@/lib/db';

const sampleQuizzes = [
  // SSC Mathematics
  {
    category: 'SSC',
    question: 'What is the value of x in the equation: 2x + 5 = 15?',
    options: JSON.stringify(['5', '10', '7', '8']),
    correctAnswer: 0,
    explanation: '2x + 5 = 15, so 2x = 10, therefore x = 5',
    difficulty: 'EASY'
  },
  {
    category: 'SSC',
    question: 'The area of a circle with radius 7 cm is:',
    options: JSON.stringify(['154 cm²', '22 cm²', '44 cm²', '77 cm²']),
    correctAnswer: 0,
    explanation: 'Area = πr² = π × 7² = 49π ≈ 154 cm²',
    difficulty: 'MEDIUM'
  },
  {
    category: 'SSC',
    question: 'If sin(30°) = 1/2, then cos(60°) equals:',
    options: JSON.stringify(['1/2', '√3/2', '0', '1']),
    correctAnswer: 0,
    explanation: 'cos(60°) = sin(30°) = 1/2',
    difficulty: 'EASY'
  },
  
  // HSC Physics (Extended)
  {
    category: 'HSC',
    question: 'The SI unit of force is:',
    options: JSON.stringify(['Newton', 'Joule', 'Watt', 'Pascal']),
    correctAnswer: 0,
    explanation: 'The SI unit of force is Newton (N)',
    difficulty: 'EASY'
  },
  {
    category: 'HSC',
    question: 'The acceleration due to gravity on Earth is approximately:',
    options: JSON.stringify(['9.8 m/s²', '10 m/s²', '8.9 m/s²', '11.2 m/s²']),
    correctAnswer: 0,
    explanation: 'The acceleration due to gravity on Earth is approximately 9.8 m/s²',
    difficulty: 'EASY'
  },
  {
    category: 'HSC',
    question: 'According to Newton\'s second law, F =:',
    options: JSON.stringify(['ma', 'mv', 'mg', 'mgh']),
    correctAnswer: 0,
    explanation: 'Newton\'s second law states that Force = mass × acceleration (F = ma)',
    difficulty: 'EASY'
  },
  {
    category: 'HSC',
    question: 'The speed of light in vacuum is:',
    options: JSON.stringify(['3×10⁸ m/s', '3×10⁶ m/s', '3×10¹⁰ m/s', '3×10⁴ m/s']),
    correctAnswer: 0,
    explanation: 'The speed of light in vacuum is approximately 3×10⁸ meters per second',
    difficulty: 'MEDIUM'
  },
  {
    category: 'HSC',
    question: 'Which law states that energy cannot be created or destroyed?',
    options: JSON.stringify(['Law of Conservation of Energy', 'Newton\'s First Law', 'Ohm\'s Law', 'Coulomb\'s Law']),
    correctAnswer: 0,
    explanation: 'The Law of Conservation of Energy states that energy cannot be created or destroyed, only transformed',
    difficulty: 'EASY'
  },
  {
    category: 'HSC',
    question: 'The unit of electric charge is:',
    options: JSON.stringify(['Coulomb', 'Volt', 'Ampere', 'Ohm']),
    correctAnswer: 0,
    explanation: 'The SI unit of electric charge is Coulomb (C)',
    difficulty: 'EASY'
  },
  {
    category: 'HSC',
    question: 'Which particle has a positive charge?',
    options: JSON.stringify(['Proton', 'Electron', 'Neutron', 'Photon']),
    correctAnswer: 0,
    explanation: 'Proton has a positive charge, electron has negative charge, and neutron has no charge',
    difficulty: 'EASY'
  },
  {
    category: 'HSC',
    question: 'The formula for kinetic energy is:',
    options: JSON.stringify(['½mv²', 'mgh', 'F×d', '½kx²']),
    correctAnswer: 0,
    explanation: 'Kinetic energy = ½ × mass × velocity² (KE = ½mv²)',
    difficulty: 'MEDIUM'
  },
  {
    category: 'HSC',
    question: 'The wavelength of visible light ranges from:',
    options: JSON.stringify(['400-700 nm', '100-400 nm', '700-1000 nm', '10-100 nm']),
    correctAnswer: 0,
    explanation: 'Visible light has wavelengths ranging from approximately 400 to 700 nanometers',
    difficulty: 'MEDIUM'
  },
  {
    category: 'HSC',
    question: 'Ohm\'s Law relates voltage, current, and resistance as:',
    options: JSON.stringify(['V = IR', 'V = I/R', 'V = R/I', 'V = I+R']),
    correctAnswer: 0,
    explanation: 'Ohm\'s Law states that Voltage = Current × Resistance (V = IR)',
    difficulty: 'EASY'
  },
  {
    category: 'HSC',
    question: 'The focal length of a convex lens is:',
    options: JSON.stringify(['Positive', 'Negative', 'Zero', 'Infinity']),
    correctAnswer: 0,
    explanation: 'A convex lens has a positive focal length, while a concave lens has a negative focal length',
    difficulty: 'MEDIUM'
  },
  {
    category: 'HSC',
    question: 'The SI unit of power is:',
    options: JSON.stringify(['Watt', 'Joule', 'Newton', 'Pascal']),
    correctAnswer: 0,
    explanation: 'The SI unit of power is Watt (W), which is equal to Joule per second',
    difficulty: 'EASY'
  },

  // Admission General Science (Extended)
  {
    category: 'ADMISSION',
    question: 'The chemical symbol for gold is:',
    options: JSON.stringify(['Au', 'Ag', 'Fe', 'Cu']),
    correctAnswer: 0,
    explanation: 'The chemical symbol for gold is Au, from the Latin word "aurum"',
    difficulty: 'EASY'
  },
  {
    category: 'ADMISSION',
    question: 'The largest planet in our solar system is:',
    options: JSON.stringify(['Jupiter', 'Saturn', 'Earth', 'Mars']),
    correctAnswer: 0,
    explanation: 'Jupiter is the largest planet in our solar system',
    difficulty: 'EASY'
  },
  {
    category: 'ADMISSION',
    question: 'Photosynthesis occurs in:',
    options: JSON.stringify(['Chloroplasts', 'Mitochondria', 'Nucleus', 'Ribosomes']),
    correctAnswer: 0,
    explanation: 'Photosynthesis occurs in chloroplasts, which contain chlorophyll',
    difficulty: 'MEDIUM'
  },
  {
    category: 'ADMISSION',
    question: 'The chemical formula for water is:',
    options: JSON.stringify(['H₂O', 'CO₂', 'O₂', 'H₂O₂']),
    correctAnswer: 0,
    explanation: 'Water consists of two hydrogen atoms and one oxygen atom (H₂O)',
    difficulty: 'EASY'
  },
  {
    category: 'ADMISSION',
    question: 'Which gas is most abundant in Earth\'s atmosphere?',
    options: JSON.stringify(['Nitrogen', 'Oxygen', 'Carbon dioxide', 'Hydrogen']),
    correctAnswer: 0,
    explanation: 'Nitrogen makes up about 78% of Earth\'s atmosphere, making it the most abundant gas',
    difficulty: 'EASY'
  },
  {
    category: 'ADMISSION',
    question: 'The human heart has how many chambers?',
    options: JSON.stringify(['4', '2', '3', '5']),
    correctAnswer: 0,
    explanation: 'The human heart has four chambers: two atria and two ventricles',
    difficulty: 'EASY'
  },
  {
    category: 'ADMISSION',
    question: 'The speed of sound in air is approximately:',
    options: JSON.stringify(['343 m/s', '150 m/s', '500 m/s', '1000 m/s']),
    correctAnswer: 0,
    explanation: 'The speed of sound in air at room temperature is approximately 343 meters per second',
    difficulty: 'MEDIUM'
  },
  {
    category: 'ADMISSION',
    question: 'Which vitamin is produced when skin is exposed to sunlight?',
    options: JSON.stringify(['Vitamin D', 'Vitamin A', 'Vitamin C', 'Vitamin B']),
    correctAnswer: 0,
    explanation: 'Vitamin D is produced in the skin when exposed to ultraviolet radiation from sunlight',
    difficulty: 'EASY'
  },
  {
    category: 'ADMISSION',
    question: 'The smallest unit of life is:',
    options: JSON.stringify(['Cell', 'Atom', 'Molecule', 'Organ']),
    correctAnswer: 0,
    explanation: 'The cell is the smallest structural and functional unit of life',
    difficulty: 'EASY'
  },
  {
    category: 'ADMISSION',
    question: 'The boiling point of water at standard pressure is:',
    options: JSON.stringify(['100°C', '0°C', '50°C', '212°C']),
    correctAnswer: 0,
    explanation: 'Water boils at 100°C (212°F) at standard atmospheric pressure',
    difficulty: 'EASY'
  },
  {
    category: 'ADMISSION',
    question: 'Which planet is known as the "Red Planet"?',
    options: JSON.stringify(['Mars', 'Venus', 'Jupiter', 'Saturn']),
    correctAnswer: 0,
    explanation: 'Mars is known as the "Red Planet" due to iron oxide on its surface giving it a reddish appearance',
    difficulty: 'EASY'
  },
  {
    category: 'ADMISSION',
    question: 'The chemical symbol for oxygen is:',
    options: JSON.stringify(['O', 'Ox', 'O₂', 'Oxg']),
    correctAnswer: 0,
    explanation: 'The chemical symbol for oxygen is O, and O₂ represents an oxygen molecule',
    difficulty: 'EASY'
  },
  {
    category: 'ADMISSION',
    question: 'How many bones are in the adult human body?',
    options: JSON.stringify(['206', '106', '306', '406']),
    correctAnswer: 0,
    explanation: 'An adult human typically has 206 bones',
    difficulty: 'MEDIUM'
  },
  {
    category: 'ADMISSION',
    question: 'The largest organ in the human body is:',
    options: JSON.stringify(['Skin', 'Liver', 'Brain', 'Heart']),
    correctAnswer: 0,
    explanation: 'The skin is the largest organ in the human body, covering about 20 square feet in adults',
    difficulty: 'MEDIUM'
  },
  {
    category: 'ADMISSION',
    question: 'The pH of pure water is:',
    options: JSON.stringify(['7', '0', '14', '1']),
    correctAnswer: 0,
    explanation: 'Pure water has a neutral pH of 7',
    difficulty: 'EASY'
  },

  // Job Preparation
  {
    category: 'JOB',
    question: 'Bangladesh became independent in:',
    options: JSON.stringify(['1971', '1947', '1952', '1972']),
    correctAnswer: 0,
    explanation: 'Bangladesh became independent on December 16, 1971',
    difficulty: 'EASY'
  },
  {
    category: 'JOB',
    question: 'The capital of Bangladesh is:',
    options: JSON.stringify(['Dhaka', 'Chittagong', 'Khulna', 'Rajshahi']),
    correctAnswer: 0,
    explanation: 'Dhaka is the capital city of Bangladesh',
    difficulty: 'EASY'
  },
  {
    category: 'JOB',
    question: 'The national flower of Bangladesh is:',
    options: JSON.stringify(['Shapla', 'Rose', 'Lotus', 'Tulip']),
    correctAnswer: 0,
    explanation: 'Shapla (Water Lily) is the national flower of Bangladesh',
    difficulty: 'EASY'
  }
];

const sampleBlogs = [
  {
    title: '10 Tips for SSC Mathematics Exam Preparation',
    content: `Mathematics can be challenging, but with the right approach, you can excel in your SSC exams. Here are 10 essential tips:

1. **Understand the Concepts**: Don't just memorize formulas. Understand why they work.

2. **Practice Daily**: Solve at least 10-15 problems every day to build consistency.

3. **Create a Formula Sheet**: Write down all important formulas in one place for quick revision.

4. **Solve Previous Years' Questions**: This helps you understand the exam pattern and difficulty level.

5. **Time Management**: Practice solving problems within time limits to improve speed.

6. **Focus on Weak Areas**: Identify topics you find difficult and spend extra time on them.

7. **Use Diagrams**: For geometry problems, draw clear and accurate diagrams.

8. **Check Your Work**: Always spare time to review your answers.

9. **Study in Groups**: Discussing problems with friends can provide new perspectives.

10. **Stay Calm**: Exam anxiety can affect performance. Practice relaxation techniques.

Remember, consistency is key to success in mathematics!`,
    tags: JSON.stringify(['SSC', 'Mathematics', 'Exam Tips']),
    author: 'TakeUUp Team',
    published: true
  },
  {
    title: 'Understanding Physics Concepts for HSC',
    content: `Physics is fascinating but can be complex. Here's how to master HSC Physics:

**Fundamental Approach:**
- Start with basic concepts before moving to complex problems
- Focus on understanding principles rather than memorization
- Connect physics concepts to real-world applications

**Study Techniques:**
- Draw free-body diagrams for force problems
- Practice numerical problems regularly
- Understand the derivations of formulas
- Make concept maps to connect related topics

**Important Topics to Focus On:**
- Mechanics (Newton's laws, motion, energy)
- Thermodynamics
- Electricity and magnetism
- Modern physics

**Exam Strategy:**
- Read questions carefully
- Show all steps in numerical problems
- Include units in final answers
- Manage time effectively during exams

Physics becomes easier when you understand the "why" behind the formulas!`,
    tags: JSON.stringify(['HSC', 'Physics', 'Study Guide']),
    author: 'TakeUUp Team',
    published: true
  },
  {
    title: 'BCS Preparation: A Complete Guide',
    content: `Preparing for BCS exams requires dedication and smart planning. Here's your comprehensive guide:

**Understanding the Exam Structure:**
- Preliminary Exam (MCQ based)
- Written Exam (Descriptive)
- Viva Voce (Interview)

**Preliminary Exam Preparation:**
- Cover all subjects in the syllabus
- Focus on Bangladesh affairs, international affairs, and general science
- Practice previous years' questions
- Take regular mock tests

**Key Study Areas:**
1. **Bangladesh Affairs**: History, geography, politics, economy
2. **International Affairs**: Organizations, treaties, current events
3. **General Science**: Basic concepts from physics, chemistry, biology
4. **Mathematical Reasoning**: Basic arithmetic and problem-solving
5. **English**: Grammar, vocabulary, comprehension

**Study Schedule:**
- Create a realistic timetable
- Allocate time based on your strengths and weaknesses
- Revise regularly
- Stay updated with current affairs

**Tips for Success:**
- Start early and be consistent
- Join study groups for discussion
- Read newspapers daily
- Practice time management
- Stay positive and motivated

Remember, BCS preparation is a marathon, not a sprint!`,
    tags: JSON.stringify(['Job', 'BCS', 'Career Guide']),
    author: 'TakeUUp Team',
    published: true
  }
];

async function seedDatabase() {
  try {
    console.log('Seeding database...');

    // Clear existing data
    await db.quiz.deleteMany();
    await db.blog.deleteMany();

    // Insert sample quizzes
    for (const quiz of sampleQuizzes) {
      await db.quiz.create({
        data: quiz
      });
    }

    // Insert sample blogs
    for (const blog of sampleBlogs) {
      await db.blog.create({
        data: blog
      });
    }

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

// Run the seeding function
seedDatabase();