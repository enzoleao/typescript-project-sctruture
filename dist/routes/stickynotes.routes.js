"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const stickyNotesRouter = (0, express_1.Router)();
stickyNotesRouter.get('/');
stickyNotesRouter.post('/');
stickyNotesRouter.put('/:stickyNotesId');
stickyNotesRouter.delete('/:stickyNotesId');
exports.default = stickyNotesRouter;
