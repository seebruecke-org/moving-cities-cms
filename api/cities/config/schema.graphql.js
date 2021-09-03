module.exports = {
  query: `
    citiesCount(where: JSON): Int!
    featuredCitiesCount(where: JSON): Int!
  `,
  resolver: {
    Query: {
      citiesCount: {
        description: 'Return the count of cities',
        resolverOf: 'application::cities.cities.count',
        resolver: async (obj, options, ctx) => {
          return await strapi.api.cities.services.cities.count(options.where || {});
        },
      },

      featuredCitiesCount: {
        description: 'Return the count of featured cities',
        resolverOf: 'application::cities.cities.count',
        resolver: async (obj, options, ctx) => {
          let where = options.where || {};

          return await strapi.api.cities.services.cities.count({
            ...where,
            is_featured: true
          });
        },
      },
    },
  },
};
