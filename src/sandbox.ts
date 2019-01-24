/* eslint-disable no-unused-vars */
/*

  Why Typescript:
  - Better to catch errors at compile time rather than at runtime
  - Documentation: function signature is theorem, function body is truth

  JS with optional type-checking.

*/

const log = (...args: any[]) => console.log(...args)

// Types can be implicit
const foo = 123
log('foo', foo)

// ... or explicit (using postfix type annotations)
const bar: string = 'Hello world'
log('bar', bar)

interface V {
  v: number
}

// Types are "structural" (not nominal) - support duck-typing
// composed three annotations
interface Point3D {
  x: number
  y: number
  z?: number
}

// Inline type annotation
let AnotherPoint3D: {
  xx: number
  yy: number
  zz?: number
}

const point: Point3D = { x: 5, y: 10 }
const point2: Point3D = { x: 1, y: 2, z: 3 }

function logPoint(p: Point3D) {
  log('point', p)
}

logPoint(point)
logPoint(point2)
logPoint({ x: 1, y: 2 }) // structural!
// logPoint({ x: 3 }) // incomplete

// Type errors do not prevent JavaScript emit!

// Declarations

declare const $: any

// Class

class Point {
  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor(public x: number, public y: number) {
    this.x = x
    this.y = y
  }

  add(p: Point) {
    return new Point(this.x + p.x, this.y + p.y)
  }
}

const p1 = new Point(100, 200)
log('point.add', p1.add(new Point(10, 5)))

// Function return type

function someFunc(): { a: number; b?: number } {
  // if Something
  return { a: 1, b: 2 }
  // else
  // return { a: 1 }
}

log(someFunc())

// Special types
let a: any // telling the compiler not to do any static analysis
let b: null
let c: undefined
let d: void

function returnsVoid(): void {
  log('Hello')
}

/*
  Generics

  Many algorithms and data structures in computer science do not depend on the actual type.
  However, you still want to ensure constraints.
*/

function reverse<T>(items: T[]): T[] {
  return items.reverse()
}

log(reverse([1, 2, 3]))
log(reverse(['a', 'b', 'c']))

// Union Type

function testUnion(p: string | number) {
  if (typeof p === 'string') {
    log('string', p)
  }
  if (typeof p === 'number') {
    log('number', p)
  }
}

testUnion('a string')
testUnion(5)
// testUnion({}) // no good

// Intersection Type

/* eslint-disable no-restricted-syntax, guard-for-in, no-prototype-builtins */
function extend<T, U>(first: T, second: U): T & U {
  const result = <T & U>{}
  for (const id in first) {
    ;(<any>result)[id] = first[id]
  }
  for (const id in second) {
    if (!result.hasOwnProperty(id)) {
      ;(<any>result)[id] = second[id]
    }
  }
  return result
}

const value = extend({ a: 'hello' }, { b: 42 })
log(value)
/* eslint-enable no-restricted-syntax, guard-for-in, no-prototype-builtins */

// Dummy export to fix typecheck issue
export {}
