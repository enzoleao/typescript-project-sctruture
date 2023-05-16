"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStickyNotesController = void 0;
const createStickyNotes_usecase_1 = require("./createStickyNotes.usecase");
const StickyNotes_repository_1 = require("../../repositories/implementations/StickyNotes.repository");
const getIdFromToken_1 = require("../../../../service/getIdFromToken");
class CreateStickyNotesController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const createStickyNotesUseCase = new createStickyNotes_usecase_1.CreateStickyNotesUseCase(new StickyNotes_repository_1.StickyNotesRespository);
            const { content, date } = req.body;
            const authorId = yield (0, getIdFromToken_1.getIdFromToken)(req.headers.authorization);
            const response = yield createStickyNotesUseCase.execute({ authorId, content, date });
            return res.json(response);
        });
    }
}
exports.CreateStickyNotesController = CreateStickyNotesController;
