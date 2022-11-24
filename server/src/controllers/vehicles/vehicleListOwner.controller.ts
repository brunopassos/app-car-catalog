import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import vehicleListOwnerService from "../../services/vehicles/vehicleListOwner.service";

const vehicleListOwnerController = async (req: Request, res: Response) => {
  try {
    const user = req.user;
    const vehicles = await vehicleListOwnerService(user);
    return res.status(200).json(vehicles);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default vehicleListOwnerController;