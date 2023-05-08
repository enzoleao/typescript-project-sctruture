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
exports.AddPeopleInMemoryRepository = void 0;
const prisma_1 = require("../../../../prisma");
class AddPeopleInMemoryRepository {
    create({ userId, memoryId }) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield prisma_1.prisma.usersInMemories.createMany({
                data: userId.map((i) => {
                    return {
                        memoryId: memoryId,
                        userId: i,
                    };
                })
            });
            return {
                id: memoryId,
                usersAddInMemory: response.count,
            };
        });
    }
    delete({ userId, memoryId }) {
        return __awaiter(this, void 0, void 0, function* () {
            const uniqueMemory = userId.length <= 1 ? userId.split("") : userId;
            const idsUsersNumber = uniqueMemory.map(Number);
            console.log(idsUsersNumber);
            const response = yield prisma_1.prisma.usersInMemories.deleteMany({
                where: {
                    userId: {
                        in: idsUsersNumber
                    },
                    memoryId: memoryId
                }
            });
            return {
                usersRemovedSucess: response.count
            };
        });
    }
}
exports.AddPeopleInMemoryRepository = AddPeopleInMemoryRepository;
