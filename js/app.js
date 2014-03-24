App = Ember.Application.create();

App.Router.map(function() {
  this.resource('quizzes', {path: '/quiz'}, function(){
    this.resource('quiz', {path: '/:quiz_id'}, function() {
      this.resource('question', {path: 'question/:question_id'});
    })
  });
});

App.QuizzesRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('quiz');
  },
  actions: {
    answered: function(answer) {
      var thisQuiz = this.controllerFor('quiz');
      thisQuiz.set('currentScore', thisQuiz.get('currentScore') + answer.weight);
      alert(thisQuiz.get('currentScore'));
    }
  }
});

App.QuizController = Ember.ObjectController.extend({
});

App.QuizIndexRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('quiz');
  }
});

App.QuestionController = Ember.ObjectController.extend({
  needs:'quiz',
  quiz: Ember.computed.alias("controllers.quiz"),
  currentQuestion: function() {
    if (this.get('content') === this.get('quiz').get('content.lastQuestion')){
      return true;
    }
  }.property('this.content','controllers.quiz.content.lastQuestion')
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Quiz = DS.Model.extend({
  currentScore: 0,
  name: DS.attr('string'),
  description: DS.attr('string'),
  questions: DS.hasMany('question', {async: true}),
  firstQuestion: function() {
    return this.get('questions.firstObject');
  }.property('questions.firstObject'),
  lastQuestion: function(){
    return this.get('questions.lastObject');
  }.property('questions.lastObject')
});

App.Question = DS.Model.extend({
  question: DS.attr('string'),
  quiz: DS.belongsTo('quiz', {async: true}),
  answers: DS.attr('string'),
});