import { AppDataSource } from "../../data-source";
import { Vehicle } from "../../entities/vehicle.entity";

const vehicleDeleteSelfService = async (id: string) => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);

  const vehicles = await vehicleRepository.find();

  const vehicle = vehicles.find((v) => v.id === id);

  await vehicleRepository.delete(vehicle!.id);

  return true;
};

export default vehicleDeleteSelfService;
