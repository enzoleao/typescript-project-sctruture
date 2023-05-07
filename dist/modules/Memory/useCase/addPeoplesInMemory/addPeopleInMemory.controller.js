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
exports.addPeopleInMemoryController = void 0;
const addPeopleInMemory_usecase_1 = require("./addPeopleInMemory.usecase");
const AddPeopleInMemory_repository_1 = require("../../repositories/implementations/AddPeopleInMemory.repository");
class addPeopleInMemoryController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const addPeopleInMemory = new addPeopleInMemory_usecase_1.AddPeopleInMemoryUseCase(new AddPeopleInMemory_repository_1.AddPeopleInMemoryRepository);
            const { memoryId, userId } = req.body;
            const response = yield addPeopleInMemory.execute({ memoryId, userId });
            return res.json(response);
        });
    }
}
exports.addPeopleInMemoryController = addPeopleInMemoryController;
