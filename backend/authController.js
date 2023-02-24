const User = require('./models/User');
const Role = require('./models/Role');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const { secret } = require('./config');
const workoutHelpers = require('./workout.helpers');

function generateAccessToken(id, roles) {
  const payload = {
    id,
    roles,
  };
  return jwt.sign(payload, secret, { expiresIn: '24h' });
}

class authController {
  async registration(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: 'Registration error', errors });
      }
      const { username, password } = req.body;
      const candidate = await User.findOne({ username });
      if (candidate) {
        return res
          .status(400)
          .json({ message: 'A user with the same name already exists' });
      }
      const hashPassword = bcrypt.hashSync(password, 7);
      const userRole = await Role.findOne({ value: 'USER' });
      const user = new User({
        username,
        password: hashPassword,
        roles: [userRole.value],
      });
      await user.save();
      return res.json({ message: `The user has been successfully registered` });
    } catch (e) {
      res.status(400).json({ message: 'Registration error' });
    }
  }
  async changeValue(req, res) {
    try {
      const { username, name, gender, activity, weight, height, age } =
        req.body;
      const userRole = await User.findOne({ username });
      console.log(userRole);

      userRole.name = name || userRole.name;
      userRole.gender = gender || userRole.gender;
      userRole.activity = activity || userRole.activity;
      userRole.weight = weight || userRole.weight;
      userRole.height = height || userRole.height;
      userRole.age = age || userRole.age;

      await userRole.save();
      return res.json({
        message: `The user has been successfully updated`,
        userRole,
      });
    } catch (e) {
      res.status(400).json({ message: 'User update error' });
    }
  }
  async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(404).json({ message: `User ${username} not found` });
      }
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        return res.status(400).json({ message: `Incorrect password` });
      }
      const token = generateAccessToken(user._id, user.roles);
      return res.json({ token });
    } catch (e) {
      res.status(400).json({ message: 'Login failed' });
    }
  }
  async getUser(req, res) {
    try {
      const username = req.query.name;
      const user = await User.findOne({ username })
      if (!user) {
        return res.status(404).json({ message: `User ${username} not found` });
      }
      res.json(user);
    } catch (e) {
      console.error;
    }
  }
  async createExerciseList(req, res) {
    const options = workoutHelpers.workoutHelpers.options;
    const arrayMuscule = [];
    const nameArr = [];
    const muscule = await fetch(
      `${workoutHelpers.workoutHelpers.exerciseApi}muscles/`,
      options
    );
    const dataMuscule = await muscule.json();
    for (let i = 0; i < 5 /*switch to dataMusculeNum*/; i++) {
      const exercise = await fetch(
        `${workoutHelpers.workoutHelpers.exerciseApi}?primaryMuscle=${dataMuscule[i]}`,
        options
      );
      const dataExercise = await exercise.json();
      arrayMuscule.push(...dataExercise);
    }
    const resultArray = await Promise.all(
      arrayMuscule.map(async (exercise) => {
        const videoId = workoutHelpers.workoutHelpers.createVideoId(
          exercise['Youtube link']
        );
        const objExercise = {
          name: exercise.Name,
          img: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
        };
        if (!nameArr.includes(exercise.name)) {
          nameArr.push(exercise.Name);
          return objExercise;
        }
      })
    );
    res.json(resultArray);
  }
  async createExercise(req, res) {
    const options = workoutHelpers.workoutHelpers.options;
    const nameExercise = req.params.name;
    const descriptionApiResponse =
      await workoutHelpers.workoutHelpers.createDescription(nameExercise);

    const exercisePromise = await fetch(
      `${workoutHelpers.workoutHelpers.exerciseApi}?name=${nameExercise}`,
      options
    );
    const exercise = await exercisePromise.json();
    const exerciseObj = exercise[0] || {};

    if (!(exerciseObj?.['Name'] || descriptionApiResponse?.['name'])) {
      res.status(404).json({});
      return;
    }

    const getImg = (exerciseObj) => {
      if (exerciseObj?.['Youtube link']) {
        const videoId = workoutHelpers.workoutHelpers.createVideoId(exerciseObj['Youtube link']);
        return `https://img.youtube.com/vi/${videoId}mqdefault.jpg`;
      }

      return null;
    }

    const getMuscle = (exerciseObj, descriptionApiResponse) => {
      if (exerciseObj?.['Primary Muscles']) {
        return exerciseObj['Primary Muscles'];
      }

      if (descriptionApiResponse?.['muscule']) {
        return [descriptionApiResponse.muscule];
      }

      return [];
    }

    const objExercise = {
      name: descriptionApiResponse?.name || exerciseObj?.Name || null,
      YouTube: exerciseObj?.['Youtube link'] || null,
      Musclse: getMuscle(exerciseObj, descriptionApiResponse),
      Type: exerciseObj?.Type || null,
      Img: getImg(exerciseObj),
      equipment: descriptionApiResponse?.equipment || null,
      description: descriptionApiResponse?.instructions || null,
      time: workoutHelpers.workoutHelpers.workoutTime,
    };
    res.json(objExercise);
  }
  async createWockout(req, res) {
    const options = workoutHelpers.workoutHelpers.options;
    const nameArr = [];
    const worckoutName = req.params.name;
    const exercise = await fetch(
      `${workoutHelpers.workoutHelpers.exerciseApi}?primaryMuscle=${worckoutName}`,
      options
    );
    const dataExercise = await exercise.json();
    const resultArray = await Promise.all(
      dataExercise.map(async (exercise) => {
        const videoId = workoutHelpers.workoutHelpers.createVideoId(
          exercise['Youtube link']
        );
        const descriptionApiResponse =
          await workoutHelpers.workoutHelpers.createDescription(exercise.Name);
        const objExercise = {
          name: exercise.Name,
          YouTube: workoutHelpers.workoutHelpers.createVideoId(
            exercise['Youtube link']),
          Musclse: exercise['Primary Muscles'],
          Type: exercise.Type,
          Img: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
          equipment: descriptionApiResponse
            ? descriptionApiResponse.equipment
            : '',
          description: descriptionApiResponse
            ? descriptionApiResponse.instructions
            : '',
          time: workoutHelpers.workoutHelpers.workoutTime,
        };
        if (!nameArr.includes(exercise.name)) {
          nameArr.push(exercise.Name);
          return objExercise;
        }
      })
    );
    res.json(resultArray);
  }
}
module.exports = new authController();
