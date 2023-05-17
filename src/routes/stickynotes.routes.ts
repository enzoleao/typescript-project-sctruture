import { Router } from 'express';
import { GetAllStickyNotesController } from '../modules/StickyNotes/useCase/getAllStickyNotes/getAllStickyNotes.controller';
import { CreateStickyNotesController } from '../modules/StickyNotes/useCase/createStickyNotes/createStickyNotes.controller';
import { DeleteStickyNotesController } from '../modules/StickyNotes/useCase/deleteStickyNotes/deleteStickyNotes.controller';
import { UpdateStickyNotesController } from '../modules/StickyNotes/useCase/updateStickyNotes/updateStickyNotes.controller';


const stickyNotesRouter = Router();
const getAllStickyNotesController = new GetAllStickyNotesController()
const createStickyNotesContrller = new CreateStickyNotesController()
const deleteStickyNotesController = new DeleteStickyNotesController()
const updateStickyNotesController = new UpdateStickyNotesController()

stickyNotesRouter.get('/', getAllStickyNotesController.handle);
stickyNotesRouter.post('/', createStickyNotesContrller.handle);
stickyNotesRouter.put('/:stickyNotesId', updateStickyNotesController.handle);
stickyNotesRouter.delete('/:stickyNotesId', deleteStickyNotesController.handle);


export default stickyNotesRouter;