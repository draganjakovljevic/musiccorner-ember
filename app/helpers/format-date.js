import Ember from 'ember';

export function formatDate([val]) {
  return moment(val).format('mm:ss');
}

export default Ember.Helper.helper(formatDate);
