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
exports.ReflectionsRepository = void 0;
const prisma_1 = require("../../../../prisma");
class ReflectionsRepository {
    create({ memoryId, content }) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield prisma_1.prisma.reflections.create({
                data: {
                    content: content,
                    memoryId: memoryId
                }
            });
            return response;
        });
    }
    update({ reflectionId, content }) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield prisma_1.prisma.reflections.update({
                where: {
                    id: reflectionId
                },
                data: {
                    content
                }
            });
            return response;
        });
    }
    delete({ reflectionId }) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield prisma_1.prisma.reflections.delete({
                where: {
                    id: reflectionId
                }
            });
            return response;
        });
    }
}
exports.ReflectionsRepository = ReflectionsRepository;
