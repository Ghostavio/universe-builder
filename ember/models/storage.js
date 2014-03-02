App.Storage = DS.Model.extend({
  atoms          : DS.attr('number'),
  energyPerClick : DS.attr('number'),
  atomsPerSecond : DS.attr('number'),
  gameStarted    : DS.attr('boolean')
});
