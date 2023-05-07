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
exports.AuthenticateUserUseCase = void 0;
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const AppError_1 = require("../../../../err/AppError");
class AuthenticateUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    execute({ email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findByEmail(email);
            if (!user) {
                throw new AppError_1.AppError("Email or password incorret!", 401);
            }
            const passwordMatch = yield (0, bcrypt_1.compare)(password, user.password);
            if (!passwordMatch) {
                throw new AppError_1.AppError("Email or password incorrect!", 401);
            }
            const token = (0, jsonwebtoken_1.sign)({}, process.env.SECRETJWT, {
                subject: String(user.id),
                expiresIn: "1d"
            });
            const authReturn = {
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    avatar: `${process.env.PROTOCOL}://${process.env.HOST}/${user.avatar}`,
                    birthday: user.birthday
                },
                token
            };
            return authReturn;
        });
    }
}
exports.AuthenticateUserUseCase = AuthenticateUserUseCase;
