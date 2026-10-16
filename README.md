# Data Structures in JavaScript

Classic data structures built from scratch, with tests. I started the linked list in June 2025 while studying computer-science fundamentals, and finished it with full methods and tests in October 2026.

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

## Run it

```bash
node linkedList.js   # demo
npm test             # 8 tests, no install needed
```
