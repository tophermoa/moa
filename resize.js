import sharp from "sharp";
import fs from "fs";
import path from "path";

const input = "./src/assets/original";
const output = "./src/assets";

const sizes = [
  { name: "thumb", width: 400 },
  { name: "medium", width: 1200 },
  { name: "full", width: 1800 },
];

sizes.forEach(({ name, width }) => {
  const dir = path.join(output, name);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  fs.readdirSync(input).forEach(async (file) => {
    await sharp(path.join(input, file))
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 90 })
      .toFile(path.join(dir, file.replace(/\.\w+$/, ".webp")));
  });
});
