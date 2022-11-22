import { Request, Response } from "express";
import userCreateService from "../../services/users/userCreate.service";

const userCreateController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const newUser = await userCreateService({ email, password });
    return res.status(201).send(newUser);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).send({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default userCreateController;
