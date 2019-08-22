const router = require("express").Router();
const profileController = require("../../controllers/profileController");

router.route("/")
    .get(profileController.findAll)
    .post(profileController.create);

router
    .route("/:id")
    .get(profileController.findById)
    .put(profileController.update)
    .delete(profileController.remove);

router
    .route("/newproj/:username")
    .put(profileController.addProj);

module.exports = router;