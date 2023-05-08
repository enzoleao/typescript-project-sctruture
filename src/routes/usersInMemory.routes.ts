import { Router } from 'express';
import { addPeopleInMemoryController } from '../modules/Memory/useCase/addPeoplesInMemory/addPeopleInMemory.controller';
import { RemovePeopleInMemoryController } from '../modules/Memory/useCase/removePeopleInMemory/removePeopleInMemory.controller';


const usersInMemory = Router();

const addPeopleInMemory = new addPeopleInMemoryController()
const removePeopleInMemory = new RemovePeopleInMemoryController()

usersInMemory.post('/', addPeopleInMemory.handle)
usersInMemory.delete('/:memoryId/:userId', removePeopleInMemory.handle )

export default usersInMemory;