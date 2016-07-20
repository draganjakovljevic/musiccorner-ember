import Ember from 'ember';
const {
  computed,
  set,
  isNone,
  inject,
  isEmpty,
} = Ember;
export default Ember.Component.extend({
  store: inject.service(),
  filterArtists: [],
  filterGenres: [],

  // Artist and genre filter
  filteredSongs: computed('filterArtists', 'filterGenres', function () {
    return this.get('songs').filter(song => {
      return (this.filterArtists.contains(song.get('artist.name'))
        || isEmpty(this.filterArtists)) && (this.filterGenres.contains(song.get('genre'))
          || isEmpty(this.filterGenres));
    });
  }),

  actions: {
    showFiltersAction() {
      $('.filter-content').slideToggle();
      if ($('.show-filters').text() === 'Show filters') {
        $('.show-filters').text('Hide filters');
        $('.clear-filter').show();
      } else {
        $('.show-filters').text('Show filters');
        $('.clear-filter').hide();
      }
    },

    clearFiltersAction() {
      $('.search-choice-close').click();
    },

    filterArtistAction(val) {
      if (isNone(val)) {
        val = [];
      }

      this.set('filterArtists', val);
    },

    filterGenreAction(val) {
      if (isNone(val)) {
        val = [];
      }

      this.set('filterGenres', val);
    },

    setRating(song, newRating) {
      let thisSong = this.get('store').peekRecord('song', song.id);
      thisSong.set('stars', newRating);
      thisSong.save();
    },
  },
});
