const thumbnailHelpers = require('./thumbnail-helpers.js');
const fs = require('node:fs');
const path = require('node:path');

// Config
const IMAGES_DIRECTORY_PATH = 'assets/images';
const EXCLUDE_DIRECTORY_PATHS = [
    'assets/images/icons',
    'assets/images/logos'
].map((excludePath) => path.normalize(excludePath));
const IMAGE_FILE_EXTENSIONS = [
    'jpg',
    'jpeg',
    'png',
];


/**
 * Callback for performing an action on an image filepath
 * @callback imageFilePathCallback
 * @param {string} filePath The filepath of the image
 */

/**
 * Iterate over all valid image filepaths in the images directory
 * @param {imageFilePathCallback} callback The callback to execute for each image filepath
 */
function forEachImage(callback) {
    fs.readdirSync(IMAGES_DIRECTORY_PATH, { recursive: true })
        .map((file) => path.normalize(path.join(IMAGES_DIRECTORY_PATH, file)))
        .filter((filePath) => !thumbnailHelpers.isFilePathExcluded(
            filePath, EXCLUDE_DIRECTORY_PATHS, IMAGE_FILE_EXTENSIONS
        ))
        .forEach(callback);
}

module.exports = {
    forEachImage
}