module.exports = ({ env }) => ({
  host: env('STRAPI_HOST', '0.0.0.0'),
  port: env.int('STRAPI_PORT', 1337),
  url: env('STRAPI_PUBLIC_URL', 'http://localhost:1337'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'bd56bbd9f4023bc6860b069f9005e90b'),
    },
  },
});
