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
exports.CreateMemoryController = void 0;
const createMemory_usecase_1 = require("./createMemory.usecase");
const Memory_repository_1 = require("../../repositories/implementations/Memory.repository");
const MemoryMedia_repository_1 = require("../../repositories/implementations/MemoryMedia.repository");
const getIdFromToken_1 = require("../../../../service/getIdFromToken");
const createMemoryMedia_usecase_1 = require("../createMemoryMedia/createMemoryMedia.usecase");
const addPeopleInMemory_usecase_1 = require("../addPeoplesInMemory/addPeopleInMemory.usecase");
const AddPeopleInMemory_repository_1 = require("../../repositories/implementations/AddPeopleInMemory.repository");
const createLocation_usecase_1 = require("../../../Location/useCase/createLocation/createLocation.usecase");
const Location_repository_1 = require("../../../Location/repositories/implementations/Location.repository");
class CreateMemoryController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const createNewMemory = new createMemory_usecase_1.CreateMemoryUseCase(new Memory_repository_1.MemoryRepository, new createMemoryMedia_usecase_1.CreateMemoryMediaUseCase(new MemoryMedia_repository_1.CreateMemoryMedia), new addPeopleInMemory_usecase_1.AddPeopleInMemoryUseCase(new AddPeopleInMemory_repository_1.AddPeopleInMemoryRepository), new createLocation_usecase_1.CreateLocationUseCase(new Location_repository_1.LocationRepository));
            const { name, usersInMemory, location } = req.body;
            const { authorization } = req.headers;
            const authorId = yield (0, getIdFromToken_1.getIdFromToken)(authorization);
            const response = yield createNewMemory.execute({
                authorId,
                name,
                usersInMemory,
                location
            });
            return res.json(response);
        });
    }
}
exports.CreateMemoryController = CreateMemoryController;
