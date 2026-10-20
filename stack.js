// A Stack is "last in, first out" (LIFO), like a stack of plates:
// you add to the top and take from the top.
// Real uses: the undo button, the browser back button, checking matching brackets.

class Stack {
    constructor(){
        this.items = [] // the end of the array is the top of the stack
    }

    // adds a value to the top - O(1)
    push(val){
        this.items.push(val)
        return this
    }

    // removes and returns the top value, or undefined if empty - O(1)
    pop(){
        return this.items.pop()
    }

    // looks at the top value without removing it - O(1)
    peek(){
        return this.items[this.items.length - 1]
    }

    isEmpty(){
        return this.items.length === 0
    }

    size(){
        return this.items.length
    }
}

// Classic interview problem: are the brackets in a string balanced?
// "({[]})" -> true, "([)]" -> false
function isBalanced(str){
    const pairs = { ')': '(', ']': '[', '}': '{' }
    const stack = new Stack()
    for (const char of str){
        if ('([{'.includes(char)) stack.push(char)
        else if (pairs[char]){
            // a closing bracket must match the most recent opening one
            if (stack.pop() !== pairs[char]) return false
        }
    }
    return stack.isEmpty() // anything left open means unbalanced
}

module.exports = { Stack, isBalanced }

if (require.main === module) {
    const history = new Stack()
    history.push('typed "hello"').push('made it bold').push('changed the color')
    console.log('undo:', history.pop())   // changed the color
    console.log('undo:', history.pop())   // made it bold
    console.log('isBalanced("({[]})"):', isBalanced('({[]})'))
    console.log('isBalanced("([)]"):', isBalanced('([)]'))
}
