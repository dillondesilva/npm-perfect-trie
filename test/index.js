const assert = require("assert");
const Node = require("../src");

describe('Tests', () => {
  var root;

  before(() => {
    root = new Node('');
  });

  it('should find the node with a certain prefix', () => {
    root.addWord('ten');
    var node = root.find('te');
    assert.equal('te', node._prefix);
    assert.equal(false, node._complete);
  });

  it('should find the node for a complete match', () => {
    root.addWord('ten');
    var node = root.find('ten');
    assert.equal('ten', node._prefix);
    assert.equal(true, node._complete);
  });

  it('should not find unmatching words', () => {
    root.addWord('ten');
    var node = root.find('ben');
    assert.equal(null, node);
  });

  it('getChildren method should work', () => {
    root.addWord('tell');
    var node = root.find('tel');
    var children = node.getChildren();
    assert.equal('tell', children[0]._prefix);
  })

  it('getPrefix method should work', () => {
    root.addWord('tea');
    var node = root.find('te');
    var nodePrefix = node.getPrefix();
    assert.equal('te', nodePrefix);
  })

  it('Testing finding a node with a non-existing prefix', () => {
    root.addWord('ten');
    var node = root.find('telephone');
    assert.equal(null, node);
  })

  it('should return back a list of words', () => {
    var wordsToAdd = ['ten', 'ted', 'tea'];
    for (var word in wordsToAdd) {
      root.addWord(wordsToAdd[word]);
    }

    var wordsList = root.words();
    var checker = ['ten', 'ted', 'tea', 'tell'].sort();
    assert.deepEqual(checker, wordsList);
  })

  it('should return true for checking if a prefix is a word', () => {
    var node = root.find('tea');
    assert.equal(true, node.isWord());
  })
});
