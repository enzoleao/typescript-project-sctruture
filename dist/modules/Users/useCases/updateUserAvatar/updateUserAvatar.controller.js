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
exports.UpdateUserAvatarController = void 0;
const AppError_1 = require("../../../../err/AppError");
const User_repository_1 = require("../../repositories/implementations/User.repository");
const updateUserAvatar_usecase_1 = require("./updateUserAvatar.usecase");
class UpdateUserAvatarController {
    handle(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const updateUserAvatar = new updateUserAvatar_usecase_1.UpdateUserAvatarUseCase(new User_repository_1.UserRepository);
            const avatar = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
            const { userId } = req.params;
            console.log(userId);
            if (!avatar) {
                throw new AppError_1.AppError("Image not receveid", 404);
            }
            const response = yield updateUserAvatar.execute({
                userId, avatar
            });
            return res.json(response);
        });
    }
}
exports.UpdateUserAvatarController = UpdateUserAvatarController;
