const Router = require('express');
const router = new Router();
const controller = require('./authController');
const { check } = require('express-validator');
const authMiddleware = require('./middleware/authMiddleware');
const roleMiddleware = require('./middleware/roleMiddleware');
const minPasswordLenght = 4;
const maxPasswordLenght = 10;

router.post(
  `/registration`,
  [
    check('username', 'Username cannot be empty').notEmpty(),
    check(
      'password',
      `Password must be more than ${minPasswordLenght} and less than ${maxPasswordLenght} characters`
    ).isLength({ min: 4, max: 10 }),
  ],
  controller.registration
);
router.post('/login', controller.login);
router.get('/searchUser',controller.getUser);
router.put('/updateUser', controller.changeValue);
router.get('/exercisesList', controller.createExerciseList);
router.get('/exercises/:name', controller.createExercise);
router.get('/workout/:name', controller.createWockout);

module.exports = router;
