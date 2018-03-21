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
        key: 'add',
        value: function add(key, value) {
            if (!_errors.has(key)) _errors.set(key, value);
        }
    }, {
        key: 'get',
        value: function get(key) {
            return _errors.has(key) ? _errors.get(key) : 'Key not found';
        }
    }, {
        key: 'getAll',
        value: function getAll() {
            return Array.from(_errors);
        }
    }, {
        key: 'isValid',
        value: function isValid() {
            return this.count() == 0;
        }
    }, {
        key: 'count',
        value: function count() {
            return _errors.size;
        }
    }]);

    return Notification;
}();

exports.default = Notification;
