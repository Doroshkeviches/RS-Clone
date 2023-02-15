const User = require('./models/User');
const Role = require('./models/Role');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const { secret } = require('./config');
const apiKey = ['bdeff97547msh9e2fb2cf4487c88p1c2cdejsn329751128532', '29e98089a8msh3fd3ed66dc3490ap16249fjsn0f190f5481b5', '381a351d1fmsh49002bfcdd619a8p1fb7b6jsn2dfc9e093608']
let pointer = 1;

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
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (e) {
      console.error;
    }
  }
  async createExerciseList(req, res) {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'bdeff97547msh9e2fb2cf4487c88p1c2cdejsn329751128532',
        'X-RapidAPI-Host': 'exerciseapi3.p.rapidapi.com',
      },
    };
    const arrayMuscule = [];
    const nameArr = [];
    const muscule = await fetch(
      'https://exerciseapi3.p.rapidapi.com/search/muscles/',
      options
    );
    const dataMuscule = await muscule.json();
    for (let i = 0; i < 5 /*switch to dataMusculeNum*/; i++) {
      const exercise = await fetch(
        `https://exerciseapi3.p.rapidapi.com/search/?primaryMuscle=${dataMuscule[i]}`,
        options
      );
      const dataExercise = await exercise.json();
      arrayMuscule.push(...dataExercise);
    }
    const resultArray = await Promise.all(
      arrayMuscule.map(async (exercise) => {
        const description = await createDescription(exercise.Name);
        const objExercise = {
          name: exercise.Name,
          YouTube: exercise['Youtube link'],
          Musclse: exercise['Primary Muscles'],
          description: description,
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
    let nameExercise = req.originalUrl;
    nameExercise = nameExercise.split(':')[1];
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '29e98089a8msh3fd3ed66dc3490ap16249fjsn0f190f5481b5',
        'X-RapidAPI-Host': 'exerciseapi3.p.rapidapi.com',
      },
    };

    const description = await createDescription(nameExercise);
    const exercisePromise = await fetch(
      `https://exerciseapi3.p.rapidapi.com/search/?name=${nameExercise}`,
      options
    );
    const exercise = await exercisePromise.json();
    const exerciseObj = exercise[0];
    const objExercise = {
      name: exerciseObj.Name,
      YouTube: exerciseObj['Youtube link'],
      Musclse: exerciseObj['Primary Muscles'],
      description: description,
    };
    res.json(objExercise);
  }
}
module.exports = new authController();

async function createDescription(name) {
  try {
    const descPromis = await fetch(
      `https://api.api-ninjas.com/v1/exercises?name=${name}`,
      {
        method: 'GET',
        headers: {
          'X-Api-Key': 'b1lF+mYDYzeVz4LE8vl10A==SRghM2llzGl4XzzW',
        },
      }
    );
    const response = await descPromis.json();
    return response[0].instructions;
  } catch {
    return '';
  }
}
