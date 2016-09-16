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
        return g;
        var e;
    }
f(1)                // What does this return?
```
Have you seen something like this on an interview? They used to make my head hurt, but now they are very easy...

The first thing that happens when this code is run is 'Hoisting'. Hoisting is the first process that happens where it takes and initializes all the vairables. Starting with the outside level (global scope, aka window.var):

It comes across 3 variables, a b and f

variable | value
------------ | -------------
a | 1
b | 2
f | is a function object
