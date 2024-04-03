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

  // Insert a new node at the beginning of the linked list
  insertAtBeginning(value) {
    let newNode = new Node(value); // Create a new node with the given value
    newNode.next = this.head; // Set the next of the new node to the current head
    this.head = newNode; // Update head to the new node
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

// Insert nodes at the beginning of the linked list
linkedList.insertAtBeginning(10); // Node with data 10
linkedList.insertAtBeginning(20); // Node with data 20
linkedList.insertAtBeginning(30); // Node with data 30

// Traverse the linked list and print its elements
linkedList.traverse();
