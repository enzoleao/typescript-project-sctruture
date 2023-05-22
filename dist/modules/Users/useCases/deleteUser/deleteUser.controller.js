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
exports.DeleteUserController = void 0;
const User_repository_1 = require("../../repositories/implementations/User.repository");
const deleteUser_usecase_1 = require("./deleteUser.usecase");
class DeleteUserController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteUserUseCase = new deleteUser_usecase_1.DeleteUserUseCase(new User_repository_1.UserRepository);
            const { id } = req.params;
            const response = yield deleteUserUseCase.execute(id);
            return res.json(response);
        });
    }
}
exports.DeleteUserController = DeleteUserController;
