// Fabrique les icônes PNG à partir d'un dessin SVG. À lancer avec : NODE_PATH=$(npm root -g) node tools/icones.cjs
// (demande le module « sharp », installé sur la machine de construction, pas dans l'appli).
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PAPIER = '#fbfaf4', LIGNE = '#c9d3f0', FINE = '#e3e8f7', MARGE = '#e06a65', ENCRE = '#1f3f9a';

function dessin({ plein = false } = {}) {
  // plein = icône « maskable » : le motif reste dans le cercle central, le papier va jusqu'aux bords.
  const fines = [];
  for (let y = 8; y < 512; y += 24) fines.push(`<path d="M0 ${y}H512" stroke="${FINE}" stroke-width="2"/>`);
  const fortes = [56, 152, 248, 344, 440].map((y) => `<path d="M0 ${y}H512" stroke="${LIGNE}" stroke-width="4"/>`);
  const vert = [224, 320, 416, 512].map((x) => `<path d="M${x} 0V512" stroke="${LIGNE}" stroke-width="4"/>`);
  const r = plein ? 34 : 40;
  const cx = plein ? [196, 284, 372] : [186, 290, 394];
  const cy = plein ? 300 : 296;
  const mx = plein ? 128 : 112;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" fill="${PAPIER}"/>
  ${fines.join('')}${fortes.join('')}${vert.join('')}
  <path d="M${mx} 0V512" stroke="${MARGE}" stroke-width="9"/>
  ${cx.map((x) => `<circle cx="${x}" cy="${cy}" r="${r}" fill="${ENCRE}"/>`).join('')}
</svg>`;
}

const dir = path.join(__dirname, '..', 'icons');
fs.mkdirSync(dir, { recursive: true });

const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="${PAPIER}"/><path d="M0 44H64M0 20H64" stroke="${LIGNE}" stroke-width="1.5"/><path d="M13 0V64" stroke="${MARGE}" stroke-width="2.5"/><circle cx="24" cy="36" r="5.5" fill="${ENCRE}"/><circle cx="38" cy="36" r="5.5" fill="${ENCRE}"/><circle cx="52" cy="36" r="5.5" fill="${ENCRE}"/></svg>\n`;
fs.writeFileSync(path.join(dir, 'favicon.svg'), favicon);

(async () => {
  const normal = Buffer.from(dessin());
  const plein = Buffer.from(dessin({ plein: true }));
  await sharp(normal).resize(512, 512).png({ compressionLevel: 9 }).toFile(path.join(dir, 'icon-512.png'));
  await sharp(normal).resize(192, 192).png({ compressionLevel: 9 }).toFile(path.join(dir, 'icon-192.png'));
  await sharp(normal).resize(180, 180).png({ compressionLevel: 9 }).toFile(path.join(dir, 'apple-touch-icon.png'));
  await sharp(plein).resize(512, 512).png({ compressionLevel: 9 }).toFile(path.join(dir, 'icon-maskable-512.png'));
  console.log('icônes écrites dans', dir);
})();
