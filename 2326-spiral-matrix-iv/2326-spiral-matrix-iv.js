/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function(m, n, head) {
    
    let matrix = new Array(m)
    for(let r = 0;  r < m; r++) {
        matrix[r] = new Array(n)
        matrix[r].fill(-1)
    }
    let top_row, bottom_row, left_col, right_col
    top_row = 0
    bottom_row = m - 1
    left_col = 0
    right_col = n - 1
    let i = 0, j = 0
    
    while(head) {
        matrix[i][j] = head.val
        head = head.next
        if(i == top_row && j < right_col) {
            j++
            if(j == right_col) {
                top_row++
            }
        }
        else if( j == right_col && i < bottom_row) {
            i++
            if(i == bottom_row) {
                right_col--
            }
        }
        else if(i == bottom_row && j > left_col) {
            j--
            if(j == left_col) {
                bottom_row--
            }
        }
        else if(j == left_col && i > top_row) {
            i--
            if(i == top_row) {
                left_col++
            }
        }
        
    }
    
    return matrix
};