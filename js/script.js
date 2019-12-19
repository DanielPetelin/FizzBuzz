var num = [];
var fizz = 'Fizz' 

for (var i = 0; i <= 100; i++) {
    if (i % 3 == 0) {
        num.push(fizz);
    } else {
      num.push(i);  
    }
}
console.log(num);