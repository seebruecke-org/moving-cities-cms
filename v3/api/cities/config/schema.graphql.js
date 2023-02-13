module.exports = {
  query: `
    citiesCount(locale: String, where: JSON): Int!
    featuredCitiesCount(locale: String, where: JSON): Int!
  `,
  resolver: {
    Query: {
      citiesCount: {
        description: 'Return the count of cities',
        resolverOf: 'application::cities.cities.count',
        resolver: async (obj, options, ctx) => {
          return await strapi.api.cities.services.cities.count({
            ...(options.where || {}),
            _locale: options.locale
          });
        },
      },

      featuredCitiesCount: {
        description: 'Return the count of featured cities',
        resolverOf: 'application::cities.cities.count',
        resolver: async (obj, options, ctx) => {
          let where = options.where || {};

          return await strapi.api.cities.services.cities.count({
            ...where,
            _locale: options.locale,
            is_featured: true
          });
        },
      },
    },
  },
};
