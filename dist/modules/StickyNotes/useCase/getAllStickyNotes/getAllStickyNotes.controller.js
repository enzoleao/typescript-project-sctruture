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
exports.GetAllStickyNotesController = void 0;
const getAllStickyNotes_usecase_1 = require("./getAllStickyNotes.usecase");
const StickyNotes_repository_1 = require("../../repositories/implementations/StickyNotes.repository");
class GetAllStickyNotesController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const createStickyNotes = new getAllStickyNotes_usecase_1.GetAllStickyNotesUseCase(new StickyNotes_repository_1.StickyNotesRespository);
            return res.json(createStickyNotes);
        });
    }
}
exports.GetAllStickyNotesController = GetAllStickyNotesController;
