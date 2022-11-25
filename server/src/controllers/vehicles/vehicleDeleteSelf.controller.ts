import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import vehicleDeleteSelfService from "../../services/vehicles/vehicleDeleteSelf.service";

const vehicleDeleteSelfController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const vehicle = await vehicleDeleteSelfService(id);
    return res.status(200).json({message: "Veículo deletado com sucesso!"});
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};


export default vehicleDeleteSelfController;