import { ImageTextual } from '../../../shared/models/image-textual.model';
import { ProjectFlavor } from './project-flavor.enum';

export class Project {
    private _id: string;
    private _flavor: ProjectFlavor;
    private _name: string;
    private _description: string[];
    private _url: URL | null;
    private _funFacts: string[] | null;
    private _images: ImageTextual[] | null;
    private _technologies: string[];

    // Lifecycle

    constructor(
            id: string,
            flavor: ProjectFlavor,
            name: string,
            description: string[],
            url?: URL | null,
            funFacts?: string[] | null,
            images?: ImageTextual[] | null,
            technologies?: string[] | null
    ) {
        this._id = id;
        this._flavor = flavor;
        this._name = name;
        this._description = description;
        this._url = url ?? null;
        this._funFacts = funFacts ?? null;
        this._images = images ?? null;
        this._technologies = technologies ?? [];
    }

    // Getters

    get id(): string {
        return this._id;
    }

    get flavor(): ProjectFlavor {
        return this._flavor;
    }

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

    get images(): ImageTextual[] | null {
        return this._images;
    }

    get technologies(): string[] {
        return this._technologies;
    }
}