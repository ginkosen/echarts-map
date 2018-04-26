/*!
 Licensed under the MIT license

 Copyright (c) 2016 ItIt.Io

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 Any Problem , please contact <a href="mailto:yingosen@gmail.com">yingosen@gmail.com</a>

 */

/**
 * 通用事件处理
 * @auth: ginko.wang
 * @date: 2016-05-25 23:39
 */
!!(function () {
    if (!!window.Waves) {
        Waves.init();
    }
})();
!!(function (window, $) {
    window.onerror = function (message, path, line, column, error) {
        var event = event || window.event;
        event.preventDefault();
        event.stopPropagation();
        itit.logger.error(message + " on " + path + ":" + line + ":" + column, error);
    };
    window.itit = {};
    window.itit.logger = new Logger("itit.log");
    itit.request = function (_url) {
        if (!_url || _url.indexOf("?") < 0) {
            return {};
        }
        _url = decodeURI(_url);
        var params = _url.substr(_url.indexOf("?") + 1, _url.length);
        var req = {};
        var _params = params.split("&");
        var _len = !!_params ? _params.length : 0;
        for (var i = 0; i < _len; i++) {
            var param = _params[i];
            if (!param || param.indexOf("=") < 0) {
                continue;
            }
            var _param = param.split("=");
            req[_param[0]] = _param[1];
        }
        return req;
    };
    itit.isMobile = function (mobile) {
        var reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
        return reg.test(mobile);
    };
    itit.isEmail = function (email) {
        var reg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return reg.test(email);
    };
    itit.dialog = {
        icons: {
            info: "/images/alert.png",
            success: "/images/check.png",
            error: "/images/cross.png"
        }
    }
})(window, jQuery);
// Add Extends for JS Object
(function () {
    Object.isTypeOf = function (object, type) {
        return typeof(object) === type;
    };
    Object.isUndefined = function (object) {
        return typeof(object) === "undefined";
    };
    Object.isBoolean = function (object) {
        return typeof(object) === "boolean";
    };
    Object.isNumber = function (object) {
        return typeof(object) === "number";
    };
    Object.isString = function (object) {
        return typeof(object) === "string";
    };
    Object.isFunction = function (object) {
        return typeof(object) === "function";
    };
    Object.isObject = function (object) {
        return typeof(object) === "object";
    };
    Object.isNotNullObject = function (object) {
        return typeof(object) === "object" && object !== null;
    };
    Object.isNull = function (object) {
        return object === null;
    };
    Object.isArray = function (object) {
        return Array.isArray(object);
    };
    Object.methods = function (object) {
        var methods = [];
        for (let prop in object) {
            if (object[prop] && object[prop].constructor &&
                object[prop].call && object[prop].apply) {
                methods.push(prop);
            }
        }
        return methods;
    };
    Date.prototype.format = function (fmt) { // author: meizz
        var o = {
            "M+": this.getMonth() + 1, // 月份
            "d+": this.getDate(), // 日
            "h+": this.getHours(), // 小时
            "m+": this.getMinutes(), // 分
            "s+": this.getSeconds(), // 秒
            "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
            "S": this.getMilliseconds() // 毫秒
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "")
                .substr(4 - RegExp.$1.length));
        }
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k])
                    : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        return fmt;
    };
    Date.isDate = function (date) {
        return (date instanceof Date && !isNaN(date.valueOf()));
    };
    Date.format = function (jsondate, fmt) {
        if (isNaN(parseInt(jsondate))) {
            return "--";
        }
        return new Date(jsondate).format(fmt);
    };
    Date.nowString = function (radix) {
        var _radis = parseInt(radix);
        if (isNaN(_radis)) {
            _radis = 36;
        }
        return new Date().getTime().toString(_radis);
    };
    Number.integer = {
        min: -2147483648,
        max: 2147483647
    };
    /**
     * 数字检查
     *
     * @param value
     * @param min
     *            option
     * @param max
     *            option
     */
    Number.check = function (value, min, max) {
        var ret = false;
        var _value = parseFloat(value);
        if (isNaN(_value) || _value != value) {
            return ret;
        }
        ret = true;
        var _min = parseFloat(min);
        var _max = parseFloat(max);
        if (!isNaN(_min)) {
            if (_min.toString() !== min.toString()) {
                return false;
            }
            ret = _value >= _min;
            if (!ret) {
                return false;
            }
        }
        if (!isNaN(_max)) {
            if (_max.toString() !== max.toString()) {
                return false;
            }
            ret = _value <= _max;
        }
        return ret;
    };
    Number.isNumeric = function (value) {
        return !isNaN(parseFloat(value)) && !isNaN(value - parseFloat(value));
    };
    Number.parseIntWithDefault = function (value, vdefault) {
        vdefault = parseInt(vdefault);
        if (isNaN(vdefault)) {
            vdefault = 0;
        }
        value = parseInt(value);
        if (isNaN(value)) {
            value = vdefault;
        }
        return value;
    };
    Number.parseIntRate = function (value, rate) {
        if (!Number.isNumeric(value)) {
            return 0;
        }
        if (!Number.isNumeric(rate)) {
            rate = 1;
        }
        return parseInt((value * rate).toPrecision(12));
    };
    Number.parseIntRatio = function (value, ratio) {
        var _ratio = Number.parseIntWithDefault(ratio, 0);
        if (_ratio === 0) {
            throw new Error("ratio can't be zero!!");
        }
        return parseInt((value / _ratio).toPrecision(12));
    };
    Number.parseFloatWithDefault = function (value, vdefault, toFixed) {
        vdefault = parseFloat(vdefault);
        if (isNaN(vdefault)) {
            vdefault = 0;
        }
        toFixed = parseInt(toFixed);
        if (isNaN(toFixed)) {
            toFixed = -1;
        }
        value = parseFloat(value);
        if (isNaN(value)) {
            value = vdefault;
        }
        value = value.toPrecision(12);
        if (toFixed > -1) {
            return parseFloat(parseFloat(value).toPrecision(toFixed));
        }
        return value;
    };
    Number.pad = function (number, len) {
        return (Array(len).join(0) + number).slice(-len);
    };
    Number.formatPenny = function (value) {
        value = parseFloat(value);
        if (isNaN(value)) {
            value = 0;
        }
        return Number(value / 100).toFixed(2);
    };
    Number.formatRate = function (value, rate, toFixed) {
        value = parseFloat(value);
        rate = parseInt(rate);
        toFixed = parseInt(toFixed);
        if (isNaN(toFixed)) {
            toFixed = 2;
        }
        if (isNaN(value)) {
            return "--";
        }
        if (isNaN(rate)) {
            rate = 1;
        }
        return Number(value / rate).toFixed(toFixed);
    };
    String.isEmpty = function (value) {
        return !value || value.toString().trim().length === 0;
    };
    String.isMobile = function (mobile) {
        let reg = /^1[0-9]{10}$/;
        return reg.test(mobile);
    };
    String.isEmail = function (email) {
        let reg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return reg.test(email);
    };
    String.isUrl = function (url) {
        let reg = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/;
        return reg.test(url);
    };

    if (!Array.isArray) {
        Array.isArray = function (arg) {
            return Object.prototype.toString.call(arg) === '[object Array]';
        };
    }
    Array.isEmpty = function (array) {
        return !array || !Array.isArray(array) || array.length === 0;
    };
    Array.deleteElement = function (array, callback) {
        if (!Array.isArray(array) || array.length === 0) {
            return array;
        }
        if (!Object.isTypeOf(callback, "function")) {
            throw new Error("callback can not be null");
        }
        let _newList = [];
        array.forEach(function (item, index) {
            let _match = callback.apply(null, [item, index]);
            if (_match === true) {
                return;
            }
            _newList.push(item);
        });
        return _newList;
    };
})();