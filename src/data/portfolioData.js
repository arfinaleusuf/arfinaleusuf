export const personalInfo = {
  name: "Arfin Al Eusuf",
  preferredName: "Arfin",
  roleTitle: "Competitive Programmer · CSE Student · Software Developer",
  roles: [
    "Competitive Programmer",
    "CSE Student",
    "Data Structures & Algorithms Enthusiast",
    "Aspiring Software Engineer",
  ],
  tagline: "Solving complex algorithmic problems & building performant software.",
  bio: "A Computer Science & Engineering student with a passion for Competitive Programming and software craftsmanship. I spend my days dissecting Data Structures & Algorithms, solving challenging problems in C++ and Python, and architecting modern, accessible web applications.",
  email: "arfinaleusuf@gmail.com",
  location: "Bangladesh",
  availableForWork: true,
  statusText: "Available for Internships & Collaborations",
  profileImage: "/image/profile pic light.png",
  socials: {
    github: "https://github.com/ArfinAlEusuf",
    linkedin: "https://www.linkedin.com/in/arfinaleusuf/",
    facebook: "https://www.facebook.com/ArfinAlEusuf/",
    instagram: "https://www.instagram.com/arfinaleusuf/",
  },
  quickStats: [
    { label: "Problems Solved", value: "350+" },
    { label: "Contests Participated", value: "30+" },
    { label: "Algorithms Mastered", value: "40+" },
    { label: "Academic GPA", value: "5.00" },
  ],
};

export const terminalCodeSnippet = `// Arfin Al Eusuf - Developer Profile
#include <iostream>
#include <vector>
#include <string>

struct Developer {
    std::string name = "Arfin Al Eusuf";
    std::string major = "Computer Science & Engineering";
    std::vector<std::string> interests = {
        "Data Structures", "Graph Theory", 
        "Dynamic Programming", "Full-Stack Dev"
    };
    std::string primary_lang = "C++20";
    
    void solve_problem() {
        std::cout << "status: AC (Accepted)\\n";
        std::cout << "time: O(N log N) | space: O(N)\\n";
    }
};

int main() {
    Developer arfin;
    arfin.solve_problem();
    return 0;
}`;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "CP Journey", href: "#cp" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Activity", href: "#activity" },
  { label: "Contact", href: "#contact" },
];

export const skillsData = {
  categories: [
    { id: "programming", name: "Programming" },
    { id: "cs", name: "Computer Science" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend / Database" },
  ],
  skills: [
    // Programming
    {
      name: "C++",
      category: "programming",
      level: 90,
      badge: "Primary Language",
      description: "STL (vector, map, set, priority_queue), Fast I/O, OOP, Memory Management, CP.",
      topics: ["STL Containers", "Templates", "Custom Comparators", "Bit Manipulation"],
    },
    {
      name: "C",
      category: "programming",
      level: 85,
      badge: "Foundational",
      description: "Pointers, dynamic memory allocation (malloc/free), structs, low-level problem solving.",
      topics: ["Pointers", "Dynamic Memory", "Structs", "Data Organization"],
    },
    {
      name: "Python",
      category: "programming",
      level: 80,
      badge: "Scripting & DSA",
      description: "Scripting, algorithm prototyping, collections module, clean readable logic.",
      topics: ["List Comprehensions", "Collections", "OOP", "Algorithm Scripting"],
    },
    {
      name: "JavaScript (ES6+)",
      category: "programming",
      level: 85,
      badge: "Web Logic",
      description: "Asynchronous programming (Promises, async/await), functional methods, DOM manipulation.",
      topics: ["Async/Await", "Closures", "Event Loop", "ESNext Features"],
    },

    // Computer Science
    {
      name: "Data Structures",
      category: "cs",
      level: 92,
      badge: "Core Strength",
      description: "Arrays, Linked Lists, Stacks, Queues, Binary Trees, Segment Trees, Heaps, Disjoint Set Union (DSU).",
      topics: ["Trees & Graphs", "DSU", "Segment Trees", "Hash Maps"],
    },
    {
      name: "Algorithms",
      category: "cs",
      level: 88,
      badge: "Core Strength",
      description: "Binary Search, Two Pointers, Greedy, Dynamic Programming, BFS/DFS, Dijkstra, Number Theory.",
      topics: ["Dynamic Programming", "Graph Traversals", "Divide & Conquer", "Greedy"],
    },
    {
      name: "Object-Oriented Programming (OOP)",
      category: "cs",
      level: 88,
      badge: "Architecture",
      description: "Encapsulation, Inheritance, Polymorphism, Abstraction, Design Patterns, Clean Code.",
      topics: ["SOLID Principles", "Inheritance", "Polymorphism", "Abstraction"],
    },
    {
      name: "Database Management Systems (DBMS)",
      category: "cs",
      level: 80,
      badge: "Data Systems",
      description: "Relational modeling, normalization (1NF-3NF), indexing, ACID transactions, ER diagrams.",
      topics: ["Relational Algebra", "Normalization", "Indexing", "ACID Properties"],
    },

    // Frontend
    {
      name: "React.js",
      category: "frontend",
      level: 88,
      badge: "Modern UI",
      description: "Component architecture, hooks (useState, useEffect, useMemo), state management, performance.",
      topics: ["Hooks & State", "Custom Components", "Virtual DOM", "Vite Ecosystem"],
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      level: 92,
      badge: "Styling Engine",
      description: "Utility-first design, dark mode, responsive layouts, custom design tokens, modern micro-interactions.",
      topics: ["Responsive Grid", "Dark Mode", "Custom Theme", "Glassmorphism"],
    },
    {
      name: "HTML5 & Semantic Markup",
      category: "frontend",
      level: 95,
      badge: "Web Standard",
      description: "Semantic web structure, accessibility (a11y), SEO tags, clean document hierarchy.",
      topics: ["Semantic Tags", "Accessibility", "SEO Optimization", "DOM Architecture"],
    },
    {
      name: "CSS3 & Modern Animations",
      category: "frontend",
      level: 88,
      badge: "Visual Polish",
      description: "Flexbox, CSS Grid, custom properties, transitions, keyframe animations, 3D transforms.",
      topics: ["CSS Grid", "Flexbox", "Keyframes", "Custom Properties"],
    },

    // Backend / Database
    {
      name: "FastAPI",
      category: "backend",
      level: 78,
      badge: "Modern API",
      description: "High-performance Python backend, asynchronous endpoints, Pydantic validation, automatic OpenAPI docs.",
      topics: ["Async Endpoints", "Pydantic Schemas", "Dependency Injection", "Swagger Docs"],
    },
    {
      name: "SQL & Relational Queries",
      category: "backend",
      level: 82,
      badge: "Querying",
      description: "Complex joins, subqueries, grouping, aggregations, schema design, constraints.",
      topics: ["Complex Joins", "Aggregations", "Subqueries", "Schema Constraints"],
    },
    {
      name: "SQLite",
      category: "backend",
      level: 80,
      badge: "Embedded DB",
      description: "Lightweight relational persistence, local development, transactional queries, indexing.",
      topics: ["Schema Migration", "Transactions", "Query Optimization", "Local Storage"],
    },
    {
      name: "RESTful API Architecture",
      category: "backend",
      level: 85,
      badge: "Integration",
      description: "HTTP verbs, status codes, JSON serialization, endpoint design, error handling.",
      topics: ["Endpoint Design", "HTTP Protocols", "Error Handling", "JSON Payloads"],
    },
  ],
};

export const cpData = {
  stats: [
    { label: "Problems Solved", value: 350, suffix: "+", description: "Across Codeforces, LeetCode, and platforms" },
    { label: "Contests Participated", value: 30, suffix: "+", description: "Rated rounds and live algorithmic battles" },
    { label: "Max Rating", value: 1200, suffix: "+", description: "Codeforces Pupil & active competitor" },
    { label: "Algorithms Mastered", value: 40, suffix: "+", description: "Graph theory, DP, Greedy, Number Theory" },
  ],
  platforms: [
    {
      name: "Codeforces",
      handle: "ArfinAlEusuf",
      rank: "Pupil",
      color: "from-emerald-500 to-cyan-500",
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
      rating: "1200+ Peak",
      solved: "200+ Problems",
      contests: "20+ Rounds",
      url: "https://codeforces.com/profile/ArfinAlEusuf",
      tagline: "Frequent participant in Div. 2 & Div. 3 Contests.",
    },
    {
      name: "LeetCode",
      handle: "ArfinAlEusuf",
      rank: "Active Solver",
      color: "from-amber-500 to-orange-500",
      badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
      rating: "Top Percentile",
      solved: "120+ Problems",
      contests: "Biweekly & Weekly",
      url: "https://leetcode.com/u/ArfinAlEusuf/",
      tagline: "Focus on Medium & Hard DSA questions.",
    },
    {
      name: "HackerRank",
      handle: "ArfinAlEusuf",
      rank: "5★ C++ Coder",
      color: "from-emerald-400 to-teal-500",
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
      rating: "Gold Badges",
      solved: "Problem Solving (4★)",
      contests: "Python & C++",
      url: "https://www.hackerrank.com/profile/arfinaleusuf",
      tagline: "Certified in Problem Solving & Object-Oriented C++.",
    },
    {
      name: "CodeChef",
      handle: "arfinaleusuf",
      rank: "Div 3 Competitor",
      color: "from-amber-600 to-yellow-600",
      badgeColor: "text-yellow-400 bg-yellow-500/10 border-yellow-500/30",
      rating: "Rated Solver",
      solved: "Star Contender",
      contests: "Starters & Cook-offs",
      url: "https://www.codechef.com/users/arfinaleusuf",
      tagline: "Engaging in speed problem solving and Starters.",
    },
  ],
  topics: [
    { name: "Graph Theory", algorithms: "BFS, DFS, Dijkstra, Tree Traversals, Topological Sort", solved: "60+" },
    { name: "Dynamic Programming", algorithms: "Knapsack, LCS, LIS, State Compression, Grid Paths", solved: "55+" },
    { name: "Greedy & Two Pointers", algorithms: "Interval Scheduling, Sliding Window, Prefix Sums", solved: "80+" },
    { name: "Binary & Ternary Search", algorithms: "Search on Answer, Monotonic Functions", solved: "45+" },
    { name: "Number Theory", algorithms: "Sieve of Eratosthenes, GCD/LCM, Modular Arithmetic", solved: "40+" },
    { name: "Data Structures", algorithms: "DSU, Segment Trees, Heaps, Stacks, Monotonic Queues", solved: "70+" },
  ],
};

export const projectsData = [
  {
    id: "number-converter",
    title: "Number Converter & Base Calculator",
    category: "Tools & Algorithms",
    featured: true,
    image: "/image/number converter.png",
    description:
      "A fast, algorithmic utility tool for instant multi-base conversions across Binary, Decimal, Hexadecimal, and Octal with bit representation inspection.",
    longDescription:
      "Designed as an algorithmic utility for computer science students and system engineers. Demonstrates low-level bitwise operations, integer parsing, two's complement conversion, and custom mathematical conversion algorithms with real-time reactive feedback.",
    tags: ["JavaScript", "Bitwise Algorithms", "Base Math", "Tailwind CSS"],
    liveUrl: "#number-converter",
    githubUrl: "https://github.com/ArfinAlEusuf",
    highlights: [
      "Real-time bidirectional conversion across 4 numeral systems",
      "Bit-length calculation and binary nibble formatting",
      "Robust input validation against illegal characters per radix",
      "Integrated directly into this portfolio for live experimentation!",
    ],
    interactive: true,
  },
  {
    id: "tea-house",
    title: "Tea House - Artisan Storefront",
    category: "Web Applications",
    featured: true,
    image: "/image/TeaHouse.png",
    description:
      "An aesthetic, soothing e-commerce landing experience designed for an artisan tea brand with modern typography and fluid responsive layouts.",
    longDescription:
      "A responsive web application emphasizing visual balance, semantic HTML structure, clean CSS layout patterns, and modern responsive design. Created to explore consumer product presentation and brand storytelling.",
    tags: ["HTML5", "CSS3", "JavaScript", "UI/UX Architecture"],
    liveUrl: "https://tea-house-delta.vercel.app/",
    githubUrl: "https://github.com/ArfinAlEusuf",
    highlights: [
      "Mobile-first responsive architecture",
      "Custom subtle hover micro-interactions",
      "Accessible typography hierarchy and contrast ratios",
      "High Lighthouse performance score",
    ],
  },
  {
    id: "penguin-fashion",
    title: "Penguin Fashion - Dynamic Apparel",
    category: "Web Applications",
    featured: true,
    image: "/image/Penguin Fashion.png",
    description:
      "A modern fashion e-commerce storefront featuring dynamic product showcases, responsive card grids, and streamlined shopping navigation.",
    longDescription:
      "Built with utility-first modern CSS and modern component thinking. Explores e-commerce layout patterns, interactive product cards, promotional hero banners, and responsive multi-column layouts across all screen sizes.",
    tags: ["Tailwind CSS", "Modern Web", "Responsive Grid", "E-commerce"],
    liveUrl: "https://penguin-fashion-using-tailwind-smoky.vercel.app/",
    githubUrl: "https://github.com/ArfinAlEusuf",
    highlights: [
      "Custom Tailwind configuration and theme tokens",
      "Engaging product preview cards with smooth transitions",
      "Fluid breakpoint responsiveness from mobile to wide displays",
      "Optimized static asset delivery",
    ],
  },
  {
    id: "dsa-visualizer",
    title: "Graph & Tree Algorithm Visualizer",
    category: "Tools & Algorithms",
    featured: false,
    image: "/image/lecture.jpg",
    description:
      "A visual simulator demonstrating graph traversal algorithms (Breadth-First Search, Depth-First Search, Dijkstra) step-by-step with state tracking.",
    longDescription:
      "An interactive Computer Science educational project. Renders graph nodes and adjacency matrices, stepping through queue/stack pushes, visited sets, and shortest path relaxation with real-time visual node highlighting.",
    tags: ["C++ Logic", "React", "Graph Theory", "DSA"],
    liveUrl: null,
    githubUrl: "https://github.com/ArfinAlEusuf",
    highlights: [
      "Step-by-step animation of BFS and DFS traversals",
      "Color-coded visited, in-queue, and finished states",
      "Custom node adjacency input and graph generation",
      "Time complexity comparison metrics",
    ],
  },
];

export const educationData = [
  {
    id: "cse-degree",
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Department of Computer Science & Engineering",
    period: "2024 - Present",
    status: "Active Undergraduate",
    badge: "Current Degree",
    description:
      "Pursuing a comprehensive curriculum centered on algorithmic theory, systems engineering, object-oriented software design, and database systems.",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (C++)",
      "Discrete Mathematics",
      "Database Management Systems (DBMS)",
      "Digital Logic Design",
      "Computer Architecture",
    ],
    achievements: [
      "Active participant in Intra-University Programming Contests",
      "Core participant in campus Competitive Programming discussions",
      "Consistently exploring advanced graph theory and dynamic programming",
    ],
    highlight: true,
  },
  {
    id: "hsc",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Mymensingh Commerce College",
    period: "2023 - 2024",
    status: "Completed",
    badge: "GPA 5.00 / 5.00",
    description:
      "Graduated with top academic honors (Golden GPA 5.00), cultivating analytical discipline and organizational habits that serve as the bedrock for university computing.",
    coursework: ["Information & Communication Technology", "Business Studies", "Mathematics", "English"],
    achievements: [
      "Achieved perfect GPA 5.00",
      "Recognized for top academic consistency",
    ],
    highlight: false,
  },
  {
    id: "ssc",
    degree: "Secondary School Certificate (SSC)",
    institution: "M.K.C.M. Pilot Govt. High School",
    period: "2017 - 2022",
    status: "Completed",
    badge: "GPA 4.83 / 5.00",
    description:
      "Built a solid foundation in sciences, mathematics, and analytical reasoning while actively participating in school clubs and science olympiads.",
    coursework: ["General Science", "Higher Mathematics", "Computer Basics"],
    achievements: [
      "Achieved GPA 4.83",
      "Active in debating club and leadership committees",
    ],
    highlight: false,
  },
];

export const achievementsData = [
  {
    id: 1,
    title: "350+ Algorithmic Problems Solved",
    category: "Competitive Programming",
    icon: "code",
    issuer: "Codeforces / LeetCode",
    date: "2024 - Present",
    description:
      "Solved across Codeforces, LeetCode, HackerRank, and CodeChef covering Dynamic Programming, Graph Theory, Greedy algorithms, and Segment Trees.",
  },
  {
    id: 2,
    title: "Perfect Golden GPA 5.00 (HSC)",
    category: "Academic Excellence",
    icon: "award",
    issuer: "Education Board",
    date: "2024",
    description:
      "Achieved the highest academic distinction (GPA 5.00) in the national Higher Secondary Certificate examinations.",
  },
  {
    id: 3,
    title: "HackerRank 5-Star Problem Solving & C++",
    category: "Skill Certification",
    icon: "star",
    issuer: "HackerRank",
    date: "2024",
    description:
      "Earned 5-Star Gold Badges in C++ and Problem Solving, demonstrating mastery in STL, pointers, algorithms, and complexity optimization.",
  },
  {
    id: 4,
    title: "Public Speaking & Debating Honors",
    category: "Extracurricular Leadership",
    icon: "mic",
    issuer: "Debating Circuit",
    date: "2022 - 2024",
    description:
      "Led debate sessions and public speaking workshops, honing critical rhetoric, rapid problem deconstruction, and team leadership.",
  },
];

export const githubData = {
  username: "ArfinAlEusuf",
  profileUrl: "https://github.com/ArfinAlEusuf",
  totalContributions: "480+ in the last year",
  languages: [
    { name: "C++", percentage: 46, color: "bg-blue-500" },
    { name: "JavaScript", percentage: 28, color: "bg-yellow-400" },
    { name: "Python", percentage: 16, color: "bg-emerald-400" },
    { name: "HTML/CSS/SQL", percentage: 10, color: "bg-cyan-400" },
  ],
  pinnedRepos: [
    {
      name: "competitive-programming-solutions",
      description: "Curated collection of solutions to Codeforces, LeetCode, and CSES problem set in modern C++20 with complexity notes.",
      language: "C++",
      stars: 12,
      forks: 4,
      url: "https://github.com/ArfinAlEusuf",
    },
    {
      name: "arfinaleusuf.portfolio",
      description: "Modern, high-performance developer portfolio built with React, Vite, Three.js, Framer Motion, and Tailwind CSS.",
      language: "JavaScript",
      stars: 8,
      forks: 2,
      url: "https://github.com/ArfinAlEusuf/arfinaleusuf",
    },
    {
      name: "number-converter-tool",
      description: "Interactive base conversion tool supporting Binary, Decimal, Hexadecimal, and Octal with bitwise operations.",
      language: "JavaScript",
      stars: 6,
      forks: 1,
      url: "https://github.com/ArfinAlEusuf",
    },
    {
      name: "dsa-cpp-implementations",
      description: "Clean implementations of fundamental data structures (Trees, Graphs, DSU, Heaps) and algorithms from scratch in C++.",
      language: "C++",
      stars: 10,
      forks: 3,
      url: "https://github.com/ArfinAlEusuf",
    },
  ],
};

export const socialLinks = [
  {
    name: "GitHub",
    handle: "@ArfinAlEusuf",
    url: "https://github.com/ArfinAlEusuf",
    description: "Explore repositories, CP solutions, and open source code.",
    accent: "hover:border-slate-500 hover:text-white",
  },
  {
    name: "LinkedIn",
    handle: "in/arfinaleusuf",
    url: "https://www.linkedin.com/in/arfinaleusuf/",
    description: "Connect professionally and follow my engineering journey.",
    accent: "hover:border-cyan-500 hover:text-cyan-400",
  },
  {
    name: "Codeforces",
    handle: "ArfinAlEusuf",
    url: "https://codeforces.com/profile/ArfinAlEusuf",
    description: "View contest ratings, solved problems, and submissions.",
    accent: "hover:border-emerald-500 hover:text-emerald-400",
  },
  {
    name: "LeetCode",
    handle: "ArfinAlEusuf",
    url: "https://leetcode.com/u/ArfinAlEusuf/",
    description: "Inspect DSA problem tracks and daily solving streaks.",
    accent: "hover:border-amber-500 hover:text-amber-400",
  },
];
