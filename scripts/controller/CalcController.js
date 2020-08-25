class CalcController {

    constructor() {
        // _ = private attributes. //
        this._displayCalc = "0";
        this._currentDate;
    }

    // return displayCalc value. //
    get displayCalc() {
        return this._displayCalc;
    }
    // changes displayCalc value. //
    set displayCalc(value) {
        this._displayCalc = value;
    }

    // return currentDate value. //
    get currentDate() {
        return this._currentDate;
    }
    // changes currentDate value. //
    set currentDate(value) {
        this._currentDate = value;
    }
}