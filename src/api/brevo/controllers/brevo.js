'use strict';

/**
 * A set of functions called "actions" for `brevo`
 */

module.exports = {
  subscribe: async (ctx, next) => {
    try {
      const { email, firstname, newsletterUrl } = ctx.request.body;
      ctx.body = await strapi.service("api::brevo.brevo").createContact(email, firstname, newsletterUrl);
    } catch (err) {
      console.log(err);
      ctx.send(500);
    }
  }
};
