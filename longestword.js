// Find the longest word from a string by using a function.
function longestword() {
    let string = 'I am learing programming to become a programmer';
    let words = string.split(' ');
    let longestword = '';
    for (const word of words) {
        if (word.length > longestword.length) {
            longestword=word;

        }
    }
    return longestword;
}
let result = longestword();
console.log(result);
longestword();