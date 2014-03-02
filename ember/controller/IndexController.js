App.IndexController = Ember.Controller.extend({
    actions: {
        startGame: function(start){
            aself = this;
            App.Gamer.opt.gameStarted = start;
            // create a record and save it to the store
            if (this.get('model.length') === 0) {
                var newGame = this.store.createRecord('storage', {
                    id: 1,
                    atoms: 0,
                    energyPerClick: 1,
                    atomsPerSecond: 0,
                    gameStarted: true
                });
                newGame.save();
            }
            console.image('http://universebuilder.codenamegus.com/assets/img/bigbang.gif');
            this.transitionToRoute('game');
        }
    }
});
