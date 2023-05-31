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
exports.CreateMemoryMediaController = void 0;
const createMemoryMedia_usecase_1 = require("./createMemoryMedia.usecase");
const MemoryMedia_repository_1 = require("../../repositories/implementations/MemoryMedia.repository");
class CreateMemoryMediaController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const createeMemoryMedia = new createMemoryMedia_usecase_1.CreateMemoryMediaUseCase(new MemoryMedia_repository_1.CreateMemoryMedia);
            const medias = req.files;
            const { memoryId } = req.params;
            const response = yield createeMemoryMedia.execute({ memoryId, medias });
            return res.json(response);
        });
    }
}
exports.CreateMemoryMediaController = CreateMemoryMediaController;
