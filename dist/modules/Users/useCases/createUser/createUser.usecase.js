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
exports.CreateUserUseCase = void 0;
const bcrypt_1 = require("bcrypt");
const AppError_1 = require("../../../../err/AppError");
class CreateUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    execute({ email, name, password, birthday, number, username }) {
        return __awaiter(this, void 0, void 0, function* () {
            const userAlreadyExists = yield this.userRepository.findByEmail(email);
            if (userAlreadyExists) {
                throw new AppError_1.AppError("User already exists");
            }
            const passwordHash = yield (0, bcrypt_1.hash)(password, 8);
            const createdUser = yield this.userRepository.create({
                email,
                name,
                password: passwordHash,
                birthday,
                number,
                username
            });
            return createdUser;
        });
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
