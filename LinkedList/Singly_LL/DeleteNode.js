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

  // Delete the first node from the beginning of the linked list
  deleteFromBeginning() {
    if (!this.head) {
      // If the list is empty
      console.log("List is empty");
      return;
    }
    this.head = this.head.next; // Update head to the next node
  }

  // Delete the last node from the end of the linked list
  deleteFromEnd() {
    if (!this.head) {
      // If the list is empty
      console.log("List is empty");
      return;
    }
    if (!this.head.next) {
      // If there's only one node
      this.head = null; // Set head to null
      return;
    }
    let currentNode = this.head;
    let prevNode = null;
    while (currentNode.next !== null) {
      // Traverse to the second-to-last node
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    prevNode.next = null; // Set the next of the second-to-last node to null
  }

  // Delete a node at a specified index in the linked list
  deleteAtIndex(index) {
    if (index < 0) {
      // Check for invalid index
      console.log("Invalid index");
      return;
    }
    if (index === 0) {
      // If index is 0, delete the head node
      if (!this.head) {
        // If the list is empty
        console.log("List is empty");
        return;
      }
      this.head = this.head.next; // Update head to the next node
      return;
    }
    let currentNode = this.head;
    let prevNode = null;
    let currentIndex = 0;
    while (currentNode && currentIndex < index) {
      // Traverse to the node at the specified index
      prevNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }
    if (!currentNode) {
      // If the index is greater than or equal to the length of the list
      console.log("Index out of range");
      return;
    }
    prevNode.next = currentNode.next; // Remove the node at the specified index by updating the previous node's next pointer
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

// Delete node from the beginning of the linked list
linkedList.deleteFromBeginning();

// Delete node from the end of the linked list
linkedList.deleteFromEnd();

// Delete node at specific index in the linked list
linkedList.deleteAtIndex(0);

// Traverse the linked list and print its elements
linkedList.traverse();
