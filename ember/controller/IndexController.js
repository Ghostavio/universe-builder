App.IndexController = Ember.Controller.extend({
  actions: {
        startGame: function(start){
            App.Game.opt.gameStarted = start;
            // create a record and save it to the store

            var newGame = this.store.createRecord('storage', {atoms: 0, gameStarted: true});
            newGame.save();

            // this will tell Ember-Data to save/persist the new record
            //game.save();
            // then transition to the current user
            //this.transitionToRoute('job', job);
        }
    }
});
