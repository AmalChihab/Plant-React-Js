// auth.routes.js
const { verifySignUp } = require('../middleware');
const controller = require('../controllers/auth.controller');
const { authJwt } = require('../middleware');

module.exports = (app) => {
  app.post(
    '/auth/signup',
    [verifySignUp.checkDuplicateUsernameOrEmail],
    controller.signup
  );

  app.post('/api/auth/signin', controller.signin);

};
