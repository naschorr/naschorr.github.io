const fs = require('node:fs');
const path = require('node:path');
const sharp = require('sharp');

// Config
const IMAGES_DIRECTORY_PATH = 'src/assets/images';
const EXCLUDE_DIRECTORY_PATHS = [
    'src/assets/images/icons',
    'src/assets/images/logos'
].map((excludePath) => path.normalize(excludePath));
const IMAGE_FILE_EXTENSIONS = [
    'jpg',
    'jpeg',
    'png',
];
const THUMBNAIL_HEIGHT = 150;

// Helpers
function isFilePathExcluded(filePath) {
    return (
        EXCLUDE_DIRECTORY_PATHS.some(
            (excludePath) => filePath.startsWith(excludePath)
        ) ||
        !IMAGE_FILE_EXTENSIONS.some(
            (extension) => filePath.endsWith(extension)
        ) ||
        isFileAlreadyThumbnail(filePath)
    );
}

function isFileAlreadyThumbnail(filePath) {
    const name = path.basename(filePath);
    const split = name.split('.');

    // Thumnails have a format of <filename>.thumbnail.<extension>
    return split[split.length - 2] === ('thumbnail');
}

function buildThumbnailFilePath(filePath) {
    const name = path.basename(filePath);
    const split = name.split('.');

    split.splice(split.length - 1, 0, 'thumbnail');

    return path.join(path.dirname(filePath), split.join('.'));
}

// Discover files/Filter out non-images/Generate the thumbnails
fs.readdirSync(IMAGES_DIRECTORY_PATH, { recursive: true })
    .map((file) => path.normalize(path.join(IMAGES_DIRECTORY_PATH, file)))
    .filter((filePath) => !isFilePathExcluded(filePath))
    .forEach((filePath) => {
        const thumbnailFilePath = buildThumbnailFilePath(filePath);

        if (fs.existsSync(thumbnailFilePath)) {
            console.log(`Removing existing thumbnail for '${thumbnailFilePath}'`);
            fs.rmSync(thumbnailFilePath);
        }

        sharp(filePath)
            .resize(null, THUMBNAIL_HEIGHT)
            .toFile(thumbnailFilePath)
            .then(() => console.log(`Generated thumbnail for '${filePath}' as '${thumbnailFilePath}' with height=${THUMBNAIL_HEIGHT}`))
            .catch((error) => console.error(error));
    });
