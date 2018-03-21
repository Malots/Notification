const _errors = new Map();

class Notification {
    add(key,value) {
        if (!_errors.has(key))
            _errors.set(key,value);
    }

    get(key) {
        return _errors.has(key) ? _errors.get(key) : 'Key not found';
    }

    getAll() {
        return Array.from(_errors);
    }

    isValid() {
        return this.count() == 0;
    }

    count() {
        return _errors.size;
    }
}

export default Notification;