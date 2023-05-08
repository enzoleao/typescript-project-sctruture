"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_routes_1 = __importDefault(require("./users.routes"));
const memory_routes_1 = __importDefault(require("./memory.routes"));
const medias_routes_1 = __importDefault(require("./medias.routes"));
const authenticate_routes_1 = __importDefault(require("./authenticate.routes"));
const usersInMemory_routes_1 = __importDefault(require("./usersInMemory.routes"));
const express_1 = require("express");
const isAuthenticated_1 = require("../middleware/isAuthenticated");
const routes = (0, express_1.Router)();
routes.use('/users', users_routes_1.default);
routes.use('/memories', isAuthenticated_1.isAuthenticated, memory_routes_1.default);
routes.use('/medias', medias_routes_1.default);
routes.use('/usersInMemory', usersInMemory_routes_1.default);
routes.use(authenticate_routes_1.default);
exports.default = routes;
