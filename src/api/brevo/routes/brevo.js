module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/brevo/subscribe',
      handler: 'brevo.subscribe',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
