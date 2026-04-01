// ──────────────────────────────────────────────
// PERSONAL INFO  (sourced from CV)
// ──────────────────────────────────────────────
export const personalInfo = {
  name:     'Takbir Zaman Bhuiyan',
  title:    'Software Engineer',
  taglines: [
    
    'Computer Science & Engineering Graduate',
    'Software Engineering Intern ',
    'Full-Stack Developer',
    'ASP.NET Core & .NET Developer',
    'Data Science & ML Enthusiast',
  
  ],
  bio: "BSc in Computer Science & Engineering from American International University-Bangladesh (CGPA 3.75/4.0), Dean's Award recipient. Experienced full-stack developer with a demonstrated track record in architecting production-grade applications and building scalable backend systems. Deeply engaged in artificial intelligence and workflow automation technologies, currently advancing expertise in automation engineering through n8n. Recently completed a Software Engineer internship at NN Services & Engineering Ltd., where I contributed to full-stack development with React and Node.js in collaborative, real-world environments. Actively seeking an entry-level Software Engineer or AI/Automation Engineering position to leverage technical expertise, advance knowledge in AI-driven solutions, and contribute meaningfully to organizational objectives.",
  email:    'takbirzamanbhuiyan@gmail.com',
  phone:    '01631-107100',
  github:   'https://github.com/TakbirZaman',
  linkedin: 'https://www.linkedin.com/in/takbir-zaman-bhuiyan',
  facebook: 'https://www.facebook.com/takbirzamanbhuiyan',
  location: 'Dhaka, Bangladesh',
};

// ──────────────────────────────────────────────
// SKILLS  (exactly from CV)
// ──────────────────────────────────────────────
export interface Skill {
  name: string;
  icon: string;
  category: 'Languages' | 'Web & Frameworks' | 'Databases' | 'Data Science & ML' | 'Tools';
  color: string;
}

export const skills: Skill[] = [
  // Languages
  { name: 'C++',                 icon: '⚡', category: 'Languages',           color: '#00599C' },
  { name: 'Python',              icon: '🐍', category: 'Languages',           color: '#3776AB' },
  { name: 'C#',                  icon: '🔷', category: 'Languages',           color: '#239120' },
  // Web & Frameworks
  { name: 'HTML',                icon: '🌐', category: 'Web & Frameworks',    color: '#E34F26' },
  { name: 'CSS',                 icon: '🎨', category: 'Web & Frameworks',    color: '#1572B6' },
  { name: 'JavaScript',          icon: '🟨', category: 'Web & Frameworks',    color: '#F7DF1E' },
  { name: 'PHP',                 icon: '🐘', category: 'Web & Frameworks',    color: '#777BB4' },
  { name: 'ASP.NET Core',        icon: '🔩', category: 'Web & Frameworks',    color: '#512BD4' },
  { name: 'React',               icon: '⚛️', category: 'Web & Frameworks',    color: '#61DAFB' },
  // Tools
  { name: 'Git',                 icon: '📦', category: 'Tools',               color: '#F05032' },
  { name: 'GitHub',              icon: '🐙', category: 'Tools',               color: '#ffffff' },
  { name: 'Vite',                icon: '⚡', category: 'Tools',               color: '#646CFF' },
  { name: 'Netlify',             icon: '🚀', category: 'Tools',               color: '#00C7B7' },
  // Databases
  { name: 'MySQL',               icon: '🗄️', category: 'Databases',           color: '#4479A1' },
  { name: 'Oracle',              icon: '🏛️', category: 'Databases',           color: '#F80000' },
  // Data Science & ML
  { name: 'Data Preprocessing',  icon: '🧹', category: 'Data Science & ML',   color: '#F7931E' },
  { name: 'Image Processing',    icon: '👁️', category: 'Data Science & ML',   color: '#5C3EE8' },
  { name: 'Model Optimization',  icon: '📈', category: 'Data Science & ML',   color: '#EE4C2C' },
  { name: 'Predictive Modeling', icon: '🔬', category: 'Data Science & ML',   color: '#3776AB' },
];

// ──────────────────────────────────────────────
// EDUCATION
// ──────────────────────────────────────────────
export interface EducationItem {
  icon: string;
  degree: string;
  institution: string;
  period: string;
  gpa: string;
  status: 'Ongoing' | 'Completed';
}

export const education: EducationItem[] = [
  {
    icon: '🎓',
    degree: 'BSc in Computer Science & Engineering',
    institution: 'American International University Bangladesh (AIUB)',
    period: '2022 – Present',
    gpa: 'CGPA: 3.75 / 4.0',
    status: 'Ongoing',
  },
  {
    icon: '📘',
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Chandpur Government College, Chandpur',
    period: '2020',
    gpa: 'GPA: 5.00',
    status: 'Completed',
  },
  {
    icon: '📗',
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Hasan Ali Govt. High School, Chandpur',
    period: '2018',
    gpa: 'GPA: 5.00',
    status: 'Completed',
  },
];

// ──────────────────────────────────────────────
// EXPERIENCE  (from CV)
// ──────────────────────────────────────────────
export interface TimelineItem {
  type: 'work' | 'education';
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
}

export const timeline: TimelineItem[] = [
  {
    type: 'work',
    title: 'Software Engineer Intern',
    organization: 'NN Services & Engineering Ltd (NNSEL)',
    period: 'Feb 2025 – May 2025',
    description: 'Developed full-stack web application features using React (frontend) and Node.js (backend), implementing dynamic UI components and RESTful APIs.',
    highlights: [
      'Built & integrated backend services, handled API requests, improved performance via debugging & optimization',
      'Collaborated in an agile team — feature development, code reviews, real-world deployment workflows',
    ],
  },
  {
    type: 'education',
    title: 'BSc in Computer Science & Engineering',
    organization: 'American International University-Bangladesh (AIUB)',
    period: '2022 – Present',
    description: 'CGPA: 3.75 / 4.0. Focused on full-stack development, machine learning, algorithms, and system design.',
    highlights: ["Dean's Award — Fall 2023–24", "Dean's Award — Fall 2024–25", 'CGPA: 3.75 / 4.0'],
  },
];

// ──────────────────────────────────────────────
// PROJECTS  (from CV — exact descriptions)
// ──────────────────────────────────────────────
export interface Project {
  num: string;
  title: string;
  description: string;
  tech: string[];
  live?: string;
  github?: string;
  category: 'Web' | 'ML/AI' | 'Game' | 'API' | 'Data' | 'Graphics' | 'Systems';
  featured?: boolean;
}

export const projects: Project[] = [
  {
    num: '001',
    title: 'Student Attendance Management System API',
    description: 'Built a RESTful API using ASP.NET Core and EF Core with layered architecture, enabling secure CRUD operations, attendance tracking, and efficient data management.',
    tech: ['C#', 'ASP.NET Core', 'EF Core', 'SQL'],
    github: 'https://github.com/TakbirZaman/Student_Attendance_Management',
    category: 'API',
    featured: true,
  },
  {
    num: '002',
    title: 'ConnectHub – Social Platform',
    description: 'Designed an MVC-based social platform with role-based access control, modular post management, and secure authentication integrated with MySQL.',
    tech: ['PHP', 'MySQL', 'MVC', 'HTML/CSS'],
    live: 'http://takbir.gt.tc/ConnectHub',
    github: 'https://github.com/TakbirZaman/ConnectHub',
    category: 'Web',
    featured: true,
  },
  {
    num: '003',
    title: 'Face Recognition System',
    description: 'Engineered an end-to-end recognition pipeline using YuNet and SFace with a custom JavaScript-Python bridge for real-time capture and automated Google Drive synchronization.',
    tech: ['Python', 'OpenCV', 'YuNet', 'SFace', 'JavaScript'],
    github: 'https://github.com/TakbirZaman',
    category: 'ML/AI',
    featured: true,
  },
  {
    num: '004',
    title: 'RidePrice BD – ML Ride Fare Estimator',
    description: 'Developed a machine learning-based ride fare estimator for Dhaka with real-time client-side predictions, optimized preprocessing, and seamless deployment via Netlify integrated with GitHub.',
    tech: ['Python', 'ML', 'JavaScript', 'Netlify'],
    live: 'https://ridepricebd.netlify.app',
    github: 'https://github.com/TakbirZaman/RidePriceBD',
    category: 'ML/AI',
    featured: true,
  },
  {
    num: '005',
    title: 'beatMEE – 2D Browser Fighting Game',
    description: 'Engineered a 2D browser fighting game without external engines, implementing adaptive multi-level CPU AI, combo and rage systems, and responsive controls with optimized rendering.',
    tech: ['React', 'Canvas API', 'Vite', 'Game Dev'],
    live: 'https://TakbirZaman.github.io/beatMEE/',
    github: 'https://github.com/TakbirZaman/beatMEE',
    category: 'Game',
    featured: true,
  },
  {
    num: '006',
    title: 'Hospital Management System',
    description: 'Designed a normalized relational database for managing patients, doctors, and billing with integrity constraints ensuring data consistency.',
    tech: ['Oracle', 'SQL', 'DB Design'],
    github: 'https://github.com/TakbirZaman/Indoor-Hospital-Management',
    category: 'Data',
  },
  {
    num: '007',
    title: 'Online Job Management Portal',
    description: 'Developed a desktop-based job portal with interactive UI, validation mechanisms, and end-to-end recruitment workflow simulation.',
    tech: ['Java', 'Swing', 'Desktop UI'],
    github: 'https://github.com/TakbirZaman/Online-Job-Management-Portal',
    category: 'Systems',
  },
  {
    num: '008',
    title: 'Loan Approval Data Preprocessing',
    description: 'Built an automated data preprocessing pipeline including missing value imputation, IQR-based outlier detection, and class balancing to improve data quality and model performance.',
    tech: ['R', 'IQR', 'Data Cleaning'],
    github: 'https://github.com/TakbirZaman/Loan-Approval-Analysis-Data-Cleaning-in-R-language',
    category: 'Data',
  },
];

// ──────────────────────────────────────────────
// RESEARCH  (from CV — 2 confirmed; 2 additional from portfolio)
// ──────────────────────────────────────────────
export interface ResearchItem {
  num: string;
  title: string;
  description: string;
  tags: string[];
}

export const research: ResearchItem[] = [
  {
    num: '01',
    title: 'Sentiment-Based Product Grouping',
    description: 'Designed an NLP pipeline using TF-IDF vectorization and lemmatization, applying DBSCAN clustering and PCA for unsupervised sentiment-based grouping and visualization.',
    tags: ['NLP', 'TF-IDF', 'Lemmatization', 'DBSCAN', 'PCA', 'Clustering'],
  },
  {
    num: '02',
    title: 'Explainable Osteoporosis Detection System',
    description: 'Developed a DenseNet121-based model for knee X-ray classification and improved interpretability using Grad-CAM, achieving 87.5% recall.',
    tags: ['DenseNet121', 'Grad-CAM', 'Image Processing', 'XAI', '87.5% Recall'],
  },
  {
    num: '03',
    title: 'Waste Image Classification Using EfficientNet-B3',
    description: 'Developed an EfficientNet-B3–based model for multi-class waste image classification, achieving 94% overall accuracy with 92% precision and 90% recall. Outperformed EfficientNetV2, YOLOv8n, and EfficientNet-B0 across nine waste categories.',
    tags: ['EfficientNet-B3', 'Transfer Learning', 'Image Classification', '94% Accuracy'],
  },
  {
    num: '04',
    title: 'Multi-Task Deep Learning for Brain Tumor Segmentation & Classification',
    description: 'Developed a multi-task deep learning framework for brain tumor MRI analysis, achieving 95.6% accuracy in classifying glioma, meningioma, pituitary tumor, and healthy cases.',
    tags: ['Multi-Task Learning', 'Brain MRI', 'Tumor Segmentation', '95.6% Accuracy'],
  },
];
