"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadAvatar = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const mime_types_1 = __importDefault(require("mime-types"));
class UploadAvatar {
    constructor() {
        this.URL = path_1.default.resolve("public");
    }
    storage() {
        return multer_1.default.diskStorage({
            destination: (req, file, cb) => {
                if (!fs_1.default.existsSync(this.URL)) {
                    fs_1.default.mkdirSync(this.URL);
                }
                cb(null, this.URL);
            },
            filename: (req, file, cb) => {
                const type = mime_types_1.default.extension(file.mimetype);
                cb(null, `${new Date().getTime()}.${type}`);
            },
        });
    }
    get getConfig() {
        return {
            storage: this.storage(),
            limits: {
                fileSize: 1 * 1024 * 1024 * 1024
            }
        };
    }
}
exports.uploadAvatar = new UploadAvatar();
