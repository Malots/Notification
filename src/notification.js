const _errors = new Map();

class Notification {
    addError(key,value) {
        if (!_errors.has(key))
            _errors.set(key,value);
    }

    getError(key) {
        return _errors.has(key) ? _errors.get(key) : 'Key not found';
    }

    getAllErros() {
        return Array.from(_errors);
    }

    isValid() {
        return this.count() == 0;
    }

    countErros() {
        return _errors.size;
    }
}

export default Notification;