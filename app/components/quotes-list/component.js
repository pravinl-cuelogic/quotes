import Component from '@ember/component';

export default Component.extend({
  quoteSorting: ['id:desc'],
  sortedQuotes: Ember.computed.sort('quotes', 'quoteSorting')
});
