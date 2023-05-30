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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationRepository = void 0;
const AppError_1 = require("../../../../err/AppError");
const axios_1 = __importDefault(require("axios"));
const prisma_1 = require("../../../../prisma");
class LocationRepository {
    create({ location, memoryId }) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(memoryId);
            const response = yield prisma_1.prisma.location.create({
                data: {
                    memoryId: memoryId,
                    city: location.city,
                    state: location.state
                }
            });
            return response;
        });
    }
    findList(location) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.get(`https://nominatim.openstreetmap.org/search?q=${location}&format=json&addressdetails=1`);
                const locations = response.data.map((data) => {
                    const city = data.address.city || data.address.town || data.address.village || '';
                    const state = data.address.state || '';
                    const country = data.address.country || '';
                    return { city, state, country };
                });
                return locations;
            }
            catch (error) {
                throw new AppError_1.AppError("Erro ao processar a solicitação.");
            }
        });
    }
}
exports.LocationRepository = LocationRepository;
