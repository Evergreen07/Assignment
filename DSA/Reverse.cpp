LinkedList* reverse(LinkedList *head){
    if(!head || !head->next){
            return head;
        }
        
    ListNode *prev = NULL, *curr = head, *after = head;
    
    while(curr != NULL){
        after = curr->next;
        
        curr->next = prev;
        
        prev = curr;
        curr = after;
    }

    return prev;
}

/*
    1. We simply keep track of the current, previous & the next node of current with the help of pointers.
    2. First we move the after pointer to current's next, then point the current's next pointer to previous.
    3. Now the previous pointer points to the curr.
    4. current moves to the next and the cycle continues till we reach the end.
*/