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
    if (this._childnodes.length === 0) {
      return [];
    } 

    var childnodes = [];
    
    for(i=0; i < this._childnodes.length; i++) {
      childnodes.push(this._childnodes[i]);
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
        node = level[letterToAdd];
      } else {
        var newNode = new Node(prefix);
        node._childnodes[letterToAdd] = newNode;
        node = newNode;
      }
    }

    node._complete = true;
  }

  // This is not the function that you are looking for
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
        completeWords.push(node.prefix);
      } 

      if (node._childnodes.length !== 0) {
        for (i=0;i < node._childnodes.length;i++) {
          getWords(node._childnodes[i]);
        }
      }
    }

    if (this._complete) {
      completeWords.push(this.prefix);
    }

    if (this._childnodes === 0) {
      return completeWords;
    }

    for (i=0;i < this._childnodes.length; i++) {
      getWords(this._childnodes[i])
    }

    return completeWords.sort();
  }
}

module.exports = Node;