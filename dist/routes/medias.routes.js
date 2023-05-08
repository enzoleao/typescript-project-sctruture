"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const express_1 = require("express");
const avatar_1 = require("../middleware/upload/avatar");
const createMemoryMedia_controller_1 = require("../modules/Memory/useCase/createMemoryMedia/createMemoryMedia.controller");
const deleteMediasMemory_controller_1 = require("../modules/Memory/useCase/deleteMemoryMedia/deleteMediasMemory.controller");
const mediasRouter = (0, express_1.Router)();
const createMemoryMedia = new createMemoryMedia_controller_1.CreateMemoryMediaController();
const deleteMemoryMedia = new deleteMediasMemory_controller_1.DeleteMemoryMediaController();
mediasRouter.post('/', (0, multer_1.default)(avatar_1.uploadAvatar.getConfig).array("medias"), createMemoryMedia.handle);
mediasRouter.delete('/:memoryId', deleteMemoryMedia.handle);
exports.default = mediasRouter;
