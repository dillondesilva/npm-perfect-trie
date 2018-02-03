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
var Node = require('perfect-trie');

// Creating a Node
var root = new Node('');

// Adding words to trie
var wordsToAdd = ['dog', 'doll', 'dot'];
for (var word in wordsToAdd) {
  root.addWord(wordsToAdd[word]);
}

// Finding a node starting with a certain prefix
var n = root.find('do');

// Expected output: 'do'
console.log(n.getPrefix());
```

## API
### Node ()
Initialises a new Node class

### getPrefix()
Returns the prefix of the specified node

### getChildren()
Returns any children of the specified node

### isWord()
Returns true if specified node has a complete prefix

### addWord()
Adds the word to the trie and as a result, produces child nodes
```js
var root = new Node ('');

root.addWord('tea');
```

### find()
Returns the node of the given prefix or null if not found
```js
var root = new Node ('');

root.addWord('tea');

var node = root.find('te');
```

### words()
Returns an array of words that start with the prefix of the specified node

## Acknowledgements

Thank you to Buddhike de Silva for reviewing my documentation