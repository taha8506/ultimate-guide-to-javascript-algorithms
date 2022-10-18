/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

const vowels = ['a', 'e', 'i', 'o', 'u']

//iterative way

function vowelsCounter(text) {
    // initialize counter
    let counter = 0

    //loop through text to test if each character is a vowel
    for (let letter of text.toLowerCase()) {
        if (vowels.includes(letter)) {
            counter++
        }
    }
    return counter
}

/*
 Using Regular Expressions to count the number of vowels in a string of text.
 */

function vowelsCounter(text) {
    // Search text with Regex and store all matching instances 
    let matchingInstances = text.match(/[aeiou]/gi);

    // Check if matching instances exist then calculate length
    if (matchingInstances) {
        // Return number of vowels
        return matchingInstances.length
    } else {
        return 0
    }
}



module.exports = vowelsCounter;
