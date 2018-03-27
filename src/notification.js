let _errors;

class Notification {
    constructor() {
        _errors = new Map();
    }
    addError(key,value) {
        if (!_errors.has(key))
            _errors.set(key,value);
    }

    getError(key) {
        return _errors.has(key) ? _errors.get(key) : 'Key not found';
    }

    getAllErrors() {
        const result = Array.from(_errors);
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
        return _errors.size;
    }
}

export default Notification;