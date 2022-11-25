import { AppDataSource } from "../../data-source";
import { Vehicle } from "../../entities/vehicle.entity";

const vehicleListService = async () => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);

  const vehicles = await vehicleRepository.find();

  return vehicles;
};

export default vehicleListService;
