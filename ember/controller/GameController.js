App.GameController = Ember.ObjectController.extend({
    init: function() {
        this.tick();
        var atoms = this.get('model');
        // this will tell Ember-Data to save/persist the new record
        // atoms.save();
    },
    tick: function() {
        var self = this;
        Ember.run.later(self, function() {
            self.tick();
            var atomsPerSecond = this.get('model').get('atomsPerSecond');
            this.get('model').incrementProperty("atoms", atomsPerSecond);
            this.get('model').save();
        }, 1000/25);
    }
});
