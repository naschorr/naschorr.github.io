import { PID } from "../../../../libraries/pid.ts/pid";

export class PIDContainer {
    private _name: string;
    private _proportionalGain: number;
    private _integralGain: number;
    private _derivativeGain: number;
    private _maxDataLength: number;
    private _outputTransformer?: (input: number) => number;
    private _pid: PID;
    private _data: number[];
    private _processVariable: number;

    // Lifecycle

    constructor(
            name: string,
            proportionalGain: number,
            integralGain: number,
            derivativeGain: number,
            startPoint: number,
            maxDataLength?: number,
            outputTransformer?: (input: number) => number
    ) {
        this._name = name;
        this._proportionalGain = proportionalGain;
        this._integralGain = integralGain;
        this._derivativeGain = derivativeGain;
        this._maxDataLength = maxDataLength ?? 256;
        this._outputTransformer = outputTransformer;

        this._pid = new PID(this.proportionalGain, this.integralGain, this.derivativeGain);
        this._data = [];
        this._processVariable = startPoint;
    }

    // Getters

    get name(): string {
        return this._name;
    }

    get proportionalGain(): number {
        return this._proportionalGain;
    }

    get integralGain(): number {
        return this._integralGain;
    }

    get derivativeGain(): number {
        return this._derivativeGain;
    }

    get data(): number[] {
        return this._data.slice();
    }

    // Methods

    initializeSetPoint(setPoint: number, startPoint: number) {
        this.adjustSetPoint(setPoint);
        this._storeDatum(startPoint);
    }

    adjustSetPoint(setPoint: number) {
        this._pid.adjustSetPoint(setPoint);
    }

    private _storeDatum(datum: number) {
        this._data.push(datum);
        if (this._data.length > this._maxDataLength) {
            this._data.shift();
        }
    }

    runLoop(): number {
        let output = this._pid.runLoop(this._processVariable);

        if (!!this._outputTransformer) {
            output = this._outputTransformer(output);
        }

        output += this._processVariable;
        this._storeDatum(output);
        this._processVariable = output;

        return output;
    }
}