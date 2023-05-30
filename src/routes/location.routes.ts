import { Router } from 'express';
import { GetLocationController } from '../modules/Location/useCase/getLocations/getLocation.controller';
import { CreateLocationController } from '../modules/Location/useCase/createLocation/createLocation.controller';



const locationRouter = Router();

const getLocationController = new GetLocationController()
const createLocationController = new CreateLocationController()
locationRouter.get('/', getLocationController.handle);
locationRouter.post('/', createLocationController.handle)
locationRouter.put('/:memoryId', )
locationRouter.delete('/:memoryId',  )

export default locationRouter;