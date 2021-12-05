import Node from "./Node.js";

const node = new Node(10);

node.insert(25);
node.insert(35);
node.insert(5);
node.insert(45);
node.insert(6);

/*
EXPLANATION:
  based on the insertions will generate a BST like:

  Binary Search Tree
        10
      /   \
     5     25
     \    /  \
      6  35  45

*/

console.log(node.contains(33)); // FALSE
console.log(node.contains(45)); // TRUE
/* 
        10
      /   \
     5     25
     \    /  \
      6  35  45


      1- Checks if 33 === 10 : false
      2- check if right/left node exists 
        2a- if exists Executes step 1
        2b- else returns false
*/
