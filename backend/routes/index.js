const imageController = require("../controllers/imageController.js");

class Routes {
  constructor(app){
    this.app = app;
  }

  mount(){
    this.status();
    this.getImages();
    this.getImageById();
    this.createImage();
  }

  status() {
    const PATH = "/api/v1/status";
    this.app.get(PATH, (req, res, next) => {
      res.status(200).json({
        status: "success",
        message: "OK",
      });
    });
  }

  createImage() {
    const PATH = "/api/v1/images";
    this.app.post(PATH, imageController.createImage);
  }
  
  getImages() {
    const PATH = "/api/v1/images";
    this.app.get(PATH, imageController.getImages);
  }


  getImageById() {
    const PATH = "/api/v1/images/:imageId";
    this.app.get(PATH, imageController.getImageById);
  }

}

module.exports = Routes;