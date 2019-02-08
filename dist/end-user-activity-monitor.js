!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.EUAMonitor=e():t.EUAMonitor=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e){},function(t,e,n){"use strict";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function i(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function o(t){return"function"==typeof t}var s=!1,u={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){t&&(new Error).stack;s=t},get useDeprecatedSynchronousErrorHandling(){return s}};function c(t){setTimeout(function(){throw t})}var f={closed:!0,next:function(t){},error:function(t){if(u.useDeprecatedSynchronousErrorHandling)throw t;c(t)},complete:function(){}},h=Array.isArray||function(t){return t&&"number"==typeof t.length};function a(t){return null!=t&&"object"==typeof t}var p,l={e:{}};function d(){try{return p.apply(this,arguments)}catch(t){return l.e=t,l}}function b(t){return p=t,d}function y(t){return Error.call(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map(function(t,e){return e+1+") "+t.toString()}).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t,this}y.prototype=Object.create(Error.prototype);var v=y,_=function(){function t(t){this.closed=!1,this._parent=null,this._parents=null,this._subscriptions=null,t&&(this._unsubscribe=t)}var e;return t.prototype.unsubscribe=function(){var t,e=!1;if(!this.closed){var n=this._parent,r=this._parents,i=this._unsubscribe,s=this._subscriptions;this.closed=!0,this._parent=null,this._parents=null,this._subscriptions=null;for(var u=-1,c=r?r.length:0;n;)n.remove(this),n=++u<c&&r[u]||null;if(o(i))b(i).call(this)===l&&(e=!0,t=t||(l.e instanceof v?w(l.e.errors):[l.e]));if(h(s))for(u=-1,c=s.length;++u<c;){var f=s[u];if(a(f))if(b(f.unsubscribe).call(f)===l){e=!0,t=t||[];var p=l.e;p instanceof v?t=t.concat(w(p.errors)):t.push(p)}}if(e)throw new v(t)}},t.prototype.add=function(e){if(!e||e===t.EMPTY)return t.EMPTY;if(e===this)return this;var n=e;switch(typeof e){case"function":n=new t(e);case"object":if(n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if("function"!=typeof n._addParent){var r=n;(n=new t)._subscriptions=[r]}break;default:throw new Error("unrecognized teardown "+e+" added to Subscription.")}return(this._subscriptions||(this._subscriptions=[])).push(n),n._addParent(this),n},t.prototype.remove=function(t){var e=this._subscriptions;if(e){var n=e.indexOf(t);-1!==n&&e.splice(n,1)}},t.prototype._addParent=function(t){var e=this._parent,n=this._parents;e&&e!==t?n?-1===n.indexOf(t)&&n.push(t):this._parents=[t]:this._parent=t},t.EMPTY=((e=new t).closed=!0,e),t}();function w(t){return t.reduce(function(t,e){return t.concat(e instanceof v?e.errors:e)},[])}var m="function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random(),S=function(t){function e(n,r,i){var o=t.call(this)||this;switch(o.syncErrorValue=null,o.syncErrorThrown=!1,o.syncErrorThrowable=!1,o.isStopped=!1,o._parentSubscription=null,arguments.length){case 0:o.destination=f;break;case 1:if(!n){o.destination=f;break}if("object"==typeof n){n instanceof e?(o.syncErrorThrowable=n.syncErrorThrowable,o.destination=n,n.add(o)):(o.syncErrorThrowable=!0,o.destination=new E(o,n));break}default:o.syncErrorThrowable=!0,o.destination=new E(o,n,r,i)}return o}return i(e,t),e.prototype[m]=function(){return this},e.create=function(t,n,r){var i=new e(t,n,r);return i.syncErrorThrowable=!1,i},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},e.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},e.prototype._unsubscribeAndRecycle=function(){var t=this._parent,e=this._parents;return this._parent=null,this._parents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parent=t,this._parents=e,this._parentSubscription=null,this},e}(_),E=function(t){function e(e,n,r,i){var s,u=t.call(this)||this;u._parentSubscriber=e;var c=u;return o(n)?s=n:n&&(s=n.next,r=n.error,i=n.complete,n!==f&&(o((c=Object.create(n)).unsubscribe)&&u.add(c.unsubscribe.bind(c)),c.unsubscribe=u.unsubscribe.bind(u))),u._context=c,u._next=s,u._error=r,u._complete=i,u}return i(e,t),e.prototype.next=function(t){if(!this.isStopped&&this._next){var e=this._parentSubscriber;u.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?this.__tryOrSetError(e,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},e.prototype.error=function(t){if(!this.isStopped){var e=this._parentSubscriber,n=u.useDeprecatedSynchronousErrorHandling;if(this._error)n&&e.syncErrorThrowable?(this.__tryOrSetError(e,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(e.syncErrorThrowable)n?(e.syncErrorValue=t,e.syncErrorThrown=!0):c(t),this.unsubscribe();else{if(this.unsubscribe(),n)throw t;c(t)}}},e.prototype.complete=function(){var t=this;if(!this.isStopped){var e=this._parentSubscriber;if(this._complete){var n=function(){return t._complete.call(t._context)};u.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?(this.__tryOrSetError(e,n),this.unsubscribe()):(this.__tryOrUnsub(n),this.unsubscribe())}else this.unsubscribe()}},e.prototype.__tryOrUnsub=function(t,e){try{t.call(this._context,e)}catch(t){if(this.unsubscribe(),u.useDeprecatedSynchronousErrorHandling)throw t;c(t)}},e.prototype.__tryOrSetError=function(t,e,n){if(!u.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{e.call(this._context,n)}catch(e){return u.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=e,t.syncErrorThrown=!0,!0):(c(e),!0)}return!1},e.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},e}(S),g=function(t){function e(e,n,r){var i=t.call(this)||this;return i.parent=e,i.outerValue=n,i.outerIndex=r,i.index=0,i}return i(e,t),e.prototype._next=function(t){this.parent.notifyNext(this.outerValue,t,this.outerIndex,this.index++,this)},e.prototype._error=function(t){this.parent.notifyError(t,this),this.unsubscribe()},e.prototype._complete=function(){this.parent.notifyComplete(this),this.unsubscribe()},e}(S);var x="function"==typeof Symbol&&Symbol.observable||"@@observable";function T(){}function I(t){return t?1===t.length?t[0]:function(e){return t.reduce(function(t,e){return e(t)},e)}:T}var j=function(){function t(t){this._isScalar=!1,t&&(this._subscribe=t)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(t,e,n){var r=this.operator,i=function(t,e,n){if(t){if(t instanceof S)return t;if(t[m])return t[m]()}return t||e||n?new S(t,e,n):new S(f)}(t,e,n);if(r?r.call(i,this.source):i.add(this.source||u.useDeprecatedSynchronousErrorHandling&&!i.syncErrorThrowable?this._subscribe(i):this._trySubscribe(i)),u.useDeprecatedSynchronousErrorHandling&&i.syncErrorThrowable&&(i.syncErrorThrowable=!1,i.syncErrorThrown))throw i.syncErrorValue;return i},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){u.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=e),!function(t){for(;t;){var e=t,n=e.closed,r=e.destination,i=e.isStopped;if(n||i)return!1;t=r&&r instanceof S?r:null}return!0}(t)?console.warn(e):t.error(e)}},t.prototype.forEach=function(t,e){var n=this;return new(e=O(e))(function(e,r){var i;i=n.subscribe(function(e){try{t(e)}catch(t){r(t),i&&i.unsubscribe()}},r,e)})},t.prototype._subscribe=function(t){var e=this.source;return e&&e.subscribe(t)},t.prototype[x]=function(){return this},t.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return 0===t.length?this:I(t)(this)},t.prototype.toPromise=function(t){var e=this;return new(t=O(t))(function(t,n){var r;e.subscribe(function(t){return r=t},function(t){return n(t)},function(){return t(r)})})},t.create=function(e){return new t(e)},t}();function O(t){if(t||(t=u.Promise||Promise),!t)throw new Error("no Promise impl found");return t}var A=function(t){return function(e){for(var n=0,r=t.length;n<r&&!e.closed;n++)e.next(t[n]);e.closed||e.complete()}},P=function(t){return function(e){return t.then(function(t){e.closed||(e.next(t),e.complete())},function(t){return e.error(t)}).then(null,c),e}};function N(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}var k=N(),V=function(t){return function(e){for(var n=t[k]();;){var r=n.next();if(r.done){e.complete();break}if(e.next(r.value),e.closed)break}return"function"==typeof n.return&&e.add(function(){n.return&&n.return()}),e}},M=function(t){return function(e){var n=t[x]();if("function"!=typeof n.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return n.subscribe(e)}},D=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t};function Y(t){return t&&"function"!=typeof t.subscribe&&"function"==typeof t.then}var H=function(t){if(t instanceof j)return function(e){return t._isScalar?(e.next(t.value),void e.complete()):t.subscribe(e)};if(t&&"function"==typeof t[x])return M(t);if(D(t))return A(t);if(Y(t))return P(t);if(t&&"function"==typeof t[k])return V(t);var e=a(t)?"an invalid object":"'"+t+"'";throw new TypeError("You provided "+e+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")};function C(t,e,n,r,i){if(void 0===i&&(i=new g(t,n,r)),!i.closed)return H(e)(i)}var L=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.notifyNext=function(t,e,n,r,i){this.destination.next(e)},e.prototype.notifyError=function(t,e){this.destination.error(t)},e.prototype.notifyComplete=function(t){this.destination.complete()},e}(S);function U(t,e){return function(n){if("function"!=typeof t)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return n.lift(new F(t,e))}}var F=function(){function t(t,e){this.project=t,this.thisArg=e}return t.prototype.call=function(t,e){return e.subscribe(new K(t,this.project,this.thisArg))},t}(),K=function(t){function e(e,n,r){var i=t.call(this,e)||this;return i.project=n,i.count=0,i.thisArg=r||i,i}return i(e,t),e.prototype._next=function(t){var e;try{e=this.project.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}this.destination.next(e)},e}(S);function $(t,e){return new j(e?function(n){var r=new _,i=0;return r.add(e.schedule(function(){i!==t.length?(n.next(t[i++]),n.closed||r.add(this.schedule())):n.complete()})),r}:A(t))}function q(t,e){if(!e)return t instanceof j?t:new j(H(t));if(null!=t){if(function(t){return t&&"function"==typeof t[x]}(t))return function(t,e){return new j(e?function(n){var r=new _;return r.add(e.schedule(function(){var i=t[x]();r.add(i.subscribe({next:function(t){r.add(e.schedule(function(){return n.next(t)}))},error:function(t){r.add(e.schedule(function(){return n.error(t)}))},complete:function(){r.add(e.schedule(function(){return n.complete()}))}}))})),r}:M(t))}(t,e);if(Y(t))return function(t,e){return new j(e?function(n){var r=new _;return r.add(e.schedule(function(){return t.then(function(t){r.add(e.schedule(function(){n.next(t),r.add(e.schedule(function(){return n.complete()}))}))},function(t){r.add(e.schedule(function(){return n.error(t)}))})})),r}:P(t))}(t,e);if(D(t))return $(t,e);if(function(t){return t&&"function"==typeof t[k]}(t)||"string"==typeof t)return function(t,e){if(!t)throw new Error("Iterable cannot be null");return new j(e?function(n){var r,i=new _;return i.add(function(){r&&"function"==typeof r.return&&r.return()}),i.add(e.schedule(function(){r=t[k](),i.add(e.schedule(function(){if(!n.closed){var t,e;try{var i=r.next();t=i.value,e=i.done}catch(t){return void n.error(t)}e?n.complete():(n.next(t),this.schedule())}}))})),i}:V(t))}(t,e)}throw new TypeError((null!==t&&typeof t||t)+" is not observable")}var z=function(){function t(t,e){void 0===e&&(e=Number.POSITIVE_INFINITY),this.project=t,this.concurrent=e}return t.prototype.call=function(t,e){return e.subscribe(new B(t,this.project,this.concurrent))},t}(),B=function(t){function e(e,n,r){void 0===r&&(r=Number.POSITIVE_INFINITY);var i=t.call(this,e)||this;return i.project=n,i.concurrent=r,i.hasCompleted=!1,i.buffer=[],i.active=0,i.index=0,i}return i(e,t),e.prototype._next=function(t){this.active<this.concurrent?this._tryNext(t):this.buffer.push(t)},e.prototype._tryNext=function(t){var e,n=this.index++;try{e=this.project(t,n)}catch(t){return void this.destination.error(t)}this.active++,this._innerSub(e,t,n)},e.prototype._innerSub=function(t,e,n){var r=new g(this,void 0,void 0);this.destination.add(r),C(this,t,e,n,r)},e.prototype._complete=function(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete(),this.unsubscribe()},e.prototype.notifyNext=function(t,e,n,r,i){this.destination.next(e)},e.prototype.notifyComplete=function(t){var e=this.buffer;this.remove(t),this.active--,e.length>0?this._next(e.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()},e}(L);function R(t){return t}function G(t){return void 0===t&&(t=Number.POSITIVE_INFINITY),function t(e,n,r){return void 0===r&&(r=Number.POSITIVE_INFINITY),"function"==typeof n?function(i){return i.pipe(t(function(t,r){return q(e(t,r)).pipe(U(function(e,i){return n(t,e,r,i)}))},r))}:("number"==typeof n&&(r=n),function(t){return t.lift(new z(e,r))})}(R,t)}function J(t){return function(e){return e.lift(new Q(t))}}var Q=function(){function t(t){this.value=t}return t.prototype.call=function(t,e){return e.subscribe(new W(t,this.value))},t}(),W=function(t){function e(e,n){var r=t.call(this,e)||this;return r.value=n,r}return i(e,t),e.prototype._next=function(t){this.destination.next(this.value)},e}(S);function X(t){var e=new j(function(e){e.next(t),e.complete()});return e._isScalar=!0,e.value=t,e}var Z=new j(function(t){return t.complete()});function tt(t){return t?function(t){return new j(function(e){return t.schedule(function(){return e.complete()})})}(t):Z}function et(t){return t&&"function"==typeof t.schedule}function nt(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return 1===t.length||2===t.length&&et(t[1])?q(t[0]):G(1)(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=t[t.length-1];switch(et(n)?t.pop():n=void 0,t.length){case 0:return tt(n);case 1:return n?$(t,n):X(t[0]);default:return $(t,n)}}.apply(void 0,t))}var rt=function(){function t(t,e){this.compare=t,this.keySelector=e}return t.prototype.call=function(t,e){return e.subscribe(new it(t,this.compare,this.keySelector))},t}(),it=function(t){function e(e,n,r){var i=t.call(this,e)||this;return i.keySelector=r,i.hasKey=!1,"function"==typeof n&&(i.compare=n),i}return i(e,t),e.prototype.compare=function(t,e){return t===e},e.prototype._next=function(t){var e=t;if(this.keySelector&&(e=b(this.keySelector)(t))===l)return this.destination.error(l.e);var n=!1;if(this.hasKey){if((n=b(this.compare)(this.key,e))===l)return this.destination.error(l.e)}else this.hasKey=!0;!1===Boolean(n)&&(this.key=e,this.destination.next(t))},e}(S);var ot=function(){function t(t){this.notifier=t}return t.prototype.call=function(t,e){var n=new st(t),r=C(n,this.notifier);return r&&!n.seenValue?(n.add(r),e.subscribe(n)):n},t}(),st=function(t){function e(e){var n=t.call(this,e)||this;return n.seenValue=!1,n}return i(e,t),e.prototype.notifyNext=function(t,e,n,r,i){this.seenValue=!0,this.complete()},e.prototype.notifyComplete=function(){},e}(L);function ut(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}ut.prototype=Object.create(Error.prototype);var ct=ut,ft=function(t){function e(e,n){var r=t.call(this)||this;return r.subject=e,r.subscriber=n,r.closed=!1,r}return i(e,t),e.prototype.unsubscribe=function(){if(!this.closed){this.closed=!0;var t=this.subject,e=t.observers;if(this.subject=null,e&&0!==e.length&&!t.isStopped&&!t.closed){var n=e.indexOf(this.subscriber);-1!==n&&e.splice(n,1)}}},e}(_),ht=function(t){function e(e){var n=t.call(this,e)||this;return n.destination=e,n}return i(e,t),e}(S),at=function(t){function e(){var e=t.call(this)||this;return e.observers=[],e.closed=!1,e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return i(e,t),e.prototype[m]=function(){return new ht(this)},e.prototype.lift=function(t){var e=new pt(this,this);return e.operator=t,e},e.prototype.next=function(t){if(this.closed)throw new ct;if(!this.isStopped)for(var e=this.observers,n=e.length,r=e.slice(),i=0;i<n;i++)r[i].next(t)},e.prototype.error=function(t){if(this.closed)throw new ct;this.hasError=!0,this.thrownError=t,this.isStopped=!0;for(var e=this.observers,n=e.length,r=e.slice(),i=0;i<n;i++)r[i].error(t);this.observers.length=0},e.prototype.complete=function(){if(this.closed)throw new ct;this.isStopped=!0;for(var t=this.observers,e=t.length,n=t.slice(),r=0;r<e;r++)n[r].complete();this.observers.length=0},e.prototype.unsubscribe=function(){this.isStopped=!0,this.closed=!0,this.observers=null},e.prototype._trySubscribe=function(e){if(this.closed)throw new ct;return t.prototype._trySubscribe.call(this,e)},e.prototype._subscribe=function(t){if(this.closed)throw new ct;return this.hasError?(t.error(this.thrownError),_.EMPTY):this.isStopped?(t.complete(),_.EMPTY):(this.observers.push(t),new ft(this,t))},e.prototype.asObservable=function(){var t=new j;return t.source=this,t},e.create=function(t,e){return new pt(t,e)},e}(j),pt=function(t){function e(e,n){var r=t.call(this)||this;return r.destination=e,r.source=n,r}return i(e,t),e.prototype.next=function(t){var e=this.destination;e&&e.next&&e.next(t)},e.prototype.error=function(t){var e=this.destination;e&&e.error&&this.destination.error(t)},e.prototype.complete=function(){var t=this.destination;t&&t.complete&&this.destination.complete()},e.prototype._subscribe=function(t){return this.source?this.source.subscribe(t):_.EMPTY},e}(at),lt=function(t){function e(e){var n=t.call(this)||this;return n._value=e,n}return i(e,t),Object.defineProperty(e.prototype,"value",{get:function(){return this.getValue()},enumerable:!0,configurable:!0}),e.prototype._subscribe=function(e){var n=t.prototype._subscribe.call(this,e);return n&&!n.closed&&e.next(this._value),n},e.prototype.getValue=function(){if(this.hasError)throw this.thrownError;if(this.closed)throw new ct;return this._value},e.prototype.next=function(e){t.prototype.next.call(this,this._value=e)},e}(at),dt=function(t){function e(e,n){var r=t.call(this,e,n)||this;return r.scheduler=e,r.work=n,r.pending=!1,r}return i(e,t),e.prototype.schedule=function(t,e){if(void 0===e&&(e=0),this.closed)return this;this.state=t;var n=this.id,r=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(r,n,e)),this.pending=!0,this.delay=e,this.id=this.id||this.requestAsyncId(r,this.id,e),this},e.prototype.requestAsyncId=function(t,e,n){return void 0===n&&(n=0),setInterval(t.flush.bind(t,this),n)},e.prototype.recycleAsyncId=function(t,e,n){if(void 0===n&&(n=0),null!==n&&this.delay===n&&!1===this.pending)return e;clearInterval(e)},e.prototype.execute=function(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var n=this._execute(t,e);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(t,e){var n=!1,r=void 0;try{this.work(t)}catch(t){n=!0,r=!!t&&t||new Error(t)}if(n)return this.unsubscribe(),r},e.prototype._unsubscribe=function(){var t=this.id,e=this.scheduler,n=e.actions,r=n.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==r&&n.splice(r,1),null!=t&&(this.id=this.recycleAsyncId(e,t,null)),this.delay=null},e}(function(t){function e(e,n){return t.call(this)||this}return i(e,t),e.prototype.schedule=function(t,e){return void 0===e&&(e=0),this},e}(_)),bt=function(){function t(e,n){void 0===n&&(n=t.now),this.SchedulerAction=e,this.now=n}return t.prototype.schedule=function(t,e,n){return void 0===e&&(e=0),new this.SchedulerAction(this,t).schedule(n,e)},t.now=function(){return Date.now()},t}(),yt=new(function(t){function e(n,r){void 0===r&&(r=bt.now);var i=t.call(this,n,function(){return e.delegate&&e.delegate!==i?e.delegate.now():r()})||this;return i.actions=[],i.active=!1,i.scheduled=void 0,i}return i(e,t),e.prototype.schedule=function(n,r,i){return void 0===r&&(r=0),e.delegate&&e.delegate!==this?e.delegate.schedule(n,r,i):t.prototype.schedule.call(this,n,r,i)},e.prototype.flush=function(t){var e=this.actions;if(this.active)e.push(t);else{var n;this.active=!0;do{if(n=t.execute(t.state,t.delay))break}while(t=e.shift());if(this.active=!1,n){for(;t=e.shift();)t.unsubscribe();throw n}}},e}(bt))(dt);function vt(t,e){var n;return void 0===t&&(t=0),void 0===e&&(e=yt),(h(n=t)||!(n-parseFloat(n)+1>=0)||t<0)&&(t=0),e&&"function"==typeof e.schedule||(e=yt),new j(function(n){return n.add(e.schedule(_t,t,{subscriber:n,counter:0,period:t})),n})}function _t(t){var e=t.subscriber,n=t.counter,r=t.period;e.next(n),this.schedule({subscriber:e,counter:n+1,period:r},r)}var wt=function(){function t(t){this.project=t}return t.prototype.call=function(t,e){return e.subscribe(new mt(t,this.project))},t}(),mt=function(t){function e(e,n){var r=t.call(this,e)||this;return r.project=n,r.index=0,r}return i(e,t),e.prototype._next=function(t){var e,n=this.index++;try{e=this.project(t,n)}catch(t){return void this.destination.error(t)}this._innerSub(e,t,n)},e.prototype._innerSub=function(t,e,n){var r=this.innerSubscription;r&&r.unsubscribe();var i=new g(this,void 0,void 0);this.destination.add(i),this.innerSubscription=C(this,t,e,n,i)},e.prototype._complete=function(){var e=this.innerSubscription;e&&!e.closed||t.prototype._complete.call(this),this.unsubscribe()},e.prototype._unsubscribe=function(){this.innerSubscription=null},e.prototype.notifyComplete=function(e){this.destination.remove(e),this.innerSubscription=null,this.isStopped&&t.prototype._complete.call(this)},e.prototype.notifyNext=function(t,e,n,r,i){this.destination.next(e)},e}(L);Object.prototype.toString;function St(t,e,n,r){return o(n)&&(r=n,n=void 0),r?St(t,e,n).pipe(U(function(t){return h(t)?r.apply(void 0,t):r(t)})):new j(function(r){!function t(e,n,r,i,o){var s;if(function(t){return t&&"function"==typeof t.addEventListener&&"function"==typeof t.removeEventListener}(e)){var u=e;e.addEventListener(n,r,o),s=function(){return u.removeEventListener(n,r,o)}}else if(function(t){return t&&"function"==typeof t.on&&"function"==typeof t.off}(e)){var c=e;e.on(n,r),s=function(){return c.off(n,r)}}else if(function(t){return t&&"function"==typeof t.addListener&&"function"==typeof t.removeListener}(e)){var f=e;e.addListener(n,r),s=function(){return f.removeListener(n,r)}}else{if(!e||!e.length)throw new TypeError("Invalid event target");for(var h=0,a=e.length;h<a;h++)t(e[h],n,r,i,o)}i.add(s)}(t,e,function(t){arguments.length>1?r.next(Array.prototype.slice.call(arguments)):r.next(t)},r,n)})}n.d(e,"a",function(){return Tt}),n.d(e,"c",function(){return xt}),n.d(e,"b",function(){return gt});const Et=["click","mousemove","keydown","DOMMouseScroll","mousewheel","mousedown","touchstart","touchmove","focus","resize"],gt="active",xt="idle";class Tt{constructor(t={}){this._config=t,this._deactivate=null,this._config.idleInterval=this._config.idleInterval||6e4,this._config.events=this._config.events||Et,this._userEvents$=q(this._config.events).pipe(U(t=>St(document,t)),G()),this._deactivate=new at,this._activityState=new lt(xt)}startMonitor(){var t,e,n;this._deactivate.next(!0),function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=Number.POSITIVE_INFINITY,r=null,i=t[t.length-1];return et(i)?(r=t.pop(),t.length>1&&"number"==typeof t[t.length-1]&&(n=t.pop())):"number"==typeof i&&(n=t.pop()),null===r&&1===t.length&&t[0]instanceof j?t[0]:G(n)($(t,r))}(this._userEvents$.pipe(J(gt)),this._userEvents$.pipe(function t(e,n){return"function"==typeof n?function(r){return r.pipe(t(function(t,r){return q(e(t,r)).pipe(U(function(e,i){return n(t,e,r,i)}))}))}:function(t){return t.lift(new wt(e))}}(t=>vt(this._config.idleInterval).pipe(J(xt))))).pipe(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return function(e){var n=t[t.length-1];et(n)?t.pop():n=null;var r=t.length;return nt(1!==r||n?r>0?$(t,n):tt(n):X(t[0]),e)}}(xt),function(t){return t.lift(new rt(e,n))},(t=this._deactivate,function(e){return e.lift(new ot(t))})).subscribe(t=>{this._activityState.next(t)})}isActive(){return this._activityState.value===gt}isIdle(){return this._activityState.value===xt}activityObservable(){return this._activityState.asObservable()}stopMonitor(){this._deactivate.next(!0)}}},,,function(t,e,n){"use strict";n.r(e);var r=n(1);n.d(e,"Agent",function(){return r.a}),n.d(e,"STATE_IDLE",function(){return r.c}),n.d(e,"STATE_ACTIVE",function(){return r.b});var i=n(0);for(var o in i)["Agent","STATE_IDLE","STATE_ACTIVE","default"].indexOf(o)<0&&function(t){n.d(e,t,function(){return i[t]})}(o)}])});
//# sourceMappingURL=end-user-activity-monitor.js.map