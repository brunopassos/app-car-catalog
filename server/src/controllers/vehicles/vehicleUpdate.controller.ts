import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import vehicleUpdateService from "../../services/vehicles/vehicleUpdate.service";

const vehicleUpdateController = async (req: Request, res: Response) => {
  try {
    const {
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
    } = req.body;
    const { id } = req.params;

    const vehicle = await vehicleUpdateService(
      { name, brand, model, year, km, color, city, state, value, imageLink },
      id
    );

    return res.status(200).send(vehicle);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default vehicleUpdateController;
