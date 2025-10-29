import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sourceFile = '/Users/jsk/Downloads/KakaoTalk_Photo_2025-10-29-13-25-37.jpeg';
const targetFile = join(__dirname, 'public', 'images', 'og-image.jpg');

async function optimizeOGImage() {
  try {
    const stats = fs.statSync(sourceFile);
    console.log(`📷 Original: ${(stats.size / 1024 / 1024).toFixed(2)}MB`);

    // Optimize for Open Graph (1200x630)
    await sharp(sourceFile)
      .resize(1200, 630, {
        fit: 'cover',
        position: 'center',
      })
      .jpeg({ quality: 90, progressive: true })
      .toFile(targetFile);

    const optimizedStats = fs.statSync(targetFile);
    const reduction = ((1 - optimizedStats.size / stats.size) * 100).toFixed(1);

    console.log(`✅ Optimized: ${(optimizedStats.size / 1024).toFixed(0)}KB (1200x630)`);
    console.log(`📊 Reduction: ${reduction}%`);
    console.log(`✨ OG image ready for KakaoTalk!`);
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

optimizeOGImage();
