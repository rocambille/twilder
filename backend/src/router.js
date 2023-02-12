const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const resourceControllers = require("./controllers/resourceControllers");
const tagControllers = require("./controllers/tagControllers");

const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./services/auth");

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.post("/users", hashPassword, userControllers.add);

router.get("/resources", resourceControllers.browse);
router.get("/resources/:id", resourceControllers.read);

router.get("/tags", tagControllers.browse);
router.get("/tags/:id", tagControllers.read);

router.post(
  "/login",
  userControllers.getByEmailWithPasswordAndPassToNext,
  verifyPassword
);

router.use(verifyToken);

router.put("/users/:id", hashPassword, userControllers.edit);
router.delete("/users/:id", userControllers.destroy);

router.put("/resources/:id", resourceControllers.edit);
router.post("/resources", resourceControllers.add);
router.delete("/resources/:id", resourceControllers.destroy);

router.put("/tags/:id", tagControllers.edit);
router.delete("/tags/:id", tagControllers.destroy);

module.exports = router;
