'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _errors = new Map();

var Notification = function () {
    function Notification() {
        _classCallCheck(this, Notification);
    }

    _createClass(Notification, [{
        key: 'addError',
        value: function addError(key, value) {
            if (!_errors.has(key)) _errors.set(key, value);
        }
    }, {
        key: 'getError',
        value: function getError(key) {
            return _errors.has(key) ? _errors.get(key) : 'Key not found';
        }
    }, {
        key: 'getAllErrors',
        value: function getAllErrors() {
            var result = Array.from(_errors);
            var objects = result.reduce(function (acc, cur, i) {
                acc[i] = { error: cur[0], message: cur[1] };
                return acc;
            }, {});
            return objects;
        }
    }, {
        key: 'isValid',
        value: function isValid() {
            return this.countErrors() == 0;
        }
    }, {
        key: 'countErrors',
        value: function countErrors() {
            return _errors.size;
        }
    }]);

    return Notification;
}();

exports.default = Notification;
