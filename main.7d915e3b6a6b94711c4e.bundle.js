(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{226:function(module){module.exports={name:"react-loading-io",version:"1.0.4",description:"CSS-only spinners of loading.io for React",main:"dist/bundle.cjs.js",module:"dist/bundle.esm.js",sideEffects:!1,files:["dist"],scripts:{prebuild:"rimraf dist",build:"rollup -c",lint:"eslint '**/*.js'","lint:fix":"prettier-eslint '**/*.js' --write",test:"jest","test:watch":"jest --watch","test:coverage":"jest --coverage","test:coveralls":"jest --coverage --coverageReporters=text-lcov | coveralls","test:staged":"jest --findRelatedTests",storybook:"start-storybook -c storybook","prestorybook:build":"rm -rf storybook-static","storybook:build":"build-storybook -c storybook","storybook:serve":"serve storybook-static",predeploy:"npm run storybook:build",deploy:"gh-pages -d storybook-static"},husky:{hooks:{"pre-commit":"lint-staged"}},"lint-staged":{"*.js":["npm run lint:fix","npm run test:staged","git add"]},repository:"https://github.com/imkrunal/react-loading-io.git",keywords:["react","css","spinners"],author:"Krunal Shah",license:"MIT",bugs:{url:"https://github.com/imkrunal/react-loading-io"},homepage:"https://imkrunal.github.io/react-loading-io",devDependencies:{"@babel/core":"^7.4.5","@babel/preset-env":"^7.4.5","@babel/preset-react":"^7.0.0","@emotion/babel-preset-css-prop":"^10.0.14","@storybook/react":"^5.1.8","babel-core":"^7.0.0-bridge.0","babel-jest":"^24.8.0","babel-loader":"^8.0.6",coveralls:"^3.0.4",eslint:"^6.0.1","eslint-config-standard":"^13.0.1","eslint-plugin-import":"^2.17.3","eslint-plugin-jest":"^22.6.4","eslint-plugin-node":"^9.1.0","eslint-plugin-promise":"^4.1.1","eslint-plugin-react":"^7.13.0","eslint-plugin-standard":"^4.0.0","gh-pages":"^2.0.1",husky:"^3.0.0",jest:"^24.8.0","jest-emotion":"^10.0.11","lint-staged":"^9.2.0","prettier-eslint":"^9.0.0","prettier-eslint-cli":"^5.0.0",react:"^16.8.6","react-dom":"^16.8.6","react-test-renderer":"^16.8.6",rimraf:"^2.6.3",rollup:"^1.15.6","rollup-plugin-babel":"^4.3.2","rollup-plugin-node-resolve":"^5.0.3","rollup-plugin-string":"^3.0.0","rollup-plugin-terser":"^5.0.0",serve:"^11.0.1"},peerDependencies:{react:">=15"},engines:{node:">=8"},jest:{moduleNameMapper:{"\\.css$":"<rootDir>/mocks/styles.js"}},dependencies:{"@emotion/core":"^10.0.10","prop-types":"^15.7.2"}}},227:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(18),__webpack_require__(19),__webpack_require__(22),__webpack_require__(15),__webpack_require__(20),__webpack_require__(36),__webpack_require__(56),__webpack_require__(46),__webpack_require__(3),__webpack_require__(47),__webpack_require__(57),__webpack_require__(58),__webpack_require__(17),__webpack_require__(23),__webpack_require__(24);var _emotion_core__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_16___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__),prop_types__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_17___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_17__),_helpers__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(29);function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self):call}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}function _templateObject(){var data=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]);return _templateObject=function(){return data},data}var eclipse=Object(_emotion_core__WEBPACK_IMPORTED_MODULE_15__.c)(_templateObject()),Eclipse=function(_React$Component){function Eclipse(){return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Eclipse),_possibleConstructorReturn(this,_getPrototypeOf(Eclipse).apply(this,arguments))}return function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(Eclipse,react__WEBPACK_IMPORTED_MODULE_16___default.a.Component),function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(Eclipse,[{key:"render",value:function render(){var scale,_this$props=this.props,size=_this$props.size,sizeUnit=_this$props.sizeUnit,thickness=_this$props.thickness,color=_this$props.color,speed=_this$props.speed,translate=size*(scale="em"===sizeUnit||"rem"===sizeUnit?Object(_helpers__WEBPACK_IMPORTED_MODULE_18__.a)(size)/200:size/200);return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_15__.b)("div",null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_15__.b)("div",{css:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_15__.a)("position:relative;width:","".concat(size).concat(sizeUnit)," !important;height:","".concat(size).concat(sizeUnit)," !important;transform:translate( -","".concat(translate).concat(sizeUnit),",-","".concat(translate).concat(sizeUnit)," ) scale(",scale,") translate( ","".concat(translate).concat(sizeUnit),",","".concat(translate).concat(sizeUnit)," );label:Eclipse;")},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_15__.b)("div",{css:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_15__.a)("position:absolute;animation:",eclipse," ",speed,"s linear infinite;width:160px;height:160px;top:20px;left:20px;border-radius:50%;box-shadow:0 ",2*thickness,"px 0 0 ",color,";transform-origin:80px 82px;label:Eclipse;")})))}}]),Eclipse}();Eclipse.displayName="Eclipse",Eclipse.propTypes={size:prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.number,sizeUnit:prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.string,color:prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.string,thickness:prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.number,speed:prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.number},Eclipse.defaultProps={size:200,sizeUnit:"px",color:"#f08d43",thickness:2,speed:1},__webpack_exports__.a=Eclipse,Eclipse.__docgenInfo={description:"",methods:[],displayName:"Eclipse",props:{size:{defaultValue:{value:"200",computed:!1},type:{name:"number"},required:!1,description:""},sizeUnit:{defaultValue:{value:"'px'",computed:!1},type:{name:"string"},required:!1,description:""},color:{defaultValue:{value:"'#f08d43'",computed:!1},type:{name:"string"},required:!1,description:""},thickness:{defaultValue:{value:"2",computed:!1},type:{name:"number"},required:!1,description:""},speed:{defaultValue:{value:"1",computed:!1},type:{name:"number"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Eclipse/Eclipse.js"]={name:"Eclipse",docgenInfo:Eclipse.__docgenInfo,path:"src/Eclipse/Eclipse.js"})},228:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(18),__webpack_require__(19),__webpack_require__(22),__webpack_require__(15),__webpack_require__(20),__webpack_require__(36),__webpack_require__(56),__webpack_require__(46),__webpack_require__(3),__webpack_require__(47),__webpack_require__(57),__webpack_require__(58),__webpack_require__(17),__webpack_require__(23),__webpack_require__(24);var _emotion_core__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_16___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__),prop_types__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_17___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_17__),_helpers__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(29);function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self):call}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}function _templateObject(){var data=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  0% {\n    transform: translate(-50%, -50%) rotate(0deg);\n  }\n  100% {\n    transform: translate(-50%, -50%) rotate(360deg);\n  }\n"]);return _templateObject=function(){return data},data}var rolling=Object(_emotion_core__WEBPACK_IMPORTED_MODULE_15__.c)(_templateObject()),Rolling=function(_React$Component){function Rolling(){return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Rolling),_possibleConstructorReturn(this,_getPrototypeOf(Rolling).apply(this,arguments))}return function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(Rolling,react__WEBPACK_IMPORTED_MODULE_16___default.a.Component),function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(Rolling,[{key:"render",value:function render(){var scale,_this$props=this.props,size=_this$props.size,sizeUnit=_this$props.sizeUnit,thickness=_this$props.thickness,color=_this$props.color,speed=_this$props.speed,translate=size*(scale="em"===sizeUnit||"rem"===sizeUnit?Object(_helpers__WEBPACK_IMPORTED_MODULE_18__.a)(size)/200:size/200);return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_15__.b)("div",null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_15__.b)("div",{css:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_15__.a)("position:relative;width:","".concat(size).concat(sizeUnit)," !important;height:","".concat(size).concat(sizeUnit)," !important;transform:translate( -","".concat(translate).concat(sizeUnit),",-","".concat(translate).concat(sizeUnit)," ) scale(",scale,") translate( ","".concat(translate).concat(sizeUnit),",","".concat(translate).concat(sizeUnit)," );label:Rolling;")},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_15__.b)("div",{css:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_15__.a)("position:absolute;width:160px;height:160px;border:",thickness,"px solid ",color,";border-top-color:transparent;border-radius:50%;animation:",rolling," ",speed,"s linear infinite;top:100px;left:100px;transform:rotate(90deg);label:Rolling;")})))}}]),Rolling}();Rolling.displayName="Rolling",Rolling.propTypes={size:prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.number,sizeUnit:prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.string,color:prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.string,thickness:prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.number,speed:prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.number},Rolling.defaultProps={size:200,sizeUnit:"px",color:"#f08d43",thickness:20,speed:1},__webpack_exports__.a=Rolling,Rolling.__docgenInfo={description:"",methods:[],displayName:"Rolling",props:{size:{defaultValue:{value:"200",computed:!1},type:{name:"number"},required:!1,description:""},sizeUnit:{defaultValue:{value:"'px'",computed:!1},type:{name:"string"},required:!1,description:""},color:{defaultValue:{value:"'#f08d43'",computed:!1},type:{name:"string"},required:!1,description:""},thickness:{defaultValue:{value:"20",computed:!1},type:{name:"number"},required:!1,description:""},speed:{defaultValue:{value:"1",computed:!1},type:{name:"number"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Rolling/Rolling.js"]={name:"Rolling",docgenInfo:Rolling.__docgenInfo,path:"src/Rolling/Rolling.js"})},229:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(18),__webpack_require__(19),__webpack_require__(22),__webpack_require__(15),__webpack_require__(20),__webpack_require__(36),__webpack_require__(56),__webpack_require__(46),__webpack_require__(3),__webpack_require__(47),__webpack_require__(57),__webpack_require__(58),__webpack_require__(17),__webpack_require__(23),__webpack_require__(24);var _emotion_core__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_16___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__),prop_types__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_17___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_17__),_helpers__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(29);function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self):call}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}function _templateObject(){var data=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]);return _templateObject=function(){return data},data}var dualring=Object(_emotion_core__WEBPACK_IMPORTED_MODULE_15__.c)(_templateObject()),DualRing=function(_React$Component){function DualRing(){return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,DualRing),_possibleConstructorReturn(this,_getPrototypeOf(DualRing).apply(this,arguments))}return function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(DualRing,react__WEBPACK_IMPORTED_MODULE_16___default.a.Component),function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(DualRing,[{key:"render",value:function render(){var scale,_this$props=this.props,size=_this$props.size,sizeUnit=_this$props.sizeUnit,thickness=_this$props.thickness,color=_this$props.color,speed=_this$props.speed,translate=size*(scale="em"===sizeUnit||"rem"===sizeUnit?Object(_helpers__WEBPACK_IMPORTED_MODULE_18__.a)(size)/200:size/200);return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_15__.b)("div",null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_15__.b)("div",{css:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_15__.a)("position:relative;width:","".concat(size).concat(sizeUnit)," !important;height:","".concat(size).concat(sizeUnit)," !important;transform:translate( -","".concat(translate).concat(sizeUnit),",-","".concat(translate).concat(sizeUnit)," ) scale(",scale,") translate( ","".concat(translate).concat(sizeUnit),",","".concat(translate).concat(sizeUnit)," );label:DualRing;")},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_15__.b)("div",{css:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_15__.a)("position:absolute;animation:",dualring," ",speed,"s linear infinite;width:160px;height:160px;top:20px;left:20px;border-radius:50%;border:",2*thickness,"px solid ",color,";border-color:",color," transparent ",color," transparent;label:DualRing;")})))}}]),DualRing}();DualRing.displayName="DualRing",DualRing.propTypes={size:prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.number,sizeUnit:prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.string,color:prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.string,thickness:prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.number,speed:prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.number},DualRing.defaultProps={size:200,sizeUnit:"px",color:"#f08d43",thickness:4,speed:1},__webpack_exports__.a=DualRing,DualRing.__docgenInfo={description:"",methods:[],displayName:"DualRing",props:{size:{defaultValue:{value:"200",computed:!1},type:{name:"number"},required:!1,description:""},sizeUnit:{defaultValue:{value:"'px'",computed:!1},type:{name:"string"},required:!1,description:""},color:{defaultValue:{value:"'#f08d43'",computed:!1},type:{name:"string"},required:!1,description:""},thickness:{defaultValue:{value:"4",computed:!1},type:{name:"number"},required:!1,description:""},speed:{defaultValue:{value:"1",computed:!1},type:{name:"number"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/DualRing/DualRing.js"]={name:"DualRing",docgenInfo:DualRing.__docgenInfo,path:"src/DualRing/DualRing.js"})},230:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(18),__webpack_require__(19),__webpack_require__(22),__webpack_require__(15),__webpack_require__(20),__webpack_require__(36),__webpack_require__(56),__webpack_require__(46),__webpack_require__(3),__webpack_require__(47),__webpack_require__(57),__webpack_require__(58),__webpack_require__(17),__webpack_require__(23),__webpack_require__(24);var _emotion_core__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_16___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__),prop_types__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_17___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_17__),_helpers__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(29);function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self):call}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}function _templateObject(){var data=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n   0%, 100% {\n    animation-timing-function: cubic-bezier(0.45, 0, 0.9, 0.55);\n  }\n  0% {\n    transform: translate(0, 0);\n  }\n  50% {\n    transform: translate(0, 108px);\n    animation-timing-function: cubic-bezier(0, 0.45, 0.55, 0.9);\n  }\n  100% {\n    transform: translate(0, 0);\n  }\n"]);return _templateObject=function(){return data},data}var ball=Object(_emotion_core__WEBPACK_IMPORTED_MODULE_15__.c)(_templateObject()),Ball=function(_React$Component){function Ball(){return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Ball),_possibleConstructorReturn(this,_getPrototypeOf(Ball).apply(this,arguments))}return function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(Ball,react__WEBPACK_IMPORTED_MODULE_16___default.a.Component),function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(Ball,[{key:"render",value:function render(){var scale,_this$props=this.props,size=_this$props.size,sizeUnit=_this$props.sizeUnit,color=_this$props.color,speed=_this$props.speed,translate=size*(scale="em"===sizeUnit||"rem"===sizeUnit?Object(_helpers__WEBPACK_IMPORTED_MODULE_18__.a)(size)/200:size/200);return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_15__.b)("div",null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_15__.b)("div",{css:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_15__.a)("position:relative;width:","".concat(size).concat(sizeUnit)," !important;height:","".concat(size).concat(sizeUnit)," !important;transform:translate( -","".concat(translate).concat(sizeUnit),",-","".concat(translate).concat(sizeUnit)," ) scale(",scale,") translate( ","".concat(translate).concat(sizeUnit),",","".concat(translate).concat(sizeUnit)," );label:Ball;")},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_15__.b)("div",{css:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_15__.a)("position:absolute;animation:",ball," ",speed,"s linear infinite;width:52px;height:52px;top:20px;left:74px;border-radius:50%;background:",color,";label:Ball;")})))}}]),Ball}();Ball.displayName="Ball",Ball.propTypes={size:prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.number,sizeUnit:prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.string,color:prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.string,thickness:prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.number,speed:prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.number},Ball.defaultProps={size:200,sizeUnit:"px",color:"#f08d43",thickness:4,speed:1},__webpack_exports__.a=Ball,Ball.__docgenInfo={description:"",methods:[],displayName:"Ball",props:{size:{defaultValue:{value:"200",computed:!1},type:{name:"number"},required:!1,description:""},sizeUnit:{defaultValue:{value:"'px'",computed:!1},type:{name:"string"},required:!1,description:""},color:{defaultValue:{value:"'#f08d43'",computed:!1},type:{name:"string"},required:!1,description:""},thickness:{defaultValue:{value:"4",computed:!1},type:{name:"number"},required:!1,description:""},speed:{defaultValue:{value:"1",computed:!1},type:{name:"number"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Ball/Ball.js"]={name:"Ball",docgenInfo:Ball.__docgenInfo,path:"src/Ball/Ball.js"})},231:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(18),__webpack_require__(19),__webpack_require__(22),__webpack_require__(15),__webpack_require__(20),__webpack_require__(89),__webpack_require__(36),__webpack_require__(56),__webpack_require__(46),__webpack_require__(3),__webpack_require__(47),__webpack_require__(57),__webpack_require__(58),__webpack_require__(17),__webpack_require__(23),__webpack_require__(24);var _emotion_core__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_17___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__),prop_types__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_18___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_18__),_helpers__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(29);function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self):call}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}function _templateObject(){var data=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n"]);return _templateObject=function(){return data},data}var spinner=Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__.c)(_templateObject());function template(i,items,degree){return"\n      &:nth-of-type(".concat(i+1,") {\n        transform: rotate(").concat(degree,"deg);\n        animation-delay: ").concat((items-(i+1))/items,"s;\n       }\n    ")}function getAnimations(items){for(var str="",i=0;i<items;i+=1)str+=template(i,items,Object(_helpers__WEBPACK_IMPORTED_MODULE_19__.b)(items)*i);return str}var Spinner=function(_React$Component){function Spinner(){return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Spinner),_possibleConstructorReturn(this,_getPrototypeOf(Spinner).apply(this,arguments))}return function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(Spinner,react__WEBPACK_IMPORTED_MODULE_17___default.a.Component),function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(Spinner,[{key:"render",value:function render(){var scale,_this$props=this.props,size=_this$props.size,sizeUnit=_this$props.sizeUnit,color=_this$props.color,speed=_this$props.speed,barCount=_this$props.barCount,barHeight=_this$props.barHeight,barWidth=_this$props.barWidth,corner=_this$props.corner,translate=size*(scale="em"===sizeUnit||"rem"===sizeUnit?Object(_helpers__WEBPACK_IMPORTED_MODULE_19__.a)(size)/200:size/200);return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__.b)("div",null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__.b)("div",{css:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__.a)("position:relative;width:","".concat(size).concat(sizeUnit)," !important;height:","".concat(size).concat(sizeUnit)," !important;transform:translate( -","".concat(translate).concat(sizeUnit),",-","".concat(translate).concat(sizeUnit)," ) scale(",scale,") translate( ","".concat(translate).concat(sizeUnit),",","".concat(translate).concat(sizeUnit)," );label:Spinner;")},Array.apply(null,{length:barCount}).map(function(e,i){return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__.b)("div",{key:i,css:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__.a)("left:94px;top:48px;position:absolute;animation:",spinner," linear ",speed,"s infinite;background:",color,";width:",2*barWidth,"px;height:",2*barHeight,"px;border-radius:",2*corner,"%;transform-origin:6px 52px;",getAnimations(barCount),"label:Spinner;")})})))}}]),Spinner}();Spinner.displayName="Spinner",Spinner.propTypes={size:prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.number,sizeUnit:prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.string,color:prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.string,thickness:prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.number,speed:prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.number,barWidth:prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.number,barHeight:prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.number,corner:prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.number,barCount:prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.number},Spinner.defaultProps={size:200,sizeUnit:"px",color:"#f08d43",thickness:4,speed:1,barWidth:6,barHeight:12,corner:20,barCount:12},__webpack_exports__.a=Spinner,Spinner.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{size:{defaultValue:{value:"200",computed:!1},type:{name:"number"},required:!1,description:""},sizeUnit:{defaultValue:{value:"'px'",computed:!1},type:{name:"string"},required:!1,description:""},color:{defaultValue:{value:"'#f08d43'",computed:!1},type:{name:"string"},required:!1,description:""},thickness:{defaultValue:{value:"4",computed:!1},type:{name:"number"},required:!1,description:""},speed:{defaultValue:{value:"1",computed:!1},type:{name:"number"},required:!1,description:""},barWidth:{defaultValue:{value:"6",computed:!1},type:{name:"number"},required:!1,description:""},barHeight:{defaultValue:{value:"12",computed:!1},type:{name:"number"},required:!1,description:""},corner:{defaultValue:{value:"20",computed:!1},type:{name:"number"},required:!1,description:""},barCount:{defaultValue:{value:"12",computed:!1},type:{name:"number"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Spinner/Spinner.js"]={name:"Spinner",docgenInfo:Spinner.__docgenInfo,path:"src/Spinner/Spinner.js"})},232:function(module,exports,__webpack_require__){__webpack_require__(233),__webpack_require__(336),module.exports=__webpack_require__(337)},29:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return convertToPx}),__webpack_require__.d(__webpack_exports__,"b",function(){return rotateDegree});var convertToPx=function(size){return 16*size},rotateDegree=function(count){return 360/count}},337:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(75),_package_json__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(226);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addParameters)({options:{brandUrl:_package_json__WEBPACK_IMPORTED_MODULE_1__.repository,showPanel:!1}}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(function loadStories(){__webpack_require__(498)},module)}.call(this,__webpack_require__(169)(module))},498:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _emotion_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(4),__webpack_require__(75)),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(227),_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(228),_src__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(229),_src__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(230),_src__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(231),_ref={name:"k008qs",styles:"display:flex;"},_ref2=Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.b)("div",{css:_ref},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.b)(_src__WEBPACK_IMPORTED_MODULE_3__.a,{size:64}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.b)(_src__WEBPACK_IMPORTED_MODULE_4__.a,{size:64}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.b)(_src__WEBPACK_IMPORTED_MODULE_5__.a,{size:64}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.b)(_src__WEBPACK_IMPORTED_MODULE_6__.a,{size:64}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.b)(_src__WEBPACK_IMPORTED_MODULE_7__.a,{size:80})),_ref3=Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.b)(_src__WEBPACK_IMPORTED_MODULE_3__.a,null),_ref4=Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.b)(_src__WEBPACK_IMPORTED_MODULE_4__.a,null),_ref5=Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.b)(_src__WEBPACK_IMPORTED_MODULE_5__.a,null),_ref6=Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.b)(_src__WEBPACK_IMPORTED_MODULE_6__.a,null),_ref7=Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.b)(_src__WEBPACK_IMPORTED_MODULE_7__.a,null);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("Spinners",module).add("All",function(){return _ref2}).add("Eclipse",function(){return _ref3}).add("Rolling",function(){return _ref4}).add("DualRing",function(){return _ref5}).add("Ball",function(){return _ref6}).add("Spinner",function(){return _ref7})}.call(this,__webpack_require__(169)(module))}},[[232,1,2]]]);
//# sourceMappingURL=main.7d915e3b6a6b94711c4e.bundle.js.map