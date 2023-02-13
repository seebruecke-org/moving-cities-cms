module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bd56bbd9f4023bc6860b069f9005e90b'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
});
