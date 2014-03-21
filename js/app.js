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
      this.controllerFor('quiz').set('currentScore', answer.weight);
      alert(this.controllerFor('quiz').get('currentScore'));
    }
  }
});

App.QuizController = Ember.ObjectController.extend({});

App.QuizIndexRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('quiz');
  }
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Quiz = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  questions: DS.hasMany('question', {async: true}),
  firstQuestion: function() {
    return this.get('questions.firstObject');
  }.property('questions.firstObject')
});

App.Question = DS.Model.extend({
  question: DS.attr('string'),
  quiz: DS.belongsTo('quiz', {async: true}),
  answers: DS.attr('string')
});