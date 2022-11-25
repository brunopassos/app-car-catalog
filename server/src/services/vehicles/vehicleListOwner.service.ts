import { AppDataSource } from "../../data-source";
import { Vehicle } from "../../entities/vehicle.entity";
import { User } from "../../entities/user.entity";

const vehicleListOwnerService = async (user: User) => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);  

  const vehicles = await vehicleRepository.find();
  
  const ownerVehicles = vehicles.filter((vehicle) => (vehicle.user.id) === user.id);

  return ownerVehicles;
};

export default vehicleListOwnerService;
