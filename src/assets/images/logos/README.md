# SVG Logo Files
SVG files are generated via exporting the relevant selections from the "src\resources\logos\avatar.svg" file via Inkscape, then minified using [svgomg](https://jakearchibald.github.io/svgomg/).

For example, minifying "src\assets\images\logos\svg\avatar-inverted.svg" was able to take a 1.46k file down to 251b! Note that the resuling SVG element likely isn't actually ready for inlining, but this output is usually in a really good spot for inlining.
