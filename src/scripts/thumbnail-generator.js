const thumbnailHelpers = require('./thumbnail-helpers.js');
const imageIterator = require('./image-iterator.js');
const fs = require('node:fs');
const sharp = require('sharp');

// Config
const THUMBNAIL_HEIGHT_PX = 150;


// Perform the thumbnail generation
imageIterator.forEachImage((filePath) => {
    const thumbnailFilePath = thumbnailHelpers.buildThumbnailFilePath(filePath);

    if (fs.existsSync(thumbnailFilePath)) {
        console.log(`Removing existing thumbnail for '${thumbnailFilePath}'`);
        fs.rmSync(thumbnailFilePath);
    }

    sharp(filePath)
        .resize(null, THUMBNAIL_HEIGHT_PX)
        .toFile(thumbnailFilePath)
        .then(() => console.log(`Generated thumbnail for '${filePath}' as '${thumbnailFilePath}' with height=${THUMBNAIL_HEIGHT_PX}`))
        .catch((error) => console.error(error));
});
