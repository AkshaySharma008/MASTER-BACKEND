const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log(
    `MONGO DB connected to ${conn.connection.host} in ${process.env.NODE_ENV} mode`
      .cyan.underline.bold
  );
};

module.exports = connectDB;
