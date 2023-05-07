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
exports.CreateUserController = void 0;
const createUser_usecase_1 = require("./createUser.usecase");
const User_repository_1 = require("../../repositories/implementations/User.repository");
class CreateUserController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const createUserUseCase = new createUser_usecase_1.CreateUserUseCase(new User_repository_1.UserRepository);
            const { email, name, password, birthday } = req.body;
            const createEmployee = yield createUserUseCase.execute({
                email,
                name,
                password,
                birthday
            });
            return res.status(201).json(createEmployee);
        });
    }
}
exports.CreateUserController = CreateUserController;
