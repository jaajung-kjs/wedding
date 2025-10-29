import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sourceDir = '/Users/jsk/Downloads/img';
const targetDir = join(__dirname, 'public', 'images', 'gallery');

// Mapping of source files to target numbered files
// NEW ORDER: 13-30 moved to 1-18, 1-12 moved to 19-30
const fileMapping = [
  // 1-18: Photos from old 13-30 (13-13-53 to 13-13-59 series)
  { source: 'KakaoTalk_Photo_2025-10-29-13-13-53 001.jpeg', target: '1.jpg' },
  { source: 'KakaoTalk_Photo_2025-10-29-13-13-53 002.jpeg', target: '2.jpg' },
  { source: 'KakaoTalk_Photo_2025-10-29-13-13-54 003.jpeg', target: '3.jpg' },
  { source: 'KakaoTalk_Photo_2025-10-29-13-13-55 004.jpeg', target: '4.jpg' },
  { source: 'KakaoTalk_Photo_2025-10-29-13-13-55 005.jpeg', target: '5.jpg' },
  { source: 'KakaoTalk_Photo_2025-10-29-13-13-55 006.jpeg', target: '6.jpg' },
  { source: 'KakaoTalk_Photo_2025-10-29-13-13-56 007.jpeg', target: '7.jpg' },
  { source: 'KakaoTalk_Photo_2025-10-29-13-13-56 008.jpeg', target: '8.jpg' },
  { source: 'KakaoTalk_Photo_2025-10-29-13-13-56 009.jpeg', target: '9.jpg' },
  { source: 'KakaoTalk_Photo_2025-10-29-13-13-56 010.jpeg', target: '10.jpg' },
  { source: 'KakaoTalk_Photo_2025-10-29-13-13-56 011.jpeg', target: '11.jpg' },
  { source: 'KakaoTalk_Photo_2025-10-29-13-13-56 012.jpeg', target: '12.jpg' },
  { source: 'KakaoTalk_Photo_2025-10-29-13-13-56 013.jpeg', target: '13.jpg' },
  { source: 'KakaoTalk_Photo_2025-10-29-13-13-56 014.jpeg', target: '14.jpg' },
  { source: 'KakaoTalk_Photo_2025-10-29-13-13-56 015.jpeg', target: '15.jpg' },
  { source: 'KakaoTalk_Photo_2025-10-29-13-13-58 016.jpeg', target: '16.jpg' },
  { source: 'KakaoTalk_Photo_2025-10-29-13-13-59 017.jpeg', target: '17.jpg' },
  { source: 'KakaoTalk_Photo_2025-10-29-13-13-59 018.jpeg', target: '18.jpg' },
  // 19-30: Photos from old 1-12 (13-13-39 series)
  { source: 'KakaoTalk_Photo_2025-10-29-13-13-39 001.jpeg', target: '19.jpg' },
  { source: 'KakaoTalk_Photo_2025-10-29-13-13-39 002.jpeg', target: '20.jpg' },
  { source: 'KakaoTalk_Photo_2025-10-29-13-13-39 003.jpeg', target: '21.jpg' },
  { source: 'KakaoTalk_Photo_2025-10-29-13-13-39 004.jpeg', target: '22.jpg' },
  { source: 'KakaoTalk_Photo_2025-10-29-13-13-39 005.jpeg', target: '23.jpg' },
  { source: 'KakaoTalk_Photo_2025-10-29-13-13-39 006.jpeg', target: '24.jpg' },
  { source: 'KakaoTalk_Photo_2025-10-29-13-13-39 007.jpeg', target: '25.jpg' },
  { source: 'KakaoTalk_Photo_2025-10-29-13-13-39 008.jpeg', target: '26.jpg' },
  { source: 'KakaoTalk_Photo_2025-10-29-13-13-39 009.jpeg', target: '27.jpg' },
  { source: 'KakaoTalk_Photo_2025-10-29-13-13-39 010.jpeg', target: '28.jpg' },
  { source: 'KakaoTalk_Photo_2025-10-29-13-13-39 011.jpeg', target: '29.jpg' },
  { source: 'KakaoTalk_Photo_2025-10-29-13-13-39 012.jpeg', target: '30.jpg' },
  // 31-32: Unchanged
  { source: '모청31.jpg', target: '31.jpg' },
  { source: '모청32.jpg', target: '32.jpg' },
];

async function optimizeImages() {
  // Create target directory if it doesn't exist
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  let processedCount = 0;
  let totalSize = 0;
  let optimizedSize = 0;

  console.log('🖼️  Starting gallery image optimization...\n');

  for (const { source, target } of fileMapping) {
    const sourcePath = join(sourceDir, source);
    const targetPath = join(targetDir, target);

    try {
      // Get original file size
      const stats = fs.statSync(sourcePath);
      totalSize += stats.size;

      // Optimize image
      await sharp(sourcePath)
        .resize(800, null, {
          fit: 'inside',
          withoutEnlargement: true,
        })
        .jpeg({ quality: 85, progressive: true })
        .toFile(targetPath);

      // Get optimized file size
      const optimizedStats = fs.statSync(targetPath);
      optimizedSize += optimizedStats.size;

      const reduction = ((1 - optimizedStats.size / stats.size) * 100).toFixed(1);

      console.log(`✅ ${target.padEnd(8)} ${(stats.size / 1024 / 1024).toFixed(2)}MB → ${(optimizedStats.size / 1024).toFixed(0)}KB (${reduction}% reduction)`);

      processedCount++;
    } catch (error) {
      console.error(`❌ Error processing ${source}:`, error.message);
    }
  }

  const totalReduction = ((1 - optimizedSize / totalSize) * 100).toFixed(1);

  console.log('\n📊 Summary:');
  console.log(`   Processed: ${processedCount}/${fileMapping.length} images`);
  console.log(`   Original size: ${(totalSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`   Optimized size: ${(optimizedSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`   Total reduction: ${totalReduction}%`);
  console.log(`\n✨ Gallery images optimized successfully!`);
}

optimizeImages().catch(console.error);
