"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ObjectStorage = function () {
  function ObjectStorage() {
    _classCallCheck(this, ObjectStorage);

    console.log("Object storage object created");
  }

  _createClass(ObjectStorage, [{
    key: "get",
    value: function get(key) {
      if (typeof key == 'string' && key.length > 3) {
        var data = localStorage.getItem(key);
        if (data) {
          if (data[0] == "{" || data[0] == "[") {
            return JSON.parse(data);
          } else {
            return data;
          }
        } else {
          //throws error of "xxx is not defined"
          return undefined;
        }
      } else {
        console.error("'key' should exist, should be string & must be longer than 3 letters");
      }
    }
  }, {
    key: "set",
    value: function set(key, data) {
      if (key && data) {
        if ((typeof data === "undefined" ? "undefined" : _typeof(data)) == "object" || typeof data == "array") {
          var stringToSet = JSON.stringify(data);
          localStorage.setItem(key, stringToSet);
          return true;
        } else {
          // save as normal string;
          localStorage.setItem(key, data);
        }
      }
    }
  }]);

  return ObjectStorage;
}();

exports.default = ObjectStorage;
