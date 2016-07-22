export default Ember.Controller.extend({
  detailsClosed: true,

  otherSongsPerArtist: Ember.computed('model', function () {
    let allSongs = this.store.peekAll('song');
    return allSongs.filterBy('artist.name', this.get('model.artist.name'));
  }),

  actions: {
    setRating(song, newRating) {
      let thisSong = this.get('store').peekRecord('song', song.id);
      thisSong.set('stars', newRating);
      thisSong.save();
    },

    toggleDetails() {
      this.toggleProperty('detailsClosed');
      $('html,body').animate({
        scrollTop: 9999,
      }, 1000);
    },
  },

});
