var FibonacciHeap = (function() {
	"use strict";

	var Node = function(key, value) {
		this.key = key;
		this.value = value;
		this.marked = false;
		this.kids = new NodeLinkedList();
		this.parent = null;

		this.next = null;
		this.prev = null;
	}

	var NodeLinkedList = function() {
		this.head = null;
		this.length = 0;
	}
	NodeLinkedList.prototype.add = function(node) {
		if(this.length == 0) {
			this.head = node;
			node.next = node;
			node.prev = node;
		} else {
			node.next = this.head.next;
			node.prev = this.head;
			this.head.next.prev = node;
			this.head.next = node;
		}
		this.length++;
	};
	NodeLinkedList.prototype.remove = function(node) {
		if(this.length == 1)
			this.head = null;
		else {
			node.next.prev = node.prev;
			node.prev.next = node.next;
			if(this.head == node)
				this.head = node.next;
		}
		node.next = node.prev = node;
		this.length--;
	};
	NodeLinkedList.prototype.forEach = function(fun) {
		var nodes = [];
		var node = this.head;
		if(node != null) do {
			nodes.push(node);
			node = node.next;
		} while(node != this.head);
		nodes.forEach(fun);

	};

	var warned = false;
	return function() {
		var roots = new NodeLinkedList();
		var min = null;
		var valueMap = {};
		var addChild = function(parentNode, childNode) {
			roots.remove(childNode);
			childNode.parent = parentNode;
			parentNode.kids.add(childNode);
		}
		var makeRoot = function(node) {
			if(node.parent != null) {
				node.parent.kids.remove(node);
				node.parent = null;
			}
			roots.add(node);
			node.marked = false;
		}

		this.add = function(key, value) {
			if(typeof key != "number")
				throw new TypeError("Key must be a number");
			var node = new Node(key, value);
			makeRoot(node);
			if((min == null) || (node.key < min.key))
				min = node;

			//Add to valueMap
			var mappedNode = valueMap[value];
			if(mappedNode != null && mappedNode.value !== value) {
				if(!warned) {
					warned = true;
				}
				if(Array.isArray(mappedNode))
					mappedNode.push(node);
				else
					valueMap[value] = [mappedNode, node];
			} else
				valueMap[value] = node;
		};

		this.extractMin = function(x) {
			if(min == null)
				return null;
			else {
				//Remove node
				var oldMin = min;
				roots.remove(oldMin);
				oldMin.kids.forEach(makeRoot);
				if(roots.length == 0) {//Empty heap
					min = null;
					valueMap = {};
				} else {
					min = null;

					if(Array.isArray(valueMap[oldMin.value])) {
						var mappedArray = valueMap[oldMin.value];
						var i = mappedArray.map(function(x) {return x.value;}
												).indexOf(oldMin.value);
						if(i != -1) {
							mappedArray.splice(i, 1);
							if(mappedArray.length == 1)
								valueMap[oldMin.value] = mappedArray[0];
						}
					} else
						delete valueMap[oldMin.value];

					var rootWithDegree = [];
					roots.forEach(function(root) {
						while(rootWithDegree[root.kids.length] != null) {
							var root2 = rootWithDegree[root.kids.length];
							delete rootWithDegree[root.kids.length];

							if(root2.key < root.key) {
								addChild(root2, root);
								root = root2;
							} else
								addChild(root, root2);
						}
						rootWithDegree[root.kids.length] = root;
					});

					roots.forEach(function(root) {
						if((min == null) || (root.key < min.key))
							min = root;
					});
				}
				return {key: oldMin.key, value: oldMin.value};
			}
		}

		this.decreaseKey = function(value, key)
		{
			var node = valueMap[value];
			if(Array.isArray(node))
				node = node.filter(function(x) {return x.value===value;})[0];
			if(node == null)
				throw new Error("Value not in heap");
			if(node.key <= key)
				return false;

			node.key = key;
			if(key < min.key)
				min = node;
			if((node.parent != null) && (node.key < node.parent.key)) {

				do {
					var parentNode = node.parent;
					makeRoot(node);
					node = parentNode;
				} while(node.marked);
				if(node.parent != null)
					node.marked = true;
			}

			return true;
		}
	};
})();
module.exports = FibonacciHeap;
