App.introduction = Ember.View.extend({
    tagName: 'h1',
    classNames: ['super-cool-center', 'first-title'],
    introduction: App.Gamer.opt.introduction,
});

App.bigBang = Ember.View.extend({
    tagName: 'div',
    classNames: ['super-cool-center', 'roundfy', 'glowing', 'big-bang', 'no-opacity'],
    didInsertElement: function() {
        this.$().height();
        this.$().removeClass('no-opacity');

    },
    click: function(event) {
        $('.explosion').addClass('e-agora-vai');
        $('.first-title').fadeOut();
        this.$().removeClass('roundfy glowing');
        $('body').css('overflow','hidden');
        this.get('controller').send('startGame', true);
    }
});
