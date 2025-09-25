> "How many different ways can I mess it up?"

# Trees
## Binary Trees

- have 2 pointer
- it almost similar to double linked list but we typically draw a pointer down, because there a relationship between nodes, (parent and child)
- leaf nodes = nodes that don't have any children or bottom nodes 
- the root nodes = the top of all the nodes or only have single nodes root
- we can't have cycles in binary trees or the pointer of leaf nodes cannot point into root nodes, the one that can have cycles iis linked list.
- sibling nodes = the nodes that have same parent
- Descendant = all nodes under the original nodes / Ancestor = all nodes above of the original nodes
- Height = if you have 1 desc and 1 ancestor you can count 2 nodes is the height from original nodes. (ex: the height  of nodes 1 is 2 "nodes 1 and 4")
- in *some case* people called the height of single nodes is zero, and for the height of two nodes is 1, and ect. but we don't prefer to count this way.
- depth = is same as height but you count from down.
![BT](images/bt.png)

*Example*
```java
class TreeNode {
	int val;
	TreeNode left = null;
	TreeNode right = null;

	TreeNode(int val) {
		this.val = val;
	}
}
```

---

## Binary Search Trees (BST)

- Sorted
- Left tree, the node is less than the root value
- Right tree, the node more greater than the root value
- above sorted property is true for every single nodes
- DO not  contains duplicate
- True = Found the target, False =  not found, that if you perform search
- using recursive in nature, meaning sub tree has exactly structure with entire tree
- Time Complexity = h(height of trees) or O(log(n)) -> only if we get binary tree balance, meaning that the high left and right of sub tree is equal or maybe differ by only one, if not balance the time complexity = O(n) or most people will say O(h) -> height
- inserting/deleting value in BST can also be log(n)

![BST](images/bst.png)

*Example:*
```python
	def search(root, target):
		if not root:
			return False
		
		if target > root.val:
			return search(root.right, target)
		if target < root.val:
			return search(rot.left, target)
		else:
			return True
```

---

## Binary Search Trees (BST) - Insert and Remove
### Insert
- insert/remove = log(n) time, assuming trees is roughly balance
- insert nodes at leaf nodes more easy but will cause not balance
- time complexity is the height of the trees, if balance = O(log(n))

![bst-insert](images/bst-insert.png)

*Example:*
```python
def insert(root, val):
	if not root:
		return TreeNode(val)

	if val > root.val:
		root.right = insert(root.right, val)
	elif val < root.val:
		root.left = insert(root.left, val)
	return root
```

### Remove
- Find min of the trees
- Remove nodes have 2 cases:
	- nodes that have 0 or 1 child (more simple)
	- nodes that have 2 children
- if remove root nodes, replaces it with leaf nodes / the smallest value, in the right sub trees
- or you can replace it with the largest value from the left sub trees

![bst-remove](images/bst-remove.png)


*Example:*
```python
# FInd Min fo the trees
# no need recursive func because we go one direction only left
def minValueNode(root):
	curr = root
	while curr and curr.left:
		curr = curr.left
	return curr

#Remove func
def remove(root, val):
	if not root:
		return None

	if val > root.val:
		root.right = remove(root.right, val)
	elif val < root.val:
		root.left = remove(root.left, val)
	else:
		if not root.left:
			return root.right
		elif not root.right:
			return root.left
		else:
			minNode = minValueNode(root.right)
			root.val = minNode.val
			root.right = remove(root.right, minNode.val)
	return root
```


---

## BST - Traversal
- In-order traversal
	**Left → Root → Right**
- Time complexity
	- worst case = O(n) -> traves entire trees
	- building the entire trees itself = O(nlog(n))
	- traves it/building output array = O(n)
	- so time complexity = O(n + nlogn) --> nly cares the larger = O(nlogn)
	- so to sorting random array using bst-traversal need time comlexity = O(nlogn)
![bst-inorder-traversal](images/bst-inorder-traversal.png)

*Example:*
```python
def inorder(root):
	if not root:
		return
	inorder(root.left)
	print(root.val)
	inorder(root.right)
```

- Pre-Order Traversal
	**Root → Left → Right**

*Example:*
```python
def preorder(root):
	if not root:
		return
	print(root.val)
	preorder(root.left)
	preorder(root.right)
```

- Post-Order Traversal
	**Left  → Right → Root**

*Example:*
```python
def postorder(root):
	if not root:
		return
	postorder(root.left)
	postorder(root.right)
	print(root.val)
```

- Reverse-Order Traversal
	**Right → Root → Left**
	
*Example:*
```python
def reverseorder(root):
	if not root:
		return
	reverseorder(root.right)
	print(root.val)
	reverseorder(root.left)
```


### Depth-First Search (DFS)
- the most common algorithm in general
- all bst traversal above are example of DFS
- as the name if we search is go with depth first / go depth as we can first / reach the bottom of the trees

---

## Breadth-First-Search (BFS)
- the second most common algorithm in general
- travers trees layer by layer
- or going with the closest node first
- its called level-order traversal
- first from top/root we process the nodes -> the children of the nodes from the left to the right  -> and then iterate that process until bottom trees
- Queue = the data structure that  we use, add the element first in first out
- Time complexity = O(n)

![bst-level-order-traversal](images/bst-level-order-traversal.png)

*Example:*
```python
from collections import deque

def bfs(root):
	queue = deque()

	if root:
		queue.append(root)

	level = 0
	while len(queue) > 0:
		print("level: ",level)
		for i in range(len(queue)):
			curr = queue.popleft()
			print(curr.val)
			if curr.left:
				queue.append(curr.left)
			if curr.right:
				queue.append(curr.right)
		level += 1
```


---

## BST - Sets and Maps
- if use sets in bst, instead of array
- the time complexity = O(logn) -> search, insert, remove
- typically called order sets or trees sets
```python
# Sets
{1, 2, 3}
```

- typically called order maps or trees maps
```bash
# Maps
# ex: PhoneBook
key       value
---       ---
alice  -> 123
brian  -> 456
collin -> 789

# [Key and Value]
-> key is how we sorted value or vice versa
```

*Example:*
```python
# Python
from sortedcontainers import SortedDict

treeMap = SortedDict({'c': 3, 'a': 1, 'b':2})
```
```javascript
// JavaScript
const TreeMap = require("treemap-js");

var map = new TreeMap();
```
```cpp
// C++
map<string, string> treeMap;
```
```java
// Java
TreeMap<String, String> tree_map
	= new TreeMap<String, String>();
```


---

# Backtracking
## Tree Maze
- Backtracking algorithm -> base on DFS but not in 
- the similar ide of backtracking is like going to a maze
- basically we recursively we try every single path
- its like brute force approach but basically we try go through every single possibility
- Backtracking = can't use advantages of sorted property like BST
- we go with binary trees not BST and we check both the left and the right sub trees
- if we already find the right path we don't go all the rest sub trees
- backtracking can use more than just binary trees
- Time complexity:
	- Worst case = O(n) -> travers entire trees / runs all possibility

![backtracking](images/backtracking.png)

*Example:*
```python
def canReachLeaf(root):
	if not root or root.val == 0:
		return False

	if not root.left and not root.right:
		return True
	if canReachLeaf(root.left):
		return True
	if canReachLeaf(root.right):
		return True
	return False
```

*Instead return True or False, lets just return what the value of the path*
![backtracking2](images/backtracking2.png)


*Example:*
```python
def leafPath(root, path):
	if not root or root.val == 0:
		return False
	path.append(root.val)

	if not root.left and not root.right:
		return True
	if leafPath(root.left, path):
		return True
	if leafPath(root.right, path):
		return True
	path.pop()
	return False
```

---

# Heap Priority Queue
## Heap Properties

- Queue = FIFO (first value in first value out)
- we can order in some types of priority values
- the priority is variety, based on (Min/Max)
- Heap/Priority Queue = interface with priority queue, but under the hood implemented using heap.
- Min is most common use in heap
![Priority-Queue](images/Priority-Queue.png)


- Binary Heap is essentially tress that is consider complete Binary Trees. or means we have a trees that every single level of the trees there is no holes or null expect thelast level of the trees or leaf nodes.
- 

