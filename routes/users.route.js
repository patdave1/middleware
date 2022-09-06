const router = require("express").Router;
const {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../contollers/users.controller");
const { pathMiddleware } = require("../middlewares/pathMiddleware")

const userRouter = router();

userRouter.route("/", pathMiddleware).get(getUsers).post(createUser);
userRouter.route("/:userId").patch(updateUser).delete(deleteUser).get(getUser);

module.exports = userRouter;