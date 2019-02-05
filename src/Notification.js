"use strict";

let symbolErrors = Symbol('errors');

class Notification {
    constructor() {
        if (this.constructor === Notification) {
            throw new Error('This class cannot be instanciate');
        }
        this[symbolErrors] = new Map();
    }

    addError(key,value) {
        if (!this[symbolErrors].has(key))
            this[symbolErrors].set(key,value);
    }

    getError(key) {
        return this[symbolErrors].has(key) ? this[symbolErrors].get(key) : 'Key not found';
    }

    getAllErrors() {
        const result = Array.from(this[symbolErrors]);
        let objects = result.reduce(function(acc, cur, i) {
            acc[i] = { error: cur[0], message: cur[1] };
            return acc;
        }, {});
        return objects;
    }

    isValid() {
        return this.countErrors() == 0;
    }

    countErrors() {
        return this[symbolErrors].size;
    }
}

export default Notification;