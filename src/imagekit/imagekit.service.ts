import { Injectable } from '@nestjs/common';
import ImageKit = require('imagekit');

@Injectable()
export default class ImageKitService {
  private imageKit: any;

  constructor() {
    this.imageKit = new ImageKit({
      publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
      urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
    });
  }

  // Add methods for different ImageKit operations here
  // For example, image upload, transformation, etc.

  upload(file: Express.Multer.File): Promise<string> {
    return new Promise((resolve, reject) => {
      const uploadOptions = {
        file: file.buffer, // Use the file buffer
        fileName: file.originalname,
      };

      this.imageKit.upload(uploadOptions, (error: any, result: any) => {
        if (error) {
          reject(error);
        } else {
          resolve(result.url);
        }
      });
    });
  }
}
