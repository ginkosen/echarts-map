/**
 * @name    Logger
 * @author  GinKo.Wang
 * @mail    <a href='mailTo:yingosen@gmaiil.com'>GinKo.Wang</a>
 * @date    2016-01-04 20:57
 *
 */
!!(function (window) {

    /**
     * 日志打印
     * @name    Logger
     * @author  GinKo.Wang
     * @mail    <a href='mailTo:yingosen@gmaiil.com'>GinKo.Wang</a>
     * @date    2015-11-10 17:22
     *
     */
    var Logger = function (name, level, enable) {
        this.__name__ = name;
        this.__logLevel__ = isNaN(parseInt(level)) ? Logger.Level.ALL : level;
        this.__systemSupport__ = true;
        this.__available__ = !!enable ? enable === true : true;
        this.__init__();
    };

    /**
     * 定义类版本
     * @type {string}
     */
    Logger.prototype.version = "1.0.2.1";

    /**
     * 初始化
     * @private
     */
    Logger.prototype.__init__ = function () {
        this.__systemSupport__ = !!(window.console);
        if (!this.__systemSupport__) {
            window.alert("Browser unsupport logger , logger will not run.");
        }
    }

    /**
     * 日志是否可以使用
     * @private
     */
    Logger.prototype.__isAvailable__ = function () {
        return this.__systemSupport__ && this.__available__;
    };


    /**
     * 日志输出级别
     */
    Logger.Level = {
        ALL: 0,
        DEBUG: 1,
        INFO: 2,
        WARN: 3,
        ERROR: 4
    };

    /**
     * 更新日志级别
     * @param level
     */
    Logger.prototype.level = function (level) {
        this.__logLevel__ = isNaN(parseInt(level)) ? Logger.Level.ALL : level;
    };

    /**
     * 输出当前时间
     * @returns {string}
     * @private
     */
    Logger.prototype.__time__ = function () {
        var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var day = now.getDate();
        var hour = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
        var milliseconds = now.getMilliseconds();
        var format = [];
        format.push(year);
        format.push("-");
        if (month < 10) {
            format.push("0");
            format.push(month);
        } else {
            format.push(month);
        }
        format.push("-");
        if (month < 10) {
            format.push("0");
            format.push(day);
        } else {
            format.push(day);
        }
        format.push(" ");
        if (hour < 10) {
            format.push("0");
            format.push(hour);
        } else {
            format.push(hour);
        }
        format.push(":");
        if (minutes < 10) {
            format.push("0");
            format.push(minutes);
        } else {
            format.push(minutes);
        }
        format.push(":");
        if (seconds < 10) {
            format.push("0");
            format.push(seconds);
        } else {
            format.push(seconds);
        }
        format.push(",");
        if (milliseconds < 10) {
            format.push("00");
            format.push(milliseconds);
        } else if (milliseconds < 100) {
            format.push("0");
            format.push(milliseconds);
        } else {
            format.push(milliseconds);
        }
        return format.join("");
    };

    /**
     * 格式化参数
     * @returns {Array}
     * @private
     */
    Logger.prototype.__formatMessage__ = function () {
        var array = Array.prototype.slice.call(arguments);
        var buffer = [];
        if (!Array.isArray(array) || !array[0]) {
            array.push(array);
            return buffer;
        }
        array = array[0];
        var len = array.length;
        for (var i = 0; i < len; i++) {
            buffer.push(array[i]);
        }
        return buffer;
    }
    /**
     * 是否启用日志
     * @param enable
     */
    Logger.prototype.enable = function (enable) {
        if (typeof(enable) !== "boolean") {
            return;
        }
        this.__available__ = enable;
    };
    /**
     * debug输出日志
     */
    Logger.prototype.debug = function () {
        if (!this.__isAvailable__()) {
            return;
        }
        if (this.__logLevel__ > Logger.Level.DEBUG) {
            return;
        }
        var format = this.__formatMessage__(arguments);
        var message = undefined;
        var object = undefined;
        if (Array.isArray(format)) {
            message = format[0];
            object = format.slice(1, format.length);
        } else {
            message = format;
        }
        if (!message) {
            message = "";
        }
        window.console.debug("%c[" + this.__time__() + "] [ DEBUG ] [" + this.__name__ + "]", "font-weight: 500;color:#157E07;", message, object);
    };

    /**
     * info输出日志
     */
    Logger.prototype.info = function (message, args) {
        if (!this.__isAvailable__()) {
            return;
        }
        if (this.__logLevel__ > Logger.Level.INFO) {
            return;
        }
        var format = this.__formatMessage__(arguments);
        var message = undefined;
        var object = undefined;
        if (Array.isArray(format)) {
            message = format[0];
            object = format.slice(1, format.length);
        } else {
            message = format;
        }
        if (!message) {
            message = "";
        }
        window.console.info("%c[" + this.__time__() + "] [ INFO ] [" + this.__name__ + "]", "font-weight: 500;", message, object);
    };

    /**
     * warn输出日志
     */
    Logger.prototype.warn = function () {
        if (!this.__isAvailable__()) {
            return;
        }
        if (this.__logLevel__ > Logger.Level.WARN) {
            return;
        }
        var format = this.__formatMessage__(arguments);
        var message = undefined;
        var object = undefined;
        if (Array.isArray(format)) {
            message = format[0];
            object = format.slice(1, format.length);
        } else {
            message = format;
        }
        if (!message) {
            message = "";
        }
        window.console.warn("%c[" + this.__time__() + "] [ WARN ] [" + this.__name__ + "]", "font-weight: 500;color:#A7610C;", message, object);
    };

    /**
     * error输出日志
     */
    Logger.prototype.error = function (message, args) {
        if (!this.__isAvailable__()) {
            return;
        }
        if (this.__logLevel__ > Logger.Level.ERROR) {
            return;
        }
        var format = this.__formatMessage__(arguments);
        var message = undefined;
        var object = undefined;
        if (Array.isArray(format)) {
            message = format[0]
            object = format.slice(1, format.length);
        } else {
            message = format;
        }
        if (!message) {
            message = "";
        }
        window.console.error("%c[" + this.__time__() + "] [ ERROR ] [" + this.__name__ + "]", "font-weight: 500;", message, object);
    };

    /**
     * 清除console输出的日志
     */
    Logger.prototype.clear = function () {
        window.console.clear();
    };

    window.Logger = Logger;
})(window);