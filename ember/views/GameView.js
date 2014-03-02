App.energyButton = Ember.View.extend({
    tagName: 'button',
    classNames: ['energy'],
    buttonName: App.Gamer.energyButton.buttonName,
    click: function(event) {
        var quantityPerClick = this.get('controller').get('model').get('quantityPerClick');
        this.get('controller').get('model').incrementProperty("atoms", quantityPerClick);
        this.get('controller').get('model').save();
    }
});

App.starButton = Ember.View.extend({
    tagName: 'button',
    classNames: ['star'],
    buttonName: App.Gamer.starButton.buttonName,
    click: function(event) {
        var totalAtoms = this.get('controller').get('model').get('atoms');
            atomsPerSecond = App.Gamer.starButton.quantityPerSecond,
            cost = App.Gamer.starButton.cost,
            self = this;
        if(cost < totalAtoms) {
            this.get('controller').get('model').incrementProperty("atoms", -cost);
            this.get('controller').get('model').incrementProperty("atomsPerSecond", atomsPerSecond);
            this.get('controller').get('model').save();
        }
        // App.tick.tock();
    }
});
