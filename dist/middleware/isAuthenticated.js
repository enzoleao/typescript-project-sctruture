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
exports.isAuthenticated = void 0;
const AppError_1 = require("../err/AppError");
const jsonwebtoken_1 = require("jsonwebtoken");
const isAuthenticated = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        throw new AppError_1.AppError("Token missing!!", 401);
    }
    const [, token] = authHeader.split(" ");
    try {
        const { sub: employee_id } = (0, jsonwebtoken_1.verify)(token, process.env.SECRETJWT);
        next();
    }
    catch (_a) {
        throw new AppError_1.AppError("Invalid Token", 401);
    }
});
exports.isAuthenticated = isAuthenticated;
