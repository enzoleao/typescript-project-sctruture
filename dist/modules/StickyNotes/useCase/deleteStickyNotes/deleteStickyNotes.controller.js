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
exports.DeleteStickyNotesController = void 0;
const deleteStickyNotes_usecase_1 = require("./deleteStickyNotes.usecase");
const StickyNotes_repository_1 = require("../../repositories/implementations/StickyNotes.repository");
class DeleteStickyNotesController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteStickyNotesUseCase = new deleteStickyNotes_usecase_1.DeleteStickyNotesUseCase(new StickyNotes_repository_1.StickyNotesRespository);
            const { stickyNotesId } = req.params;
            const response = yield deleteStickyNotesUseCase.execute(stickyNotesId);
            return res.json(response);
        });
    }
}
exports.DeleteStickyNotesController = DeleteStickyNotesController;
