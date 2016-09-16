# xeoAdvancedJS
### Closure examples and best JavaScript practices.

#### Why?
I never liked the question why, the answer is generally obvious but the reason why I put this on here is to demonstrate that I understand Closures and how the lexical scoping works in JavaScript. These concepts are the introduction to very advanced JavaScript teqniques.

#### I keep hearing closure, just what is a closure??
If you're anything like me, you keep getting this question during your interviews for UI / Front-end / QA Test Engineer, basically anything that uses javascript. To keep it simple it's an innerfuction that has access to otherwise private vairables and can see a few different levels of variables. 
* It's own function vars
* It's parents function vars
* Global vars


## Closure Example
```javascript

var a = 1;
    b = 2;

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
```
