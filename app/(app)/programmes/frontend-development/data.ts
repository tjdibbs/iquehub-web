export interface ModuleType {
  title: string;
  description?: string;
  lessons: {
    title: string;
    items: string[];
  }[];
  project?: string;
}

export const MODULE_9: ModuleType = {
  title: 'Additional Topics (Optional)',
  lessons: [
    {
      title: 'Progressive Web Apps (PWAs)',
      items: ['Introduction to Service Workers and Offline Caching'],
    },
    {
      title: 'Introduction to TypeScript',
      items: ['Type Safety and Interfaces'],
    },
    {
      title: 'Frontend Performance Optimization',
      items: ['Lazy Loading, Minification, and Code Splitting'],
    },
  ],
};

export const MODULE_8: ModuleType = {
  title: 'Capstone Project',
  lessons: [
    {
      title: 'End-to-End Project',
      items: [
        'Build a fully responsive, interactive website',
        'Design wireframes and mockups',
        'Implement using HTML, CSS, JavaScript, and APIs',
        'Deploy the project using GitHub Pages, Netlify, or Vercel',
      ],
    },
  ],
};

export const MODULE_7: ModuleType = {
  title: 'Testing and Debugging',
  lessons: [
    {
      title: 'Debugging Tools',
      items: [
        'Using Browser Developer Tools for debugging',
        'Identifying and resolving common errors',
      ],
    },
    {
      title: 'Testing Basics',
      items: ['Unit Testing with Jest', 'UI Testing with Cypress'],
    },
  ],
};

export const MODULE_6: ModuleType = {
  title: 'API Consumption and Integration',
  lessons: [
    {
      title: 'Understanding APIs',
      items: [
        'What are APIs? Overview of REST and GraphQL',
        'API Endpoints, Methods (GET, POST, PUT, DELETE), and Status Codes',
        'API Authentication: Tokens, API Keys, OAuth',
      ],
    },
    {
      title: 'Fetching Data with JavaScript',
      items: [
        'Using the fetch API:',
        'Making GET requests to retrieve data',
        'Handling promises and errors',
        'Posting data to APIs (POST requests)',
        'Using third-party libraries like Axios for API consumption',
      ],
    },
    {
      title: 'Working with JSON',
      items: [
        'Parsing JSON data from API responses',
        'Creating and sending JSON payloads in POST requests',
      ],
    },
    {
      title: 'Practical Examples',
      items: [
        'Fetching data from public APIs (e.g., OpenWeatherMap, Unsplash, TMDb)',
        'Rendering API data dynamically in the DOM',
        'Implementing infinite scrolling or pagination',
      ],
    },
    {
      title: 'Advanced API Concepts',
      items: [
        'CORS (Cross-Origin Resource Sharing): Understanding and resolving issues',
        'Rate Limits: Best practices for handling API quotas',
        'Chaining API Calls: Making dependent requests',
      ],
    },
    {
      title: 'GraphQL Basics (Optional)',
      items: [
        'Introduction to GraphQL Queries and Mutations',
        'Consuming GraphQL APIs using tools like Apollo Client',
      ],
    },
    {
      title: 'Building Real-World Applications',
      items: [
        'Weather App: Fetch and display real-time weather data',
        'News Aggregator: Display top headlines using a news API',
        'Search Feature: Create a search bar to query an API and display result',
      ],
    },
  ],
};

export const MODULE_5: ModuleType = {
  title: 'Version Control and Collaboration',
  lessons: [
    {
      title: 'Advanced Git Concepts',
      items: [
        'Branching and Merging: Managing codebases',
        'Resolving Merge Conflicts',
      ],
    },
    {
      title: 'Collaborating with GitHub',
      items: [
        'Forking Repositories, Pull Requests',
        'GitHub Actions for CI/CD',
      ],
    },
  ],
};

export const MODULE_4: ModuleType = {
  title: 'React JS',
  description:
    'Build powerful, fast, user-friendly and reactive web apps with React',
  lessons: [
    {
      title: 'Introduction to React',
      items: [
        'What is React JS?',
        'Why use React instead of JavaScript',
        'Project Overview',
        'Roadmap',
        'React Setup',
      ],
    },
    {
      title: 'React Setup',
      items: [
        'Environment Setup',
        'Creating New Project',
        'Analyzing Project Structure',
      ],
    },
    {
      title: 'React basics and components',
      items: [
        'Components & Why React is Component-Based?',
        'JSX',
        'React Elements',
        'Building Component',
        'Styling Components',
        'Dynamic Data in components',
        'Passing data using Props',
      ],
    },
    {
      title: 'State and event handling',
      items: [
        'Handling Events in React',
        'Why are States required?',
        'useState() Hook',
        'Form Handling',
        'Handling form Submission',
      ],
    },
    {
      title: 'Contents conditional rendering',
      items: [
        'Rendering of List',
        'Importance of key attribute',
        'Conditional Statements & Output',
      ],
    },
    {
      title: 'Multipage Single page application with react-router',
      items: [
        'Introduction to routing',
        'What is Routing, how it works & installation',
        'Basic Routing',
        'Link and NavLink',
        'Dynamic Routes',
        'Nested Routes',
        'Redirection and Not Found Page',
      ],
    },
    {
      title: 'Global state management with context',
      items: [
        'What is React Context?',
        'React context vs Redux',
        'When to use React Context?',
        'Application of react context',
      ],
    },
    {
      title: 'Deployment',
      items: [
        'Steps to create a production build',
        'Hosting your application online',
      ],
    },
  ],
};

export const MODULE_3: ModuleType = {
  title: 'JavaScript',
  description:
    'Get the skills and confidence to understand JavaScript. Follow a structured learning path to grow your skills more quickly. Work on real projects and build your portfolio.',
  lessons: [
    {
      title: 'Introduction to JavaScript',
      items: [
        'Overview of JavaScript',
        'Installing Code Editor',
        'Developer console',
        'Adding JavaScript into HTML',
        'JavaScript Statements',
        'Basic Syntax',
        'Input and output',
        'JavaScript Comments',
        'Interaction: alert, prompt, confirm',
      ],
    },
    {
      title: 'Variables in JavaScript',
      items: [
        'The use of variables',
        'JavaScript Let',
        'JavaScript Const',
        'JavaScript Reserved Words',
      ],
    },
    {
      title: 'Data types',
      items: [
        'Numbers',
        'Strings',
        'Boolean',
        'Array',
        'Objects',
        'Null',
        'Undefined',
      ],
    },
    {
      title: 'JavaScript Operators',
      items: [
        'Arithmetic Operators',
        'Assignment operators',
        'Comparison Operators',
        'JavaScript Unary Operators',
        'Ternary Operator',
        'Instanceof Operator',
      ],
    },
    {
      title: 'Conditionals',
      items: [
        'Operators',
        'Assignment operators',
        'Comparison Operators',
        'JavaScript Unary Operators',
        'Ternary Operator',
        'Instanceof Operator',
      ],
    },
    {
      title: 'Loops in JavaScript',
      items: [
        'For Loop',
        'While Loop',
        'For-in Loop',
        'Differences between for..in and for ..of',
      ],
    },
    {
      title: 'JavaScript Functions',
      items: [
        'Inbuilt Functions',
        'User-defined functions',
        'Anonymous Functions',
        'Functions as First-Class Citizens',
        'Callback Functions',
        'Higher order function (map, filter, reduce, find)',
        'Understanding variable scopes in JavaScript',
        'JavaScript Hoisting',
        'JavaScript Strict Mode',
        'this in JavaScript',
      ],
    },
    {
      title: 'Arrays in JavaScript',
      items: [
        'Basic Array Methods',
        'sort() Method',
        'Array Iteration Methods',
      ],
    },
    {
      title: 'JavaScript Strings',
      items: [
        'JavaScript String Methods',
        'How to sort strings in JavaScript?',
      ],
    },
    {
      title: 'Document Object Model (DOM)',
      items: [
        'Introduction to Document Object Model',
        'Select Element By Id',
        'Select Elements By Name',
        'Select Elements By Tag Name',
        'Select Elements By Class Names',
        'Select Element By CSS Selectors',
        'Traversing elements',
        'Get the Parent Element',
        'Get Siblings of an Element',
        'Get Children of an Element',
        'Manipulating elements',
        'Create Elements',
        'Append Child Nodes',
        'InnerHTML',
      ],
    },
    {
      title: 'Javascript Form',
      items: ['How to Create a Form with the JavaScript?', 'Form validation'],
    },
    {
      title: 'Event handling',
      items: [
        'Introduction to Events',
        'Page Load Events',
        'The onLoad Event',
        'The DOMContent',
        'Mouse Events',
        'Keyboard Events',
        'Scroll Events',
      ],
    },
    {
      title: 'Storing data in the browser',
      items: ['Cookies', 'LocalStorage', 'sessionStorage'],
    },
    {
      title: 'ES6',
      items: [
        'Template Literals',
        'Object Literal Syntax',
        'Default Parameters',
        'Rest Parameters',
        'Spread Operator',
        'Destructuring',
      ],
    },
    {
      title: 'Module',
      items: ['What is the arrow function', 'Importing and Exporting Modules'],
    },
    {
      title: 'Asynchronous JavaScript',
      items: ['Promises', 'Async/await'],
    },
    {
      title: 'Error Handling',
      items: ['try…catch', 'try…catch…finally', 'Throw an Exception'],
    },
  ],
};

export const MODULE_2: ModuleType = {
  title: 'Cascading Style Sheets (CSS)',
  description: 'Understanding of how to style HTML elements in the browser',
  lessons: [
    {
      title: 'Introduction to CSS',
      items: [
        'What is CSS and its purpose',
        'Benefits of CSS',
        'How CSS works',
        'External, Internal, and Inline CSS',
      ],
    },
    {
      title: 'CSS Syntax and Selectors',
      items: [
        'Basic CSS Syntax: Rules and Properties',
        'Types of Selectors',
        'Element (Tag) Selector',
        'Class Selector',
        'ID Selector',
        'Universal Selector',
        'Attribute Selectors',
        'Grouping Selectors',
        'Pseudo-Classes',
        'Pseudo-Elements',
      ],
    },
    {
      title: 'Font Properties',
      items: ['Font-size', 'Font-family', 'Font-weight', 'Font-style'],
    },
    {
      title: 'Text Properties',
      items: [
        'Color',
        'Text-align',
        'Text-decoration',
        'Line-height',
        'Letter-spacing',
        'Word-spacing',
        'Using Google Fonts and Web Safe Fonts',
        'Applying Text Shadows',
        'Styling Text Links',
      ],
    },
    {
      title: 'Box Model',
      items: [
        'Content, Padding, Border, and Margin',
        'Understanding and Controlling the Box Model',
        'box-sizing Property',
        'Handling Width and Height',
      ],
    },
    {
      title: 'Colors and Background',
      items: [
        'Color Properties',
        'Working with RGB and HEX',
        'Applying Background Images',
        'Background image',
        'Background-size',
        'Background-position',
        'Background-attachment',
        'Background-repeat',
        'Gradient Backgrounds',
        'Linear and Radial Gradients',
      ],
    },
    {
      title: 'CSS Positioning',
      items: [
        'Static',
        'Relative',
        'Absolute',
        'Fixed',
        'Sticky Positioning',
        'Z-index',
        'Float and clear',
        'Centering Elements Horizontally and Vertically',
      ],
    },
    {
      title: 'CSS Units',
      items: ['Absolute Units', 'Relative Units'],
    },
    {
      title: 'Responsive Web Design with CSS',
      items: [
        'Media Queries for Responsive Design',
        'Applying Breakpoints for Different Screen Sizes',
        'Fluid Layouts Using Percentages',
        'Responsive Typography and Images',
        'Using Viewport Units',
        'Viewport height',
        'Viewport width',
      ],
    },
    {
      title: 'CSS Variables (Custom Properties)',
      items: ['Defining Variables', 'Using CSS Variables'],
    },
    {
      title: 'CSS Transitions and Animations',
      items: [
        'Understanding Transitions',
        'transition-property',
        'transition-duration',
        'Keyframes Animation @keyframes',
        'Applying Animations to Elements',
        'Animation Properties',
        'animation-name',
        'animation-duration',
        'animation-timing-function',
      ],
    },
    {
      title: 'CSS Transformations',
      items: [
        'Transforming Elements with transform',
        'Scale',
        'Rotate',
        'Translate',
        'Skew',
      ],
    },
    {
      title: 'CSS Layout Techniques',
      items: ['Display Types', 'Block', 'Inline', 'Inline-block'],
    },
    {
      title: 'Flexbox Layout',
      items: [
        'Flex Container',
        'Flex Items',
        'Aligning',
        'Justifying',
        'Wrapping Items',
        'Flex Direction',
        'Flex Row',
        'Flex columns',
        'Flex Grow',
        'Ordering',
      ],
    },
    {
      title: 'Grid Layout',
      items: [
        'Grid Container',
        'Grid Items',
        'Grid Template Rows',
        'Grid Template Columns',
        'Gap',
        'Alignment in Grid',
      ],
    },
    {
      title: 'CSS Frameworks',
      items: [
        'Using Bootstrap: Components and Grid System',
        'Introduction to Tailwind CSS: Utility-First Approach',
      ],
    },
  ],
};

export const MODULE_1: ModuleType = {
  title: 'Introduction to Frontend Development /Basic of HTML',
  description:
    'Understanding of how to render different HTML elements in the browser',
  lessons: [
    {
      title: 'Introduction to Frontend Development',
      items: [
        'Overview of Web Development (Frontend vs. Backend)',
        'Tools of the Trade: Text Editors, IDEs, and Browsers',
        'Introduction to Version Control (Git and GitHub)',
      ],
    },
    {
      title: 'Introduction to HTML',
      items: [
        'Advantages and limitations of HTML',
        'HTML Comments',
        'Basic HTML Tags',
        'HTML Elements',
        'Headings',
        'Paragraphs',
        'Text Formatting',
        'Quotations',
        'Links, Images, Tables, Lists',
        'Block and Inline Elements',
        'Iframes',
        'File Paths',
        'Viewport Meta Tags',
      ],
    },
    {
      title: 'HTML entities',
      items: ['Doctypes', 'HTML Attributes', 'Audio/Video'],
    },
  ],
  project: 'Build a job application page and a cart page',
};
