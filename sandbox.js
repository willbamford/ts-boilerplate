"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/* eslint-disable no-unused-vars */

/*

  Why Typescript:
  - Better to catch errors at compile time rather than at runtime
  - Documentation: function signature is theorem, function body is truth

  JS with optional type-checking.

*/
// Dummy export to fix typecheck issue
var log = function log() {
  var _console;

  return (_console = console).log.apply(_console, arguments);
}; // Types can be implicit


var foo = 123;
log('foo', foo); // ... or explicit (using postfix type annotations)

var bar = 'Hello world';
log('bar', bar); // Types are "structural" (not nominal) - support duck-typing
// composed three annotations

// Inline type annotation
var AnotherPoint3D;
var point = {
  x: 5,
  y: 10
};
var point2 = {
  x: 1,
  y: 2,
  z: 3
};

function logPoint(p) {
  log('point', p);
}

logPoint(point);
logPoint(point2);
logPoint({
  x: 1,
  y: 2
}); // structural!
// logPoint({ x: 3 }) // incomplete
// Type errors do not prevent JavaScript emit!
// Declarations

// Class
var Point =
/*#__PURE__*/
function () {
  // eslint-disable-next-line no-useless-constructor, no-empty-function
  function Point(x, y) {
    (0, _classCallCheck2.default)(this, Point);
    this.x = x;
    this.y = y;
  }

  (0, _createClass2.default)(Point, [{
    key: "add",
    value: function add(p) {
      return new Point(this.x + p.x, this.y + p.y);
    }
  }]);
  return Point;
}();

var p1 = new Point(100, 200);
log('point.add', p1.add(new Point(10, 5))); // Function return type

function someFunc() {
  // if Something
  return {
    a: 1,
    b: 2 // else
    // return { a: 1 }

  };
}

log(someFunc()); // Special types

var a; // telling the compiler not to do any static analysis

var b;
var c;
var d;

function returnsVoid() {
  log('Hello');
}
/*
  Generics

  Many algorithms and data structures in computer science do not depend on the actual type.
  However, you still want to ensure constraints.
*/


function reverse(items) {
  return items.reverse();
}

log(reverse([1, 2, 3]));
log(reverse(['a', 'b', 'c'])); // Union Type

function testUnion(p) {
  if (typeof p === 'string') {
    log('string', p);
  }

  if (typeof p === 'number') {
    log('number', p);
  }
}

testUnion('a string');
testUnion(5); // testUnion({}) // no good
// Intersection Type

/* eslint-disable no-restricted-syntax, guard-for-in, no-prototype-builtins */

function extend(first, second) {
  var result = {};

  for (var id in first) {
    ;
    result[id] = first[id];
  }

  for (var _id in second) {
    if (!result.hasOwnProperty(_id)) {
      ;
      result[_id] = second[_id];
    }
  }

  return result;
}

var x = extend({
  a: 'hello'
}, {
  b: 42
});
log(x);
/* eslint-enable no-restricted-syntax, guard-for-in, no-prototype-builtins */