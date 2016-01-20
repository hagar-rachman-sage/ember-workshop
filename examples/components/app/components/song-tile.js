import Ember from 'ember';

export default Ember.Component.extend({
  didRender() {
    this.$('.rating').barrating({
      theme: 'css-stars',
      onSelect: (value) => {
        this.getAttr('on-rating-change')(value);
      }
    });
  },

  willDestroyElement() {
    this.$('.rating').barrating('destroy');
  }
});
