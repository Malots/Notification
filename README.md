# notification
Notification npm package

## Specification
This package contains a class to be extends, this class is called Notification, and have methods to implement an error property.

## Example
class Example extends Notification {
    constructor() {
        super();
    }
}

## Methods
* addError - Add an error with key and error
* getError(key) - Get error
* getAllErrors - Return json with all errors
* isValid - Return if class don't have any error
* countErrors - Return quantity of erros
