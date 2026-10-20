const { test } = require("node:test")
const assert = require("node:assert")
const { BinarySearchTree } = require("../binarySearchTree")

const treeOf = (...vals) => vals.reduce((tree, v) => tree.insert(v), new BinarySearchTree())

test("insert keeps values sorted and ignores duplicates", () => {
    const tree = treeOf(8, 3, 10, 1, 6, 14, 6)
    assert.deepStrictEqual(tree.inOrder(), [1, 3, 6, 8, 10, 14])
    assert.strictEqual(tree.size(), 6)
})

test("contains finds values", () => {
    const tree = treeOf(8, 3, 10, 1, 6)
    assert.strictEqual(tree.contains(6), true)
    assert.strictEqual(tree.contains(7), false)
    assert.strictEqual(new BinarySearchTree().contains(1), false)
})

test("min and max", () => {
    const tree = treeOf(8, 3, 10, 1, 14)
    assert.strictEqual(tree.min(), 1)
    assert.strictEqual(tree.max(), 14)
    assert.strictEqual(new BinarySearchTree().min(), undefined)
})

test("traversals visit nodes in the right order", () => {
    const tree = treeOf(8, 3, 10, 1, 6, 14)
    assert.deepStrictEqual(tree.preOrder(), [8, 3, 1, 6, 10, 14])
    assert.deepStrictEqual(tree.levelOrder(), [8, 3, 10, 1, 6, 14])
})

test("height counts the levels", () => {
    assert.strictEqual(new BinarySearchTree().height(), 0)
    assert.strictEqual(treeOf(5).height(), 1)
    assert.strictEqual(treeOf(8, 3, 10, 1).height(), 3)
    // inserting sorted values makes a lopsided tree: the worst case
    assert.strictEqual(treeOf(1, 2, 3, 4, 5).height(), 5)
})

test("remove handles leaves, one child, two children, and the root", () => {
    const tree = treeOf(8, 3, 10, 1, 6, 14, 4, 7, 13)
    assert.strictEqual(tree.remove(1), true)   // leaf
    assert.strictEqual(tree.remove(14), true)  // one child
    assert.strictEqual(tree.remove(3), true)   // two children
    assert.strictEqual(tree.remove(8), true)   // the root
    assert.deepStrictEqual(tree.inOrder(), [4, 6, 7, 10, 13])
    assert.strictEqual(tree.remove(99), false)
})
