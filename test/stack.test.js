const { test } = require("node:test")
const assert = require("node:assert")
const { Stack, isBalanced } = require("../stack")

test("push and pop are last in, first out", () => {
    const stack = new Stack().push(1).push(2).push(3)
    assert.strictEqual(stack.pop(), 3)
    assert.strictEqual(stack.pop(), 2)
    assert.strictEqual(stack.size(), 1)
})

test("peek shows the top without removing it", () => {
    const stack = new Stack().push("a").push("b")
    assert.strictEqual(stack.peek(), "b")
    assert.strictEqual(stack.size(), 2)
})

test("an empty stack returns undefined", () => {
    const stack = new Stack()
    assert.strictEqual(stack.isEmpty(), true)
    assert.strictEqual(stack.pop(), undefined)
    assert.strictEqual(stack.peek(), undefined)
})

test("isBalanced checks matching brackets", () => {
    assert.strictEqual(isBalanced("({[]})"), true)
    assert.strictEqual(isBalanced("function () { return [1, 2] }"), true)
    assert.strictEqual(isBalanced(""), true)
    assert.strictEqual(isBalanced("([)]"), false)
    assert.strictEqual(isBalanced("(("), false)
    assert.strictEqual(isBalanced("())"), false)
})
