const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const PetProfileSchema = new Schema({

  name: {
    type: String,
    trim: true,
    // required: "Enter your pets name"
  },

  age: {
    type: Number,
  },

  gender: {
    type: String,
    trim: true,
  },

  species: {
    type: String,
    trim: true,
  },

  breed: {
    type: String,
  },

  weight: {
    type: Number,
  },

  location: {
    type: String,
    trim: true,
  },

  microchip: {
    type: Number,
    unique: true,
    // required: true
  }
});
// We are classes in Mongoose right here

const Pet = mongoose.model("Pet", PetProfileSchema);

module.exports = Pet;
