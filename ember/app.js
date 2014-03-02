/*
    Bate forte o tambor galera
*/
window.App = Ember.Application.create();

App.Gamer = Ember.ArrayProxy.create({
    opt: {
        version: 0.1,
        gameStarted: false,
        introduction: '"In the beginning the universe was smaller than your mother"- Albert Einstein'
    },
    atoms: {
        totalQuantity: 0,
        quantityPerSecond: 0
    },
    energyButton: {
        buttonName: "Energy",
        quantityPerClick: 1
    },
    starButton: {
        buttonName: "Star",
        quantityPerSecond: 0.5,
        cost: 20
    }
});

var fps = 1000/30;

App.Clock = Ember.Object.extend({
    millisecond: null,
    second: null,
    minute: null,
    hour:   null,

    init: function() {
        this.tick();
    },

    tick: function() {
        var now = new Date()

        this.setProperties({
            millisecond: now.getMilliseconds(),
            second: now.getSeconds(),
            minute: now.getMinutes(),
            hour:   now.getHours()
        });

        var self = this;
        setTimeout(function(){ self.tick(); }, fps);
    }
});

Ember.Application.initializer({
  name: "clock",
  initialize: function(container, application) {
    container.optionsForType('clock', { singleton: true });
    container.register('clock:main', application.Clock);
    container.typeInjection('controller', 'clock', 'clock:main');
  }
});

// don't break ObjectController
Ember.ControllerMixin.reopen({ clock: null });
