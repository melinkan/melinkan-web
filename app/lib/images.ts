import fs from "fs";
import path from "path";

export interface ImageData {
  src: string;
  alt: string;
  date?: string;
  location?: string;
}

export function getImagesFromDirectory(directory: string): ImageData[] {
  const directoryPath = path.join(process.cwd(), "public", directory);

  try {
    const files = fs.readdirSync(directoryPath);

    const imageFiles = files.filter((file) => {
      const extension = path.extname(file).toLowerCase();
      return (
        [".jpg", ".jpeg", ".png", ".webp", ".gif"].includes(extension) &&
        !file.startsWith(".")
      );
    });

    return imageFiles.map((file) => {
      const fileName = path.basename(file, path.extname(file));

      return {
        src: `/${directory}/${file}`,
        alt: `${fileName} - Melin Kan`,
        date: "",
        location: "",
      };
    });
  } catch (error) {
    console.error("Error reading directory:", error);
    return [];
  }
}
