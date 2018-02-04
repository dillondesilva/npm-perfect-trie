class Trie {
  constructor(prefix) {
    this._prefix = prefix;
    this._childnodes = {};
    this._complete = false;
  }

  _getPrefix(node) {
    // This method will return the inital string prefix
    return node._prefix;
  }

  _getChildren(node) {
    // This method will return all the child node objects if any exist
    var childnodes = [];
    for(var key in node._childnodes) {
      childnodes.push(node._childnodes[key]);
    }

    return childnodes;
  }

  _isWord(node) {
    // Returns true if the node prefix is also a valid string/word
    if (node._complete) {
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
        var newNode = new Trie(prefix);
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
      var returnObj = {
        success: false,
        isComplete: false,
        prefix: null,
        words: []
      }

      return returnObj;
    } else {
      var returnObj = {
        'success': true,
        'isComplete': node._isWord(node),
        'prefix': node._getPrefix(node),
        'words': node._words(node)
      }

      return returnObj;
    }

  }

  _words(node) {
    var completeWords = [];

    function getWords(n) {
      if (n._complete) {
        completeWords.push(n._prefix);
      } 

      for (var key in n._childnodes) {
        getWords(n._childnodes[key]);
      }
    }

    if (node._complete) {
      completeWords.push(node._prefix);
    }

    if (Object.keys(node._childnodes).length === 0) {
      return completeWords;
    }

    for (var key in node._childnodes) {
      getWords(node._childnodes[key])
    }
    
    return completeWords.sort();
  }
}

module.exports = Trie;