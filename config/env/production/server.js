module.exports = ({ env }) => ({
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '952a3656d4a45c4bffbcd2f82201690c'),
    },
  },
});
