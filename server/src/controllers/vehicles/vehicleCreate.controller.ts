import { Request, Response } from "express";
import { User } from "../../entities/user.entity";
import { AppError, handleError } from "../../errors/appError";
import vehicleCreateService from "../../services/vehicles/vehicleCreate.service";
import { instanceToInstance } from "class-transformer";

const vehicleCreateController = async (req: Request, res: Response) => {
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

    const user = req.user;

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
      imageLink
    }, user);

    return res.status(201).send(instanceToInstance(vehicle));
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};


export default vehicleCreateController;