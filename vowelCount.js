// write the function to count the number of vowel in a string

function VowelCount(num) {
    let str = 'work hard and gain success';
    let array = [];
    let array2 = ['a', 'e', 'i', 'o', 'u'];
    for (const char of array2) {
        // console.log(char);
        if (str.includes(char)) {
            array.push(char);
        }
    }
    console.log(array);
    let vowelCount = array.length;

    console.log(vowelCount);
    return vowelCount;
}
VowelCount();