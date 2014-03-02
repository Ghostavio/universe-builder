App.IndexController = Ember.Controller.extend({
    actions: {
        startGame: function(start){
            App.Gamer.opt.gameStarted = start;
            // create a record and save it to the store
            if (this.get('model.length') === 0) {
                var newGame = this.store.createRecord('storage', {id: 1, atoms: 0, gameStarted: true});
                newGame.save();
            }
            this.transitionToRoute('game');
        }
    }
});
