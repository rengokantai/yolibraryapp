import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('library');
  },

  actions: {

    saveLibrary(newLibrary) {
      newLibrary.save().then(() => this.transitionTo('libraries'));
    },

    willTransition() {
        //called before the route change.  we use this action to reset the model if we haven’t saved it in the database yet.
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
})

