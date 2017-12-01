/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let dis = 0
    let p1 = headA
    let p2 = headB
    while (p1 && p2) {
        p1 = p1.next
        p2 = p2.next
    }
    if (p2 && !p1) {
        [headA, headB] = [headB, headA]
    }
    p2 = p1 || p2
    p1 = headA
    while (p1 && p2) {
        p1 = p1.next
        p2 = p2.next
    }
    p2 = headB
    while (p1 !== p2) {
        p1 = p1.next
        p2 = p2.next
    }
    return p1
};
