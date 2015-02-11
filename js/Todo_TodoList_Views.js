TodoMVC.module('TodoList.Views', function (Views, App, Backbone, Marionette) {
	Views.ItemView = Marionette.ItemView.extend({
		tagName: 'li',
		template: '#template-todoItemView',

		ui: {
			edit: '.edit',
			destroy: '.destroy'
		},

		events: {
			'click @ui.destroy': 'deleteModel'
		},


		deleteModel: function () {
			this.model.destroy();
		},


		onEditKeypress: function (e) {
			var ENTER_KEY = 13, ESC_KEY = 27;

			if (e.which === ENTER_KEY) {
				this.onEditFocusout();
				return;
			}

			if (e.which === ESC_KEY) {
				this.ui.edit.val(this.model.get('title'));
				this.$el.removeClass('editing');
			}
		}
	});

	Views.ListView = Backbone.Marionette.CompositeView.extend({
		template: '#template-todoListCompositeView',
		childView: Views.ItemView,
		childViewContainer: '#todo-list'
	});
});
