webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/antd/lib/button/button-group.js":
/*!******************************************************!*\
  !*** ./node_modules/antd/lib/button/button-group.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var ButtonGroup = function ButtonGroup(props) {
  return React.createElement(_configProvider.ConfigConsumer, null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls;

    var customizePrefixCls = props.prefixCls,
        size = props.size,
        className = props.className,
        others = __rest(props, ["prefixCls", "size", "className"]);

    var prefixCls = getPrefixCls('btn-group', customizePrefixCls); // large => lg
    // small => sm

    var sizeCls = '';

    switch (size) {
      case 'large':
        sizeCls = 'lg';
        break;

      case 'small':
        sizeCls = 'sm';
        break;

      default:
        break;
    }

    var classes = (0, _classnames["default"])(prefixCls, _defineProperty({}, "".concat(prefixCls, "-").concat(sizeCls), sizeCls), className);
    return React.createElement("div", _extends({}, others, {
      className: classes
    }));
  });
};

var _default = ButtonGroup;
exports["default"] = _default;
//# sourceMappingURL=button-group.js.map


/***/ }),

/***/ "./node_modules/antd/lib/button/button.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/button/button.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

var _omit = _interopRequireDefault(__webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js"));

var _icon = _interopRequireDefault(__webpack_require__(/*! ../icon */ "./node_modules/antd/lib/icon/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _wave = _interopRequireDefault(__webpack_require__(/*! ../_util/wave */ "./node_modules/antd/lib/_util/wave.js"));

var _type = __webpack_require__(/*! ../_util/type */ "./node_modules/antd/lib/_util/type.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/* eslint-disable react/button-has-type */


var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);

function isString(str) {
  return typeof str === 'string';
} // Insert one space between two chinese characters automatically.


function insertSpace(child, needInserted) {
  // Check the child if is undefined or null.
  if (child == null) {
    return;
  }

  var SPACE = needInserted ? ' ' : ''; // strictNullChecks oops.

  if (typeof child !== 'string' && typeof child !== 'number' && isString(child.type) && isTwoCNChar(child.props.children)) {
    return React.cloneElement(child, {}, child.props.children.split('').join(SPACE));
  }

  if (typeof child === 'string') {
    if (isTwoCNChar(child)) {
      child = child.split('').join(SPACE);
    }

    return React.createElement("span", null, child);
  }

  return child;
}

function spaceChildren(children, needInserted) {
  var isPrevChildPure = false;
  var childList = [];
  React.Children.forEach(children, function (child) {
    var type = _typeof(child);

    var isCurrentChildPure = type === 'string' || type === 'number';

    if (isPrevChildPure && isCurrentChildPure) {
      var lastIndex = childList.length - 1;
      var lastChild = childList[lastIndex];
      childList[lastIndex] = "".concat(lastChild).concat(child);
    } else {
      childList.push(child);
    }

    isPrevChildPure = isCurrentChildPure;
  }); // Pass to React.Children.map to auto fill key

  return React.Children.map(childList, function (child) {
    return insertSpace(child, needInserted);
  });
}

var ButtonTypes = (0, _type.tuple)('default', 'primary', 'ghost', 'dashed', 'danger', 'link');
var ButtonShapes = (0, _type.tuple)('circle', 'circle-outline', 'round');
var ButtonSizes = (0, _type.tuple)('large', 'default', 'small');
var ButtonHTMLTypes = (0, _type.tuple)('submit', 'button', 'reset');

var Button =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button(props) {
    var _this;

    _classCallCheck(this, Button);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Button).call(this, props));

    _this.saveButtonRef = function (node) {
      _this.buttonNode = node;
    };

    _this.handleClick = function (e) {
      var loading = _this.state.loading;
      var onClick = _this.props.onClick;

      if (loading) {
        return;
      }

      if (onClick) {
        onClick(e);
      }
    };

    _this.renderButton = function (_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls,
          autoInsertSpaceInButton = _ref.autoInsertSpaceInButton;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          type = _a.type,
          shape = _a.shape,
          size = _a.size,
          className = _a.className,
          children = _a.children,
          icon = _a.icon,
          ghost = _a.ghost,
          block = _a.block,
          rest = __rest(_a, ["prefixCls", "type", "shape", "size", "className", "children", "icon", "ghost", "block"]);

      var _this$state = _this.state,
          loading = _this$state.loading,
          hasTwoCNChar = _this$state.hasTwoCNChar;
      var prefixCls = getPrefixCls('btn', customizePrefixCls);
      var autoInsertSpace = autoInsertSpaceInButton !== false; // large => lg
      // small => sm

      var sizeCls = '';

      switch (size) {
        case 'large':
          sizeCls = 'lg';
          break;

        case 'small':
          sizeCls = 'sm';
          break;

        default:
          break;
      }

      var iconType = loading ? 'loading' : icon;
      var classes = (0, _classnames["default"])(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(type), type), _defineProperty(_classNames, "".concat(prefixCls, "-").concat(shape), shape), _defineProperty(_classNames, "".concat(prefixCls, "-").concat(sizeCls), sizeCls), _defineProperty(_classNames, "".concat(prefixCls, "-icon-only"), !children && children !== 0 && iconType), _defineProperty(_classNames, "".concat(prefixCls, "-loading"), !!loading), _defineProperty(_classNames, "".concat(prefixCls, "-background-ghost"), ghost), _defineProperty(_classNames, "".concat(prefixCls, "-two-chinese-chars"), hasTwoCNChar && autoInsertSpace), _defineProperty(_classNames, "".concat(prefixCls, "-block"), block), _classNames));
      var iconNode = iconType ? React.createElement(_icon["default"], {
        type: iconType
      }) : null;
      var kids = children || children === 0 ? spaceChildren(children, _this.isNeedInserted() && autoInsertSpace) : null;
      var linkButtonRestProps = (0, _omit["default"])(rest, ['htmlType', 'loading']);

      if (linkButtonRestProps.href !== undefined) {
        return React.createElement("a", _extends({}, linkButtonRestProps, {
          className: classes,
          onClick: _this.handleClick,
          ref: _this.saveButtonRef
        }), iconNode, kids);
      } // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.


      var _b = rest,
          htmlType = _b.htmlType,
          otherProps = __rest(_b, ["htmlType"]);

      var buttonNode = React.createElement("button", _extends({}, (0, _omit["default"])(otherProps, ['loading']), {
        type: htmlType,
        className: classes,
        onClick: _this.handleClick,
        ref: _this.saveButtonRef
      }), iconNode, kids);

      if (type === 'link') {
        return buttonNode;
      }

      return React.createElement(_wave["default"], null, buttonNode);
    };

    _this.state = {
      loading: props.loading,
      hasTwoCNChar: false
    };
    return _this;
  }

  _createClass(Button, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fixTwoCNChar();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      this.fixTwoCNChar();

      if (prevProps.loading && typeof prevProps.loading !== 'boolean') {
        clearTimeout(this.delayTimeout);
      }

      var loading = this.props.loading;

      if (loading && typeof loading !== 'boolean' && loading.delay) {
        this.delayTimeout = window.setTimeout(function () {
          _this2.setState({
            loading: loading
          });
        }, loading.delay);
      } else if (prevProps.loading !== loading) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          loading: loading
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.delayTimeout) {
        clearTimeout(this.delayTimeout);
      }
    }
  }, {
    key: "fixTwoCNChar",
    value: function fixTwoCNChar() {
      // Fix for HOC usage like <FormatMessage />
      if (!this.buttonNode) {
        return;
      }

      var buttonText = this.buttonNode.textContent || this.buttonNode.innerText;

      if (this.isNeedInserted() && isTwoCNChar(buttonText)) {
        if (!this.state.hasTwoCNChar) {
          this.setState({
            hasTwoCNChar: true
          });
        }
      } else if (this.state.hasTwoCNChar) {
        this.setState({
          hasTwoCNChar: false
        });
      }
    }
  }, {
    key: "isNeedInserted",
    value: function isNeedInserted() {
      var _this$props = this.props,
          icon = _this$props.icon,
          children = _this$props.children,
          type = _this$props.type;
      return React.Children.count(children) === 1 && !icon && type !== 'link';
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderButton);
    }
  }]);

  return Button;
}(React.Component);

Button.__ANT_BUTTON = true;
Button.defaultProps = {
  loading: false,
  ghost: false,
  block: false,
  htmlType: 'button'
};
Button.propTypes = {
  type: PropTypes.string,
  shape: PropTypes.oneOf(ButtonShapes),
  size: PropTypes.oneOf(ButtonSizes),
  htmlType: PropTypes.oneOf(ButtonHTMLTypes),
  onClick: PropTypes.func,
  loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  className: PropTypes.string,
  icon: PropTypes.string,
  block: PropTypes.bool,
  title: PropTypes.string
};
(0, _reactLifecyclesCompat.polyfill)(Button);
var _default = Button;
exports["default"] = _default;
//# sourceMappingURL=button.js.map


/***/ }),

/***/ "./node_modules/antd/lib/button/index.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/button/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _button = _interopRequireDefault(__webpack_require__(/*! ./button */ "./node_modules/antd/lib/button/button.js"));

var _buttonGroup = _interopRequireDefault(__webpack_require__(/*! ./button-group */ "./node_modules/antd/lib/button/button-group.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_button["default"].Group = _buttonGroup["default"];
var _default = _button["default"];
exports["default"] = _default;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_date_picker_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/date-picker/style */ "./node_modules/antd/lib/date-picker/style/index.js");
/* harmony import */ var antd_lib_date_picker_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_date_picker_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/date-picker */ "./node_modules/antd/lib/date-picker/index.js");
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_slider_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/slider/style */ "./node_modules/antd/lib/slider/style/index.js");
/* harmony import */ var antd_lib_slider_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_slider_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/slider */ "./node_modules/antd/lib/slider/index.js");
/* harmony import */ var antd_lib_slider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_slider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_switch_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/switch/style */ "./node_modules/antd/lib/switch/style/index.js");
/* harmony import */ var antd_lib_switch_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_switch_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/switch */ "./node_modules/antd/lib/switch/index.js");
/* harmony import */ var antd_lib_switch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_switch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_input_number_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/input-number/style */ "./node_modules/antd/lib/input-number/style/index.js");
/* harmony import */ var antd_lib_input_number_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_number_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_input_number__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/input-number */ "./node_modules/antd/lib/input-number/index.js");
/* harmony import */ var antd_lib_input_number__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/select/style */ "./node_modules/antd/lib/select/style/index.js");
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/form/style */ "./node_modules/antd/lib/form/style/index.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);














var _jsxFileName = "/Users/gadokkwon/Dev/with-ant-design-app/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement;
var FormItem = antd_lib_form__WEBPACK_IMPORTED_MODULE_13___default.a.Item;
var Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_11___default.a.Option;

var IndexPage = function IndexPage() {
  return __jsx("div", {
    style: {
      marginTop: 100
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_13___default.a, {
    layout: "horizontal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(FormItem, {
    label: "Input Number",
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 8
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_9___default.a, {
    size: "large",
    min: 1,
    max: 10,
    style: {
      width: 100
    },
    defaultValue: 3,
    name: "inputNumber",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Link")), __jsx(FormItem, {
    label: "Switch",
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 8
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(antd_lib_switch__WEBPACK_IMPORTED_MODULE_7___default.a, {
    defaultChecked: true,
    name: "switch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })), __jsx(FormItem, {
    label: "Slider",
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 8
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(antd_lib_slider__WEBPACK_IMPORTED_MODULE_5___default.a, {
    defaultValue: 70,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })), __jsx(FormItem, {
    label: "Select",
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 8
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_11___default.a, {
    size: "large",
    defaultValue: "lucy",
    style: {
      width: 192
    },
    name: "select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(Option, {
    value: "jack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "jack"), __jsx(Option, {
    value: "lucy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "lucy"), __jsx(Option, {
    value: "disabled",
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "disabled"), __jsx(Option, {
    value: "yiminghe",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "yiminghe"))), __jsx(FormItem, {
    label: "DatePicker",
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 8
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: "startDate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  })), __jsx(FormItem, {
    style: {
      marginTop: 48
    },
    wrapperCol: {
      span: 8,
      offset: 8
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    size: "large",
    type: "primary",
    htmlType: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "OK"), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    size: "large",
    style: {
      marginLeft: 8
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Cancel"))));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.9669617e22b4e097033c.hot-update.js.map