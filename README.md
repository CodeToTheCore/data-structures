# Data Structures in JavaScript

Classic data structures built from scratch, with tests. I started the linked list in June 2025 while studying computer-science fundamentals. In October 2026 I finished it and added a stack, a queue, and a binary search tree.

| Structure | File | Real-world use |
| --- | --- | --- |
| Linked list | [`linkedList.js`](linkedList.js) | Playlists, undo history |
| Stack | [`stack.js`](stack.js) | Undo button, browser back button, matching brackets |
| Queue | [`queue.js`](queue.js) | Music queue, print jobs, handling requests in order |
| Binary search tree | [`binarySearchTree.js`](binarySearchTree.js) | Fast sorted lookups, autocomplete, databases |

## Linked list

[`linkedList.js`](linkedList.js) is a singly linked list. Each `Node` holds a value and a pointer to the next node.

| Method | What it does | Time |
| --- | --- | --- |
| `append(val)` | Add to the end | O(n) |
| `prepend(val)` | Add to the front | O(1) |
| `find(val)` | Return the first matching node, or `null` | O(n) |
| `delete(val)` | Remove the first matching node | O(n) |
| `insertAt(index, val)` | Insert at a position | O(n) |
| `size()` | Count the nodes | O(n) |
| `reverse()` | Flip the list in place | O(n) |
| `toArray()` / `print()` | Show the list as `a -> b -> null` | O(n) |

### Linked list or array?

| | Array | Linked list |
| --- | --- | --- |
| Get the item at index *i* | O(1), jump straight to it | O(n), walk from the head |
| Add or remove at the front | O(n), every item shifts over | O(1), just move the head |
| Memory | One block, side by side | Nodes scattered, each with a pointer |

Use an array when you read by position a lot. Use a linked list when you add and remove at the front often, as in queues, undo history, or a music playlist.

## Stack

Last in, first out, like a stack of plates. `push`, `pop`, and `peek` are all O(1).

It also includes `isBalanced(str)`, a classic interview problem: are the brackets in `"({[]})"` balanced? Push every opening bracket; each closing bracket must match the one on top.

## Queue

First in, first out, like a line at a store. Built from nodes with pointers to **both** the front and the back, so `enqueue` and `dequeue` are both O(1). An array would need `shift()`, which is O(n) because every item moves over.

## Binary search tree

Smaller values go left, bigger values go right. That rule lets every search skip half of what's left.

```
        8
      /   \
     3     10
    / \      \
   1   6      14
```

| Method | What it does |
| --- | --- |
| `insert(val)` | Add a value in its sorted spot (duplicates ignored) |
| `contains(val)` | Is it in the tree? |
| `min()` / `max()` | Far left / far right |
| `remove(val)` | Handles all three cases: a leaf, one child, two children |
| `inOrder()` | Sorted values (left, node, right) |
| `preOrder()` | Node, left, right; useful for copying a tree |
| `levelOrder()` | Breadth-first, level by level, using my Queue |
| `height()` | Number of levels |

**Time:** O(log n) when the tree is balanced. If values arrive already sorted (1, 2, 3, 4…), the tree becomes a straight line and every operation is O(n); one of the tests shows this. Self-balancing trees (AVL, red-black) fix that, and they're next on my list.

## Run it

```bash
node linkedList.js         # each file has a demo
node stack.js
node queue.js
node binarySearchTree.js
npm test                   # 21 tests, no install needed
```
