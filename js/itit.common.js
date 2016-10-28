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
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "")
                .substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k])
                    : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    };
    Number.prototype.format = function (precision, separator) {
        return Number.format(this, precision, separator);
    };

    Number.format = function (num, precision, separator) {
        var parts = [];
        // 判断是否为数字
        if (!isNaN(parseFloat(num)) && isFinite(num)) {
            // 把类似 .5, 5. 之类的数据转化成0.5, 5, 为数据精度处理做准, 至于为什么
            // 不在判断中直接写 if (!isNaN(num = parseFloat(num)) && isFinite(num))
            // 是因为parseFloat有一个奇怪的精度问题, 比如 parseFloat(12312312.1234567119)
            // 的值变成了 12312312.123456713
            num = Number(num);
            // 处理小数点位数
            num = (typeof precision !== 'undefined' ? num.toFixed(precision) : num).toString();
            // 分离数字的小数部分和整数部分
            parts = num.split('.');
            // 整数部分加[separator]分隔, 借用一个著名的正则表达式
            parts[0] = parts[0].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + (separator || ','));
            return parts.join('.');
        }
        return NaN;
    };
    Date.format = function (jsondate, fmt) {
        return new Date(jsondate).format(fmt);
    };
    /**
     * 秒时间格式化
     * @param seconds
     * @returns {string}
     */
    Date.formatSecond = function (value) {
        var _diff = "-:-";
        if (typeof(value) !== "number") {
            return _diff;
        }
        var _val = [];
        var _second = value % 60;
        var _minute = parseInt(value / 60) % 60;
        var _hour = parseInt(value / 60 / 60) % 60;
        if (_hour > 0) {
            if (_hour < 10) {
                _val.push("0");
            }
            _val.push(_hour);
            _val.push(":");
        }
        if (_minute < 10) {
            _val.push("0");
        }
        _val.push(_minute);
        _val.push(":");
        if (_second < 10) {
            _val.push("0");
        }
        _val.push(_second);
        _diff = _val.join("");
        return _diff;
    };
    Date.dateDiff = function (jsonDate, now) {
        var date = new Date(parseInt(value, 10));
        var diffDay = Math.floor((now.getTime() - date.getTime()) / 1000);
        var _diff = Date.format(value, "yyyy-MM-dd hh:mm");
        if (diffDay < 60) {
            _diff = "一分钟前"
        } else if (diffDay < 5 * 60) {
            _diff = "五分钟前"
        } else if (diffDay < 10 * 60) {
            _diff = "十分钟前"
        } else if (diffDay < 20 * 60) {
            _diff = "二十分钟前"
        } else if (diffDay < 30 * 60) {
            _diff = "三十分钟前"
        } else if (diffDay < 60 * 60) {
            _diff = "一小时前"
        } else if (diffDay < 2 * 60 * 60) {
            _diff = "两小时前"
        } else if (diffDay < 3 * 60 * 60) {
            _diff = "三小时前"
        } else if (diffDay < 12 * 60 * 60) {
            _diff = "半天前"
        }
        return _diff;
    };
    String.prototype.replaceAll = function (target, replacement) {
        return this.split(target).join(replacement);
    };
    String.prototype.trim = function () {
        return this.replace(/(^\s*)|(\s*$)/g, "");
    };
    String.prototype.ltrim = function () {
        return this.replace(/(^\s*)/g, "");
    };
    String.prototype.rtrim = function () {
        return this.replace(/(\s*$)/g, "");
    };
    String.prototype.startsWith = function (searchString, position) {
        position = position || 0;
        return this.indexOf(searchString, position) === position;
    };
    String.prototype.endWith = function (s) {
        if (!s || s == "" || this.length == 0 || s.length > this.length) {
            return false
        }
        return (this.substring(this.length - s.length) == s);
    };
})();