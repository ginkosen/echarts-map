/*!
 Licensed under the MIT license

 Copyright (c) 2016 ItIt.Io

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 Any Problem , please contact <a href="mailto:yingosen@gmail.com">yingosen@gmail.com</a>

 */
/**
 *
 * @author ginko.wang
 * @date 2016-10-20 17:29
 */
(function (window, itit) {
    var Map = function () {
        this.__list__ = undefined;
        this.__init__();
    };

    Map.prototype.__init__ = function () {
        var _this = this;
        _this.__list__ = [
            {
                code: "china",
                json: "/map/geo/china.json",
                name: "中国"
            },
            {
                code: "110000",
                json: "/map/geo/110000.json",
                name: "北京市"
            },
            {
                code: "120000",
                json: "/map/geo/120000.json",
                name: "天津市"
            },
            {
                code: "130000",
                json: "/map/geo/130000.json",
                name: "河北省"
            },
            {
                code: "140000",
                json: "/map/geo/140000.json",
                name: "山西省"
            },
            {
                code: "150000",
                json: "/map/geo/150000.json",
                name: "内蒙古自治区"
            },
            {
                code: "210000",
                json: "/map/geo/210000.json",
                name: "辽宁省"
            },
            {
                code: "220000",
                json: "/map/geo/220000.json",
                name: "吉林省"
            },
            {
                code: "230000",
                json: "/map/geo/230000.json",
                name: "黑龙江省"
            },
            {
                code: "310000",
                json: "/map/geo/310000.json",
                name: "上海市"
            },
            {
                code: "320000",
                json: "/map/geo/320000.json",
                name: "江苏省"
            },
            {
                code: "330000",
                json: "/map/geo/330000.json",
                name: "浙江省"
            },
            {
                code: "340000",
                json: "/map/geo/340000.json",
                name: "安徽省"
            },
            {
                code: "350000",
                json: "/map/geo/350000.json",
                name: "福建省"
            },
            {
                code: "360000",
                json: "/map/geo/360000.json",
                name: "江西省"
            },
            {
                code: "370000",
                json: "/map/geo/370000.json",
                name: "山东省"
            },
            {
                code: "410000",
                json: "/map/geo/410000.json",
                name: "河南省"
            },
            {
                code: "420000",
                json: "/map/geo/420000.json",
                name: "湖北省"
            },
            {
                code: "430000",
                json: "/map/geo/430000.json",
                name: "湖南省"
            },
            {
                code: "440000",
                json: "/map/geo/440000.json",
                name: "广东省"
            },
            {
                code: "450000",
                json: "/map/geo/450000.json",
                name: "广西壮族自治区"
            },
            {
                code: "460000",
                json: "/map/geo/460000.json",
                name: "海南省"
            },
            {
                code: "500000",
                json: "/map/geo/500000.json",
                name: "重庆市"
            },
            {
                code: "510000",
                json: "/map/geo/510000.json",
                name: "四川省"
            },
            {
                code: "520000",
                json: "/map/geo/520000.json",
                name: "贵州省"
            },
            {
                code: "530000",
                json: "/map/geo/530000.json",
                name: "云南省"
            },
            {
                code: "540000",
                json: "/map/geo/540000.json",
                name: "西藏自治区"
            },
            {
                code: "610000",
                json: "/map/geo/610000.json",
                name: "陕西省"
            },
            {
                code: "620000",
                json: "/map/geo/620000.json",
                name: "甘肃省"
            },
            {
                code: "630000",
                json: "/map/geo/630000.json",
                name: "青海省"
            },
            {
                code: "640000",
                json: "/map/geo/640000.json",
                name: "宁夏回族自治区"
            },
            {
                code: "650000",
                json: "/map/geo/650000.json",
                name: "新疆维吾尔自治区"
            },
            {
                code: "130100",
                json: "/map/geo/130100.json",
                name: "石家庄市"
            },
            {
                code: "130200",
                json: "/map/geo/130200.json",
                name: "唐山市"
            },
            {
                code: "130300",
                json: "/map/geo/130300.json",
                name: "秦皇岛市"
            },
            {
                code: "130400",
                json: "/map/geo/130400.json",
                name: "邯郸市"
            },
            {
                code: "130500",
                json: "/map/geo/130500.json",
                name: "邢台市"
            },
            {
                code: "130600",
                json: "/map/geo/130600.json",
                name: "保定市"
            },
            {
                code: "130700",
                json: "/map/geo/130700.json",
                name: "张家口市"
            },
            {
                code: "130800",
                json: "/map/geo/130800.json",
                name: "承德市"
            },
            {
                code: "130900",
                json: "/map/geo/130900.json",
                name: "沧州市"
            },
            {
                code: "131000",
                json: "/map/geo/131000.json",
                name: "廊坊市"
            },
            {
                code: "131100",
                json: "/map/geo/131100.json",
                name: "衡水市"
            },
            {
                code: "140100",
                json: "/map/geo/140100.json",
                name: "太原市"
            },
            {
                code: "140200",
                json: "/map/geo/140200.json",
                name: "大同市"
            },
            {
                code: "140300",
                json: "/map/geo/140300.json",
                name: "阳泉市"
            },
            {
                code: "140400",
                json: "/map/geo/140400.json",
                name: "长治市"
            },
            {
                code: "140500",
                json: "/map/geo/140500.json",
                name: "晋城市"
            },
            {
                code: "140600",
                json: "/map/geo/140600.json",
                name: "朔州市"
            },
            {
                code: "140700",
                json: "/map/geo/140700.json",
                name: "晋中市"
            },
            {
                code: "140800",
                json: "/map/geo/140800.json",
                name: "运城市"
            },
            {
                code: "140900",
                json: "/map/geo/140900.json",
                name: "忻州市"
            },
            {
                code: "141000",
                json: "/map/geo/141000.json",
                name: "临汾市"
            },
            {
                code: "141100",
                json: "/map/geo/141100.json",
                name: "吕梁市"
            },
            {
                code: "150100",
                json: "/map/geo/150100.json",
                name: "呼和浩特市"
            },
            {
                code: "150200",
                json: "/map/geo/150200.json",
                name: "包头市"
            },
            {
                code: "150300",
                json: "/map/geo/150300.json",
                name: "乌海市"
            },
            {
                code: "150400",
                json: "/map/geo/150400.json",
                name: "赤峰市"
            },
            {
                code: "150500",
                json: "/map/geo/150500.json",
                name: "通辽市"
            },
            {
                code: "150600",
                json: "/map/geo/150600.json",
                name: "鄂尔多斯市"
            },
            {
                code: "150700",
                json: "/map/geo/150700.json",
                name: "呼伦贝尔市"
            },
            {
                code: "150800",
                json: "/map/geo/150800.json",
                name: "巴彦淖尔市"
            },
            {
                code: "150900",
                json: "/map/geo/150900.json",
                name: "乌兰察布市"
            },
            {
                code: "152200",
                json: "/map/geo/152200.json",
                name: "兴安盟"
            },
            {
                code: "152500",
                json: "/map/geo/152500.json",
                name: "锡林郭勒盟"
            },
            {
                code: "152900",
                json: "/map/geo/152900.json",
                name: "阿拉善盟"
            },
            {
                code: "210100",
                json: "/map/geo/210100.json",
                name: "沈阳市"
            },
            {
                code: "210200",
                json: "/map/geo/210200.json",
                name: "大连市"
            },
            {
                code: "210300",
                json: "/map/geo/210300.json",
                name: "鞍山市"
            },
            {
                code: "210400",
                json: "/map/geo/210400.json",
                name: "抚顺市"
            },
            {
                code: "210500",
                json: "/map/geo/210500.json",
                name: "本溪市"
            },
            {
                code: "210600",
                json: "/map/geo/210600.json",
                name: "丹东市"
            },
            {
                code: "210700",
                json: "/map/geo/210700.json",
                name: "锦州市"
            },
            {
                code: "210800",
                json: "/map/geo/210800.json",
                name: "营口市"
            },
            {
                code: "210900",
                json: "/map/geo/210900.json",
                name: "阜新市"
            },
            {
                code: "211000",
                json: "/map/geo/211000.json",
                name: "辽阳市"
            },
            {
                code: "211100",
                json: "/map/geo/211100.json",
                name: "盘锦市"
            },
            {
                code: "211200",
                json: "/map/geo/211200.json",
                name: "铁岭市"
            },
            {
                code: "211300",
                json: "/map/geo/211300.json",
                name: "朝阳市"
            },
            {
                code: "211400",
                json: "/map/geo/211400.json",
                name: "葫芦岛市"
            },
            {
                code: "220100",
                json: "/map/geo/220100.json",
                name: "长春市"
            },
            {
                code: "220200",
                json: "/map/geo/220200.json",
                name: "吉林市"
            },
            {
                code: "220300",
                json: "/map/geo/220300.json",
                name: "四平市"
            },
            {
                code: "220400",
                json: "/map/geo/220400.json",
                name: "辽源市"
            },
            {
                code: "220500",
                json: "/map/geo/220500.json",
                name: "通化市"
            },
            {
                code: "220600",
                json: "/map/geo/220600.json",
                name: "白山市"
            },
            {
                code: "220700",
                json: "/map/geo/220700.json",
                name: "松原市"
            },
            {
                code: "220800",
                json: "/map/geo/220800.json",
                name: "白城市"
            },
            {
                code: "222400",
                json: "/map/geo/222400.json",
                name: "延边朝鲜族自治州"
            },
            {
                code: "230100",
                json: "/map/geo/230100.json",
                name: "哈尔滨市"
            },
            {
                code: "230200",
                json: "/map/geo/230200.json",
                name: "齐齐哈尔市"
            },
            {
                code: "230300",
                json: "/map/geo/230300.json",
                name: "鸡西市"
            },
            {
                code: "230400",
                json: "/map/geo/230400.json",
                name: "鹤岗市"
            },
            {
                code: "230500",
                json: "/map/geo/230500.json",
                name: "双鸭山市"
            },
            {
                code: "230600",
                json: "/map/geo/230600.json",
                name: "大庆市"
            },
            {
                code: "230700",
                json: "/map/geo/230700.json",
                name: "伊春市"
            },
            {
                code: "230800",
                json: "/map/geo/230800.json",
                name: "佳木斯市"
            },
            {
                code: "230900",
                json: "/map/geo/230900.json",
                name: "七台河市"
            },
            {
                code: "231000",
                json: "/map/geo/231000.json",
                name: "牡丹江市"
            },
            {
                code: "231100",
                json: "/map/geo/231100.json",
                name: "黑河市"
            },
            {
                code: "231200",
                json: "/map/geo/231200.json",
                name: "绥化市"
            },
            {
                code: "232700",
                json: "/map/geo/232700.json",
                name: "大兴安岭地区"
            },
            {
                code: "320100",
                json: "/map/geo/320100.json",
                name: "南京市"
            },
            {
                code: "320200",
                json: "/map/geo/320200.json",
                name: "无锡市"
            },
            {
                code: "320300",
                json: "/map/geo/320300.json",
                name: "徐州市"
            },
            {
                code: "320400",
                json: "/map/geo/320400.json",
                name: "常州市"
            },
            {
                code: "320500",
                json: "/map/geo/320500.json",
                name: "苏州市"
            },
            {
                code: "320600",
                json: "/map/geo/320600.json",
                name: "南通市"
            },
            {
                code: "320700",
                json: "/map/geo/320700.json",
                name: "连云港市"
            },
            {
                code: "320800",
                json: "/map/geo/320800.json",
                name: "淮安市"
            },
            {
                code: "320900",
                json: "/map/geo/320900.json",
                name: "盐城市"
            },
            {
                code: "321000",
                json: "/map/geo/321000.json",
                name: "扬州市"
            },
            {
                code: "321100",
                json: "/map/geo/321100.json",
                name: "镇江市"
            },
            {
                code: "321200",
                json: "/map/geo/321200.json",
                name: "泰州市"
            },
            {
                code: "321300",
                json: "/map/geo/321300.json",
                name: "宿迁市"
            },
            {
                code: "330100",
                json: "/map/geo/330100.json",
                name: "杭州市"
            },
            {
                code: "330200",
                json: "/map/geo/330200.json",
                name: "宁波市"
            },
            {
                code: "330300",
                json: "/map/geo/330300.json",
                name: "温州市"
            },
            {
                code: "330400",
                json: "/map/geo/330400.json",
                name: "嘉兴市"
            },
            {
                code: "330500",
                json: "/map/geo/330500.json",
                name: "湖州市"
            },
            {
                code: "330600",
                json: "/map/geo/330600.json",
                name: "绍兴市"
            },
            {
                code: "330700",
                json: "/map/geo/330700.json",
                name: "金华市"
            },
            {
                code: "330800",
                json: "/map/geo/330800.json",
                name: "衢州市"
            },
            {
                code: "330900",
                json: "/map/geo/330900.json",
                name: "舟山市"
            },
            {
                code: "331000",
                json: "/map/geo/331000.json",
                name: "台州市"
            },
            {
                code: "331100",
                json: "/map/geo/331100.json",
                name: "丽水市"
            },
            {
                code: "340100",
                json: "/map/geo/340100.json",
                name: "合肥市"
            },
            {
                code: "340200",
                json: "/map/geo/340200.json",
                name: "芜湖市"
            },
            {
                code: "340300",
                json: "/map/geo/340300.json",
                name: "蚌埠市"
            },
            {
                code: "340400",
                json: "/map/geo/340400.json",
                name: "淮南市"
            },
            {
                code: "340500",
                json: "/map/geo/340500.json",
                name: "马鞍山市"
            },
            {
                code: "340600",
                json: "/map/geo/340600.json",
                name: "淮北市"
            },
            {
                code: "340700",
                json: "/map/geo/340700.json",
                name: "铜陵市"
            },
            {
                code: "340800",
                json: "/map/geo/340800.json",
                name: "安庆市"
            },
            {
                code: "341000",
                json: "/map/geo/341000.json",
                name: "黄山市"
            },
            {
                code: "341100",
                json: "/map/geo/341100.json",
                name: "滁州市"
            },
            {
                code: "341200",
                json: "/map/geo/341200.json",
                name: "阜阳市"
            },
            {
                code: "341300",
                json: "/map/geo/341300.json",
                name: "宿州市"
            },
            {
                code: "341500",
                json: "/map/geo/341500.json",
                name: "六安市"
            },
            {
                code: "341600",
                json: "/map/geo/341600.json",
                name: "亳州市"
            },
            {
                code: "341700",
                json: "/map/geo/341700.json",
                name: "池州市"
            },
            {
                code: "341800",
                json: "/map/geo/341800.json",
                name: "宣城市"
            },
            {
                code: "350100",
                json: "/map/geo/350100.json",
                name: "福州市"
            },
            {
                code: "350200",
                json: "/map/geo/350200.json",
                name: "厦门市"
            },
            {
                code: "350300",
                json: "/map/geo/350300.json",
                name: "莆田市"
            },
            {
                code: "350400",
                json: "/map/geo/350400.json",
                name: "三明市"
            },
            {
                code: "350500",
                json: "/map/geo/350500.json",
                name: "泉州市"
            },
            {
                code: "350600",
                json: "/map/geo/350600.json",
                name: "漳州市"
            },
            {
                code: "350700",
                json: "/map/geo/350700.json",
                name: "南平市"
            },
            {
                code: "350800",
                json: "/map/geo/350800.json",
                name: "龙岩市"
            },
            {
                code: "350900",
                json: "/map/geo/350900.json",
                name: "宁德市"
            },
            {
                code: "360100",
                json: "/map/geo/360100.json",
                name: "南昌市"
            },
            {
                code: "360200",
                json: "/map/geo/360200.json",
                name: "景德镇市"
            },
            {
                code: "360300",
                json: "/map/geo/360300.json",
                name: "萍乡市"
            },
            {
                code: "360400",
                json: "/map/geo/360400.json",
                name: "九江市"
            },
            {
                code: "360500",
                json: "/map/geo/360500.json",
                name: "新余市"
            },
            {
                code: "360600",
                json: "/map/geo/360600.json",
                name: "鹰潭市"
            },
            {
                code: "360700",
                json: "/map/geo/360700.json",
                name: "赣州市"
            },
            {
                code: "360800",
                json: "/map/geo/360800.json",
                name: "吉安市"
            },
            {
                code: "360900",
                json: "/map/geo/360900.json",
                name: "宜春市"
            },
            {
                code: "361000",
                json: "/map/geo/361000.json",
                name: "抚州市"
            },
            {
                code: "361100",
                json: "/map/geo/361100.json",
                name: "上饶市"
            },
            {
                code: "370100",
                json: "/map/geo/370100.json",
                name: "济南市"
            },
            {
                code: "370200",
                json: "/map/geo/370200.json",
                name: "青岛市"
            },
            {
                code: "370300",
                json: "/map/geo/370300.json",
                name: "淄博市"
            },
            {
                code: "370400",
                json: "/map/geo/370400.json",
                name: "枣庄市"
            },
            {
                code: "370500",
                json: "/map/geo/370500.json",
                name: "东营市"
            },
            {
                code: "370600",
                json: "/map/geo/370600.json",
                name: "烟台市"
            },
            {
                code: "370700",
                json: "/map/geo/370700.json",
                name: "潍坊市"
            },
            {
                code: "370800",
                json: "/map/geo/370800.json",
                name: "济宁市"
            },
            {
                code: "370900",
                json: "/map/geo/370900.json",
                name: "泰安市"
            },
            {
                code: "371000",
                json: "/map/geo/371000.json",
                name: "威海市"
            },
            {
                code: "371100",
                json: "/map/geo/371100.json",
                name: "日照市"
            },
            {
                code: "371200",
                json: "/map/geo/371200.json",
                name: "莱芜市"
            },
            {
                code: "371300",
                json: "/map/geo/371300.json",
                name: "临沂市"
            },
            {
                code: "371400",
                json: "/map/geo/371400.json",
                name: "德州市"
            },
            {
                code: "371500",
                json: "/map/geo/371500.json",
                name: "聊城市"
            },
            {
                code: "371600",
                json: "/map/geo/371600.json",
                name: "滨州市"
            },
            {
                code: "371700",
                json: "/map/geo/371700.json",
                name: "菏泽市"
            },
            {
                code: "410100",
                json: "/map/geo/410100.json",
                name: "郑州市"
            },
            {
                code: "410200",
                json: "/map/geo/410200.json",
                name: "开封市"
            },
            {
                code: "410300",
                json: "/map/geo/410300.json",
                name: "洛阳市"
            },
            {
                code: "410400",
                json: "/map/geo/410400.json",
                name: "平顶山市"
            },
            {
                code: "410500",
                json: "/map/geo/410500.json",
                name: "安阳市"
            },
            {
                code: "410600",
                json: "/map/geo/410600.json",
                name: "鹤壁市"
            },
            {
                code: "410700",
                json: "/map/geo/410700.json",
                name: "新乡市"
            },
            {
                code: "410800",
                json: "/map/geo/410800.json",
                name: "焦作市"
            },
            {
                code: "410900",
                json: "/map/geo/410900.json",
                name: "濮阳市"
            },
            {
                code: "411000",
                json: "/map/geo/411000.json",
                name: "许昌市"
            },
            {
                code: "411100",
                json: "/map/geo/411100.json",
                name: "漯河市"
            },
            {
                code: "411200",
                json: "/map/geo/411200.json",
                name: "三门峡市"
            },
            {
                code: "411300",
                json: "/map/geo/411300.json",
                name: "南阳市"
            },
            {
                code: "411400",
                json: "/map/geo/411400.json",
                name: "商丘市"
            },
            {
                code: "411500",
                json: "/map/geo/411500.json",
                name: "信阳市"
            },
            {
                code: "411600",
                json: "/map/geo/411600.json",
                name: "周口市"
            },
            {
                code: "411700",
                json: "/map/geo/411700.json",
                name: "驻马店市"
            },
            {
                code: "420100",
                json: "/map/geo/420100.json",
                name: "武汉市"
            },
            {
                code: "420200",
                json: "/map/geo/420200.json",
                name: "黄石市"
            },
            {
                code: "420300",
                json: "/map/geo/420300.json",
                name: "十堰市"
            },
            {
                code: "420500",
                json: "/map/geo/420500.json",
                name: "宜昌市"
            },
            {
                code: "420600",
                json: "/map/geo/420600.json",
                name: "襄阳市"
            },
            {
                code: "420700",
                json: "/map/geo/420700.json",
                name: "鄂州市"
            },
            {
                code: "420800",
                json: "/map/geo/420800.json",
                name: "荆门市"
            },
            {
                code: "420900",
                json: "/map/geo/420900.json",
                name: "孝感市"
            },
            {
                code: "421000",
                json: "/map/geo/421000.json",
                name: "荆州市"
            },
            {
                code: "421100",
                json: "/map/geo/421100.json",
                name: "黄冈市"
            },
            {
                code: "421200",
                json: "/map/geo/421200.json",
                name: "咸宁市"
            },
            {
                code: "421300",
                json: "/map/geo/421300.json",
                name: "随州市"
            },
            {
                code: "422800",
                json: "/map/geo/422800.json",
                name: "恩施土家族苗族自治州"
            },
            {
                code: "430100",
                json: "/map/geo/430100.json",
                name: "长沙市"
            },
            {
                code: "430200",
                json: "/map/geo/430200.json",
                name: "株洲市"
            },
            {
                code: "430300",
                json: "/map/geo/430300.json",
                name: "湘潭市"
            },
            {
                code: "430400",
                json: "/map/geo/430400.json",
                name: "衡阳市"
            },
            {
                code: "430500",
                json: "/map/geo/430500.json",
                name: "邵阳市"
            },
            {
                code: "430600",
                json: "/map/geo/430600.json",
                name: "岳阳市"
            },
            {
                code: "430700",
                json: "/map/geo/430700.json",
                name: "常德市"
            },
            {
                code: "430800",
                json: "/map/geo/430800.json",
                name: "张家界市"
            },
            {
                code: "430900",
                json: "/map/geo/430900.json",
                name: "益阳市"
            },
            {
                code: "431000",
                json: "/map/geo/431000.json",
                name: "郴州市"
            },
            {
                code: "431100",
                json: "/map/geo/431100.json",
                name: "永州市"
            },
            {
                code: "431200",
                json: "/map/geo/431200.json",
                name: "怀化市"
            },
            {
                code: "431300",
                json: "/map/geo/431300.json",
                name: "娄底市"
            },
            {
                code: "433100",
                json: "/map/geo/433100.json",
                name: "湘西土家族苗族自治州"
            },
            {
                code: "440100",
                json: "/map/geo/440100.json",
                name: "广州市"
            },
            {
                code: "440200",
                json: "/map/geo/440200.json",
                name: "韶关市"
            },
            {
                code: "440300",
                json: "/map/geo/440300.json",
                name: "深圳市"
            },
            {
                code: "440400",
                json: "/map/geo/440400.json",
                name: "珠海市"
            },
            {
                code: "440500",
                json: "/map/geo/440500.json",
                name: "汕头市"
            },
            {
                code: "440600",
                json: "/map/geo/440600.json",
                name: "佛山市"
            },
            {
                code: "440700",
                json: "/map/geo/440700.json",
                name: "江门市"
            },
            {
                code: "440800",
                json: "/map/geo/440800.json",
                name: "湛江市"
            },
            {
                code: "440900",
                json: "/map/geo/440900.json",
                name: "茂名市"
            },
            {
                code: "441200",
                json: "/map/geo/441200.json",
                name: "肇庆市"
            },
            {
                code: "441300",
                json: "/map/geo/441300.json",
                name: "惠州市"
            },
            {
                code: "441400",
                json: "/map/geo/441400.json",
                name: "梅州市"
            },
            {
                code: "441500",
                json: "/map/geo/441500.json",
                name: "汕尾市"
            },
            {
                code: "441600",
                json: "/map/geo/441600.json",
                name: "河源市"
            },
            {
                code: "441700",
                json: "/map/geo/441700.json",
                name: "阳江市"
            },
            {
                code: "441800",
                json: "/map/geo/441800.json",
                name: "清远市"
            },
            {
                code: "441900",
                json: "/map/geo/441900.json",
                name: "东莞市"
            },
            {
                code: "442000",
                json: "/map/geo/442000.json",
                name: "中山市"
            },
            {
                code: "445100",
                json: "/map/geo/445100.json",
                name: "潮州市"
            },
            {
                code: "445200",
                json: "/map/geo/445200.json",
                name: "揭阳市"
            },
            {
                code: "445300",
                json: "/map/geo/445300.json",
                name: "云浮市"
            },
            {
                code: "450100",
                json: "/map/geo/450100.json",
                name: "南宁市"
            },
            {
                code: "450200",
                json: "/map/geo/450200.json",
                name: "柳州市"
            },
            {
                code: "450300",
                json: "/map/geo/450300.json",
                name: "桂林市"
            },
            {
                code: "450400",
                json: "/map/geo/450400.json",
                name: "梧州市"
            },
            {
                code: "450500",
                json: "/map/geo/450500.json",
                name: "北海市"
            },
            {
                code: "450600",
                json: "/map/geo/450600.json",
                name: "防城港市"
            },
            {
                code: "450700",
                json: "/map/geo/450700.json",
                name: "钦州市"
            },
            {
                code: "450800",
                json: "/map/geo/450800.json",
                name: "贵港市"
            },
            {
                code: "450900",
                json: "/map/geo/450900.json",
                name: "玉林市"
            },
            {
                code: "451000",
                json: "/map/geo/451000.json",
                name: "百色市"
            },
            {
                code: "451100",
                json: "/map/geo/451100.json",
                name: "贺州市"
            },
            {
                code: "451200",
                json: "/map/geo/451200.json",
                name: "河池市"
            },
            {
                code: "451300",
                json: "/map/geo/451300.json",
                name: "来宾市"
            },
            {
                code: "451400",
                json: "/map/geo/451400.json",
                name: "崇左市"
            },
            {
                code: "460100",
                json: "/map/geo/460100.json",
                name: "海口市"
            },
            {
                code: "460200",
                json: "/map/geo/460200.json",
                name: "三亚市"
            },
            {
                code: "510100",
                json: "/map/geo/510100.json",
                name: "成都市"
            },
            {
                code: "510300",
                json: "/map/geo/510300.json",
                name: "自贡市"
            },
            {
                code: "510400",
                json: "/map/geo/510400.json",
                name: "攀枝花市"
            },
            {
                code: "510500",
                json: "/map/geo/510500.json",
                name: "泸州市"
            },
            {
                code: "510600",
                json: "/map/geo/510600.json",
                name: "德阳市"
            },
            {
                code: "510700",
                json: "/map/geo/510700.json",
                name: "绵阳市"
            },
            {
                code: "510800",
                json: "/map/geo/510800.json",
                name: "广元市"
            },
            {
                code: "510900",
                json: "/map/geo/510900.json",
                name: "遂宁市"
            },
            {
                code: "511000",
                json: "/map/geo/511000.json",
                name: "内江市"
            },
            {
                code: "511100",
                json: "/map/geo/511100.json",
                name: "乐山市"
            },
            {
                code: "511300",
                json: "/map/geo/511300.json",
                name: "南充市"
            },
            {
                code: "511400",
                json: "/map/geo/511400.json",
                name: "眉山市"
            },
            {
                code: "511500",
                json: "/map/geo/511500.json",
                name: "宜宾市"
            },
            {
                code: "511600",
                json: "/map/geo/511600.json",
                name: "广安市"
            },
            {
                code: "511700",
                json: "/map/geo/511700.json",
                name: "达州市"
            },
            {
                code: "511800",
                json: "/map/geo/511800.json",
                name: "雅安市"
            },
            {
                code: "511900",
                json: "/map/geo/511900.json",
                name: "巴中市"
            },
            {
                code: "512000",
                json: "/map/geo/512000.json",
                name: "资阳市"
            },
            {
                code: "513200",
                json: "/map/geo/513200.json",
                name: "阿坝藏族羌族自治州"
            },
            {
                code: "513300",
                json: "/map/geo/513300.json",
                name: "甘孜藏族自治州"
            },
            {
                code: "513400",
                json: "/map/geo/513400.json",
                name: "凉山彝族自治州"
            },
            {
                code: "520100",
                json: "/map/geo/520100.json",
                name: "贵阳市"
            },
            {
                code: "520200",
                json: "/map/geo/520200.json",
                name: "六盘水市"
            },
            {
                code: "520300",
                json: "/map/geo/520300.json",
                name: "遵义市"
            },
            {
                code: "520400",
                json: "/map/geo/520400.json",
                name: "安顺市"
            },
            {
                code: "522200",
                json: "/map/geo/522200.json",
                name: "铜仁市"
            },
            {
                code: "522300",
                json: "/map/geo/522300.json",
                name: "黔西南布依族苗族自治州"
            },
            {
                code: "522400",
                json: "/map/geo/522400.json",
                name: "毕节市"
            },
            {
                code: "522600",
                json: "/map/geo/522600.json",
                name: "黔东南苗族侗族自治州"
            },
            {
                code: "522700",
                json: "/map/geo/522700.json",
                name: "黔南布依族苗族自治州"
            },
            {
                code: "530100",
                json: "/map/geo/530100.json",
                name: "昆明市"
            },
            {
                code: "530300",
                json: "/map/geo/530300.json",
                name: "曲靖市"
            },
            {
                code: "530400",
                json: "/map/geo/530400.json",
                name: "玉溪市"
            },
            {
                code: "530500",
                json: "/map/geo/530500.json",
                name: "保山市"
            },
            {
                code: "530600",
                json: "/map/geo/530600.json",
                name: "昭通市"
            },
            {
                code: "530700",
                json: "/map/geo/530700.json",
                name: "丽江市"
            },
            {
                code: "530800",
                json: "/map/geo/530800.json",
                name: "普洱市"
            },
            {
                code: "530900",
                json: "/map/geo/530900.json",
                name: "临沧市"
            },
            {
                code: "532300",
                json: "/map/geo/532300.json",
                name: "楚雄彝族自治州"
            },
            {
                code: "532500",
                json: "/map/geo/532500.json",
                name: "红河哈尼族彝族自治州"
            },
            {
                code: "532600",
                json: "/map/geo/532600.json",
                name: "文山壮族苗族自治州"
            },
            {
                code: "532800",
                json: "/map/geo/532800.json",
                name: "西双版纳傣族自治州"
            },
            {
                code: "532900",
                json: "/map/geo/532900.json",
                name: "大理白族自治州"
            },
            {
                code: "533100",
                json: "/map/geo/533100.json",
                name: "德宏傣族景颇族自治州"
            },
            {
                code: "533300",
                json: "/map/geo/533300.json",
                name: "怒江傈僳族自治州"
            },
            {
                code: "533400",
                json: "/map/geo/533400.json",
                name: "迪庆藏族自治州"
            },
            {
                code: "540100",
                json: "/map/geo/540100.json",
                name: "拉萨市"
            },
            {
                code: "542100",
                json: "/map/geo/542100.json",
                name: "昌都市"
            },
            {
                code: "542200",
                json: "/map/geo/542200.json",
                name: "山南市"
            },
            {
                code: "542300",
                json: "/map/geo/542300.json",
                name: "日喀则市"
            },
            {
                code: "542400",
                json: "/map/geo/542400.json",
                name: "那曲地区"
            },
            {
                code: "542500",
                json: "/map/geo/542500.json",
                name: "阿里地区"
            },
            {
                code: "542600",
                json: "/map/geo/542600.json",
                name: "林芝市"
            },
            {
                code: "610100",
                json: "/map/geo/610100.json",
                name: "西安市"
            },
            {
                code: "610200",
                json: "/map/geo/610200.json",
                name: "铜川市"
            },
            {
                code: "610300",
                json: "/map/geo/610300.json",
                name: "宝鸡市"
            },
            {
                code: "610400",
                json: "/map/geo/610400.json",
                name: "咸阳市"
            },
            {
                code: "610500",
                json: "/map/geo/610500.json",
                name: "渭南市"
            },
            {
                code: "610600",
                json: "/map/geo/610600.json",
                name: "延安市"
            },
            {
                code: "610700",
                json: "/map/geo/610700.json",
                name: "汉中市"
            },
            {
                code: "610800",
                json: "/map/geo/610800.json",
                name: "榆林市"
            },
            {
                code: "610900",
                json: "/map/geo/610900.json",
                name: "安康市"
            },
            {
                code: "611000",
                json: "/map/geo/611000.json",
                name: "商洛市"
            },
            {
                code: "620100",
                json: "/map/geo/620100.json",
                name: "兰州市"
            },
            {
                code: "620300",
                json: "/map/geo/620300.json",
                name: "金昌市"
            },
            {
                code: "620400",
                json: "/map/geo/620400.json",
                name: "白银市"
            },
            {
                code: "620500",
                json: "/map/geo/620500.json",
                name: "天水市"
            },
            {
                code: "620600",
                json: "/map/geo/620600.json",
                name: "武威市"
            },
            {
                code: "620700",
                json: "/map/geo/620700.json",
                name: "张掖市"
            },
            {
                code: "620800",
                json: "/map/geo/620800.json",
                name: "平凉市"
            },
            {
                code: "620900",
                json: "/map/geo/620900.json",
                name: "酒泉市"
            },
            {
                code: "621000",
                json: "/map/geo/621000.json",
                name: "庆阳市"
            },
            {
                code: "621100",
                json: "/map/geo/621100.json",
                name: "定西市"
            },
            {
                code: "621200",
                json: "/map/geo/621200.json",
                name: "陇南市"
            },
            {
                code: "622900",
                json: "/map/geo/622900.json",
                name: "临夏回族自治州"
            },
            {
                code: "623000",
                json: "/map/geo/623000.json",
                name: "甘南藏族自治州"
            },
            {
                code: "630100",
                json: "/map/geo/630100.json",
                name: "西宁市"
            },
            {
                code: "632100",
                json: "/map/geo/632100.json",
                name: "海东市"
            },
            {
                code: "632200",
                json: "/map/geo/632200.json",
                name: "海北藏族自治州"
            },
            {
                code: "632300",
                json: "/map/geo/632300.json",
                name: "黄南藏族自治州"
            },
            {
                code: "632500",
                json: "/map/geo/632500.json",
                name: "海南藏族自治州"
            },
            {
                code: "632600",
                json: "/map/geo/632600.json",
                name: "果洛藏族自治州"
            },
            {
                code: "632700",
                json: "/map/geo/632700.json",
                name: "玉树藏族自治州"
            },
            {
                code: "632800",
                json: "/map/geo/632800.json",
                name: "海西蒙古族藏族自治州"
            },
            {
                code: "640100",
                json: "/map/geo/640100.json",
                name: "银川市"
            },
            {
                code: "640200",
                json: "/map/geo/640200.json",
                name: "石嘴山市"
            },
            {
                code: "640300",
                json: "/map/geo/640300.json",
                name: "吴忠市"
            },
            {
                code: "640400",
                json: "/map/geo/640400.json",
                name: "固原市"
            },
            {
                code: "640500",
                json: "/map/geo/640500.json",
                name: "中卫市"
            },
            {
                code: "650100",
                json: "/map/geo/650100.json",
                name: "乌鲁木齐市"
            },
            {
                code: "650200",
                json: "/map/geo/650200.json",
                name: "克拉玛依市"
            },
            {
                code: "652100",
                json: "/map/geo/652100.json",
                name: "吐鲁番市"
            },
            {
                code: "652200",
                json: "/map/geo/652200.json",
                name: "哈密市"
            },
            {
                code: "652300",
                json: "/map/geo/652300.json",
                name: "昌吉回族自治州"
            },
            {
                code: "652700",
                json: "/map/geo/652700.json",
                name: "博尔塔拉蒙古自治州"
            },
            {
                code: "652800",
                json: "/map/geo/652800.json",
                name: "巴音郭楞蒙古自治州"
            },
            {
                code: "652900",
                json: "/map/geo/652900.json",
                name: "阿克苏地区"
            },
            {
                code: "653000",
                json: "/map/geo/653000.json",
                name: "克孜勒苏柯尔克孜自治州"
            },
            {
                code: "653100",
                json: "/map/geo/653100.json",
                name: "喀什地区"
            },
            {
                code: "653200",
                json: "/map/geo/653200.json",
                name: "和田地区"
            },
            {
                code: "654000",
                json: "/map/geo/654000.json",
                name: "伊犁哈萨克自治州"
            },
            {
                code: "654200",
                json: "/map/geo/654200.json",
                name: "塔城地区"
            },
            {
                code: "654300",
                json: "/map/geo/654300.json",
                name: "阿勒泰地区"
            },
            {
                code: "810000",
                json: "/map/geo/810000.json",
                name: "香港特别行政区"
            },
            {
                code: "820000",
                json: "/map/geo/820000.json",
                name: "澳门特别行政区"
            },
            {
                code: "710000",
                json: "/map/geo/710000.json",
                name: "台湾省"
            }
        ];
    };

    /**
     * 获取对应code的地图信息
     * @param code
     */
    Map.prototype.getByCode = function (code) {
        var _this = this;
        if (!Array.isArray(_this.__list__)) {
            return;
        }
        var _len = _this.__list__.length;
        for (var i = 0; i < _len; i++) {
            var _item = _this.__list__[i];
            if (_item.code == code) {
                return {
                    name: _item.name,
                    code: _item.code,
                    json: _item.json
                };
            }
        }
    };

    /**
     * 获取对应name的地图信息
     * @param name
     */
    Map.prototype.getByName = function (name) {
        var _this = this;
        if (!Array.isArray(_this.__list__)) {
            return;
        }
        var _len = _this.__list__.length;
        for (var i = 0; i < _len; i++) {
            var _item = _this.__list__[i];
            if (_item.name === name) {
                return {
                    name: _item.name,
                    code: _item.code,
                    json: _item.json
                };
            }
        }
    };
    /**
     * 遍历数据
     * @param callback
     */
    Map.prototype.each = function (callback) {
        if (typeof(callback) !== "function") {
            return;
        }
        var _this = this;
        if (!Array.isArray(_this.__list__)) {
            return;
        }
        var _len = _this.__list__.length;
        for (var i = 0; i < _len; i++) {
            var _item = _this.__list__[i];
            callback.apply(null, [{
                name: _item.name,
                code: _item.code,
                json: _item.json
            }])
        }
    };
    itit.map = new Map();
})(window, itit);