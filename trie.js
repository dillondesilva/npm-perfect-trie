class Node {
  constructor(prefix) {
    this._prefix = prefix;
    this._childnodes = {};
    this._complete = false;
  }

  getPrefix() {
    // This method will return the inital string prefix 
    return this._prefix;
  }

  getChildren() {
    // This method will return all the child node objects if any exist
    var childnodes = [];
    for(var key in this._childnodes) {
      childnodes.push(this._childnodes[key]);
    }

    return childnodes;
  }

  isWord() {
    // Returns true if the node prefix is also a valid string/word
    if (this._complete) {
      return true;
    } else {
      return false
    }
  }

  addWord(word) {
    var prefix = '';    
    var node = this;
    for (var i=0; i < word.length; i++) {
      var letterToAdd = word[i];
      prefix += letterToAdd;
      if (node._childnodes[letterToAdd]) {
        node = node._childnodes[letterToAdd];
      } else {
        var newNode = new Node(prefix);
        node._childnodes[letterToAdd] = newNode;
        node = newNode;
      }
    }

    node._complete = true;
  }

  find(prefix) {
    var matchFound = false;
    var node = this;
    for (var i=0; i < prefix.length; i++) {
      var letter = prefix[i];
      if (letter in node._childnodes) {
        node = node._childnodes[letter];
        matchFound = true;
      } 
      
      else if ((letter in node._childnodes !== true) && (matchFound)) {
        matchFound = false;
      } 
    }

    if (matchFound === false) {
      return null;
    } else {
      return node;
    }

  }

  words() {
    var completeWords = [];

    function getWords(node) {
      if (node._complete) {
        completeWords.push(node._prefix);
      } 

      for (var key in node._childnodes) {
        getWords(node._childnodes[key]);
      }
    }

    if (this._complete) {
      completeWords.push(this._prefix);
    }

    if (Object.keys(this._childnodes).length === 0) {
      return completeWords;
    }

    for (var key in this._childnodes) {
      getWords(this._childnodes[key])
    }
    
    return completeWords.sort();
  }
}

module.exports = Node;