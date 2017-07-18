'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _list = require('./../components/list.js');

var _list2 = _interopRequireDefault(_list);

var _panel = require('./../components/panel.js');

var _panel2 = _interopRequireDefault(_panel);

var _counter = require('./../components/counter.js');

var _counter2 = _interopRequireDefault(_counter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
    _inherits(Index, _wepy$page);

    function Index() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Index);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            "navigationBarTitleText": "test"
        }, _this.$props = { "counter1": { "xmlns:v-bind": "", "v-bind:num.once": "myNum" }, "counter2": { "v-bind:num.sync": "syncNum" }, "list": { "v-bind:item.once": "items" } }, _this.$events = {}, _this.components = {
            panel: _panel2.default,
            counter1: _counter2.default,
            counter2: _counter2.default,
            list: _list2.default
        }, _this.data = {
            myNum: 50,
            syncNum: 100,
            items: [1, 2, 3, 4]
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/test'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInBhbmVsIiwiY291bnRlcjEiLCJjb3VudGVyMiIsImxpc3QiLCJkYXRhIiwibXlOdW0iLCJzeW5jTnVtIiwiaXRlbXMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBRWpCQyxNLEdBQVM7QUFDTCxzQ0FBMEI7QUFEckIsUyxRQUdWQyxNLEdBQVMsRUFBQyxZQUFXLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsbUJBQWtCLE9BQXJDLEVBQVosRUFBMEQsWUFBVyxFQUFDLG1CQUFrQixTQUFuQixFQUFyRSxFQUFtRyxRQUFPLEVBQUMsb0JBQW1CLE9BQXBCLEVBQTFHLEUsUUFDWkMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ05DLGtDQURNO0FBRU5DLHVDQUZNO0FBR05DLHVDQUhNO0FBSU5DO0FBSk0sUyxRQU1WQyxJLEdBQU87QUFDSEMsbUJBQU8sRUFESjtBQUVIQyxxQkFBUyxHQUZOO0FBR0hDLG1CQUFPLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVjtBQUhKLFM7Ozs7RUFid0IsZUFBS0MsSTs7a0JBQW5CYixLIiwiZmlsZSI6InRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9saXN0JztcbmltcG9ydCBQYW5lbCBmcm9tICcuLi9jb21wb25lbnRzL3BhbmVsJztcbmltcG9ydCBDb3VudGVyIGZyb20gJy4uL2NvbXBvbmVudHMvY291bnRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcblxuICAgIGNvbmZpZyA9IHtcbiAgICAgICAgXCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6IFwidGVzdFwiXG4gICAgfTtcbiAgICRwcm9wcyA9IHtcImNvdW50ZXIxXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpudW0ub25jZVwiOlwibXlOdW1cIn0sXCJjb3VudGVyMlwiOntcInYtYmluZDpudW0uc3luY1wiOlwic3luY051bVwifSxcImxpc3RcIjp7XCJ2LWJpbmQ6aXRlbS5vbmNlXCI6XCJpdGVtc1wifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgIHBhbmVsOiBQYW5lbCxcbiAgICAgICAgY291bnRlcjE6IENvdW50ZXIsXG4gICAgICAgIGNvdW50ZXIyOiBDb3VudGVyLFxuICAgICAgICBsaXN0OiBMaXN0XG4gICAgfTtcbiAgICBkYXRhID0ge1xuICAgICAgICBteU51bTogNTAsXG4gICAgICAgIHN5bmNOdW06IDEwMCxcbiAgICAgICAgaXRlbXM6IFsxLCAyLCAzLCA0XVxuICAgIH1cbn1cbiJdfQ==