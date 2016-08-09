/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// import '../public/css/style.css';
	// import '../public/css/index.css';
	__webpack_require__(1);
	__webpack_require__(5);
	__webpack_require__(7);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font: 13px Helvetica, Arial, '\\5FAE\\8F6F\\96C5\\9ED1', '\\9ED1\\4F53';\n}\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
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


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
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

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
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

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./index.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "html {\n    padding-bottom: 46px;\n}\n\n.m,\n.s {\n    background: #000;\n    padding: .3rem;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n}\n\n.m input,\n.s input {\n    border: 0;\n    padding: .625rem;\n    width: 90%;\n    margin-right: .3rem;\n}\n\n.m button,\n.s button {\n    width: 9%;\n    background: rgb(130, 224, 255);\n    border: none;\n    padding: .625rem;\n}\n\n#messages {\n    list-style-type: none;\n    margin: 1rem;\n    padding: 0;\n}\n\n#messages li,\n#si li {\n    padding: .3125rem .625rem;\n    display: flex;\n    align-items: center;\n}\n\n#messages li:nth-child(odd) .chat,\n#si li:nth-child(odd) .chat {\n    background-color: #eee;\n}\n\n#messages li:nth-child(even) .chat,\n#si li:nth-child(even) .chat {\n    background-color: #d4edf4;\n}\n\n#messages li:nth-child(odd) .tan,\n#si li:nth-child(odd) .tan {\n    border-right-color: #eee;\n}\n\n#messages li:nth-child(even) .tan,\n#si li:nth-child(even) .tan {\n    border-right-color: #d4edf4;\n}\n\n.name {\n    font-size: 1.1rem;\n    text-align: center;\n    white-space: nowrap;\n}\n\nli img {\n    max-width: 100%;\n    min-width: 71.03px;\n}\n\nli .avatar {\n    width: 4.44rem;\n    height: 7.19rem;\n    cursor: pointer;\n    margin: 0 50px 0 10px;\n}\n\nli .chat {\n    border-radius: .4rem;\n    display: flex;\n    flex-flow: column;\n    flex: 0 1 auto;\n    -webkit-flex:0 1 auto;\n}\n\n.chat .content,\n.chat h1,\n.chat h2,\n.chat h3,\n.chat h4,\n.chat h5,\n.chat h6 {\n    padding: .9rem;\n}\n\n.time {\n    font-size: .9rem;\n    font-weight: bold;\n    padding: .9rem .9rem .1rem .9rem;\n}\n\n.chat p {\n    padding: .9rem;\n}\n\n.tan {\n    border-top: .7rem solid transparent;\n    border-right: 1.8rem solid #fff;\n    border-bottom: .2rem solid transparent;\n}\n\n.users-in-out {\n    justify-content: center;\n}\n\n.whisper-color {\n    background-color: #9e9e9e;\n}\n", ""]);

	// exports


/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	$(function () {
	    //prompt层
	    layer.prompt({
	        title: '请输入昵称',
	        offset: ['200px', '400px'],
	        skin: 'layui-layer-lan'
	    }, function (value, index) {
	        layer.close(index);
	        var name = value;
	        if ($.trim(name).length > 0) {
	            $('#m').focus();
	            // 聊天开始
	            var socket = io();
	            // 定义一个私聊公聊的变量吧

	            socket.emit('user connection', name);
	            $('button').click(function () {
	                // 非空验证
	                if ($('#m').val().length > 0) {
	                    socket.emit('chat message', $('#m').val());
	                    $('#m').val('');
	                }
	                // return 去掉的话，页面会刷新
	                return false;
	            });
	            // 头像点击事件 ，直接开始私聊
	            $('body').on('click', '#messages .avatar', function () {
	                var socket_id = $(this).data('id');
	                socket.emit('whisper-1', socket_id);
	            });

	            // 接收到服务器的消息，被请求的客户端有个confirm
	            // second是to的窗口
	            socket.on('whisper-2', function (msg) {
	                layer.confirm('有个叫' + msg.user.name + '的人想和你私聊，是否同意？', {
	                    skin: 'layui-layer-lan'
	                }, function (index) {
	                    layer.close(index);
	                    // 同意，先发送同意消息，然后打开一个聊天的layer
	                    socket.emit('whisper-3', {
	                        to: msg.to,
	                        from: msg.from
	                    });
	                    // 打开一个私聊窗口，里面只有from和to两个人
	                    layer.open({
	                        type: 1,
	                        area: ['500px', '600px'],
	                        title: '与 ' + msg.user.name + ' 的私聊窗口',
	                        move: false,
	                        skin: 'layui-layer-lan', //加上边框
	                        shift: 2,
	                        content: '<ul id="si"><li class="users-in-out">你们的私聊已经开始</li></ul><form class="s"><input id="s" autocomplete="off" /><button>发送</button></form>',
	                        success: function success() {
	                            $('.s button').click(function () {
	                                if ($('#s').val().length > 0) {
	                                    socket.emit('whisper-5', {
	                                        to: msg.to,
	                                        from: msg.from,
	                                        chatMsg: $('#s').val()
	                                    });
	                                    $('#s').val('');
	                                }
	                                return false;
	                            });
	                        },
	                        // 如果to方关闭
	                        end: function end() {
	                            socket.emit('whisper-8', {
	                                to: msg.to,
	                                from: msg.from
	                            });
	                        }
	                    });
	                });
	            });
	            // forth是from的窗口
	            socket.on('whisper-4', function (msg) {

	                // 打开一个私聊窗口，里面只有from和to两个人
	                layer.open({
	                    type: 1,
	                    area: ['500px', '600px'],
	                    title: '与 ' + msg.user.name + ' 的私聊窗口',
	                    move: false,
	                    skin: 'layui-layer-lan', //加上边框
	                    shift: 2,
	                    content: '<ul id="si"><li class="users-in-out">你们的私聊已经开始</li></ul><form class="s"><input id="s" autocomplete="off" /><button>发送</button></form>',
	                    success: function success() {
	                        $('.s button').click(function () {
	                            if ($('#s').val().length > 0) {
	                                socket.emit('whisper-7', {
	                                    to: msg.to,
	                                    from: msg.from,
	                                    chatMsg: $('#s').val()
	                                });
	                                $('#s').val('');
	                            }
	                            return false;
	                        });
	                    },
	                    // 如果from方关闭
	                    end: function end() {
	                        socket.emit('whisper-10', {
	                            to: msg.to,
	                            from: msg.from
	                        });
	                    }
	                });
	            });
	            // sixth是接收到服务器的消息，然后展现在私聊框的，不管有自己的还是别人的
	            socket.on('whisper-6', function (msg) {
	                $('#si').append('<li>' + '<div class="avatar" data-id="' + msg.user.id + '">' + '<img src="imgs/' + msg.user.avatar + '.jpg" alt="头像" />' + '<p class="name">' + msg.user.name + '<p>' + '</div>' + '<div class="chat">' + '<span class="tan"></span>' + '<p>' + msg.msg + '</p>' + '</div>' + '</li>');
	                $('.layui-layer-content').animate({ scrollTop: $(document).height() }, 400);
	            });
	            // ninth是当有一方关闭窗口时，另一方接收到的消息
	            socket.on('whisper-9', function (msg) {
	                $('#si').append($('<li class="users-in-out">').text(msg.user.name + ' 已经退出了私聊'));
	                $('.layui-layer-content').animate({ scrollTop: $(document).height() }, 400);
	            });
	            // 开始公开聊天
	            socket.on('chat message', function (msg) {
	                $('#messages').append('<li>' + '<div class="avatar" data-id="' + msg.user.id + '">' + '<img src="imgs/' + msg.user.avatar + '.jpg" alt="头像" />' + '<p class="name">' + msg.user.name + '<p>' + '</div>' + '<div class="chat">' + '<p class="time">' + msg.createdAt + '</p>' + msg.msg + '</div>' + '</li>');
	                $('html, body, #message').animate({ scrollTop: $(document).height() }, 400);
	            });
	            socket.on('hi', function (msg) {
	                $('#messages').append($('<li class="users-in-out">').text(msg));
	                $('html, body, #message').animate({ scrollTop: $(document).height() }, 400);
	            });
	        }
	    });
	});

/***/ }
/******/ ]);