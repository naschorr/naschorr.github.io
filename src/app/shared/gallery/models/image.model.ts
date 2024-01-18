export class Image {
    private _url: URL;
    private _thumbnailUrl: URL;
    private _description: string[] | null;
    private _altText: string | null;

    // Lifecycle

    constructor(url: URL, thumbnailUrl: URL, description?: string[], altText?: string) {
        this._url = url;
        this._thumbnailUrl = thumbnailUrl;
        this._description = description ?? null;
        this._altText = altText ?? null;
    }

    // Getters

    get url(): URL {
        return this._url;
    }

    get thumbnailUrl(): URL {
        return this._thumbnailUrl;
    }

    get description(): string[] | null {
        return this._description;
    }

    get altText(): string | null {
        return this._altText;
    }
}