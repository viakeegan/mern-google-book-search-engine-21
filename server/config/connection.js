const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://nicole_w:lokiandlily2020@cluster0.hfj3i.mongodb.net/googlebooks`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
