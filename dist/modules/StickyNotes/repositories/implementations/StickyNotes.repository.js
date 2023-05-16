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
exports.StickyNotesRespository = void 0;
const prisma_1 = require("../../../../prisma");
class StickyNotesRespository {
    findAll(authorId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield prisma_1.prisma.stickyNotes.findMany({
                where: {
                    authorId
                }
            });
            return response;
        });
    }
    create({ authorId, content, date }) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield prisma_1.prisma.stickyNotes.create({
                data: {
                    authorId,
                    content,
                    date
                }
            });
            return response;
        });
    }
    update({ content, stickyNotesId, date }) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented.");
        });
    }
    delete(stickyNotesId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield prisma_1.prisma.stickyNotes.delete({
                where: {
                    id: stickyNotesId
                }
            });
            return response;
        });
    }
}
exports.StickyNotesRespository = StickyNotesRespository;
