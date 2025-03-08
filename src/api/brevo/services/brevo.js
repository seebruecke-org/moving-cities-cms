'use strict';

/**
 * brevo service
 */

module.exports = () => ({
  createContact: async (email, firstname, newsletterUrl) => {
    try {
      let Brevo = require('@getbrevo/brevo');
      let defaultClient = Brevo.ApiClient.instance;
      let apiKey = defaultClient.authentications['api-key'];
      apiKey.apiKey = process.env.BREVO_API_KEY;
      let apiInstance = new Brevo.ContactsApi();
      let createContact = new Brevo.CreateDoiContact();
      createContact.email = email;
      createContact.includeListIds = [parseInt(process.env.BREVO_LIST_ID)];
      createContact.templateId = parseInt(process.env.BREVO_TEMPLATE_ID);
      createContact.redirectionUrl = `${newsletterUrl}?success=true`;
      createContact.attributes = {
        FNAME: firstname
      };

      await apiInstance.createDoiContact(createContact);
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
