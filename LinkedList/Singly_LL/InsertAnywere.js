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

    // Insert a new node at a specified index in the linked list
    insertAtIndex(index, value) {
        if (index < 0) { // Check for invalid index
            console.log("Invalid index");
            return;
        }
        let newNode = new Node(value); // Create a new node with the given value
        if (index === 0) { // If index is 0, insert at the beginning
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        let currentNode = this.head;
        let currentIndex = 0;
        while (currentNode && currentIndex < index - 1) { // Traverse to the node before the insertion point
            currentNode = currentNode.next;
            currentIndex++;
        }
        if (!currentNode) { // If the index is greater than the length of the list
            console.log("Index out of range");
            return;
        }
        newNode.next = currentNode.next; // Insert the new node between currentNode and currentNode.next
        currentNode.next = newNode;
    }

    // Traverse the linked list and print its elements
    traverse() {
        let currentNode = this.head;
        while (currentNode !== null) { // Continue until currentNode is null
            console.log(currentNode.data); // Print the data of the current node
            currentNode = currentNode.next; // Move to the next node
        }
    }
}

// Create a new linked list
let linkedList = new SinglyLinkedList();

// Insert nodes at specific indices in the linked list
linkedList.insertAtIndex(0, 10); // Node with data 10 at index 0
linkedList.insertAtIndex(1, 20); // Node with data 20 at index 1
linkedList.insertAtIndex(1, 15); // Node with data 15 at index 1
linkedList.insertAtIndex(2, 25); // Node with data 25 at index 2

// Traverse the linked list and print its elements
linkedList.traverse();
