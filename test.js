var x = 1;
a();
b();
console.log(x);

function a() {
    var x = 10;
    var y=this.x;
    console.log(x);
    console.log(y);
    console.log(this);
     console.log(globalThis);
}


function b() {
    var x = 100;
    console.log(x);
}