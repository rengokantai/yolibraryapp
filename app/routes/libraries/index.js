import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('library');
  },

  actions: {

    deleteLibrary(library) {
      let confirmation = confirm('Delete. Are you sure?');

      if (confirmation) {
        library.destroyRecord();
      }
    }
  }

});