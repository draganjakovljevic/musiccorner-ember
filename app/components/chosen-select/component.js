import Ember from 'ember';

export default Ember.Component.extend({
  didRender: function () {
    $('.chosen-select').trigger('chosen:updated');
    let self = this;
    self.$('.chosen-select').chosen({
      width: '100%',
    });
    self.$('.chosen-select').chosen().change(function () {
      self.send('changeChosen', $(this).val());
    });
  },

  actions: {
    changeChosen: function (val) {
      this.changeChosen(val);
    },
  },
});
