
setTimeout(() => console.log("4"), 2000)

    setTimeout(() => console.log("1")); 



let p = new Promise((res, rej) => res());

console.log("2");

p.then((res) => console.log("3"));

setTimeout(() => console.log("51"));

p.then((console.log("6"));

console.log('8');

setTimeout(() => console.log("5"));

 
2 8 4 1 3 51 6 5


// 

(() => {
  let x, y;
  try {
    throw new Error();
  } catch (x) {
    x = 1;
    y = 2;
    console.log(x);
    console.log(y);
  }
  console.log(x);
  console.log(y);
})();
// 1 2 undefined 2



var value = 10;
var obj = {
  value: 0,
  val: this.value,
  fun: () => this.value,
  func: function () {
    return this.value;
  },
  iife: (function () {
    return this.value;
  })(),
};

console.log(obj.val);     
console.log(obj.fun());   
console.log(obj.func());  
console.log(obj.iife);  

// 0 0 0 0



function foo() {
    console.log( 1 );
}
foo();
var foo = function() {
    console.log( 3 );
};
function foo() {
    console.log( 2 );
}

// 2

