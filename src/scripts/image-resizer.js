const thumbnailHelpers = require('./thumbnail-helpers.js');
const imageIterator = require('./image-iterator.js');
const fs = require('node:fs');
const sharp = require('sharp');

// Config
const MAX_HEIGHT_PX = 1200;


// Extract metadata from the images and perform the resize if necessary
imageIterator.forEachImage((filePath) => {
    const imageFilePath = thumbnailHelpers.normalizeFilePath(filePath);

    sharp(imageFilePath)
        .metadata()
        .then((metadata) => {
            if (metadata.height > MAX_HEIGHT_PX) {
                sharp(imageFilePath)
                    .resize(null, MAX_HEIGHT_PX)
                    // Write to a buffer, otherwise Sharp will throw an error when trying to overwrite the image
                    .toBuffer((error, buffer) => {
                        fs.writeFile(imageFilePath, buffer, () => {
                            console.log(`Resized '${imageFilePath}' to have a height of ${MAX_HEIGHT_PX}px`);
                        })
                    });
            }
        });
});
