// Find the average of odd number in an array.

function oddAverage(number){
    const odd=[];
    let sum = 0;
for(const num of numbers){
    if(num%2 !==0){
        odd.push(num);
    }   
}
for(const no of odd){
   sum = (sum+no);
}
console.log(sum); 
}

const numbers=[1,2,3,6,27,13,20];
oddAverage();


