const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const uploadedPath = '/Users/gulshanyadav/.gemini/antigravity-ide/brain/6cd5bcfa-a0d9-4610-b94e-92a993f4bdb4/.user_uploaded/media_1791811773324.png';
const publicDir = path.join(__dirname, '..', 'public');
const blogImgDir = path.join(publicDir, 'images', 'blog');
const imagesDir = path.join(publicDir, 'images');

async function processPhoto() {
  if (!fs.existsSync(uploadedPath)) {
    console.error('Uploaded photo not found at:', uploadedPath);
    process.exit(1);
  }

  console.log('Processing user photo from:', uploadedPath);

  // 1. Full resolution WebP of the original photo
  const fullWebp = await sharp(uploadedPath)
    .webp({ quality: 92 })
    .toBuffer();

  const fullJpg = await sharp(uploadedPath)
    .jpeg({ quality: 92 })
    .toBuffer();

  // Save full version as harshita-dagha-studio-interview
  fs.writeFileSync(path.join(blogImgDir, 'harshita-dagha-studio-interview.webp'), fullWebp);
  fs.writeFileSync(path.join(blogImgDir, 'harshita-dagha-studio-interview.jpg'), fullJpg);
  fs.writeFileSync(path.join(imagesDir, 'harshita-dagha-studio-interview.webp'), fullWebp);
  fs.writeFileSync(path.join(publicDir, 'harshita-dagha-studio-interview.webp'), fullWebp);

  // Also save as profile section image
  fs.writeFileSync(path.join(blogImgDir, 'harshita-dagha-tedx-speaker-podcast-host.webp'), fullWebp);
  fs.writeFileSync(path.join(imagesDir, 'harshita-dagha-tedx-speaker-podcast-host.webp'), fullWebp);
  fs.writeFileSync(path.join(publicDir, 'harshita-dagha-tedx-speaker-podcast-host.webp'), fullWebp);

  // 2. 1200 x 630 Hero Cover & OG Image:
  // Create a 1200x630 canvas with blurred ambient background of the same photo + crisp foreground photo
  const blurredBg = await sharp(uploadedPath)
    .resize(1200, 630, { fit: 'cover' })
    .blur(30)
    .modulate({ brightness: 0.65 })
    .toBuffer();

  const foreground = await sharp(uploadedPath)
    .resize(null, 630, { fit: 'inside' })
    .toBuffer();

  const heroBuf = await sharp(blurredBg)
    .composite([
      { input: foreground, gravity: 'center' }
    ])
    .webp({ quality: 92 })
    .toBuffer();

  fs.writeFileSync(path.join(blogImgDir, 'top-female-podcasters-india-october-2026.webp'), heroBuf);
  fs.writeFileSync(path.join(imagesDir, 'top-female-podcasters-india-october-2026.webp'), heroBuf);
  fs.writeFileSync(path.join(publicDir, 'top-female-podcasters-india-october-2026.webp'), heroBuf);

  console.log('Successfully saved user studio photo across all required locations and formats!');
}

processPhoto().catch(console.error);
