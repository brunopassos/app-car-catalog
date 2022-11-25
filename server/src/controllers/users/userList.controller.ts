import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import userListService from "../../services/users/userList.service";

const userListController = async (req: Request, res: Response) => {
  try {
    const users = await userListService();
    return res.send(users).status(200);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default userListController;
