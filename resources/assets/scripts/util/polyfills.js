/**
 * This file includes all minimum necessary polyfills
 * for older browsers
 */

// Polyfill for creating CustomEvents on IE9/10/11
// code pulled from:
// https://github.com/d4tocchini/customevent-polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Polyfill
!(typeof Number.isNaN == 'function') ||
(Number.isNaN = function (value) {
  return value !== null // Number(null) => 0
    && (value != value // NaN != NaN
      || +value != value // Number(falsy) => 0 && falsy == 0...
    )
});
(function() {
  if (typeof window === 'undefined') {
    return;
  }
  try {
    var ce = new window.CustomEvent('test', { cancelable: true });
    ce.preventDefault();
    if (ce.defaultPrevented !== true) {
      // IE has problems with .preventDefault() on custom events
      // http://stackoverflow.com/questions/23349191
      throw new Error('Could not prevent default');
    }
  } catch (e) {
    var CustomEvent = function(event, params) {
      var evt, origPrevent;
      params = params || {};
      params.bubbles = !!params.bubbles;
      params.cancelable = !!params.cancelable;

      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(
        event,
        params.bubbles,
        params.cancelable,
        params.detail
      );
      origPrevent = evt.preventDefault;
      evt.preventDefault = function() {
        origPrevent.call(this);
        try {
          Object.defineProperty(this, 'defaultPrevented', {
            get: function() {
              return true;
            },
          });
        } catch (e) {
          this.defaultPrevented = true;
        }
      };
      return evt;
    };

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent; // expose definition to window
  }
})();

// Add `.assign` support to older browser
// @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
if (typeof Object.assign != 'function') {
  Object.assign = function(target) {
    'use strict';
    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    target = Object(target);
    for (var index = 1; index < arguments.length; index++) {
      var source = arguments[index];
      if (source != null) {
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    }
    return target;
  };
}

if ('NodeList' in window && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

// Number.isNaN() polyfill
!(typeof Number.isNaN == 'function') ||
  (Number.isNaN = function (value) {
    return value !== null // Number(null) => 0
      && (value != value // NaN != NaN
        || +value != value // Number(falsy) => 0 && falsy == 0...
      )
  });

// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN#Description
// for explanation of coercions (false, '0', '', null, and undefined)

console.warn(
  [2, 3, 5, 7, 
   -0, 
   Number.NEGATIVE_INFINITY, 
   Number.POSITIVE_INFINITY, 
   +false, // +false => 0
   +true,
   false, // Number(false) => 0
   true,
   '0', // Number('0') => 0
   '1',
   '', // Number('') => 0
   '       ',
   null, // Number(null) => 0
  ]
  .map(function(value) {
    return !Number.isNaN(value);
  })
  .filter(function(ok, i) {
    console.log(ok)
    return ok || (function(i) {
      throw 'test ' + (i) + ' failed.'
    }(i))
  })
);

console.warn(
  [undefined, // +undefined => NaN
   'jimmy',   // +'non-digit-string' => NaN
   1 * 'a',   // multiplication on non-numeric value, 
   NaN,     // because NaN !== NaN, of course
  ]
  .map(function(value) {
    return Number.isNaN(value);
  })
  .filter(function(ok, i) {
    return ok || (function(i) {
      throw 'test ' + (i) + ' failed.'
    }(i))
  })
);