// Gustavo Corona
//Journal.js made July 6, 2025

// Greet a user by name
function greet(name) {
  return "Hello, " + name + "!";
}

// Reverse the letters in a word
function reverseWord(word) {
  return word.split("").reverse().join("");
}

// Check if a word is the same forward and backward
function isPalindrome(word) {
  return word === word.split("").reverse().join("");
}

// Say goodbye to a user
function farewell(name) {
  return "Goodbye, " + name + "!";
}

// Add two numbers together
function add(a, b) {
  return a + b;
}
