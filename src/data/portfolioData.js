export const personalInfo = {
  name: "Arfin Al Eusuf",
  preferredName: "Arfin",
  roleTitle: "Competitive Programmer · CSE Student · Software Developer",
  roles: [
    "Arfin Al Eusuf",
    "Competitive Programmer",
    "CSE Student",
    "DSA Enthusiast",
    "Software Developer",
  ],
  tagline: "Algorithmic problem solving and performant software engineering.",
  bio: "Computer Science & Engineering student and competitive programmer focused on Data Structures, Algorithms, and clean software architecture. Building performant web systems with modern engineering practices.",
  email: "arfinaleusuf@gmail.com",
  location: "Bangladesh",
  availableForWork: true,
  statusText: "Open to Internships & Engineering Roles",
  profileImage: "/image/profile pic light.png",
  socials: {
    github: "https://github.com/ArfinAlEusuf",
    linkedin: "https://www.linkedin.com/in/arfinaleusuf/",
    codeforces: "https://codeforces.com/profile/ArfinAlEusuf",
    leetcode: "https://leetcode.com/u/ArfinAlEusuf/",
    facebook: "https://www.facebook.com/ArfinAlEusuf/",
    instagram: "https://www.instagram.com/arfinaleusuf/",
  },
  quickStats: [
    { label: "Problems Solved", value: "350+" },
    { label: "Rated Contests", value: "30+" },
    { label: "Algorithms", value: "40+" },
    { label: "Academic GPA", value: "5.00" },
  ],
};

export const terminalCodeSnippet = `// arfin.cpp - Developer Profile
#include <iostream>
#include <vector>
#include <string>

struct Engineer {
    std::string name = "Arfin Al Eusuf";
    std::string major = "Computer Science & Engineering";
    std::vector<std::string> stack = {
        "C++20", "Python", "React", "FastAPI", "SQL"
    };
    std::vector<std::string> focus = {
        "Data Structures", "Graph Theory", "Dynamic Programming"
    };

    bool solve() {
        // Target complexity: O(N log N) time | O(N) space
        return true; // AC (Accepted)
    }
};

int main() {
    Engineer arfin;
    if (arfin.solve()) {
        std::cout << "status: AC\\n";
    }
    return 0;
}`;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "CP Journey", href: "#cp" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
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
      badge: "Primary Language",
      description: "Modern C++20, STL algorithms, custom comparators, memory management, and competitive programming.",
      topics: ["STL Containers", "Templates", "Custom Comparators", "Bit Manipulation"],
    },
    {
      name: "C",
      category: "programming",
      badge: "Foundational",
      description: "Pointers, dynamic memory allocation (malloc/free), structs, and low-level computing.",
      topics: ["Pointers", "Dynamic Memory", "Structs", "Data Layout"],
    },
    {
      name: "Python",
      category: "programming",
      badge: "Scripting & DSA",
      description: "Algorithm prototyping, scripting, collections module, and backend API integration.",
      topics: ["List Comprehensions", "Collections", "OOP", "Algorithm Prototyping"],
    },
    {
      name: "JavaScript",
      category: "programming",
      badge: "Web Logic",
      description: "Modern ESNext, asynchronous architecture (Promises, async/await), closures, and DOM events.",
      topics: ["Async/Await", "Closures", "Event Loop", "ESNext"],
    },

    // Computer Science
    {
      name: "Data Structures",
      category: "cs",
      badge: "Core Strength",
      description: "Trees, graphs, heaps, segment trees, hash maps, and disjoint set union (DSU).",
      topics: ["Trees & Graphs", "Segment Trees", "DSU", "Heaps"],
    },
    {
      name: "Algorithms",
      category: "cs",
      badge: "Core Strength",
      description: "Dynamic programming, BFS/DFS, Dijkstra, binary search, greedy paradigms, and number theory.",
      topics: ["Dynamic Programming", "Graph Traversals", "Binary Search", "Greedy"],
    },
    {
      name: "Object-Oriented Programming",
      category: "cs",
      badge: "Architecture",
      description: "Encapsulation, inheritance, polymorphism, abstraction, and clean SOLID design principles.",
      topics: ["SOLID Principles", "Encapsulation", "Polymorphism", "Abstraction"],
    },
    {
      name: "Database Systems (DBMS)",
      category: "cs",
      badge: "Data Systems",
      description: "Relational schemas, normalization (1NF-3NF), indexing, transactions, and ACID compliance.",
      topics: ["Relational Modeling", "Normalization", "Indexing", "ACID Compliance"],
    },

    // Frontend
    {
      name: "React.js",
      category: "frontend",
      badge: "Modern UI",
      description: "Component composition, custom hooks, reactive state, and performance optimization.",
      topics: ["Hooks & State", "Component Composition", "Virtual DOM", "Vite Tooling"],
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      badge: "Styling Engine",
      description: "Utility-first design, dark mode, responsive grids, and custom design tokens.",
      topics: ["Design Tokens", "Dark Mode", "Responsive Layout", "Glassmorphism"],
    },
    {
      name: "HTML5 & Semantic Web",
      category: "frontend",
      badge: "Web Standard",
      description: "Semantic document structure, accessibility (a11y), clean hierarchy, and SEO.",
      topics: ["Semantic Hierarchy", "Accessibility (a11y)", "SEO Best Practices", "DOM Engine"],
    },
    {
      name: "CSS3 & Animations",
      category: "frontend",
      badge: "Visual Polish",
      description: "CSS Grid, Flexbox, transitions, keyframes, 3D transforms, and hardware acceleration.",
      topics: ["CSS Grid", "Flexbox", "Keyframes", "3D Transforms"],
    },

    // Backend / Database
    {
      name: "FastAPI",
      category: "backend",
      badge: "Modern API",
      description: "Asynchronous Python services, Pydantic validation, dependency injection, and OpenAPI routing.",
      topics: ["Async Handlers", "Pydantic Schemas", "Dependency Injection", "Swagger Docs"],
    },
    {
      name: "SQL",
      category: "backend",
      badge: "Querying",
      description: "Relational queries, complex joins, subqueries, grouping, aggregations, and constraints.",
      topics: ["Complex Joins", "Aggregations", "Subqueries", "Schema Constraints"],
    },
    {
      name: "SQLite",
      category: "backend",
      badge: "Embedded DB",
      description: "Local relational persistence, schema migration, transactional queries, and indexing.",
      topics: ["Schema Migrations", "Transactions", "Query Optimization", "Local Storage"],
    },
    {
      name: "REST API Design",
      category: "backend",
      badge: "Integration",
      description: "HTTP semantics, status codes, JSON payload architecture, and structured error handling.",
      topics: ["HTTP Semantics", "JSON Payloads", "Status Codes", "Error Handling"],
    },
  ],
};

export const cpData = {
  stats: [
    { label: "Problems Solved", value: 350, suffix: "+", description: "Across Codeforces, LeetCode, and platforms" },
    { label: "Rated Contests", value: 30, suffix: "+", description: "Live rounds and timed algorithmic challenges" },
    { label: "Peak Rating", value: 1200, suffix: "+", description: "Codeforces Pupil ranking" },
    { label: "Algorithms", value: 40, suffix: "+", description: "Graph theory, DP, greedy, and number theory" },
  ],
  platforms: [
    {
      name: "Codeforces",
      handle: "ArfinAlEusuf",
      rank: "Pupil",
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
      rating: "1200+ Peak",
      solved: "200+ Solved",
      contests: "20+ Contests",
      url: "https://codeforces.com/profile/ArfinAlEusuf",
      tagline: "Active participant in Div. 2 and Div. 3 contests.",
    },
    {
      name: "LeetCode",
      handle: "ArfinAlEusuf",
      rank: "Active Solver",
      badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
      rating: "Consistent",
      solved: "120+ Solved",
      contests: "Biweekly / Weekly",
      url: "https://leetcode.com/u/ArfinAlEusuf/",
      tagline: "Focus on Medium and Hard algorithmic problem sets.",
    },
    {
      name: "HackerRank",
      handle: "ArfinAlEusuf",
      rank: "5★ C++ Coder",
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
      rating: "Gold Badges",
      solved: "4★ Problem Solving",
      contests: "Python & C++",
      url: "https://www.hackerrank.com/profile/arfinaleusuf",
      tagline: "Certified in Problem Solving and Object-Oriented C++.",
    },
    {
      name: "CodeChef",
      handle: "arfinaleusuf",
      rank: "Div 3 Competitor",
      badgeColor: "text-yellow-400 bg-yellow-500/10 border-yellow-500/30",
      rating: "Rated",
      solved: "Speed Contests",
      contests: "Starters",
      url: "https://www.codechef.com/users/arfinaleusuf",
      tagline: "Competing in Starters and short-format rounds.",
    },
  ],
  topics: [
    { name: "Graph Theory", algorithms: "BFS, DFS, Dijkstra, Tree Traversals, Topo-Sort", solved: "60+" },
    { name: "Dynamic Programming", algorithms: "Knapsack, LCS, LIS, State Compression", solved: "55+" },
    { name: "Greedy & Pointers", algorithms: "Intervals, Sliding Window, Prefix Sums", solved: "80+" },
    { name: "Binary Search", algorithms: "Search on Answer, Monotonic Predicates", solved: "45+" },
    { name: "Number Theory", algorithms: "Sieve, Modular Math, GCD/LCM", solved: "40+" },
    { name: "Data Structures", algorithms: "Segment Trees, Heaps, DSU, Monotonic Queues", solved: "70+" },
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
      "Algorithmic multi-base converter supporting Binary, Decimal, Hexadecimal, and Octal with instant bit inspection.",
    longDescription:
      "An algorithmic utility for computing students and systems programmers. Provides real-time bidirectional base conversions, integer bitwise parsing, and validation with sub-millisecond reactivity.",
    tags: ["JavaScript", "Bitwise Ops", "Base Math", "Tailwind CSS"],
    liveUrl: "#number-converter",
    githubUrl: "https://github.com/ArfinAlEusuf",
    highlights: [
      "Bidirectional conversion across Binary, Decimal, Hex, and Octal",
      "Bit-length calculation and nibble grouping",
      "Strict input validation per numeral radix",
      "Integrated live sandbox directly inside this portfolio",
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
      "Minimalist e-commerce landing page crafted for an artisan tea brand with fluid responsive layouts.",
    longDescription:
      "A clean web application emphasizing typographical balance, semantic HTML structure, and responsive design tokens. Focuses on content presentation and brand storytelling.",
    tags: ["HTML5", "CSS3", "JavaScript", "UI Architecture"],
    liveUrl: "https://tea-house-delta.vercel.app/",
    githubUrl: "https://github.com/ArfinAlEusuf",
    highlights: [
      "Fluid responsive layout for all screen sizes",
      "Minimalist typography hierarchy and high contrast",
      "Lightweight bundle with fast first paint",
      "Accessible semantic markup",
    ],
  },
  {
    id: "penguin-fashion",
    title: "Penguin Fashion - Dynamic Apparel",
    category: "Web Applications",
    featured: true,
    image: "/image/Penguin Fashion.png",
    description:
      "Modern fashion storefront featuring dynamic product showcases, responsive card grids, and streamlined navigation.",
    longDescription:
      "Built with utility-first modern CSS. Explores e-commerce layout patterns, interactive product cards, promotional hero banners, and responsive multi-column layouts across mobile and desktop.",
    tags: ["Tailwind CSS", "Modern Web", "Responsive Grid", "E-commerce"],
    liveUrl: "https://penguin-fashion-using-tailwind-smoky.vercel.app/",
    githubUrl: "https://github.com/ArfinAlEusuf",
    highlights: [
      "Clean Tailwind design tokens and utility patterns",
      "Product showcase with smooth hover transitions",
      "Mobile-first responsive breakpoints",
      "Optimized static asset delivery",
    ],
  },
  {
    id: "dsa-visualizer",
    title: "Graph Algorithm Visualizer",
    category: "Tools & Algorithms",
    featured: false,
    image: "/image/lecture.jpg",
    description:
      "Visual simulator demonstrating graph traversal algorithms (BFS, DFS, Dijkstra) step-by-step with state tracking.",
    longDescription:
      "An educational computer science tool that renders graph nodes and adjacency matrices, stepping through queue/stack operations, visited sets, and shortest path relaxation with visual node highlighting.",
    tags: ["C++ Logic", "React", "Graph Theory", "DSA"],
    liveUrl: null,
    githubUrl: "https://github.com/ArfinAlEusuf",
    highlights: [
      "Step-by-step traversal animation for BFS and DFS",
      "Color-coded visited, queued, and finalized states",
      "Custom graph topology input",
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
    status: "Undergraduate",
    badge: "Current Degree",
    description:
      "Undergraduate curriculum centered on algorithmic theory, systems engineering, object-oriented software design, and database systems.",
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
      "Engaged in campus competitive programming problem reviews",
      "Exploring advanced graph algorithms and dynamic programming",
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
      "Graduated with top academic honors (Golden GPA 5.00), building analytical discipline and study routines that support university computing.",
    coursework: ["ICT", "Mathematics", "Business Studies", "English"],
    achievements: [
      "Achieved perfect GPA 5.00",
      "Top academic consistency distinction",
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
      "Built foundation in science, mathematics, and analytical reasoning while participating in student clubs and science olympiads.",
    coursework: ["General Science", "Higher Mathematics", "Computer Basics"],
    achievements: [
      "Achieved GPA 4.83",
      "Active in debating club and school committees",
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
      "Solved across Codeforces, LeetCode, and HackerRank covering dynamic programming, graphs, greedy algorithms, and data structures.",
  },
  {
    id: 2,
    title: "Perfect Golden GPA 5.00 (HSC)",
    category: "Academic Excellence",
    icon: "award",
    issuer: "Education Board",
    date: "2024",
    description:
      "Earned top academic distinction (GPA 5.00) in national Higher Secondary Certificate examinations.",
  },
  {
    id: 3,
    title: "HackerRank 5-Star Badges (C++ & Problem Solving)",
    category: "Skill Certification",
    icon: "star",
    issuer: "HackerRank",
    date: "2024",
    description:
      "Earned 5-Star Gold Badges in C++ and Problem Solving, demonstrating mastery of STL, algorithms, and complexity optimization.",
  },
  {
    id: 4,
    title: "Public Speaking & Debating Honors",
    category: "Leadership",
    icon: "mic",
    issuer: "Debating Circuit",
    date: "2022 - 2024",
    description:
      "Participated in debate sessions and workshops, honing critical thinking, clear rhetoric, and structured problem deconstruction.",
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
      description: "Solutions to Codeforces, LeetCode, and CSES problem sets in modern C++20 with complexity notes.",
      language: "C++",
      stars: 12,
      forks: 4,
      url: "https://github.com/ArfinAlEusuf",
    },
    {
      name: "arfinaleusuf.portfolio",
      description: "Modern developer portfolio built with React, Vite, Three.js, Framer Motion, and Tailwind CSS.",
      language: "JavaScript",
      stars: 8,
      forks: 2,
      url: "https://github.com/ArfinAlEusuf/arfinaleusuf",
    },
    {
      name: "number-converter-tool",
      description: "Base conversion utility supporting Binary, Decimal, Hexadecimal, and Octal with bitwise operations.",
      language: "JavaScript",
      stars: 6,
      forks: 1,
      url: "https://github.com/ArfinAlEusuf",
    },
    {
      name: "dsa-cpp-implementations",
      description: "Clean implementations of fundamental data structures (Trees, Graphs, DSU, Heaps) in C++.",
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
    description: "Repositories, CP solutions, and open-source code.",
    accent: "hover:border-slate-500 hover:text-white",
  },
  {
    name: "LinkedIn",
    handle: "in/arfinaleusuf",
    url: "https://www.linkedin.com/in/arfinaleusuf/",
    description: "Professional updates and engineering connections.",
    accent: "hover:border-cyan-500 hover:text-cyan-400",
  },
  {
    name: "Codeforces",
    handle: "ArfinAlEusuf",
    url: "https://codeforces.com/profile/ArfinAlEusuf",
    description: "Contest ratings, submissions, and problem solving.",
    accent: "hover:border-emerald-500 hover:text-emerald-400",
  },
  {
    name: "LeetCode",
    handle: "ArfinAlEusuf",
    url: "https://leetcode.com/u/ArfinAlEusuf/",
    description: "Algorithmic practice tracks and daily streaks.",
    accent: "hover:border-amber-500 hover:text-amber-400",
  },
];
