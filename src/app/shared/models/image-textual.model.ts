import { Image } from './image.model';

export class ImageTextual extends Image {
    private _description: string[];
    private _altText: string;

    // Lifecycle

    constructor(
            image: Image,
            description: string[],
            altText: string
    ) {
        super(
            image.fullResUrl,
            image.fullResWidthPx,
            image.fullResHeightPx,
            image.thumbnailUrl,
            image.thumbnailWidthPx,
            image.thumbnailHeightPx
        );
        this._description = description;
        this._altText = altText;
    }

    // Getters

    get description(): string[] {
        return this._description;
    }

    get altText(): string {
        return this._altText;
    }
}
