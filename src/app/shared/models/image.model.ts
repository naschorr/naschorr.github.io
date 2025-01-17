export class Image {
    private _fullResUrl: URL;
    private _fullResWidthPx: number;
    private _fullResHeightPx: number;
    private _fullResLoaded: boolean;
    private _thumbnailUrl: URL;
    private _thumbnailWidthPx: number;
    private _thumbnailHeightPx: number;
    private _thumbnailLoaded: boolean

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
        this._fullResLoaded = false;
        this._thumbnailUrl = thumbnailUrl;
        this._thumbnailWidthPx = thumbnailWidthPx;
        this._thumbnailHeightPx = thumbnailHeightPx;
        this._thumbnailLoaded = false;
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

    get fullResLoaded(): boolean {
        return this._fullResLoaded;
    }
    set fullResLoaded(value: boolean) {
        this._fullResLoaded = value;
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

    get thumbnailLoaded(): boolean {
        return this._thumbnailLoaded;
    }
    set thumbnailLoaded(value: boolean) {
        this._thumbnailLoaded = value;
    }

    get aspectRatio(): number {
        return this._fullResWidthPx / this._fullResHeightPx;
    }
}
