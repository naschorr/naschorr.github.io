import { Image } from "../../../shared/gallery/models/image.model";

export class Project {
    private _name: string;
    private _description: string[];
    private _url: URL | null;
    private _funFacts: string[] | null;
    private _images: Image[] | null;
    private _technologies: string[] | null;

    // Lifecycle

    constructor(
            name: string,
            description: string[],
            url?: URL,
            funFacts?: string[],
            images?: Image[],
            technologies?: string[]
    ) {
        this._name = name;
        this._description = description;
        this._url = url ?? null;
        this._funFacts = funFacts ?? null;
        this._images = images ?? null;
        this._technologies = technologies ?? null;
    }

    // Getters

    get name(): string {
        return this._name;
    }

    get url(): URL | null {
        return this._url;
    }

    get description(): string[] {
        return this._description;
    }

    get funFacts(): string[] | null {
        return this._funFacts;
    }

    get images(): Image[] | null {
        return this._images;
    }

    get technologies(): string[] | null {
        return this._technologies;
    }
}