class Counter {
    #value;
    constructor(initial){
        this.#value=initial;
    }

    plus(num){
        this.#value=this.#value+num;
    }
    get number(){
        return this.#value;
    }
}

let today = new Counter(2);
today.plus(3);

console.log(today.number);