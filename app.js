// Write a function called isPalindrome that takes in a string and returns
//  true if the string is a palindrome (reads the same forwards and backwards),
//   and false otherwise. Ignore spaces and consider uppercase and lowercase letters as equal. 
//   Use the provided code to test your solution.

function isPalindrome(str) {
    
    const word = str.split("")
    const reversedWord = word.reverse()
    const reversedString = reversedWord.join("")
        
    return str === reversedString
}
  
  console.log(isPalindrome("racecar")); // Expected Output: true
  console.log(isPalindrome("hello")); // Expected Output: false