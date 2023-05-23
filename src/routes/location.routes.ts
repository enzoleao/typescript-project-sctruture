import { Router } from 'express';
import { GetLocationController } from '../modules/Location/useCase/getLocations/getLocation.controller';



const locationRouter = Router();

const getLocationController = new GetLocationController()

locationRouter.get('/', 
getLocationController.handle);
locationRouter.post('/',)
locationRouter.put('/:memoryId', )
locationRouter.delete('/:memoryId',  )

export default locationRouter;