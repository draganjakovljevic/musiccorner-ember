import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  name: attr('string'),
  genre: attr('string'),
  duration: attr('number'),
  stars: attr('number'),
  image: attr('string'),
  artist: attr(),
  album: attr(),
});
