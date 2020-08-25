class CalcController {

    constructor() {
        // _ = private attributes. //
        this._displayCalc = "0";
        this._currentDate;
        this.initialize();
    }

    initialize() {
        // selecting objects from the html file. //
        let displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");

        // innerHTML = changes the value inside the HTML tag. //
        displayCalcEl.innerHTML = "1234";
        dateEl.innerHTML = "20/02/2020"
        timeEl.innerHTML = "12:30"
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