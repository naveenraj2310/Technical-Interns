class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert - First
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }
    // Insert - Last
    insertLast(data) {
        let node = new Node(data);
        let current;
        if (!this.head) {
            this.head = node;
        }
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }
        this.size++

    }
    // Insert - Index
    inserAt(data, index) {
        if (index < 0 || index > this.size) {
            return false;
        }
        if (index === 0) {
            this.head = new Node(data, this.head);
            return true;
        }
        const node = new Node(data);
        let current, previous;
        current = this.head;
        let count = 0;
        while (count < index) {
            previous = current;
            count++;
            current = current.next;
        }

        node.next = current;
        previous.next = node;

        this.size++;

    }
    // Get at Index
    getAt(index) {
        let current = this.head;
        let count = 0;
        while (current) {
            if (count == index) {
                return current.data;
            }
            count++;
            current = current.next;
        }
        return "Index Out Of Range :)"

    }
    // Remove at Index
    removeAt(index) {
        if (index < 0 || index > this.size) {
            return false;
        }
        let current = this.head;
        let previous;
        let count = 0;
        if (index == 0) {
            this.head = current.next;
            return true;
        } else {
            while (count < index) {
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
    }
    // Clear List
    clearList() {
        this.head = null;
        this.size = 0;
    }
    // Print list data
    printListData() {
        let current = this.head;
        let arr = [];
        while (current) {
            arr.push(current.data);
            current = current.next;
        }
        return arr;
    }
}