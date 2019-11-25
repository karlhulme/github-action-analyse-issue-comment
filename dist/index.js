module.exports =
/******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
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
/******/ 	__webpack_require__.ab = __dirname + "/";
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__(676);
/******/ 	};
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ({

/***/ 430:
/***/ (function(module) {

// const core = require('@actions/core')
// const { GitHub, context } = require('@actions/github')

const run = async () => {
  // const { owner } = context.repo
  console.log('start')
  // const authorisedLogins = core.getInput('authorisedLogins').split(',')
  // const comment = core.getInput('comment')

  // const author = (comment.user || {}).login
  // console.log(`Author: ${author}`)
  // const isAuthorisedUser = authorisedLogins.includes(author)
  // console.log(`isAuthUser: ${isAuthorisedUser}`)

  // console.log(`Authorised logins '${authorisedLogins.join('|')}' wrote: ${comment.body}`)
}

module.exports = run


/***/ }),

/***/ 676:
/***/ (function(__unusedmodule, __unusedexports, __webpack_require__) {

const run = __webpack_require__(430)

run()


/***/ })

/******/ });