const imageIterator = require('./image-iterator.js');
const fs = require('node:fs');
const sharp = require('sharp');


/**
 * Clean EXIF metadata from an image file
 * @param {string} filePath The path to the image file
 */
async function cleanExifMetadata(filePath) {
    try {
        // Check if the image has any metadata
        const metadata = await sharp(filePath).metadata();
        const hasMetadata = metadata.exif || metadata.iptc || metadata.xmp;
        if (!hasMetadata) {
            // Skip if there's no metadata to clean
            console.log(`Skipped cleaning EXIF from '${filePath}' (no metadata found)`);
            return;
        } else {
            console.log(`Metadata found in '${filePath}', EXIF: ${metadata.exif}, ICC: ${metadata.icc}, IPTC: ${metadata.iptc}, XMP: ${metadata.xmp}`);
        }

        // Read the image, rotate() strips metadata by default, then save it back.
        const imageBuffer = await sharp(filePath)
            .rotate()
            .toBuffer();

        // Overwrite the original file with the cleaned version
        fs.writeFileSync(filePath, imageBuffer);
        console.log(`Cleaned EXIF from '${filePath}'`);
    } catch (error) {
        console.error(`Failed to clean EXIF from '${filePath}':`, error.message);
    }
}

// Main execution
async function main() {
    const promises = [];

    imageIterator.forEachImage((filePath) => {
        promises.push(cleanExifMetadata(filePath));
    });

    await Promise.all(promises);
}

main().catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
});
