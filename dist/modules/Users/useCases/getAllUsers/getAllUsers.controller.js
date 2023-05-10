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
exports.GetAllUsersController = void 0;
const getAllUsers_usecase_1 = require("./getAllUsers.usecase");
const User_repository_1 = require("../../repositories/implementations/User.repository");
class GetAllUsersController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const getAllUsersUseCase = new getAllUsers_usecase_1.GetAllUsersUseCase(new User_repository_1.UserRepository);
            const allUsers = yield getAllUsersUseCase.execute();
            return res.json(allUsers);
        });
    }
}
exports.GetAllUsersController = GetAllUsersController;
