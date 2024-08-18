
function VowelCount(num) {
    let str = 'work hard and gain success';
    let vowelcount=0;
    let array2 = ['a', 'e', 'i', 'o', 'u'];
    for (const char of array2) {
        // console.log(char);
        if (str.includes(char)) {
           vowelcount++;
        }
    }
    console.log(vowelcount);
}
VowelCount(); 