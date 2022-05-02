const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  left = null;
  right = null;

  data

  constructor(data) {
    this.data = data 
  }
}
class BinarySearchTree {

  rootNode = null;

  getSuccessorNode(node) {
    let successorParent = node;
    let successor = node;
    let cur = node.rightChild;

    while (cur !== null) {
      successorParent = successor;
      successor = cur;
      cur = cur.left;
    }

    if (successor !== node.rightChild) {
      successorParent.leftChild = successor.rightChild;
      successor.rightChild = node.rightChild;
    }
    return successor;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    if (this.rootNode === null) {
      this.rootNode = new Node(data);
    } else {
      let cur = this.rootNode;
      let insertNode;

        while(true) {
          insertNode = cur;

          if (data < cur.data) {
            cur = cur.left;
            if (cur === null) {
              insertNode.leftChild = new Node(data);
              break;
            }
          } else if (data >= cur.data) {
            cur = cur.right;
            if (cur === null) {
              insertNode.right = new Node(data);
              break;
            }
          }
        }
    }
  }

  has(data) {
    let cur = this.rootNode;

    while (curt.data != data) {
      if (cur.data <= data) {
        cur = cur.right;
      } else {
        cur = cur.left;
      }

      if (cur === null) {
        return false;
      }
    }
    if (cur.data !== null)
      return true
    return false
  }

  find(data) {
    let cur = this.rootNode;

    while (cur.data != data) {
      if (cur.data <= data) {
        cur = cur.right;
      } else {
        cur = cur.left;
      }

      if (cur === null) {
        return null;
      }
    }
    return cur
  }

  remove(data) {
   let cur = this.rootNode;
   let parent = this.rootNode;
   let isLeftChild = true;

   if (cur  !== null) {
      while (cur.data !== data) {
        parent = cur;
        if (data < cur.data) {
          isLeftChild = true;
          cur = cur.left;
        } else {
          isLeftChild = false;
          cur = cur.right;
        }
        if (cur === null) {
          return;
        }
     }
     
     if (cur.left === null && cur.right === null) {
       if (cur === this.rootNode) {
          this.rootNode = null;
       } else if (isLeftChild) {
          parent.leftChild = null;
       } else { 
          parent.rightChild = null;
       }
     } else if (current.right === null) {
       if (cur === this.rootNode) {
          this.rootNode = cur.left
       } else if (isLeftChild) {
          parent.left = cur.left;
       } else {
         parent.right = cur.left;
       }
     } else if (cur.left === null) {
        if (cur === this.rootNode) {
          this.rootNode = cur.right;
        } else if (isLeftChild) {
          parent.left = cur.right;
        } else {
          parent.right = cur.right
        }
     } else {
       let successor = this.getSuccessorNode(cur);

       if (cur === this.rootNode) {
         this.rootNode = successor;
       } else if (isLeftChild) {
         parent.left = successor;
       } else {
         parent.right = successor;
       }

       successor.left = current.left;
     }
   }
  }

  min() {
    let cur = this.rootNode;

    if (cur === null) {
      return null;
    }

    while (cur !== null) {
      if (cur.left !== null) {
        current = cur.left;
      } else {
        return cur.data
      }
    }
  }

  max() {
    let cur = this.rootNode;

    if (cur === null) {
      return null;
    }

    while (cur !== null) {
      if (cur.right !== null) {
        cur = cur.right;
      } else {
        return cur.data
      }
    }
  }
}

module.exports = {
  BinarySearchTree
};