import { Router } from 'express';


const stickyNotesRouter = Router();

stickyNotesRouter.get('/');
stickyNotesRouter.post('/');
stickyNotesRouter.put('/:stickyNotesId');
stickyNotesRouter.delete('/:stickyNotesId');


export default stickyNotesRouter;