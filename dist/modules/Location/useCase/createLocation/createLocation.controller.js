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
exports.CreateLocationController = void 0;
const createLocation_usecase_1 = require("./createLocation.usecase");
const Location_repository_1 = require("../../repositories/implementations/Location.repository");
class CreateLocationController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const createLocationUseCase = new createLocation_usecase_1.CreateLocationUseCase(new Location_repository_1.LocationRepository);
            const { location, memoryId } = req.body;
            const response = yield createLocationUseCase.execute({ location, memoryId });
            return res.json(response);
        });
    }
}
exports.CreateLocationController = CreateLocationController;
