const Router = require("express");
const router = new Router();
const controller = require("./authController");
const { check } = require("express-validator");
const authMiddleware = require("./middleware/authMiddleware");
const roleMiddleware = require("./middleware/roleMiddleware");
const minPasswordLenght = 4;
const maxPasswordLenght = 10;

router.post(`/registration`, controller.registration);
router.post("/login", controller.login);
router.get("/searchUser", controller.getUser);
router.put("/updateUser", controller.changeValue);
router.get("/exercisesList", controller.createExerciseList);
router.get("/exercises/:name", controller.createExercise);
router.get("/workout/:name", controller.createWockout);
router.post("/createMyWorkout", controller.createMyWorkout);
router.get("/userWorkout", controller.getWorkout);
router.get("/userExercise", controller.getExercise);

module.exports = router;
