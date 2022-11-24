import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import vehicleListService from "../../services/vehicles/vehicleList.service";
import { instanceToPlain } from "class-transformer";

const vehicleListController = async (req: Request, res: Response) => {
  try {
    const vehicles = await vehicleListService();
    return res.send(instanceToPlain(vehicles)).status(200);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default vehicleListController;
