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
exports.AuthenticateUserController = void 0;
const authenticateUser_usecase_1 = require("./authenticateUser.usecase");
const User_repository_1 = require("../../repositories/implementations/User.repository");
class AuthenticateUserController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const authenticateUserUseCase = new authenticateUser_usecase_1.AuthenticateUserUseCase(new User_repository_1.UserRepository);
            const { email, password } = req.body;
            const response = yield authenticateUserUseCase.execute({ password, email });
            return res.json(response);
        });
    }
}
exports.AuthenticateUserController = AuthenticateUserController;
