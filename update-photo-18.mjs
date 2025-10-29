import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sourceFile = '/Users/jsk/Downloads/KakaoTalk_Photo_2025-10-29-13-25-37.jpeg';
const targetFile = join(__dirname, 'public', 'images', 'gallery', '18.jpg');

async function updatePhoto() {
  try {
    // Get original file size
    const stats = fs.statSync(sourceFile);
    console.log(`📷 Original file: ${(stats.size / 1024 / 1024).toFixed(2)}MB`);

    // Optimize image
    await sharp(sourceFile)
      .resize(800, null, {
        fit: 'inside',
        withoutEnlargement: true,
      })
      .jpeg({ quality: 85, progressive: true })
      .toFile(targetFile);

    // Get optimized file size
    const optimizedStats = fs.statSync(targetFile);
    const reduction = ((1 - optimizedStats.size / stats.size) * 100).toFixed(1);

    console.log(`✅ Optimized to: ${(optimizedStats.size / 1024).toFixed(0)}KB`);
    console.log(`📊 Size reduction: ${reduction}%`);
    console.log(`\n✨ Photo 18 updated successfully!`);
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

updatePhoto();
