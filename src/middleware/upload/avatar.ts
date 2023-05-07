import multer from "multer";
import path from "path";
import fs from "fs";
import mime from "mime-types";

class UploadAvatar {
  private URL: string = path.resolve("public");

  constructor() {}

  private storage(): multer.StorageEngine {
    return multer.diskStorage({
      destination: (req, file, cb) => {
        if (!fs.existsSync(this.URL)) {
          fs.mkdirSync(this.URL);
        }
        cb(null, this.URL);
      },
      filename: (req, file, cb) => {
        const type = mime.extension(file.mimetype);
        cb(null, `${new Date().getTime()}.${type}`);
      },
    });
  }


  get getConfig(): multer.Options {
    return {
      storage: this.storage(),
      limits: {
        fileSize: 1 * 1024 * 1024 * 1024
      }
    };
  }
}

export const uploadAvatar = new UploadAvatar();
