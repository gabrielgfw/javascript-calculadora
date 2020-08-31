class CalcController {

    constructor() {
        // _ = private attributes. //
        // selecting objects from the html file. //
        this._locale = "pt-BR"
        this._dateFormtConfig = {
            day: "2-digit",
            month: "long",
            year: "numeric"
        }
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._operation = [];
        this.initButtonsEvents();
        this.initialize();
    }

    initialize() {

        this.setDisplayDateTime();
        // this function will repeat the arguments every given interval. //
        setInterval(() => {
            this.setDisplayDateTime();
        }, 1000);
    }

    // takes the element, all the events that we want to apply by eventListener. //
    addEventListenerAll(element, events, fn) {
        // this function split some string, using the parameter as the point of split. // 
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn);
        });
    }

    clearAll() {
        this._operation = [];
    }

    clearEntry() {
        this._operation.pop();
    }

    addOperation(value) {
        this._operation.push(value);
        console.log(this._operation);
    }

    setError() {
        this.displayCalc = "Error";
    }

    // sets all buttons actions. //
    execBtn(value) {
        switch(value) {

            case 'ac' :
                this.clearAll();
                break;
            case 'ce' :
                this.clearEntry();
                break;
            case 'soma' :
                break;
            case 'subtracao' :
                break;
            case 'divisao' :
                break;
            case 'multiplicacao' :
                break;
            case 'porcento' :
                break;
            case 'igual' :
                break;
            
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
                break;


        }
    }

    // add events for all buttons. //
    initButtonsEvents() {
        // select all 'g' tags inside id buttons and parts. //
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index) => {

            this.addEventListenerAll(btn, 'click drag', e => {
                // returning the class name of the current object when the same it's clicked. //
                // notice that this replace function, removes the 'btn-' text inside each element's name. //
                // this will make easy to recognize which button has beend clicked. //
                let textBtn = btn.className.baseVal.replace("btn-", "");

                this.execBtn(textBtn);
            });

            this.addEventListenerAll(btn, 'mouseover mouseup mousedown', e => {

                btn.style.cursor = 'pointer';
            });


        })


    }


    setDisplayDateTime() {
        // display current date and time
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, this._dateFormtConfig);
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    // displayTime GET & SET // 
    get displayTime() {
        return this._timeEl.innerHTML;
    }
    set displayTime(value) {
        this._timeEl.innerHTML = value;
    }

    // displayDate GET & SET //
    get displayDate() {
        return this._dateEl.innerHTML;
    }
    set displayDate(value) {
        this._dateEl.innerHTML = value;
    }

    // displayCalc GET & SET //
    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }
    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate() {
        return new Date();
    }


}