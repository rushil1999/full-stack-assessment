module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9394dded7d633975ea69ec459722b546'),
  },
});
