App.GameController = Ember.Controller.extend({
	init: function() {
		var game = this.get('model');
		game.save();
	}
});
