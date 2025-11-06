const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '..', 'public', 'images');

// Ensure directory exists
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Generate SVG placeholder
function generateSVG(width, height, text, color) {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">
  <rect width="100%" height="100%" fill="${color}"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="white">
    ${text}
  </text>
  <circle cx="${width/2}" cy="${height/2 + 80}" r="40" fill="white" opacity="0.3"/>
  <circle cx="${width/2 - 60}" cy="${height/2 - 60}" r="25" fill="white" opacity="0.2"/>
  <circle cx="${width/2 + 70}" cy="${height/2 - 50}" r="30" fill="white" opacity="0.2"/>
</svg>`;
}

const placeholders = [
  // Hero images
  { name: 'hero-1.jpg', text: 'Hero 1', color: '#0f766e' },
  { name: 'hero-2.jpg', text: 'Hero 2', color: '#14b8a6' },
  { name: 'hero-3.jpg', text: 'Hero 3', color: '#0d9488' },
  
  // About images
  { name: 'about-1.jpg', text: 'About 1', color: '#0f766e' },
  { name: 'about-2.jpg', text: 'About 2', color: '#14b8a6' },
  { name: 'about-3.jpg', text: 'About 3', color: '#0d9488' },
  
  // Service images
  { name: 'service-1.jpg', text: 'Home Cleaning', color: '#0f766e' },
  { name: 'service-2.jpg', text: 'Office Cleaning', color: '#14b8a6' },
  { name: 'service-3.jpg', text: 'Deep Cleaning', color: '#0d9488' },
  { name: 'service-4.jpg', text: 'Window Cleaning', color: '#0f766e' },
  { name: 'service-5.jpg', text: 'Garden Cleaning', color: '#14b8a6' },
  { name: 'service-6.jpg', text: 'Upholstery', color: '#0d9488' },
  { name: 'service-7.jpg', text: 'Move-Out', color: '#0f766e' },
  { name: 'service-8.jpg', text: 'Sanitization', color: '#14b8a6' },
  
  // Avatar images
  { name: 'avatar-1.jpg', text: 'SJ', color: '#F59E0B' },
  { name: 'avatar-2.jpg', text: 'MC', color: '#F59E0B' },
  { name: 'avatar-3.jpg', text: 'ER', color: '#F59E0B' },
  { name: 'avatar-4.jpg', text: 'DT', color: '#F59E0B' },
];

console.log('Generating placeholder images...');

placeholders.forEach(({ name, text, color }) => {
  const svg = generateSVG(800, 600, text, color);
  const filePath = path.join(imagesDir, name);
  fs.writeFileSync(filePath, svg);
  console.log(`✓ Created ${name}`);
});

console.log(`\nGenerated ${placeholders.length} placeholder images in ${imagesDir}`);
console.log('\nNote: These are SVG placeholders. Replace them with actual images for production.');
console.log('Use the AI image generation prompt from README.md to create professional images.');
