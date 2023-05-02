const AppError = require("../utils/appError");
const println = require("../utils/println");
const ImageModel = require("../models/imageModel");


// Return docker images
const getImages = async (req, res, next) => {
  try
  {
    const retrievedImages = await ImageModel.find();
    if (retrievedImages.length === 0)
    {
      return res.status(200).json({
        status: "success",
        message: `No document found.`,
      });
    }
    return res.status(200).json({
      status: "success",
      data: retrievedImages,
    });
  } catch (error)
  {
    println({ service: "getImages", level: "error", message: "Error while searching for doc" });
    return next(new AppError("Error when searching document", 400));
  }
};

// Return docker image by id
const getImageById = async (req, res, next) => {
  const imageId = req.params?.imageId;
  if (!imageId)
  {
    println({ service: "getImageById", level: "error", message: "Missing query param" });
    return next(new AppError("Missing query param!", 400));
  } else
  {
    try
    {
      const retrievedDoc = await ImageModel.findOne({ imageId: imageId });
      if (!retrievedDoc)
      {
        return res.status(200).json({
          status: "success",
          message: `No document found with id ${imageId}`,
        });
      }
      return res.status(200).json({
        status: "success",
        data: retrievedDoc,
      });
    } catch (error)
    {
      println({ service: "getImageById", level: "error", message: "Error while searching for doc" });
      return next(new AppError("Error while searching for doc", 400));
    }
  }
};

// create docker image
const createImage = async (req, res, next) => {
  const reqBody = req.body;
  const { name, url, description } = reqBody;
  if (!name || !url || !description)
  {
    println({ service: "createImage", level: "error", message: "Missing body feilds" });
    return next(new AppError("Missing body feilds", 400));
  } else
  {
    try
    {
      const image = new ImageModel(reqBody);
      const savedDoc = await image.save();

      return res.status(200).json({
        status: "success",
        data: savedDoc,
      });
    } catch (error)
    {
      println({ service: "createImage", level: "error", message: "Error while creating doc" });
      return next(new AppError("Error while creating doc", 400));
    }
  }
};

module.exports = {
  getImages,
  getImageById,
  createImage
};
