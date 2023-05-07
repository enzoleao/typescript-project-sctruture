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
exports.UpdateUserController = void 0;
const updateUser_usecase_1 = require("./updateUser.usecase");
const User_repository_1 = require("../../repositories/implementations/User.repository");
const getIdFromToken_1 = require("../../../../service/getIdFromToken");
class UpdateUserController {
    handle(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const updateUser = new updateUser_usecase_1.UpdateUserUseCase(new User_repository_1.UserRepository);
            const id = yield (0, getIdFromToken_1.getIdFromToken)(req.headers.authorization);
            const avatar = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
            const { name } = req.body;
            const response = yield updateUser.execute({
                id, name, avatar
            });
            return res.json(response);
        });
    }
}
exports.UpdateUserController = UpdateUserController;
