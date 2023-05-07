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
exports.UpdateUserAvatarUseCase = void 0;
const AppError_1 = require("../../../../err/AppError");
const fs_1 = __importDefault(require("fs"));
class UpdateUserAvatarUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    execute({ avatar, userId }) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseUser = yield this.userRepository.findById(userId);
            if (!responseUser) {
                throw new AppError_1.AppError("User not found", 404);
            }
            if (responseUser.avatar) {
                const imageResponse = responseUser.avatar.split("/");
                const imageName = imageResponse[imageResponse.length - 1];
                fs_1.default.unlink(`./public/${imageName}`, (err) => { });
            }
            const response = yield this.userRepository.updateUserAvatar({ avatar, userId });
            return response;
        });
    }
}
exports.UpdateUserAvatarUseCase = UpdateUserAvatarUseCase;
