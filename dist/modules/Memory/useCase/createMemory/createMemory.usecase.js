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
exports.CreateMemoryUseCase = void 0;
class CreateMemoryUseCase {
    constructor(memoryRepository, createMemoryMediaUseCase, addPeopleInMemoryUseCase, createMemoryLocationUseCase) {
        this.memoryRepository = memoryRepository;
        this.createMemoryMediaUseCase = createMemoryMediaUseCase;
        this.addPeopleInMemoryUseCase = addPeopleInMemoryUseCase;
        this.createMemoryLocationUseCase = createMemoryLocationUseCase;
    }
    execute({ authorId, name, medias, usersInMemory, location }) {
        return __awaiter(this, void 0, void 0, function* () {
            const createNewMemory = yield this.memoryRepository.create({
                authorId,
                name,
            });
            if (medias) {
                yield this.createMemoryMediaUseCase.execute({
                    memory_id: createNewMemory.id,
                    medias
                });
            }
            if (usersInMemory) {
                yield this.addPeopleInMemoryUseCase.execute({
                    memoryId: createNewMemory.id,
                    usersInMemory
                });
            }
            if (location) {
                yield this.createMemoryLocationUseCase.execute({
                    memoryId: createNewMemory.id,
                    location: location
                });
            }
            return createNewMemory;
        });
    }
}
exports.CreateMemoryUseCase = CreateMemoryUseCase;
