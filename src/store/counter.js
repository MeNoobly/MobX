import { makeAutoObservable } from "mobx";

class Counter {
    count = 0;
    timer = 60;

    constructor() {
        makeAutoObservable(this);
    }

    increment() {
        this.count += 1;
    }

    decrement() {
        this.count -= 1;
    }

    // computed функция
    get total() {
        return `Count + timer = ` + this.count + this.timer;
    }
}

const objectCounter = new Counter();

export default objectCounter;
