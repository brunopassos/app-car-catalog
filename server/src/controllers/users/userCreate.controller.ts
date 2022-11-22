import { Request, Response } from "express";
import userCreateService from "../../services/users/userCreate.service";
import { AppError, handleError } from "../../errors/appError";

const userCreateController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const newUser = await userCreateService({ email, password });
    return res.status(201).send(newUser);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res)
    }
  }
};

export default userCreateController;
