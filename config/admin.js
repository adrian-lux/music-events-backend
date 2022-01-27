module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '67be2393fd48a81516a9390f1cec1de1'),
  },
});
