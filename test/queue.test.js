const { test } = require("node:test")
const assert = require("node:assert")
const { Queue } = require("../queue")

test("enqueue and dequeue are first in, first out", () => {
    const queue = new Queue().enqueue("a").enqueue("b").enqueue("c")
    assert.strictEqual(queue.dequeue(), "a")
    assert.strictEqual(queue.dequeue(), "b")
    assert.strictEqual(queue.size(), 1)
})

test("peek shows the front without removing it", () => {
    const queue = new Queue().enqueue(1).enqueue(2)
    assert.strictEqual(queue.peek(), 1)
    assert.strictEqual(queue.size(), 2)
})

test("emptying the queue resets both ends", () => {
    const queue = new Queue().enqueue(1)
    queue.dequeue()
    assert.strictEqual(queue.isEmpty(), true)
    assert.strictEqual(queue.front, null)
    assert.strictEqual(queue.back, null)
    assert.strictEqual(queue.dequeue(), undefined)
    // still works after being emptied
    queue.enqueue(5)
    assert.strictEqual(queue.peek(), 5)
})
