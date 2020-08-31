class CalcController {

    constructor() {
        // Selecting objects from the html file. //
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");

        // Date Locale config for pt-br. //
        this._locale = "pt-BR"
        this._dateFormtConfig = {
            day: "2-digit",
            month: "long",
            year: "numeric"
        }

        // Array of operations. //
        this._operation = [];
        // Init buttons events. //
        this.initButtonsEvents();
        // Init hour and date real-time configs. //
        this.initialize();
        // Obs.: _ means private attributes. //
    }

    
    initialize() {

        this.setDisplayDateTime();
        // Repeat the arguments every given interval. //
        setInterval(() => {
            this.setDisplayDateTime();
        }, 1000);
    }

    // Applies to the element, all needed events. //
    addEventListenerAll(element, events, fn) {
        // Split some string, using the parameter as the point of split. // 
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

    // Return the last position inside operation's array. //
    getLastOperation() {
        return this._operation[(this._operation.length - 1)]; 
    }

    setLastOperation(value) {
        let n = (this._operation.length - 1);
        this._operation[n] = value;
    }

    isOperator(value) {
        // Checking if the current value has some index inside the bellow array. //
        // If so, this function will return true. //
        return (['+', '-', '*', '/'].indexOf(value) > -1);
    }

    ////////////////////////////
    // Buttons Configuration. //
    ////////////////////////////
    addOperation(value) {
        // Every new input will pass this function. //
        // This checks if the new value it's a number or a signal operator. //

        // Checks if the last operator before is NOT a number. //
        if(isNaN(this.getLastOperation())) {
            // If it's actually not a number. //
            if(this.isOperator(value)) {
                // If the current value it's a operator, swap this with the last operation value. //
                this.setLastOperation(value);

            } else if(isNaN(value)) {

            // In case of a new number. //
            } else {
                this._operation.push(value);
            }
            
        } else {
            // If the current value it's a signal operator. //
            if(this.isOperator(value)) {

                this._operation.push(value);
            } else {
                // Parse the value to concatenate both values. //
                let newValue = this.getLastOperation().toString() + value.toString();
                this.setLastOperation(newValue);
            }
        }
        console.log(this._operation);
    }

    setError() {
        this.displayCalc = "Error";
    }

    // Sets all buttons actions. //
    execBtn(value) {
        switch(value) {

            case 'ac' :
                this.clearAll();
            break;

            case 'ce' :
                this.clearEntry();
            break;

            case 'soma' :
                this.addOperation('+');
            break;

            case 'subtracao' :
                this.addOperation('-');
            break;

            case 'divisao' :
                this.addOperation('/');
            break;

            case 'multiplicacao' :
                this.addOperation('*');
            break;

            case 'porcento' :
                this.addOperation('%');
            break;

            case 'igual' :
            break;

            case 'ponto' :
                this.addOperation('.');
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
    /////////////////////////////////
    // Add events for all buttons. //
    /////////////////////////////////
    initButtonsEvents() {
        // Select all 'g' tags inside id buttons and parts. //
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
        // Display current date and time. //
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, this._dateFormtConfig);
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    /////////////////////////
    // Getters and Setters //
    /////////////////////////

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