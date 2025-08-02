import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Alishan Ali",
  initials: "Alishan",
  url: "https://dillion.io",
  location: "Dundee, United Kingdom",
  description: "Software Engineer",
  summary:
    "I am a Full Stack Engineer specializing in React Native, Next.js, Node.js, and MongoDB, with expertise in building scalable web and mobile applications. Currently working at Byldd, I focus on developing high-performance applications with strong frontend UI/UX, backend architecture, and cloud deployment. As the founder of Zero Degree Coder, I create courses and mentor developers in React Native and full-stack development. I have also launched Kahani FM, a Hindi storytelling platform. Passionate about building impactful digital solutions and sharing knowledge, I continuously seek new opportunities to innovate. I also enjoy creating YouTube videos and producing valuable content for my audience.",
  avatarUrl:
    "https://53qu3820aq.ufs.sh/f/5Zfltx6SlWVptV8eZ20CeYdAwrWKjHU0B28zGpcN6RsyZg9b",
    // "https://53qu3820aq.ufs.sh/f/5Zfltx6SlWVp4dnYANKA7arkLHsXjvq2dfhMu5T8VwoxGNzZ",
  skills: [
    "React Native",
    "Expo",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Firebase",
    "SQL",
    "Python",
    "PostgreSQL",
    "Docker",
    "Java",
    "PHP",
    "Laravel",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "md.alishanali88@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mdalishanali",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/md-alishan-ali-251614222/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/MDALISHANALI2",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@zerodegreecoder",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:md.alishanali88@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Byldd",
      badges: [],
      href: "",
      location: "Remote",
      title: "Senior Full Stack Engineer",
      logoUrl: "https://byldd.com/content/images/2023/01/byldd-logo.svg",
      start: "June 2022",
      end: new Date().toLocaleString("default", {
        month: "short",
        year: "numeric",
      }),
      description: `
      Built the complete frontend for an AI-driven financial advisory platform designed to generate reports and
      deliver in-depth analytics.
      - Developed the frontend using Next.js and React, enabling a smooth and intuitive user interface.
      - Integrated MongoDB with the frontend for seamless data handling and retrieval.
      - Utilized React Query and AI frameworks (Llama, Claude, LangChain) to power complex data queries and
      generate AI responses & React Charts for Analytics
      `,
    },
    //     {
    //       company: "Makamba Maternity",
    //       badges: [],
    //       href: "https://apps.apple.com/app/id6469010105",
    //       location: "Remote",
    //       title: "Full Stack App Developer Intern",
    //       logoUrl: "https://i.ibb.co/qNmq5PS/Screenshot-2024-11-27-at-02-34-56.png",
    //       start: "Jan 2023",
    //       end: "April 2023",
    //       description: `Makamba Maternity - is a mobile app built for pregnant women to help them with their
    // pregnancy and to deal with doctors while tracking their progress
    // - I managed to build the entire frontend of the mobile app using React Native and Typescript.
    // - Managed to implement in-app payments, push notifications & Google Cloud Storage.
    // - The app extends more complex features like booking a meeting with doctor, messaging and much more.`,
    //     },
    //     {
    //       company: "Viia",
    //       href: "https://apps.apple.com/gb/app/viia/id6447322346",
    //       badges: [],
    //       location: "Remote",
    //       title: "Full Stack App Developer Intern",
    //       logoUrl: "https://i.ibb.co/KDZD0j7/Screenshot-2024-11-27-at-02-35-59.png",
    //       start: "Sept 2022",
    //       end: "Feb 2023",
    //       description: `Developed Viia, a carpooling app for users in Manchester, Birmingham, and London, aimed at
    // reducing travel costs.
    // - Developed a high-performing mobile frontend using React Native and TypeScript.
    // - Integrated Google Cloud Maps and Firebase Storage, enabling in-app payments, real-time
    // driver locations, and driver messaging.`,
    //     },
  ],
  education: [
    {
      school: "Manipal University Jaipur",
      href: "https://jaipur.manipal.edu/",
      degree: "Bachelor of Computer Science",
      logoUrl:
        "https://ik.imagekit.io/syustaging/SYU_PREPROD/manipal-university-jaipur-logo-png_3OygX3qEM.webp?tr=w-3840",
      start: "2021",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Zero Degree Coder – LMS Platform",
      href: "https://www.zerodegreecoder.in/",
      active: true,
      description:
        "Built a full-featured Learning Management System (LMS) where instructors can upload, manage, and sell online courses, while students can securely purchase and stream content. Features include secure authentication, video streaming with MUX, course progress tracking, and admin-level dashboards.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "PostgreSQL",
        "Prisma",
        "MUX",
        "Stripe",
      ],
      links: [
        {
          type: "Web App",
          href: "https://www.zerodegreecoder.in/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://53qu3820aq.ufs.sh/f/5Zfltx6SlWVpBR2RngbYkTOICG905SfsRLvQBxWej1DdYErA", // replace with real image
      dates: "",
    },
    {
      title: "AutoAI Shorts: AI Video Creator",
      href: "https://play.google.com/store/apps/details?id=com.alishanbyldd.AutoAIShorts",
      active: true,
      description:
        "AutoAI Shorts is a cross-platform AI-powered mobile app that allows users to create viral short-form videos (like Reels, Shorts, and TikToks) using generative AI. It supports automated script generation, lifelike AI voiceovers, image generation, and video rendering. Designed for creators, influencers, and marketers to produce professional-quality content with minimal effort.",
      technologies: [
        "React Native",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Stable Diffusion",
        "Google Gemini",
        "ElevenLabs API",
        "Remotion",
        "AWS S3",
        "AWS Lambda",
        "EC2",
        "Firebase",
        "Google Play Console",
      ],
      links: [
        {
          type: "Android App",
          href: "https://play.google.com/store/apps/details?id=com.alishanbyldd.AutoAIShorts",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://53qu3820aq.ufs.sh/f/5Zfltx6SlWVpy0s9rZ3tAw6GHljQCyF4TB3YNaDgPvM5ISex", // Replace with an actual promotional image or screenshot
      dates: "",
    },
    {
      title: "Okee – Parental Control App",
      href: "https://apps.apple.com/app/idXXXXXXXXXX", // Replace with actual App Store link
      active: true,
      description:
        "Okee is a full-stack iOS parental control app designed to help parents monitor and guide their children's digital habits. Built using SwiftUI and Apple’s Screen Time API, it allows parents to set screen time limits, view app usage, and receive alerts. A custom backend powers user accounts, data sync, and analytics, ensuring privacy and scalability.",
      technologies: [
        "Swift",
        "SwiftUI",
        "Screen Time API",
        "iOS SDK",
        "Core Data",
        "UserDefaults",
        "Push Notifications",
        "TestFlight",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT Auth",
        "REST API",
        "App Store Connect",
      ],
      links: [
        {
          type: "iOS App",
          href: "https://apps.apple.com/app/idXXXXXXXXXX", // Replace with actual App Store link
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://53qu3820aq.ufs.sh/f/5Zfltx6SlWVpxhONqo1KcVbWq3Urepiuw4Y9jdlX7zLgvJTA", // Replace with your app's promo image
      dates: "",
    },
    {
      title: "Arrange – AI-Powered Scheduling Platform",
      href: "https://www.arrangeai.io/",
      active: true,
      description:
        "Contributed to Arrange, an intelligent scheduling platform designed for individuals and teams managing multiple external calendars. Built to streamline coordination across parties, Arrange automates availability matching, calendar syncing, and meeting setup—particularly for recruiters and organizations handling complex scheduling flows. The platform prioritizes speed, simplicity, and automation, offering a seamless scheduling experience.",
      technologies: [
        "PHP",
        "Laravel",
        "Vue.js",
        "SQL",
        "React.js",
        "JavaScript",
      ],
      links: [
        {
          type: "Live Site",
          href: "https://www.arrangeai.io/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://53qu3820aq.ufs.sh/f/5Zfltx6SlWVpQEdi1A5bmCTWSgtO45YHLqvJ73dfo8xIZpD1", // Replace with actual screenshot of the Arrange homepage or dashboard
      dates: "",
    },
  ],
  hackathons: [
    {
      title: "notJustHack – AI Hackathon Project",
      dates: "Nov 2–4, 2024",
      location: "Remote",
      description:
        "Built the prototype of AutoAI Shorts during the notJustHack hackathon—a mobile app that uses AI to generate short-form videos like Reels, Shorts, and TikToks. The app integrates text-to-speech (TTS), image generation, background music, and video rendering into one seamless flow. Designed to help users rapidly create engaging content using AI with minimal effort.",
      image:
        "https://cdn.prod.website-files.com/671f94867f7d8fc344acc7d6/67491abbfa5fe911779f1dc5_Logo_white.svg",
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mdalishanali",
        },
      ],
    },

    // {
    //   title: "Quackathon - University of Dundee",
    //   dates: "May 2024",
    //   location: "Dundee, United Kingdom",
    //   description:
    //     "A blockchain based platform which allows users to create and trade their own NFTs. It's a learning platform for users to learn about blockchain and NFTs. Trade, Track, Create, Learn.",
    //   image: "https://ducs.dev/images/ducs_logo.webp",

    //   links: [
    //     {
    //       title: "Github",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/my6footprint-machine-learning",
    //     },
    //   ],
    // },
    // {
    //   title: "Quackathon - University of Dundee",
    //   dates: "May 2023",
    //   location: "Dundee, United Kingdom",
    //   description:
    //     "A mobile app which allows users to literate themselves about money and finance. The app uses AI to provide personalised financial advice to users. Consisted of a piggy bank, a quiz and a chatbot.",
    //   image: "https://ducs.dev/images/ducs_logo.webp",
    //   links: [],
    // },
  ],
} as const;
