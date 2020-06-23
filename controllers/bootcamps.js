//In this file we will just put the whole logic of the api and exports that function as:

const Bootcamp = require('../models/Bootcamps');

// @desc    Get All Bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public

exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res.status(200).json({
      success: true,
      data: bootcamps,
      counts: bootcamps.length,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
};

// @desc    Get Specific Bootcamp
// @route   GET /api/v1/bootcamps/id
// @access  Private

exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) {
      return res.status(400).json({
        success: false,
      });
    }
    res.status(200).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
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

exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!bootcamp) {
      res.status(400).json({
        message: false,
      });
    }
    res.status(200).send({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
    });
  }
};

// @desc    Delete A Bootcamp
// @route   DELETE /api/v1/bootcamps/id
// @access  Private

exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcamp) {
      res.status(400).json({
        message: false,
      });
    }
    res.status(200).send({
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
    });
  }
};
