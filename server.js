const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
const colors = require('colors');

//load env variables
dotenv.config({ path: './config/config.env' });

//connect to db
connectDB();

//load routes files
const bootcamps = require('./routes/bootcamps');

const app = express();
//use middleware
// app.use(logger);
//Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//Mount Routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
  console.log(
    `App listening on port ${PORT} in ${process.env.NODE_ENV} mode`.yellow.bold
  );
});

//handle unhandled promise rejections
process.on('unhandledRejections', (err, promise) => {
  console.log(`Unhandled Rejections , ERROR : ${err.message}`.red);
  //close server
  server.close(() => process.exit(1));
});
