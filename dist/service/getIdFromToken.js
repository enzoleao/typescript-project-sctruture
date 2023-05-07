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
exports.getIdFromToken = void 0;
const AppError_1 = require("../err/AppError");
const getIdFromToken = (authorization) => __awaiter(void 0, void 0, void 0, function* () {
    const token = authorization === null || authorization === void 0 ? void 0 : authorization.split(' ')[1];
    if (!token) {
        throw new AppError_1.AppError("Token missing.");
    }
    const base64Token = token.split('.')[1];
    const payload = Buffer.from(String(base64Token), 'base64').toString();
    const id = JSON.parse(payload).sub;
    return id;
});
exports.getIdFromToken = getIdFromToken;
