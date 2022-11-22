import { AppDataSource } from "../../data-source";
import { IVehicleCreate } from "../../interfaces/vehicles";
import { Vehicle } from "../../entities/vehicle.entity";

const vehicleCreateService = async ({
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
}: IVehicleCreate) => {

    const vehicleRepository = AppDataSource.getRepository(Vehicle);

    const vehicle = new Vehicle();

    vehicle.name = name;
    vehicle.brand = brand;
    vehicle.model = model;
    vehicle.year = year;
    vehicle.km = km;
    vehicle.color = color;
    vehicle.city = city;
    vehicle.state = state;
    vehicle.value = value;
    vehicle.imageLink = imageLink;

    vehicleRepository.create(vehicle);
    await vehicleRepository.save(vehicle);

    return vehicle;
};


export default vehicleCreateService;