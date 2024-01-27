const thumbnailHelpers = require('./thumbnail-helpers.js');
const imageIterator = require('./image-iterator.js');
const fs = require('node:fs');
const path = require('node:path');
const sharp = require('sharp');

// Config
const OUTPUT_FORMAT = 'avif';


// Convert all images to AVIF
imageIterator.forEachImage((filePath) => {
    // Skip if the file is already an AVIF
    const extension = path.extname(filePath);
    if (extension === `.${OUTPUT_FORMAT}`) {
        return;
    }

    // Build the .avif filepath of the existing image (and the thumbnail for the original image)
    const avifFilePath = filePath.replace(extension, `.${OUTPUT_FORMAT}`);
    const thumbnailFilePath = thumbnailHelpers.buildThumbnailFilePath(filePath);

    // Perform the conversion
    sharp(filePath)
        .toFormat(OUTPUT_FORMAT)
        .toFile(avifFilePath)
        .then(() => {
            console.log(`Converted '${filePath}' to '${avifFilePath}'`);

            // Delete the original image (and thumbnail if it exists)
            fs.rmSync(filePath);
            if (fs.existsSync(thumbnailFilePath)) {
                fs.rmSync(thumbnailFilePath);
            }
        })
        .catch((error) => console.error(error));
});
