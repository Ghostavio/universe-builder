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
console.log("This is a work in progress, feel free to hack :)");
