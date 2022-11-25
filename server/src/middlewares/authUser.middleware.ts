import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

export const authUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization;
    const userRepository = AppDataSource.getRepository(User);
    jwt.verify(
      token as string,
      process.env.JWT_SECRET as string,
      async (err: any, decoded: any) => {
        req.userEmail = decoded.email;
        const user = await userRepository.findOneBy({
          email: decoded.email,
        });
        req.user = user!;
        next();
      }
    );
  } catch (error) {
    return res.status(401).json({ message: "Token inválido." });
  }
};
