const properties = new WeakMap();

class Notification {
    constructor() {
        properties.set(this,{ errors: [] });        
    }

    isValid() {
        return 1 == 0;
    }
}

export default Notification;