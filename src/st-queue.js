const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {

    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    getUnderlyingList() {
        return this.head
    }

    enqueue(value) {
        let node = new ListNode(value);

        if (!this.size) {
            this.head = node;

        } else if(this.size === 1) {
            this.tail = node;
            this.head.next = this.tail;

        } else {
            this.tail.next = node;
            this.tail = node;
        };
        this.size++;
    }

    dequeue() {
        let value = this.head.value;
        this.head = this.head.next;
        this.size--;
        return value
    }
}
