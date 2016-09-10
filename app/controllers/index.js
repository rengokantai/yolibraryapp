import Ember from 'ember';

export default Ember.Controller.extend({



  emailAddress: '',
        //isDisabled: Ember.computed.empty('emailAddress'),
isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

   actions: {

    saveInvitation() {
      alert(`Saving in progress: ${this.get('emailAddress')}`);
      this.set('responseMessage', `Thank you! ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
    }
  },
  actualEmailAddress: Ember.computed('emailAddress', function() {
    console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
  }),

  emailAddressChanged: Ember.observer('emailAddress', function() {
    console.log('observer is called', this.get('emailAddress'));
  }),

  
});
