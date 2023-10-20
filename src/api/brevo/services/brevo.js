'use strict';

/**
 * brevo service
 */

module.exports = () => ({
  createContact: async (email, firstname) => {
    try {
      let Brevo = require('@getbrevo/brevo');
      let defaultClient = Brevo.ApiClient.instance;
      let apiKey = defaultClient.authentications['api-key'];
      apiKey.apiKey = process.env.BREVO_API_KEY;
      let apiInstance = new Brevo.ContactsApi();
      let createContact = new Brevo.CreateContact();
      createContact.email = email;
      createContact.listIds = [parseInt(process.env.BREVO_LIST_ID)];
      createContact.attributes = {
        FNAME: firstname
      };

      await apiInstance.createContact(createContact);
      return {
        success: true
      }
    } catch (err) {
      return {
        success: false,
        error: err.response.body.message
      };
    }
  }
});
