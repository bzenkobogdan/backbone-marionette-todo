TodoMVC.module('TodoList', function (TodoList, App, Backbone, Marionette) {
    TodoList.Controller = Marionette.Controller.extend({
        initialize: function () {
            this.todoList = new App.Todos.TodoList();
        },
		start: function () {
			this.showHeader(this.todoList);
			this.showTodoList(this.todoList);
			this.todoList.fetch();
		},

		showHeader: function (todoList) {
			var header = new App.Layout.Header({
				collection: todoList
			});
			App.header.show(header);
		},


		showTodoList: function (todoList) {
			App.main.show(new TodoList.Views.ListView({
				collection: todoList
			}));
		}
	});

	TodoList.addInitializer(function () {
		var controller = new TodoList.Controller();
		controller.start();
	});
});
