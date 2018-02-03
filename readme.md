# npm-perfect-trie

A simple npm package that allows you to build and manipulate a prefix trie

## Getting started

Check out the instructions below for setting up perfect-trie!

### Installation

To install perfect-trie, use the command below:

```
npm install perfect-trie --save
```

## API
### getPrefix()
Returns the prefix of the specified node
```js
var root = new Node ('trie');

// Should return the string, 'trie'
console.log(root.getPrefix());
```

### getChildren()
Returns any children of the specified node
```js
var root = new Node ('');

root.addWord('tea');

var node = root.find('te');
// Should return an array with a Node Object inside with the key of 'a'
console.log(node.getChildren());
```

### isWord()
Returns true if specified node has a complete prefix
```js
var root = new Node ('');

root.addWord('tea');

var node = root.find('tea');
// Should return true
console.log(node.isWord());
```

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
```js
var root = new Node ('');

root.addWord('perfect');
root.addWord('perfecto');
root.addWord('peri');

var node = root.find('per');
// Should return the array, ['perfect', 'perfecto', 'peri']
var wordList = node.words();
```