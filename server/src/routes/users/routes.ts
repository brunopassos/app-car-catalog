import { Router } from "express";
import { authUser } from "../../middlewares/authUser.middleware";

const routes = Router();

import userCreateController from "../../controllers/users/userCreate.controller";
import userListController from "../../controllers/users/userList.controller";
import userListOneController from "../../controllers/users/userListOne.controller";
import userLoginController from "../../controllers/users/userLogin.controller";


routes.post("/users/register", userCreateController);
routes.post("/users/login", userLoginController);
routes.get("/users/me", authUser,userListOneController)
routes.get("/users", userListController);

export default routes;
