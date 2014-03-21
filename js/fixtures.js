App.Quiz.FIXTURES = [
  {
    id: 1,
    name: 'The JavaScript Quiz',
    description: 'take this quiz and find out if you\'re a super genious',
    questions: [100,101]
  },
  {
    id: 2,
    name: 'The Cascading Stylesheet Quiz',
    description: 'take this quiz and find out if you\'re a super genious in CSS',
    questions: [102,103]
  }
];

App.Question.FIXTURES = [
      {
        id:100,
        question: 'Inside which HTML element do we put the JavaScript',
        quiz: 1,
        answers: [
          {
            answer: 'alpha',
            weight: 0
          },
          {
            answer: 'beta',
            weight: 5
          },
          {
            answer: 'uno',
            weight: 0
          },
          {
            answer: 'dos',
            weight: 5
          }
        ]
      },
      {
        id:101,
        question: 'How do you alert Hello World',
        quiz: 1,
        answers: [
          {
            answer: 'gamma',
            weight: 0
          },
          {
            answer: 'delta',
            weight: 5
          }
        ]
      },
      {
        id:102,
        question: 'How do you declare an inline stylesheet?',
        quiz: 2,
        answers: [
          {
            answer: 'alpha',
            weight: 0
          },
          {
            answer: 'beta',
            weight: 5
          }
        ]
      },
      {
        id:103,
        question: 'Show how to include an external stylesheet',
        quiz: 2,
        answers: [
          {
            answer: 'alpha',
            weight: 0
          },
          {
            answer: 'beta',
            weight: 5
          }
        ]
      }      
];