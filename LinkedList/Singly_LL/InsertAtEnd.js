// Define the Node class
class Node {
  constructor(data) {
    this.data = data; // Data stored in the node
    this.next = null; // Pointer to the next node
  }
}

// Define the SinglyLinkedList class
class SinglyLinkedList {
  constructor() {
    this.head = null; // Head of the linked list
  }

  // Insert a new node at the end of the linked list
  insertAtEnd(value) {
    let newNode = new Node(value); // Create a new node with the given value
    if (!this.head) {
      // If the list is empty
      this.head = newNode; // Set the new node as the head
      return;
    }
    let currentNode = this.head;
    while (currentNode.next !== null) {
      // Traverse to the last node
      currentNode = currentNode.next;
    }
    currentNode.next = newNode; // Set the next of the last node to the new node
  }

  // Traverse the linked list and print its elements
  traverse() {
    let currentNode = this.head;
    while (currentNode !== null) {
      // Continue until currentNode is null
      console.log(currentNode.data); // Print the data of the current node
      currentNode = currentNode.next; // Move to the next node
    }
  }
}

// Create a new linked list
let linkedList = new SinglyLinkedList();

// Insert nodes at the end of the linked list
linkedList.insertAtEnd(10); // Node with data 10
linkedList.insertAtEnd(20); // Node with data 20
linkedList.insertAtEnd(30); // Node with data 30

// Traverse the linked list and print its elements
linkedList.traverse();