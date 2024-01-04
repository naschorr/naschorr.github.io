export class Project {
    private _name: string;
    private _url: URL;
    private _description: string[];
    private _funFacts: string[] | null;
    private _images: URL[] | null;
    private _technologies: string[] | null;

    // Lifecycle

    constructor(
            name: string,
            url: URL,
            description: string[],
            funFacts?: string[],
            images?: URL[],
            technologies?: string[]
    ) {
        this._name = name;
        this._url = url;
        this._description = description;
        this._funFacts = funFacts ?? null;
        this._images = images ?? null;
        this._technologies = technologies ?? null;
    }

    // Getters

    get name(): string {
        return this._name;
    }

    get url(): URL {
        return this._url;
    }

    get description(): string[] {
        return this._description;
    }

    get funFacts(): string[] | null {
        return this._funFacts;
    }

    get images(): URL[] | null {
        return this._images;
    }

    get technologies(): string[] | null {
        return this._technologies;
    }
}