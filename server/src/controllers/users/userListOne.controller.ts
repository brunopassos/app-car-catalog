import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import userListOneService from "../../services/users/userListOne..service";
import { instanceToInstance } from "class-transformer";

const userListOneController = async (req: Request, res: Response) => {
  try {
    const email = req.userEmail;

    const user = await userListOneService(email);

    return res.status(200).send(instanceToInstance(user));
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default userListOneController;
