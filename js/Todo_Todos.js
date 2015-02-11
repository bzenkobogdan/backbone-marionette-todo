TodoMVC.module('Todos', function (Todos, App, Backbone) {

	Todos.Todo = Backbone.Model.extend({
		defaults: {
			title: '',
			completed: false,
			created: 0
		}
	});


	Todos.TodoList = Backbone.Collection.extend({
		model: Todos.Todo,
		comparator: 'created'
	});
});
