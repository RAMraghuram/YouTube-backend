import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    // upload file to cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // file has been uploaded
    // console.log("File uploaded to cloudinary", response.url);
    fs.unlickSync(localFilePath);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove file from local storage if cloudinary upload fails
    return null;
  }
};

export { uploadCloudinary };
