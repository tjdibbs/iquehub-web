import { ModuleType } from '../frontend-development/data';

export const BACKEND_MODULE_4: ModuleType = {
  title: 'Django Rest Framework For APIs',
  description:
    'Understand how to expose the backend through APIs so it can be consumed by mobile apps, frontend frameworks and other platforms',
  lessons: [
    {
      title: 'Basic Django Setup',
      items: [
        'Installation',
        'Models and Migrations',
        'Creating JSON Response',
        'DRF Introduction',
        'Serializers – GET Request',
        'Serializers – POST, PUT, DELETE Request',
        'Model Serializer',
        'Django Relationships',
        'URL Structure',
        'Viewsets and Routers',
        'Introduction to Permissions',
        'Introduction to Authentications',
        'Testing with Postman',
        'Implementing search and pagination',
      ],
    },
  ],
};

export const BACKEND_MODULE_3: ModuleType = {
  title: 'Django',
  description:
    'Understand how to plan a project, implement the plan and deploy the software after development',
  lessons: [
    {
      title: 'Django Introduction',
      items: [
        'What is Django?',
        'Features of Django',
        'Advantages of Django',
        'Organizations using Django',
        'Understanding MVT design pattern',
      ],
    },
    {
      title: 'Django Fundamentals',
      items: [
        'Setting up a virtual environment',
        'Installing Django',
        'Understanding Django folder structure',
        'Creating Projects',
        'Django Apps',
        'App settings',
        'Running Django server',
      ],
    },
    {
      title: 'Site Administration',
      items: [
        'Accessing the Django admin',
        'Setting up Django superuser',
        'Customizing the Django admin',
      ],
    },
    {
      title: 'URL/Routing in Django',
      items: ['Url patterns', 'Static page routing', 'Dynamic page routing'],
    },
    {
      title: 'Django Views',
      items: ['Function-based views', 'Creating Django views'],
    },
    {
      title: 'Templating in Django',
      items: [
        'Steps to creating templates',
        'Jinja Template tags',
        'Displaying data in Django templates',
        'Extending Django templates',
      ],
    },
    {
      title: 'Django Models',
      items: [
        'Understanding Django ORM (Object-relational mapper)',
        'Connecting to database',
        'Model class in Django',
        'Field types in the Django model',
        'Migration in Django',
        'Displaying models in Admin',
        'Understanding model relationships',
        'Create, read, update and delete data',
      ],
    },
    {
      title: 'Django Forms',
      items: [
        'Creating a form with HTML',
        'Using Django model forms',
        'Form Validation',
      ],
    },
    {
      title: 'User Authentication',
      items: [
        'User Registration',
        'User login and Logout',
        'Login redirect',
        'Flash Messages',
        'Sending emails',
      ],
    },
    {
      title: 'Django Security',
      items: [
        'Managing brute-force attack',
        'Adding ReCaptcha',
        'Session timeout',
      ],
    },
    {
      title: 'Static files in Django',
      items: [
        'Static files configuration',
        'Styling in Django',
        'Adding JavaScript',
        'Managing media files',
      ],
    },
  ],
};

export const BACKEND_MODULE_2: ModuleType = {
  title: 'SQL',
  description: 'Learn how to design, query and manipulate databases.',
  lessons: [
    {
      title: 'Introduction to SQL',
      items: [
        'What is SQL?',
        'Create Table Statement',
        'ALTER TABLE Statements',
        'Rename Columns of a Table',
        'Modify Column DataType',
        'Drop Columns from Table',
        'Rename Tables',
        'Drop Tables',
        'What is Null Value?',
      ],
    },
    {
      title: 'DML Statements',
      items: [
        'Insert Statement',
        'Update Statement',
        'Delete Statement',
        'Truncate Statement',
        'Merge Statement',
      ],
    },
    {
      title: 'Select Queries',
      items: [
        'Select Query',
        'WHERE Clause',
        'GROUP BY Clause',
        'HAVING Clause',
        'ORDER BY Clause',
      ],
    },
    {
      title: 'SQL Joins',
      items: ['Inner Join', 'Left Join', 'Right Join'],
    },
    {
      title: 'SQL Operators',
      items: [
        'BETWEEN',
        'IN',
        'LIKE',
        'INTERSECT',
        'MINUS',
        'UNION',
        'DISTINCT',
        'ANY, SOME',
        'ALL',
      ],
    },
    {
      title: 'SQL Functions',
      items: ['AVG()', 'COUNT()', 'MAX()', 'MIN()', 'SUM()'],
    },
  ],
};

export const BACKEND_MODULE_1: ModuleType = {
  title: 'Python Programming',
  description:
    'Understand Python programming and be able to translate concepts into pseudo-code and functional app',
  lessons: [
    {
      title: 'Introduction to Python',
      items: [
        'Overview of Python',
        'Installation and setup',
        'Python Syntax',
        'Variables',
        'Reserved words',
        'Input and output',
        'Comments in Python',
      ],
    },
    {
      title: 'Data types',
      items: [
        'Strings',
        'String properties',
        'Indexing and slicing',
        'String methods',
        'Numbers',
        'Boolean',
      ],
    },
    {
      title: 'Python Lists',
      items: [
        'Introduction to Lists',
        'Sorting a List',
        'Slicing a List',
        'Unpacking a List',
        'Iterating over a List',
        'Finding Index of an Element: index()',
      ],
    },
    {
      title: 'Tuple',
      items: ['Indexing tuple elements', 'Unpacking Tuples', 'Type Conversion'],
    },
    {
      title: 'Python Dictionary',
      items: [
        'Introduction to dictionary',
        'Nested dictionary',
        'Dictionary methods',
        'Indexing dictionary items',
        'Updating dictionary items',
        'Dictionary Comprehension',
      ],
    },
    {
      title: 'Python Set',
      items: [
        'Set Comprehension',
        'Union of Sets',
        'Intersection of Sets',
        'Difference between Sets',
        'Symmetric Difference of Sets',
      ],
    },
    {
      title: 'Operators',
      items: [
        'Arithmetic operators',
        'Comparison operators',
        'Logical operators',
        'Assignment operator',
        'Membership operator',
        'Identity operator',
      ],
    },
    {
      title: 'Control Flow',
      items: ['If statement', 'elif'],
    },
    {
      title: 'Loops',
      items: ['While loops', 'For loops', 'For in Loops'],
    },
    {
      title: 'Functions',
      items: [
        'In-built functions',
        'User-defined function',
        'Function parameter',
        'Lambda',
        'Map, filter, reduce',
        '*args and **kwargs',
      ],
    },
    {
      title: 'Modules',
      items: ['Modular programming', 'Python package'],
    },
    {
      title: 'Exception handling',
      items: ['try…except', 'try…except…finally', 'try…except…else'],
    },
    {
      title: 'Working with Files',
      items: [
        'Reading a Text File',
        'Writing to a Text File',
        'Creating a Text File',
      ],
    },
    {
      title: 'Object-oriented programming (OOP)',
      items: [
        'Introduction to Classes',
        'What are objects',
        'Inheritance',
        'Encapsulation',
        'Polymorphism',
      ],
    },
  ],
};
