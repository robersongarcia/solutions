/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list
*/

// /**

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    
    if(list1 == null && list2 == null)
        return null;
    
    let result = new ListNode();
    let head = result;

    while(!(list1 == null && list2 == null)){

        const next = new ListNode();

        if(list1 == null && list2 != null){
            result.val = list2.val;
            list2 = list2.next;
        }else if(list2 == null && list1 != null){
            result.val = list1.val;
            list1 = list1.next;
        } else if( list1.val < list2.val){
            result.val = list1.val;
            list1 = list1.next;
        }else{
            result.val = list2.val;
            list2 = list2.next;
        }

        if(list2 != null || list1 != null)
            result.next = next;
        
        result = result.next;
    }

    return head;

};