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
exports.FindAllMemoriesController = void 0;
const findAllMemories_usecase_1 = require("./findAllMemories.usecase");
const Memory_repository_1 = require("../../repositories/implementations/Memory.repository");
class FindAllMemoriesController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const memoryRepository = new findAllMemories_usecase_1.FindAllMemoriesUseCase(new Memory_repository_1.MemoryRepository);
            const response = yield memoryRepository.execute();
            return res.json(response);
        });
    }
}
exports.FindAllMemoriesController = FindAllMemoriesController;
