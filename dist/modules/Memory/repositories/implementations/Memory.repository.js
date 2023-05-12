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
exports.MemoryRepository = void 0;
const prisma_1 = require("../../../../prisma");
class MemoryRepository {
    create(memory) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield prisma_1.prisma.memory.create({
                data: {
                    authorId: memory.authorId,
                    name: memory.name,
                }
            });
            return response;
        });
    }
    findList(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield prisma_1.prisma.memory.findMany({
                where: {
                    authorId: id
                },
                include: {
                    author: true,
                    memoryParticipants: true,
                    media: true,
                    location: true,
                    reflections: true,
                }
            });
            return yield Promise.all(response.map((i) => __awaiter(this, void 0, void 0, function* () {
                const response = yield prisma_1.prisma.usersInMemories.findMany({
                    where: {
                        memoryId: i.id
                    },
                    include: {
                        user: true,
                    }
                });
                return {
                    id: i.id,
                    name: i.name,
                    usersInMemory: response.map((i) => {
                        return {
                            id: i.user.id,
                            name: i.user.name,
                            avatar: `${process.env.PROTOCOL}://${process.env.HOST}/${i.user.avatar}`,
                            email: i.user.email,
                        };
                    }),
                    reflections: i.reflections.map((i) => {
                        return {
                            id: i.id,
                            content: i.content,
                            createdAt: i.createdAt
                        };
                    }),
                    media: i.media.map((i) => {
                        return {
                            id: i.id,
                            src: `${process.env.PROTOCOL}://${process.env.HOST}/${i.src}`
                        };
                    }),
                    location: i.location,
                    createdAt: i.createdAt,
                };
            })));
        });
    }
    delete({ memoryId }) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield prisma_1.prisma.memory.delete({
                where: {
                    id: memoryId
                }
            });
            return response;
        });
    }
    update({ memoryId, memoryName }) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield prisma_1.prisma.memory.update({
                where: {
                    id: memoryId
                },
                data: {
                    name: memoryName
                }
            });
            return response;
        });
    }
}
exports.MemoryRepository = MemoryRepository;
