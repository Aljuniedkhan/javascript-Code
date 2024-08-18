// remove dublicate item from an array
const numbers =[1,3,1,4,7,2,3,7,52]
function dublicateItem(numbers){
    let unique = [];
    for(const no of numbers){
        if(unique.includes(no)===false){
            unique.push(no);
        }
    }
   return unique;
}
const uniquearray = dublicateItem(numbers);
console.log(uniquearray); 