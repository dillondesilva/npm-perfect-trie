# npm-perfect-trie

A simple npm package that allows you to build and manipulate a prefix trie

## Getting started

Check out the instructions below for setting up perfect-trie!

### Installation

To install perfect-trie and save it, use the command below:

```
npm install perfect-trie --save
```

### Usage

The following snippet of code is an example of how to use perfect-trie

```js
var Trie = require('perfect-trie');

var trie = new Trie ('');

trie.addWord('tea');

var match = trie.find('te');

if (match.success) {
  if (match.isComplete) {
    console.log('Found an exact match');
  } else {
    console.log('Found following words starting with the matching prefix: ')
    for (var word in match.words) {
      console.log(match.words[word]);
    }
  }
} else {
  console.log('No match found');
}
```

## About
A prefix trie is a type of tree data structure which is used to store data usually in the form of strings. Prefix tries allow for the fast and efficient search of data in the trie as they minimise repetition and loss of information.

It is very common to find the use of prefix tries in programs as they can be used to think ahead for the user and save time. An example of where prefix tries are used are in predictive text features in mobile phones. In conclusion, perfect-trie aims to make it easy to create and manipulate your own prefix tries.

## API
### Trie ()
Initialises a new Trie instance

### .addWord()
Adds a string to the trie
```js
var trie = new Trie ('');

trie.addWord('tea');
```

### .find()
Finds a specified string in the trie and returns an object containing the match data
```js
var trie = new Trie ('');

trie.addWord('nintendo');

var match = trie.find('nin');
```

## Acknowledgements

Thank you to Buddhike de Silva for reviewing my documentation