let a = 1;
let b = 2;
let c = 3;
console.log(a + b + c);
let myArray = [1, 2, 3];
let sum = 0;
for (let i = 0; i < myArray.length; i++) {
    sum += myArray[i];
}
console.log(sum);
sum = 0;
myArray.forEach((number) => { sum += number; });
console.log(sum);
