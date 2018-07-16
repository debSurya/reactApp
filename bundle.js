/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/components/activity/activity.component.less":
/*!*********************************************************!*\
  !*** ./app/components/activity/activity.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader?url=false!../../../node_modules/less-loader/dist/cjs.js!./activity.component.less */ "./node_modules/css-loader/index.js?url=false!./node_modules/less-loader/dist/cjs.js!./app/components/activity/activity.component.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./app/components/activity/activity.component.tsx":
/*!********************************************************!*\
  !*** ./app/components/activity/activity.component.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
__webpack_require__(/*! ./activity.component.less */ "./app/components/activity/activity.component.less");
var markers_component_1 = __webpack_require__(/*! ./markers/markers.component */ "./app/components/activity/markers/markers.component.tsx");
var Activity = /** @class */ (function (_super) {
    __extends(Activity, _super);
    function Activity(props) {
        var _this = _super.call(this, props) || this;
        _this.question = 'Highlight the proper nouns';
        _this.activityDone = false;
        _this.state = {
            sentences: _this.props.questionSets[_this.props.currentPageIdx].sentences,
            selectedOption: 'word-highlight',
            markerStates: _this.resetMarkers(_this.props.questionSets[_this.props.currentPageIdx].sentences),
            correctMarkers: _this.props.questionSets[_this.props.currentPageIdx].correctMarkers,
            tickCrossStates: [],
            attemptCount: 0,
            hasTickCross: false
        };
        _this.setSelectedOption = _this.setSelectedOption.bind(_this);
        _this.markWord = _this.markWord.bind(_this);
        _this.markChar = _this.markChar.bind(_this);
        _this.validateMarkers = _this.validateMarkers.bind(_this);
        _this.clearMarkers = _this.clearMarkers.bind(_this);
        return _this;
    }
    Activity.prototype.componentWillReceiveProps = function (newProps) {
        if (this.props.currentPageIdx !== newProps.currentPageIdx) {
            this.activityDone = false;
            this.setState({
                sentences: newProps.questionSets[newProps.currentPageIdx].sentences,
                markerStates: this.resetMarkers(newProps.questionSets[newProps.currentPageIdx].sentences),
                tickCrossStates: [],
                attemptCount: 0,
                correctMarkers: newProps.questionSets[newProps.currentPageIdx].correctMarkers
            });
        }
    };
    Activity.prototype.resetMarkers = function (sentences) {
        var structure = [];
        sentences.map(function (item) {
            structure.push([]);
        });
        return structure;
    };
    Activity.prototype.clearMarkers = function () {
        this.setState({
            markerStates: this.resetMarkers(this.props.questionSets[this.props.currentPageIdx].sentences),
            tickCrossStates: [],
            hasTickCross: false
        });
    };
    Activity.prototype.setSelectedOption = function (value) {
        this.setState({
            selectedOption: value
        });
    };
    Activity.prototype.findExistingMarker = function (currentStatementStates, currentDOM, markerToSet) {
        return currentStatementStates.findIndex(function (obj) {
            if (typeof obj.charIdx !== 'undefined') {
                return (obj.wordIdx === currentDOM.parentElement.getAttribute('word-index') && obj.charIdx === currentDOM.getAttribute('char-index') && (typeof markerToSet !== 'undefined' ? obj.type === markerToSet : true));
            }
            else {
                return (obj.wordIdx === currentDOM.getAttribute('word-index') && (typeof markerToSet !== 'undefined' ? obj.type === markerToSet : true));
            }
        });
    };
    Activity.prototype.markWord = function (currentDOM) {
        var _this = this;
        var markerToSet = '';
        if (this.state.selectedOption === 'word-highlight') {
            markerToSet = 'highlighted';
        }
        else if (this.state.selectedOption === 'word-underline') {
            markerToSet = 'underlined';
        }
        this.setState(function (state) {
            var currentStamentStates = state.markerStates[parseInt(currentDOM.parentElement.getAttribute('statement-index'))];
            if (_this.findExistingMarker(currentStamentStates, currentDOM, markerToSet) === -1) {
                currentStamentStates.push({
                    type: markerToSet,
                    wordIdx: currentDOM.getAttribute('word-index')
                });
                return {
                    markerStates: state.markerStates
                };
            }
        });
    };
    Activity.prototype.markChar = function (event) {
        var _this = this;
        event.stopPropagation();
        var markerToSet = '', currentDOM = event.target;
        if (this.state.selectedOption === 'eraser') {
            this.eraseMark(currentDOM, this.state.markerStates[parseInt(currentDOM.parentElement.parentElement.getAttribute('statement-index'))]);
            return;
        }
        else if (this.state.selectedOption === 'letter-highlight') {
            markerToSet = 'colored';
        }
        else if (this.state.selectedOption === 'letter-divide') {
            markerToSet = 'divider';
        }
        markerToSet ? this.setState(function (state) {
            var currentStamentStates = state.markerStates[parseInt(currentDOM.parentElement.parentElement.getAttribute('statement-index'))];
            if (_this.findExistingMarker(currentStamentStates, currentDOM, markerToSet) === -1) {
                currentStamentStates.push({
                    type: markerToSet,
                    wordIdx: currentDOM.parentElement.getAttribute('word-index'),
                    charIdx: currentDOM.getAttribute('char-index')
                });
                return {
                    markerStates: state.markerStates
                };
            }
        }) : this.markWord(currentDOM.parentElement);
    };
    Activity.prototype.eraseMark = function (currentDOM, currentElementStates) {
        this.setState(function (state) {
            var isFound = false;
            var currentElementStates = state.markerStates[parseInt(currentDOM.parentElement.parentElement.getAttribute('statement-index'))];
            currentElementStates.map(function (obj, idx) {
                if (typeof obj.charIdx !== 'undefined') {
                    if (obj.charIdx === currentDOM.getAttribute('char-index') && obj.wordIdx === currentDOM.parentElement.getAttribute('word-index')) {
                        currentElementStates.splice(idx, 1);
                        isFound = true;
                    }
                }
                else if (obj.wordIdx === currentDOM.parentElement.getAttribute('word-index')) {
                    currentElementStates.splice(idx, 1);
                    isFound = true;
                }
            });
            if (isFound) {
                return {
                    markerStates: state.markerStates
                };
            }
        });
    };
    Activity.prototype.setMarker = function (statementIdx, wordIdx, charIdx) {
        var classToAdd = '', sentenceMarkers = this.state.markerStates[statementIdx];
        if (sentenceMarkers.length) {
            if (typeof charIdx === 'undefined') {
                sentenceMarkers.find(function (obj) {
                    classToAdd += parseInt(obj.wordIdx) === wordIdx ? ' ' + obj.type : '';
                });
            }
            else {
                sentenceMarkers.find(function (obj) {
                    classToAdd += (parseInt(obj.wordIdx) === wordIdx && parseInt(obj.charIdx) === charIdx) ? ' ' + obj.type : '';
                });
            }
        }
        return classToAdd;
    };
    Activity.prototype.showCorrectMarkers = function () {
        var _this = this;
        this.state.attemptCount = 0;
        this.activityDone = true;
        this.state.markerStates = this.resetMarkers(this.props.questionSets[this.props.currentPageIdx].sentences);
        this.state.correctMarkers.map(function (marker, currentIdx) {
            marker.idx.map(function (idxArr, index) {
                idxArr.map(function (currentIdx) {
                    _this.state.markerStates[index].push((function () {
                        switch (marker.type) {
                            case 'word-highlight':
                                return {
                                    type: 'highlighted',
                                    wordIdx: '' + currentIdx
                                };
                            case 'word-underline':
                                return {
                                    type: 'underlined',
                                    wordIdx: '' + currentIdx
                                };
                            case 'letter-highlight':
                                return {
                                    type: 'colored',
                                    wordIdx: '' + currentIdx.wordIdx,
                                    charIdx: '' + currentIdx.charIdx
                                };
                            case 'letter-divide':
                                return {
                                    type: 'divider',
                                    wordIdx: '' + currentIdx.wordIdx,
                                    charIdx: '' + currentIdx.charIdx
                                };
                        }
                    })());
                });
            });
            _this.state.tickCrossStates[currentIdx] = 'correct';
        });
    };
    Activity.prototype.validateMarkers = function () {
        var _this = this;
        this.state.tickCrossStates = [];
        if (++this.state.attemptCount == 2) {
            this.showCorrectMarkers();
        }
        else {
            var isIncorrect_1 = [], wordCheckerByUserInput_1 = function (sentenceIdx, entryIdx, currentIdx) {
                if (_this.state.correctMarkers[sentenceIdx].idx[entryIdx].indexOf(parseInt(currentIdx)) === -1) {
                    isIncorrect_1.push(true);
                }
            }, charCheckerByUserInput_1 = function (sentenceIdx, entryIdx, currentWordIdx, currentCharIdx) {
                if (_this.state.correctMarkers[sentenceIdx].idx[entryIdx].findIndex(function (item) {
                    return (item.wordIdx === parseInt(currentWordIdx) && (item.charIdx === parseInt(currentCharIdx)));
                }) === -1) {
                    isIncorrect_1.push(true);
                }
            }, checkByCorrectAnswers_1 = function (sentence, idxArr, type) {
                idxArr.map(function (correctIdx) {
                    if (sentence.findIndex(function (currentObj) {
                        if (typeof correctIdx === 'number') {
                            return (currentObj.type === type && parseInt(currentObj.wordIdx) === correctIdx);
                        }
                        else {
                            return (currentObj.type === type && parseInt(currentObj.wordIdx) === correctIdx.wordIdx && parseInt(currentObj.charIdx) === correctIdx.charIdx);
                        }
                    }) === -1) {
                        isIncorrect_1.push(true);
                    }
                });
            };
            this.state.markerStates.map(function (sentence, idx) {
                sentence.map(function (obj) {
                    if (typeof obj.charIdx === 'undefined') {
                        (obj.type === 'highlighted') ? wordCheckerByUserInput_1(0, idx, obj.wordIdx) : (obj.type === 'underlined') ? wordCheckerByUserInput_1(1, idx, obj.wordIdx) : '';
                    }
                    else {
                        (obj.type === 'colored') ? charCheckerByUserInput_1(2, idx, obj.wordIdx, obj.charIdx) : (obj.type === 'divider') ? charCheckerByUserInput_1(3, idx, obj.wordIdx, obj.charIdx) : '';
                    }
                });
                _this.state.correctMarkers.map(function (correctObj) {
                    switch (correctObj.type) {
                        case 'word-highlight':
                            checkByCorrectAnswers_1(sentence, (typeof correctObj.idx[idx] !== 'undefined' ? correctObj.idx[idx] : []), 'highlighted');
                            break;
                        case 'word-underline':
                            checkByCorrectAnswers_1(sentence, (typeof correctObj.idx[idx] !== 'undefined' ? correctObj.idx[idx] : []), 'underlined');
                            break;
                        case 'letter-highlight':
                            checkByCorrectAnswers_1(sentence, (typeof correctObj.idx[idx] !== 'undefined' ? correctObj.idx[idx] : []), 'colored');
                            break;
                        case 'letter-divide':
                            checkByCorrectAnswers_1(sentence, (typeof correctObj.idx[idx] !== 'undefined' ? correctObj.idx[idx] : []), 'divider');
                            break;
                        default:
                            return;
                    }
                });
                (!_this.state.markerStates[idx].length || isIncorrect_1.length) ? _this.state.tickCrossStates.push('incorrect') : _this.state.tickCrossStates.push('correct');
                isIncorrect_1 = [];
            });
        }
        if (this.state.tickCrossStates.length && this.state.tickCrossStates.indexOf('incorrect') === -1) {
            this.activityDone = true;
            this.props.enableNextQuestion();
        }
        this.setState({
            hasTickCross: true,
            markerStates: this.state.markerStates,
            attemptCount: this.state.attemptCount,
            tickCrossStates: this.state.tickCrossStates
        });
    };
    Activity.prototype.render = function () {
        var _this = this;
        var tickCrossDOM;
        if (this.state.hasTickCross) {
            tickCrossDOM = function (idx1) { return React.createElement("img", { src: _this.state.tickCrossStates[idx1] === 'correct' ? '../../assets/tick.png' : _this.state.tickCrossStates[idx1] === 'incorrect' ? '../../assets/cross.png' : '' }); };
        }
        else {
            tickCrossDOM = function () { };
        }
        console.log(this.state.markerStates);
        return (React.createElement("div", { className: "activity-container" },
            React.createElement("h2", { className: "question" }, this.question),
            React.createElement("div", { className: "statements-container" }, this.state.sentences.map(function (item, idx1) {
                var wordCount = item.split(' ').length;
                return React.createElement(React.Fragment, { key: 'moon2' + idx1 },
                    React.createElement("span", { className: "tick-cross" }, tickCrossDOM(idx1)),
                    React.createElement("p", { className: "sentence", key: 'moon' + idx1, "statement-index": idx1 }, item.split(' ').map(function (item, idx2) {
                        var letterCount = item.split('').length, selectedOptionClass = "word" + (_this.state.selectedOption === 'word-highlight' ? ' highlight' : _this.state.selectedOption === 'word-underline' ? ' underline' : '') + _this.setMarker(idx1, idx2);
                        return React.createElement(React.Fragment, { key: 'moon2' + idx2 },
                            React.createElement("span", { className: selectedOptionClass, "word-index": idx2 }, item.split('').map(function (item, idx3) {
                                var classNames = "" + (item !== ' ' ? 'character' : '') + (_this.state.selectedOption === 'letter-highlight' ? ' highlight' : _this.state.selectedOption === 'letter-divide' ? ' divide' : '') + (idx3 === letterCount - 1 ? ' last' : '') + _this.setMarker(idx1, idx2, idx3);
                                return React.createElement("span", { className: classNames, key: 'moon' + idx3, onClick: _this.markChar, "char-index": idx3 }, item);
                            })),
                            idx2 !== wordCount - 1 ? React.createElement("span", null, "\u00A0") : '');
                    })),
                    React.createElement("br", null));
            })),
            React.createElement(markers_component_1.Markers, { validateMarkers: this.validateMarkers, setSelectedOption: this.setSelectedOption, clearMarkers: this.clearMarkers, activityDone: this.activityDone })));
    };
    return Activity;
}(React.Component));
exports.Activity = Activity;


/***/ }),

/***/ "./app/components/activity/markers/markers.component.less":
/*!****************************************************************!*\
  !*** ./app/components/activity/markers/markers.component.less ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader?url=false!../../../../node_modules/less-loader/dist/cjs.js!./markers.component.less */ "./node_modules/css-loader/index.js?url=false!./node_modules/less-loader/dist/cjs.js!./app/components/activity/markers/markers.component.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./app/components/activity/markers/markers.component.tsx":
/*!***************************************************************!*\
  !*** ./app/components/activity/markers/markers.component.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
__webpack_require__(/*! ./markers.component.less */ "./app/components/activity/markers/markers.component.less");
var Markers = /** @class */ (function (_super) {
    __extends(Markers, _super);
    function Markers(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOptionChange = _this.handleOptionChange.bind(_this);
        _this.handleMarkerClearance = _this.handleMarkerClearance.bind(_this);
        _this.handleValidation = _this.handleValidation.bind(_this);
        return _this;
    }
    Markers.prototype.componentWillMount = function () {
        this.setState({
            selectedOption: 'word-highlight',
            activityDone: false
        });
    };
    Markers.prototype.handleOptionChange = function (event) {
        this.setState({
            selectedOption: event.target.getAttribute('data-value')
        });
        this.props.setSelectedOption(event.target.getAttribute('data-value'));
    };
    Markers.prototype.handleMarkerClearance = function () {
        this.props.clearMarkers();
    };
    Markers.prototype.handleValidation = function () {
        this.props.validateMarkers();
    };
    Markers.prototype.render = function () {
        return (React.createElement("div", { className: "master-marker-container" },
            React.createElement("div", { className: "markers-container" },
                React.createElement("div", { className: "highlight" },
                    React.createElement("img", { className: this.state.selectedOption === 'word-highlight' ? 'img-highlight active' : 'img-highlight', src: "../../../assets/lamp.png", alt: "Word Highlight", "data-value": "word-highlight", onClick: this.handleOptionChange }),
                    React.createElement("br", null),
                    React.createElement("span", { className: "img-highlight-lbl", "aria-hidden": "true" }, "Word Highlight")),
                React.createElement("div", { className: "underline" },
                    React.createElement("img", { className: this.state.selectedOption === 'word-underline' ? 'img-underline active' : 'img-underline', src: "../../../assets/ruler.png", alt: "Word Underline", "data-value": "word-underline", onClick: this.handleOptionChange }),
                    React.createElement("br", null),
                    React.createElement("span", { className: "img-underline-lbl", "aria-hidden": "true" }, "Word Underline")),
                React.createElement("div", { className: "color" },
                    React.createElement("img", { className: this.state.selectedOption === 'letter-highlight' ? 'img-color active' : 'img-color', src: "../../../assets/paintbrush.png", alt: "Letter Highlight", "data-value": "letter-highlight", onClick: this.handleOptionChange }),
                    React.createElement("br", null),
                    React.createElement("span", { className: "img-color-lbl", "aria-hidden": "true" }, "Letter Highlight")),
                React.createElement("div", { className: "divide" },
                    React.createElement("img", { className: this.state.selectedOption === 'letter-divide' ? 'img-divide active' : 'img-divide', src: "../../../assets/saw.png", alt: "Letter Divide", "data-value": "letter-divide", onClick: this.handleOptionChange }),
                    React.createElement("br", null),
                    React.createElement("span", { className: "img-divide-lbl", "aria-hidden": "true" }, "Letter Divide")),
                React.createElement("div", { className: "eraser" },
                    React.createElement("img", { className: this.state.selectedOption === 'eraser' ? 'img-eraser active' : 'img-eraser', src: "../../../assets/eraser.png", alt: "Eraser", "data-value": "eraser", onClick: this.handleOptionChange }),
                    React.createElement("br", null),
                    React.createElement("span", { className: "img-eraser-lbl", "aria-hidden": "true" }, "Eraser"))),
            React.createElement("div", { className: "validators-container" },
                React.createElement("button", { className: "reset", onClick: this.handleMarkerClearance, disabled: this.props.activityDone }, "Reset"),
                React.createElement("button", { className: "ok", onClick: this.handleValidation, disabled: this.props.activityDone }, "OK"))));
    };
    return Markers;
}(React.Component));
exports.Markers = Markers;


/***/ }),

/***/ "./app/components/app.less":
/*!*********************************!*\
  !*** ./app/components/app.less ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader?url=false!../../node_modules/less-loader/dist/cjs.js!./app.less */ "./node_modules/css-loader/index.js?url=false!./node_modules/less-loader/dist/cjs.js!./app/components/app.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./app/components/app.tsx":
/*!********************************!*\
  !*** ./app/components/app.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
__webpack_require__(/*! ./app.less */ "./app/components/app.less");
var constants_1 = __webpack_require__(/*! ../constants */ "./app/constants.tsx");
var activity_component_1 = __webpack_require__(/*! ./activity/activity.component */ "./app/components/activity/activity.component.tsx");
var navigation_component_1 = __webpack_require__(/*! ./navigation/navigation.component */ "./app/components/navigation/navigation.component.tsx");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(render) {
        var _this = _super.call(this, render) || this;
        _this.title = 'Grammar: Common and proper nouns';
        _this.questionSets = constants_1.default.questionSets;
        _this.state = {
            currentPageIdx: 0,
            lastIdx: 0
        };
        _this.setNavIdx = _this.setNavIdx.bind(_this);
        _this.enableNextQuestion = _this.enableNextQuestion.bind(_this);
        return _this;
    }
    App.prototype.setNavIdx = function (direction) {
        this.setState({
            currentPageIdx: direction === 'prev' ? this.state.currentPageIdx - 1 : this.state.currentPageIdx + 1
        });
    };
    App.prototype.enableNextQuestion = function () {
        if (this.state.currentPageIdx === this.state.lastIdx) {
            this.setState({
                lastIdx: ++this.state.lastIdx
            });
        }
    };
    App.prototype.render = function () {
        return (React.createElement("div", { className: "master-container" },
            React.createElement("div", { className: "title-container" },
                React.createElement("h2", { className: "title" }, this.title),
                React.createElement("div", { className: "buttons-container" },
                    React.createElement("button", { className: "help" }, "Help"),
                    React.createElement("button", { className: "close" }, "Close"))),
            React.createElement(activity_component_1.Activity, { currentPageIdx: this.state.currentPageIdx, questionSets: this.questionSets, enableNextQuestion: this.enableNextQuestion }),
            React.createElement(navigation_component_1.Navigation, { setNavIdx: this.setNavIdx, currentPageIdx: this.state.currentPageIdx, lastIdx: this.state.lastIdx })));
    };
    return App;
}(React.Component));
exports.App = App;


/***/ }),

/***/ "./app/components/navigation/navigation.component.less":
/*!*************************************************************!*\
  !*** ./app/components/navigation/navigation.component.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader?url=false!../../../node_modules/less-loader/dist/cjs.js!./navigation.component.less */ "./node_modules/css-loader/index.js?url=false!./node_modules/less-loader/dist/cjs.js!./app/components/navigation/navigation.component.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./app/components/navigation/navigation.component.tsx":
/*!************************************************************!*\
  !*** ./app/components/navigation/navigation.component.tsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var constants_1 = __webpack_require__(/*! ../../constants */ "./app/constants.tsx");
__webpack_require__(/*! ./navigation.component.less */ "./app/components/navigation/navigation.component.less");
var Navigation = /** @class */ (function (_super) {
    __extends(Navigation, _super);
    function Navigation(props) {
        var _this = _super.call(this, props) || this;
        _this.questionSets = constants_1.default.questionSets;
        _this.setNavIdx = _this.setNavIdx.bind(_this);
        return _this;
    }
    Navigation.prototype.setNavIdx = function (event) {
        this.props.setNavIdx(event.target.value);
    };
    Navigation.prototype.render = function () {
        var _this = this;
        var className = '';
        return (React.createElement("div", { className: "navigation-container" },
            React.createElement("div", { className: "pagination-container" },
                React.createElement("button", { className: "prev", onClick: this.setNavIdx, value: "prev", disabled: this.props.currentPageIdx === 0 }, "Prev"),
                React.createElement("div", { className: "page-holders" }, this.questionSets.map(function (item, index) {
                    className = 'page ';
                    if (index < _this.props.currentPageIdx) {
                        className += 'completed ';
                    }
                    if (index === _this.props.currentPageIdx) {
                        className += 'active';
                    }
                    return React.createElement("span", { className: className, key: "moon" + index });
                })),
                React.createElement("button", { className: "next", onClick: this.setNavIdx, value: "next", disabled: this.props.currentPageIdx === this.props.lastIdx }, "Next"))));
    };
    return Navigation;
}(React.Component));
exports.Navigation = Navigation;


/***/ }),

/***/ "./app/constants.tsx":
/*!***************************!*\
  !*** ./app/constants.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.questionSets = [
        {
            sentences: [
                'Jen lost her mittens at King School.',
                'Kids sing all day at Camp Quest.',
                'We saw bass in Bells Pond.',
                'Mel will make props for the play.'
            ],
            correctMarkers: [
                {
                    'type': 'word-highlight',
                    'idx': [[0, 5, 6], [5, 6], [4, 5], [0]]
                },
                {
                    'type': 'word-underline',
                    'idx': [[3], [0, 3], [2], [3, 6]]
                },
                {
                    'type': 'letter-highlight',
                    'idx': [[{
                                wordIdx: 0,
                                charIdx: 2
                            },
                            {
                                wordIdx: 2,
                                charIdx: 1
                            }]]
                },
                {
                    'type': 'letter-divide',
                    'idx': [[]]
                }
            ]
        },
        {
            sentences: [
                'w q qwd ,mas dmas dam sd.,masd',
                ' nfwenlkmwelmd klkdm qlmkwdlqmkw dlq ',
                ' wmnf em lmqwdq;lw kdm;lqmkwd l'
            ],
            correctMarkers: [
                {
                    'type': 'word-highlight',
                    'idx': [[1, 3], [2, 3], [4]]
                },
                {
                    'type': 'word-underline',
                    'idx': [[3], [0, 3], [2]]
                },
                {
                    'type': 'letter-highlight',
                    'idx': [[{
                                wordIdx: 0,
                                charIdx: 2
                            },
                            {
                                wordIdx: 2,
                                charIdx: 1
                            }]]
                },
                {
                    'type': 'letter-divide',
                    'idx': [[]]
                }
            ]
        },
        {
            sentences: [
                'qlw d;ql mdkqw;qwm;lqmc ;kq ;lqwkmkqn c;wm ;lqmc ;lqmc ;kqjn ',
                ',qmw dmebjwbvljww nxoi ij cpiwh eujq iwd;qlwdqwnd',
                '.ldkqwndk qdmoqiw foqwd oqwnfiwjrgo rtk oeirg eibflir oiwe fwoe f'
            ]
        }
    ];
    return Constants;
}());
exports.default = Constants;


/***/ }),

/***/ "./app/index.tsx":
/*!***********************!*\
  !*** ./app/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
var app_1 = __webpack_require__(/*! ./components/app */ "./app/components/app.tsx");
ReactDOM.render(React.createElement(app_1.App, null), document.getElementById('app'));


/***/ }),

/***/ "./node_modules/css-loader/index.js?url=false!./node_modules/less-loader/dist/cjs.js!./app/components/activity/activity.component.less":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?url=false!./node_modules/less-loader/dist/cjs.js!./app/components/activity/activity.component.less ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".statements-container {\n  padding-top: 15px;\n}\n.statements-container .tick-cross {\n  position: relative;\n  top: 1px;\n  margin-right: 10px;\n}\n.statements-container .tick-cross img {\n  width: 15px;\n}\n.statements-container .sentence {\n  font-family: sans-serif;\n  font-weight: bold;\n  font-size: 20px;\n  cursor: pointer;\n  display: inline-block;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.statements-container .sentence .word.highlighted {\n  background-color: yellow;\n}\n.statements-container .sentence .word.underlined {\n  text-decoration: underline;\n}\n.statements-container .sentence .word.highlight:hover {\n  background-color: red;\n}\n.statements-container .sentence .word.underline:hover {\n  text-decoration: underline;\n}\n.statements-container .sentence .word .character.colored {\n  color: blue;\n}\n.statements-container .sentence .word .character.divider {\n  box-shadow: 2px 0 0 0 red;\n}\n.statements-container .sentence .word .character.highlight:hover {\n  background-color: skyblue;\n}\n.statements-container .sentence .word .character.divide:not(.last):hover {\n  background-color: transparent;\n  box-shadow: 1px 0 0 0;\n}\nspan {\n  user-select: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?url=false!./node_modules/less-loader/dist/cjs.js!./app/components/activity/markers/markers.component.less":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?url=false!./node_modules/less-loader/dist/cjs.js!./app/components/activity/markers/markers.component.less ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".master-marker-container {\n  position: relative;\n  bottom: 0;\n  width: 100%;\n}\n.master-marker-container .markers-container {\n  position: relative;\n  float: left;\n  display: inline;\n  left: 20px;\n}\n.master-marker-container .markers-container div.highlight,\n.master-marker-container .markers-container div.underline,\n.master-marker-container .markers-container div.color,\n.master-marker-container .markers-container div.divide,\n.master-marker-container .markers-container div.eraser {\n  display: inline;\n  float: left;\n  margin-right: 15px;\n}\n.master-marker-container .markers-container div span {\n  color: #00ffff;\n  text-shadow: 0px 0px 2px #00ffff;\n  font-weight: 500;\n}\n.master-marker-container .markers-container div span.img-divide-lbl {\n  margin-left: 10px;\n}\n.master-marker-container .markers-container div span.img-eraser-lbl {\n  margin-left: 40px;\n}\n.master-marker-container .markers-container img.img-highlight,\n.master-marker-container .markers-container img.img-underline,\n.master-marker-container .markers-container img.img-color,\n.master-marker-container .markers-container img.img-divide,\n.master-marker-container .markers-container img.img-eraser {\n  width: 60px;\n  height: 60px;\n  margin-left: 25px;\n  cursor: pointer;\n}\n.master-marker-container .markers-container img.img-highlight:hover,\n.master-marker-container .markers-container img.img-underline:hover,\n.master-marker-container .markers-container img.img-color:hover,\n.master-marker-container .markers-container img.img-divide:hover,\n.master-marker-container .markers-container img.img-eraser:hover,\n.master-marker-container .markers-container img.img-highlight.active,\n.master-marker-container .markers-container img.img-underline.active,\n.master-marker-container .markers-container img.img-color.active,\n.master-marker-container .markers-container img.img-divide.active,\n.master-marker-container .markers-container img.img-eraser.active {\n  box-shadow: 0px 0px 5px 1px white;\n}\n.master-marker-container .validators-container {\n  position: absolute;\n  float: right;\n  display: inline;\n  right: 20px;\n}\n.master-marker-container .validators-container button.reset,\n.master-marker-container .validators-container button.ok {\n  background-color: #8c9cbf;\n  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #8c9cbf), color-stop(50%, #546a9e), color-stop(50%, #36518f), color-stop(100%, #3d5691));\n  background-image: -webkit-linear-gradient(top, #8c9cbf 0%, #546a9e 50%, #36518f 50%, #3d5691 100%);\n  background-image: -moz-linear-gradient(top, #8c9cbf 0%, #546a9e 50%, #36518f 50%, #3d5691 100%);\n  background-image: -ms-linear-gradient(top, #8c9cbf 0%, #546a9e 50%, #36518f 50%, #3d5691 100%);\n  background-image: -o-linear-gradient(top, #8c9cbf 0%, #546a9e 50%, #36518f 50%, #3d5691 100%);\n  background-image: linear-gradient(top, #8c9cbf 0%, #546a9e 50%, #36518f 50%, #3d5691 100%);\n  border: 1px solid #172d6e;\n  border-bottom: 1px solid #0e1d45;\n  border-radius: 15px;\n  -webkit-box-shadow: inset 0 1px 0 0 #b1b9cb;\n  box-shadow: inset 0 1px 0 0 #b1b9cb;\n  color: #fff;\n  font: bold 16px/1 \"helvetica neue\", helvetica, arial, sans-serif;\n  padding: 7px 0 6px 0;\n  text-decoration: none;\n  text-align: center;\n  text-shadow: 0 -1px 1px #000f4d;\n  width: 60px;\n  cursor: pointer;\n}\n.master-marker-container .validators-container button.reset:focus,\n.master-marker-container .validators-container button.ok:focus {\n  outline: none;\n  box-shadow: 0px 0px 4px 1px white;\n}\n.master-marker-container .validators-container button.reset:active,\n.master-marker-container .validators-container button.ok:active {\n  box-shadow: inset 0 0 20px 0 #1d2845, 0px 1px 1px -1px white;\n}\n.master-marker-container .validators-container button.reset[disabled],\n.master-marker-container .validators-container button.ok[disabled] {\n  cursor: not-allowed;\n  background-image: none;\n  background-color: grey;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?url=false!./node_modules/less-loader/dist/cjs.js!./app/components/app.less":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader?url=false!./node_modules/less-loader/dist/cjs.js!./app/components/app.less ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html {\n  height: 100%;\n}\nhtml body {\n  height: 98%;\n  margin-top: 0;\n  margin-bottom: 0;\n  box-shadow: 0px 0px 10px 5px;\n}\nhtml body span {\n  user-select: none;\n}\nhtml body div#app {\n  height: 100%;\n}\nhtml body div#app .master-container {\n  width: 100%;\n  height: 100%;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  background: #0f0c29;\n  /* fallback for old browsers */\n  background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #24243e, #302b63, #0f0c29);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\nhtml body div#app .master-container h2.title {\n  display: inline;\n  margin-left: 15px;\n  text-shadow: 0px 0px 2px #00ffff;\n  color: #00ffff;\n}\nhtml body div#app .master-container .activity-container {\n  height: calc(100% - 35%);\n}\nhtml body div#app .master-container .activity-container h2.question {\n  padding-left: 15px;\n  text-shadow: 0px 0px 2px #00ffff;\n  color: #00ffff;\n}\nhtml body div#app .master-container .activity-container .statements-container {\n  padding: 20px;\n  box-shadow: 0px 0px 5px 1px;\n  height: 70%;\n  margin: 15px;\n  border-radius: 25px;\n  background: #2BC0E4;\n  /* fallback for old browsers */\n  background: -webkit-linear-gradient(to left, #EAECC6, #2BC0E4);\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to left, #EAECC6, #2BC0E4);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\nhtml body div#app .master-container .buttons-container {\n  display: inline;\n  float: right;\n}\nhtml body div#app .master-container .buttons-container button.help,\nhtml body div#app .master-container .buttons-container button.close {\n  border-radius: 50px;\n  box-shadow: 0 1px 1px 2px;\n  margin-right: 15px;\n}\nhtml body div#app .master-container .buttons-container button.help {\n  background-image: url('assets/question.png');\n}\nhtml body div#app .master-container .title-container {\n  border-bottom: 2px solid #00ffff;\n  height: 50px;\n  padding-top: 20px;\n  background-color: #fffacd;\n  background: #0f0c29;\n  /* fallback for old browsers */\n  background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #24243e, #302b63, #0f0c29);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?url=false!./node_modules/less-loader/dist/cjs.js!./app/components/navigation/navigation.component.less":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?url=false!./node_modules/less-loader/dist/cjs.js!./app/components/navigation/navigation.component.less ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navigation-container {\n  bottom: 10px;\n  position: absolute;\n  width: 99%;\n  height: 40px;\n}\n.navigation-container .pagination-container {\n  min-width: 200px;\n  max-width: 400px;\n  margin: 0 auto;\n  text-align: center;\n}\n.navigation-container .pagination-container button.next {\n  border-top-right-radius: 50px;\n  border-bottom-right-radius: 50px;\n}\n.navigation-container .pagination-container button.prev {\n  border-top-left-radius: 50px;\n  border-bottom-left-radius: 50px;\n}\n.navigation-container .pagination-container .page-holders {\n  display: inline;\n}\n.navigation-container .pagination-container .page-holders span.page {\n  height: 20px;\n  width: 20px;\n  background: grey;\n  border-radius: 50px;\n  display: inline-flex;\n  top: 5px;\n  position: relative;\n  margin-left: 3px;\n  margin-right: 3px;\n}\n.navigation-container .pagination-container .page-holders span.completed {\n  background: red;\n}\n.navigation-container .pagination-container .page-holders span.active {\n  background: yellow;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvYWN0aXZpdHkvYWN0aXZpdHkuY29tcG9uZW50Lmxlc3M/NDlkMyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9hY3Rpdml0eS9hY3Rpdml0eS5jb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2FjdGl2aXR5L21hcmtlcnMvbWFya2Vycy5jb21wb25lbnQubGVzcz8zN2NjIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2FjdGl2aXR5L21hcmtlcnMvbWFya2Vycy5jb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2FwcC5sZXNzPzVlZWEiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50Lmxlc3M/OTM3ZiIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9hcHAvY29uc3RhbnRzLnRzeCIsIndlYnBhY2s6Ly8vLi9hcHAvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2FjdGl2aXR5L2FjdGl2aXR5LmNvbXBvbmVudC5sZXNzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2FjdGl2aXR5L21hcmtlcnMvbWFya2Vycy5jb21wb25lbnQubGVzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9hcHAubGVzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakZBOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBLHNEQUErQjtBQUUvQiwwR0FBbUM7QUFFbkMsNElBQXNEO0FBRXREO0lBQThCLDRCQUFlO0lBNEJ6QyxrQkFBWSxLQUFVO1FBQXRCLFlBQ0ksa0JBQU0sS0FBSyxDQUFDLFNBZ0JmO1FBcEJE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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSx1Qjs7Ozs7Ozs7Ozs7QUNBQSwwQiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2FwcC9pbmRleC50c3hcIik7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/dXJsPWZhbHNlIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FjdGl2aXR5LmNvbXBvbmVudC5sZXNzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz91cmw9ZmFsc2UhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYWN0aXZpdHkuY29tcG9uZW50Lmxlc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz91cmw9ZmFsc2UhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYWN0aXZpdHkuY29tcG9uZW50Lmxlc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCAnLi9hY3Rpdml0eS5jb21wb25lbnQubGVzcyc7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBNYXJrZXJzIH0gZnJvbSAnLi9tYXJrZXJzL21hcmtlcnMuY29tcG9uZW50JztcblxuZXhwb3J0IGNsYXNzIEFjdGl2aXR5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHN0YXRlOiB7XG4gICAgICAgIHNlbnRlbmNlczogc3RyaW5nW10sXG4gICAgICAgIHNlbGVjdGVkT3B0aW9uOiBzdHJpbmcsXG4gICAgICAgIG1hcmtlclN0YXRlczogYW55W10sXG4gICAgICAgIGF0dGVtcHRDb3VudDogbnVtYmVyLFxuICAgICAgICBjb3JyZWN0TWFya2Vyczoge1xuICAgICAgICAgICAgdHlwZTogc3RyaW5nLFxuICAgICAgICAgICAgaWR4OiBhbnlbXVxuICAgICAgICB9W10sXG4gICAgICAgIHRpY2tDcm9zc1N0YXRlczogc3RyaW5nW10sXG4gICAgICAgIGhhc1RpY2tDcm9zczogYm9vbGVhblxuICAgIH07XG4gICAgcHJvcHM6IHtcbiAgICAgICAgcXVlc3Rpb25TZXRzOiB7XG4gICAgICAgICAgICBzZW50ZW5jZXM6IHN0cmluZ1tdLFxuICAgICAgICAgICAgY29ycmVjdE1hcmtlcnM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgaWR4OiBhbnlbXVxuICAgICAgICAgICAgfVtdXG4gICAgICAgIH1bXSxcbiAgICAgICAgY3VycmVudFBhZ2VJZHg6IG51bWJlcixcbiAgICAgICAgZW5hYmxlTmV4dFF1ZXN0aW9uOiBGdW5jdGlvblxuICAgIH07XG4gICAgcXVlc3Rpb246IHN0cmluZyA9ICdIaWdobGlnaHQgdGhlIHByb3BlciBub3Vucyc7XG4gICAgYWN0aXZpdHlEb25lOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2VudGVuY2VzOiB0aGlzLnByb3BzLnF1ZXN0aW9uU2V0c1t0aGlzLnByb3BzLmN1cnJlbnRQYWdlSWR4XS5zZW50ZW5jZXMsXG4gICAgICAgICAgICBzZWxlY3RlZE9wdGlvbjogJ3dvcmQtaGlnaGxpZ2h0JyxcbiAgICAgICAgICAgIG1hcmtlclN0YXRlczogdGhpcy5yZXNldE1hcmtlcnModGhpcy5wcm9wcy5xdWVzdGlvblNldHNbdGhpcy5wcm9wcy5jdXJyZW50UGFnZUlkeF0uc2VudGVuY2VzKSxcbiAgICAgICAgICAgIGNvcnJlY3RNYXJrZXJzOiB0aGlzLnByb3BzLnF1ZXN0aW9uU2V0c1t0aGlzLnByb3BzLmN1cnJlbnRQYWdlSWR4XS5jb3JyZWN0TWFya2VycyxcbiAgICAgICAgICAgIHRpY2tDcm9zc1N0YXRlczogW10sXG4gICAgICAgICAgICBhdHRlbXB0Q291bnQ6IDAsXG4gICAgICAgICAgICBoYXNUaWNrQ3Jvc3M6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRPcHRpb24gPSB0aGlzLnNldFNlbGVjdGVkT3B0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubWFya1dvcmQgPSB0aGlzLm1hcmtXb3JkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubWFya0NoYXIgPSB0aGlzLm1hcmtDaGFyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudmFsaWRhdGVNYXJrZXJzID0gdGhpcy52YWxpZGF0ZU1hcmtlcnMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jbGVhck1hcmtlcnMgPSB0aGlzLmNsZWFyTWFya2Vycy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHM6IHtcbiAgICAgICAgY3VycmVudFBhZ2VJZHg6IG51bWJlcixcbiAgICAgICAgcXVlc3Rpb25TZXRzOiB7XG4gICAgICAgICAgICBjb3JyZWN0TWFya2VyczogYW55W10sXG4gICAgICAgICAgICBzZW50ZW5jZXM6IHN0cmluZ1tdXG4gICAgICAgIH1bXVxuICAgIH0pIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY3VycmVudFBhZ2VJZHggIT09IG5ld1Byb3BzLmN1cnJlbnRQYWdlSWR4KSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2aXR5RG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc2VudGVuY2VzOiBuZXdQcm9wcy5xdWVzdGlvblNldHNbbmV3UHJvcHMuY3VycmVudFBhZ2VJZHhdLnNlbnRlbmNlcyxcbiAgICAgICAgICAgICAgICBtYXJrZXJTdGF0ZXM6IHRoaXMucmVzZXRNYXJrZXJzKG5ld1Byb3BzLnF1ZXN0aW9uU2V0c1tuZXdQcm9wcy5jdXJyZW50UGFnZUlkeF0uc2VudGVuY2VzKSxcbiAgICAgICAgICAgICAgICB0aWNrQ3Jvc3NTdGF0ZXM6IFtdLFxuICAgICAgICAgICAgICAgIGF0dGVtcHRDb3VudDogMCxcbiAgICAgICAgICAgICAgICBjb3JyZWN0TWFya2VyczogbmV3UHJvcHMucXVlc3Rpb25TZXRzW25ld1Byb3BzLmN1cnJlbnRQYWdlSWR4XS5jb3JyZWN0TWFya2Vyc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXNldE1hcmtlcnMoc2VudGVuY2VzOiBzdHJpbmdbXSkge1xuICAgICAgICBsZXQgc3RydWN0dXJlOiBhbnlbXVtdID0gW107XG4gICAgICAgIHNlbnRlbmNlcy5tYXAoKGl0ZW06IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgc3RydWN0dXJlLnB1c2goW10pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHN0cnVjdHVyZTtcbiAgICB9XG5cbiAgICBjbGVhck1hcmtlcnMoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbWFya2VyU3RhdGVzOiB0aGlzLnJlc2V0TWFya2Vycyh0aGlzLnByb3BzLnF1ZXN0aW9uU2V0c1t0aGlzLnByb3BzLmN1cnJlbnRQYWdlSWR4XS5zZW50ZW5jZXMpLFxuICAgICAgICAgICAgdGlja0Nyb3NzU3RhdGVzOiBbXSxcbiAgICAgICAgICAgIGhhc1RpY2tDcm9zczogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0U2VsZWN0ZWRPcHRpb24odmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmaW5kRXhpc3RpbmdNYXJrZXIoY3VycmVudFN0YXRlbWVudFN0YXRlczogYW55LCBjdXJyZW50RE9NOiBIVE1MU3BhbkVsZW1lbnQsIG1hcmtlclRvU2V0Pzogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50U3RhdGVtZW50U3RhdGVzLmZpbmRJbmRleCgob2JqOiB7XG4gICAgICAgICAgICB3b3JkSWR4OiBzdHJpbmcsXG4gICAgICAgICAgICBjaGFySWR4OiBzdHJpbmcsXG4gICAgICAgICAgICB0eXBlOiBzdHJpbmdcbiAgICAgICAgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmouY2hhcklkeCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKG9iai53b3JkSWR4ID09PSBjdXJyZW50RE9NLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCd3b3JkLWluZGV4JykgJiYgb2JqLmNoYXJJZHggPT09IGN1cnJlbnRET00uZ2V0QXR0cmlidXRlKCdjaGFyLWluZGV4JykgJiYgKHR5cGVvZiBtYXJrZXJUb1NldCAhPT0gJ3VuZGVmaW5lZCcgPyBvYmoudHlwZSA9PT0gbWFya2VyVG9TZXQgOiB0cnVlKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAob2JqLndvcmRJZHggPT09IGN1cnJlbnRET00uZ2V0QXR0cmlidXRlKCd3b3JkLWluZGV4JykgJiYgKHR5cGVvZiBtYXJrZXJUb1NldCAhPT0gJ3VuZGVmaW5lZCcgPyBvYmoudHlwZSA9PT0gbWFya2VyVG9TZXQgOiB0cnVlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG1hcmtXb3JkKGN1cnJlbnRET006IEhUTUxTcGFuRWxlbWVudCkge1xuICAgICAgICBsZXQgbWFya2VyVG9TZXQgPSAnJztcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRPcHRpb24gPT09ICd3b3JkLWhpZ2hsaWdodCcpIHtcbiAgICAgICAgICAgIG1hcmtlclRvU2V0ID0gJ2hpZ2hsaWdodGVkJztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkT3B0aW9uID09PSAnd29yZC11bmRlcmxpbmUnKSB7XG4gICAgICAgICAgICBtYXJrZXJUb1NldCA9ICd1bmRlcmxpbmVkJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKChzdGF0ZTogYW55KSA9PiB7XG4gICAgICAgICAgICBsZXQgY3VycmVudFN0YW1lbnRTdGF0ZXMgPSBzdGF0ZS5tYXJrZXJTdGF0ZXNbcGFyc2VJbnQoY3VycmVudERPTS5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnc3RhdGVtZW50LWluZGV4JykpXTtcbiAgICAgICAgICAgIGlmICh0aGlzLmZpbmRFeGlzdGluZ01hcmtlcihjdXJyZW50U3RhbWVudFN0YXRlcywgY3VycmVudERPTSwgbWFya2VyVG9TZXQpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTdGFtZW50U3RhdGVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBtYXJrZXJUb1NldCxcbiAgICAgICAgICAgICAgICAgICAgd29yZElkeDogY3VycmVudERPTS5nZXRBdHRyaWJ1dGUoJ3dvcmQtaW5kZXgnKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmtlclN0YXRlczogc3RhdGUubWFya2VyU3RhdGVzXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbWFya0NoYXIoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTFNwYW5FbGVtZW50Pikge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgbGV0IG1hcmtlclRvU2V0ID0gJycsXG4gICAgICAgICAgICBjdXJyZW50RE9NID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxTcGFuRWxlbWVudDtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRPcHRpb24gPT09ICdlcmFzZXInKSB7XG4gICAgICAgICAgICB0aGlzLmVyYXNlTWFyayhjdXJyZW50RE9NLCB0aGlzLnN0YXRlLm1hcmtlclN0YXRlc1twYXJzZUludChjdXJyZW50RE9NLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3N0YXRlbWVudC1pbmRleCcpKV0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRPcHRpb24gPT09ICdsZXR0ZXItaGlnaGxpZ2h0Jykge1xuICAgICAgICAgICAgbWFya2VyVG9TZXQgPSAnY29sb3JlZCc7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZE9wdGlvbiA9PT0gJ2xldHRlci1kaXZpZGUnKSB7XG4gICAgICAgICAgICBtYXJrZXJUb1NldCA9ICdkaXZpZGVyJztcbiAgICAgICAgfVxuICAgICAgICBtYXJrZXJUb1NldCA/IHRoaXMuc2V0U3RhdGUoKHN0YXRlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50U3RhbWVudFN0YXRlcyA9IHN0YXRlLm1hcmtlclN0YXRlc1twYXJzZUludChjdXJyZW50RE9NLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3N0YXRlbWVudC1pbmRleCcpKV07XG4gICAgICAgICAgICBpZiAodGhpcy5maW5kRXhpc3RpbmdNYXJrZXIoY3VycmVudFN0YW1lbnRTdGF0ZXMsIGN1cnJlbnRET00sIG1hcmtlclRvU2V0KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RhbWVudFN0YXRlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogbWFya2VyVG9TZXQsXG4gICAgICAgICAgICAgICAgICAgIHdvcmRJZHg6IGN1cnJlbnRET00ucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3dvcmQtaW5kZXgnKSxcbiAgICAgICAgICAgICAgICAgICAgY2hhcklkeDogY3VycmVudERPTS5nZXRBdHRyaWJ1dGUoJ2NoYXItaW5kZXgnKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmtlclN0YXRlczogc3RhdGUubWFya2VyU3RhdGVzXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkgOiB0aGlzLm1hcmtXb3JkKGN1cnJlbnRET00ucGFyZW50RWxlbWVudCk7XG4gICAgfVxuXG4gICAgZXJhc2VNYXJrKGN1cnJlbnRET006IEhUTUxTcGFuRWxlbWVudCwgY3VycmVudEVsZW1lbnRTdGF0ZXM6IGFueVtdKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGxldCBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50RWxlbWVudFN0YXRlcyA9IHN0YXRlLm1hcmtlclN0YXRlc1twYXJzZUludChjdXJyZW50RE9NLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3N0YXRlbWVudC1pbmRleCcpKV07XG4gICAgICAgICAgICBjdXJyZW50RWxlbWVudFN0YXRlcy5tYXAoKG9iajogYW55LCBpZHg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqLmNoYXJJZHggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmouY2hhcklkeCA9PT0gY3VycmVudERPTS5nZXRBdHRyaWJ1dGUoJ2NoYXItaW5kZXgnKSAmJiBvYmoud29yZElkeCA9PT0gY3VycmVudERPTS5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnd29yZC1pbmRleCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RWxlbWVudFN0YXRlcy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvYmoud29yZElkeCA9PT0gY3VycmVudERPTS5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnd29yZC1pbmRleCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50U3RhdGVzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICAgICAgICAgICAgICBpc0ZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChpc0ZvdW5kKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbWFya2VyU3RhdGVzOiBzdGF0ZS5tYXJrZXJTdGF0ZXNcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRNYXJrZXIoc3RhdGVtZW50SWR4OiBudW1iZXIsIHdvcmRJZHg6IG51bWJlciwgY2hhcklkeD86IG51bWJlcikge1xuICAgICAgICBsZXQgY2xhc3NUb0FkZCA9ICcnLFxuICAgICAgICAgICAgc2VudGVuY2VNYXJrZXJzID0gdGhpcy5zdGF0ZS5tYXJrZXJTdGF0ZXNbc3RhdGVtZW50SWR4XTtcbiAgICAgICAgaWYgKHNlbnRlbmNlTWFya2Vycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2hhcklkeCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBzZW50ZW5jZU1hcmtlcnMuZmluZCgob2JqOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NUb0FkZCArPSBwYXJzZUludChvYmoud29yZElkeCkgPT09IHdvcmRJZHggPyAnICcgKyBvYmoudHlwZSA6ICcnO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZW50ZW5jZU1hcmtlcnMuZmluZCgob2JqOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NUb0FkZCArPSAocGFyc2VJbnQob2JqLndvcmRJZHgpID09PSB3b3JkSWR4ICYmIHBhcnNlSW50KG9iai5jaGFySWR4KSA9PT0gY2hhcklkeCkgPyAnICcgKyBvYmoudHlwZSA6ICcnO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGFzc1RvQWRkO1xuICAgIH1cblxuICAgIHNob3dDb3JyZWN0TWFya2VycygpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5hdHRlbXB0Q291bnQgPSAwO1xuICAgICAgICB0aGlzLmFjdGl2aXR5RG9uZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc3RhdGUubWFya2VyU3RhdGVzID0gdGhpcy5yZXNldE1hcmtlcnModGhpcy5wcm9wcy5xdWVzdGlvblNldHNbdGhpcy5wcm9wcy5jdXJyZW50UGFnZUlkeF0uc2VudGVuY2VzKTtcbiAgICAgICAgdGhpcy5zdGF0ZS5jb3JyZWN0TWFya2Vycy5tYXAoKG1hcmtlcjoge1xuICAgICAgICAgICAgdHlwZTogc3RyaW5nLFxuICAgICAgICAgICAgaWR4OiBhbnlbXVtdXG4gICAgICAgIH0sIGN1cnJlbnRJZHg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgbWFya2VyLmlkeC5tYXAoKGlkeEFycjogYW55W10sIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICBpZHhBcnIubWFwKChjdXJyZW50SWR4OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5tYXJrZXJTdGF0ZXNbaW5kZXhdLnB1c2goKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAobWFya2VyLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd3b3JkLWhpZ2hsaWdodCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaGlnaGxpZ2h0ZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29yZElkeDogJycgKyBjdXJyZW50SWR4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnd29yZC11bmRlcmxpbmUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3VuZGVybGluZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29yZElkeDogJycgKyBjdXJyZW50SWR4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnbGV0dGVyLWhpZ2hsaWdodCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnY29sb3JlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JkSWR4OiAnJyArIGN1cnJlbnRJZHgud29yZElkeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJJZHg6ICcnICsgY3VycmVudElkeC5jaGFySWR4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnbGV0dGVyLWRpdmlkZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGl2aWRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JkSWR4OiAnJyArIGN1cnJlbnRJZHgud29yZElkeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJJZHg6ICcnICsgY3VycmVudElkeC5jaGFySWR4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pKCkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGUudGlja0Nyb3NzU3RhdGVzW2N1cnJlbnRJZHhdID0gJ2NvcnJlY3QnO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZU1hcmtlcnMoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUudGlja0Nyb3NzU3RhdGVzID0gW107XG4gICAgICAgIGlmICgrK3RoaXMuc3RhdGUuYXR0ZW1wdENvdW50ID09IDIpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvcnJlY3RNYXJrZXJzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgaXNJbmNvcnJlY3Q6IGJvb2xlYW5bXSA9IFtdLFxuICAgICAgICAgICAgICAgIHdvcmRDaGVja2VyQnlVc2VySW5wdXQgPSAoc2VudGVuY2VJZHg6IG51bWJlciwgZW50cnlJZHg6IG51bWJlciwgY3VycmVudElkeDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmNvcnJlY3RNYXJrZXJzW3NlbnRlbmNlSWR4XS5pZHhbZW50cnlJZHhdLmluZGV4T2YocGFyc2VJbnQoY3VycmVudElkeCkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNJbmNvcnJlY3QucHVzaCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2hhckNoZWNrZXJCeVVzZXJJbnB1dCA9IChzZW50ZW5jZUlkeDogbnVtYmVyLCBlbnRyeUlkeDogbnVtYmVyLCBjdXJyZW50V29yZElkeDogc3RyaW5nLCBjdXJyZW50Q2hhcklkeDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmNvcnJlY3RNYXJrZXJzW3NlbnRlbmNlSWR4XS5pZHhbZW50cnlJZHhdLmZpbmRJbmRleCgoaXRlbToge1xuICAgICAgICAgICAgICAgICAgICAgICAgd29yZElkeDogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcklkeDogbnVtYmVyXG4gICAgICAgICAgICAgICAgICAgIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoaXRlbS53b3JkSWR4ID09PSBwYXJzZUludChjdXJyZW50V29yZElkeCkgJiYgKGl0ZW0uY2hhcklkeCA9PT0gcGFyc2VJbnQoY3VycmVudENoYXJJZHgpKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNJbmNvcnJlY3QucHVzaCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2hlY2tCeUNvcnJlY3RBbnN3ZXJzID0gKHNlbnRlbmNlOiBhbnksIGlkeEFycjogYW55W10sIHR5cGU6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZHhBcnIubWFwKChjb3JyZWN0SWR4OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZW50ZW5jZS5maW5kSW5kZXgoKGN1cnJlbnRPYmo6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd29yZElkeDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJJZHg6IHN0cmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29ycmVjdElkeCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChjdXJyZW50T2JqLnR5cGUgPT09IHR5cGUgJiYgcGFyc2VJbnQoY3VycmVudE9iai53b3JkSWR4KSA9PT0gY29ycmVjdElkeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChjdXJyZW50T2JqLnR5cGUgPT09IHR5cGUgJiYgcGFyc2VJbnQoY3VycmVudE9iai53b3JkSWR4KSA9PT0gY29ycmVjdElkeC53b3JkSWR4ICYmIHBhcnNlSW50KGN1cnJlbnRPYmouY2hhcklkeCkgPT09IGNvcnJlY3RJZHguY2hhcklkeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbmNvcnJlY3QucHVzaCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5tYXJrZXJTdGF0ZXMubWFwKChzZW50ZW5jZTogYW55LCBpZHg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgIHNlbnRlbmNlLm1hcCgob2JqOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgd29yZElkeDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICBjaGFySWR4OiBzdHJpbmdcbiAgICAgICAgICAgICAgICB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqLmNoYXJJZHggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAob2JqLnR5cGUgPT09ICdoaWdobGlnaHRlZCcpID8gd29yZENoZWNrZXJCeVVzZXJJbnB1dCgwLCBpZHgsIG9iai53b3JkSWR4KSA6IChvYmoudHlwZSA9PT0gJ3VuZGVybGluZWQnKSA/IHdvcmRDaGVja2VyQnlVc2VySW5wdXQoMSwgaWR4LCBvYmoud29yZElkeCkgOiAnJztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIChvYmoudHlwZSA9PT0gJ2NvbG9yZWQnKSA/IGNoYXJDaGVja2VyQnlVc2VySW5wdXQoMiwgaWR4LCBvYmoud29yZElkeCwgb2JqLmNoYXJJZHgpIDogKG9iai50eXBlID09PSAnZGl2aWRlcicpID8gY2hhckNoZWNrZXJCeVVzZXJJbnB1dCgzLCBpZHgsIG9iai53b3JkSWR4LCBvYmouY2hhcklkeCkgOiAnJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb3JyZWN0TWFya2Vycy5tYXAoKGNvcnJlY3RPYmo6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICBpZHg6IGFueVtdXG4gICAgICAgICAgICAgICAgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGNvcnJlY3RPYmoudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnd29yZC1oaWdobGlnaHQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrQnlDb3JyZWN0QW5zd2VycyhzZW50ZW5jZSwgKHR5cGVvZiBjb3JyZWN0T2JqLmlkeFtpZHhdICE9PSAndW5kZWZpbmVkJyA/IGNvcnJlY3RPYmouaWR4W2lkeF0gOiBbXSksICdoaWdobGlnaHRlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnd29yZC11bmRlcmxpbmUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrQnlDb3JyZWN0QW5zd2VycyhzZW50ZW5jZSwgKHR5cGVvZiBjb3JyZWN0T2JqLmlkeFtpZHhdICE9PSAndW5kZWZpbmVkJyA/IGNvcnJlY3RPYmouaWR4W2lkeF0gOiBbXSksICd1bmRlcmxpbmVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdsZXR0ZXItaGlnaGxpZ2h0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja0J5Q29ycmVjdEFuc3dlcnMoc2VudGVuY2UsICh0eXBlb2YgY29ycmVjdE9iai5pZHhbaWR4XSAhPT0gJ3VuZGVmaW5lZCcgPyBjb3JyZWN0T2JqLmlkeFtpZHhdIDogW10pLCAnY29sb3JlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnbGV0dGVyLWRpdmlkZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tCeUNvcnJlY3RBbnN3ZXJzKHNlbnRlbmNlLCAodHlwZW9mIGNvcnJlY3RPYmouaWR4W2lkeF0gIT09ICd1bmRlZmluZWQnID8gY29ycmVjdE9iai5pZHhbaWR4XSA6IFtdKSwgJ2RpdmlkZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAoIXRoaXMuc3RhdGUubWFya2VyU3RhdGVzW2lkeF0ubGVuZ3RoIHx8IGlzSW5jb3JyZWN0Lmxlbmd0aCkgPyB0aGlzLnN0YXRlLnRpY2tDcm9zc1N0YXRlcy5wdXNoKCdpbmNvcnJlY3QnKSA6IHRoaXMuc3RhdGUudGlja0Nyb3NzU3RhdGVzLnB1c2goJ2NvcnJlY3QnKTtcbiAgICAgICAgICAgICAgICBpc0luY29ycmVjdCA9IFtdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS50aWNrQ3Jvc3NTdGF0ZXMubGVuZ3RoICYmIHRoaXMuc3RhdGUudGlja0Nyb3NzU3RhdGVzLmluZGV4T2YoJ2luY29ycmVjdCcpID09PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5hY3Rpdml0eURvbmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5lbmFibGVOZXh0UXVlc3Rpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaGFzVGlja0Nyb3NzOiB0cnVlLFxuICAgICAgICAgICAgbWFya2VyU3RhdGVzOiB0aGlzLnN0YXRlLm1hcmtlclN0YXRlcyxcbiAgICAgICAgICAgIGF0dGVtcHRDb3VudDogdGhpcy5zdGF0ZS5hdHRlbXB0Q291bnQsXG4gICAgICAgICAgICB0aWNrQ3Jvc3NTdGF0ZXM6IHRoaXMuc3RhdGUudGlja0Nyb3NzU3RhdGVzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHRpY2tDcm9zc0RPTTogRnVuY3Rpb247XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmhhc1RpY2tDcm9zcykge1xuICAgICAgICAgICAgdGlja0Nyb3NzRE9NID0gKGlkeDE6IG51bWJlcikgPT4gPGltZyBzcmM9e3RoaXMuc3RhdGUudGlja0Nyb3NzU3RhdGVzW2lkeDFdID09PSAnY29ycmVjdCcgPyAnLi4vLi4vYXNzZXRzL3RpY2sucG5nJyA6IHRoaXMuc3RhdGUudGlja0Nyb3NzU3RhdGVzW2lkeDFdID09PSAnaW5jb3JyZWN0JyA/ICcuLi8uLi9hc3NldHMvY3Jvc3MucG5nJyA6ICcnfSAvPjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRpY2tDcm9zc0RPTSA9ICgpID0+IHsgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLm1hcmtlclN0YXRlcyk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGl2aXR5LWNvbnRhaW5lclwiID5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicXVlc3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucXVlc3Rpb259XG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRlbWVudHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VudGVuY2VzLm1hcCgoaXRlbTogc3RyaW5nLCBpZHgxOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgd29yZENvdW50ID0gaXRlbS5zcGxpdCgnICcpLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50IGtleT17J21vb24yJyArIGlkeDF9PjxzcGFuIGNsYXNzTmFtZT1cInRpY2stY3Jvc3NcIj57dGlja0Nyb3NzRE9NKGlkeDEpfTwvc3Bhbj48cCBjbGFzc05hbWU9XCJzZW50ZW5jZVwiIGtleT17J21vb24nICsgaWR4MX0gc3RhdGVtZW50LWluZGV4PXtpZHgxfT57aXRlbS5zcGxpdCgnICcpLm1hcCgoaXRlbSwgaWR4MikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGV0dGVyQ291bnQgPSBpdGVtLnNwbGl0KCcnKS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbkNsYXNzID0gYHdvcmQke3RoaXMuc3RhdGUuc2VsZWN0ZWRPcHRpb24gPT09ICd3b3JkLWhpZ2hsaWdodCcgPyAnIGhpZ2hsaWdodCcgOiB0aGlzLnN0YXRlLnNlbGVjdGVkT3B0aW9uID09PSAnd29yZC11bmRlcmxpbmUnID8gJyB1bmRlcmxpbmUnIDogJyd9JHt0aGlzLnNldE1hcmtlcihpZHgxLCBpZHgyKX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50IGtleT17J21vb24yJyArIGlkeDJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzZWxlY3RlZE9wdGlvbkNsYXNzfSB3b3JkLWluZGV4PXtpZHgyfT57aXRlbS5zcGxpdCgnJykubWFwKChpdGVtLCBpZHgzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNsYXNzTmFtZXMgPSBgJHtpdGVtICE9PSAnICcgPyAnY2hhcmFjdGVyJyA6ICcnfSR7dGhpcy5zdGF0ZS5zZWxlY3RlZE9wdGlvbiA9PT0gJ2xldHRlci1oaWdobGlnaHQnID8gJyBoaWdobGlnaHQnIDogdGhpcy5zdGF0ZS5zZWxlY3RlZE9wdGlvbiA9PT0gJ2xldHRlci1kaXZpZGUnID8gJyBkaXZpZGUnIDogJyd9JHtpZHgzID09PSBsZXR0ZXJDb3VudCAtIDEgPyAnIGxhc3QnIDogJyd9JHt0aGlzLnNldE1hcmtlcihpZHgxLCBpZHgyLCBpZHgzKX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9e2NsYXNzTmFtZXN9IGtleT17J21vb24nICsgaWR4M30gb25DbGljaz17dGhpcy5tYXJrQ2hhcn0gY2hhci1pbmRleD17aWR4M30+e2l0ZW19PC9zcGFuPjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpZHgyICE9PSB3b3JkQ291bnQgLSAxID8gPHNwYW4+Jm5ic3A7PC9zcGFuPiA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX08L3A+PGJyIC8+PC9SZWFjdC5GcmFnbWVudD47XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPE1hcmtlcnMgdmFsaWRhdGVNYXJrZXJzPXt0aGlzLnZhbGlkYXRlTWFya2Vyc30gc2V0U2VsZWN0ZWRPcHRpb249e3RoaXMuc2V0U2VsZWN0ZWRPcHRpb259IGNsZWFyTWFya2Vycz17dGhpcy5jbGVhck1hcmtlcnN9IGFjdGl2aXR5RG9uZT17dGhpcy5hY3Rpdml0eURvbmV9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3VybD1mYWxzZSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYXJrZXJzLmNvbXBvbmVudC5sZXNzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz91cmw9ZmFsc2UhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFya2Vycy5jb21wb25lbnQubGVzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3VybD1mYWxzZSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYXJrZXJzLmNvbXBvbmVudC5sZXNzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgJy4vbWFya2Vycy5jb21wb25lbnQubGVzcyc7XG5cbmV4cG9ydCBjbGFzcyBNYXJrZXJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHN0YXRlOiB7XG4gICAgICAgIHNlbGVjdGVkT3B0aW9uOiBzdHJpbmdcbiAgICB9O1xuICAgIHByb3BzOiB7XG4gICAgICAgIHNldFNlbGVjdGVkT3B0aW9uOiBGdW5jdGlvbixcbiAgICAgICAgY2xlYXJNYXJrZXJzOiBGdW5jdGlvbixcbiAgICAgICAgdmFsaWRhdGVNYXJrZXJzOiBGdW5jdGlvbixcbiAgICAgICAgYWN0aXZpdHlEb25lOiBib29sZWFuXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmhhbmRsZU9wdGlvbkNoYW5nZSA9IHRoaXMuaGFuZGxlT3B0aW9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlTWFya2VyQ2xlYXJhbmNlID0gdGhpcy5oYW5kbGVNYXJrZXJDbGVhcmFuY2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVWYWxpZGF0aW9uID0gdGhpcy5oYW5kbGVWYWxpZGF0aW9uLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uOiAnd29yZC1oaWdobGlnaHQnLFxuICAgICAgICAgICAgYWN0aXZpdHlEb25lOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVPcHRpb25DaGFuZ2UoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MSW1hZ2VFbGVtZW50Pikge1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb246IChldmVudC50YXJnZXQgYXMgSFRNTEltYWdlRWxlbWVudCkuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJylcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucHJvcHMuc2V0U2VsZWN0ZWRPcHRpb24oKGV2ZW50LnRhcmdldCBhcyBIVE1MSW1hZ2VFbGVtZW50KS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKSk7XG4gICAgfVxuXG4gICAgaGFuZGxlTWFya2VyQ2xlYXJhbmNlKCkge1xuICAgICAgICB0aGlzLnByb3BzLmNsZWFyTWFya2VycygpO1xuICAgIH1cblxuICAgIGhhbmRsZVZhbGlkYXRpb24oKSB7XG4gICAgICAgIHRoaXMucHJvcHMudmFsaWRhdGVNYXJrZXJzKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXN0ZXItbWFya2VyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFya2Vycy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWdobGlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnNlbGVjdGVkT3B0aW9uID09PSAnd29yZC1oaWdobGlnaHQnID8gJ2ltZy1oaWdobGlnaHQgYWN0aXZlJyA6ICdpbWctaGlnaGxpZ2h0J30gc3JjPVwiLi4vLi4vLi4vYXNzZXRzL2xhbXAucG5nXCIgYWx0PVwiV29yZCBIaWdobGlnaHRcIiBkYXRhLXZhbHVlPVwid29yZC1oaWdobGlnaHRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZU9wdGlvbkNoYW5nZX0gLz48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImltZy1oaWdobGlnaHQtbGJsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+V29yZCBIaWdobGlnaHQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVuZGVybGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRPcHRpb24gPT09ICd3b3JkLXVuZGVybGluZScgPyAnaW1nLXVuZGVybGluZSBhY3RpdmUnIDogJ2ltZy11bmRlcmxpbmUnfSBzcmM9XCIuLi8uLi8uLi9hc3NldHMvcnVsZXIucG5nXCIgYWx0PVwiV29yZCBVbmRlcmxpbmVcIiBkYXRhLXZhbHVlPVwid29yZC11bmRlcmxpbmVcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZU9wdGlvbkNoYW5nZX0gLz48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImltZy11bmRlcmxpbmUtbGJsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+V29yZCBVbmRlcmxpbmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5zZWxlY3RlZE9wdGlvbiA9PT0gJ2xldHRlci1oaWdobGlnaHQnID8gJ2ltZy1jb2xvciBhY3RpdmUnIDogJ2ltZy1jb2xvcid9IHNyYz1cIi4uLy4uLy4uL2Fzc2V0cy9wYWludGJydXNoLnBuZ1wiIGFsdD1cIkxldHRlciBIaWdobGlnaHRcIiBkYXRhLXZhbHVlPVwibGV0dGVyLWhpZ2hsaWdodFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlT3B0aW9uQ2hhbmdlfSAvPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW1nLWNvbG9yLWxibFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPkxldHRlciBIaWdobGlnaHQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRPcHRpb24gPT09ICdsZXR0ZXItZGl2aWRlJyA/ICdpbWctZGl2aWRlIGFjdGl2ZScgOiAnaW1nLWRpdmlkZSd9IHNyYz1cIi4uLy4uLy4uL2Fzc2V0cy9zYXcucG5nXCIgYWx0PVwiTGV0dGVyIERpdmlkZVwiIGRhdGEtdmFsdWU9XCJsZXR0ZXItZGl2aWRlXCIgb25DbGljaz17dGhpcy5oYW5kbGVPcHRpb25DaGFuZ2V9IC8+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbWctZGl2aWRlLWxibFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPkxldHRlciBEaXZpZGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVyYXNlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRPcHRpb24gPT09ICdlcmFzZXInID8gJ2ltZy1lcmFzZXIgYWN0aXZlJyA6ICdpbWctZXJhc2VyJ30gc3JjPVwiLi4vLi4vLi4vYXNzZXRzL2VyYXNlci5wbmdcIiBhbHQ9XCJFcmFzZXJcIiBkYXRhLXZhbHVlPVwiZXJhc2VyXCIgb25DbGljaz17dGhpcy5oYW5kbGVPcHRpb25DaGFuZ2V9IC8+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbWctZXJhc2VyLWxibFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPkVyYXNlcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YWxpZGF0b3JzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInJlc2V0XCIgb25DbGljaz17dGhpcy5oYW5kbGVNYXJrZXJDbGVhcmFuY2V9IGRpc2FibGVkPXt0aGlzLnByb3BzLmFjdGl2aXR5RG9uZX0+UmVzZXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJva1wiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVmFsaWRhdGlvbn0gZGlzYWJsZWQ9e3RoaXMucHJvcHMuYWN0aXZpdHlEb25lfT5PSzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz91cmw9ZmFsc2UhLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXBwLmxlc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3VybD1mYWxzZSEuLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hcHAubGVzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3VybD1mYWxzZSEuLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hcHAubGVzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0ICcuL2FwcC5sZXNzJztcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IEFjdGl2aXR5IH0gZnJvbSAnLi9hY3Rpdml0eS9hY3Rpdml0eS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbiB9IGZyb20gJy4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgdGl0bGU6IHN0cmluZyA9ICdHcmFtbWFyOiBDb21tb24gYW5kIHByb3BlciBub3Vucyc7XG4gICAgcXVlc3Rpb25TZXRzOiBhbnlbXSA9IENvbnN0YW50cy5xdWVzdGlvblNldHM7XG4gICAgc3RhdGU6IHtcbiAgICAgICAgY3VycmVudFBhZ2VJZHg6IG51bWJlcixcbiAgICAgICAgbGFzdElkeDogbnVtYmVyXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcjogYW55KSB7XG4gICAgICAgIHN1cGVyKHJlbmRlcik7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlSWR4OiAwLFxuICAgICAgICAgICAgbGFzdElkeDogMFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2V0TmF2SWR4ID0gdGhpcy5zZXROYXZJZHguYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5lbmFibGVOZXh0UXVlc3Rpb24gPSB0aGlzLmVuYWJsZU5leHRRdWVzdGlvbi5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHNldE5hdklkeChkaXJlY3Rpb246IHN0cmluZykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlSWR4OiBkaXJlY3Rpb24gPT09ICdwcmV2JyA/IHRoaXMuc3RhdGUuY3VycmVudFBhZ2VJZHggLSAxIDogdGhpcy5zdGF0ZS5jdXJyZW50UGFnZUlkeCArIDFcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZW5hYmxlTmV4dFF1ZXN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50UGFnZUlkeCA9PT0gdGhpcy5zdGF0ZS5sYXN0SWR4KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBsYXN0SWR4OiArK3RoaXMuc3RhdGUubGFzdElkeFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hc3Rlci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj57dGhpcy50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImhlbHBcIj5IZWxwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNsb3NlXCI+Q2xvc2U8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPEFjdGl2aXR5IGN1cnJlbnRQYWdlSWR4PXt0aGlzLnN0YXRlLmN1cnJlbnRQYWdlSWR4fSBxdWVzdGlvblNldHM9e3RoaXMucXVlc3Rpb25TZXRzfSBlbmFibGVOZXh0UXVlc3Rpb249e3RoaXMuZW5hYmxlTmV4dFF1ZXN0aW9ufSAvPlxuICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uIHNldE5hdklkeD17dGhpcy5zZXROYXZJZHh9IGN1cnJlbnRQYWdlSWR4PXt0aGlzLnN0YXRlLmN1cnJlbnRQYWdlSWR4fSBsYXN0SWR4PXt0aGlzLnN0YXRlLmxhc3RJZHh9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3VybD1mYWxzZSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5sZXNzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz91cmw9ZmFsc2UhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2aWdhdGlvbi5jb21wb25lbnQubGVzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3VybD1mYWxzZSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5sZXNzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgJy4vbmF2aWdhdGlvbi5jb21wb25lbnQubGVzcyc7XG5cbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHF1ZXN0aW9uU2V0czoge31bXSA9IENvbnN0YW50cy5xdWVzdGlvblNldHM7XG4gICAgcHJvcHM6IHtcbiAgICAgICAgc2V0TmF2SWR4OiBGdW5jdGlvbixcbiAgICAgICAgbGFzdElkeDogbnVtYmVyLFxuICAgICAgICBjdXJyZW50UGFnZUlkeDogbnVtYmVyXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc2V0TmF2SWR4ID0gdGhpcy5zZXROYXZJZHguYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzZXROYXZJZHgoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSB7XG4gICAgICAgIHRoaXMucHJvcHMuc2V0TmF2SWR4KChldmVudC50YXJnZXQgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLnZhbHVlKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBjbGFzc05hbWU6IHN0cmluZyA9ICcnO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwcmV2XCIgb25DbGljaz17dGhpcy5zZXROYXZJZHh9IHZhbHVlPVwicHJldlwiIGRpc2FibGVkPXt0aGlzLnByb3BzLmN1cnJlbnRQYWdlSWR4ID09PSAwfT5QcmV2PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1ob2xkZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvblNldHMubWFwKChpdGVtOiBhbnlbXSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSAncGFnZSAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPCB0aGlzLnByb3BzLmN1cnJlbnRQYWdlSWR4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gJ2NvbXBsZXRlZCAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gdGhpcy5wcm9wcy5jdXJyZW50UGFnZUlkeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9ICdhY3RpdmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9e2NsYXNzTmFtZX0ga2V5PXtcIm1vb25cIiArIGluZGV4fT48L3NwYW4+O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5leHRcIiBvbkNsaWNrPXt0aGlzLnNldE5hdklkeH0gdmFsdWU9XCJuZXh0XCIgZGlzYWJsZWQ9e3RoaXMucHJvcHMuY3VycmVudFBhZ2VJZHggPT09IHRoaXMucHJvcHMubGFzdElkeH0+TmV4dDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc3RhbnRzIHtcbiAgICBzdGF0aWMgcXVlc3Rpb25TZXRzOiBhbnlbXSA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgc2VudGVuY2VzOiBbXG4gICAgICAgICAgICAgICAgJ0plbiBsb3N0IGhlciBtaXR0ZW5zIGF0IEtpbmcgU2Nob29sLicsXG4gICAgICAgICAgICAgICAgJ0tpZHMgc2luZyBhbGwgZGF5IGF0IENhbXAgUXVlc3QuJyxcbiAgICAgICAgICAgICAgICAnV2Ugc2F3IGJhc3MgaW4gQmVsbHMgUG9uZC4nLFxuICAgICAgICAgICAgICAgICdNZWwgd2lsbCBtYWtlIHByb3BzIGZvciB0aGUgcGxheS4nXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgY29ycmVjdE1hcmtlcnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ3dvcmQtaGlnaGxpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgJ2lkeCc6IFtbMCwgNSwgNl0sIFs1LCA2XSwgWzQsIDVdLCBbMF1dXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ3dvcmQtdW5kZXJsaW5lJyxcbiAgICAgICAgICAgICAgICAgICAgJ2lkeCc6IFtbM10sIFswLCAzXSwgWzJdLCBbMywgNl1dXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ2xldHRlci1oaWdobGlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAnaWR4JzogW1t7XG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JkSWR4OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcklkeDogMlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JkSWR4OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcklkeDogMVxuICAgICAgICAgICAgICAgICAgICB9XV1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAnbGV0dGVyLWRpdmlkZScsXG4gICAgICAgICAgICAgICAgICAgICdpZHgnOiBbW11dXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzZW50ZW5jZXM6IFtcbiAgICAgICAgICAgICAgICAndyBxIHF3ZCAsbWFzIGRtYXMgZGFtIHNkLixtYXNkJyxcbiAgICAgICAgICAgICAgICAnIG5md2VubGttd2VsbWQga2xrZG0gcWxta3dkbHFta3cgZGxxICcsXG4gICAgICAgICAgICAgICAgJyB3bW5mIGVtIGxtcXdkcTtsdyBrZG07bHFta3dkIGwnXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgY29ycmVjdE1hcmtlcnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ3dvcmQtaGlnaGxpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgJ2lkeCc6IFtbMSwgM10sIFsyLCAzXSwgWzRdXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICd3b3JkLXVuZGVybGluZScsXG4gICAgICAgICAgICAgICAgICAgICdpZHgnOiBbWzNdLCBbMCwgM10sIFsyXV1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAnbGV0dGVyLWhpZ2hsaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICdpZHgnOiBbW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmRJZHg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFySWR4OiAyXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmRJZHg6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFySWR4OiAxXG4gICAgICAgICAgICAgICAgICAgIH1dXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdsZXR0ZXItZGl2aWRlJyxcbiAgICAgICAgICAgICAgICAgICAgJ2lkeCc6IFtbXV1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNlbnRlbmNlczogW1xuICAgICAgICAgICAgICAgICdxbHcgZDtxbCBtZGtxdztxd207bHFtYyA7a3EgO2xxd2tta3FuIGM7d20gO2xxbWMgO2xxbWMgO2txam4gJyxcbiAgICAgICAgICAgICAgICAnLHFtdyBkbWViandidmxqd3cgbnhvaSBpaiBjcGl3aCBldWpxIGl3ZDtxbHdkcXduZCcsXG4gICAgICAgICAgICAgICAgJy5sZGtxd25kayBxZG1vcWl3IGZvcXdkIG9xd25maXdqcmdvIHJ0ayBvZWlyZyBlaWJmbGlyIG9pd2UgZndvZSBmJ1xuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgXTtcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgQXBwIH0gZnJvbSAnLi9jb21wb25lbnRzL2FwcCc7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpOyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YXRlbWVudHMtY29udGFpbmVyIHtcXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xcbn1cXG4uc3RhdGVtZW50cy1jb250YWluZXIgLnRpY2stY3Jvc3Mge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAxcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbi5zdGF0ZW1lbnRzLWNvbnRhaW5lciAudGljay1jcm9zcyBpbWcge1xcbiAgd2lkdGg6IDE1cHg7XFxufVxcbi5zdGF0ZW1lbnRzLWNvbnRhaW5lciAuc2VudGVuY2Uge1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uc3RhdGVtZW50cy1jb250YWluZXIgLnNlbnRlbmNlIC53b3JkLmhpZ2hsaWdodGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XFxuLnN0YXRlbWVudHMtY29udGFpbmVyIC5zZW50ZW5jZSAud29yZC51bmRlcmxpbmVkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4uc3RhdGVtZW50cy1jb250YWluZXIgLnNlbnRlbmNlIC53b3JkLmhpZ2hsaWdodDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcbi5zdGF0ZW1lbnRzLWNvbnRhaW5lciAuc2VudGVuY2UgLndvcmQudW5kZXJsaW5lOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4uc3RhdGVtZW50cy1jb250YWluZXIgLnNlbnRlbmNlIC53b3JkIC5jaGFyYWN0ZXIuY29sb3JlZCB7XFxuICBjb2xvcjogYmx1ZTtcXG59XFxuLnN0YXRlbWVudHMtY29udGFpbmVyIC5zZW50ZW5jZSAud29yZCAuY2hhcmFjdGVyLmRpdmlkZXIge1xcbiAgYm94LXNoYWRvdzogMnB4IDAgMCAwIHJlZDtcXG59XFxuLnN0YXRlbWVudHMtY29udGFpbmVyIC5zZW50ZW5jZSAud29yZCAuY2hhcmFjdGVyLmhpZ2hsaWdodDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xcbn1cXG4uc3RhdGVtZW50cy1jb250YWluZXIgLnNlbnRlbmNlIC53b3JkIC5jaGFyYWN0ZXIuZGl2aWRlOm5vdCgubGFzdCk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3gtc2hhZG93OiAxcHggMCAwIDA7XFxufVxcbnNwYW4ge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1hc3Rlci1tYXJrZXItY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubWFzdGVyLW1hcmtlci1jb250YWluZXIgLm1hcmtlcnMtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgbGVmdDogMjBweDtcXG59XFxuLm1hc3Rlci1tYXJrZXItY29udGFpbmVyIC5tYXJrZXJzLWNvbnRhaW5lciBkaXYuaGlnaGxpZ2h0LFxcbi5tYXN0ZXItbWFya2VyLWNvbnRhaW5lciAubWFya2Vycy1jb250YWluZXIgZGl2LnVuZGVybGluZSxcXG4ubWFzdGVyLW1hcmtlci1jb250YWluZXIgLm1hcmtlcnMtY29udGFpbmVyIGRpdi5jb2xvcixcXG4ubWFzdGVyLW1hcmtlci1jb250YWluZXIgLm1hcmtlcnMtY29udGFpbmVyIGRpdi5kaXZpZGUsXFxuLm1hc3Rlci1tYXJrZXItY29udGFpbmVyIC5tYXJrZXJzLWNvbnRhaW5lciBkaXYuZXJhc2VyIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbn1cXG4ubWFzdGVyLW1hcmtlci1jb250YWluZXIgLm1hcmtlcnMtY29udGFpbmVyIGRpdiBzcGFuIHtcXG4gIGNvbG9yOiAjMDBmZmZmO1xcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMnB4ICMwMGZmZmY7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG4ubWFzdGVyLW1hcmtlci1jb250YWluZXIgLm1hcmtlcnMtY29udGFpbmVyIGRpdiBzcGFuLmltZy1kaXZpZGUtbGJsIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG4ubWFzdGVyLW1hcmtlci1jb250YWluZXIgLm1hcmtlcnMtY29udGFpbmVyIGRpdiBzcGFuLmltZy1lcmFzZXItbGJsIHtcXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbn1cXG4ubWFzdGVyLW1hcmtlci1jb250YWluZXIgLm1hcmtlcnMtY29udGFpbmVyIGltZy5pbWctaGlnaGxpZ2h0LFxcbi5tYXN0ZXItbWFya2VyLWNvbnRhaW5lciAubWFya2Vycy1jb250YWluZXIgaW1nLmltZy11bmRlcmxpbmUsXFxuLm1hc3Rlci1tYXJrZXItY29udGFpbmVyIC5tYXJrZXJzLWNvbnRhaW5lciBpbWcuaW1nLWNvbG9yLFxcbi5tYXN0ZXItbWFya2VyLWNvbnRhaW5lciAubWFya2Vycy1jb250YWluZXIgaW1nLmltZy1kaXZpZGUsXFxuLm1hc3Rlci1tYXJrZXItY29udGFpbmVyIC5tYXJrZXJzLWNvbnRhaW5lciBpbWcuaW1nLWVyYXNlciB7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogNjBweDtcXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubWFzdGVyLW1hcmtlci1jb250YWluZXIgLm1hcmtlcnMtY29udGFpbmVyIGltZy5pbWctaGlnaGxpZ2h0OmhvdmVyLFxcbi5tYXN0ZXItbWFya2VyLWNvbnRhaW5lciAubWFya2Vycy1jb250YWluZXIgaW1nLmltZy11bmRlcmxpbmU6aG92ZXIsXFxuLm1hc3Rlci1tYXJrZXItY29udGFpbmVyIC5tYXJrZXJzLWNvbnRhaW5lciBpbWcuaW1nLWNvbG9yOmhvdmVyLFxcbi5tYXN0ZXItbWFya2VyLWNvbnRhaW5lciAubWFya2Vycy1jb250YWluZXIgaW1nLmltZy1kaXZpZGU6aG92ZXIsXFxuLm1hc3Rlci1tYXJrZXItY29udGFpbmVyIC5tYXJrZXJzLWNvbnRhaW5lciBpbWcuaW1nLWVyYXNlcjpob3ZlcixcXG4ubWFzdGVyLW1hcmtlci1jb250YWluZXIgLm1hcmtlcnMtY29udGFpbmVyIGltZy5pbWctaGlnaGxpZ2h0LmFjdGl2ZSxcXG4ubWFzdGVyLW1hcmtlci1jb250YWluZXIgLm1hcmtlcnMtY29udGFpbmVyIGltZy5pbWctdW5kZXJsaW5lLmFjdGl2ZSxcXG4ubWFzdGVyLW1hcmtlci1jb250YWluZXIgLm1hcmtlcnMtY29udGFpbmVyIGltZy5pbWctY29sb3IuYWN0aXZlLFxcbi5tYXN0ZXItbWFya2VyLWNvbnRhaW5lciAubWFya2Vycy1jb250YWluZXIgaW1nLmltZy1kaXZpZGUuYWN0aXZlLFxcbi5tYXN0ZXItbWFya2VyLWNvbnRhaW5lciAubWFya2Vycy1jb250YWluZXIgaW1nLmltZy1lcmFzZXIuYWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDFweCB3aGl0ZTtcXG59XFxuLm1hc3Rlci1tYXJrZXItY29udGFpbmVyIC52YWxpZGF0b3JzLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICByaWdodDogMjBweDtcXG59XFxuLm1hc3Rlci1tYXJrZXItY29udGFpbmVyIC52YWxpZGF0b3JzLWNvbnRhaW5lciBidXR0b24ucmVzZXQsXFxuLm1hc3Rlci1tYXJrZXItY29udGFpbmVyIC52YWxpZGF0b3JzLWNvbnRhaW5lciBidXR0b24ub2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhjOWNiZjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCUsICM4YzljYmYpLCBjb2xvci1zdG9wKDUwJSwgIzU0NmE5ZSksIGNvbG9yLXN0b3AoNTAlLCAjMzY1MThmKSwgY29sb3Itc3RvcCgxMDAlLCAjM2Q1NjkxKSk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICM4YzljYmYgMCUsICM1NDZhOWUgNTAlLCAjMzY1MThmIDUwJSwgIzNkNTY5MSAxMDAlKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgIzhjOWNiZiAwJSwgIzU0NmE5ZSA1MCUsICMzNjUxOGYgNTAlLCAjM2Q1NjkxIDEwMCUpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsICM4YzljYmYgMCUsICM1NDZhOWUgNTAlLCAjMzY1MThmIDUwJSwgIzNkNTY5MSAxMDAlKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICM4YzljYmYgMCUsICM1NDZhOWUgNTAlLCAjMzY1MThmIDUwJSwgIzNkNTY5MSAxMDAlKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0b3AsICM4YzljYmYgMCUsICM1NDZhOWUgNTAlLCAjMzY1MThmIDUwJSwgIzNkNTY5MSAxMDAlKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNzJkNmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzBlMWQ0NTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgMCAjYjFiOWNiO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCAwICNiMWI5Y2I7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQ6IGJvbGQgMTZweC8xIFxcXCJoZWx2ZXRpY2EgbmV1ZVxcXCIsIGhlbHZldGljYSwgYXJpYWwsIHNhbnMtc2VyaWY7XFxuICBwYWRkaW5nOiA3cHggMCA2cHggMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtc2hhZG93OiAwIC0xcHggMXB4ICMwMDBmNGQ7XFxuICB3aWR0aDogNjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1hc3Rlci1tYXJrZXItY29udGFpbmVyIC52YWxpZGF0b3JzLWNvbnRhaW5lciBidXR0b24ucmVzZXQ6Zm9jdXMsXFxuLm1hc3Rlci1tYXJrZXItY29udGFpbmVyIC52YWxpZGF0b3JzLWNvbnRhaW5lciBidXR0b24ub2s6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IDFweCB3aGl0ZTtcXG59XFxuLm1hc3Rlci1tYXJrZXItY29udGFpbmVyIC52YWxpZGF0b3JzLWNvbnRhaW5lciBidXR0b24ucmVzZXQ6YWN0aXZlLFxcbi5tYXN0ZXItbWFya2VyLWNvbnRhaW5lciAudmFsaWRhdG9ycy1jb250YWluZXIgYnV0dG9uLm9rOmFjdGl2ZSB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMjBweCAwICMxZDI4NDUsIDBweCAxcHggMXB4IC0xcHggd2hpdGU7XFxufVxcbi5tYXN0ZXItbWFya2VyLWNvbnRhaW5lciAudmFsaWRhdG9ycy1jb250YWluZXIgYnV0dG9uLnJlc2V0W2Rpc2FibGVkXSxcXG4ubWFzdGVyLW1hcmtlci1jb250YWluZXIgLnZhbGlkYXRvcnMtY29udGFpbmVyIGJ1dHRvbi5va1tkaXNhYmxlZF0ge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5odG1sIGJvZHkge1xcbiAgaGVpZ2h0OiA5OCU7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCA1cHg7XFxufVxcbmh0bWwgYm9keSBzcGFuIHtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5odG1sIGJvZHkgZGl2I2FwcCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbmh0bWwgYm9keSBkaXYjYXBwIC5tYXN0ZXItY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZDogIzBmMGMyOTtcXG4gIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjQyNDNlLCAjMzAyYjYzLCAjMGYwYzI5KTtcXG4gIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyNDI0M2UsICMzMDJiNjMsICMwZjBjMjkpO1xcbiAgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xcbn1cXG5odG1sIGJvZHkgZGl2I2FwcCAubWFzdGVyLWNvbnRhaW5lciBoMi50aXRsZSB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBtYXJnaW4tbGVmdDogMTVweDtcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDJweCAjMDBmZmZmO1xcbiAgY29sb3I6ICMwMGZmZmY7XFxufVxcbmh0bWwgYm9keSBkaXYjYXBwIC5tYXN0ZXItY29udGFpbmVyIC5hY3Rpdml0eS1jb250YWluZXIge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzNSUpO1xcbn1cXG5odG1sIGJvZHkgZGl2I2FwcCAubWFzdGVyLWNvbnRhaW5lciAuYWN0aXZpdHktY29udGFpbmVyIGgyLnF1ZXN0aW9uIHtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDJweCAjMDBmZmZmO1xcbiAgY29sb3I6ICMwMGZmZmY7XFxufVxcbmh0bWwgYm9keSBkaXYjYXBwIC5tYXN0ZXItY29udGFpbmVyIC5hY3Rpdml0eS1jb250YWluZXIgLnN0YXRlbWVudHMtY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAxcHg7XFxuICBoZWlnaHQ6IDcwJTtcXG4gIG1hcmdpbjogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBiYWNrZ3JvdW5kOiAjMkJDMEU0O1xcbiAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI0VBRUNDNiwgIzJCQzBFNCk7XFxuICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNFQUVDQzYsICMyQkMwRTQpO1xcbiAgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xcbn1cXG5odG1sIGJvZHkgZGl2I2FwcCAubWFzdGVyLWNvbnRhaW5lciAuYnV0dG9ucy1jb250YWluZXIge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG5odG1sIGJvZHkgZGl2I2FwcCAubWFzdGVyLWNvbnRhaW5lciAuYnV0dG9ucy1jb250YWluZXIgYnV0dG9uLmhlbHAsXFxuaHRtbCBib2R5IGRpdiNhcHAgLm1hc3Rlci1jb250YWluZXIgLmJ1dHRvbnMtY29udGFpbmVyIGJ1dHRvbi5jbG9zZSB7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IDJweDtcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG59XFxuaHRtbCBib2R5IGRpdiNhcHAgLm1hc3Rlci1jb250YWluZXIgLmJ1dHRvbnMtY29udGFpbmVyIGJ1dHRvbi5oZWxwIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnYXNzZXRzL3F1ZXN0aW9uLnBuZycpO1xcbn1cXG5odG1sIGJvZHkgZGl2I2FwcCAubWFzdGVyLWNvbnRhaW5lciAudGl0bGUtY29udGFpbmVyIHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDBmZmZmO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYWNkO1xcbiAgYmFja2dyb3VuZDogIzBmMGMyOTtcXG4gIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjQyNDNlLCAjMzAyYjYzLCAjMGYwYzI5KTtcXG4gIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyNDI0M2UsICMzMDJiNjMsICMwZjBjMjkpO1xcbiAgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5uYXZpZ2F0aW9uLWNvbnRhaW5lciB7XFxuICBib3R0b206IDEwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogOTklO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG4ubmF2aWdhdGlvbi1jb250YWluZXIgLnBhZ2luYXRpb24tY29udGFpbmVyIHtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5uYXZpZ2F0aW9uLWNvbnRhaW5lciAucGFnaW5hdGlvbi1jb250YWluZXIgYnV0dG9uLm5leHQge1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwcHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTBweDtcXG59XFxuLm5hdmlnYXRpb24tY29udGFpbmVyIC5wYWdpbmF0aW9uLWNvbnRhaW5lciBidXR0b24ucHJldiB7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTBweDtcXG59XFxuLm5hdmlnYXRpb24tY29udGFpbmVyIC5wYWdpbmF0aW9uLWNvbnRhaW5lciAucGFnZS1ob2xkZXJzIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG59XFxuLm5hdmlnYXRpb24tY29udGFpbmVyIC5wYWdpbmF0aW9uLWNvbnRhaW5lciAucGFnZS1ob2xkZXJzIHNwYW4ucGFnZSB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIGJhY2tncm91bmQ6IGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICB0b3A6IDVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1sZWZ0OiAzcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDNweDtcXG59XFxuLm5hdmlnYXRpb24tY29udGFpbmVyIC5wYWdpbmF0aW9uLWNvbnRhaW5lciAucGFnZS1ob2xkZXJzIHNwYW4uY29tcGxldGVkIHtcXG4gIGJhY2tncm91bmQ6IHJlZDtcXG59XFxuLm5hdmlnYXRpb24tY29udGFpbmVyIC5wYWdpbmF0aW9uLWNvbnRhaW5lciAucGFnZS1ob2xkZXJzIHNwYW4uYWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6IHllbGxvdztcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50byArIFwiIFwiICsgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTsiXSwic291cmNlUm9vdCI6IiJ9