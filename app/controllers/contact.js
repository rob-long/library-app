import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({

  isValidEmail: computed.match('emailAddress', /^.+@.+\..+$/),
  isMessageEnoughLong: computed.gte('message.length', 5),

  isValid: computed.and('isValidEmail', 'isMessageEnoughLong'),

  actions: {
    sendMessage: function() {
      var email = this.get('emailAddress');
      var message = this.get('message');

      alert('Sending your message in progress... ');

      var responseMessage = 'To: ' + email + ', Message: ' + message;
      this.set('responseMessage', responseMessage);
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }
});