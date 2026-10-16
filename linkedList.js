// Linked Lists, lists which made up of nodes. Different from arrays bc each node is an object.
// A linked list is a object full of nodes, resembles a deeply nested object.

// Nodes in a linked list know two things:
// - their own value (val)
// - the next node (initially null)
class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class LinkedList {
    constructor(node){
        this.head = node || null
    }

    // adds a node to the end of the list - O(n), we walk to the end
    append(val){
        const newNode = new Node(val)
        // check if there is already a head of the list
        if(!this.head){
            this.head = newNode
        } else {
            // otherwise find the end of the list using a temp node
            let current = this.head
            // iterate until we find the end of the list and set that node to current
            while(current.next){
                current = current.next
            }
            current.next = newNode
        }
        return this
    }

    // adds a node to the front of the list - O(1), no walking needed
    prepend(val){
        const newNode = new Node(val)
        newNode.next = this.head // e -> a
        // set the head
        this.head = newNode
        return this
    }

    // searches for a node w a given val, returns the node or null
    find(val){
        let current = this.head
        while(current){
            if(current.val === val) return current
            current = current.next
        }
        return null
    }

    // removes the first node w a given val, returns true if something was removed
    delete(val){
        if(!this.head) return false
        // the head is the one to remove, so the next node becomes the head
        if(this.head.val === val){
            this.head = this.head.next
            return true
        }
        // otherwise stop one node before the match so we can skip over it
        let current = this.head
        while(current.next){
            if(current.next.val === val){
                current.next = current.next.next
                return true
            }
            current = current.next
        }
        return false
    }

    // inserts a value at a position (0 = front), returns false if the index is out of range
    insertAt(index, val){
        if(index < 0 || index > this.size()) return false
        if(index === 0){
            this.prepend(val)
            return true
        }
        let current = this.head
        for(let i = 0; i < index - 1; i++){
            current = current.next
        }
        const newNode = new Node(val)
        newNode.next = current.next
        current.next = newNode
        return true
    }

    // counts the nodes - O(n)
    size(){
        let count = 0
        let current = this.head
        while(current){
            count++
            current = current.next
        }
        return count
    }

    // flips the list in place: a -> b -> c becomes c -> b -> a
    reverse(){
        let prev = null
        let current = this.head
        while(current){
            const next = current.next // remember the rest of the list
            current.next = prev       // point this node backwards
            prev = current            // step forward
            current = next
        }
        this.head = prev
        return this
    }

    // returns the values as an array, handy for testing and printing
    toArray(){
        const values = []
        let current = this.head
        while(current){
            values.push(current.val)
            current = current.next
        }
        return values
    }

    // print the entire list. ex: a -> b -> c -> null
    print(){
        const output = this.toArray().concat("null").join(" -> ")
        console.log(output)
        return output
    }
}

module.exports = { Node, LinkedList }

// only runs the demo when you do `node linkedList.js`, not when the tests import this file
if (require.main === module) {
    const list = new LinkedList()
    list.append("a").append("b").append("c").append("d")
    list.print()          // a -> b -> c -> d -> null
    list.prepend("e")
    list.print()          // e -> a -> b -> c -> d -> null
    list.delete("c")
    list.print()          // e -> a -> b -> d -> null
    list.reverse()
    list.print()          // d -> b -> a -> e -> null
    console.log("size:", list.size())
}
