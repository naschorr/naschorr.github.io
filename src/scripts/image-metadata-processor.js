const thumbnailHelpers = require('./thumbnail-helpers.js');
const imageIterator = require('./image-iterator.js');
const fs = require('node:fs');
const path = require('node:path');
const sharp = require('sharp');

// Config
const IMAGES_DIRECTORY_PATH = 'src/assets/images';


function insertIntoObject(object, keys, value) {
    const key = keys.shift();

    if (keys.length === 0) {
        object[key] = value;
    } else {
        if (!object[key]) {
            object[key] = {};
        }

        insertIntoObject(object[key], keys, value);
    }
}

const imageMetadata = {};
/*
    {
        <filePath>: {
            thumbnail: {
                url: <thumbnailFilePath>,
                widthPx: <number>,
                heightPx: <number>
            },
            fullRes: {
                url: <filePath>,
                widthPx: <number>,
                heightPx: <number>
            }
        }
    }
*/

// Extract metadata from the images and their thumbnails
const promises = [];
imageIterator.forEachImage((filePath) => {
    const thumbnailFilePath = thumbnailHelpers.buildThumbnailFilePath(filePath);

    if (!fs.existsSync(thumbnailFilePath)) {
        console.error(`Thumbnail for '${filePath}' does not exist at '${thumbnailFilePath}'`);
        return;
    }

    promises.push(
        sharp(filePath)
            .metadata()
            .then((metadata) => {
                insertIntoObject(imageMetadata, [filePath, "fullRes"], {
                    url: filePath,
                    widthPx: metadata.width,
                    heightPx: metadata.height
                });
            })
    );

    promises.push(
        sharp(thumbnailFilePath)
            .metadata()
            .then((metadata) => {
                insertIntoObject(imageMetadata, [filePath, "thumbnail"], {
                    url: thumbnailFilePath,
                    widthPx: metadata.width,
                    heightPx: metadata.height
                });
            })
    );
});

// Store the metadata
Promise.all(promises).then(() => {
    const metadataFilePath = path.join(IMAGES_DIRECTORY_PATH, 'metadata.json');
    if (fs.existsSync(metadataFilePath)) {
        console.log(`Removing existing metadata file at '${metadataFilePath}'`);
        fs.rmSync(metadataFilePath);
    }

    console.log(`Writing metadata file to '${metadataFilePath}'`);
    fs.writeFileSync(metadataFilePath, JSON.stringify(imageMetadata, space=4));
});
