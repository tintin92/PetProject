const router = require("express").Router();
const petsController = require("../../controllers/petsController");

// Matches with "/api/pets"
router.route("/")
  .post(petsController.addPet)

router.route("/:user")
  .get(petsController.getMyPets);

// Matches with "/api/pets/:id"
router.route("/:petid")
  .put(petsController.updatePet)
  .delete(petsController.deletePet)
  .get(petsController.getPet);

router.route("/mypets/:user")
  .get(petsController.getAllPets);


module.exports = router;