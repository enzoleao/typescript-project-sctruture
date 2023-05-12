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
exports.UpdateReflectionsController = void 0;
const updateReflections_usecase_1 = require("./updateReflections.usecase");
const Reflections_repository_1 = require("../../repositories/implementations/Reflections.repository");
class UpdateReflectionsController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateReflection = new updateReflections_usecase_1.UpdateReflectionsUseCase(new Reflections_repository_1.ReflectionsRepository);
            const { reflectionId } = req.params;
            const { content } = req.body;
            const response = yield updateReflection.execute({ reflectionId, content });
            return res.json(response);
        });
    }
}
exports.UpdateReflectionsController = UpdateReflectionsController;
