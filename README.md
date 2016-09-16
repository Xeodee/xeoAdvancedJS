# xeoAdvancedJS
### Closure examples and best JavaScript practices.

#### Why?
I never liked the question why, the answer is generally obvious but the reason why I put this on here is to demonstrate that I understand Closures and how the lexical scoping works in JavaScript. These concepts are the introduction to very advanced JavaScript teqniques.

#### I keep hearing closure, just what is a closure??
If you're anything like me, you keep getting this question during your interviews for UI / Front-end / QA Test Engineer, basically anything that uses javascript. To keep it simple it's an innerfuction that has access to otherwise private vairables and can see a few different levels of variables. 
* It's own function vars
* It's parents function vars
* Global vars


## Closure & Scope example (breaking down how JavaScript works..)

We are going to break down step by step what happens in this code example.

```javascript

a = 1;
var b = 2;

function f(z){
    b = 3;
    c = 4;
    var d = 5;
    e = 6;
        
        function g() {
          e = 0;
          d = 2*d;
          return d;
        }
    return g();
    var e;
    }
f(1)                // What does this return?
```
Have you seen something like this on an interview? They used to make my head hurt, but now they are very easy...

The first thing that happens when this code is run is 'Hoisting'. Hoisting is the first process that happens where it takes and initializes all the vairables. Starting with the outside level (global scope, aka window.var):

It comes across 3 variables, a b and f
global or window.var

variable | value
------------ | -------------
a | 1
b | 2
f | lambda "f" (func obj)

Now we have this and f will execute, so we have to do some hoisting..

local scope execution of f

variable | value
------------ | -------------
z | 1
this | *
arguments | psuedoArr[1]
g | lambda "g"

Now we are at line b=3 which changes the global for b, then c=4.. since it doesn't have var in front of it, c becomes a global vairable as long as we are not in strict mode.

global scope

variable | value
------------ | -------------
a | 1
b | ~~2~~ 3
f | lambda "f" (func obj)
:bangbang: c | 4

```javascript
function f(z){
    b = 3;
    c = 4;
    var d = 5;
    e = 6;
        
        function g() {
          e = 0;
          d = 2*d;
          return d;
        }
    return g();
    var e;  // This is after the return, thus nothing happens.
    }
```

Now we are at var d = 5. Since var was declared it is straight foward. d is already in this local scope of f so we just assign the value 5. Here is where it gets interesting, e = 6. Since we didn't write var before e=6; it now goes up the scope chain to global.

local scope execution of f

variable | value
------------ | -------------
z | 1
this | *
arguments | psuedoArr[1]
:bangbang: d | 5
:bangbang: e | 6
g | lambda "g" (func obj)

global scope

variable | value
------------ | -------------
a | 1
b | ~~2~~ 3
f | lambda "f" (func obj)
c | 4
:bangbang: e | 6

So now we can execute G!

```javascript
function g() {
          e = 0;    // even tho e is defined in 2 scopes, only local becomes 0
          d = 2*d;  // D appears in the scope of the f function d = 2 * 5; which is 10
          return d;
}
```
Gs scope
variable | value
------------ | -------------
:bangbang: e | 0
d | ~~5~~ 10

So now, what happens when f(1) was run? well it basically breaks down to z*d, z = 1 d = 10 1*10 = 10!

Horray!
