class Notification {
    constructor() {
        this._errors = new Map();
    }
    addError(key,value) {
        if (!this._errors.has(key))
            this._errors.set(key,value);
    }

    getError(key) {
        return this._errors.has(key) ? this._errors.get(key) : 'Key not found';
    }

    getAllErrors() {
        const result = Array.from(this._errors);
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
        return this._errors.size;
    }
}

export default Notification;