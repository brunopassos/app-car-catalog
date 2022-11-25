import 'reflect-metadata';
import express, { NextFunction, Request, Response } from "express";
import { AppError } from "./errors/appError";
import userRoutes from "./routes/users/users.routes";
import vehicleRoutes from "./routes/vehicles/vehicles.routes";

const app = express();

app.use(express.json());

app.use(userRoutes);
app.use(vehicleRoutes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

app.listen(3000);
