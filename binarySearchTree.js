// A Binary Search Tree (BST) keeps values sorted as you add them.
// Each node has up to two children:
//   - everything in the LEFT branch is smaller
//   - everything in the RIGHT branch is bigger
// That rule lets us skip half the tree at every step, so searching a
// balanced tree is O(log n) instead of checking every item.
//
//            8
//          /   \
//         3     10
//        / \      \
//       1   6      14

class TreeNode {
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }

    // adds a value in its sorted spot. Duplicates are ignored. O(log n) balanced, O(n) worst case
    insert(val){
        const newNode = new TreeNode(val)
        if (!this.root){
            this.root = newNode
            return this
        }
        let current = this.root
        while (true){
            if (val === current.val) return this // already in the tree
            const side = val < current.val ? 'left' : 'right'
            if (!current[side]){
                current[side] = newNode
                return this
            }
            current = current[side]
        }
    }

    // true if the value is in the tree
    contains(val){
        let current = this.root
        while (current){
            if (val === current.val) return true
            current = val < current.val ? current.left : current.right
        }
        return false
    }

    // the smallest value is as far left as you can go
    min(){
        if (!this.root) return undefined
        let current = this.root
        while (current.left) current = current.left
        return current.val
    }

    // the biggest value is as far right as you can go
    max(){
        if (!this.root) return undefined
        let current = this.root
        while (current.right) current = current.right
        return current.val
    }

    // removes a value and keeps the tree sorted. Returns true if something was removed
    remove(val){
        const sizeBefore = this.size()
        this.root = removeNode(this.root, val)
        return this.size() < sizeBefore
    }

    // In-order traversal: left, node, right. Gives the values in sorted order
    inOrder(){
        const values = []
        const visit = (node) => {
            if (!node) return
            visit(node.left)
            values.push(node.val)
            visit(node.right)
        }
        visit(this.root)
        return values
    }

    // Pre-order: node, left, right. Useful for copying a tree
    preOrder(){
        const values = []
        const visit = (node) => {
            if (!node) return
            values.push(node.val)
            visit(node.left)
            visit(node.right)
        }
        visit(this.root)
        return values
    }

    // Breadth-first: level by level, top to bottom. Uses a queue!
    levelOrder(){
        const { Queue } = require('./queue')
        const values = []
        if (!this.root) return values
        const queue = new Queue().enqueue(this.root)
        while (!queue.isEmpty()){
            const node = queue.dequeue()
            values.push(node.val)
            if (node.left) queue.enqueue(node.left)
            if (node.right) queue.enqueue(node.right)
        }
        return values
    }

    // number of levels. An empty tree is 0, a single node is 1
    height(node = this.root){
        if (!node) return 0
        return 1 + Math.max(this.height(node.left), this.height(node.right))
    }

    size(){
        return this.inOrder().length
    }
}

// Removes val from the branch starting at node, and returns the new top of that branch
function removeNode(node, val){
    if (!node) return null
    if (val < node.val){
        node.left = removeNode(node.left, val)
        return node
    }
    if (val > node.val){
        node.right = removeNode(node.right, val)
        return node
    }
    // found it. Case 1 and 2: zero or one child, so the child takes its place
    if (!node.left) return node.right
    if (!node.right) return node.left
    // Case 3: two children. Replace it with the smallest value on its right side,
    // then remove that value from the right side
    let successor = node.right
    while (successor.left) successor = successor.left
    node.val = successor.val
    node.right = removeNode(node.right, successor.val)
    return node
}

module.exports = { BinarySearchTree, TreeNode }

if (require.main === module) {
    const tree = new BinarySearchTree()
    ;[8, 3, 10, 1, 6, 14, 4, 7, 13].forEach((n) => tree.insert(n))
    console.log('sorted:', tree.inOrder())
    console.log('level by level:', tree.levelOrder())
    console.log('contains 6?', tree.contains(6), '| contains 5?', tree.contains(5))
    console.log('min:', tree.min(), '| max:', tree.max(), '| height:', tree.height())
    tree.remove(3)
    console.log('after removing 3:', tree.inOrder())
}
