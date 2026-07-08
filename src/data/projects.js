export const projects = [
  {
    slug: 'cine-board',
    title: 'cine Board',
    year: '2025',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
    categories: ['Web App'],
    image: '/movie.jpg',
    live: 'https://cineboard-app.netlify.app/',

    context:
      "Movie discovery is broken. Most platforms overwhelm users with cluttered interfaces and slow, imprecise search — making it hard to find something worth watching. Movie Board was built to solve exactly that: a clean, fast discovery experience powered by the TMDB API, where users can search titles, explore what's trending, and build a personal watchlist — all in one place.",

    solution: [
      'The application was built with a scalable architecture using Next.js and TypeScript to ensure long-term maintainability and strong type safety. Real-time movie data flows in through the TMDB API, while debounced search keeps the experience smooth without hammering the endpoint on every keystroke.',
      'User-specific features like watchlists were built around clean global state management, keeping the UI predictable and fast. Tailwind CSS handled the visual layer — responsive, minimal, and consistent across screen sizes.',
    ],

    process:
      "As the sole Frontend Developer, I owned the full UI architecture and API integration from start to finish. The steepest challenges were working within TMDB's rate limits without degrading the experience, implementing debounced search that felt instant to the user, and designing a state structure that could support user-specific features cleanly without prop drilling or unnecessary complexity.",

    result:
      'Movie Board delivers a fast, focused discovery experience that feels noticeably lighter than existing platforms. Search is instant, the watchlist is persistent, and the interface stays out of the way — letting the content speak for itself.',

    gallery: ['/movie1.jpg', '/movie2.jpg', '/movie3.jpg'],
    next: 'petfect-match',
  },

  {
    slug: 'petfect-match',
    title: 'Petfect Match',
    year: '2024',
    technologies: ['React', 'MongoDB', 'Express', 'Node.js'],
    categories: ['Frontend Application'],
    image: '/petfect.png',
    live: 'https://petfectmatch.netlify.app/',

    context:
      "Finding the right pet to adopt shouldn't be complicated — yet most existing platforms scatter information across outdated listings with no real matching logic. Petfect Match was built to change that: a dedicated adoption platform that connects potential owners with animals through an intuitive, browsable interface backed by a full MERN stack.",

    solution: [
      'Built as a full-stack MERN application, the project required close coordination between a separate frontend and backend team. The frontend was designed to make browsing feel effortless — clear categories, clean cards, and a layout that guides users naturally toward adoption.',
      'Performance was a priority from the start. As the dataset grew, the system needed to stay responsive. Efficient data handling on the backend and thoughtful UI decisions on the frontend ensured the experience held up under load.',
    ],

    process:
      'I led the frontend as part of a cross-functional team, responsible for UI implementation and overall user experience. Coordinating with a separate backend team required clear API contracts and constant communication. Designing intuitive browsing across different pet categories — each with different attributes — pushed me to think carefully about information hierarchy and layout flexibility.',

    result:
      'Petfect Match launched as a fully functional adoption platform that makes finding a pet feel simple and human. The browsing experience is clear, the matching logic is reliable, and the foundation is scalable enough to support a growing catalogue of animals.',

    gallery: ['/petfect1.jpg', '/petfect2.jpg', '/petfect3.jpg'],
    next: 'calvergy',
  },

  {
    slug: 'calvergy',
    title: 'Calvergy',
    year: '2025',
    technologies: ['React', 'Next.js', 'Tailwind'],
    categories: ['Corporate SaaS Platform'],
    image: '/calvergy.png',
    live: 'https://calvergy.com/en',

    context:
      "SaaS products live or die by how well they communicate their value. Calvergy's product is genuinely powerful — but complex business logic and dense feature sets can easily become a wall of text that loses visitors before they convert. The goal was to build a corporate website that makes that complexity feel approachable: structured, clear, and visually confident.",

    solution: [
      'The design approach centered on translating abstract product concepts into a layout that guides the user naturally. A consistent design system and structured content hierarchy ensured that each section earned its place and nothing felt arbitrary.',
      'Performance and responsiveness were non-negotiable. The site was optimized across breakpoints, ensuring the same clarity and polish on mobile as on desktop — while maintaining the professional visual identity the brand required.',
    ],

    process:
      "Working as the Frontend Developer on this live product, I was responsible for UI implementation and experience refinement throughout. The hardest part wasn't technical — it was editorial: deciding how to present complex business logic without oversimplifying it, and maintaining visual consistency across a site with many distinct sections and content types.",

    result:
      'Calvergy launched with a polished, professional interface that gives the product the presentation it deserves. Visitors can understand the offering quickly, the brand feels credible, and the structure holds up as the product continues to evolve.',

    gallery: ['/calvergy1.jpg', '/calvergy2.jpg', '/calvergy3.jpg'],
    next: 'adler',
  },

  {
    slug: 'adler',
    title: 'Adler Reinigung',
    year: '2024',
    technologies: ['React'],
    categories: ['Corporate Website'],
    image: '/adler.png',
    live: 'https://adlerreinigung24.de/',

    context:
      "For a service business, the website is often the first and only impression. Adler Reinigung had no meaningful digital presence — potential customers couldn't easily find what services were offered, how to get in touch, or why they should trust this company over another. The brief was clear: build something simple, credible, and conversion-focused.",

    solution: [
      'The site was structured around a single question: what does a potential customer need to know to pick up the phone? Services are presented clearly, the layout is scannable, and every section moves the user toward a clear call to action.',
      'Trust signals were woven into the design deliberately — clean visuals, straightforward language, and fast load times all contribute to the impression of a reliable, professional company. Responsive design ensured the experience held up on mobile, where most local service searches happen.',
    ],

    process:
      'As the sole developer on this project, I handled everything from structure to deployment. The main challenge was designing for a non-technical audience — both the client, who needed to understand and feel proud of the result, and their customers, who needed to find information quickly without friction. Building trust through design, not just content, required careful attention to spacing, hierarchy, and tone.',

    result:
      'Adler Reinigung now has a digital presence that works as hard as the business does. The site is fast, clear, and built to convert — giving the company a credible foundation to grow its customer base online.',

    gallery: ['/adler1.jpg', '/adler2.jpg', '/adler3.jpg'],
    next: 'movie-board',
  },
]
