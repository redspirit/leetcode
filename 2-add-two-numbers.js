function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

function listToArray(head) {
    const arr = [];
    let current = head;
    while (current) {
        arr.push(current.val);
        current = current.next;
    }
    return arr;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let sum = 0;
    let head = new ListNode();
    let cur = head;

    do {
        sum += (l1?.val || 0) + (l2?.val || 0);
        if (sum > 9) {
            cur.val = sum % 10;
            sum = 1;
        } else {
            cur.val = sum;
            sum = 0;
        }

        l1 = l1?.next;
        l2 = l2?.next;
        if (l1 || l2) {
            cur.next = new ListNode(sum);
            cur = cur.next;
        }
    } while (l1 || l2);

    if (sum) cur.next = new ListNode(sum);

    return head;
};

// const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
// const l2 = new ListNode(5, new ListNode(6, new ListNode(4, new ListNode(7))));

const l1 = new ListNode(9, new ListNode(9, new ListNode(9)));
const l2 = new ListNode(9, new ListNode(9, new ListNode(9)));

//console.log(listToArray(l2)); // Output: [7,0,8]

console.log(listToArray(addTwoNumbers(l1, l2))); // Output: [7,0,8]
