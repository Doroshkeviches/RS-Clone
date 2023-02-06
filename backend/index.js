const express = require('express');
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const authRouter = require('./authRouter');
const app = express();
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', '*');

  next();
});
app.use('/auth', authRouter);

const start = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://Doroshkeviches:Doroshkeviches@cluster0.reh70fb.mongodb.net/RS_Clone?retryWrites=true&w=majority`
    );
    app.listen(PORT, () => console.log(`server start on port ${PORT}`));
  } catch (e) {
    // TODO
  }
};
start();
