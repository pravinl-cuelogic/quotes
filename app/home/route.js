import Route from '@ember/routing/route';

export default Route.extend({
  model(){
  	
  	// debugger;
    /*return Ember.RSVP.hash({
    	user: this.store.findRecord('user',1)
    });*/
    /*return { 
    	user: { 
    		id: 1, 
    		username: 'John', 
    		numberOfQuotes: 10, 
    		numberOfFollowing: 100, 
    		numberOfFollowers: 150 
    	}
    };*/
    let quotes = [
		  {
		  	id: 1,
		  	text: "Hi, I am working on Ember 3.x",
		  	user: 1
		  },
		  {
		  	id: 2,
		  	text: "Hi, I am working on Ember 2.x",
		  	user: 1
		  }
		];
    return Ember.RSVP.hash({
    	user: { 
    		id: 1, 
    		username: 'John', 
    		numberOfQuotes: 10, 
    		numberOfFollowing: 100, 
    		numberOfFollowers: 150 
    	},
    	quotes: quotes
    })
  }
});
