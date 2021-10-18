const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

  constructor() {
    this.initialRoot = null;
  }

  root() {
    return this.initialRoot
  }

  add(data) {
    function createNode(data) {
        let node = {
          data: data,
          leftChild: null,
          rightChild: null
        };
        return node
    }

    if (!this.initialRoot) {
      this.initialRoot = createNode(data);
      return
    }

    let currentNode = this.initialRoot;

    while (currentNode) {
      if (data < currentNode.data) {
        if (!currentNode.leftChild) {
          currentNode.leftChild = createNode(data);
          break
        } else {
          currentNode = currentNode.leftChild
        }
      } else if (data > currentNode.data) {
        if (!currentNode.rightChild) {
          currentNode.rightChild = createNode(data);
          break
        } else {
          currentNode = currentNode.rightChild
        }
      } else break
    }
  }

  has(data) {
    let currentNode = this.initialRoot;

    while (currentNode) {
      if (data < currentNode.data) {
        currentNode = currentNode.leftChild;
      } else if (data > currentNode.data) {
        currentNode =  currentNode.rightChild;
      } else {
        return true
      }
    };
    return false
  }

  find(data) {
    let currentNode = this.initialRoot;

    while (currentNode) {
      if (data < currentNode.data) {
        currentNode = currentNode.leftChild
      } else if (data > currentNode.data) {
        currentNode = currentNode.rightChild
      } else {
        return currentNode
      }
    };
    return null
  }

  remove(data) {
    this.initialRoot = removeNode(this.initialRoot, data);
  
    function removeNode(node, data) {
      if(!node) return null;
  
      if (data < node.data) {
        node.leftChild = removeNode(node.leftChild, data);
        return node;
      } else if (data > node.data) {
        node.rightChild = removeNode(node.rightChild, data)
        return node;
      } else {
        if (!node.leftChild && !node.rightChild) {
          return null
        };

        if (!node.leftChild) {
          node = node.rightChild;
          return node;
        };
        
        if (!node.rightChild) {
          node = node.rightChild;
          return node;
        };

        let min = node.rightChild;
        while (min.leftChild) {
          min = min.leftChild;
        };
        node.data = min.data;
        node.rightChild = removeNode(node.rightChild, min.data);
        return node
      }
    }
  }

  min() {
    if(!this.initialRoot) return null;

    let currentNode = this.initialRoot;
    while(currentNode) {
      if (currentNode.leftChild) {
        currentNode = currentNode.leftChild
      } else {
        return currentNode.data
      }
    }
  }

  max() {
    if(!this.initialRoot) return null;

    let currentNode = this.initialRoot;
    while (currentNode) {
      if (currentNode.rightChild) {
        currentNode = currentNode.rightChild
      } else {
        return currentNode.data
      }
    }
  }
}