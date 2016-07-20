import Ember from 'ember';
const {
  computed,
  get,
} = Ember;
export default Ember.Component.extend({

  totalStars: computed('currentRating', 'maxRating', function () {
    let fullStars = this.calculateRating(1, get(this, 'currentRating'), 'full');
    let emptyStars = this.calculateRating(get(this, 'currentRating') + 1,
      get(this, 'maxRating'), 'empty');
    return fullStars.concat(emptyStars);
  }),

  calculateRating(start, end, type) {
    let stars = [];
    for (let i = start; i <= end; i++) {
      stars.push({
        rating: i,
        full: type === 'full',
      });
    }

    return stars;
  },

  actions: {
    updateRating(item, newRating, isFull) {
      // Reduce rating if clicked on full star
      if (isFull) {
        this.attrs.update(item, newRating - 1);
      } else {
        this.attrs.update(item, newRating);
      }
    },
  },
});
