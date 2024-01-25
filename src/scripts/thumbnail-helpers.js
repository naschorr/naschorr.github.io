const path = require('node:path');

/**
 * Checks if a given filepath should be excluded from thumbnail generation.
 * @param {string} filePath The filepath to check
 * @param {string[]} excludePaths The array of paths to exclude
 * @param {string[]} imagefileExtensions The array of valid image file extensions
 * @returns {boolean}
 */
function isFilePathExcluded(filePath, excludePaths, imagefileExtensions) {
    return (
        excludePaths.some(
            (excludePath) => filePath.startsWith(excludePath)
        ) ||
        !imagefileExtensions.some(
            (extension) => filePath.endsWith(extension)
        ) ||
        isFileAlreadyThumbnail(filePath)
    );
}

/**
 * Is the provided filepath already a thumbnail?
 * @param {string} filePath 
 * @returns {boolean}
 */
function isFileAlreadyThumbnail(filePath) {
    const name = path.basename(filePath);
    const split = name.split('.');

    // Thumnails have a format of <filename>.thumbnail.<extension>
    return split[split.length - 2] === ('thumbnail');
}

/**
 * Builds a filepath for the thumbnail version of the provided filepath.
 * @param {string} filePath 
 * @returns {string}
 */
function buildThumbnailFilePath(filePath) {
    const name = path.basename(filePath);
    const split = name.split('.');

    split.splice(split.length - 1, 0, 'thumbnail');

    return path.join(path.dirname(filePath), split.join('.'));
}


module.exports = {
    isFilePathExcluded,
    isFileAlreadyThumbnail,
    buildThumbnailFilePath
};
