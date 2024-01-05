// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

function addToZero(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === 0) {
                return true
            }
        }
    }
    return false
    }

console.log(addToZero([1, 2, 3, -2]))
// Runtime complexity O(n^2)
// Space complexity O(1) ?



// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

function hasUniqueChars(str) {
    const charSet = new Set()

    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        if (charSet.has(char)) {
            return false
        }
        charSet.add(char)
    }

    return true
    }

console.log(hasUniqueChars('billy'))
console.log(hasUniqueChars('monday'))
// Runtime complexity O(n)
// Space complexity O(n) ?




// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.

// function isPangram(sentence) {
//     const alphabet = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]

//     for (let i = 0; i < sentence.length; i++) {
//         const char = sentence.charAt(i)

//         if (alphabet.contains(char)) {
//             return false
//         }
//         alphabet.add(char)
//     }
//     return true
// }

function isPangram(sentence) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    for (let i = 0; i < alphabet.length; i++) {
        if (!sentence.toLowerCase().includes(alphabet[i])) {
            return false
        }
    }
    return true
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
console.log(isPangram("You are my Best Friend"))
// Runtime complexity O(n)
// Space complexity O(1)


// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

function findLongestWord(wordsArr) {
    let longest = 0

    for (let i = 0; i < wordsArr.length; i++) {
        const currentWord = wordsArr[i].length
        if (currentWord > longest) {
            longest = currentWord
        }
    }
    return longest
    }

console.log(findLongestWord(["hi", "hello"]))
// Runtime complexity O(n)
// Space complexity O(1)