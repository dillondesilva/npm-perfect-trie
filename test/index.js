const assert = require("assert");
const Trie = require("../src");

describe('Tests', () => {
  var root;

  before(() => {
    root = new Trie('');
  });

  it('should find the node with a certain prefix', () => {
    root.addWord('ten');
    var node = root.find('te');
    assert.equal('te', node['prefix']);
    assert.equal(false, node['isComplete']);
  });

  it('should find the node for a complete match', () => {
    root.addWord('ten');
    var node = root.find('ten');
    assert.equal('ten', node['prefix']);
    assert.equal(true, node['isComplete']);
  });

  it('should not find unmatching words', () => {
    root.addWord('ten');
    var node = root.find('ben');
    assert.equal(null, node['prefix']);
  });

  it('Testing finding a node with a non-existing prefix', () => {
    root.addWord('ten');
    var node = root.find('telephone');
    assert.equal(false, node['success']);
  })

  it('should return true for checking if a prefix is a word', () => {
    root.addWord('tea');
    var node = root.find('tea');
    assert.equal(true, node['isComplete']);
  })
});
