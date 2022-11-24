import { Request, Response } from "express";
import userCreateService from "../../services/users/userCreate.service";
import { AppError, handleError } from "../../errors/appError";
import { instanceToPlain } from "class-transformer";

const userCreateController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const newUser = await userCreateService({ email, password });
    return res.status(201).json({
      message: "User created with success",
      user: instanceToPlain(newUser),
    });
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res)
    }
  }
};

export default userCreateController;
