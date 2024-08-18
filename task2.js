const numbers =[12,98,5,41,23,78,46];
const EvenNum=[]

for(const num of numbers){
    // console.log(num);
    if(num%2===0){
        EvenNum.push(num);
    }
}
console.log(EvenNum);