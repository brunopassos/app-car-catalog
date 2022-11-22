import { IVehicleCreate } from "./../../interfaces/vehicles/index";
import { AppDataSource } from "../../data-source";
import { Vehicle } from "../../entities/vehicle.entity";

const vehicleUpdateService = async (
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
  id: string
) => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);

  const vehicle = await vehicleRepository.findOne({ where: { id: id } });

  const vehicleToUpdate = {
    name: name ? name : vehicle?.name,
    brand: brand ? brand : vehicle?.brand,
    model: model ? model : vehicle?.model,
    year: year ? year : vehicle?.year,
    km: km ? km : vehicle?.km,
    color: color ? color : vehicle?.color,
    city: city ? city : vehicle?.city,
    state: state ? state : vehicle?.state,
    value: value ? value : vehicle?.value,
    imageLink: imageLink ? imageLink : vehicle?.imageLink,
  }


  await vehicleRepository.update(id, vehicleToUpdate);

  return vehicleToUpdate;
};


export default vehicleUpdateService;