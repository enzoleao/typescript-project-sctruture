import { Router } from 'express';
import { GetAllStickyNotesController } from '../modules/StickyNotes/useCase/getAllStickyNotes/getAllStickyNotes.controller';
import { CreateStickyNotesController } from '../modules/StickyNotes/useCase/createStickyNotes/createStickyNotes.controller';


const stickyNotesRouter = Router();
const getAllStickyNotesController = new GetAllStickyNotesController()
const createStickyNotesContrller = new CreateStickyNotesController()
stickyNotesRouter.get('/', getAllStickyNotesController.handle);
stickyNotesRouter.post('/', createStickyNotesContrller.handle);
stickyNotesRouter.put('/:stickyNotesId');
stickyNotesRouter.delete('/:stickyNotesId');


export default stickyNotesRouter;