//In this file we will just put the whole logic of the api and exports that function as:

const Bootcamp = require('../models/Bootcamps');

// @desc    Get All Bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public

exports.getBootcamps = (req, res, next) => {
  res.status(200).send({ success: true, message: 'get all bootcamps' });
};

// @desc    Get Specific Bootcamp
// @route   GET /api/v1/bootcamps/id
// @access  Private

exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .send({ success: true, message: `get bootcamp with id ${req.params.id}` });
};

// @desc    Post A Bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private

exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
    });
  }
};

// @desc    Update A Bootcamp
// @route   PUT /api/v1/bootcamps/id
// @access  Private

exports.updateBootcamp = (req, res, next) => {
  res.status(200).send({
    success: true,
    message: `edit a bootcamp with id ${req.params.id}`,
  });
};

// @desc    Delete A Bootcamp
// @route   DELETE /api/v1/bootcamps/id
// @access  Private

exports.deleteBootcamp = (req, res, next) => {
  res.status(200).send({
    success: true,
    message: `delete a bootcamp with id ${req.params.id}`,
  });
};
