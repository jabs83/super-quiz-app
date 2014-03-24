App.Quiz.FIXTURES = [
  {
    id: 1,
    name: 'The JavaScript Quiz',
    description: 'take this quiz and find out if you\'re a super genious',
    questions: [100,101,102,103,104]
  },
  {
    id: 2,
    name: 'The Cascading Stylesheet Quiz',
    description: 'take this quiz and find out if you\'re a super genious in CSS',
    questions: [105,106]
  }
];

App.Question.FIXTURES = [
      {
        id:100,
        question: '1. Inside which HTML element do we put the JavaScript?',
        answers: [
          { answer: '<js>', weight: 0.01 },
          { answer: '<javascript>', weight: 0.01 },
          { answer: '<scripting>', weight: 0.01 },
          { answer: '<script>', weight: 5 }
        ]
      },
      {
        id:101,
        question: '2. What is the correct JavaScript syntax to write "Hello World"?',
        answers: [
          { answer: 'echo "Hello World";', weight: 0.01 },
          { answer: 'document.write("Hello World");', weight: 5 },
          { answer: '("Hello World");', weight: 0.01 },
          { answer: 'response.write("Hello World");', weight: 0.01 }
        ]
      },
      {
        id:102,
        question: '3. Where is the correct place to insert a JavaScript?',
        answers: [
          { answer: 'The <body> section', weight: 0.01 },
          { answer: 'Both the <head> section and the <body> section are correct', weight: 5 },
          { answer: 'The <head> section', weight: 0.01 }
        ]
      },
      {
        id:103,
        question: '4. What is the correct syntax for referring to an external script called "xxx.js"?',
        answers: [
          { answer: '<script name="xxx.js">', weight: 0.01 },
          { answer: '<script href="xxx.js">', weight: 0.01 },
          { answer: '<script src="xxx.js">', weight: 5 }
        ]
      },
      {
        id:104,
        question: '5. The external JavaScript file must contain the <script> tag.',
        answers: [
          { answer: 'True', weight: 0.01 },
          { answer: 'False', weight: 5 }
        ]
      },
      {
        id:105,
        question: 'How do you declare an inline stylesheet?',
        answers: [
          {
            answer: 'alpha',
            weight: 0.01
          },
          {
            answer: 'beta',
            weight: 5
          }
        ]
      },
      {
        id:106,
        question: 'Show how to include an external stylesheet',
        answers: [
          {
            answer: 'alpha',
            weight: 0.01
          },
          {
            answer: 'beta',
            weight: 5
          }
        ]
      }      
];