export class Image {
    private _fullResUrl: URL;
    private _fullResWidthPx: number;
    private _fullResHeightPx: number;
    private _thumbnailUrl: URL;
    private _thumbnailWidthPx: number;
    private _thumbnailHeightPx: number;

    // Lifecycle

    constructor(
            fullResUrl: URL,
            fullResWidthPx: number,
            fullResHeightPx: number,
            thumbnailUrl: URL,
            thumbnailWidthPx: number,
            thumbnailHeightPx: number
    ) {
        this._fullResUrl = fullResUrl;
        this._fullResWidthPx = fullResWidthPx;
        this._fullResHeightPx = fullResHeightPx;
        this._thumbnailUrl = thumbnailUrl;
        this._thumbnailWidthPx = thumbnailWidthPx;
        this._thumbnailHeightPx = thumbnailHeightPx;
    }

    // Getters

    get fullResUrl(): URL {
        return this._fullResUrl;
    }

    get fullResWidthPx(): number {
        return this._fullResWidthPx;
    }

    get fullResHeightPx(): number {
        return this._fullResHeightPx;
    }

    get thumbnailUrl(): URL {
        return this._thumbnailUrl;
    }

    get thumbnailWidthPx(): number {
        return this._thumbnailWidthPx;
    }

    get thumbnailHeightPx(): number {
        return this._thumbnailHeightPx;
    }

    get aspectRatio(): number {
        return this._fullResWidthPx / this._fullResHeightPx;
    }
}