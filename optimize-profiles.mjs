import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function optimizeProfiles() {
  const publicDir = join(__dirname, 'public', 'images', 'profiles');

  try {
    // Create profiles directory if it doesn't exist
    await sharp(join(__dirname, 'public/images/KakaoTalk_Photo_2025-10-29-10-49-33 001.jpeg'))
      .resize(800, 800, { fit: 'cover', position: 'center' })
      .webp({ quality: 85 })
      .toFile(join(__dirname, 'public/images/profiles/groom.webp'));

    console.log('✅ Groom profile optimized: groom.webp');

    await sharp(join(__dirname, 'public/images/KakaoTalk_Photo_2025-10-29-10-49-34 002.jpeg'))
      .resize(800, 800, { fit: 'cover', position: 'center' })
      .webp({ quality: 85 })
      .toFile(join(__dirname, 'public/images/profiles/bride.webp'));

    console.log('✅ Bride profile optimized: bride.webp');

  } catch (error) {
    console.error('Error optimizing profiles:', error);
  }
}

optimizeProfiles();
