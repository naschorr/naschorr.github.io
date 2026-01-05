export class PropertyFilter {
    private _category: string;
    private _name: string;
    private _count: number;

    constructor(category: string, name: string, count: number) {
        this._category = category;
        this._name = name;
        this._count = count;
    }

    get key(): string {
        return `${this._category}/${this._name}`;
    }

    get category(): string {
        return this._category;
    }

    get name(): string {
        return this._name;
    }

    get count(): number {
        return this._count;
    }

    set count(value: number) {
        this._count = value;
    }

    public incrementCount(): void {
        this._count += 1;
    }
}