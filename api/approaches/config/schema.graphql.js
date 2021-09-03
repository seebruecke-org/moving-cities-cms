module.exports = {
  query: `
    approachesCount(where: JSON): Int!
  `,
  resolver: {
    Query: {
      approachesCount: {
        description: 'Return the count of approaches',
        resolverOf: 'application::approaches.approaches.count',
        resolver: async (obj, options, ctx) => {
          return await strapi.api.approaches.services.approaches.count(options.where || {});
        },
      },
    },
  },
};
