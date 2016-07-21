export default Ember.Controller.extend({
  artistListFilter: Ember.computed('filterArtists', function () {
    return this.get('model').mapBy('artist.name').uniq();
  }),

  genreListFilter: Ember.computed('filterArtists', function () {
    return this.get('model').mapBy('genre').uniq();
  }),
});
