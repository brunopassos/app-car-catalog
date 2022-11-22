import { AppDataSource } from "./../../data-source";
import { IUserCreate, IUser } from "../../interfaces/users";
import { User } from "../../entities/user.entity";

const userCreateService = async ({ email, password }: IUserCreate) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const emailAlreadyExists = users.find((user) => user.email === email);

  if (emailAlreadyExists) {
    throw new Error("Email já existe.");
  }

  const user = new User();
  user.email = email;
  user.password = password;

  userRepository.create(user);
  await userRepository.save(user);

  return user;
};

export default userCreateService;
