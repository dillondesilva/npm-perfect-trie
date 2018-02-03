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

### getChildren()
Returns any children of the specified node

### isWord()
Returns true if specified node has a complete prefix

### addWord()
Adds the word to the trie and as a result, produces child nodes

### find()
Returns the node of the given prefix or null if not found

### words()
Returns an array of words that start with the prefix of the specified node