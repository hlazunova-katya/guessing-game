class GuessingGame {

    constructor() {
        this.numbers = [];
        this.first = null;
        this.last = null;
        this.middle = null;
    }
    setRange(min, max) {

        if (min<max){
            for (let i=min; i<=max; i++){
                this.numbers.push(i);
            }
            this.first = 0;
            this.last = this.numbers.length-1;
        }
    }
    guess() {
        this.middle = Math.round(this.first + (this.last - this.first) / 2);
        return this.numbers[this.middle];
    }

    lower() {
        this.last = this.middle;
    }

    greater() {
        this.first = this.middle;
    }
}

module.exports = GuessingGame;
