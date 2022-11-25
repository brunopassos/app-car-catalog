import { AppDataSource } from "./../../data-source";
import { IUserCreateLogin } from "../../interfaces/users";
import { User } from "../../entities/user.entity";
import bcrypt from "bcrypt";
import { AppError } from "../../errors/appError";

const userCreateService = async ({ email, password }: IUserCreateLogin) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const emailAlreadyExists = users.find((user) => user.email === email);

  if (emailAlreadyExists) {
    throw new AppError(409, "Email já existe.");
  }

  const user = new User();
  user.email = email;
  user.password = bcrypt.hashSync(password, 10);

  userRepository.create(user);
  await userRepository.save(user);

  return user;
};

export default userCreateService;
