import { AppDataSource } from "../../data-source";
import { IVehicleCreate } from "../../interfaces/vehicles";
import { Vehicle } from "../../entities/vehicle.entity";
import { User } from "../../entities/user.entity";

const vehicleCreateService = async (
  {
    name,
    brand,
    model,
    year,
    km,
    color,
    city,
    state,
    value,
    imageLink,
  }: IVehicleCreate,
  user: User
): Promise<Vehicle> => {
  const userRepository = AppDataSource.getRepository(User);
  const vehicleRepository = AppDataSource.getRepository(Vehicle);


  const vehicle = vehicleRepository.create({
    name,
    brand,
    model,
    year,
    km,
    color,
    city,
    state,
    value,
    imageLink,
    user: user!,
  });

  await vehicleRepository.save(vehicle);

  return vehicle;
};

export default vehicleCreateService;
