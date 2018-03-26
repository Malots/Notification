const _errors = new Map();

class Notification {
    addError(key,value) {
        if (!_errors.has(key))
            _errors.set(key,value);
    }

    getError(key) {
        return _errors.has(key) ? _errors.get(key) : 'Key not found';
    }

    getAllErrors() {
        const objects = _errors.reduce(function(acc, cur, i) {
            acc[i] = { error: cur.key, message: cur.value };
            return acc;
        }, {});
        return objects;
    }

    isValid() {
        return this.countErros() == 0;
    }

    countErros() {
        return _errors.size;
    }
}

export default Notification;