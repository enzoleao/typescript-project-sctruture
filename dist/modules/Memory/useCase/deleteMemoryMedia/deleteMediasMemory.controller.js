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
exports.DeleteMemoryMediaController = void 0;
const deleteMediasMemory_usecase_1 = require("./deleteMediasMemory.usecase");
const MemoryMedia_repository_1 = require("../../repositories/implementations/MemoryMedia.repository");
class DeleteMemoryMediaController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteMemoryMedia = new deleteMediasMemory_usecase_1.DeleteMemoryMediaUseCase(new MemoryMedia_repository_1.CreateMemoryMedia);
            const { memoryId } = req.params;
            const response = yield deleteMemoryMedia.execute({ memoryId });
            return res.json(response);
        });
    }
}
exports.DeleteMemoryMediaController = DeleteMemoryMediaController;
