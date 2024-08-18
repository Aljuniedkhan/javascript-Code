// sum of a array elements by using function
const array=[1,2,3,4,5]
let sum=0;
function sumOfArray(num){
for(const num of array){
    console.log(num);
    sum=sum+num;
}
return sum;
}
sumOfArray()
console.log(sum);
