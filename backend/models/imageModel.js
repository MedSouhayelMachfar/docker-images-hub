const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
    name: {
      type: String,
    },
    url: {
      type: String,
    },
    description: {
      type: String,
    }
}, { versionKey: false });

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;