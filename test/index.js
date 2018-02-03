const assert = require("assert");
const Node = require("../trie");

describe('Tests', () => {
  var root;

  before(() => {
    root = new Node('');
  });

  it('should find the node with a certain prefix', () => {
    root.addWord('ten');
    var node = root.find("te");
    console.log(node);
  });
});
