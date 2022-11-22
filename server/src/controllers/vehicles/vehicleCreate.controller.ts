import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import vehicleCreateService from "../../services/vehicles/vehicleCreate.service";

const vehicleCreateController = async (req: Request, res: Response) => {
  try {
    console.log("controller")
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

    const vehicle = await vehicleCreateService({
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
    });

    return res.status(201).send(vehicle);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};


export default vehicleCreateController;