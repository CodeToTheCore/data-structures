// A Queue is "first in, first out" (FIFO), like a line at a store:
// you join at the back and leave from the front.
// Real uses: a music playlist, print jobs, handling requests in order.
//
// Built on nodes (like our linked list) with a pointer to BOTH ends,
// so adding and removing are O(1). An array's shift() is O(n) because
// every item moves over by one.

class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Queue {
    constructor(){
        this.front = null // next to leave
        this.back = null  // most recent to join
        this.length = 0
    }

    // adds a value to the back - O(1)
    enqueue(val){
        const newNode = new Node(val)
        if (!this.back){
            // empty queue: the new node is both the front and the back
            this.front = newNode
            this.back = newNode
        } else {
            this.back.next = newNode
            this.back = newNode
        }
        this.length++
        return this
    }

    // removes and returns the front value, or undefined if empty - O(1)
    dequeue(){
        if (!this.front) return undefined
        const val = this.front.val
        this.front = this.front.next
        if (!this.front) this.back = null // the queue is empty now
        this.length--
        return val
    }

    // looks at the front value without removing it - O(1)
    peek(){
        return this.front ? this.front.val : undefined
    }

    isEmpty(){
        return this.length === 0
    }

    size(){
        return this.length
    }
}

module.exports = { Queue }

if (require.main === module) {
    const playlist = new Queue()
    playlist.enqueue('Track 1').enqueue('Track 2').enqueue('Track 3')
    console.log('now playing:', playlist.dequeue()) // Track 1
    console.log('up next:', playlist.peek())        // Track 2
    console.log('songs left:', playlist.size())     // 2
}
