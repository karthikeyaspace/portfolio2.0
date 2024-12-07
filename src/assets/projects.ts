interface DataTypes {
  name: string;
  description: string;
  github: string;
  tech: string[];
  try?: string;
}

export const projects: DataTypes[] = [
  {
    name: "E-commerce API",
    description:
      "Scalable e-commerce API built with TypeScript, Express, and Firebase. Key features include fetching recent orders, tracking user purchases, and calculating total stock. The API emphasizes clean code, modular design, and efficient database queries.",
    github: "https://github.com/karthikeyaspace/e-commerce",
    tech: ["Typescript", "Expressjs", "Firebase"],
  },
  {
    name: "ColdMailerGo",
    description:
      "Automates email communication by reading structured data from an Excel file, generating personalized email content using AI, and sending emails via an SMTP client. Includes config management, and AI integration, smtp client and efficient error handling.",
    github: "https://github.com/karthikeyaspace/cold",
    tech: ["Golang", "Gemini", "SMTP"],
  },
  {
    name: "gorun",
    description:
      "Lightweight CLI tool built with Go that simplifies managing services for your full-stack projects. Using a gorun.yaml file, it lets users define and execute commands for frontend, backend, databases, and more with a single terminal command `gorun`.",
    github: "https://github.com/karthikeyaspace/gorun",
    tech: ["Golang"],
  },
  {
    name: "CloudPreview",
    description:
      "A user-friendly service for instantly hosting static HTML files. Users can upload their HTML and CSS files to S3, generate a unique link, and view their site at any time.",
    github: "https://github.com/karthikeyaspace/cdn-go",
    tech: ["Golang", "AWS S3"],
  },
  {
    name: "Task Manager",
    description:
      "A task manager app that helps you to manage your tasks efficiently. It is build using Golang, Postgres, Reactjs, Tailwind. It features task create, delete, edit and mark as completed.",
    github: "https://github.com/karthikeyaspace/task-manager",
    tech: ["Golang", "React JS", "Postgres", "Tailwind", "Docker"],
  },
  {
    name: "Embeddable",
    description:
      "A platform to create and embed chatbot for your business or personal website. It is built using Reactjs, Fastapi, Python, Postgres, and Tailwind CSS. Featuring custom user authentication and authorization using jwt.",
    github: "https://github.com/karthikeyaspace/embeddable",
    tech: [
      "React JS",
      "TypeScript",
      "Fastapi",
      "Python",
      "Postgres",
      "Tailwind",
    ],
  },
  {
    name: "PhotolicAI",
    description:
      "AI-powered photorealistic image generator that uses the FLUX-schenell model via Replicate API, enabling users to create stunning images with seamless integration of Next.js, Prisma-Postgres, and Google OAuth.",
    github: "https://github.com/karthikeyaspace/photolic",
    tech: [
      "NextJs",
      "Tailwind",
      "Prisma ORM",
      "Postgres DB",
      "Google OAuth",
      "Replicate API",
    ],
    try: "https://photolic.vercel.app",
  },
  {
    name: "ResearchGPT",
    description:
      "Research GPT is an AI-driven tool leveraging the Gemini AI API, offering detailed, elaborated explanations with seamless Supabase authentication and dynamic Framer Motion integration for enhanced user experiences.",
    github: "https://github.com/karthikeyaspace/research-gpt",
    tech: [
      "TypeScript",
      "Supabase auth",
      "Tailwind",
      "Nodejs",
      "Gemini API",
      "Framer Motion",
    ],
    try: "https://researchgptai.vercel.app",
  },
  {
    name: "amailer",
    description:
      "a npm package build on top of nodemailer, mailgun, sendgrid to send emails easily. It has a user-friendly documentation and is easy to use. It can send emails in bulk mainly used for marketing purposes.",
    github: "https://github.com/karthikeyaspace/amailer",
    tech: ["Node JS", "Typescript"],
    try: "https://npmjs.com/package/amailer",
  },
  {
    name: "Transferit",
    description:
      "Transferit is a file sharing application that allows you to share files securely and anonymously with an option of setting password. It is build using Typescript, Tailwind css, Supabase, AWS S3. It has a user-friendly interface and is easy to use.",
    github: "https://github.com/karthikeyaspace/transferit",
    tech: ["Typescript", "Tailwind", "Supabase", "AWS S3"],
    try: "https://transferfile.vercel.app",
  },
  {
    name: "CodeWatch",
    description:
      "A coding platform built to conduct lab exams and coding contests. This app actively monitor tabs while on test and block the student if suspicious activity is detected. Teacher can get live stats of the test.",
    github: "https://github.com/karthikeyaspace/codewatch",
    tech: ["Typescript", "Tailwind", "Express", "MongoDB", "Judge0 API"],
  },
  {
    name: "Shortifyy",
    description:
      "Shortifyy is a URL shortening service that helps you to shorten your long URLs and redirects when you visit the short url. It is built using TypeScript, Tailwind CSS, Node JS, and Supabase Postgress db. It has a interactive user-friendly interface and is easy to use.",
    github: "https://github.com/karthikeyaspace/shortn",
    tech: ["TypeScript", "Tailwind", "Node JS", "Supabase"],
    try: "https://shortifyy.vercel.app",
  },
  {
    name: "College club website",
    description:
      "Designed, Developed and maintaining a website for college club showcasing about the club, events conducted, testimonials, team page etc. current deployed in vercel. Built using React JS, Tailwind CSS",
    github: "https://github.com/vjdataquesters/website",
    tech: ["React JS", "Tailwind", "Vercel"],
    try: "https://vjdataquesters.vercel.app",
  },
  {
    name: "The Coder Companion",
    description:
      "The coder Companion is a next generation coding platform equiped with gemini. It helps user to code efficiently. The AI powered code completion helps user to code faster and helps you to clear your queries.",
    github: "https://github.com/karthikeyaspace/theCoderCompanion",
    tech: ["React JS", "Nodejs", "Express", "CSS", "Gemini API"],
    try: "https://the-coder-companion.vercel.app/",
  },
  {
    name: "NextPad",
    description:
      "NextPad is a creative art sharing application built using reactjs, nodejs and mongodb. It allows users to share their creative pieces and lets the viewers write comments. It demonstrates tokenization using jwt for authentication.",
    github: "https://github.com/karthikeyaspace/NextPad",
    tech: ["React JS", "Nodejs", "Express", "MongoDB"],
  },
  {
    name: "FOCUS",
    description:
      "Focus is a Python app enhancing focus by blocking distracting websites, automatically closing specified apps, and utilizing the hosts file. Ideal for boosting productivity and parental control by limiting access to unwanted sites and apps.",
    github: "https://github.com/karthikeyaspace/FOCUS.git",
    tech: ["Python", "Tkinter"],
  },
  {
    name: "Crypt0-Know",
    description:
      "Crypt0-Know is a simple web application that helps you to know the current price of the cryptocurrencies. It uses the CoinGecko API to fetch the current price of the cryptocurrencies. It has a user-friendly interface and is easy to use.",
    github: "https://github.com/karthikeyaspace/Crypto-React-App.git",
    tech: ["React JS", "CoinGecko API", "CSS", "JavaScript"],
  },
  {
    name: "SurfSafe",
    description:
      "SurfSafe, a Python app, enhances internet safety by automatically blocking malicious websites, safeguarding against phishing and cyber threats. It leverages the hosts file and HTTPS verification to ensure protection, doubling as parental control for blocking undesirable sites.",
    github: "https://github.com/karthikeyaspace/SurfSafe.git",
    tech: ["Python", "Tkinter", "Hosts File"],
  },
];
