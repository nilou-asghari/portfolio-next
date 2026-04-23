export const projects = [
  {
    slug: "movie-board",
    title: "Movie Board",
    year: "2025",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind"],
    categories: ["Web App"],
    image: "/movie.jpg",

    live: null,

    goal: "A modern movie discovery platform built using TMDB API. The application allows users to search movies, explore trending titles and manage a personal watchlist.",

    solution: [
      "The application was built with a scalable architecture using Next.js and TypeScript to ensure maintainability and performance. API integration with TMDB enables real-time movie data, while debounced search improves user experience.",
      "Authentication and user-specific features such as watchlists were implemented with a focus on clean state management. The UI was designed with Tailwind CSS to ensure responsiveness and a modern, minimal aesthetic.",
    ],

    gallery: ["/movie1.jpg", "/movie2.jpg", "/movie3.jpg"],
    next: "petfect-match",
  },

  {
    slug: "petfect-match",
    title: "Petfect Match",
    year: "2024",
    technologies: ["React", "MongoDB", "Express", "Node.js"],
    categories: ["Frontend Application"],
    image: "/petfect.png",

    live: "https://petfectmatch.netlify.app/",

    goal: "A platform designed to match potential pet owners with animals available for adoption.",

    solution: [
      "This project was developed as a full-stack MERN application, focusing on creating a seamless connection between users and pets. The frontend provides an intuitive browsing experience, while the backend handles data management and matching logic.",
      "Special attention was given to usability and performance. The interface allows users to quickly explore pets, while the system ensures efficient data handling and scalability for future expansion.",
    ],

    gallery: ["/petfekt1.jpg", "/petfekt2.jpg", "/petfekt3.jpg"],
    next: "calvergy",
  },

  {
    slug: "calvergy",
    title: "Calvergy",
    year: "2025",
    technologies: ["React", "Next.js", "Tailwind"],
    categories: ["Corporate SaaS Platform"],
    image: "/calvergy.png",

    live: "https://calvergy.com/en",

    goal: "Corporate SaaS website focused on clean UI and clear product communication.",

    solution: [
      "The focus of this project was on translating complex business concepts into a clean and understandable interface. A structured layout and consistent design system were used to guide users through the product.",
      "Performance and responsiveness were key priorities. The application was optimized for different screen sizes, ensuring a smooth experience across devices while maintaining a professional visual identity.",
    ],

    gallery: ["/calvergy1.jpg", "/calvergy2.jpg", "/calvergy3.jpg"],
    next: "adler",
  },

  {
    slug: "adler",
    title: "Adler Reinigung",
    year: "2024",
    technologies: ["React"],
    categories: ["Corporate Website"],
    image: "/adler.png",
    live: "https://adlerreinigung24.de/",

    goal: "A service-based website for a cleaning company focusing on clarity and accessibility.",

    solution: [
      "The website was designed to clearly present services and guide users toward taking action. A simple and structured layout ensures that information is easy to find and understand.",
      "Emphasis was placed on trust and usability. Clear calls-to-action, fast loading times, and responsive design help convert visitors into customers.",
    ],

    gallery: ["/adler1.jpg", "/adler2.jpg", "/adler3.jpg"],
    next: "movie-board",
  },
];
