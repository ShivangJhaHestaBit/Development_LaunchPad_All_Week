import fs from "fs";
import path from "path";
import dotenv from "dotenv";
const root = process.cwd();
export  default function loadEnv() {
  const APP_ENV = process.env.APP_ENV || "dev";
  const envFiles = [
    ".env.local",
    APP_ENV === "prod" ? ".env.prod" : ".env.dev",
  ];
  envFiles.forEach((filename) => {
    const filePath = path.join(root, filename);
    if (fs.existsSync(filePath)) {
      dotenv.config({ path: filePath ,quiet: true});
    //   console.log(`Loaded: ${filename}`);
    }
  });
}
