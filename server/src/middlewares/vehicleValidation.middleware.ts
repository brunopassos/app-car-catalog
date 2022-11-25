import { Request, Response, NextFunction } from "express";
import vehicleSchema from "../schemas/vehicles/vehicle.schema";

const vehicleValidationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;
    const validatedData = await vehicleSchema.validate(data);
    req.body = validatedData;
    next();
  } catch (error: any) {
    return res.status(400).json({
        error: error.errors?.join(", ")
    })
  }
};

export default vehicleValidationMiddleware;
