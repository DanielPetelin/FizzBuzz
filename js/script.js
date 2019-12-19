var num = [];
var fizz = 'Fizz';
var buzz = 'Buzz'; 

for (var i = 0; i <= 100; i++) {
    if (i % 3 == 0) {
        num.push(fizz);
    } else if (i % 5 == 0 & i % 3 !== 0) {
        num.push(buzz);
    } else {
      num.push(i);  
    }
}
console.log(num);