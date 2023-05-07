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
exports.UserRepository = void 0;
const prisma_1 = require("../../../../prisma");
class UserRepository {
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const userResponse = yield prisma_1.prisma.user.findUniqueOrThrow({
                where: {
                    id: id
                },
                include: {
                    memories: true
                }
            });
            return {
                id: userResponse.id,
                avatar: `${process.env.PROTOCOL}://${process.env.HOST}/${userResponse.avatar}`,
                name: userResponse.name,
                email: userResponse.email,
                birthday: userResponse.birthday
            };
        });
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield prisma_1.prisma.user.create({
                data: {
                    email: user.email,
                    name: user.name,
                    password: user.password,
                    birthday: user.birthday,
                }
            });
            return {
                id: response.id,
                name: response.name,
                email: response.email,
                birthday: response.birthday
            };
        });
    }
    updateAvatar(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield prisma_1.prisma.user.update({
                where: {
                    id: user.id
                },
                data: {
                    name: user.name,
                    avatar: user.avatar,
                }
            });
            return {
                id: response.id,
                name: response.name,
                avatar: `${process.env.PROTOCOL}://${process.env.HOST}/${response.avatar}`,
            };
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield prisma_1.prisma.user.findUnique({
                where: {
                    email
                }
            });
            return response;
        });
    }
    createUserAvatar({ avatar, userId }) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented.");
        });
    }
    updateUserAvatar({ avatar, userId }) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield prisma_1.prisma.user.update({
                where: {
                    id: userId
                },
                data: {
                    avatar: avatar
                }
            });
            return {
                id: response.id,
                avatar: `${process.env.PROTOCOL}://${process.env.HOST}/${response.avatar}`,
            };
        });
    }
}
exports.UserRepository = UserRepository;
