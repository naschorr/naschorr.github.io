export class PID {
    private _proportionalGain: number;
    private _integralGain: number;
    private _derivativeGain: number;
    private _setPoint: number;
    private _integralValue: number;
    private _previousError: number;
    private _previousTimestamp: number | null;

    // Lifecycle

    constructor(proportionalGain: number, integralGain: number, derivativeGain: number) {
        this._proportionalGain = proportionalGain;
        this._integralGain = integralGain;
        this._derivativeGain = derivativeGain;
        this._setPoint = 0;
        this._integralValue = 0;
        this._previousError = 0;
        this._previousTimestamp = null;
    }

    // Public Getters

    get proportionalGain(): number {
        return this._proportionalGain;
    }

    get integralGain(): number {
        return this._integralGain;
    }

    get derivativeGain(): number {
        return this._derivativeGain;
    }

    // Methods

    private _proportional(error: number): number {
        return this.proportionalGain * error;
    }

    private _integral(error: number, dt: number): number {
        this._integralValue = this._integralValue + error * dt;
        return this.integralGain * this._integralValue;
    }

    private _derivative(error: number, dt: number): number {
        let derivative = (error - this._previousError) / dt;
        return this.derivativeGain * derivative;
    }

    runLoop(processVariable: number, timestamp?: number): number {
        let error = this._setPoint - processVariable;
        let currentTimestamp = !!timestamp ? timestamp : new Date().getTime() / 1000;
        
        let output = 0;
        let proportional = this._proportional(error);
        output += proportional;

        if (this._previousTimestamp) {
            let dt = currentTimestamp - this._previousTimestamp;

            let integral = this._integral(error, dt);
            output += integral;

            let derivative = this._derivative(error, dt);
            output += derivative;
        }

        this._previousError = error;
        this._previousTimestamp = currentTimestamp;

        return output;
    }

    adjustSetPoint(setPoint: number) {
        this._setPoint = setPoint
        // this._integralValue = 0;
        // this._previousError = 0;
    }
}