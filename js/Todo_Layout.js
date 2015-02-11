TodoMVC.module('Layout', function (Layout, App, Backbone) {
	Layout.Header = Backbone.Marionette.ItemView.extend({
		template: '#template-header',
		ui: {
			input: '#new-todo'
		},

		events: {
			'keypress @ui.input': 'onInputKeypress'
		},

		onInputKeypress: function (e) {
			var ENTER_KEY = 13,
			todoText = this.ui.input.val().trim();

			if (e.which === ENTER_KEY && todoText) {
				this.collection.create({
					title: todoText
				});
				this.ui.input.val('');
			}
		}
	});

});
