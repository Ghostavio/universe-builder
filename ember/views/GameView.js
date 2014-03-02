App.energyButton = Ember.View.extend({
    tagName: 'button',
    classNames: ['energy'],
    buttonName: App.Gamer.energyButton.buttonName,
    click: function(event) {
        this.get('controller').get('model').incrementProperty("atoms", App.Gamer.energyButton.quantityPerClick);
        this.get('controller').get('model').save();
    }
});
