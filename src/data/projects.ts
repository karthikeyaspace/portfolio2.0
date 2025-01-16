interface DataTypes {
  name: string;
  description: string;
  github: string;
  tech: string[];
  try?: string;
  fav?: boolean;
}

/*  


  {
    "name": "",
    "description": "",
    "github": "",
    "tech": [
      "",
      ""
    ],
    try: ""
  },


*/

const allprojects: DataTypes[] = [
  {
    "name": "Task Manager",
    "description": "A C++ task scheduler using doubly linked lists and queues. Features task creation, deletion, prioritization, and backup to a text file.",
    "github": "https://github.com/karthikeyaspace/Task-Manager-cpp",
    "tech": [
      "C++",
      "Data Structures"
    ],
  },
  {
    "name": "SurfSafe",
    "description": "A Python app that blocks malicious websites using the hosts file, enhancing internet safety and parental control.",
    "github": "https://github.com/karthikeyaspace/SurfSafe.git",
    "tech": [
      "Python",
      "Tkinter",
      "Host File"
    ],
    fav: true
  },
  {
    "name": "Crypt0-Know",
    "description": "A web app to check cryptocurrency prices using the CoinGecko API. Features a user-friendly interface and real-time updates.",
    "github": "https://github.com/karthikeyaspace/Crypto-React-App.git",
    "tech": [
      "React JS",
      "CoinGecko API",
    ]
  },
  {
    "name": "FOCUS",
    "description": "A Python app that blocks distracting websites and apps using the hosts file, boosting productivity and parental control.",
    "github": "https://github.com/karthikeyaspace/FOCUS.git",
    "tech": [
      "Python",
      "Tkinter"
    ]
  },
  {
    "name": "Health symptom predictor",
    "description": "A Flask-based ML app that predicts diseases using a decision tree classifier from scikit-learn based on user-input symptoms.",
    "github": "https://github.com/karthikeyaspace/HealthCare",
    "tech": [
      "Reactjs",
      "Flask",
      "Machine Learning"
    ],
  },
  {
    "name": "NextPad",
    "description": "A React and Node.js art-sharing app with JWT authentication, allowing users to share creative pieces and comment on them.",
    "github": "https://github.com/karthikeyaspace/NextPad",
    "tech": [
      "React JS",
      "Express",
      "MongoDB"
    ]
  },
  {
    "name": "The Coder Companion",
    "description": "An AI-powered coding platform with Gemini integration for code completion and query resolution, built with React and Node.js.",
    "github": "https://github.com/karthikeyaspace/theCoderCompanion",
    "tech": [
      "React JS",
      "Nodejs",
      "Gemini API"
    ],
    "try": "https://the-coder-companion.vercel.app/",
    fav: true
  },
  {
    "name": "College club website",
    "description": "A React and Tailwind CSS website for a college club, showcasing events, testimonials, and team details, deployed on Vercel.",
    "github": "https://github.com/vjdataquesters/website",
    "tech": [
      "React JS",
      "Tailwind",
      "Vercel"
    ],
    "try": "https://vjdataquesters.vercel.app",
    fav: true
  },
  {
    "name": "Shortifyy",
    "description": "A URL shortening service offering a user-friendly interface for shortening and redirecting URLs",
    "github": "https://github.com/karthikeyaspace/shortn",
    "tech": [
      "TypeScript",
      "Tailwind",
      "Node JS",
      "Supabase"
    ],
    "try": "https://shortifyy.vercel.app"
  },
  {
    "name": "CodeWatch",
    "description": "A coding platform for exams and contests, monitoring tabs for suspicious activity and providing live stats to teachers.",
    "github": "https://github.com/karthikeyaspace/codewatch",
    "tech": [
      "Typescript",
      "Tailwind",
      "Express",
      "MongoDB",
      "Judge0 API"
    ]
  },
  {
    "name": "Transferit",
    "description": "A secure file-sharing app built with TypeScript, Supabase, and AWS S3, allowing password-protected and anonymous file transfers.",
    "github": "https://github.com/karthikeyaspace/transferit",
    "tech": [
      "Typescript",
      "Tailwind",
      "Supabase",
      "AWS S3"
    ],
    "try": "https://transferfile.vercel.app"
  },
  {
    "name": "amailer",
    "description": "An npm package for sending bulk emails using Nodemailer, Mailgun, and SendGrid, ideal for marketing campaigns.",
    "github": "https://github.com/karthikeyaspace/amailer",
    "tech": [
      "Node JS",
      "Typescript",
      "Command line"
    ],
    "try": "https://npmjs.com/package/amailer"
  },
  {
    "name": "ResearchGPT",
    "description": "An AI tool using Gemini API for detailed explanations, with Supabase auth and Framer Motion for dynamic user experiences.",
    "github": "https://github.com/karthikeyaspace/research-gpt",
    "tech": [
      "TypeScript",
      "Supabase",
      "Nodejs",
      "Gemini API",
      "Framer Motion"
    ],
    "try": "https://researchgptai.vercel.app",
    fav: true
  },
  {
    "name": "Railmadad",
    "description": "An AI-powered complaint management system for railways, built with TypeScript, Flask, and Supabase for SIH 2024.",
    "github": "https://github.com/karthikeyaspace/railmadad",
    "tech": [
      "Typescript",
      "Gemini api",
      "i18n",
      "Flask",
      "Supabase"
    ],
    try: ""
  },
  {
    "name": "Fullstack-Boilerplate",
    "description": "A TypeScript React boilerplate for rapid web app development, featuring a clean and modular code structure.",
    "github": "https://github.com/karthikeyaspace/Fullstack-Boilerplate",
    "tech": [
      "Typescript",
      "Nodejs",
      "Clean Code"
    ],
    try: "",
    fav: true
  },
  {
    "name": "PhotolicAI",
    "description": "AI-powered image generator that uses the flux-schnell model via Replicate API, enabling users to create stunning images.",
    "github": "https://github.com/karthikeyaspace/photolic",
    "tech": [
      "NextJs",
      "Prisma ORM",
      "Postgres DB",
      "Google OAuth",
      "Replicate API"
    ],
    "try": "https://photolic.itskv.me",
    fav: true
  },
  {
    "name": "Embeddable",
    "description": "A platform to create and embed chatbots for websites, featuring custom user authentication and authorization using jwt",
    "github": "https://github.com/karthikeyaspace/embeddable",
    "tech": [
      "TypeScript",
      "Fastapi-Python",
      "Postgres",
      "RAG"
    ],
    fav: true
  },
  {
    "name": "Task Manager Go",
    "description": "A task manager app built with Golang, React, Postgres, and Tailwind, featuring task creation, editing, and completion.",
    "github": "https://github.com/karthikeyaspace/task-manager",
    "tech": [
      "Golang",
      "React JS",
      "Postgres",
      "Docker"
    ],
    fav: true
  },
  {
    "name": "CloudPreview",
    "description": "A service for hosting static HTML files on AWS S3, generating unique links for instant previews.",
    "github": "https://github.com/karthikeyaspace/cdn-go",
    "tech": [
      "Golang",
      "AWS S3"
    ]
  },
  {
    "name": "Gorun",
    "description": "A Go-based CLI tool to manage full-stack project services using a `gorun.yaml` file for streamlined execution.",
    "github": "https://github.com/karthikeyaspace/gorun",
    "tech": [
      "Golang",
      "Command line"
    ],
    fav: true
  },
  {
    "name": "ColdMailerGo",
    "description": "A Go tool for automating personalized email campaigns using AI and SMTP, with Excel-based data input.",
    "github": "https://github.com/karthikeyaspace/cold",
    "tech": [
      "Golang",
      "Gemini",
      "SMTP"
    ]
  },
  {
    "name": "E-commerce API",
    "description": "A scalable e-commerce API built with TypeScript, Express, and Firebase for order tracking and stock management.",
    "github": "https://github.com/karthikeyaspace/e-commerce",
    "tech": [
      "Typescript",
      "Expressjs",
      "Firebase"
    ]
  },
  {
    "name": "LLM Quantization",
    "description": "LLM quantization using PyTorch and Hugging Face, using LLama 3.2 3b model",
    "github": "https://colab.research.google.com/drive/1hAHoZEuvGrLI3oQzy3yJa88cjJ4SNrYw",
    "tech": [
      "Python",
      "Pytorch",
      "Llama 3.2 3b"
    ],
    try: "https://colab.research.google.com/drive/1hAHoZEuvGrLI3oQzy3yJa88cjJ4SNrYw",
    fav: true
  },
  {
    name: "Realtime Leaderboard",
    description: "A real-time leaderboard system using Go and Redis, featuring score updates, player rankings, and fast data retrieval.",
    github: "https://github.com/karthikeyaspace/realtime-leaderboard",
    tech: [
      "Golang",
      "Redis"
    ],
    fav: true
  },
  {
    name: "Caching and Ratelimiting in go",
    description: "A Go-based caching and API server with In-memory data Caching and rate-limiting (global and per-client limiting)",
    github: "https://github.com/karthikeyaspace/cacherate-go",
    tech: [
      "Golang",
      "Caching",
      "Proxy server"
    ],
  }
]

export const projects = allprojects.reverse();