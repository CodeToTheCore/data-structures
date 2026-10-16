const { test } = require("node:test")
const assert = require("node:assert")
const { LinkedList } = require("../linkedList")

const listOf = (...vals) => vals.reduce((list, v) => list.append(v), new LinkedList())

test("append adds to the end", () => {
    assert.deepStrictEqual(listOf("a", "b", "c").toArray(), ["a", "b", "c"])
})

test("prepend adds to the front", () => {
    assert.deepStrictEqual(listOf("a", "b").prepend("z").toArray(), ["z", "a", "b"])
    assert.deepStrictEqual(new LinkedList().prepend("only").toArray(), ["only"])
})

test("find returns the node or null", () => {
    const list = listOf(1, 2, 3)
    assert.strictEqual(list.find(2).val, 2)
    assert.strictEqual(list.find(2).next.val, 3)
    assert.strictEqual(list.find(9), null)
})

test("delete removes the head, middle, and tail", () => {
    const list = listOf("a", "b", "c", "d")
    assert.strictEqual(list.delete("a"), true)
    assert.strictEqual(list.delete("c"), true)
    assert.strictEqual(list.delete("d"), true)
    assert.deepStrictEqual(list.toArray(), ["b"])
    assert.strictEqual(list.delete("x"), false)
    assert.strictEqual(new LinkedList().delete("a"), false)
})

test("insertAt puts a value at a position", () => {
    const list = listOf("a", "c")
    assert.strictEqual(list.insertAt(1, "b"), true)
    assert.strictEqual(list.insertAt(3, "d"), true)
    assert.strictEqual(list.insertAt(0, "start"), true)
    assert.deepStrictEqual(list.toArray(), ["start", "a", "b", "c", "d"])
    assert.strictEqual(list.insertAt(99, "nope"), false)
})

test("size counts the nodes", () => {
    assert.strictEqual(new LinkedList().size(), 0)
    assert.strictEqual(listOf(1, 2, 3).size(), 3)
})

test("reverse flips the list in place", () => {
    assert.deepStrictEqual(listOf(1, 2, 3).reverse().toArray(), [3, 2, 1])
    assert.deepStrictEqual(new LinkedList().reverse().toArray(), [])
})

test("print returns the arrow format", () => {
    assert.strictEqual(listOf("a", "b").print(), "a -> b -> null")
    assert.strictEqual(new LinkedList().print(), "null")
})
