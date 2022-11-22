import { Router } from "express";
import vehicleCreateController from "../../controllers/vehicles/vehicleCreate.controller";
import vehicleDeleteSelfController from "../../controllers/vehicles/vehicleDeleteSelf.controller";
import vehicleListController from "../../controllers/vehicles/vehicleList.controller";
import vehicleUpdateController from "../../controllers/vehicles/vehicleUpdate.controller";
import vehicleValidationMiddleware from "../../middlewares/vehicleValidation.middleware";

const vehicleRoutes = Router();

vehicleRoutes.post("/vehicles", vehicleValidationMiddleware, vehicleCreateController);
vehicleRoutes.get("/vehicles", vehicleListController);
vehicleRoutes.delete("/vehicles/:id", vehicleDeleteSelfController);
vehicleRoutes.patch("/vehicles/:id", vehicleValidationMiddleware, vehicleUpdateController);

export default vehicleRoutes;
