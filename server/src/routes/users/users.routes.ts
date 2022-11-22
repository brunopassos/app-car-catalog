import { Router } from "express";
import { authUser } from "../../middlewares/authUser.middleware";

const userRoutes = Router();

import userCreateController from "../../controllers/users/userCreate.controller";
import userListController from "../../controllers/users/userList.controller";
import userListOneController from "../../controllers/users/userListOne.controller";
import userLoginController from "../../controllers/users/userLogin.controller";


userRoutes.post("/users/register", userCreateController);
userRoutes.post("/users/login", userLoginController);
userRoutes.get("/users/me", authUser,userListOneController)
userRoutes.get("/users", userListController);

export default userRoutes;


