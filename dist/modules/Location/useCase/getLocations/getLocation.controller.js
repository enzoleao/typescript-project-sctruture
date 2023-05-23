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
exports.GetLocationController = void 0;
const getLocation_usecase_1 = require("./getLocation.usecase");
const Location_repository_1 = require("../../repositories/implementations/Location.repository");
class GetLocationController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const getLocationUseCase = new getLocation_usecase_1.GetLocationUseCase(new Location_repository_1.LocationRepository);
            const { location } = req.query;
            const response = yield getLocationUseCase.execute(location);
            return res.json(response);
        });
    }
}
exports.GetLocationController = GetLocationController;
