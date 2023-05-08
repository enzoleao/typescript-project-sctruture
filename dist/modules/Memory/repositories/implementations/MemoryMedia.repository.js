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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMemoryMedia = void 0;
const prisma_1 = require("../../../../prisma");
const fs_1 = __importDefault(require("fs"));
class CreateMemoryMedia {
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdRecord = yield prisma_1.prisma.medias.createMany({
                data: data.medias.map((i) => {
                    return {
                        memoryId: data.memoryId,
                        src: i.filename,
                    };
                })
            });
            return {
                imagesUploadeds: createdRecord.count,
                message: "Imagens subidas com sucesso"
            };
        });
    }
    delete({ memoryId }) {
        return __awaiter(this, void 0, void 0, function* () {
            const memoriesName = yield prisma_1.prisma.medias.findUnique({
                where: {
                    id: memoryId
                }
            });
            fs_1.default.unlink(`./public/${memoriesName === null || memoriesName === void 0 ? void 0 : memoriesName.src}`, (err) => { });
            const deletedRecords = yield prisma_1.prisma.medias.deleteMany({
                where: {
                    id: memoryId
                }
            });
            return {
                medias: memoryId,
                message: "Imagem deletada com sucesso"
            };
        });
    }
}
exports.CreateMemoryMedia = CreateMemoryMedia;
