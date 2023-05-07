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
exports.GetCurrentUserController = void 0;
const AppError_1 = require("../../../../err/AppError");
const User_repository_1 = require("../../repositories/implementations/User.repository");
const getCurrentUser_usecase_1 = require("./getCurrentUser.usecase");
const getIdFromToken_1 = require("../../../../service/getIdFromToken");
class GetCurrentUserController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const getCurrentUserUseCase = new getCurrentUser_usecase_1.GetCurrentUseCase(new User_repository_1.UserRepository);
            const { authorization } = req.headers;
            if (!authorization) {
                throw new AppError_1.AppError("Token missingg");
            }
            const userId = yield (0, getIdFromToken_1.getIdFromToken)(authorization);
            const userResponse = yield getCurrentUserUseCase.execute(userId);
            return res.json(userResponse);
        });
    }
}
exports.GetCurrentUserController = GetCurrentUserController;
