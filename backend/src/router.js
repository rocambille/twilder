const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const twildControllers = require("./controllers/twildControllers");
const tagControllers = require("./controllers/tagControllers");

const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./services/auth");

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.post("/users", hashPassword, userControllers.add);

router.get("/twilds", twildControllers.browse);
router.get("/twilds/:id", twildControllers.read);

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

router.put("/twilds/:id", twildControllers.edit);
router.post("/twilds", twildControllers.add);
router.delete("/twilds/:id", twildControllers.destroy);

router.put("/tags/:id", tagControllers.edit);
router.delete("/tags/:id", tagControllers.destroy);

module.exports = router;
