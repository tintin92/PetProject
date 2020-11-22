const mongoose = require("mongoose");
const db = require("../models/pets");

// Empty the Pet collection and inserts the pets attrbs below
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/Petfolio"
);

const petsSeed = [
  {
    pets: [
      {
        name: "Lucy",
        age: 6,
        species: "Dog",
        breed: "Rottweiler",
        gender: "female",
        weight: 100,
        location: "Palm Bay",
        microchip: "34567"
      }
    ]
  }
];


db.Pets
  .remove({})
  .then(() => db.Pets.collection.insertMany(petsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
