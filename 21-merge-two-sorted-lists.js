function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;
    if (list1.next === undefined) return list2;
    if (list2.next === undefined) return list1;

    let head = new ListNode();
    let sum = head;
    do {
        if (!list1) {
            sum.val = list2.val;
            list2 = list2?.next;
        } else if (!list2) {
            sum.val = list1.val;
            list1 = list1?.next;
        } else if (list1.val > list2.val) {
            sum.val = list2.val;
            list2 = list2?.next;
        } else {
            sum.val = list1.val;
            list1 = list1?.next;
        }
        if (list1 || list2) {
            sum.next = new ListNode();
            sum = sum.next;
        }
    } while (list1 || list2);

    return head;
};

const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));

// const l1 = new ListNode();
// const l2 = new ListNode();

function listToArray(head) {
    const arr = [];
    let current = head;
    while (current) {
        arr.push(current.val);
        current = current.next;
    }
    return arr;
}

console.log(listToArray(mergeTwoLists(l1, l2)));
