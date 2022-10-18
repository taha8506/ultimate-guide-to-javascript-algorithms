/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/


// builtin methods
function reverseString(text) {
    return text.split("").reverse().join("")
}

// es6 + built in methods
function reverseString(text) {
    return [...text].reverse().join
}

//for loop method
function reverseString(text) {
    let result = ''

    for (let i = text.length - 1; i >= 0; i--) {
        result += text[i]
    }
    return result
}

// for of version
function reverseString(text) {
    let result = ""

    for (let char of text) {
        result = char + text
    }

    return result
}

// recursive way
function reverseString(text) {
    if (text === "") {
        return ""
    } else {
        return reverseString(text.subsrtr(1)) + text[0]
    }
}

//using reduce
function reverseString(text) {
    return text.split("").reduce((acc, char) => char + acc, "")
}



module.exports = reverseString