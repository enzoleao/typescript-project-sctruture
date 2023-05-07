"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createUser_controller_1 = require("../modules/Users/useCases/createUser/createUser.controller");
const usersRouter = (0, express_1.Router)();
const createUserController = new createUser_controller_1.CreateUserController();
usersRouter.post('/', createUserController.handle);
exports.default = usersRouter;
