import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import userListOneService from "../../services/users/userListOne..service";

const userListOneController = async (req: Request, res: Response) => {
  try {
    const email = req.userEmail;

    const user = await userListOneService(email);

    return res.status(200).send(user);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default userListOneController;
