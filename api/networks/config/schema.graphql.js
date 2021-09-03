module.exports = {
  query: `
    networksCount(where: JSON): Int!
  `,
  resolver: {
    Query: {
      networksCount: {
        description: 'Return the count of networks',
        resolverOf: 'application::networks.networks.count',
        resolver: async (obj, options, ctx) => {
          return await strapi.api.networks.services.networks.count(options.where || {});
        },
      },
    },
  },
};
