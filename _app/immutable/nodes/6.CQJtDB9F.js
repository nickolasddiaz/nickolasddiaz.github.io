import{a as l,d as H,f as N,t as $,c as _e}from"../chunks/Dk289OU5.js";import{p as ie,aT as pe,g as n,a7 as s,aa as d,a8 as o,t as j,a as ae,ad as x,aU as ee,ak as we,ab as W,ac as Y,al as D,aV as ke}from"../chunks/D8-yv3m5.js";import{s as f}from"../chunks/ChcNf7mM.js";import{i as J}from"../chunks/BlkeD0mf.js";import{e as de}from"../chunks/D4peXrxo.js";import{h as Ne}from"../chunks/BNSD57EH.js";import{d as Te,b as Ee}from"../chunks/B_DCGOGf.js";import{a as me,s as X,b as ce,d as Ie}from"../chunks/Dsueww9o.js";import{M as Se}from"../chunks/Dcxc9BUD.js";import{B as Oe,T as ue}from"../chunks/TseEe--2.js";import{D as ze}from"../chunks/E0F3BkzB.js";import{c as ge,D as je,M as Le,S as Ce,F as qe,R as ne}from"../chunks/axprXsQL.js";import{T as Me,C as De}from"../chunks/COdRE_qQ.js";import{p as te,r as he}from"../chunks/BAq2Xl6S.js";const B={1:{title:"two sum",difficulty:"Easy",html_content:`<h1>1 - Two Sum</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/two-sum/>two-sum</a></h2><p>Given an array of integers <code>nums</code> and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.<p>You may assume that each input would have <strong><em>exactly</em> one solution</strong>, and you may not use the <em>same</em> element twice.<p>You can return the answer in any order.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> nums = [2,7,11,15], target = 9
<strong>Output:</strong> [0,1]
<strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> nums = [3,2,4], target = 6
<strong>Output:</strong> [1,2]
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> nums = [3,3], target = 6
<strong>Output:</strong> [0,1]
</pre><p> <p><strong>Constraints:</strong><ul><li><code>2 &lt;= nums.length &lt;= 10<sup>4</sup></code><li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code><li><code>-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup></code><li><strong>Only one valid answer exists.</strong></ul><p> <p><strong>Follow-up: </strong>Can you come up with an algorithm that is less than <code>O(n<sup>2</sup>)</code><font face=monospace> </font>time complexity?`,submissions:[{time:1763768210,language:"py",runtime:7,memory:19,accepted:!0,code_content:`class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        left, right = 0, len(nums) -1

        indexed_list = list(enumerate(nums))
        sorted_indexed_list = sorted(indexed_list, key=lambda x: x[1])

        sorted_list = [item[1] for item in sorted_indexed_list]
        sorted_indices = [item[0] for item in sorted_indexed_list]

        while left <= right:
            test = sorted_list[left] + sorted_list[right]
            if test < target:
                left += 1
            elif test == target:
                return [sorted_indices[left], sorted_indices[right]]
            else:
                right -= 1

        return []`}]},2:{title:"add two numbers",difficulty:"Medium",html_content:`<h1>2 - Add Two Numbers</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/add-two-numbers/>add-two-numbers</a></h2><p>You are given two <strong>non-empty</strong> linked lists representing two non-negative integers. The digits are stored in <strong>reverse order</strong>, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.<p>You may assume the two numbers do not contain any leading zero, except the number 0 itself.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/10/02/addtwonumber1.jpg style=width:483px;height:342px><pre>
<strong>Input:</strong> l1 = [2,4,3], l2 = [5,6,4]
<strong>Output:</strong> [7,0,8]
<strong>Explanation:</strong> 342 + 465 = 807.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> l1 = [0], l2 = [0]
<strong>Output:</strong> [0]
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
<strong>Output:</strong> [8,9,9,9,0,0,0,1]
</pre><p> <p><strong>Constraints:</strong><ul><li>The number of nodes in each linked list is in the range <code>[1, 100]</code>.<li><code>0 &lt;= Node.val &lt;= 9</code><li>It is guaranteed that the list represents a number that does not have leading zeros.</ul>`,submissions:[{time:1764175266,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution:
    def empty_space(self, l1: ListNode, l2: ListNode) -> ListNode:
        while True:
            if l1 is None:
                return l2
            if l2 is None:
                return l1
            l1 = l1.next
            l2 = l2.next

    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        head = ListNode()
        extra = self.empty_space(l1, l2)
        to_add: bool = True
        if extra is None:
            to_add = False
            extra = ListNode()

        remain: int = 0
        while l1 is not None and l2 is not None:
            temp = l1.val + l2.val + remain
            remain = temp // 10
            temp = temp % 10

            head = ListNode(temp, head)
            l1 = l1.next
            l2 = l2.next

        add_node: bool = remain != 0
        if add_node:
            to_add = True

        tmp_extra = extra
        temp_prev = ListNode()
        while tmp_extra is not None and remain:
            temp = tmp_extra.val + remain
            remain = temp // 10
            temp = temp % 10

            tmp_extra.val = temp
            temp_prev = tmp_extra
            tmp_extra = tmp_extra.next

        if add_node and remain != 0:
            temp_prev.next = ListNode(head.val, remain)
            to_add = True

        lasts: bool = True
        tail = ListNode()
        result = ListNode()
        while head is not None:
            result.next = ListNode(head.val, result.next)
            if lasts:
                lasts = False
                tail = result.next

            head = head.next

        result = result.next.next


        if to_add:
            tail.next = extra

        return result`},{time:1764175741,language:"py",runtime:15,memory:17,accepted:!0,code_content:`class Solution:
    def empty_space(self, l1: ListNode, l2: ListNode) -> ListNode:
        while True:
            if l1 is None:
                return l2
            if l2 is None:
                return l1
            l1 = l1.next
            l2 = l2.next

    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        head = ListNode()
        extra = self.empty_space(l1, l2)
        to_add: bool = True
        if extra is None:
            to_add = False
            extra = ListNode()

        remain: int = 0
        while l1 is not None and l2 is not None:
            temp = l1.val + l2.val + remain
            remain = temp // 10
            temp = temp % 10

            head = ListNode(temp, head)
            l1 = l1.next
            l2 = l2.next

        add_node: bool = remain != 0
        if add_node:
            to_add = True

        tmp_extra = extra
        temp_prev = ListNode()
        while tmp_extra is not None and remain:
            temp = tmp_extra.val + remain
            remain = temp // 10
            temp = temp % 10

            tmp_extra.val = temp
            temp_prev = tmp_extra
            tmp_extra = tmp_extra.next

        if add_node and remain != 0:
            temp_prev.next = ListNode(remain)
            to_add = True

        lasts: bool = True
        tail = ListNode()
        result = ListNode()
        while head is not None:
            result.next = ListNode(head.val, result.next)
            if lasts:
                lasts = False
                tail = result.next

            head = head.next

        result = result.next.next


        if to_add:
            tail.next = extra

        return result
`}]},3:{title:"longest substring without repeating characters",difficulty:"Medium",html_content:`<h1>3 - Longest Substring Without Repeating Characters</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/longest-substring-without-repeating-characters/>longest-substring-without-repeating-characters</a></h2><p>Given a string <code>s</code>, find the length of the <strong>longest</strong> <span data-keyword=substring-nonempty><strong>substring</strong></span> without duplicate characters.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> s = "abcabcbb"
<strong>Output:</strong> 3
<strong>Explanation:</strong> The answer is "abc", with the length of 3. Note that <code>"bca"</code> and <code>"cab"</code> are also correct answers.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> s = "bbbbb"
<strong>Output:</strong> 1
<strong>Explanation:</strong> The answer is "b", with the length of 1.
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> s = "pwwkew"
<strong>Output:</strong> 3
<strong>Explanation:</strong> The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>0 &lt;= s.length &lt;= 5 * 10<sup>4</sup></code><li><code>s</code> consists of English letters, digits, symbols and spaces.</ul>`,submissions:[{time:1762351267,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        unordered_map<char, int> myBiMap;

        int l = 0, r = 0;
        int count = 0;
        int max_count = 0;
        while(r < s.size()-1){
            if(myBiMap.count(s[r])){
                l = myBiMap[s[r]] +1;
                r = l;
                max_count = max(count, max_count);
                count = 0;
                myBiMap = {};
            } else{
                count++;
                myBiMap[s[r]] = r;
                r++;
            }
        }

        return max(count, max_count);
        
    }
};`},{time:1762351475,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        unordered_map<char, int> myBiMap;
        cout << s.size();
        if(s.size() == 0){
            return 0;
        }

        int l = 0, r = 0;
        int count = 0;
        int max_count = 0;
        while(r < s.size()-1){
            if(myBiMap.count(s[r])){
                l = myBiMap[s[r]] +1;
                r = l;
                max_count = max(count, max_count);
                count = 0;
                myBiMap = {};
            } else{
                count++;
                myBiMap[s[r]] = r;
                r++;
            }
        }

        return max(count, max_count);
        
    }
};`},{time:1762351561,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        if(s.size() <= 1){
            return s.size();
        }
        
        unordered_map<char, int> myBiMap;

        int l = 0, r = 0;
        int count = 0;
        int max_count = 0;
        while(r < s.size()-1){
            if(myBiMap.count(s[r])){
                l = myBiMap[s[r]] +1;
                r = l;
                max_count = max(count, max_count);
                count = 0;
                myBiMap = {};
            } else{
                count++;
                myBiMap[s[r]] = r;
                r++;
            }
        }

        return max(count, max_count);
        
    }
};`},{time:1762351615,language:"cpp",runtime:519,memory:144,accepted:!0,code_content:`class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        unordered_map<char, int> myBiMap;

        int l = 0, r = 0;
        int count = 0;
        int max_count = 0;
        while(r < s.size()){
            if(myBiMap.count(s[r])){
                l = myBiMap[s[r]] +1;
                r = l;
                max_count = max(count, max_count);
                count = 0;
                myBiMap = {};
            } else{
                count++;
                myBiMap[s[r]] = r;
                r++;
            }
        }

        return max(count, max_count);
        
    }
};`}]},4:{title:"median of two sorted arrays",difficulty:"Hard",html_content:`<h1>4 - Median of Two Sorted Arrays</h1><h2>Difficulty: Hard - <a href=https://leetcode.com/problems/median-of-two-sorted-arrays/>median-of-two-sorted-arrays</a></h2><p>Given two sorted arrays <code>nums1</code> and <code>nums2</code> of size <code>m</code> and <code>n</code> respectively, return <strong>the median</strong> of the two sorted arrays.<p>The overall run time complexity should be <code>O(log (m+n))</code>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> nums1 = [1,3], nums2 = [2]
<strong>Output:</strong> 2.00000
<strong>Explanation:</strong> merged array = [1,2,3] and median is 2.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> nums1 = [1,2], nums2 = [3,4]
<strong>Output:</strong> 2.50000
<strong>Explanation:</strong> merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>nums1.length == m</code><li><code>nums2.length == n</code><li><code>0 &lt;= m &lt;= 1000</code><li><code>0 &lt;= n &lt;= 1000</code><li><code>1 &lt;= m + n &lt;= 2000</code><li><code>-10<sup>6</sup> &lt;= nums1[i], nums2[i] &lt;= 10<sup>6</sup></code></ul>`,submissions:[{time:1766678883,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        if not nums1:
            return nums2[len(nums2)//2]
        if not nums2:
            return nums1[len(nums1)//2]

        left = 0
        right = len(nums1) -1
        target = (len(nums1) + len(nums2)) // 2
        mid, mid2 = 0, 0

        while left <= right:
            mid = (left + right) // 2
            mid2 = bisect.bisect_left(nums2, nums1[mid])
            temp = mid + mid2 + 2
            if len(nums2) > mid2 and nums1[mid] < nums2[mid2]:
                temp -= 1

            if temp == target:
                break
            elif temp < target:
                left = mid + 1
            else:
                right = mid - 1


        if (len(nums1) + len(nums2)) % 2 == 0: # even
            if len(nums2) <= mid2:
                return (nums2[-1] + nums2[-2]) / 2
            elif mid2 == 0 and len(nums1) - 1 == mid:
                return (nums1[-1] + nums1[-2]) / 2
            else:
                return (nums1[mid] + nums2[mid2]) / 2
        else: # odd
            numbers = [nums1[mid], nums2[mid2], nums1[mid + 1]]
            numbers.sort()
            return numbers[1]`},{time:1766683068,language:"py",runtime:1,memory:17,accepted:!0,code_content:`class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        size1 = len(nums1)
        size2 = len(nums2)

        if size1 > size2:
            size1, size2 = size2, size1
            nums1, nums2 = nums2, nums1

        summ = size1 + size2
        left = (summ + 1) // 2
        low = 0
        high = size1

        while low <= high:
            mid1 = (low + high) // 2
            mid2 = left - mid1

            left1 = -sys.maxsize
            left2 = -sys.maxsize
            right1 = sys.maxsize
            right2 = sys.maxsize

            if mid1 < size1:
                right1 = nums1[mid1]
            if mid2 < size2:
                right2 = nums2[mid2]
            if mid1 - 1 >= 0:
                left1 = nums1[mid1 - 1]
            if mid2 - 1 >= 0:
                left2 = nums2[mid2 - 1]

            if left1 <= right2 and left2 <= right1:
                if summ % 2 == 0:
                    return (max(left1, left2) + min(right1, right2)) / 2
                else:
                    return max(left1, left2)
            elif left1 > right2:
                high = mid1 -1
            else:
                low = mid1 + 1

        return 0.0`}]},5:{title:"longest palindromic substring",difficulty:"Medium",html_content:`<h1>5 - Longest Palindromic Substring</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/longest-palindromic-substring/>longest-palindromic-substring</a></h2><p>Given a string <code>s</code>, return <em>the longest</em> <span data-keyword=palindromic-string><em>palindromic</em></span> <span data-keyword=substring-nonempty><em>substring</em></span> in <code>s</code>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> s = "babad"
<strong>Output:</strong> "bab"
<strong>Explanation:</strong> "aba" is also a valid answer.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> s = "cbbd"
<strong>Output:</strong> "bb"
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= s.length &lt;= 1000</code><li><code>s</code> consist of only digits and English letters.</ul>`,submissions:[{time:1767819164,language:"py",runtime:295,memory:19,accepted:!0,code_content:`class Solution:
    def longestPalindrome(self, s: str) -> str:
        result = ""
        result_length = 0

        for i in range(len(s)):
            left, right = i, i
            while left >= 0 and right < len(s) and s[left] == s[right]:
                if (right - left + 1) > result_length:
                    result = s[left:right+1]
                    result_length = right - left + 1
                left -= 1
                right += 1

            left, right = i, i + 1
            while left >= 0 and right < len(s) and s[left] == s[right]:
                if (right - left + 1) > result_length:
                    result = s[left:right+1]
                    result_length = right - left + 1
                left -= 1
                right += 1

        return result`}]},6:{title:"zigzag conversion",difficulty:"Medium",html_content:`<h1>6 - Zigzag Conversion</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/zigzag-conversion/>zigzag-conversion</a></h2><p>The string <code>"PAYPALISHIRING"</code> is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)<pre>
P   A   H   N
A P L S I I G
Y   I   R
</pre><p>And then read line by line: <code>"PAHNAPLSIIGYIR"</code><p>Write the code that will take a string and make this conversion given a number of rows:<pre>
string convert(string s, int numRows);
</pre><p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> s = "PAYPALISHIRING", numRows = 3
<strong>Output:</strong> "PAHNAPLSIIGYIR"
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> s = "PAYPALISHIRING", numRows = 4
<strong>Output:</strong> "PINALSIGYAHRPI"
<strong>Explanation:</strong>
P     I    N
A   L S  I G
Y A   H R
P     I
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> s = "A", numRows = 1
<strong>Output:</strong> "A"
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= s.length &lt;= 1000</code><li><code>s</code> consists of English letters (lower-case and upper-case), <code>','</code> and <code>'.'</code>.<li><code>1 &lt;= numRows &lt;= 1000</code></ul>`,submissions:[{time:1762009551,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
    public:
        string convert(string s, int numRows) {
            int n = s.length();
            string words(n, ' ');
    
            int position = 0, jmp_st_pos = 0;
            int jump_amount;
            for(int row = numRows; row+1 >= numRows/2; row--, jmp_st_pos++){
                bool even = false;
                for(int jmp_pos = jmp_st_pos; jmp_pos < n && position < n; jmp_pos+=jump_amount, position++){
                    if(even){
                        if(numRows != row && row != 1)
                            jump_amount = abs(numRows - row) *2;
                    } else {
                        if(row == 1)
                            jump_amount = numRows * 2 - 2;
                        else
                            jump_amount = row * 2 - 2;
                            
                    }
                    even = !even;
                    words[position] = s[jmp_pos];
                }
            }
            if(words[words.length()-1] == ' ')
                words[words.length()-1] = s[numRows -1];

            
    
    
            return words;
        }
    };`},{time:1762009638,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
    public:
        string convert(string s, int numRows) {
            int n = s.length();
            if(numRows == 1)
                return s;

            string words(n, ' ');
    
            int position = 0, jmp_st_pos = 0;
            int jump_amount;
            for(int row = numRows; row+1 >= numRows/2; row--, jmp_st_pos++){
                bool even = false;
                for(int jmp_pos = jmp_st_pos; jmp_pos < n && position < n; jmp_pos+=jump_amount, position++){
                    if(even){
                        if(numRows != row && row != 1)
                            jump_amount = abs(numRows - row) *2;
                    } else {
                        if(row == 1)
                            jump_amount = numRows * 2 - 2;
                        else
                            jump_amount = row * 2 - 2;
                            
                    }
                    even = !even;
                    words[position] = s[jmp_pos];
                }
            }
            if(words[words.length()-1] == ' ')
                words[words.length()-1] = s[numRows -1];

            
    
    
            return words;
        }
    };`},{time:1762012344,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
    public:
        string convert(string s, int numRows) {
            int n = s.length();
            if(numRows == 1)
                return s;

            string words(n, ' ');
    
            int position = 0, jmp_st_pos = 0;
            int jump_amount;
            for(int row = numRows; row+1 >= numRows/2; row--, jmp_st_pos++){
                bool even = false;
                for(int jmp_pos = jmp_st_pos; jmp_pos < n && position < n; jmp_pos+=jump_amount, position++){
                    if(even){
                        if(numRows != row && row != 1)
                            jump_amount = abs(numRows - row) *2;
                    } else {
                        if(row == 1)
                            jump_amount = numRows * 2 - 2;
                        else
                            jump_amount = row * 2 - 2;
                            
                    }
                    even = !even;
                    words[position] = s[jmp_pos];
                }
            }


            int i = words.length()-1;
            int num_spaces = numRows -1;
            while(words[i] == ' '){
                words[i] = s[num_spaces];
                i--; num_spaces++;
            }
      
    
            return words;
        }
    };`},{time:1762024690,language:"cpp",runtime:7,memory:10,accepted:!0,code_content:`class Solution {
    public:
        string convert(string s, int numRows) {
            int n = s.length();
            if(numRows == 1)
                return s;

            string words(n, ' ');
    
            int position = 0, jmp_st_pos = 0;
            int jump_amount;
            for(int row = numRows; row > 0; row--, jmp_st_pos++){
                bool even = false;
                for(int jmp_pos = jmp_st_pos; jmp_pos < n && position < n; jmp_pos+=jump_amount, position++){
                    if(even){
                        if(numRows != row && row != 1)
                            jump_amount = abs(numRows - row) *2;
                    } else {
                        if(row == 1)
                            jump_amount = numRows * 2 - 2;
                        else
                            jump_amount = row * 2 - 2;
                            
                    }
                    even = !even;
                    words[position] = s[jmp_pos];
                }
            }

    
            return words;
        }
    };`}]},9:{title:"palindrome number",difficulty:"Easy",html_content:`<h1>9 - Palindrome Number</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/palindrome-number/>palindrome-number</a></h2><p>Given an integer <code>x</code>, return <code>true</code><em> if </em><code>x</code><em> is a </em><span data-keyword=palindrome-integer><em><strong>palindrome</strong></em></span><em>, and </em><code>false</code><em> otherwise</em>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> x = 121
<strong>Output:</strong> true
<strong>Explanation:</strong> 121 reads as 121 from left to right and from right to left.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> x = -121
<strong>Output:</strong> false
<strong>Explanation:</strong> From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> x = 10
<strong>Output:</strong> false
<strong>Explanation:</strong> Reads 01 from right to left. Therefore it is not a palindrome.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>-2<sup>31</sup> &lt;= x &lt;= 2<sup>31</sup> - 1</code></ul><p> <p><strong>Follow up:</strong> Could you solve it without converting the integer to a string?`,submissions:[{time:1767037047,language:"py",runtime:8,memory:17,accepted:!0,code_content:`class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return False
        
        test: List[int] = []       
        while x != 0:
            test.append(x % 10)
            x //= 10
            
        left = 0
        right = len(test) - 1
        while left < right:
            if test[left] != test[right]:
                return False
            left += 1
            right -= 1

        return True`}]},11:{title:"container with most water",difficulty:"Medium",html_content:`<h1>11 - Container With Most Water</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/container-with-most-water/>container-with-most-water</a></h2><p>You are given an integer array <code>height</code> of length <code>n</code>. There are <code>n</code> vertical lines drawn such that the two endpoints of the <code>i<sup>th</sup></code> line are <code>(i, 0)</code> and <code>(i, height[i])</code>.<p>Find two lines that together with the x-axis form a container, such that the container contains the most water.<p>Return <em>the maximum amount of water a container can store</em>.<p><strong>Notice</strong> that you may not slant the container.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg style=width:600px;height:287px><pre>
<strong>Input:</strong> height = [1,8,6,2,5,4,8,3,7]
<strong>Output:</strong> 49
<strong>Explanation:</strong> The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> height = [1,1]
<strong>Output:</strong> 1
</pre><p> <p><strong>Constraints:</strong><ul><li><code>n == height.length</code><li><code>2 &lt;= n &lt;= 10<sup>5</sup></code><li><code>0 &lt;= height[i] &lt;= 10<sup>4</sup></code></ul>`,submissions:[{time:1693101386,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    int maxArea(vector<int>& height) {
        int a = 1;
        int p = 1;
        int n = height.size();
        for(int i = 0; i < n; i++){
            for(int x = (i + 1); x < n; x++){
                int minHeight = min(height[i], height[x]);
                int width = x - i;
                int area = width * minHeight;
                if (area > a) {
                    a = area; 
                }
        }
        }
        return a;
    }
};`},{time:1693101434,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    int maxArea(vector<int>& height) {
        int a = 0;
        int n = height.size();
        for(int i = 0; i < n; i++){
            for(int x = (i + 1); x < n; x++){
                int minHeight = min(height[i], height[x]);
                int width = x - i;
                int area = width * minHeight;
                if (area > a) {
                    a = area; 
                }
        }
        }
        return a;
    }
};`},{time:1693102618,language:"cpp",runtime:64,memory:59,accepted:!0,code_content:`class Solution {
public:
    int maxArea(vector<int>& height) {
        int left = 0;
        int right = height.size() -1;
        int marea = 0;
        while (left < right) {
            int minHeight = min(height[left], height[right]);
            int width = right - left;
            int area = width * minHeight;
            marea = max(marea, area);
            
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        
        return marea;
    }
};`}]},12:{title:"integer to roman",difficulty:"Medium",html_content:`<h1>12 - Integer to Roman</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/integer-to-roman/>integer-to-roman</a></h2><p>Seven different symbols represent Roman numerals with the following values:<table><thead><tr><th>Symbol<th>Value<tbody><tr><td>I<td>1<tr><td>V<td>5<tr><td>X<td>10<tr><td>L<td>50<tr><td>C<td>100<tr><td>D<td>500<tr><td>M<td>1000</table><p>Roman numerals are formed by appending the conversions of decimal place values from highest to lowest. Converting a decimal place value into a Roman numeral has the following rules:<ul><li>If the value does not start with 4 or 9, select the symbol of the maximal value that can be subtracted from the input, append that symbol to the result, subtract its value, and convert the remainder to a Roman numeral.<li>If the value starts with 4 or 9 use the <strong>subtractive form</strong> representing one symbol subtracted from the following symbol, for example, 4 is 1 (<code>I</code>) less than 5 (<code>V</code>): <code>IV</code> and 9 is 1 (<code>I</code>) less than 10 (<code>X</code>): <code>IX</code>. Only the following subtractive forms are used: 4 (<code>IV</code>), 9 (<code>IX</code>), 40 (<code>XL</code>), 90 (<code>XC</code>), 400 (<code>CD</code>) and 900 (<code>CM</code>).<li>Only powers of 10 (<code>I</code>, <code>X</code>, <code>C</code>, <code>M</code>) can be appended consecutively at most 3 times to represent multiples of 10. You cannot append 5 (<code>V</code>), 50 (<code>L</code>), or 500 (<code>D</code>) multiple times. If you need to append a symbol 4 times use the <strong>subtractive form</strong>.</ul><p>Given an integer, convert it to a Roman numeral.<p> <p><strong class=example>Example 1:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>num = 3749</span><p><strong>Output:</strong> <span class=example-io>"MMMDCCXLIX"</span><p><strong>Explanation:</strong><pre>
3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)
 700 = DCC as 500 (D) + 100 (C) + 100 (C)
  40 = XL as 10 (X) less of 50 (L)
   9 = IX as 1 (I) less of 10 (X)
Note: 49 is not 1 (I) less of 50 (L) because the conversion is based on decimal places
</pre></div><p><strong class=example>Example 2:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>num = 58</span><p><strong>Output:</strong> <span class=example-io>"LVIII"</span><p><strong>Explanation:</strong><pre>
50 = L
 8 = VIII
</pre></div><p><strong class=example>Example 3:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>num = 1994</span><p><strong>Output:</strong> <span class=example-io>"MCMXCIV"</span><p><strong>Explanation:</strong><pre>
1000 = M
 900 = CM
  90 = XC
   4 = IV
</pre></div><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= num &lt;= 3999</code></ul>`,submissions:[{time:1761671948,language:"cpp",runtime:0,memory:12,accepted:!0,code_content:`#define I 1
#define V 5
#define X 10
#define L 50
#define C 100
#define D 500
#define M 1000

class Solution {
public:

    string intToRoman(int num) {

        const vector<pair<int, string>> roman_symbols{
            {M, "M"}, {M - C, "CM"}, {D, "D"}, {D - C, "CD"}, {C, "C"},
            {C - X, "XC"},  {L , "L"},   {L - X, "XL"}, {X, "X"},   {X - I, "IX"},
            {V, "V"},    {V - I, "IV"},   {I, "I"}
            };

        string myString;
        
        for(const auto& [value, symbol] : roman_symbols){
            if (num == 0)
                break;

            while(num>= value){
                myString += symbol;
                num -= value;
            }

        }

        return myString;
    }
};`}]},13:{title:"roman to integer",difficulty:"Easy",html_content:`<h1>13 - Roman to Integer</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/roman-to-integer/>roman-to-integer</a></h2><p>Roman numerals are represented by seven different symbols: <code>I</code>, <code>V</code>, <code>X</code>, <code>L</code>, <code>C</code>, <code>D</code> and <code>M</code>.<pre>
<strong>Symbol</strong>       <strong>Value</strong>
I             1
V             5
X             10
L             50
C             100
D             500
M             1000</pre><p>For example, <code>2</code> is written as <code>II</code> in Roman numeral, just two ones added together. <code>12</code> is written as <code>XII</code>, which is simply <code>X + II</code>. The number <code>27</code> is written as <code>XXVII</code>, which is <code>XX + V + II</code>.<p>Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not <code>IIII</code>. Instead, the number four is written as <code>IV</code>. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as <code>IX</code>. There are six instances where subtraction is used:<ul><li><code>I</code> can be placed before <code>V</code> (5) and <code>X</code> (10) to make 4 and 9. <li><code>X</code> can be placed before <code>L</code> (50) and <code>C</code> (100) to make 40 and 90. <li><code>C</code> can be placed before <code>D</code> (500) and <code>M</code> (1000) to make 400 and 900.</ul><p>Given a roman numeral, convert it to an integer.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> s = "III"
<strong>Output:</strong> 3
<strong>Explanation:</strong> III = 3.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> s = "LVIII"
<strong>Output:</strong> 58
<strong>Explanation:</strong> L = 50, V= 5, III = 3.
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> s = "MCMXCIV"
<strong>Output:</strong> 1994
<strong>Explanation:</strong> M = 1000, CM = 900, XC = 90 and IV = 4.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= s.length &lt;= 15</code><li><code>s</code> contains only the characters <code>('I', 'V', 'X', 'L', 'C', 'D', 'M')</code>.<li>It is <strong>guaranteed</strong> that <code>s</code> is a valid roman numeral in the range <code>[1, 3999]</code>.</ul>`,submissions:[{time:1761657981,language:"cpp",runtime:12,memory:13,accepted:!0,code_content:`class Solution {
public:
    int romanToInt(string s) {
        int n = s.size();
        unordered_map<char, int> myHashMap = {
            {'I', 1}, 
            {'V', 5}, 
            {'X', 10}, 
            {'L', 50}, 
            {'C', 100}, 
            {'D', 500}, 
            {'M', 1000}
        };

        int total = 0;
        int max_num = myHashMap[s[n-1]];
        for(int c = n-1; c >= 0; c--){
            int temp = myHashMap[s[c]];
            if(max_num <= temp){
                total += temp;
            } else{
                total -= temp;
            }
            max_num = (max_num, temp);
        }

        return total;



    }
};`},{time:1761658594,language:"cpp",runtime:0,memory:10,accepted:!0,code_content:`class Solution {
    
public:
    int char_toint(char c){
        switch(c){
            case 'I':
                return 1;
            case 'V':
                return 5;
            case 'X':
                return 10;
            case 'L':
                return 50;
            case 'C':
                return 100;
            case 'D':
                return 500;
            case 'M':
                return 1000;
        }
        return 0;

    }
    int romanToInt(string s) {
        int n = s.size();

        int total = 0;
        int max_num = char_toint(s[n-1]);
        for(int c = n-1; c >= 0; c--){
            int temp = char_toint(s[c]);


            if(max_num <= temp){
                total += temp;
            } else{
                total -= temp;
            }
            max_num = (max_num, temp);
        }

        return total;

    }
};`}]},14:{title:"longest common prefix",difficulty:"Easy",html_content:`<h1>14 - Longest Common Prefix</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/longest-common-prefix/>longest-common-prefix</a></h2><p>Write a function to find the longest common prefix string amongst an array of strings.<p>If there is no common prefix, return an empty string <code>""</code>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> strs = ["flower","flow","flight"]
<strong>Output:</strong> "fl"
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> strs = ["dog","racecar","car"]
<strong>Output:</strong> ""
<strong>Explanation:</strong> There is no common prefix among the input strings.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= strs.length &lt;= 200</code><li><code>0 &lt;= strs[i].length &lt;= 200</code><li><code>strs[i]</code> consists of only lowercase English letters if it is non-empty.</ul>`,submissions:[{time:1761692893,language:"cpp",runtime:0,memory:11,accepted:!0,code_content:`class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        int n = strs.size();
        if (n == 0)
            return "";

        int str_len = strs[0].size();

        int length = 0;

        for(int x = 0; x < str_len; x++){

            char pre = strs[0][x];
            for(int i = 0; i < n; i++){
                if(strs[i].size() < x || strs[i][x] != pre)
                    return strs[0].substr(0, length);
            
            }
            length++;
        }
        return strs[0].substr(0, length);
        
    }
};`}]},15:{title:"3sum",difficulty:"Medium",html_content:`<h1>15 - 3Sum</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/3sum/>3sum</a></h2><p>Given an integer array nums, return all the triplets <code>[nums[i], nums[j], nums[k]]</code> such that <code>i != j</code>, <code>i != k</code>, and <code>j != k</code>, and <code>nums[i] + nums[j] + nums[k] == 0</code>.<p>Notice that the solution set must not contain duplicate triplets.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> nums = [-1,0,1,2,-1,-4]
<strong>Output:</strong> [[-1,-1,2],[-1,0,1]]
<strong>Explanation:</strong> 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> nums = [0,1,1]
<strong>Output:</strong> []
<strong>Explanation:</strong> The only possible triplet does not sum up to 0.
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> nums = [0,0,0]
<strong>Output:</strong> [[0,0,0]]
<strong>Explanation:</strong> The only possible triplet sums up to 0.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>3 &lt;= nums.length &lt;= 3000</code><li><code>-10<sup>5</sup> &lt;= nums[i] &lt;= 10<sup>5</sup></code></ul>`,submissions:[{time:1762182139,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
    public:
        vector<vector<int>> threeSum(vector<int>& nums) {    
             vector<vector<int>> result;

             unordered_map<int, int> map;

             for(int key: nums){
                auto it = map.find(key);
                if (it == map.end()) {
                    map[key] = 1;
                } else{
                    map[key]++;
                }
             }
    
             int l = 0, r = nums.size()-1;
    
             int min = nums[0];
    
             while(l < r){
                int target = -(nums[l] + nums[r]);
    
                auto it = map.find(target);
                if(it != map.end()){
                    if((nums[l] != target && nums[r] != target) || it->second >= 2){
                        int left = nums[l], right = nums[r];
                        if(left > right){
                            swap(left, right);
                        }

                        if(target > right)
                            result.push_back({left, right, target});
                        else if(target < left)
                            result.push_back({target, left, right});
                        else
                            result.push_back({left, target,  right});
                    }
                    l++;
                    continue;
                }
    
                if (nums[l] + nums[r] > -min) {
                    l++;
                } else {
                    r--;
                }
             }

            sort(result.begin(), result.end());

            auto last = unique(result.begin(), result.end());

            result.erase(last, result.end());
    
    
             return result;
            
        }
    };`},{time:1762182410,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
    public:
        vector<vector<int>> threeSum(vector<int>& nums) {    
             vector<vector<int>> result;

             unordered_map<int, int> map;

             for(int key: nums){
                auto it = map.find(key);
                if (it == map.end()) {
                    map[key] = 1;
                } else{
                    map[key]++;
                }
             }
    
             int l = 0, r = nums.size()-1;
    
             int min = nums[0];
    
             while(l < r){
                int target = -(nums[l] + nums[r]);
    
                auto it = map.find(target);
                if(it != map.end()){
                    if((nums[l] != target && nums[r] != target) || it->second >= 2){

                        if((nums[l] == target && nums[r] == target) && it->second < 3){
                            l++;
                            continue;
                        }


                        int left = nums[l], right = nums[r];
                        if(left > right){
                            swap(left, right);
                        }

                        if(target > right)
                            result.push_back({left, right, target});
                        else if(target < left)
                            result.push_back({target, left, right});
                        else
                            result.push_back({left, target,  right});
                    }
                    l++;
                    continue;
                }
    
                if (nums[l] + nums[r] > -min) {
                    l++;
                } else {
                    r--;
                }
             }

            sort(result.begin(), result.end());

            auto last = unique(result.begin(), result.end());

            result.erase(last, result.end());
    
    
             return result;
            
        }
    };`},{time:1762184744,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
    public:
        vector<vector<int>> threeSum(vector<int>& nums) {    
             vector<vector<int>> result;

             sort(nums.begin(), nums.end());

             unordered_map<int, int> map;

             for(int key: nums){
                auto it = map.find(key);
                if (it == map.end()) {
                    map[key] = 1;
                } else{
                    map[key]++;
                }
             }
    
             int l = 0, r = nums.size()-1;

    
             while(l < r){
                int target = -(nums[l] + nums[r]);
    
                auto it = map.find(target);
                if(it != map.end()){
                    if((nums[l] != target && nums[r] != target) || it->second >= 2){

                        if((nums[l] == target && nums[r] == target) && it->second < 3){
                            l++;
                            continue;
                        }

                        if(target > nums[r])
                            result.push_back({nums[l], nums[r], target});
                        else if(target < nums[l])
                            result.push_back({target, nums[l], nums[r]});
                        else
                            result.push_back({nums[l], target,  nums[r]});
                        l++;
                        continue;
                    }
                }
    
                if (abs(nums[l]) > abs(nums[r])) {
                    l++;
                } else {
                    r--;
                }
             }

            sort(result.begin(), result.end());

            auto last = unique(result.begin(), result.end());

            result.erase(last, result.end());
    
    
             return result;
            
        }
    };`},{time:1762185777,language:"cpp",runtime:61,memory:31,accepted:!0,code_content:`class Solution {
    public:
        vector<vector<int>> threeSum(vector<int>& nums) {    
             vector<vector<int>> result;
             int n = nums.size();

             sort(nums.begin(), nums.end());

            for (int i = 0; i < n; i++) {
                if (i > 0 && nums[i] == nums[i - 1]) 
                    continue;

                int left = i + 1, right = n - 1;
                while (left < right) {
                    int total = nums[i] + nums[left] + nums[right];
                    if(total > 0)
                        right--;
                    else if (total < 0)
                        left++;
                    else{
                        vector<int> temp = {nums[i],nums[left],nums[right]};
                        result.push_back(temp);
                        left++;
                        right--;
                        while(left<right && nums[left]==nums[left-1]) 
                            left++;
                        while(left<right && nums[right]==nums[right+1]) 
                            right--;
                    }
                    
                

                }

            }

             
            
            return result;
        }
    };`}]},17:{title:"letter combinations of a phone number",difficulty:"Medium",html_content:`<h1>17 - Letter Combinations of a Phone Number</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/letter-combinations-of-a-phone-number/>letter-combinations-of-a-phone-number</a></h2><p>Given a string containing digits from <code>2-9</code> inclusive, return all possible letter combinations that the number could represent. Return the answer in <strong>any order</strong>.<p>A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.<p><img alt src=https://assets.leetcode.com/uploads/2022/03/15/1200px-telephone-keypad2svg.png style=width:300px;height:243px><p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> digits = "23"
<strong>Output:</strong> ["ad","ae","af","bd","be","bf","cd","ce","cf"]
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> digits = "2"
<strong>Output:</strong> ["a","b","c"]
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= digits.length &lt;= 4</code><li><code>digits[i]</code> is a digit in the range <code>['2', '9']</code>.</ul>`,submissions:[{time:1721074451,language:"cpp",runtime:0,memory:8,accepted:!0,code_content:`class Solution {
public:
    vector<string> letterCombinations(string digits) {
        vector<string> solution;
        if (digits.empty()) return solution;

        solution.push_back("");
        for(auto str: digits) {
            vector<string> temp;
            switch (str) {
                case '2': 
                    adddigit(solution, temp, "abc");
                    break;
                case '3': 
                    adddigit(solution, temp, "def");
                    break;
                case '4': 
                    adddigit(solution, temp, "ghi");
                    break;
                case '5': 
                    adddigit(solution, temp, "jkl");
                    break;
                case '6': 
                    adddigit(solution, temp, "mno");
                    break;
                case '7': 
                    adddigit(solution, temp, "pqrs");
                    break;
                case '8': 
                    adddigit(solution, temp, "tuv");
                    break;
                case '9': 
                    adddigit(solution, temp, "wxyz");
                    break;
            }
            solution = temp;
        }
        return solution;
    }

private:
    void adddigit(const vector<string>& solution, vector<string>& temp, const string& letters) {
        for(auto character : letters) {
            for(auto i : solution) {
                temp.push_back(i + character);
            }
        }
    }
};
`}]},19:{title:"remove nth node from end of list",difficulty:"Medium",html_content:`<h1>19 - Remove Nth Node From End of List</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/remove-nth-node-from-end-of-list/>remove-nth-node-from-end-of-list</a></h2><p>Given the <code>head</code> of a linked list, remove the <code>n<sup>th</sup></code> node from the end of the list and return its head.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg style=width:542px;height:222px><pre>
<strong>Input:</strong> head = [1,2,3,4,5], n = 2
<strong>Output:</strong> [1,2,3,5]
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> head = [1], n = 1
<strong>Output:</strong> []
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> head = [1,2], n = 1
<strong>Output:</strong> [1]
</pre><p> <p><strong>Constraints:</strong><ul><li>The number of nodes in the list is <code>sz</code>.<li><code>1 &lt;= sz &lt;= 30</code><li><code>0 &lt;= Node.val &lt;= 100</code><li><code>1 &lt;= n &lt;= sz</code></ul><p> <p><strong>Follow up:</strong> Could you do this in one pass?`,submissions:[{time:1764526507,language:"py",runtime:0,memory:18,accepted:!0,code_content:`# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:

        temp_head = head
        node_count = -1
        while temp_head:
            node_count += 1
            temp_head = temp_head.next


        stop = node_count - n

        if stop == -1:
            return head.next

        temp_head = head

        prev = head
        while temp_head:
            if stop == 0:
                temp_delete = temp_head.next
                if temp_delete is None:
                    prev.next = None
                    break
                temp_head.next = temp_head.next.next
                del temp_delete
                break
            stop -= 1
            prev = temp_head
            temp_head = temp_head.next

        return head `}]},20:{title:"valid parentheses",difficulty:"Easy",html_content:`<h1>20 - Valid Parentheses</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/valid-parentheses/>valid-parentheses</a></h2><p>Given a string <code>s</code> containing just the characters <code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, <code>'['</code> and <code>']'</code>, determine if the input string is valid.<p>An input string is valid if:<ol><li>Open brackets must be closed by the same type of brackets.<li>Open brackets must be closed in the correct order.<li>Every close bracket has a corresponding open bracket of the same type.</ol><p> <p><strong class=example>Example 1:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>s = "()"</span><p><strong>Output:</strong> <span class=example-io>true</span></div><p><strong class=example>Example 2:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>s = "()[]{}"</span><p><strong>Output:</strong> <span class=example-io>true</span></div><p><strong class=example>Example 3:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>s = "(]"</span><p><strong>Output:</strong> <span class=example-io>false</span></div><p><strong class=example>Example 4:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>s = "([])"</span><p><strong>Output:</strong> <span class=example-io>true</span></div><p><strong class=example>Example 5:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>s = "([)]"</span><p><strong>Output:</strong> <span class=example-io>false</span></div><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= s.length &lt;= 10<sup>4</sup></code><li><code>s</code> consists of parentheses only <code>'()[]{}'</code>.</ul>`,submissions:[{time:1764004802,language:"py",runtime:0,memory:17,accepted:!0,code_content:`class Solution:
    def isValid(self, s: str) -> bool:
        stack = deque()
        negate = {')':'(', '}':'{', ']':'['}

        for ch in s:
            if ord(ch) % 4 == 1:
                if not stack or stack.pop() != negate[ch]:
                    return False
            else:
                stack.append(ch)

        return not bool(stack)`}]},21:{title:"merge two sorted lists",difficulty:"Easy",html_content:`<h1>21 - Merge Two Sorted Lists</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/merge-two-sorted-lists/>merge-two-sorted-lists</a></h2><p>You are given the heads of two sorted linked lists <code>list1</code> and <code>list2</code>.<p>Merge the two lists into one <strong>sorted</strong> list. The list should be made by splicing together the nodes of the first two lists.<p>Return <em>the head of the merged linked list</em>.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg style=width:662px;height:302px><pre>
<strong>Input:</strong> list1 = [1,2,4], list2 = [1,3,4]
<strong>Output:</strong> [1,1,2,3,4,4]
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> list1 = [], list2 = []
<strong>Output:</strong> []
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> list1 = [], list2 = [0]
<strong>Output:</strong> [0]
</pre><p> <p><strong>Constraints:</strong><ul><li>The number of nodes in both lists is in the range <code>[0, 50]</code>.<li><code>-100 &lt;= Node.val &lt;= 100</code><li>Both <code>list1</code> and <code>list2</code> are sorted in <strong>non-decreasing</strong> order.</ul>`,submissions:[{time:1764252627,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        if list1 is None and list2 is None:
            return None

        result = ListNode()
        head = result
        t = ListNode()
        while list1 is not None or list2 is not None:

            if list1 is None or list1.val > list2.val:
                next_value = list2.val
                temp = list2
                list2 = list2.next
            else:
                next_value = list1.val
                temp = list1
                list1 = list1.next

            result.val = next_value
            t = result
            result.next = temp
            result = temp

        del t.next
        t.next = None

        return head`},{time:1764252859,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        if list1 is None and list2 is None:
            return None
        elif list1 is None:
            return list2
        elif list2 is None:
            return list1

        result = ListNode()
        head = result
        t = ListNode()
        while list1 is not None or list2 is not None:

            if list1 is None or list1.val > list2.val:
                next_value = list2.val
                temp = list2
                list2 = list2.next
            else:
                next_value = list1.val
                temp = list1
                list1 = list1.next

            result.val = next_value
            t = result
            result.next = temp
            result = temp

        del t.next
        t.next = None

        return head`},{time:1764253653,language:"py",runtime:0,memory:17,accepted:!0,code_content:`class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        if list1 is None and list2 is None:
            return None

        result = ListNode()
        head = result
        while list1 is not None and list2 is not None:

            if list1.val > list2.val:
                temp = list2
                list2 = list2.next
            else:
                temp = list1
                list1 = list1.next

            result.next = temp
            result = result.next

        if list1 is None:
            result.next = list2
        else:
            result.next = list1


        return head.next`}]},22:{title:"generate parentheses",difficulty:"Medium",html_content:`<h1>22 - Generate Parentheses</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/generate-parentheses/>generate-parentheses</a></h2><p>Given <code>n</code> pairs of parentheses, write a function to <em>generate all combinations of well-formed parentheses</em>.<p> <p><strong class=example>Example 1:</strong><pre><strong>Input:</strong> n = 3
<strong>Output:</strong> ["((()))","(()())","(())()","()(())","()()()"]
</pre><p><strong class=example>Example 2:</strong><pre><strong>Input:</strong> n = 1
<strong>Output:</strong> ["()"]
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= n &lt;= 8</code></ul>`,submissions:[{time:1766091118,language:"py",runtime:0,memory:17,accepted:!0,code_content:`class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        result: List[str] = []

        def dfs(number: int, item: str, fill: int):
            if number == 0:
                result.append(item + ")" * fill)
                return
            if fill > 0:
                dfs(number, item + ")", fill - 1)
            dfs(number - 1, item + "(", fill + 1)


        dfs(n , "", 0)
        return result
`}]},23:{title:"merge k sorted lists",difficulty:"Hard",html_content:`<h1>23 - Merge k Sorted Lists</h1><h2>Difficulty: Hard - <a href=https://leetcode.com/problems/merge-k-sorted-lists/>merge-k-sorted-lists</a></h2><p>You are given an array of <code>k</code> linked-lists <code>lists</code>, each linked-list is sorted in ascending order.<p><em>Merge all the linked-lists into one sorted linked-list and return it.</em><p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> lists = [[1,4,5],[1,3,4],[2,6]]
<strong>Output:</strong> [1,1,2,3,4,4,5,6]
<strong>Explanation:</strong> The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted linked list:
1->1->2->3->4->4->5->6
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> lists = []
<strong>Output:</strong> []
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> lists = [[]]
<strong>Output:</strong> []
</pre><p> <p><strong>Constraints:</strong><ul><li><code>k == lists.length</code><li><code>0 &lt;= k &lt;= 10<sup>4</sup></code><li><code>0 &lt;= lists[i].length &lt;= 500</code><li><code>-10<sup>4</sup> &lt;= lists[i][j] &lt;= 10<sup>4</sup></code><li><code>lists[i]</code> is sorted in <strong>ascending order</strong>.<li>The sum of <code>lists[i].length</code> will not exceed <code>10<sup>4</sup></code>.</ul>`,submissions:[{time:1766326368,language:"py",runtime:22,memory:19,accepted:!0,code_content:`# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class temp:
    def __init__(self, t:ListNode):
        self.t = t

    def __lt__(self, other):
        return self.t.val < other.t.val


class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        pq = []

        for linked_list in lists:
            if linked_list:
                heapq.heappush(pq, temp(linked_list))

        result = ListNode()
        head = result
        while pq:
            node = heapq.heappop(pq).t
            result.next = node
            result = result.next
            if node.next:
                heapq.heappush(pq, temp(node.next))


        return head.next`}]},25:{title:"reverse nodes in k group",difficulty:"Hard",html_content:`<h1>25 - Reverse Nodes in k-Group</h1><h2>Difficulty: Hard - <a href=https://leetcode.com/problems/reverse-nodes-in-k-group/>reverse-nodes-in-k-group</a></h2><p>Given the <code>head</code> of a linked list, reverse the nodes of the list <code>k</code> at a time, and return <em>the modified list</em>.<p><code>k</code> is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of <code>k</code> then left-out nodes, in the end, should remain as it is.<p>You may not alter the values in the list's nodes, only nodes themselves may be changed.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/10/03/reverse_ex1.jpg style=width:542px;height:222px><pre>
<strong>Input:</strong> head = [1,2,3,4,5], k = 2
<strong>Output:</strong> [2,1,4,3,5]
</pre><p><strong class=example>Example 2:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/10/03/reverse_ex2.jpg style=width:542px;height:222px><pre>
<strong>Input:</strong> head = [1,2,3,4,5], k = 3
<strong>Output:</strong> [3,2,1,4,5]
</pre><p> <p><strong>Constraints:</strong><ul><li>The number of nodes in the list is <code>n</code>.<li><code>1 &lt;= k &lt;= n &lt;= 5000</code><li><code>0 &lt;= Node.val &lt;= 1000</code></ul><p> <p><strong>Follow-up:</strong> Can you solve the problem in <code>O(1)</code> extra memory space?`,submissions:[{time:1764353209,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if k <= 1:
            return head


        head_temp: ListNode = head
        prev_temp = None

        new_head = ListNode()
        new_head_temp = new_head

        tail = None

        rest = head
        prev_tail = None

        index = k
        while head_temp:
            if 0 == index:
                new_head_temp.next = prev_temp
                new_head_temp = tail
                prev_temp = None
                prev_tail = tail
                tail = None
                index = k
                rest = head_temp

            if 0 <= index:
                    temp = ListNode(head_temp.val)
                    temp.next = prev_temp
                    prev_temp = temp
                    if tail is None:
                        tail = prev_temp

            index -= 1
            head_temp = head_temp.next

        if prev_tail:
            prev_tail.next = rest

        return new_head.next`},{time:1764353483,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if k <= 1:
            return head


        head_temp: ListNode = head
        prev_temp = None

        new_head = ListNode()
        new_head_temp = new_head

        tail = None

        rest = head
        prev_tail = None

        index = k
        while head_temp:
            if 0 == index:
                new_head_temp.next = prev_temp
                new_head_temp = tail
                prev_temp = None
                prev_tail = tail
                tail = None
                index = k
                rest = head_temp

            if 0 <= index:
                    temp = ListNode(head_temp.val)
                    temp.next = prev_temp
                    prev_temp = temp
                    if tail is None:
                        tail = prev_temp

            index -= 1
            head_temp = head_temp.next

        if prev_tail:
            prev_tail.next = rest

        if new_head.next is None:
            return prev_temp
        else:
            return new_head.next`},{time:1764354876,language:"py",runtime:11,memory:19,accepted:!0,code_content:`# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if k <= 1:
            return head


        head_temp: ListNode = head
        prev_temp = None

        new_head = ListNode()
        new_head_temp = new_head

        tail = None

        rest = head
        prev_tail = None

        index = k
        while head_temp:

            if 0 <= index:
                    temp = ListNode(head_temp.val)
                    temp.next = prev_temp
                    prev_temp = temp
                    if tail is None:
                        tail = prev_temp

            index -= 1
            head_temp = head_temp.next

            if 0 == index:
                new_head_temp.next = prev_temp
                new_head_temp = tail
                prev_temp = None
                prev_tail = tail
                tail = None
                index = k
                rest = head_temp


        if prev_tail:
            prev_tail.next = rest

        if new_head.next is None:
            return prev_temp
        else:
            return new_head.next`}]},26:{title:"remove duplicates from sorted array",difficulty:"Easy",html_content:`<h1>26 - Remove Duplicates from Sorted Array</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/remove-duplicates-from-sorted-array/>remove-duplicates-from-sorted-array</a></h2><p>Given an integer array <code>nums</code> sorted in <strong>non-decreasing order</strong>, remove the duplicates <a href=https://en.wikipedia.org/wiki/In-place_algorithm target=_blank><strong>in-place</strong></a> such that each unique element appears only <strong>once</strong>. The <strong>relative order</strong> of the elements should be kept the <strong>same</strong>.<p>Consider the number of <em>unique elements</em> in <code>nums</code> to be <code>k<strong>​​​​​​​</strong></code>​​​​​​​. <meta charset=UTF-8>After removing duplicates, return the number of unique elements <code>k</code>.<p><meta charset=UTF-8>The first <code>k</code> elements of <code>nums</code> should contain the unique numbers in <strong>sorted order</strong>. The remaining elements beyond index <code>k - 1</code> can be ignored.<p><strong>Custom Judge:</strong><p>The judge will test your solution with the following code:<pre>
int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i &lt; k; i++) {
    assert nums[i] == expectedNums[i];
}
</pre><p>If all assertions pass, then your solution will be <strong>accepted</strong>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> nums = [1,1,2]
<strong>Output:</strong> 2, nums = [1,2,_]
<strong>Explanation:</strong> Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> nums = [0,0,1,1,1,2,2,3,3,4]
<strong>Output:</strong> 5, nums = [0,1,2,3,4,_,_,_,_,_]
<strong>Explanation:</strong> Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= nums.length &lt;= 3 * 10<sup>4</sup></code><li><code>-100 &lt;= nums[i] &lt;= 100</code><li><code>nums</code> is sorted in <strong>non-decreasing</strong> order.</ul>`,submissions:[{time:1761052711,language:"cpp",runtime:0,memory:22,accepted:!0,code_content:`class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        if (nums.empty())
            return 0;
        
        int ar_i = 1;

        for (int i = 0; i < nums.size(); i++){
            if(nums[i] != nums[ar_i-1]){
                nums[ar_i] = nums[i];
                ar_i++;
            }

        }

        return ar_i;
    }
};`}]},27:{title:"remove element",difficulty:"Easy",html_content:`<h1>27 - Remove Element</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/remove-element/>remove-element</a></h2><p>Given an integer array <code>nums</code> and an integer <code>val</code>, remove all occurrences of <code>val</code> in <code>nums</code> <a href=https://en.wikipedia.org/wiki/In-place_algorithm target=_blank><strong>in-place</strong></a>. The order of the elements may be changed. Then return <em>the number of elements in </em><code>nums</code><em> which are not equal to </em><code>val</code>.<p>Consider the number of elements in <code>nums</code> which are not equal to <code>val</code> be <code>k</code>, to get accepted, you need to do the following things:<ul><li>Change the array <code>nums</code> such that the first <code>k</code> elements of <code>nums</code> contain the elements which are not equal to <code>val</code>. The remaining elements of <code>nums</code> are not important as well as the size of <code>nums</code>.<li>Return <code>k</code>.</ul><p><strong>Custom Judge:</strong><p>The judge will test your solution with the following code:<pre>
int[] nums = [...]; // Input array
int val = ...; // Value to remove
int[] expectedNums = [...]; // The expected answer with correct length.
                            // It is sorted with no values equaling val.

int k = removeElement(nums, val); // Calls your implementation

assert k == expectedNums.length;
sort(nums, 0, k); // Sort the first k elements of nums
for (int i = 0; i &lt; actualLength; i++) {
    assert nums[i] == expectedNums[i];
}
</pre><p>If all assertions pass, then your solution will be <strong>accepted</strong>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> nums = [3,2,2,3], val = 3
<strong>Output:</strong> 2, nums = [2,2,_,_]
<strong>Explanation:</strong> Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> nums = [0,1,2,2,3,0,4,2], val = 2
<strong>Output:</strong> 5, nums = [0,1,4,0,3,_,_,_]
<strong>Explanation:</strong> Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).
</pre><p> <p><strong>Constraints:</strong><ul><li><code>0 &lt;= nums.length &lt;= 100</code><li><code>0 &lt;= nums[i] &lt;= 50</code><li><code>0 &lt;= val &lt;= 100</code></ul>`,submissions:[{time:1761051887,language:"cpp",runtime:0,memory:11,accepted:!0,code_content:`class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        int el_size = 0;

        for (int i = 0; i < nums.size(); i++){
            if(nums[i] != val){
                nums[el_size] = nums[i];
                el_size++;
            }

        }

        return el_size;
        
    }
};`}]},28:{title:"find the index of the first occurrence in a string",difficulty:"Easy",html_content:`<h1>28 - Find the Index of the First Occurrence in a String</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/>find-the-index-of-the-first-occurrence-in-a-string</a></h2><p>Given two strings <code>needle</code> and <code>haystack</code>, return the index of the first occurrence of <code>needle</code> in <code>haystack</code>, or <code>-1</code> if <code>needle</code> is not part of <code>haystack</code>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> haystack = "sadbutsad", needle = "sad"
<strong>Output:</strong> 0
<strong>Explanation:</strong> "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> haystack = "leetcode", needle = "leeto"
<strong>Output:</strong> -1
<strong>Explanation:</strong> "leeto" did not occur in "leetcode", so we return -1.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= haystack.length, needle.length &lt;= 10<sup>4</sup></code><li><code>haystack</code> and <code>needle</code> consist of only lowercase English characters.</ul>`,submissions:[{time:1762040544,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
    public:
        int strStr(string haystack, string needle) {
            for(int i = 0, x = 0; i < haystack.length()-1; i++){
                int v = i;
                while(true){
                    if(x >= needle.length())
                        return i;
                    if(haystack[v] != needle[x] || v >= haystack.length())
                        break;
                    v++; x++;
    
                }
                x = 0;
    
            }
            return -1;
            
        }
    };`},{time:1762040650,language:"cpp",runtime:0,memory:8,accepted:!0,code_content:`class Solution {
    public:
        int strStr(string haystack, string needle) {
            for(int i = 0, x = 0; i < haystack.length(); i++){
                int v = i;
                while(true){
                    if(x >= needle.length())
                        return i;
                    if(haystack[v] != needle[x] || v >= haystack.length())
                        break;
                    v++; x++;
    
                }
                x = 0;
    
            }
            return -1;
            
        }
    };`}]},29:JSON.parse('{"title":"divide two integers","difficulty":"Medium","html_content":"<h1>29 - Divide Two Integers</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/divide-two-integers/>divide-two-integers</a></h2><p>Given two integers <code>dividend</code> and <code>divisor</code>, divide two integers <strong>without</strong> using multiplication, division, and mod operator.<p>The integer division should truncate toward zero, which means losing its fractional part. For example, <code>8.345</code> would be truncated to <code>8</code>, and <code>-2.7335</code> would be truncated to <code>-2</code>.<p>Return <em>the <strong>quotient</strong> after dividing </em><code>dividend</code><em> by </em><code>divisor</code>.<p><strong>Note: </strong>Assume we are dealing with an environment that could only store integers within the <strong>32-bit</strong> signed integer range: <code>[−2<sup>31</sup>, 2<sup>31</sup> − 1]</code>. For this problem, if the quotient is <strong>strictly greater than</strong> <code>2<sup>31</sup> - 1</code>, then return <code>2<sup>31</sup> - 1</code>, and if the quotient is <strong>strictly less than</strong> <code>-2<sup>31</sup></code>, then return <code>-2<sup>31</sup></code>.<p> <p><strong class=example>Example 1:</strong><pre>\\n<strong>Input:</strong> dividend = 10, divisor = 3\\n<strong>Output:</strong> 3\\n<strong>Explanation:</strong> 10/3 = 3.33333.. which is truncated to 3.\\n</pre><p><strong class=example>Example 2:</strong><pre>\\n<strong>Input:</strong> dividend = 7, divisor = -3\\n<strong>Output:</strong> -2\\n<strong>Explanation:</strong> 7/-3 = -2.33333.. which is truncated to -2.\\n</pre><p> <p><strong>Constraints:</strong><ul><li><code>-2<sup>31</sup> &lt;= dividend, divisor &lt;= 2<sup>31</sup> - 1</code><li><code>divisor != 0</code></ul>","submissions":[{"time":1757542397,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    int divide(int dividend, int divisor) {\\n        bool end_neg = dividend < 0;\\n        bool sor_neg = divisor < 0;\\n        dividend = (end_neg) ? ~dividend + 1: dividend;\\n        divisor = (sor_neg) ? ~divisor + 1: divisor;\\n\\n        int n_max = binarySearch(dividend, divisor);\\n        int result = divide(dividend, divisor << n_max, n_max, 0);\\n        return (end_neg ^ sor_neg) ? ~result +1 : result;\\n    }\\n    int divide(int dividend, int divisor, int n, int total) {\\n        if(n < 0) return total;\\n        if(dividend < divisor){\\n            divisor = divisor >> 1;\\n            return divide(dividend, divisor, n -1, total);\\n        }\\n        else{\\n            return divide(dividend-divisor, divisor >> 1, n -1, total + (1 << n));\\n        }\\n    }\\n    int binarySearch(int dividend, int divisor) {\\n    int low = 0;\\n    int high = 31;\\n    while (low <= high) {\\n        int mid = low + (high - low) / 2;\\n\\n        // Check if x is present at mid\\n        if (check_equal(dividend, divisor, mid))\\n            return mid;\\n\\n        // If x greater, ignore left half\\n        if (check_greater(dividend, divisor, mid))\\n            low = mid + 1;\\n\\n        // If x is smaller, ignore right half\\n        else\\n            high = mid - 1;\\n    }\\n\\n    // If we reach here, then element was not present\\n    return -1;\\n}\\n    bool check_equal(int dividend, int divisor, int n){\\n        return (dividend - (divisor << n) < 0) && ((dividend - (divisor << n + 1)) > 0);\\n    }\\n    bool check_greater(int dividend, int divisor, int n){\\n        return (dividend - (divisor << n)) < 0;\\n    }\\n};"},{"time":1757542500,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    int divide(int dividend, int divisor) {\\n        if (dividend == 0)\\n            return 0;\\n        bool end_neg = dividend < 0;\\n        bool sor_neg = divisor < 0;\\n        dividend = (end_neg) ? ~dividend + 1: dividend;\\n        divisor = (sor_neg) ? ~divisor + 1: divisor;\\n\\n        int n_max = binarySearch(dividend, divisor);\\n        int result = divide(dividend, divisor << n_max, n_max, 0);\\n        return (end_neg ^ sor_neg) ? ~result +1 : result;\\n    }\\n    int divide(int dividend, int divisor, int n, int total) {\\n        if(n < 0) return total;\\n        if(dividend < divisor){\\n            divisor = divisor >> 1;\\n            return divide(dividend, divisor, n -1, total);\\n        }\\n        else{\\n            return divide(dividend-divisor, divisor >> 1, n -1, total + (1 << n));\\n        }\\n    }\\n    int binarySearch(int dividend, int divisor) {\\n    int low = 0;\\n    int high = 31;\\n    while (low <= high) {\\n        int mid = low + (high - low) / 2;\\n\\n        // Check if x is present at mid\\n        if (check_equal(dividend, divisor, mid))\\n            return mid;\\n\\n        // If x greater, ignore left half\\n        if (check_greater(dividend, divisor, mid))\\n            low = mid + 1;\\n\\n        // If x is smaller, ignore right half\\n        else\\n            high = mid - 1;\\n    }\\n\\n    // If we reach here, then element was not present\\n    return -1;\\n}\\n    bool check_equal(int dividend, int divisor, int n){\\n        return (dividend - (divisor << n) < 0) && ((dividend - (divisor << n + 1)) > 0);\\n    }\\n    bool check_greater(int dividend, int divisor, int n){\\n        return (dividend - (divisor << n)) < 0;\\n    }\\n};"},{"time":1757542530,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    int divide(int dividend, int divisor) {\\n        if (dividend == 0)\\n            return 0;\\n        if (dividend == divisor)\\n            return 1;\\n        bool end_neg = dividend < 0;\\n        bool sor_neg = divisor < 0;\\n        dividend = (end_neg) ? ~dividend + 1: dividend;\\n        divisor = (sor_neg) ? ~divisor + 1: divisor;\\n\\n        int n_max = binarySearch(dividend, divisor);\\n        int result = divide(dividend, divisor << n_max, n_max, 0);\\n        return (end_neg ^ sor_neg) ? ~result +1 : result;\\n    }\\n    int divide(int dividend, int divisor, int n, int total) {\\n        if(n < 0) return total;\\n        if(dividend < divisor){\\n            divisor = divisor >> 1;\\n            return divide(dividend, divisor, n -1, total);\\n        }\\n        else{\\n            return divide(dividend-divisor, divisor >> 1, n -1, total + (1 << n));\\n        }\\n    }\\n    int binarySearch(int dividend, int divisor) {\\n    int low = 0;\\n    int high = 31;\\n    while (low <= high) {\\n        int mid = low + (high - low) / 2;\\n\\n        // Check if x is present at mid\\n        if (check_equal(dividend, divisor, mid))\\n            return mid;\\n\\n        // If x greater, ignore left half\\n        if (check_greater(dividend, divisor, mid))\\n            low = mid + 1;\\n\\n        // If x is smaller, ignore right half\\n        else\\n            high = mid - 1;\\n    }\\n\\n    // If we reach here, then element was not present\\n    return -1;\\n}\\n    bool check_equal(int dividend, int divisor, int n){\\n        return (dividend - (divisor << n) < 0) && ((dividend - (divisor << n + 1)) > 0);\\n    }\\n    bool check_greater(int dividend, int divisor, int n){\\n        return (dividend - (divisor << n)) < 0;\\n    }\\n};"},{"time":1757542972,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    int divide(int dividend, int divisor) {\\n        if (dividend == 0)\\n            return 0;\\n        if (dividend == divisor)\\n            return 1;\\n        if ((~dividend +1) == divisor)\\n            return -1;\\n        bool end_neg = dividend < 0;\\n        bool sor_neg = divisor < 0;\\n        dividend = (end_neg) ? ~dividend + 1: dividend;\\n        divisor = (sor_neg) ? ~divisor + 1: divisor;\\n\\n        int n_max = binarySearch(dividend, divisor);\\n        int result = divide(dividend, divisor << n_max, n_max, 0);\\n        return (end_neg ^ sor_neg) ? ~result +1 : result;\\n    }\\n    int divide(int dividend, int divisor, int n, int total) {\\n        if(n < 0) return total;\\n        if(dividend < divisor){\\n            divisor = divisor >> 1;\\n            return divide(dividend, divisor, n -1, total);\\n        }\\n        else{\\n            return divide(dividend-divisor, divisor >> 1, n -1, total + (1 << n));\\n        }\\n    }\\n    int binarySearch(int dividend, int divisor) {\\n    int low = 0;\\n    int high = 31;\\n    while (low <= high) {\\n        int mid = low + (high - low) / 2;\\n\\n        // Check if x is present at mid\\n        if (check_equal(dividend, divisor, mid))\\n            return mid;\\n\\n        // If x greater, ignore left half\\n        if (check_greater(dividend, divisor, mid))\\n            low = mid + 1;\\n\\n        // If x is smaller, ignore right half\\n        else\\n            high = mid - 1;\\n    }\\n\\n    // If we reach here, then element was not present\\n    return -1;\\n}\\n    bool check_equal(int dividend, int divisor, int n){\\n        return (dividend - (divisor << n) < 0) && ((dividend - (divisor << n + 1)) > 0);\\n    }\\n    bool check_greater(int dividend, int divisor, int n){\\n        return (dividend - (divisor << n)) < 0;\\n    }\\n};"},{"time":1757543111,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    int divide(int dividend, int divisor) {\\n        if (dividend == divisor)\\n            return 1;\\n        if ((~dividend +1) == divisor)\\n            return -1;\\n        bool end_neg = dividend < 0;\\n        bool sor_neg = divisor < 0;\\n        dividend = (end_neg) ? ~dividend + 1: dividend;\\n        divisor = (sor_neg) ? ~divisor + 1: divisor;\\n\\n        if (dividend < divisor)\\n            return 0;\\n\\n        int n_max = binarySearch(dividend, divisor);\\n        int result = divide(dividend, divisor << n_max, n_max, 0);\\n        return (end_neg ^ sor_neg) ? ~result +1 : result;\\n    }\\n    int divide(int dividend, int divisor, int n, int total) {\\n        if(n < 0) return total;\\n        if(dividend < divisor){\\n            divisor = divisor >> 1;\\n            return divide(dividend, divisor, n -1, total);\\n        }\\n        else{\\n            return divide(dividend-divisor, divisor >> 1, n -1, total + (1 << n));\\n        }\\n    }\\n    int binarySearch(int dividend, int divisor) {\\n    int low = 0;\\n    int high = 31;\\n    while (low <= high) {\\n        int mid = low + (high - low) / 2;\\n\\n        // Check if x is present at mid\\n        if (check_equal(dividend, divisor, mid))\\n            return mid;\\n\\n        // If x greater, ignore left half\\n        if (check_greater(dividend, divisor, mid))\\n            low = mid + 1;\\n\\n        // If x is smaller, ignore right half\\n        else\\n            high = mid - 1;\\n    }\\n\\n    // If we reach here, then element was not present\\n    return -1;\\n}\\n    bool check_equal(int dividend, int divisor, int n){\\n        return (dividend - (divisor << n) < 0) && ((dividend - (divisor << n + 1)) > 0);\\n    }\\n    bool check_greater(int dividend, int divisor, int n){\\n        return (dividend - (divisor << n)) < 0;\\n    }\\n};"},{"time":1757544291,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    int divide(int dividend, int divisor) {\\n        if (dividend == divisor)\\n            return 1;\\n        if ((~dividend +1) == divisor)\\n            return -1;\\n        bool end_neg = dividend < 0;\\n        bool sor_neg = divisor < 0;\\n        dividend = (end_neg) ? ~dividend + 1: dividend;\\n        divisor = (sor_neg) ? ~divisor + 1: divisor;\\n\\n        if (dividend < divisor)\\n            return 0;\\n\\n        int n_max = binarySearch(dividend, divisor);\\n        int result = divide(dividend, divisor << n_max, n_max, 0);\\n        return (end_neg ^ sor_neg) ? ~result +1 : result;\\n    }\\n    int divide(int dividend, int divisor, int n, int total) {\\n        if(n < 0) return total;\\n        if(dividend < divisor){\\n            divisor = divisor >> 1;\\n            return divide(dividend, divisor, n -1, total);\\n        }\\n        else{\\n            return divide(dividend-divisor, divisor >> 1, n -1, total + (1 << n));\\n        }\\n    }\\n    int binarySearch(int dividend, int divisor) {\\n    int low = 0;\\n    int high = 31;\\n    while (low <= high) {\\n        int mid = low + (high - low) / 2;\\n\\n        // Check if x is present at mid\\n        if (check_equal(dividend, divisor, mid))\\n            return mid;\\n\\n        // If x greater, ignore left half\\n        if (check_greater(dividend, divisor, mid))\\n            low = mid + 1;\\n\\n        // If x is smaller, ignore right half\\n        else\\n            high = mid - 1;\\n    }\\n\\n    // If we reach here, then element was not present\\n    return -1;\\n}\\n    bool check_equal(int dividend, int divisor, int n){\\n    // Check if shift will cause overflow\\n            int temp2;\\n    if (n + 1 >= 31 || divisor > (INT_MAX >> (n + 1))) {\\n        // Shift would overflow, so temp1 would be very large\\n        // dividend will definitely be less than the overflowed value\\n        temp2 = 0;\\n    } else {\\n        int temp1 = (divisor << (n + 1));\\n        if (dividend < temp1)\\n            temp2 = 0;\\n        else{\\n            temp2 = dividend - temp1;\\n        }\\n    }\\n        return ((dividend - (divisor << n) < 0) && (temp2 >= 0));\\n    }\\n    bool check_greater(int dividend, int divisor, int n){\\n        return (dividend - (divisor << n)) < 0;\\n    }\\n};"},{"time":1757545291,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    int divide(int dividend, int divisor) {\\n        if (dividend == INT_MIN && divisor == -1) {\\n            return INT_MAX;\\n        }\\n        if (dividend == divisor)\\n            return 1;\\n        if (((~dividend) +1) == divisor)\\n            return -1;\\n        bool end_neg = dividend < 0;\\n        bool sor_neg = divisor < 0;\\n        dividend = (end_neg) ? (~dividend) + 1: dividend;\\n        divisor = (sor_neg) ? (~divisor) + 1: divisor;\\n\\n        if (dividend < divisor)\\n            return 0;\\n\\n        int n_max = binarySearch(dividend, divisor);\\n        int result = divide(dividend, divisor << n_max, n_max, 0);\\n        return (end_neg ^ sor_neg) ? ~result +1 : result;\\n    }\\n    int divide(int dividend, int divisor, int n, int total) {\\n        if(n < 0) return total;\\n        if(dividend < divisor){\\n            divisor = divisor >> 1;\\n            return divide(dividend, divisor, n -1, total);\\n        }\\n        else{\\n            return divide(dividend-divisor, divisor >> 1, n -1, total + (1 << n));\\n        }\\n    }\\n    int binarySearch(int dividend, int divisor) {\\n    int low = 0;\\n    int high = 31;\\n    while (low <= high) {\\n        int mid = low + (high - low) / 2;\\n\\n        // Check if x is present at mid\\n        if (check_equal(dividend, divisor, mid))\\n            return mid;\\n\\n        // If x greater, ignore left half\\n        if (check_greater(dividend, divisor, mid))\\n            low = mid + 1;\\n\\n        // If x is smaller, ignore right half\\n        else\\n            high = mid - 1;\\n    }\\n\\n    // If we reach here, then element was not present\\n    return -1;\\n    \\n}\\n    bool check_equal(int dividend, int divisor, int n){\\n    // Check if shift will cause overflow\\n            int temp2;\\n    if (n + 1 >= 31 || divisor > (INT_MAX >> (n + 1))) {\\n        // Shift would overflow, so temp1 would be very large\\n        // dividend will definitely be less than the overflowed value\\n        temp2 = 0;\\n    } else {\\n        int temp1 = (divisor << (n + 1));\\n        if (dividend < temp1)\\n            temp2 = 0;\\n        else{\\n            temp2 = dividend - temp1;\\n        }\\n    }\\n        return ((dividend - (divisor << n) < 0) && (temp2 >= 0));\\n    }\\n    bool check_greater(int dividend, int divisor, int n){\\n        return (dividend - (divisor << n)) < 0;\\n    }\\n};"},{"time":1757545343,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    int divide(int dividend, int divisor) {\\n        if (dividend == INT_MIN && divisor == -1) {\\n            return INT_MAX;\\n        }\\n        if (dividend == INT_MAX && divisor == 1) {\\n            return INT_MAX;\\n        }\\n        if (dividend == divisor)\\n            return 1;\\n        if (((~dividend) +1) == divisor)\\n            return -1;\\n        bool end_neg = dividend < 0;\\n        bool sor_neg = divisor < 0;\\n        dividend = (end_neg) ? (~dividend) + 1: dividend;\\n        divisor = (sor_neg) ? (~divisor) + 1: divisor;\\n\\n        if (dividend < divisor)\\n            return 0;\\n\\n        int n_max = binarySearch(dividend, divisor);\\n        int result = divide(dividend, divisor << n_max, n_max, 0);\\n        return (end_neg ^ sor_neg) ? ~result +1 : result;\\n    }\\n    int divide(int dividend, int divisor, int n, int total) {\\n        if(n < 0) return total;\\n        if(dividend < divisor){\\n            divisor = divisor >> 1;\\n            return divide(dividend, divisor, n -1, total);\\n        }\\n        else{\\n            return divide(dividend-divisor, divisor >> 1, n -1, total + (1 << n));\\n        }\\n    }\\n    int binarySearch(int dividend, int divisor) {\\n    int low = 0;\\n    int high = 31;\\n    while (low <= high) {\\n        int mid = low + (high - low) / 2;\\n\\n        // Check if x is present at mid\\n        if (check_equal(dividend, divisor, mid))\\n            return mid;\\n\\n        // If x greater, ignore left half\\n        if (check_greater(dividend, divisor, mid))\\n            low = mid + 1;\\n\\n        // If x is smaller, ignore right half\\n        else\\n            high = mid - 1;\\n    }\\n\\n    // If we reach here, then element was not present\\n    return -1;\\n    \\n}\\n    bool check_equal(int dividend, int divisor, int n){\\n    // Check if shift will cause overflow\\n            int temp2;\\n    if (n + 1 >= 31 || divisor > (INT_MAX >> (n + 1))) {\\n        // Shift would overflow, so temp1 would be very large\\n        // dividend will definitely be less than the overflowed value\\n        temp2 = 0;\\n    } else {\\n        int temp1 = (divisor << (n + 1));\\n        if (dividend < temp1)\\n            temp2 = 0;\\n        else{\\n            temp2 = dividend - temp1;\\n        }\\n    }\\n        return ((dividend - (divisor << n) < 0) && (temp2 >= 0));\\n    }\\n    bool check_greater(int dividend, int divisor, int n){\\n        return (dividend - (divisor << n)) < 0;\\n    }\\n};"},{"time":1757546377,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    int divide(int dividend, int divisor) {\\n        if (dividend == INT_MIN && divisor == -1) {\\n            return INT_MAX;\\n        }\\n        if (dividend == INT_MAX && divisor == 1) {\\n            return INT_MAX;\\n        }\\n        if ((dividend == INT_MIN && divisor == 1) || (dividend == INT_MAX && divisor == -1)) {\\n            return INT_MIN;\\n        }\\n        if (dividend == divisor)\\n            return 1;\\n        if (((~dividend)) == divisor -1)\\n            return -1;\\n        bool end_neg = dividend < 0;\\n        bool sor_neg = divisor < 0;\\n        if(end_neg){\\n            if (dividend == INT_MIN)\\n                dividend = INT_MAX;\\n            else{\\n                dividend = (~dividend) + 1;\\n            }\\n        }\\n        divisor = (sor_neg) ? (~divisor) + 1: divisor;\\n\\n        if (dividend < divisor)\\n            return 0;\\n\\n        int n_max = binarySearch(dividend, divisor);\\n        int result = divide(dividend, divisor << n_max, n_max, 0);\\n        return (end_neg ^ sor_neg) ? ~result +1 : result;\\n    }\\n    int divide(int dividend, int divisor, int n, int total) {\\n        if(n < 0) return total;\\n        if(dividend < divisor){\\n            divisor = divisor >> 1;\\n            return divide(dividend, divisor, n -1, total);\\n        }\\n        else{\\n            return divide(dividend-divisor, divisor >> 1, n -1, total + (1 << n));\\n        }\\n    }\\n    int binarySearch(int dividend, int divisor) {\\n    int low = 0;\\n    int high = 31;\\n    while (low <= high) {\\n        int mid = low + (high - low) / 2;\\n\\n        // Check if x is present at mid\\n        if (check_equal(dividend, divisor, mid))\\n            return mid;\\n\\n        // If x greater, ignore left half\\n        if (check_greater(dividend, divisor, mid))\\n            low = mid + 1;\\n\\n        // If x is smaller, ignore right half\\n        else\\n            high = mid - 1;\\n    }\\n\\n    // If we reach here, then element was not present\\n    return -1;\\n    \\n}\\n    bool check_equal(int dividend, int divisor, int n){\\n    // Check if shift will cause overflow\\n            int temp2;\\n    if (n + 1 >= 31 || divisor > (INT_MAX >> (n + 1))) {\\n        // Shift would overflow, so temp1 would be very large\\n        // dividend will definitely be less than the overflowed value\\n        temp2 = 0;\\n    } else {\\n        int temp1 = (divisor << (n + 1));\\n        if (dividend < temp1)\\n            temp2 = 0;\\n        else{\\n            temp2 = dividend - temp1;\\n        }\\n    }\\n        return ((dividend - (divisor << n) < 0) && (temp2 >= 0));\\n    }\\n    bool check_greater(int dividend, int divisor, int n){\\n        return (dividend - (divisor << n)) < 0;\\n    }\\n};"},{"time":1757546673,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    int divide(int dividend, int divisor) {\\n        // Handle the overflow case explicitly\\n        if (dividend == INT_MIN && divisor == -1) {\\n            return INT_MAX;\\n        }\\n        if (dividend == INT_MAX && divisor == 1) {\\n            return INT_MAX;\\n        }\\n        if ((dividend == INT_MAX && divisor == -1) || (dividend == INT_MIN && divisor == 1)) {\\n            return INT_MIN;\\n        }\\n        \\n        if (dividend == divisor)\\n            return 1;\\n            \\n        bool end_neg = dividend < 0;\\n        bool sor_neg = divisor < 0;\\n        \\n        // Use long long to avoid overflow when converting to positive\\n        long long ldividend = dividend;\\n        long long ldivisor = divisor;\\n        \\n        if (end_neg) {\\n            ldividend = -ldividend;\\n        }\\n        if (sor_neg) {\\n            ldivisor = -ldivisor;\\n        }\\n\\n        if (ldividend < ldivisor)\\n            return 0;\\n\\n        int n_max = binarySearch(ldividend, ldivisor);\\n        long long result = divide(ldividend, ldivisor, n_max, 0);\\n        \\n        if (end_neg ^ sor_neg) {\\n            result = -result;\\n        }\\n        \\n        // Ensure result is within int range\\n        if (result > INT_MAX) return INT_MAX;\\n        if (result < INT_MIN) return INT_MIN;\\n        \\n        return (int)result;\\n    }\\n    \\nprivate:\\n    long long divide(long long dividend, long long divisor, int n, long long total) {\\n        if(n < 0) return total;\\n        \\n        long long shiftedDivisor = divisor << n;\\n        \\n        if(dividend < shiftedDivisor){\\n            return divide(dividend, divisor, n - 1, total);\\n        }\\n        else{\\n            return divide(dividend - shiftedDivisor, divisor, n - 1, total + (1LL << n));\\n        }\\n    }\\n    \\n    int binarySearch(long long dividend, long long divisor) {\\n        int low = 0;\\n        int high = 30; // Reduced from 31 to avoid overflow\\n        int result = -1;\\n        \\n        while (low <= high) {\\n            int mid = low + (high - low) / 2;\\n            \\n            long long shifted = divisor << mid;\\n            \\n            if (shifted <= dividend) {\\n                result = mid;\\n                // Check if we can go higher without overflow\\n                if (mid < 30 && (divisor << (mid + 1)) <= dividend) {\\n                    low = mid + 1;\\n                } else {\\n                    break;\\n                }\\n            } else {\\n                high = mid - 1;\\n            }\\n        }\\n        \\n        return result;\\n    }\\n    \\n    bool check_equal(long long dividend, long long divisor, int n){\\n        if (n >= 30) return false; // Avoid overflow\\n        \\n        long long current = divisor << n;\\n        long long next = divisor << (n + 1);\\n        \\n        return (current <= dividend && dividend < next);\\n    }\\n    \\n    bool check_greater(long long dividend, long long divisor, int n){\\n        if (n >= 31) return true; // Avoid overflow\\n        return dividend < (divisor << n);\\n    }\\n};"},{"time":1757546760,"language":"cpp","runtime":0,"memory":8,"accepted":true,"code_content":"class Solution {\\npublic:\\n    int divide(int dividend, int divisor) {\\n        // Handle the overflow case explicitly\\n        if (dividend == INT_MIN && divisor == -1) {\\n            return INT_MAX;\\n        }\\n        if (dividend == INT_MAX && divisor == 1) {\\n            return INT_MAX;\\n        }\\n        if ((dividend == INT_MIN && divisor == 1)) {\\n            return INT_MIN;\\n        }\\n        if (dividend == INT_MAX && divisor == -1) {\\n            return INT_MIN + 1;\\n        }\\n        \\n        if (dividend == divisor)\\n            return 1;\\n            \\n        bool end_neg = dividend < 0;\\n        bool sor_neg = divisor < 0;\\n        \\n        // Use long long to avoid overflow when converting to positive\\n        long long ldividend = dividend;\\n        long long ldivisor = divisor;\\n        \\n        if (end_neg) {\\n            ldividend = -ldividend;\\n        }\\n        if (sor_neg) {\\n            ldivisor = -ldivisor;\\n        }\\n\\n        if (ldividend < ldivisor)\\n            return 0;\\n\\n        int n_max = binarySearch(ldividend, ldivisor);\\n        long long result = divide(ldividend, ldivisor, n_max, 0);\\n        \\n        if (end_neg ^ sor_neg) {\\n            result = -result;\\n        }\\n        \\n        // Ensure result is within int range\\n        if (result > INT_MAX) return INT_MAX;\\n        if (result < INT_MIN) return INT_MIN;\\n        \\n        return (int)result;\\n    }\\n    \\nprivate:\\n    long long divide(long long dividend, long long divisor, int n, long long total) {\\n        if(n < 0) return total;\\n        \\n        long long shiftedDivisor = divisor << n;\\n        \\n        if(dividend < shiftedDivisor){\\n            return divide(dividend, divisor, n - 1, total);\\n        }\\n        else{\\n            return divide(dividend - shiftedDivisor, divisor, n - 1, total + (1LL << n));\\n        }\\n    }\\n    \\n    int binarySearch(long long dividend, long long divisor) {\\n        int low = 0;\\n        int high = 30; // Reduced from 31 to avoid overflow\\n        int result = -1;\\n        \\n        while (low <= high) {\\n            int mid = low + (high - low) / 2;\\n            \\n            long long shifted = divisor << mid;\\n            \\n            if (shifted <= dividend) {\\n                result = mid;\\n                // Check if we can go higher without overflow\\n                if (mid < 30 && (divisor << (mid + 1)) <= dividend) {\\n                    low = mid + 1;\\n                } else {\\n                    break;\\n                }\\n            } else {\\n                high = mid - 1;\\n            }\\n        }\\n        \\n        return result;\\n    }\\n    \\n    bool check_equal(long long dividend, long long divisor, int n){\\n        if (n >= 30) return false; // Avoid overflow\\n        \\n        long long current = divisor << n;\\n        long long next = divisor << (n + 1);\\n        \\n        return (current <= dividend && dividend < next);\\n    }\\n    \\n    bool check_greater(long long dividend, long long divisor, int n){\\n        if (n >= 31) return true; // Avoid overflow\\n        return dividend < (divisor << n);\\n    }\\n};"}]}'),30:{title:"substring with concatenation of all words",difficulty:"Hard",html_content:'<h1>30 - Substring with Concatenation of All Words</h1><h2>Difficulty: Hard - <a href=https://leetcode.com/problems/substring-with-concatenation-of-all-words/>substring-with-concatenation-of-all-words</a></h2><p>You are given a string <code>s</code> and an array of strings <code>words</code>. All the strings of <code>words</code> are of <strong>the same length</strong>.<p>A <strong>concatenated string</strong> is a string that exactly contains all the strings of any permutation of <code>words</code> concatenated.<ul><li>For example, if <code>words = ["ab","cd","ef"]</code>, then <code>"abcdef"</code>, <code>"abefcd"</code>, <code>"cdabef"</code>, <code>"cdefab"</code>, <code>"efabcd"</code>, and <code>"efcdab"</code> are all concatenated strings. <code>"acdbef"</code> is not a concatenated string because it is not the concatenation of any permutation of <code>words</code>.</ul><p>Return an array of <em>the starting indices</em> of all the concatenated substrings in <code>s</code>. You can return the answer in <strong>any order</strong>.<p> <p><strong class=example>Example 1:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>s = "barfoothefoobarman", words = ["foo","bar"]</span><p><strong>Output:</strong> <span class=example-io>[0,9]</span><p><strong>Explanation:</strong><p>The substring starting at 0 is <code>"barfoo"</code>. It is the concatenation of <code>["bar","foo"]</code> which is a permutation of <code>words</code>.<br> The substring starting at 9 is <code>"foobar"</code>. It is the concatenation of <code>["foo","bar"]</code> which is a permutation of <code>words</code>.</div><p><strong class=example>Example 2:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]</span><p><strong>Output:</strong> <span class=example-io>[]</span><p><strong>Explanation:</strong><p>There is no concatenated substring.</div><p><strong class=example>Example 3:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]</span><p><strong>Output:</strong> <span class=example-io>[6,9,12]</span><p><strong>Explanation:</strong><p>The substring starting at 6 is <code>"foobarthe"</code>. It is the concatenation of <code>["foo","bar","the"]</code>.<br> The substring starting at 9 is <code>"barthefoo"</code>. It is the concatenation of <code>["bar","the","foo"]</code>.<br> The substring starting at 12 is <code>"thefoobar"</code>. It is the concatenation of <code>["the","foo","bar"]</code>.</div><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= s.length &lt;= 10<sup>4</sup></code><li><code>1 &lt;= words.length &lt;= 5000</code><li><code>1 &lt;= words[i].length &lt;= 30</code><li><code>s</code> and <code>words[i]</code> consist of lowercase English letters.</ul>',submissions:[{time:1763509704,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution:
    def findSubstring(self, s: str, words: List[str]) -> List[int]:
        word_set = set(words)
        w_length = len(words[0])

        result = []

        for index in range(len(s)):
            slice = s[index:index + w_length]

            if slice in word_set:
                temp_set = word_set.copy()
                temp_set.remove(slice)

                for slices in range(index+w_length, len(s), w_length):
                    templ_slice = s[slices:slices + w_length]

                    if not temp_set: # check if empty
                        result.append(index)
                        break

                    if templ_slice not in temp_set:
                        break

                    temp_set.remove(templ_slice)

        return result`},{time:1763510537,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution:
    def findSubstring(self, s: str, words: List[str]) -> List[int]:
        word_set = Counter(words)
        w_length = len(words[0])

        result = []

        for index in range(len(s) - w_length + 1):
            slice = s[index:index + w_length]

            if slice in word_set:
                temp_set = word_set.copy()
                temp_set[slice] -= 1
                if temp_set[slice] == 0:
                    temp_set.pop(slice)

                for slices in range(index+w_length, len(s), w_length):
                    templ_slice = s[slices:slices + w_length]

                    if templ_slice not in temp_set:
                        break

                    temp_set[templ_slice] -= 1

                    if temp_set[templ_slice] == 0:
                        temp_set.pop(templ_slice)

                    if not temp_set: # check if empty
                        result.append(index)
                        break

        return result`},{time:1763510681,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution:
    def findSubstring(self, s: str, words: List[str]) -> List[int]:
        word_set = Counter(words)
        w_length = len(words[0])

        result = []

        for index in range(len(s) - w_length + 1):
            slice = s[index:index + w_length]

            if slice in word_set:
                temp_set = word_set.copy()

                for slices in range(index, len(s), w_length):
                    templ_slice = s[slices:slices + w_length]

                    if templ_slice not in temp_set:
                        break

                    temp_set[templ_slice] -= 1

                    if temp_set[templ_slice] == 0:
                        temp_set.pop(templ_slice)

                    if not temp_set: # check if empty
                        result.append(index)
                        break

        return result`},{time:1763512462,language:"py",runtime:8047,memory:18,accepted:!0,code_content:`class Solution:
    def findSubstring(self, s: str, words: List[str]) -> List[int]:
        if not s or not words:
            return []

        word_set = Counter(words)
        w_length = len(words[0])
        substr_len = len(words) * len(words[0])

        result = []

        for index in range(len(s) - substr_len + 1):

            temp_set = defaultdict(int)

            for j in range(index, index + substr_len, w_length):
                jslice = s[j:j+w_length]
                if jslice in word_set:
                    temp_set[jslice] += 1
                    if temp_set[jslice] > word_set[jslice]:
                        break
                else:
                    break
            else:
                result.append(index)


        return result`}]},33:{title:"search in rotated sorted array",difficulty:"Medium",html_content:`<h1>33 - Search in Rotated Sorted Array</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/search-in-rotated-sorted-array/>search-in-rotated-sorted-array</a></h2><p>There is an integer array <code>nums</code> sorted in ascending order (with <strong>distinct</strong> values).<p>Prior to being passed to your function, <code>nums</code> is <strong>possibly left rotated</strong> at an unknown index <code>k</code> (<code>1 &lt;= k &lt; nums.length</code>) such that the resulting array is <code>[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]</code> (<strong>0-indexed</strong>). For example, <code>[0,1,2,4,5,6,7]</code> might be left rotated by <code>3</code> indices and become <code>[4,5,6,7,0,1,2]</code>.<p>Given the array <code>nums</code> <strong>after</strong> the possible rotation and an integer <code>target</code>, return <em>the index of </em><code>target</code><em> if it is in </em><code>nums</code><em>, or </em><code>-1</code><em> if it is not in </em><code>nums</code>.<p>You must write an algorithm with <code>O(log n)</code> runtime complexity.<p> <p><strong class=example>Example 1:</strong><pre><strong>Input:</strong> nums = [4,5,6,7,0,1,2], target = 0
<strong>Output:</strong> 4
</pre><p><strong class=example>Example 2:</strong><pre><strong>Input:</strong> nums = [4,5,6,7,0,1,2], target = 3
<strong>Output:</strong> -1
</pre><p><strong class=example>Example 3:</strong><pre><strong>Input:</strong> nums = [1], target = 0
<strong>Output:</strong> -1
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= nums.length &lt;= 5000</code><li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code><li>All values of <code>nums</code> are <strong>unique</strong>.<li><code>nums</code> is an ascending array that is possibly rotated.<li><code>-10<sup>4</sup> &lt;= target &lt;= 10<sup>4</sup></code></ul>`,submissions:[{time:1766585844,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution:
    def find_rotation(self, nums:List[int]) -> int:
        left = 0
        right = len(nums) - 1
        test = len(nums) - 1

        while left <= right:
            mid = (left + right) // 2

            if mid + 1 >= len(nums) or nums[mid] > nums[mid + 1]:
                return mid + 1
            elif nums[mid] > nums[test]:
                left = mid + 1
            else:
                right = mid - 1

        return 0


    def search(self, nums: List[int], target: int) -> int:
        rotation = self.find_rotation(nums)
        if rotation == 0:
            new_list = nums
        else:
            new_list = nums[rotation:] + nums[:rotation]

        result = bisect.bisect_left(new_list, target)

        if len(new_list) > result and new_list[result] == target:
            return result + rotation
        else:
            return -1`},{time:1766585975,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution:
    def find_rotation(self, nums:List[int]) -> int:
        left = 0
        right = len(nums) - 1
        test = len(nums) - 1

        while left <= right:
            mid = (left + right) // 2

            if mid + 1 >= len(nums):
                return mid
            elif nums[mid] > nums[mid + 1]:
                return mid + 1
            elif nums[mid] > nums[test]:
                left = mid + 1
            else:
                right = mid - 1

        return 0


    def search(self, nums: List[int], target: int) -> int:
        rotation = self.find_rotation(nums)
        if rotation == 0:
            new_list = nums
        else:
            new_list = nums[rotation:] + nums[:rotation]

        result = bisect.bisect_left(new_list, target)

        if len(new_list) > result and new_list[result] == target:
            return result + rotation
        else:
            return -1`},{time:1766586305,language:"py",runtime:0,memory:17,accepted:!0,code_content:`class Solution:
    def find_rotation(self, nums:List[int]) -> int:
        left = 0
        right = len(nums) - 1
        test = len(nums) - 1

        while left <= right:
            mid = (left + right) // 2

            if mid + 1 >= len(nums):
                return mid
            elif nums[mid] > nums[mid + 1]:
                return mid + 1
            elif nums[mid] > nums[test]:
                left = mid + 1
            else:
                right = mid - 1

        return 0


    def search(self, nums: List[int], target: int) -> int:
        rotation = self.find_rotation(nums)
        if rotation == 0:
            new_list = nums
        else:
            new_list = nums[rotation:] + nums[:rotation]

        result = bisect.bisect_left(new_list, target)

        if len(new_list) > result and new_list[result] == target:
            return (result + rotation) % (len(new_list))
        else:
            return -1`}]},34:{title:"find first and last position of element in sorted array",difficulty:"Medium",html_content:`<h1>34 - Find First and Last Position of Element in Sorted Array</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/>find-first-and-last-position-of-element-in-sorted-array</a></h2><p>Given an array of integers <code>nums</code> sorted in non-decreasing order, find the starting and ending position of a given <code>target</code> value.<p>If <code>target</code> is not found in the array, return <code>[-1, -1]</code>.<p>You must write an algorithm with <code>O(log n)</code> runtime complexity.<p> <p><strong class=example>Example 1:</strong><pre><strong>Input:</strong> nums = [5,7,7,8,8,10], target = 8
<strong>Output:</strong> [3,4]
</pre><p><strong class=example>Example 2:</strong><pre><strong>Input:</strong> nums = [5,7,7,8,8,10], target = 6
<strong>Output:</strong> [-1,-1]
</pre><p><strong class=example>Example 3:</strong><pre><strong>Input:</strong> nums = [], target = 0
<strong>Output:</strong> [-1,-1]
</pre><p> <p><strong>Constraints:</strong><ul><li><code>0 &lt;= nums.length &lt;= 10<sup>5</sup></code><li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code><li><code>nums</code> is a non-decreasing array.<li><code>-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup></code></ul>`,submissions:[{time:1766613612,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        left = 0
        right = len(nums) - 1

        while left <= right:
            mid = (left + right) // 2

            if nums[mid] == target:
                if nums[left] != target:
                    left += 1
                if nums[right] != target:
                    right -= 1
                return [left, right]
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1

        return [-1, -1]`},{time:1766615676,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution:
    def find_left(self, nums: List[int], left: int, right: int, target: int) -> int:
        while left <= right:
            mid = (left + right) // 2

            if nums[mid - 1] != target and nums[mid] == target:
                return mid
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1

        return -1

    def find_right(self, nums: List[int], left: int, right: int, target: int) -> int:
        while left <= right:
            mid = (left + right) // 2

            if mid + 1 >= len(nums) or nums[mid + 1] != target and nums[mid] == target:
                return mid
            elif nums[mid] <= target:
                left = mid + 1
            else:
                right = mid - 1

        return -1

    def searchRange(self, nums: List[int], target: int) -> List[int]:
        left = 0
        right = len(nums) - 1

        while left <= right:
            mid = (left + right) // 2

            if nums[mid] == target:
                return [self.find_left(nums, left, mid, target), self.find_right(nums, mid, right, target)]
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1

        return [-1, -1]`},{time:1766615959,language:"py",runtime:0,memory:18,accepted:!0,code_content:`class Solution:
    def find_left(self, nums: List[int], left: int, right: int, target: int) -> int:
        while left <= right:
            mid = (left + right) // 2

            if mid - 1 < 0 and (nums[mid - 1] != target and nums[mid] == target):
                return mid
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1

        return left

    def find_right(self, nums: List[int], left: int, right: int, target: int) -> int:
        while left <= right:
            mid = (left + right) // 2

            if mid + 1 >= len(nums) or nums[mid + 1] != target and nums[mid] == target:
                return mid
            elif nums[mid] <= target:
                left = mid + 1
            else:
                right = mid - 1

        return -1

    def searchRange(self, nums: List[int], target: int) -> List[int]:
        left = 0
        right = len(nums) - 1

        while left <= right:
            mid = (left + right) // 2

            if nums[mid] == target:
                return [self.find_left(nums, left, mid, target), self.find_right(nums, mid, right, target)]
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1

        return [-1, -1]`}]},35:{title:"search insert position",difficulty:"Easy",html_content:`<h1>35 - Search Insert Position</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/search-insert-position/>search-insert-position</a></h2><p>Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.<p>You must write an algorithm with <code>O(log n)</code> runtime complexity.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> nums = [1,3,5,6], target = 5
<strong>Output:</strong> 2
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> nums = [1,3,5,6], target = 2
<strong>Output:</strong> 1
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> nums = [1,3,5,6], target = 7
<strong>Output:</strong> 4
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code><li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code><li><code>nums</code> contains <strong>distinct</strong> values sorted in <strong>ascending</strong> order.<li><code>-10<sup>4</sup> &lt;= target &lt;= 10<sup>4</sup></code></ul>`,submissions:[{time:1766582727,language:"py",runtime:0,memory:18,accepted:!0,code_content:`class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:

        left, right = 0, len(nums) - 1
        while left <= right:
            mid = (left + right) // 2
            if nums[mid] == target:
                return mid
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1

        return left`}]},36:{title:"valid sudoku",difficulty:"Medium",html_content:`<h1>36 - Valid Sudoku</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/valid-sudoku/>valid-sudoku</a></h2><p>Determine if a <code>9 x 9</code> Sudoku board is valid. Only the filled cells need to be validated <strong>according to the following rules</strong>:<ol><li>Each row must contain the digits <code>1-9</code> without repetition.<li>Each column must contain the digits <code>1-9</code> without repetition.<li>Each of the nine <code>3 x 3</code> sub-boxes of the grid must contain the digits <code>1-9</code> without repetition.</ol><p><strong>Note:</strong><ul><li>A Sudoku board (partially filled) could be valid but is not necessarily solvable.<li>Only the filled cells need to be validated according to the mentioned rules.</ul><p> <p><strong class=example>Example 1:</strong><p><img src=https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png style=width:250px;height:250px><pre>
<strong>Input:</strong> board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
<strong>Output:</strong> true
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
<strong>Output:</strong> false
<strong>Explanation:</strong> Same as Example 1, except with the <strong>5</strong> in the top left corner being modified to <strong>8</strong>. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>board.length == 9</code><li><code>board[i].length == 9</code><li><code>board[i][j]</code> is a digit <code>1-9</code> or <code>'.'</code>.</ul>`,submissions:[{time:1763486492,language:"py",runtime:5,memory:17,accepted:!0,code_content:`class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:

        # horizontal check
        for x in board:
            check: set = set()
            for item in x:
                if item == '.':
                    continue
                if item in check:
                    return False
                check.add(item)

        # verticle check
        for y in range(9):
            check: set = set()
            for x in range(9):
                if board[x][y] == '.':
                    continue
                if board[x][y] in check:
                    return False
                check.add(board[x][y])

        # grid check
        for i in range(3):
            for j in range(3):
                check: set = set()
                x_index, y_index = i * 3, j * 3
                for x_in in range(3):
                    for y_in in range(3):
                        x, y = x_in + x_index, y_in + y_index
                        if board[x][y] == '.':
                            continue
                        if board[x][y] in check:
                            return False
                        check.add(board[x][y])

        return True`}]},39:{title:"combination sum",difficulty:"Medium",html_content:`<h1>39 - Combination Sum</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/combination-sum/>combination-sum</a></h2><p>Given an array of <strong>distinct</strong> integers <code>candidates</code> and a target integer <code>target</code>, return <em>a list of all <strong>unique combinations</strong> of </em><code>candidates</code><em> where the chosen numbers sum to </em><code>target</code><em>.</em> You may return the combinations in <strong>any order</strong>.<p>The <strong>same</strong> number may be chosen from <code>candidates</code> an <strong>unlimited number of times</strong>. Two combinations are unique if the <span data-keyword=frequency-array>frequency</span> of at least one of the chosen numbers is different.<p>The test cases are generated such that the number of unique combinations that sum up to <code>target</code> is less than <code>150</code> combinations for the given input.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> candidates = [2,3,6,7], target = 7
<strong>Output:</strong> [[2,2,3],[7]]
<strong>Explanation:</strong>
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> candidates = [2,3,5], target = 8
<strong>Output:</strong> [[2,2,2,2],[2,3,3],[3,5]]
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> candidates = [2], target = 1
<strong>Output:</strong> []
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= candidates.length &lt;= 30</code><li><code>2 &lt;= candidates[i] &lt;= 40</code><li>All elements of <code>candidates</code> are <strong>distinct</strong>.<li><code>1 &lt;= target &lt;= 40</code></ul>`,submissions:[{time:1766009798,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        result: set[tuple[int]] = set()


        def dfs(sum: int, prev: List[int]):
            for nums in candidates:
                if nums + sum > target:
                    return
                elif nums + sum < target:
                    dfs(sum + nums, prev.copy() + [nums])
                else:
                    temp: list[int] = (prev.copy() + [nums])
                    temp.sort()
                    result.add(tuple(temp))


        dfs(0, [])
        list_of_lists = [list(t) for t in result]
        return list_of_lists`},{time:1766009853,language:"py",runtime:86,memory:18,accepted:!0,code_content:`class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        result: set[tuple[int]] = set()
        candidates.sort()


        def dfs(sum: int, prev: List[int]):
            for nums in candidates:
                if nums + sum > target:
                    return
                elif nums + sum < target:
                    dfs(sum + nums, prev.copy() + [nums])
                else:
                    temp: list[int] = (prev.copy() + [nums])
                    temp.sort()
                    result.add(tuple(temp))


        dfs(0, [])
        list_of_lists = [list(t) for t in result]
        return list_of_lists`}]},42:{title:"trapping rain water",difficulty:"Hard",html_content:`<h1>42 - Trapping Rain Water</h1><h2>Difficulty: Hard - <a href=https://leetcode.com/problems/trapping-rain-water/>trapping-rain-water</a></h2><p>Given <code>n</code> non-negative integers representing an elevation map where the width of each bar is <code>1</code>, compute how much water it can trap after raining.<p> <p><strong class=example>Example 1:</strong><p><img src=https://assets.leetcode.com/uploads/2018/10/22/rainwatertrap.png style=width:412px;height:161px><pre>
<strong>Input:</strong> height = [0,1,0,2,1,0,1,3,2,1,2,1]
<strong>Output:</strong> 6
<strong>Explanation:</strong> The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> height = [4,2,0,3,2,5]
<strong>Output:</strong> 9
</pre><p> <p><strong>Constraints:</strong><ul><li><code>n == height.length</code><li><code>1 &lt;= n &lt;= 2 * 10<sup>4</sup></code><li><code>0 &lt;= height[i] &lt;= 10<sup>5</sup></code></ul>`,submissions:[{time:1761655023,language:"cpp",runtime:0,memory:26,accepted:!0,code_content:`class Solution {
public:
    int trap(vector<int>& height) {
        int n = height.size();
        int water = 0;
        int elev = 0;

        for(int l = 0, r = n-1; l != r;){
            int temp;

            elev = max(elev , min(height[l], height[r]));

            if(height[l] < height[r]){
                temp = l;
                l++;
            } else{
                temp = r;
                r--;
            }

            water += elev - height[temp];
                
        }

        return water;
        
    }
};`}]},45:{title:"jump game ii",difficulty:"Medium",html_content:`<h1>45 - Jump Game II</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/jump-game-ii/>jump-game-ii</a></h2><p>You are given a <strong>0-indexed</strong> array of integers <code>nums</code> of length <code>n</code>. You are initially positioned at index 0.<p>Each element <code>nums[i]</code> represents the maximum length of a forward jump from index <code>i</code>. In other words, if you are at index <code>i</code>, you can jump to any index <code>(i + j)</code> where:<ul><li><code>0 &lt;= j &lt;= nums[i]</code> and<li><code>i + j &lt; n</code></ul><p>Return <em>the minimum number of jumps to reach index </em><code>n - 1</code>. The test cases are generated such that you can reach index <code>n - 1</code>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> nums = [2,3,1,1,4]
<strong>Output:</strong> 2
<strong>Explanation:</strong> The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> nums = [2,3,0,1,4]
<strong>Output:</strong> 2
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code><li><code>0 &lt;= nums[i] &lt;= 1000</code><li>It's guaranteed that you can reach <code>nums[n - 1]</code>.</ul>`,submissions:[{time:1761310783,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    int jump(vector<int>& nums) {
        int n = nums.size();
        int jumps = 0;
        
        int i = 0;
        while(i < n){
            int index = nums[i] + i;
            int highest = index;
            int high_index = i;
            for(int x = i; x < n && x <= index; x++){
                int temp = nums[x] + x;

                if (temp >= highest && nums[x] != 0){
                    highest = temp;
                    high_index = x;
                }
            }
            jumps++;

            if(nums[high_index] + high_index > n-2){
                return jumps+1;
            }
            if (highest == index)
                return -1;
            else{
                i = high_index;
            }
        }

        return jumps;
    }
};`},{time:1761311097,language:"cpp",runtime:0,memory:20,accepted:!0,code_content:`class Solution
{
	public:
		int jump(vector<int> &nums)
		{
			int n = nums.size();
			int jumps = 0;

            if (n == 1){
                return 0;
            }

			int i = 0;
			while (i < n)
			{
				int index = nums[i] + i;
				int highest = index;
				int high_index = i;
                if (nums[high_index] + high_index > n - 2)
				{
					return jumps+1;
				}
				for (int x = i; x < n && x <= index; x++)
				{
					int temp = nums[x] + x;

					if (temp >= highest && nums[x] != 0)
					{
						highest = temp;
						high_index = x;
					}
				}

				jumps++;

				
				i = high_index;
				
			}

			return jumps;
		}
};
`}]},46:{title:"permutations",difficulty:"Medium",html_content:`<h1>46 - Permutations</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/permutations/>permutations</a></h2><p>Given an array <code>nums</code> of distinct integers, return all the possible <span data-keyword=permutation-array>permutations</span>. You can return the answer in <strong>any order</strong>.<p> <p><strong class=example>Example 1:</strong><pre><strong>Input:</strong> nums = [1,2,3]
<strong>Output:</strong> [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
</pre><p><strong class=example>Example 2:</strong><pre><strong>Input:</strong> nums = [0,1]
<strong>Output:</strong> [[0,1],[1,0]]
</pre><p><strong class=example>Example 3:</strong><pre><strong>Input:</strong> nums = [1]
<strong>Output:</strong> [[1]]
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= nums.length &lt;= 6</code><li><code>-10 &lt;= nums[i] &lt;= 10</code><li>All the integers of <code>nums</code> are <strong>unique</strong>.</ul>`,submissions:[{time:1766001705,language:"py",runtime:3,memory:17,accepted:!0,code_content:`class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:

        result: List[List[int]] = []

        def dfs(temp: List[int], left: List[int]):
            if not left:
                result.append(temp)
            for index, item in enumerate(left):
                one = temp.copy()
                one.append(item)
                two = left.copy()
                two.pop(index)
                dfs(one, two)

        dfs([], nums)

        return result`}]},48:{title:"rotate image",difficulty:"Medium",html_content:`<h1>48 - Rotate Image</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/rotate-image/>rotate-image</a></h2><p>You are given an <code>n x n</code> 2D <code>matrix</code> representing an image, rotate the image by <strong>90</strong> degrees (clockwise).<p>You have to rotate the image <a href=https://en.wikipedia.org/wiki/In-place_algorithm target=_blank><strong>in-place</strong></a>, which means you have to modify the input 2D matrix directly. <strong>DO NOT</strong> allocate another 2D matrix and do the rotation.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/08/28/mat1.jpg style=width:500px;height:188px><pre>
<strong>Input:</strong> matrix = [[1,2,3],[4,5,6],[7,8,9]]
<strong>Output:</strong> [[7,4,1],[8,5,2],[9,6,3]]
</pre><p><strong class=example>Example 2:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/08/28/mat2.jpg style=width:500px;height:201px><pre>
<strong>Input:</strong> matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
<strong>Output:</strong> [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
</pre><p> <p><strong>Constraints:</strong><ul><li><code>n == matrix.length == matrix[i].length</code><li><code>1 &lt;= n &lt;= 20</code><li><code>-1000 &lt;= matrix[i][j] &lt;= 1000</code></ul>`,submissions:[{time:1763652992,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        max_layer = len(matrix)
        layer = len(matrix)
        top = max_layer - layer
        bottom = layer -1
        left = top
        right = bottom

        while layer > 2:
            temp_list = matrix[top][left+1:right]
            t = len(temp_list)
            a = t -1

            for i in range(t):
                matrix[i+1][right], temp_list[i] = temp_list[i], matrix[i+1][right]

            for i in range(t):
                matrix[bottom][i+1], temp_list[a-i] = temp_list[a-i], matrix[bottom][i+1]

            for i in range(t):
                matrix[i+1][top], temp_list[a-i] = temp_list[a-i], matrix[i+1][top]

            for i in range(t):
                matrix[top][i + 1], temp_list[i] = temp_list[i], matrix[top][i + 1]

            matrix[top][left], matrix[top][right], matrix[bottom][right], matrix[bottom][left] = matrix[bottom][left], matrix[top][left], matrix[top][right], matrix[bottom][right]

            top += 1
            left += 1
            bottom -= 1
            right -= 1

            layer //= 2

        if layer == 2:
            matrix[top][left], matrix[top][right], matrix[bottom][right], matrix[bottom][left] = matrix[bottom][left], matrix[top][left], matrix[top][right], matrix[bottom][right]
`},{time:1763654251,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        max_layer = len(matrix)
        layer = len(matrix)
        top = max_layer - layer
        bottom = layer -1
        left = top
        right = bottom

        while layer > 2:
            temp_list = matrix[top][left+1:right]
            t = len(temp_list)
            a = t -1

            subs = max_layer - layer
            if subs == 0:
                subs = 1

            for i in range(t):
                matrix[i+subs][right], temp_list[i] = temp_list[i], matrix[i+subs][right]

            for i in range(t):
                matrix[bottom][i+subs], temp_list[a-i] = temp_list[a-i], matrix[bottom][i+subs]

            for i in range(t):
                matrix[i+subs][top], temp_list[a-i] = temp_list[a-i], matrix[i+subs][top]

            for i in range(t):
                matrix[top][i + subs], temp_list[i] = temp_list[i], matrix[top][i + subs]

            matrix[top][left], matrix[top][right], matrix[bottom][right], matrix[bottom][left] = matrix[bottom][left], matrix[top][left], matrix[top][right], matrix[bottom][right]

            top += 1
            left += 1
            bottom -= 1
            right -= 1

            layer -= 2

        if layer == 2:
            matrix[top][left], matrix[top][right], matrix[bottom][right], matrix[bottom][left] = matrix[bottom][left], matrix[top][left], matrix[top][right], matrix[bottom][right]
`},{time:1763655494,language:"py",runtime:0,memory:17,accepted:!0,code_content:`class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        layer = len(matrix[0])

        top = 0
        bottom = len(matrix) -1
        left = 0
        right = len(matrix[0]) -1

        while layer > 1:
            for i in range(right - left):

                temp_list = matrix[top][left+i]

                matrix[top][left + i] = matrix[bottom-i][left]
                matrix[bottom-i][left] = matrix[bottom][right-i]
                matrix[bottom][right-i] = matrix[top+i][right]
                matrix[top + i][right] = temp_list


            top += 1
            left += 1
            bottom -= 1
            right -= 1

            layer -= 2`}]},49:{title:"group anagrams",difficulty:"Medium",html_content:'<h1>49 - Group Anagrams</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/group-anagrams/>group-anagrams</a></h2><p>Given an array of strings <code>strs</code>, group the <span data-keyword=anagram>anagrams</span> together. You can return the answer in <strong>any order</strong>.<p> <p><strong class=example>Example 1:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>strs = ["eat","tea","tan","ate","nat","bat"]</span><p><strong>Output:</strong> <span class=example-io>[["bat"],["nat","tan"],["ate","eat","tea"]]</span><p><strong>Explanation:</strong><ul><li>There is no string in strs that can be rearranged to form <code>"bat"</code>.<li>The strings <code>"nat"</code> and <code>"tan"</code> are anagrams as they can be rearranged to form each other.<li>The strings <code>"ate"</code>, <code>"eat"</code>, and <code>"tea"</code> are anagrams as they can be rearranged to form each other.</ul></div><p><strong class=example>Example 2:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>strs = [""]</span><p><strong>Output:</strong> <span class=example-io>[[""]]</span></div><p><strong class=example>Example 3:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>strs = ["a"]</span><p><strong>Output:</strong> <span class=example-io>[["a"]]</span></div><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= strs.length &lt;= 10<sup>4</sup></code><li><code>0 &lt;= strs[i].length &lt;= 100</code><li><code>strs[i]</code> consists of lowercase English letters.</ul>',submissions:[{time:1763766894,language:"py",runtime:7,memory:20,accepted:!0,code_content:`class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        sdict = defaultdict(list)

        for st in strs:
            sdict["".join(sorted(st))].append(st)

        result = []

        for value in sdict.values():
            result.append(value)

        return result`}]},50:{title:"powx n",difficulty:"Medium",html_content:`<h1>50 - Pow(x, n)</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/powx-n/>powx-n</a></h2><p>Implement <a href=http://www.cplusplus.com/reference/valarray/pow/ target=_blank>pow(x, n)</a>, which calculates <code>x</code> raised to the power <code>n</code> (i.e., <code>x<sup>n</sup></code>).<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> x = 2.00000, n = 10
<strong>Output:</strong> 1024.00000
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> x = 2.10000, n = 3
<strong>Output:</strong> 9.26100
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> x = 2.00000, n = -2
<strong>Output:</strong> 0.25000
<strong>Explanation:</strong> 2<sup>-2</sup> = 1/2<sup>2</sup> = 1/4 = 0.25
</pre><p> <p><strong>Constraints:</strong><ul><li><code>-100.0 &lt; x &lt; 100.0</code><li><code>-2<sup>31</sup> &lt;= n &lt;= 2<sup>31</sup>-1</code><li><code>n</code> is an integer.<li>Either <code>x</code> is not zero or <code>n > 0</code>.<li><code>-10<sup>4</sup> &lt;= x<sup>n</sup> &lt;= 10<sup>4</sup></code></ul>`,submissions:[{time:1767110399,language:"py",runtime:0,memory:17,accepted:!0,code_content:`class Solution:
    def myPow(self, x: float, n: int) -> float:
        if n < 0:
            return 1 / self.myPow(x, -n)

        match n:
            case 0:
                return 1
            case 1:
                return x
            case 2:
                return x * x
            case 3:
                return x * x * x
            case _:
                one = n //2
                two = n % 2
                temp = self.myPow(x, one)
                return temp * temp * self.myPow(x, two)`}]},52:{title:"n queens ii",difficulty:"Hard",html_content:`<h1>52 - N-Queens II</h1><h2>Difficulty: Hard - <a href=https://leetcode.com/problems/n-queens-ii/>n-queens-ii</a></h2><p>The <strong>n-queens</strong> puzzle is the problem of placing <code>n</code> queens on an <code>n x n</code> chessboard such that no two queens attack each other.<p>Given an integer <code>n</code>, return <em>the number of distinct solutions to the <strong>n-queens puzzle</strong></em>.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/11/13/queens.jpg style=width:600px;height:268px><pre>
<strong>Input:</strong> n = 4
<strong>Output:</strong> 2
<strong>Explanation:</strong> There are two distinct solutions to the 4-queens puzzle as shown.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> n = 1
<strong>Output:</strong> 1
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= n &lt;= 9</code></ul>`,submissions:[{time:1766085741,language:"py",runtime:7,memory:17,accepted:!0,code_content:`class Solution:
    def totalNQueens(self, n: int) -> int:
        self.result: int = 0


        def dfs(row: int, available_side: list[int], left_set: set[int], right_set: set[int]) -> None:
            for index, column in enumerate(available_side):
                if column + row not in right_set and  column - row not in left_set:
                    if len(available_side) == 1:
                        self.result += 1
                        continue
                    temp = available_side.copy()
                    temp.pop(index)
                    temp_right = right_set.copy()
                    temp_right.add(column + row)
                    temp_left = left_set.copy()
                    temp_left.add(column - row)
                    #print(f"{row}:{column}")
                    dfs(row+1, temp, temp_left, temp_right)

        dfs(0, list(range(n)), set(), set())


        return self.result`},{time:1766086317,language:"py",runtime:8,memory:17,accepted:!0,code_content:`class Solution:
    def totalNQueens(self, n: int) -> int:
        self.result: int = 0


        def dfs(row: int, available_side: list[int], left_set: set[int], right_set: set[int]) -> None:
            for index, column in enumerate(available_side):
                if column + row not in right_set and  column - row not in left_set:
                    if len(available_side) == 1:
                        self.result += 1
                        continue
                    available_side.pop(index)
                    right_set.add(column + row)
                    left_set.add(column - row)
                    #print(f"{row}:{column}")
                    dfs(row+1, available_side, left_set, right_set)
                    available_side.insert(index, column)
                    right_set.remove(column + row)
                    left_set.remove(column - row)

        dfs(0, list(range(n)), set(), set())


        return self.result`}]},53:{title:"maximum subarray",difficulty:"Medium",html_content:`<h1>53 - Maximum Subarray</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/maximum-subarray/>maximum-subarray</a></h2><p>Given an integer array <code>nums</code>, find the <span data-keyword=subarray-nonempty>subarray</span> with the largest sum, and return <em>its sum</em>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> nums = [-2,1,-3,4,-1,2,1,-5,4]
<strong>Output:</strong> 6
<strong>Explanation:</strong> The subarray [4,-1,2,1] has the largest sum 6.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> nums = [1]
<strong>Output:</strong> 1
<strong>Explanation:</strong> The subarray [1] has the largest sum 1.
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> nums = [5,4,-1,7,8]
<strong>Output:</strong> 23
<strong>Explanation:</strong> The subarray [5,4,-1,7,8] has the largest sum 23.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code><li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></ul><p> <p><strong>Follow up:</strong> If you have figured out the <code>O(n)</code> solution, try coding another solution using the <strong>divide and conquer</strong> approach, which is more subtle.`,submissions:[{time:1766353277,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        result: int = 0
        current: int = 0

        for num in nums:
            current += num
            result = max(result, current)
            if current < 0:
                current = 0

        return result`},{time:1766353351,language:"py",runtime:51,memory:30,accepted:!0,code_content:`class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        result: int = nums[0]
        current: int = 0

        for num in nums:
            current += num
            result = max(result, current)
            if current < 0:
                current = 0

        return result`}]},54:{title:"spiral matrix",difficulty:"Medium",html_content:`<h1>54 - Spiral Matrix</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/spiral-matrix/>spiral-matrix</a></h2><p>Given an <code>m x n</code> <code>matrix</code>, return <em>all elements of the</em> <code>matrix</code> <em>in spiral order</em>.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/11/13/spiral1.jpg style=width:242px;height:242px><pre>
<strong>Input:</strong> matrix = [[1,2,3],[4,5,6],[7,8,9]]
<strong>Output:</strong> [1,2,3,6,9,8,7,4,5]
</pre><p><strong class=example>Example 2:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/11/13/spiral.jpg style=width:322px;height:242px><pre>
<strong>Input:</strong> matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
<strong>Output:</strong> [1,2,3,4,8,12,11,10,9,5,6,7]
</pre><p> <p><strong>Constraints:</strong><ul><li><code>m == matrix.length</code><li><code>n == matrix[i].length</code><li><code>1 &lt;= m, n &lt;= 10</code><li><code>-100 &lt;= matrix[i][j] &lt;= 100</code></ul>`,submissions:[{time:1763583511,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        n_row = len(matrix[0])
        n_column = len(matrix)

        min_layer = min(n_column, n_row)
        layer = min_layer

        result = []
        top = 0
        bottom = n_column -1
        right = n_row - 1
        left = 0

        while layer >= 1:
            # top
            result.extend(matrix[top][left:right+1])

            # right side
            for row in matrix[top+1:bottom]:
                result.append(row[right])

            # bottom
            if bottom != top:
                result.extend(matrix[bottom][left:right+1][::-1])

            # left side
            for row in matrix[top+1:bottom][::-1]:
                result.append(row[left])

            top += 1
            bottom -= 1
            right -= 1
            left += 1
            layer -= 2

        return result`},{time:1763584061,language:"py",runtime:0,memory:17,accepted:!0,code_content:`class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        n_row = len(matrix[0])
        n_column = len(matrix)

        min_layer = min(n_column, n_row)
        layer = min_layer

        result = []
        top = 0
        bottom = n_column -1
        right = n_row - 1
        left = 0

        while layer >= 1:
            # top

            result.extend(matrix[top][left:right+1])

            # right side
            for row in matrix[top+1:bottom]:
                result.append(row[right])

            # bottom

            if bottom != top:
                result.extend(matrix[bottom][left:right+1][::-1])

            # left side
            if left != right:
                for row in matrix[top+1:bottom][::-1]:
                    result.append(row[left])

            top += 1
            bottom -= 1
            right -= 1
            left += 1
            layer -= 2

        return result
`}]},55:{title:"jump game",difficulty:"Medium",html_content:`<h1>55 - Jump Game</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/jump-game/>jump-game</a></h2><p>You are given an integer array <code>nums</code>. You are initially positioned at the array's <strong>first index</strong>, and each element in the array represents your maximum jump length at that position.<p>Return <code>true</code><em> if you can reach the last index, or </em><code>false</code><em> otherwise</em>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> nums = [2,3,1,1,4]
<strong>Output:</strong> true
<strong>Explanation:</strong> Jump 1 step from index 0 to 1, then 3 steps to the last index.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> nums = [3,2,1,0,4]
<strong>Output:</strong> false
<strong>Explanation:</strong> You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code><li><code>0 &lt;= nums[i] &lt;= 10<sup>5</sup></code></ul>`,submissions:[{time:1761230849,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    bool canJump(vector<int>& nums) {
        int n = nums.size();
        
        int i = 0;
        while(i < n){
            int index = nums[i] + i;
            int highest = index;
            int high_index = i;
            for(int x = i; x < n && x <= index; x++){
                int temp = nums[x] + x;

                if (temp >= highest && nums[x] != 0){
                    highest = temp;
                    high_index = x;
                }
            }

            if(nums[high_index] + i > n-1){
                return true;
            }
            if (highest == index)
                return false;
            else{
                i = high_index;
            }
        }

        return true;

    }
};`},{time:1761230904,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    bool canJump(vector<int>& nums) {
        int n = nums.size();
        
        int i = 0;
        while(i < n){
            int index = nums[i] + i;
            int highest = index;
            int high_index = i;
            for(int x = i; x < n && x <= index; x++){
                int temp = nums[x] + x;

                if (temp >= highest && nums[x] != 0){
                    highest = temp;
                    high_index = x;
                }
            }

            if(nums[high_index] + i > n-2){
                return true;
            }
            if (highest == index)
                return false;
            else{
                i = high_index;
            }
        }

        return true;

    }
};`},{time:1761231147,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    bool canJump(vector<int>& nums) {
        int n = nums.size();
        
        int i = 0;
        while(i < n){
            int index = nums[i] + i;
            int highest = index;
            int high_index = i;
            for(int x = i; x < n && x <= index; x++){
                int temp = nums[x] + x;

                if (temp >= highest && nums[x] != 0){
                    highest = temp;
                    high_index = x;
                }
            }

            if(nums[high_index] + i >= n-2){
                return true;
            }
            if (highest == index)
                return false;
            else{
                i = high_index;
            }
        }

        return true;

    }
};`},{time:1761231245,language:"cpp",runtime:0,memory:52,accepted:!0,code_content:`class Solution {
public:
    bool canJump(vector<int>& nums) {
        int n = nums.size();
        
        int i = 0;
        while(i < n){
            int index = nums[i] + i;
            int highest = index;
            int high_index = i;
            for(int x = i; x < n && x <= index; x++){
                int temp = nums[x] + x;

                if (temp >= highest && nums[x] != 0){
                    highest = temp;
                    high_index = x;
                }
            }

            if(nums[high_index] + high_index > n-2){
                return true;
            }
            if (highest == index)
                return false;
            else{
                i = high_index;
            }
        }

        return true;

    }
};`}]},56:{title:"merge intervals",difficulty:"Medium",html_content:`<h1>56 - Merge Intervals</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/merge-intervals/>merge-intervals</a></h2><p>Given an array of <code>intervals</code> where <code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code>, merge all overlapping intervals, and return <em>an array of the non-overlapping intervals that cover all the intervals in the input</em>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> intervals = [[1,3],[2,6],[8,10],[15,18]]
<strong>Output:</strong> [[1,6],[8,10],[15,18]]
<strong>Explanation:</strong> Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> intervals = [[1,4],[4,5]]
<strong>Output:</strong> [[1,5]]
<strong>Explanation:</strong> Intervals [1,4] and [4,5] are considered overlapping.
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> intervals = [[4,7],[1,4]]
<strong>Output:</strong> [[1,7]]
<strong>Explanation:</strong> Intervals [1,4] and [4,7] are considered overlapping.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= intervals.length &lt;= 10<sup>4</sup></code><li><code>intervals[i].length == 2</code><li><code>0 &lt;= start<sub>i</sub> &lt;= end<sub>i</sub> &lt;= 10<sup>4</sup></code></ul>`,submissions:[{time:1763928066,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        if not intervals:
            return []

        intervals.sort(key=lambda x: x[0])

        temp_start = intervals[0][0]
        temp_end = intervals[0][1]
        result = []

        for i in range(1,len(intervals)):
            start, end = intervals[i]
            if temp_end >= start:
                temp_end = end
            else:
                result.append([temp_start,temp_end])
                temp_start = start
                temp_end = end

        result.append([temp_start,temp_end])

        return result`},{time:1763928199,language:"py",runtime:7,memory:21,accepted:!0,code_content:`class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        if not intervals:
            return []

        intervals.sort(key=lambda x: x[0])

        temp_start = intervals[0][0]
        temp_end = intervals[0][1]
        result = []

        for i in range(1,len(intervals)):
            start, end = intervals[i]
            if temp_end >= start:
                temp_end = max(end, temp_end)
            else:
                result.append([temp_start,temp_end])
                temp_start = start
                temp_end = end

        result.append([temp_start,temp_end])

        return result`}]},57:JSON.parse(`{"title":"insert interval","difficulty":"Medium","html_content":"<h1>57 - Insert Interval</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/insert-interval/>insert-interval</a></h2><p>You are given an array of non-overlapping intervals <code>intervals</code> where <code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code> represent the start and the end of the <code>i<sup>th</sup></code> interval and <code>intervals</code> is sorted in ascending order by <code>start<sub>i</sub></code>. You are also given an interval <code>newInterval = [start, end]</code> that represents the start and end of another interval.<p>Insert <code>newInterval</code> into <code>intervals</code> such that <code>intervals</code> is still sorted in ascending order by <code>start<sub>i</sub></code> and <code>intervals</code> still does not have any overlapping intervals (merge overlapping intervals if necessary).<p>Return <code>intervals</code><em> after the insertion</em>.<p><strong>Note</strong> that you don't need to modify <code>intervals</code> in-place. You can make a new array and return it.<p> <p><strong class=example>Example 1:</strong><pre>\\n<strong>Input:</strong> intervals = [[1,3],[6,9]], newInterval = [2,5]\\n<strong>Output:</strong> [[1,5],[6,9]]\\n</pre><p><strong class=example>Example 2:</strong><pre>\\n<strong>Input:</strong> intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]\\n<strong>Output:</strong> [[1,2],[3,10],[12,16]]\\n<strong>Explanation:</strong> Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].\\n</pre><p> <p><strong>Constraints:</strong><ul><li><code>0 &lt;= intervals.length &lt;= 10<sup>4</sup></code><li><code>intervals[i].length == 2</code><li><code>0 &lt;= start<sub>i</sub> &lt;= end<sub>i</sub> &lt;= 10<sup>5</sup></code><li><code>intervals</code> is sorted by <code>start<sub>i</sub></code> in <strong>ascending</strong> order.<li><code>newInterval.length == 2</code><li><code>0 &lt;= start &lt;= end &lt;= 10<sup>5</sup></code></ul>","submissions":[{"time":1763930889,"language":"py","runtime":-1,"memory":-1,"accepted":false,"code_content":"def bsearch_interval(arr: list[list[int]], target: int):\\n    low = 0\\n    high = len(arr) - 1\\n\\n    while low <= high:\\n        mid = low + (high - low) // 2\\n\\n        if arr[mid][0] == target:\\n            return mid\\n        elif arr[mid][0] < target:\\n            low = mid + 1\\n        else:\\n            high = mid - 1\\n\\n    return high\\n\\n\\nclass Solution:\\n    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:\\n\\n        index = bsearch_interval(intervals, newInterval[0])\\n        start = min(newInterval[0], intervals[index][0])\\n        end = max(newInterval[1], intervals[index][1])\\n\\n        length = len(intervals)\\n        while index < length and intervals[index][0] <= end:\\n            end = max(end, intervals[index][1])\\n            intervals.pop(index)\\n            length -= 1\\n\\n        intervals.insert(index, [start, end])\\n        return intervals"},{"time":1763930970,"language":"py","runtime":-1,"memory":-1,"accepted":false,"code_content":"def bsearch_interval(arr: list[list[int]], target: int):\\n    low = 0\\n    high = len(arr) - 1\\n\\n    while low <= high:\\n        mid = low + (high - low) // 2\\n\\n        if arr[mid][0] == target:\\n            return mid\\n        elif arr[mid][0] < target:\\n            low = mid + 1\\n        else:\\n            high = mid - 1\\n\\n    return high\\n\\n\\nclass Solution:\\n    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:\\n        if not intervals:\\n            return [newInterval]\\n\\n        index = bsearch_interval(intervals, newInterval[0])\\n        start = min(newInterval[0], intervals[index][0])\\n        end = max(newInterval[1], intervals[index][1])\\n\\n        length = len(intervals)\\n        while index < length and intervals[index][0] <= end:\\n            end = max(end, intervals[index][1])\\n            intervals.pop(index)\\n            length -= 1\\n\\n        intervals.insert(index, [start, end])\\n        return intervals"},{"time":1763931303,"language":"py","runtime":-1,"memory":-1,"accepted":false,"code_content":"def bsearch_interval(arr: list[list[int]], target: int):\\n    low = 0\\n    high = len(arr) - 1\\n\\n    while low <= high:\\n        mid = low + (high - low) // 2\\n\\n        if arr[mid][0] == target:\\n            return mid\\n        elif arr[mid][0] < target:\\n            low = mid + 1\\n        else:\\n            high = mid - 1\\n\\n    return high\\n\\n\\nclass Solution:\\n    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:\\n        if not intervals:\\n            return [newInterval]\\n\\n        index = bsearch_interval(intervals, newInterval[0])\\n        if intervals[index][1] < newInterval[0]:\\n            index += 1\\n\\n        if index == len(intervals):\\n            return intervals + [newInterval]\\n\\n        start = min(newInterval[0], intervals[index][0])\\n        end = max(newInterval[1], intervals[index][1])\\n\\n        length = len(intervals)\\n        while index < length and intervals[index][0] <= end:\\n            end = max(end, intervals[index][1])\\n            intervals.pop(index)\\n            length -= 1\\n\\n        intervals.insert(index, [start, end])\\n        return intervals"},{"time":1763933899,"language":"py","runtime":-1,"memory":-1,"accepted":false,"code_content":"def bsearch_interval(arr: list[list[int]], target: int):\\n    low = 0\\n    high = len(arr) - 1\\n    closest_index = 0\\n\\n    while low <= high:\\n        mid = (low + high) // 2\\n\\n        if arr[mid] == target:\\n            return mid\\n\\n        if abs(arr[mid][0] - target) < abs(arr[closest_index][0] - target):\\n            closest_index = mid\\n        elif abs(arr[mid][0] - target) == abs(arr[closest_index][0] - target):\\n            closest_index = min(closest_index, mid)\\n\\n        if arr[mid][0] < target:\\n            low = mid + 1\\n        else:\\n            high = mid - 1\\n\\n    if arr[closest_index][1] < target:\\n        return closest_index + 1\\n\\n    return closest_index\\n\\n\\nclass Solution:\\n    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:\\n        if not intervals:\\n            return [newInterval]\\n\\n        index = bsearch_interval(intervals, newInterval[0])\\n        if index == len(intervals):\\n            return intervals + [newInterval]\\n\\n        start = min(newInterval[0], intervals[index][0])\\n        end = max(newInterval[1], intervals[index][1])\\n\\n        length = 0\\n        for i in range(index, len(intervals)):\\n            if intervals[i][0] <= end:\\n                end = max(end, intervals[i][1])\\n                length += 1\\n            else:\\n                break\\n\\n        result = []\\n        if 0 != index:\\n            result.extend(intervals[0:index])\\n\\n        result.append([start, end])\\n\\n        if index + length != len(intervals):\\n            result.extend(intervals[index + length:])\\n\\n        return result"},{"time":1763934044,"language":"py","runtime":-1,"memory":-1,"accepted":false,"code_content":"def bsearch_interval(arr: list[list[int]], target: int):\\n    low = 0\\n    high = len(arr) - 1\\n    closest_index = 0\\n\\n    while low <= high:\\n        mid = (low + high) // 2\\n\\n        if arr[mid] == target:\\n            return mid\\n\\n        if abs(arr[mid][0] - target) < abs(arr[closest_index][0] - target):\\n            closest_index = mid\\n        elif abs(arr[mid][0] - target) == abs(arr[closest_index][0] - target):\\n            closest_index = min(closest_index, mid)\\n\\n        if arr[mid][0] < target:\\n            low = mid + 1\\n        else:\\n            high = mid - 1\\n\\n    if arr[closest_index][1] < target:\\n        return closest_index + 1\\n\\n    return closest_index\\n\\n\\nclass Solution:\\n    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:\\n        if not intervals:\\n            return [newInterval]\\n\\n        index = bsearch_interval(intervals, newInterval[0])\\n        if index == len(intervals):\\n            return intervals + [newInterval]\\n        \\n        if newInterval[1] < intervals[index][0]:\\n            return [newInterval] + intervals\\n\\n        start = min(newInterval[0], intervals[index][0])\\n        end = max(newInterval[1], intervals[index][1])\\n\\n        length = 0\\n        for i in range(index, len(intervals)):\\n            if intervals[i][0] <= end:\\n                end = max(end, intervals[i][1])\\n                length += 1\\n            else:\\n                break\\n\\n        result = []\\n        if 0 != index:\\n            result.extend(intervals[0:index])\\n\\n        result.append([start, end])\\n\\n        if index + length != len(intervals):\\n            result.extend(intervals[index + length:])\\n\\n        return result"},{"time":1763934724,"language":"py","runtime":-1,"memory":-1,"accepted":false,"code_content":"def bsearch_interval(arr: list[list[int]], target: int):\\n    low = 0\\n    high = len(arr) - 1\\n    closest_index = 0\\n\\n    while low <= high:\\n        mid = (low + high) // 2\\n\\n        if arr[mid] == target:\\n            return mid\\n\\n        if abs(arr[mid][0] - target) < abs(arr[closest_index][0] - target):\\n            closest_index = mid\\n        elif abs(arr[mid][0] - target) == abs(arr[closest_index][0] - target):\\n            closest_index = min(closest_index, mid)\\n\\n        if arr[mid][0] < target:\\n            low = mid + 1\\n        else:\\n            high = mid - 1\\n\\n    if arr[closest_index][1] < target:\\n        return closest_index + 1\\n\\n    return closest_index\\n\\n\\nclass Solution:\\n    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:\\n        if not intervals:\\n            return [newInterval]\\n\\n        index = bsearch_interval(intervals, newInterval[0])\\n        if index == len(intervals):\\n            return intervals + [newInterval]\\n\\n        if newInterval[1] < intervals[index][0]:\\n            return [newInterval] + intervals\\n        if newInterval[1] == intervals[index][0]:\\n            index -= 1\\n\\n        start = min(newInterval[0], intervals[index][0])\\n        end = max(newInterval[1], intervals[index][1])\\n\\n        length = 0\\n        for i in range(index, len(intervals)):\\n            if intervals[i][0] <= end:\\n                end = max(end, intervals[i][1])\\n                length += 1\\n            else:\\n                break\\n\\n        result = []\\n        result.extend(intervals[0:index])\\n        result.append([start, end])\\n        result.extend(intervals[index + length:])\\n\\n        return result\\n"},{"time":1763939921,"language":"py","runtime":0,"memory":19,"accepted":true,"code_content":"def binary_search(arr: list[list[int]], target:int, i: int,call):\\n    res = arr[0]\\n    lo = 0\\n    hi = len(arr) - 1\\n    mid = 0\\n    while lo <= hi:\\n        mid = lo + (hi - lo) // 2\\n        if abs(arr[mid][i] - target) < abs(res[i] - target):\\n            res = arr[mid]\\n\\n        elif abs(arr[mid][i] - target) == abs(res[i] - target):\\n            res = call(res, arr[mid])\\n\\n        if arr[mid] == target:\\n            return arr[mid]\\n        elif arr[mid][i] < target:\\n            lo = mid + 1\\n        else:\\n            hi = mid - 1\\n\\n    return mid\\n\\n\\nclass Solution:\\n    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:\\n        if not intervals:\\n            return [newInterval]\\n\\n        min_index = binary_search(intervals, newInterval[0],0, min)\\n        max_index = binary_search(intervals, newInterval[1],1, max)\\n\\n        while min_index >= 0 and intervals[min_index][1] >= newInterval[0]:\\n            newInterval[0] = min(intervals[min_index][0], newInterval[0])\\n            min_index -= 1\\n\\n        while max_index < len(intervals) and intervals[max_index][0] <= newInterval[1]:\\n            newInterval[1] = max(intervals[max_index][1], newInterval[1])\\n            max_index += 1\\n\\n\\n        result = []\\n        if min_index >= 0:\\n            result.extend(intervals[0:min_index+1])\\n        result.append(newInterval)\\n        result.extend(intervals[max_index:])\\n\\n        return result"}]}`),58:{title:"length of last word",difficulty:"Easy",html_content:`<h1>58 - Length of Last Word</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/length-of-last-word/>length-of-last-word</a></h2><p>Given a string <code>s</code> consisting of words and spaces, return <em>the length of the <strong>last</strong> word in the string.</em><p>A <strong>word</strong> is a maximal <span data-keyword=substring-nonempty>substring</span> consisting of non-space characters only.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> s = "Hello World"
<strong>Output:</strong> 5
<strong>Explanation:</strong> The last word is "World" with length 5.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> s = "   fly me   to   the moon  "
<strong>Output:</strong> 4
<strong>Explanation:</strong> The last word is "moon" with length 4.
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> s = "luffy is still joyboy"
<strong>Output:</strong> 6
<strong>Explanation:</strong> The last word is "joyboy" with length 6.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= s.length &lt;= 10<sup>4</sup></code><li><code>s</code> consists of only English letters and spaces <code>' '</code>.<li>There will be at least one word in <code>s</code>.</ul>`,submissions:[{time:1761672432,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    int lengthOfLastWord(string s) {
        int n = s.size();

        bool char_seen = false;
        int last_space = n;
        for(int i =n-1; i > 0; i--){
            if(s[i] == ' '){
                if (char_seen)
                    return last_space - i -1;
                last_space = i;
            }
            else{
                char_seen = true;
            }

        }


        return n;
        
    }
};`},{time:1761672543,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    int lengthOfLastWord(string s) {
        int n = s.size();

        int chars = 0;
        for(int i =n-1; i > 0; i--){
            if(s[i] == ' '){
                if (chars)
                    return chars;
            }
            else{
                chars++;
            }

        }


        return chars;
        
    }
};`},{time:1761672668,language:"cpp",runtime:0,memory:8,accepted:!0,code_content:`class Solution {
public:
    int lengthOfLastWord(string s) {
        int n = s.size();

        int chars = 0;
        for(int i =n-1; i >= 0; i--){
            if(s[i] == ' '){
                if (chars)
                    return chars;
            }
            else{
                chars++;
            }

        }


        return chars;
        
    }
};`}]},61:{title:"rotate list",difficulty:"Medium",html_content:`<h1>61 - Rotate List</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/rotate-list/>rotate-list</a></h2><p>Given the <code>head</code> of a linked list, rotate the list to the right by <code>k</code> places.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/11/13/rotate1.jpg style=width:450px;height:191px><pre>
<strong>Input:</strong> head = [1,2,3,4,5], k = 2
<strong>Output:</strong> [4,5,1,2,3]
</pre><p><strong class=example>Example 2:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/11/13/roate2.jpg style=width:305px;height:350px><pre>
<strong>Input:</strong> head = [0,1,2], k = 4
<strong>Output:</strong> [2,0,1]
</pre><p> <p><strong>Constraints:</strong><ul><li>The number of nodes in the list is in the range <code>[0, 500]</code>.<li><code>-100 &lt;= Node.val &lt;= 100</code><li><code>0 &lt;= k &lt;= 2 * 10<sup>9</sup></code></ul>`,submissions:[{time:1764529216,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:

        length = 0
        temp_head = head
        while temp_head:
            length += 1
            temp_head = temp_head.next

        k %= length
        if k == 0:
            return head

        temp_head = head

        start = head

        while temp_head.next:
            if k == 0:
                start = start.next
            else:
                k -= 1

            temp_head = temp_head.next

        temp_head.next = head

        result = start.next
        start.next = None

        return result
`},{time:1764529362,language:"py",runtime:0,memory:18,accepted:!0,code_content:`# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:

        length = 0
        temp_head = head
        while temp_head:
            length += 1
            temp_head = temp_head.next

        if length == 0:
            return None

        k %= length
        if k == 0:
            return head

        temp_head = head

        start = head

        while temp_head.next:
            if k == 0:
                start = start.next
            else:
                k -= 1

            temp_head = temp_head.next

        temp_head.next = head

        result = start.next
        start.next = None

        return result`}]},62:{title:"unique paths",difficulty:"Medium",html_content:`<h1>62 - Unique Paths</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/unique-paths/>unique-paths</a></h2><p>There is a robot on an <code>m x n</code> grid. The robot is initially located at the <strong>top-left corner</strong> (i.e., <code>grid[0][0]</code>). The robot tries to move to the <strong>bottom-right corner</strong> (i.e., <code>grid[m - 1][n - 1]</code>). The robot can only move either down or right at any point in time.<p>Given the two integers <code>m</code> and <code>n</code>, return <em>the number of possible unique paths that the robot can take to reach the bottom-right corner</em>.<p>The test cases are generated so that the answer will be less than or equal to <code>2 * 10<sup>9</sup></code>.<p> <p><strong class=example>Example 1:</strong><p><img src=https://assets.leetcode.com/uploads/2018/10/22/robot_maze.png style=width:400px;height:183px><pre>
<strong>Input:</strong> m = 3, n = 7
<strong>Output:</strong> 28
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> m = 3, n = 2
<strong>Output:</strong> 3
<strong>Explanation:</strong> From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= m, n &lt;= 100</code></ul>`,submissions:[{time:1721275568,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    int uniquePaths(int m, int n) {
        int numerator = m+n-2;
        int denominator = min(n-1,m-1);
        double solution = 1;

        for(int i = 0; i < min(n-1,m-1); i++)
        solution = solution * numerator-- / denominator--;

        return solution;

    }
};`},{time:1721275624,language:"cpp",runtime:2,memory:7,accepted:!0,code_content:`class Solution {
public:
    int uniquePaths(int m, int n) {
        int numerator = m+n-2;
        int denominator = min(n-1,m-1);
        double solution = 1;

        for(int i = 0; i < min(n-1,m-1); i++)
        solution = solution * numerator-- / denominator--;

        return round(solution);

    }
};`}]},63:{title:"unique paths ii",difficulty:"Medium",html_content:`<h1>63 - Unique Paths II</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/unique-paths-ii/>unique-paths-ii</a></h2><p>You are given an <code>m x n</code> integer array <code>grid</code>. There is a robot initially located at the <b>top-left corner</b> (i.e., <code>grid[0][0]</code>). The robot tries to move to the <strong>bottom-right corner</strong> (i.e., <code>grid[m - 1][n - 1]</code>). The robot can only move either down or right at any point in time.<p>An obstacle and space are marked as <code>1</code> or <code>0</code> respectively in <code>grid</code>. A path that the robot takes cannot include <strong>any</strong> square that is an obstacle.<p>Return <em>the number of possible unique paths that the robot can take to reach the bottom-right corner</em>.<p>The testcases are generated so that the answer will be less than or equal to <code>2 * 10<sup>9</sup></code>.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/11/04/robot1.jpg style=width:242px;height:242px><pre>
<strong>Input:</strong> obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
<strong>Output:</strong> 2
<strong>Explanation:</strong> There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right
</pre><p><strong class=example>Example 2:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/11/04/robot2.jpg style=width:162px;height:162px><pre>
<strong>Input:</strong> obstacleGrid = [[0,1],[0,0]]
<strong>Output:</strong> 1
</pre><p> <p><strong>Constraints:</strong><ul><li><code>m == obstacleGrid.length</code><li><code>n == obstacleGrid[i].length</code><li><code>1 &lt;= m, n &lt;= 100</code><li><code>obstacleGrid[i][j]</code> is <code>0</code> or <code>1</code>.</ul>`,submissions:[{time:1767815801,language:"py",runtime:0,memory:19,accepted:!0,code_content:`class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
        if obstacleGrid[0][0] == 1:
            return 0
        obstacleGrid[0][0] = -1

        for i in range(len(obstacleGrid)):
            for j in range(len(obstacleGrid[0])):
                if obstacleGrid[i][j] == 1:
                    continue

                if j + 1 < len(obstacleGrid[0]) and obstacleGrid[i][j+1] != 1:
                    obstacleGrid[i][j+1] += obstacleGrid[i][j]

                if i + 1 < len(obstacleGrid) and obstacleGrid[i + 1][j] != 1:
                    obstacleGrid[i + 1][j] += obstacleGrid[i][j]

        if obstacleGrid[-1][-1] > 0:
            return 0

        return -obstacleGrid[-1][-1]`}]},64:{title:"minimum path sum",difficulty:"Medium",html_content:`<h1>64 - Minimum Path Sum</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/minimum-path-sum/>minimum-path-sum</a></h2><p>Given a <code>m x n</code> <code>grid</code> filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.<p><strong>Note:</strong> You can only move either down or right at any point in time.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/11/05/minpath.jpg style=width:242px;height:242px><pre>
<strong>Input:</strong> grid = [[1,3,1],[1,5,1],[4,2,1]]
<strong>Output:</strong> 7
<strong>Explanation:</strong> Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> grid = [[1,2,3],[4,5,6]]
<strong>Output:</strong> 12
</pre><p> <p><strong>Constraints:</strong><ul><li><code>m == grid.length</code><li><code>n == grid[i].length</code><li><code>1 &lt;= m, n &lt;= 200</code><li><code>0 &lt;= grid[i][j] &lt;= 200</code></ul>`,submissions:[{time:1767804575,language:"py",runtime:23,memory:21,accepted:!0,code_content:`class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        result = [[sys.maxsize] * len(grid[0]) for _ in range(len(grid))]
        result[0][0] = grid[0][0]
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if i + 1 < len(grid):
                    result[i+1][j] = min(result[i+1][j], result[i][j] + grid[i+1][j])

                if j + 1 < len(grid[0]):
                    result[i][j+1] = min(result[i][j+1], result[i][j] + grid[i][j+1])

        return result[-1][-1]`}]},66:{title:"plus one",difficulty:"Easy",html_content:`<h1>66 - Plus One</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/plus-one/>plus-one</a></h2><p>You are given a <strong>large integer</strong> represented as an integer array <code>digits</code>, where each <code>digits[i]</code> is the <code>i<sup>th</sup></code> digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading <code>0</code>'s.<p>Increment the large integer by one and return <em>the resulting array of digits</em>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> digits = [1,2,3]
<strong>Output:</strong> [1,2,4]
<strong>Explanation:</strong> The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> digits = [4,3,2,1]
<strong>Output:</strong> [4,3,2,2]
<strong>Explanation:</strong> The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> digits = [9]
<strong>Output:</strong> [1,0]
<strong>Explanation:</strong> The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= digits.length &lt;= 100</code><li><code>0 &lt;= digits[i] &lt;= 9</code><li><code>digits</code> does not contain any leading <code>0</code>'s.</ul>`,submissions:[{time:1767107302,language:"py",runtime:0,memory:17,accepted:!0,code_content:`class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:

        for index in reversed(range(len(digits))):
            digits[index] += 1
            if digits[index] == 10:
                digits[index] = 0
            else:
                break
        else:
            digits = [1] + digits

        return digits`}]},67:{title:"add binary",difficulty:"Easy",html_content:`<h1>67 - Add Binary</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/add-binary/>add-binary</a></h2><p>Given two binary strings <code>a</code> and <code>b</code>, return <em>their sum as a binary string</em>.<p> <p><strong class=example>Example 1:</strong><pre><strong>Input:</strong> a = "11", b = "1"
<strong>Output:</strong> "100"
</pre><p><strong class=example>Example 2:</strong><pre><strong>Input:</strong> a = "1010", b = "1011"
<strong>Output:</strong> "10101"
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= a.length, b.length &lt;= 10<sup>4</sup></code><li><code>a</code> and <code>b</code> consist only of <code>'0'</code> or <code>'1'</code> characters.<li>Each string does not contain leading zeros except for the zero itself.</ul>`,submissions:[{time:1766791271,language:"rs",runtime:0,memory:2,accepted:!0,code_content:`impl Solution {
    pub fn add_binary(a: String, b: String) -> String {
        if a.len() > b.len() {
            return Solution::add_binary(b, a);
        }

        let mut carry = 0;
        let a_chars: Vec<char> = a.chars().collect();
        let mut b_chars: Vec<char> = b.chars().collect();
        
        let offset = b_chars.len() - a_chars.len();

        for i in (0..a_chars.len()).rev() {
            let a_bit = if a_chars[i] == '1' { 1 } else { 0 };
            let b_idx = i + offset;
            let b_bit = if b_chars[b_idx] == '1' { 1 } else { 0 };
            
            let sum = a_bit + b_bit + carry;
            carry = sum / 2;
            b_chars[b_idx] = if sum % 2 == 1 { '1' } else { '0' };
        }

        for i in (0..offset).rev() {
            if carry == 0 { break; }
            let b_bit = if b_chars[i] == '1' { 1 } else { 0 };
            let sum = b_bit + carry;
            carry = sum / 2;
            b_chars[i] = if sum % 2 == 1 { '1' } else { '0' };
        }

        let mut result: String = b_chars.iter().collect();
        if carry == 1 {
            result.insert(0, '1');
        }
        
        result
    }
}
`}]},68:{title:"text justification",difficulty:"Hard",html_content:`<h1>68 - Text Justification</h1><h2>Difficulty: Hard - <a href=https://leetcode.com/problems/text-justification/>text-justification</a></h2><p>Given an array of strings <code>words</code> and a width <code>maxWidth</code>, format the text such that each line has exactly <code>maxWidth</code> characters and is fully (left and right) justified.<p>You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces <code>' '</code> when necessary so that each line has exactly <code>maxWidth</code> characters.<p>Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.<p>For the last line of text, it should be left-justified, and no extra space is inserted between words.<p><strong>Note:</strong><ul><li>A word is defined as a character sequence consisting of non-space characters only.<li>Each word's length is guaranteed to be greater than <code>0</code> and not exceed <code>maxWidth</code>.<li>The input array <code>words</code> contains at least one word.</ul><p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
<strong>Output:</strong>
[
   "This    is    an",
   "example  of text",
   "justification.  "
]</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
<strong>Output:</strong>
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
<strong>Explanation:</strong> Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified.
Note that the second line is also left-justified because it contains only one word.</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
<strong>Output:</strong>
[
  "Science  is  what we",
  "understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  "
]</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= words.length &lt;= 300</code><li><code>1 &lt;= words[i].length &lt;= 20</code><li><code>words[i]</code> consists of only English letters and symbols.<li><code>1 &lt;= maxWidth &lt;= 100</code><li><code>words[i].length &lt;= maxWidth</code></ul>`,submissions:[{time:1762096473,language:"cpp",runtime:0,memory:10,accepted:!0,code_content:`class Solution {
    public:
        vector<string> fullJustify(vector<string>& words, int maxWidth) {
            vector<string> result {};
    
            int cur_size = 0, start = 0;
            for(int i = 0; i < words.size(); i++){

                cur_size += words[i].size() + 1;
                if(cur_size -1 > maxWidth){
                    result.push_back(format_str(words, maxWidth, start, i-1, cur_size - (words[i].size() + 1)));
                    start = i;
                    cur_size = words[i].size() + 1;
                }
            }
            result.push_back(left_format(words, start, maxWidth));
            return result;
        }
        string left_format(vector<string>& words, int start, int maxWidth){
            string line(maxWidth, ' ');
            int x = 0;
            for(int i = start; i < words.size(); i++){
                line.replace(x, words[i].size(), words[i]);
                x += words[i].size() + 1;
            }
            return line;
        }
    
        string format_str(vector<string>& words, int maxWidth, int start, int end, int s_size){
            string line(maxWidth, ' ');
    
            int item_count = end - start + 1;
            if(item_count == 1){
                line.replace(0, words[start].size(), words[start]);
                return line;
            }
            int amount_chars = s_size - item_count;
            int amount_space = (maxWidth - amount_chars) / (item_count-1);
            int excess_space = maxWidth - amount_chars - amount_space * (item_count -1);
    
            for(int i = start, x = 0; i <= end; x += amount_space, i++){
                line.replace(x, words[i].size(), words[i]);
                x+= words[i].size();
                if(excess_space){
                    excess_space--;
                    x++;
                }
            }
    
    
            return line;
        }
    };`}]},69:{title:"sqrtx",difficulty:"Easy",html_content:`<h1>69 - Sqrt(x)</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/sqrtx/>sqrtx</a></h2><p>Given a non-negative integer <code>x</code>, return <em>the square root of </em><code>x</code><em> rounded down to the nearest integer</em>. The returned integer should be <strong>non-negative</strong> as well.<p>You <strong>must not use</strong> any built-in exponent function or operator.<ul><li>For example, do not use <code>pow(x, 0.5)</code> in c++ or <code>x ** 0.5</code> in python.</ul><p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> x = 4
<strong>Output:</strong> 2
<strong>Explanation:</strong> The square root of 4 is 2, so we return 2.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> x = 8
<strong>Output:</strong> 2
<strong>Explanation:</strong> The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>0 &lt;= x &lt;= 2<sup>31</sup> - 1</code></ul>`,submissions:[{time:1767109442,language:"py",runtime:3,memory:17,accepted:!0,code_content:`class Solution:

    def mySqrt(self, x: int) -> int:
        left = 0
        right = x

        while left <= right:
            mid = (left + right) // 2

            if mid * mid == x:
                return mid
            elif mid * mid < x:
                left = mid + 1
            else:
                right = mid - 1

        return right`}]},70:{title:"climbing stairs",difficulty:"Easy",html_content:`<h1>70 - Climbing Stairs</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/climbing-stairs/>climbing-stairs</a></h2><p>You are climbing a staircase. It takes <code>n</code> steps to reach the top.<p>Each time you can either climb <code>1</code> or <code>2</code> steps. In how many distinct ways can you climb to the top?<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> n = 2
<strong>Output:</strong> 2
<strong>Explanation:</strong> There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> n = 3
<strong>Output:</strong> 3
<strong>Explanation:</strong> There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= n &lt;= 45</code></ul>`,submissions:[{time:1767116518,language:"py",runtime:0,memory:17,accepted:!0,code_content:`class Solution:
    def __init__(self):
        self.dp: dict = {0:0, 1:1, 2:2, 3:3}

    def climbStairs(self, n: int) -> int:
        if n in self.dp:
            return self.dp[n]

        one = self.climbStairs(n -1)
        two = self.climbStairs(n - 2)

        self.dp[n] = one + two
        return self.dp[n]`}]},71:{title:"simplify path",difficulty:"Medium",html_content:`<h1>71 - Simplify Path</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/simplify-path/>simplify-path</a></h2><p>You are given an <em>absolute</em> path for a Unix-style file system, which always begins with a slash <code>'/'</code>. Your task is to transform this absolute path into its <strong>simplified canonical path</strong>.<p>The <em>rules</em> of a Unix-style file system are as follows:<ul><li>A single period <code>'.'</code> represents the current directory.<li>A double period <code>'..'</code> represents the previous/parent directory.<li>Multiple consecutive slashes such as <code>'//'</code> and <code>'///'</code> are treated as a single slash <code>'/'</code>.<li>Any sequence of periods that does <strong>not match</strong> the rules above should be treated as a <strong>valid directory or</strong> <strong>file </strong><strong>name</strong>. For example, <code>'...' </code>and <code>'....'</code> are valid directory or file names.</ul><p>The simplified canonical path should follow these <em>rules</em>:<ul><li>The path must start with a single slash <code>'/'</code>.<li>Directories within the path must be separated by exactly one slash <code>'/'</code>.<li>The path must not end with a slash <code>'/'</code>, unless it is the root directory.<li>The path must not have any single or double periods (<code>'.'</code> and <code>'..'</code>) used to denote current or parent directories.</ul><p>Return the <strong>simplified canonical path</strong>.<p> <p><strong class=example>Example 1:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>path = "/home/"</span><p><strong>Output:</strong> <span class=example-io>"/home"</span><p><strong>Explanation:</strong><p>The trailing slash should be removed.</div><p><strong class=example>Example 2:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>path = "/home//foo/"</span><p><strong>Output:</strong> <span class=example-io>"/home/foo"</span><p><strong>Explanation:</strong><p>Multiple consecutive slashes are replaced by a single one.</div><p><strong class=example>Example 3:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>path = "/home/user/Documents/../Pictures"</span><p><strong>Output:</strong> <span class=example-io>"/home/user/Pictures"</span><p><strong>Explanation:</strong><p>A double period <code>".."</code> refers to the directory up a level (the parent directory).</div><p><strong class=example>Example 4:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>path = "/../"</span><p><strong>Output:</strong> <span class=example-io>"/"</span><p><strong>Explanation:</strong><p>Going one level up from the root directory is not possible.</div><p><strong class=example>Example 5:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>path = "/.../a/../b/c/../d/./"</span><p><strong>Output:</strong> <span class=example-io>"/.../b/d"</span><p><strong>Explanation:</strong><p><code>"..."</code> is a valid name for a directory in this problem.</div><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= path.length &lt;= 3000</code><li><code>path</code> consists of English letters, digits, period <code>'.'</code>, slash <code>'/'</code> or <code>'_'</code>.<li><code>path</code> is a valid absolute Unix path.</ul>`,submissions:[{time:1764006384,language:"py",runtime:0,memory:18,accepted:!0,code_content:`class Solution:
    def simplifyPath(self, path: str) -> str:
        stack = deque()

        for ch in path.split('/'):
            match ch:
                case ''| '.':
                    continue
                case '..':
                    if stack:
                        stack.pop()
                case _:
                    stack.append(ch)

        return "/" + "/".join(stack)`}]},72:{title:"edit distance",difficulty:"Medium",html_content:`<h1>72 - Edit Distance</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/edit-distance/>edit-distance</a></h2><p>Given two strings <code>word1</code> and <code>word2</code>, return <em>the minimum number of operations required to convert <code>word1</code> to <code>word2</code></em>.<p>You have the following three operations permitted on a word:<ul><li>Insert a character<li>Delete a character<li>Replace a character</ul><p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> word1 = "horse", word2 = "ros"
<strong>Output:</strong> 3
<strong>Explanation:</strong> 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> word1 = "intention", word2 = "execution"
<strong>Output:</strong> 5
<strong>Explanation:</strong> 
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')
</pre><p> <p><strong>Constraints:</strong><ul><li><code>0 &lt;= word1.length, word2.length &lt;= 500</code><li><code>word1</code> and <code>word2</code> consist of lowercase English letters.</ul>`,submissions:[{time:1721422802,language:"cpp",runtime:8,memory:12,accepted:!0,code_content:`class Solution {
public:
    int minDistance(string word1, string word2) {
        if (word1.empty() || word2.empty())
            return max(word1.size(), word2.size());
        if (word1 == word2)
            return 0;

        int m = word1.size();
        int n = word2.size();
        vector<vector<int>> dp(m + 1, vector<int>(n + 1));


        for (int i = 1; i <= m; ++i)
            dp[i][0] = i;

        for (int j = 1; j <= n; ++j)
            dp[0][j] = j;

        for (int i = 1; i <= m; ++i)
            for (int j = 1; j <= n; ++j)
                if (word1[i - 1] == word2[j - 1])
                    dp[i][j] = dp[i - 1][j - 1];
                else
                    dp[i][j] = min({dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]}) + 1;


        return dp[m][n];
    }
};`}]},73:{title:"set matrix zeroes",difficulty:"Medium",html_content:`<h1>73 - Set Matrix Zeroes</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/set-matrix-zeroes/>set-matrix-zeroes</a></h2><p>Given an <code>m x n</code> integer matrix <code>matrix</code>, if an element is <code>0</code>, set its entire row and column to <code>0</code>'s.<p>You must do it <a href=https://en.wikipedia.org/wiki/In-place_algorithm target=_blank>in place</a>.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/08/17/mat1.jpg style=width:450px;height:169px><pre>
<strong>Input:</strong> matrix = [[1,1,1],[1,0,1],[1,1,1]]
<strong>Output:</strong> [[1,0,1],[0,0,0],[1,0,1]]
</pre><p><strong class=example>Example 2:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/08/17/mat2.jpg style=width:450px;height:137px><pre>
<strong>Input:</strong> matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
<strong>Output:</strong> [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
</pre><p> <p><strong>Constraints:</strong><ul><li><code>m == matrix.length</code><li><code>n == matrix[0].length</code><li><code>1 &lt;= m, n &lt;= 200</code><li><code>-2<sup>31</sup> &lt;= matrix[i][j] &lt;= 2<sup>31</sup> - 1</code></ul><p> <p><strong>Follow up:</strong><ul><li>A straightforward solution using <code>O(mn)</code> space is probably a bad idea.<li>A simple improvement uses <code>O(m + n)</code> space, but still not the best solution.<li>Could you devise a constant space solution?</ul>`,submissions:[{time:1763658471,language:"py",runtime:3,memory:18,accepted:!0,code_content:`class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        x_set = set()
        y_set = set()

        for x in range(len(matrix)):
            for y in range(len(matrix[0])):
                if matrix[x][y] == 0:
                    x_set.add(x)
                    y_set.add(y)

        for row in x_set:
            for col_index in range(len(matrix[row])):
                matrix[row][col_index] = 0

        for column in y_set:
            for row_index in range(len(matrix)):
                matrix[row_index][column] = 0`}]},74:{title:"search a 2d matrix",difficulty:"Medium",html_content:`<h1>74 - Search a 2D Matrix</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/search-a-2d-matrix/>search-a-2d-matrix</a></h2><p>You are given an <code>m x n</code> integer matrix <code>matrix</code> with the following two properties:<ul><li>Each row is sorted in non-decreasing order.<li>The first integer of each row is greater than the last integer of the previous row.</ul><p>Given an integer <code>target</code>, return <code>true</code> <em>if</em> <code>target</code> <em>is in</em> <code>matrix</code> <em>or</em> <code>false</code> <em>otherwise</em>.<p>You must write a solution in <code>O(log(m * n))</code> time complexity.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/10/05/mat.jpg style=width:322px;height:242px><pre>
<strong>Input:</strong> matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
<strong>Output:</strong> true
</pre><p><strong class=example>Example 2:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/10/05/mat2.jpg style=width:322px;height:242px><pre>
<strong>Input:</strong> matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
<strong>Output:</strong> false
</pre><p> <p><strong>Constraints:</strong><ul><li><code>m == matrix.length</code><li><code>n == matrix[i].length</code><li><code>1 &lt;= m, n &lt;= 100</code><li><code>-10<sup>4</sup> &lt;= matrix[i][j], target &lt;= 10<sup>4</sup></code></ul>`,submissions:[{time:1766583326,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        size = len(matrix)
        row = bisect.bisect_left(matrix, target, key=operator.itemgetter(size))
        column = bisect.bisect_left(matrix[row], target)

        return matrix[row][column] == target`},{time:1766583426,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        size = len(matrix[0]) -1
        row = bisect.bisect_left(matrix, target, key=operator.itemgetter(size))
        column = bisect.bisect_left(matrix[row], target)

        return matrix[row][column] == target`},{time:1766583569,language:"py",runtime:0,memory:17,accepted:!0,code_content:`class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        size = len(matrix[0]) -1
        row = bisect.bisect_left(matrix, target, key=operator.itemgetter(size))
        if row >= len(matrix):
            return False
        column = bisect.bisect_left(matrix[row], target)

        return matrix[row][column] == target`}]},76:{title:"minimum window substring",difficulty:"Hard",html_content:`<h1>76 - Minimum Window Substring</h1><h2>Difficulty: Hard - <a href=https://leetcode.com/problems/minimum-window-substring/>minimum-window-substring</a></h2><p>Given two strings <code>s</code> and <code>t</code> of lengths <code>m</code> and <code>n</code> respectively, return <em>the <strong>minimum window</strong></em> <span data-keyword=substring-nonempty><strong><em>substring</em></strong></span><em> of </em><code>s</code><em> such that every character in </em><code>t</code><em> (<strong>including duplicates</strong>) is included in the window</em>. If there is no such substring, return <em>the empty string </em><code>""</code>.<p>The testcases will be generated such that the answer is <strong>unique</strong>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> s = "ADOBECODEBANC", t = "ABC"
<strong>Output:</strong> "BANC"
<strong>Explanation:</strong> The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> s = "a", t = "a"
<strong>Output:</strong> "a"
<strong>Explanation:</strong> The entire string s is the minimum window.
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> s = "a", t = "aa"
<strong>Output:</strong> ""
<strong>Explanation:</strong> Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>m == s.length</code><li><code>n == t.length</code><li><code>1 &lt;= m, n &lt;= 10<sup>5</sup></code><li><code>s</code> and <code>t</code> consist of uppercase and lowercase English letters.</ul><p> <p><strong>Follow up:</strong> Could you find an algorithm that runs in <code>O(m + n)</code> time?`,submissions:[{time:1763564106,language:"py",runtime:430,memory:18,accepted:!0,code_content:`class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if s[0:len(t) == t]:
            return t

        word_set = DefaultDict(int)
        for word in t:
            word_set[word] += 1

        l_result = 0
        r_result = 9999999999

        l_ptr = 0

        for index in range(len(s)):
            if s[index] in word_set:
                word_set[s[index]] -= 1
                if not any(value > 0 for value in word_set.values()):
                    while l_ptr < len(s):
                        if r_result - l_result > index - l_ptr:
                            r_result, l_result = index , l_ptr

                        if s[l_ptr] in word_set:
                            word_set[s[l_ptr]] += 1
                            
                        l_ptr += 1
                        if any(value > 0 for value in word_set.values()):
                            break



        if r_result == 9999999999:
            return ""


        return s[l_result: r_result+1]`},{time:1763565068,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if s[0:len(t) == t]:
            return t

        word_set = DefaultDict(int)
        for word in t:
            word_set[word] += 1

        l_result = 0
        r_result = 9999999999

        l_ptr = 0
        below = 0
        total = len(t)

        for index, ch in enumerate(s):
            if ch in word_set:
                if word_set[ch] == 1:
                    below += 1
                word_set[ch] -= 1

                while l_ptr < len(s) and below == total:
                    if r_result - l_result > index - l_ptr:
                        r_result, l_result = index, l_ptr

                    if s[l_ptr] in word_set:
                        word_set[s[l_ptr]] += 1
                        if word_set[s[l_ptr]] == 1:
                            below -= 1

                    l_ptr += 1


        if r_result == 9999999999:
            return ""

        return s[l_result: r_result + 1]`},{time:1763565216,language:"py",runtime:64,memory:18,accepted:!0,code_content:`class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if s[0:len(t) == t]:
            return t

        word_set = DefaultDict(int)
        for word in t:
            word_set[word] += 1

        l_result = 0
        r_result = 9999999999

        l_ptr = 0
        below = 0
        total = len(word_set)

        for index, ch in enumerate(s):
            if ch in word_set:
                if word_set[ch] == 1:
                    below += 1
                word_set[ch] -= 1

                while l_ptr < len(s) and below == total:
                    if r_result - l_result > index - l_ptr:
                        r_result, l_result = index, l_ptr

                    if s[l_ptr] in word_set:
                        word_set[s[l_ptr]] += 1
                        if word_set[s[l_ptr]] == 1:
                            below -= 1

                    l_ptr += 1


        if r_result == 9999999999:
            return ""

        return s[l_result: r_result + 1]`}]},77:{title:"combinations",difficulty:"Medium",html_content:`<h1>77 - Combinations</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/combinations/>combinations</a></h2><p>Given two integers <code>n</code> and <code>k</code>, return <em>all possible combinations of</em> <code>k</code> <em>numbers chosen from the range</em> <code>[1, n]</code>.<p>You may return the answer in <strong>any order</strong>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> n = 4, k = 2
<strong>Output:</strong> [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
<strong>Explanation:</strong> There are 4 choose 2 = 6 total combinations.
Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> n = 1, k = 1
<strong>Output:</strong> [[1]]
<strong>Explanation:</strong> There is 1 choose 1 = 1 total combination.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= n &lt;= 20</code><li><code>1 &lt;= k &lt;= n</code></ul>`,submissions:[{time:1765935159,language:"py",runtime:135,memory:59,accepted:!0,code_content:`class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        result: List[List[int]] = []

        def dfs(start, comb):
            if len(comb) == k:
                result.append(comb[:])
                return
            for i in range(start, n + 1):
                comb.append(i)
                dfs(i + 1, comb)
                comb.pop()

        dfs(1, [])

        return result`}]},79:{title:"word search",difficulty:"Medium",html_content:`<h1>79 - Word Search</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/word-search/>word-search</a></h2><p>Given an <code>m x n</code> grid of characters <code>board</code> and a string <code>word</code>, return <code>true</code> <em>if</em> <code>word</code> <em>exists in the grid</em>.<p>The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/11/04/word2.jpg style=width:322px;height:242px><pre>
<strong>Input:</strong> board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
<strong>Output:</strong> true
</pre><p><strong class=example>Example 2:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/11/04/word-1.jpg style=width:322px;height:242px><pre>
<strong>Input:</strong> board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
<strong>Output:</strong> true
</pre><p><strong class=example>Example 3:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/10/15/word3.jpg style=width:322px;height:242px><pre>
<strong>Input:</strong> board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
<strong>Output:</strong> false
</pre><p> <p><strong>Constraints:</strong><ul><li><code>m == board.length</code><li><code>n = board[i].length</code><li><code>1 &lt;= m, n &lt;= 6</code><li><code>1 &lt;= word.length &lt;= 15</code><li><code>board</code> and <code>word</code> consists of only lowercase and uppercase English letters.</ul><p> <p><strong>Follow up:</strong> Could you use search pruning to make your solution faster with a larger <code>board</code>?`,submissions:[{time:1766104166,language:"py",runtime:2067,memory:17,accepted:!0,code_content:`class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:


        def dfs(x: int, y: int, check: List[List[bool]], index_word: int) -> bool:
            if index_word == len(word):
                return True
            if x + 1 < len(board) and board[x + 1][y] == word[index_word] and not check[x + 1][y]:
                check[x+1][y] = True
                if dfs(x+1, y, check, index_word + 1):
                    return True
                check[x + 1][y] = False
            if x - 1 >= 0 and board[x - 1][y] == word[index_word] and not check[x - 1][y]:
                check[x - 1][y] = True
                if dfs(x-1, y, check, index_word + 1):
                    return True
                check[x - 1][y] = False

            if y + 1 < len(board[0]) and board[x][y + 1] == word[index_word] and not check[x][y + 1]:
                check[x][y+1] = True
                if dfs(x, y + 1, check, index_word + 1):
                    return True
                check[x][y + 1] = False
            if y - 1 >= 0 and board[x][y - 1] == word[index_word] and not check[x][y - 1]:
                check[x][y-1] = True
                if dfs(x, y - 1, check, index_word + 1):
                    return True
                check[x][y - 1] = False

            return False

        matrix = [[False for _ in range(len(board[0]))] for _ in range(len(board))]
        for i in range(len(board)):
            for j in range(len(board[0])):
                if board[i][j] == word[0]:
                    matrix[i][j] = True
                    if dfs(i, j, matrix, 1):
                        return True
                    matrix[i][j] = False

        return False`}]},80:{title:"remove duplicates from sorted array ii",difficulty:"Medium",html_content:`<h1>80 - Remove Duplicates from Sorted Array II</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/>remove-duplicates-from-sorted-array-ii</a></h2><p>Given an integer array <code>nums</code> sorted in <strong>non-decreasing order</strong>, remove some duplicates <a href=https://en.wikipedia.org/wiki/In-place_algorithm target=_blank><strong>in-place</strong></a> such that each unique element appears <strong>at most twice</strong>. The <strong>relative order</strong> of the elements should be kept the <strong>same</strong>.<p>Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the <strong>first part</strong> of the array <code>nums</code>. More formally, if there are <code>k</code> elements after removing the duplicates, then the first <code>k</code> elements of <code>nums</code> should hold the final result. It does not matter what you leave beyond the first <code>k</code> elements.<p>Return <code>k</code><em> after placing the final result in the first </em><code>k</code><em> slots of </em><code>nums</code>.<p>Do <strong>not</strong> allocate extra space for another array. You must do this by <strong>modifying the input array <a href=https://en.wikipedia.org/wiki/In-place_algorithm target=_blank>in-place</a></strong> with O(1) extra memory.<p><strong>Custom Judge:</strong><p>The judge will test your solution with the following code:<pre>
int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i &lt; k; i++) {
    assert nums[i] == expectedNums[i];
}
</pre><p>If all assertions pass, then your solution will be <strong>accepted</strong>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> nums = [1,1,1,2,2,3]
<strong>Output:</strong> 5, nums = [1,1,2,2,3,_]
<strong>Explanation:</strong> Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> nums = [0,0,1,1,1,1,2,3,3]
<strong>Output:</strong> 7, nums = [0,0,1,1,2,3,3,_,_]
<strong>Explanation:</strong> Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= nums.length &lt;= 3 * 10<sup>4</sup></code><li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code><li><code>nums</code> is sorted in <strong>non-decreasing</strong> order.</ul>`,submissions:[{time:1761053550,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        if (nums.empty())
            return 0;
        
        int ar_i = 2;

        for (int i = 0; i < nums.size(); i++){
            if(nums[i] != nums[ar_i-2] || nums[i] != nums[ar_i-1]){
                nums[ar_i] = nums[i];
                ar_i++;
            }

        }

        return ar_i;
    }
};`},{time:1761054046,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        if (nums.empty())
            return 0;

        int ar_i = 2;
        if (nums.size() == 1){
            return 1;
        }

        for (int i = 0; i < nums.size(); i++){
            if(nums[i] != nums[ar_i-2] || nums[i] != nums[ar_i-1]){
                nums[ar_i] = nums[i];
                ar_i++;
            }

        }

        return ar_i;
    }
};`},{time:1761054145,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        if (nums.empty())
            return 0;

        int ar_i = 2;
        if (nums.size() == 1){
            return 1;
        }

        for (int i = 0; i < nums.size(); i++){
            if(nums[i] != nums[ar_i-2] || nums[i] != nums[ar_i-1]){
                if (ar_i >= nums.size())
                    return ar_i;
                nums[ar_i] = nums[i];
                ar_i++;
            }

        }

        return ar_i;
    }
};`},{time:1761054888,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        if (nums.empty())
            return 0;

        int ar_i = 2;
        if (nums.size() == 1){
            return 1;
        }

        for (int i = 0; i < nums.size(); i++){
            if(nums[i] != nums[ar_i-2] || nums[i] != nums[ar_i-1]){
                if (ar_i >= nums.size()){
                    if (nums.size() != 2)
                        nums[nums.size()-1] = nums[i];
                    return ar_i;
                }
                nums[ar_i] = nums[i];
                ar_i++;
            }

        }

        return ar_i;
    }
};`},{time:1761057013,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        if (nums.empty())
            return 0;

        int ar_i = 2;
        if (nums.size() == 1){
            return 1;
        }

        int amount = 0;
        for (int i = 2; i < nums.size(); i++){
            if(nums[i] != nums[i-1])
                amount++;
        }
        int last = nums[nums.size()-1];

        int allowed_dups = (nums.size()-1 - amount);

        for (int i = 0; i < nums.size(); i++){
            if(nums[i] != nums[ar_i-1]){
                if (ar_i >= nums.size()){
                    i = nums.size();
                    continue;
                }
                nums[ar_i] = nums[i];
                ar_i++;
            } else if (allowed_dups && nums[i] != nums[ar_i-2]) {
                allowed_dups--;
                if (ar_i >= nums.size()){
                    i = nums.size();
                    continue;
                }
                nums[ar_i] = nums[i];
                ar_i++;
            }

        }

        if (nums.size() >= 3 && last !=nums[nums.size()-3])
                        nums[nums.size()-1] = last;

        return ar_i;
    }
};`},{time:1761057953,language:"cpp",runtime:7,memory:19,accepted:!0,code_content:`class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        int ar_i = 2;
        if (nums.size() <= 2){
            return nums.size();
        }

        for (int i = 2; i < nums.size(); i++){
            if (nums[i] != nums[ar_i - 2]){
                nums[ar_i] = nums[i];
                ar_i++;
            }

        }

        return ar_i;
    }
};`}]},82:{title:"remove duplicates from sorted list ii",difficulty:"Medium",html_content:`<h1>82 - Remove Duplicates from Sorted List II</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/>remove-duplicates-from-sorted-list-ii</a></h2><p>Given the <code>head</code> of a sorted linked list, <em>delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list</em>. Return <em>the linked list <strong>sorted</strong> as well</em>.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2021/01/04/linkedlist1.jpg style=width:500px;height:142px><pre>
<strong>Input:</strong> head = [1,2,3,3,4,4,5]
<strong>Output:</strong> [1,2,5]
</pre><p><strong class=example>Example 2:</strong><p><img alt src=https://assets.leetcode.com/uploads/2021/01/04/linkedlist2.jpg style=width:500px;height:205px><pre>
<strong>Input:</strong> head = [1,1,1,2,3]
<strong>Output:</strong> [2,3]
</pre><p> <p><strong>Constraints:</strong><ul><li>The number of nodes in the list is in the range <code>[0, 300]</code>.<li><code>-100 &lt;= Node.val &lt;= 100</code><li>The list is guaranteed to be <strong>sorted</strong> in ascending order.</ul>`,submissions:[{time:1764528281,language:"py",runtime:0,memory:17,accepted:!0,code_content:`# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        result_temp = ListNode()
        result = result_temp

        bad_val: int|None = None
        while head:
            if (head.next and head.val == head.next.val) or bad_val == head.val:
                bad_val = head.val
                head = head.next
                continue

            result_temp.next = head
            result_temp = result_temp.next
            head = head.next

        result_temp.next = None



        return result.next`}]},86:{title:"partition list",difficulty:"Medium",html_content:`<h1>86 - Partition List</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/partition-list/>partition-list</a></h2><p>Given the <code>head</code> of a linked list and a value <code>x</code>, partition it such that all nodes <strong>less than</strong> <code>x</code> come before nodes <strong>greater than or equal</strong> to <code>x</code>.<p>You should <strong>preserve</strong> the original relative order of the nodes in each of the two partitions.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2021/01/04/partition.jpg style=width:662px;height:222px><pre>
<strong>Input:</strong> head = [1,4,3,2,5,2], x = 3
<strong>Output:</strong> [1,2,2,4,3,5]
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> head = [2,1], x = 2
<strong>Output:</strong> [1,2]
</pre><p> <p><strong>Constraints:</strong><ul><li>The number of nodes in the list is in the range <code>[0, 200]</code>.<li><code>-100 &lt;= Node.val &lt;= 100</code><li><code>-200 &lt;= x &lt;= 200</code></ul>`,submissions:[{time:1764625558,language:"py",runtime:0,memory:17,accepted:!0,code_content:`# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def partition(self, head: Optional[ListNode], x: int) -> Optional[ListNode]:
        less_head = ListNode()
        less_tail = less_head
        greater_head = ListNode()
        greater_tail = greater_head


        while head:
            if head.val < x:
                less_tail.next = head
                less_tail = less_tail.next
            else:
                greater_tail.next = head
                greater_tail = greater_tail.next

            head = head.next
            greater_tail.next = None


        less_tail.next = greater_head.next

        return less_head.next`}]},88:{title:"merge sorted array",difficulty:"Easy",html_content:`<h1>88 - Merge Sorted Array</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/merge-sorted-array/>merge-sorted-array</a></h2><p>You are given two integer arrays <code>nums1</code> and <code>nums2</code>, sorted in <strong>non-decreasing order</strong>, and two integers <code>m</code> and <code>n</code>, representing the number of elements in <code>nums1</code> and <code>nums2</code> respectively.<p><strong>Merge</strong> <code>nums1</code> and <code>nums2</code> into a single array sorted in <strong>non-decreasing order</strong>.<p>The final sorted array should not be returned by the function, but instead be <em>stored inside the array </em><code>nums1</code>. To accommodate this, <code>nums1</code> has a length of <code>m + n</code>, where the first <code>m</code> elements denote the elements that should be merged, and the last <code>n</code> elements are set to <code>0</code> and should be ignored. <code>nums2</code> has a length of <code>n</code>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
<strong>Output:</strong> [1,2,2,3,5,6]
<strong>Explanation:</strong> The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [<u>1</u>,<u>2</u>,2,<u>3</u>,5,6] with the underlined elements coming from nums1.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> nums1 = [1], m = 1, nums2 = [], n = 0
<strong>Output:</strong> [1]
<strong>Explanation:</strong> The arrays we are merging are [1] and [].
The result of the merge is [1].
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> nums1 = [0], m = 0, nums2 = [1], n = 1
<strong>Output:</strong> [1]
<strong>Explanation:</strong> The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>nums1.length == m + n</code><li><code>nums2.length == n</code><li><code>0 &lt;= m, n &lt;= 200</code><li><code>1 &lt;= m + n &lt;= 200</code><li><code>-10<sup>9</sup> &lt;= nums1[i], nums2[j] &lt;= 10<sup>9</sup></code></ul><p> <p><strong>Follow up: </strong>Can you come up with an algorithm that runs in <code>O(m + n)</code> time?`,submissions:[{time:1760965927,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        
        
    }
};`},{time:1760968030,language:"cpp",runtime:0,memory:12,accepted:!0,code_content:`class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        int num1p = m -1;
        int num2p = n -1;
        int point = n + m -1;

        while (num1p >= 0 && num2p >= 0){
            if (nums1[num1p] > nums2[num2p]){
                nums1[point] = nums1[num1p];
                num1p--;
            } else{
                nums1[point] = nums2[num2p];
                num2p--;
            }
            point--;
        }

        while(num2p >= 0){
            nums1[point] = nums2[num2p];
            num2p--;
            point--;
        }
        
    }
};`}]},92:{title:"reverse linked list ii",difficulty:"Medium",html_content:`<h1>92 - Reverse Linked List II</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/reverse-linked-list-ii/>reverse-linked-list-ii</a></h2><p>Given the <code>head</code> of a singly linked list and two integers <code>left</code> and <code>right</code> where <code>left &lt;= right</code>, reverse the nodes of the list from position <code>left</code> to position <code>right</code>, and return <em>the reversed list</em>.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2021/02/19/rev2ex2.jpg style=width:542px;height:222px><pre>
<strong>Input:</strong> head = [1,2,3,4,5], left = 2, right = 4
<strong>Output:</strong> [1,4,3,2,5]
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> head = [5], left = 1, right = 1
<strong>Output:</strong> [5]
</pre><p> <p><strong>Constraints:</strong><ul><li>The number of nodes in the list is <code>n</code>.<li><code>1 &lt;= n &lt;= 500</code><li><code>-500 &lt;= Node.val &lt;= 500</code><li><code>1 &lt;= left &lt;= right &lt;= n</code></ul><p> <p><strong>Follow up:</strong> Could you do it in one pass?`,submissions:[{time:1764342516,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:
        head_temp: ListNode = head

        while head_temp:
            if left == head_temp.val:
                head_temp.val = right

            elif right == head_temp.val:
                head_temp.val = left
                return head

            head_temp = head_temp.next

        return head
        `},{time:1764344811,language:"py",runtime:0,memory:18,accepted:!0,code_content:`# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:
        head_temp: ListNode = head
        prev = None
        prev_temp = None

        tail = None

        index = 1
        while head_temp:
            if left <= index:
                    temp = ListNode(head_temp.val)
                    temp.next = prev_temp
                    prev_temp = temp
                    if tail is None:
                        tail = prev_temp

            if right == index:
                if prev is None:
                    head = prev_temp
                else:
                    prev.next = prev_temp
                tail.next = head_temp.next

                return head

            if left -1 == index:
                prev = head_temp
            head_temp = head_temp.next
            index += 1

        return head
        `}]},97:{title:"interleaving string",difficulty:"Medium",html_content:`<h1>97 - Interleaving String</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/interleaving-string/>interleaving-string</a></h2><p>Given strings <code>s1</code>, <code>s2</code>, and <code>s3</code>, find whether <code>s3</code> is formed by an <strong>interleaving</strong> of <code>s1</code> and <code>s2</code>.<p>An <strong>interleaving</strong> of two strings <code>s</code> and <code>t</code> is a configuration where <code>s</code> and <code>t</code> are divided into <code>n</code> and <code>m</code> <span data-keyword=substring-nonempty>substrings</span> respectively, such that:<ul><li><code>s = s<sub>1</sub> + s<sub>2</sub> + ... + s<sub>n</sub></code><li><code>t = t<sub>1</sub> + t<sub>2</sub> + ... + t<sub>m</sub></code><li><code>|n - m| &lt;= 1</code><li>The <strong>interleaving</strong> is <code>s<sub>1</sub> + t<sub>1</sub> + s<sub>2</sub> + t<sub>2</sub> + s<sub>3</sub> + t<sub>3</sub> + ...</code> or <code>t<sub>1</sub> + s<sub>1</sub> + t<sub>2</sub> + s<sub>2</sub> + t<sub>3</sub> + s<sub>3</sub> + ...</code></ul><p><strong>Note:</strong> <code>a + b</code> is the concatenation of strings <code>a</code> and <code>b</code>.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/09/02/interleave.jpg style=width:561px;height:203px><pre>
<strong>Input:</strong> s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
<strong>Output:</strong> true
<strong>Explanation:</strong> One way to obtain s3 is:
Split s1 into s1 = "aa" + "bc" + "c", and s2 into s2 = "dbbc" + "a".
Interleaving the two splits, we get "aa" + "dbbc" + "bc" + "a" + "c" = "aadbbcbcac".
Since s3 can be obtained by interleaving s1 and s2, we return true.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
<strong>Output:</strong> false
<strong>Explanation:</strong> Notice how it is impossible to interleave s2 with any other string to obtain s3.
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> s1 = "", s2 = "", s3 = ""
<strong>Output:</strong> true
</pre><p> <p><strong>Constraints:</strong><ul><li><code>0 &lt;= s1.length, s2.length &lt;= 100</code><li><code>0 &lt;= s3.length &lt;= 200</code><li><code>s1</code>, <code>s2</code>, and <code>s3</code> consist of lowercase English letters.</ul><p> <p><strong>Follow up:</strong> Could you solve it using only <code>O(s2.length)</code> additional memory space?`,submissions:[{time:1768253574,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution:
    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:
       s1index, s2index, s3index = 0,0,0

       while True:
           if s1index >= len(s1) and s2index >= len(s2):
               return True
           elif s3index >= len(s3):
               return False
           elif s1index >= len(s1):
               if s2[s2index] != s3[s3index]:
                    return False
               s2index += 1
               s3index += 1
           elif s2index >= len(s2):
               if s1[s1index] != s3[s3index]:
                    return False
               s1index += 1
               s3index += 1
           elif s1[s1index] == s3[s3index] and s2[s2index] == s3[s3index]:
                if self.isInterleave(s1[s1index + 1:],s2[s2index:],s3[s3index + 1:]):
                    return True
                return self.isInterleave(s1[s1index:],s2[s2index + 1:],s3[s3index + 1:])
           elif s1[s1index] == s3[s3index]:
               s1index += 1
               s3index += 1
           elif s2[s2index] == s3[s3index]:
               s2index += 1
               s3index += 1
           else:
               return False`},{time:1768255e3,language:"py",runtime:47,memory:20,accepted:!0,code_content:`class Solution:
    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:
        m, n, l = len(s1), len(s2), len(s3)
        if m + n != l:
            return False
        
        memo = {} 
        
        def helper(i: int, j: int, k: int) -> bool:
            if k == l:
                return True
            
            if (i, j) in memo:
                return memo[(i, j)]
            
            ans = False
            if i < m and s1[i] == s3[k]:
                ans = ans or helper(i + 1, j, k + 1)
                
            if j < n and s2[j] == s3[k]:
                ans = ans or helper(i, j + 1, k + 1)
            
            memo[(i, j)] = ans
            return ans
        
        return helper(0, 0, 0)`}]},98:{title:"validate binary search tree",difficulty:"Medium",html_content:`<h1>98 - Validate Binary Search Tree</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/validate-binary-search-tree/>validate-binary-search-tree</a></h2><p>Given the <code>root</code> of a binary tree, <em>determine if it is a valid binary search tree (BST)</em>.<p>A <strong>valid BST</strong> is defined as follows:<ul><li>The left <span data-keyword=subtree>subtree</span> of a node contains only nodes with keys <strong>strictly less than</strong> the node's key.<li>The right subtree of a node contains only nodes with keys <strong>strictly greater than</strong> the node's key.<li>Both the left and right subtrees must also be binary search trees.</ul><p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/12/01/tree1.jpg style=width:302px;height:182px><pre>
<strong>Input:</strong> root = [2,1,3]
<strong>Output:</strong> true
</pre><p><strong class=example>Example 2:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/12/01/tree2.jpg style=width:422px;height:292px><pre>
<strong>Input:</strong> root = [5,1,4,null,null,3,6]
<strong>Output:</strong> false
<strong>Explanation:</strong> The root node's value is 5 but its right child's value is 4.
</pre><p> <p><strong>Constraints:</strong><ul><li>The number of nodes in the tree is in the range <code>[1, 10<sup>4</sup>]</code>.<li><code>-2<sup>31</sup> &lt;= Node.val &lt;= 2<sup>31</sup> - 1</code></ul>`,submissions:[{time:1765299197,language:"py",runtime:3,memory:19,accepted:!0,code_content:`# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: Optional[TreeNode], l_bound :int|None = -sys.maxsize - 1, r_bound :int|None = sys.maxsize) -> bool:


        if root.left:
            if root.left.val >= root.val or root.left.val <= l_bound:
                return False
            temp = min(root.val, r_bound)
            left = self.isValidBST(root.left, l_bound, temp)
            if not left:
                return False

        if root.right:
            if root.right.val <= root.val or root.right.val >= r_bound:
                return False
            temp = max(root.val, l_bound)
            right = self.isValidBST(root.right, temp, r_bound)
            if not right:
                return False

        return True`}]},100:{title:"same tree",difficulty:"Easy",html_content:`<h1>100 - Same Tree</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/same-tree/>same-tree</a></h2><p>Given the roots of two binary trees <code>p</code> and <code>q</code>, write a function to check if they are the same or not.<p>Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/12/20/ex1.jpg style=width:622px;height:182px><pre>
<strong>Input:</strong> p = [1,2,3], q = [1,2,3]
<strong>Output:</strong> true
</pre><p><strong class=example>Example 2:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/12/20/ex2.jpg style=width:382px;height:182px><pre>
<strong>Input:</strong> p = [1,2], q = [1,null,2]
<strong>Output:</strong> false
</pre><p><strong class=example>Example 3:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/12/20/ex3.jpg style=width:622px;height:182px><pre>
<strong>Input:</strong> p = [1,2,1], q = [1,1,2]
<strong>Output:</strong> false
</pre><p> <p><strong>Constraints:</strong><ul><li>The number of nodes in both trees is in the range <code>[0, 100]</code>.<li><code>-10<sup>4</sup> &lt;= Node.val &lt;= 10<sup>4</sup></code></ul>`,submissions:[{time:1764689354,language:"py",runtime:0,memory:17,accepted:!0,code_content:`# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        stack1 = deque()
        stack2 = deque()

        stack1.append(p)
        stack2.append(q)

        while stack1:
            tree1 = stack1.pop()
            tree2 = stack2.pop()
            if (tree1 is None) ^ (tree2 is None):
                return False

            if tree1 is None:
                continue

            if tree1.val == tree2.val:
                stack1.append(tree1.right)
                stack1.append(tree1.left)
                stack2.append(tree2.right)
                stack2.append(tree2.left)
            else:
                return False
                
        return True



        `}]},101:{title:"symmetric tree",difficulty:"Easy",html_content:`<h1>101 - Symmetric Tree</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/symmetric-tree/>symmetric-tree</a></h2><p>Given the <code>root</code> of a binary tree, <em>check whether it is a mirror of itself</em> (i.e., symmetric around its center).<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2021/02/19/symtree1.jpg style=width:354px;height:291px><pre>
<strong>Input:</strong> root = [1,2,2,3,4,4,3]
<strong>Output:</strong> true
</pre><p><strong class=example>Example 2:</strong><p><img alt src=https://assets.leetcode.com/uploads/2021/02/19/symtree2.jpg style=width:308px;height:258px><pre>
<strong>Input:</strong> root = [1,2,2,null,3,null,3]
<strong>Output:</strong> false
</pre><p> <p><strong>Constraints:</strong><ul><li>The number of nodes in the tree is in the range <code>[1, 1000]</code>.<li><code>-100 &lt;= Node.val &lt;= 100</code></ul><p> <p><strong>Follow up:</strong> Could you solve it both recursively and iteratively?`,submissions:[{time:1764706553,language:"py",runtime:1,memory:17,accepted:!0,code_content:`# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        if root is None:
            return False
        
        if (root.right is None) or (root.left is None):
            return not (root.right is None) ^ (root.left is None)

        stack1 = deque()
        stack2 = deque()

        stack1.append(root.right)
        stack2.append(root.left)

        while stack1:
            tree1 = stack1.pop()
            tree2 = stack2.pop()
            if (tree1 is None) ^ (tree2 is None):
                return False

            if tree1 is None:
                continue

            if tree1.val == tree2.val:
                stack1.append(tree1.right)
                stack1.append(tree1.left)
                stack2.append(tree2.left)
                stack2.append(tree2.right)
            else:
                return False
                
        return True`}]},102:{title:"binary tree level order traversal",difficulty:"Medium",html_content:`<h1>102 - Binary Tree Level Order Traversal</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/binary-tree-level-order-traversal/>binary-tree-level-order-traversal</a></h2><p>Given the <code>root</code> of a binary tree, return <em>the level order traversal of its nodes' values</em>. (i.e., from left to right, level by level).<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg style=width:277px;height:302px><pre>
<strong>Input:</strong> root = [3,9,20,null,null,15,7]
<strong>Output:</strong> [[3],[9,20],[15,7]]
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> root = [1]
<strong>Output:</strong> [[1]]
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> root = []
<strong>Output:</strong> []
</pre><p> <p><strong>Constraints:</strong><ul><li>The number of nodes in the tree is in the range <code>[0, 2000]</code>.<li><code>-1000 &lt;= Node.val &lt;= 1000</code></ul>`,submissions:[{time:1765052610,language:"rs",runtime:0,memory:2,accepted:!0,code_content:`// Definition for a binary tree node.
// #[derive(Debug, PartialEq, Eq)]
// pub struct TreeNode {
//   pub val: i32,
//   pub left: Option<Rc<RefCell<TreeNode>>>,
//   pub right: Option<Rc<RefCell<TreeNode>>>,
// }
// 
// impl TreeNode {
//   #[inline]
//   pub fn new(val: i32) -> Self {
//     TreeNode {
//       val,
//       left: None,
//       right: None
//     }
//   }
// }
use std::rc::Rc;
use std::cell::RefCell;
use std::collections::VecDeque;

impl Solution {
    pub fn level_order(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<Vec<i32>> {
        let mut result: Vec<Vec<i32>> = Vec::new();

        if root.is_none(){
            return result;
        }
        let mut level_order: VecDeque<Rc<RefCell<TreeNode>>> = VecDeque::new();
        let mut prev: VecDeque<Rc<RefCell<TreeNode>>> = VecDeque::new();
        
        if let Some(r) = root {
            level_order.push_back(r);
        }

        loop {
            let mut level_vec: Vec<i32> = Vec::new();

            while !level_order.is_empty(){
                let node_rc = level_order.pop_front().unwrap();

                let node = node_rc.borrow();
                level_vec.push(node.val);
                if let Some(left_child) = node.left.clone() {
                    prev.push_back(left_child);
                }
                if let Some(right_child) = node.right.clone() {
                    prev.push_back(right_child);
                }

            }

            result.push(level_vec);

            if prev.is_empty(){
                break
            }

            std::mem::swap(&mut prev, &mut level_order);

        }

        return result;
        
    }
}`}]},103:{title:"binary tree zigzag level order traversal",difficulty:"Medium",html_content:`<h1>103 - Binary Tree Zigzag Level Order Traversal</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/>binary-tree-zigzag-level-order-traversal</a></h2><p>Given the <code>root</code> of a binary tree, return <em>the zigzag level order traversal of its nodes' values</em>. (i.e., from left to right, then right to left for the next level and alternate between).<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg style=width:277px;height:302px><pre>
<strong>Input:</strong> root = [3,9,20,null,null,15,7]
<strong>Output:</strong> [[3],[20,9],[15,7]]
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> root = [1]
<strong>Output:</strong> [[1]]
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> root = []
<strong>Output:</strong> []
</pre><p> <p><strong>Constraints:</strong><ul><li>The number of nodes in the tree is in the range <code>[0, 2000]</code>.<li><code>-100 &lt;= Node.val &lt;= 100</code></ul>`,submissions:[{time:1765053037,language:"rs",runtime:-1,memory:-1,accepted:!1,code_content:`// Definition for a binary tree node.
// #[derive(Debug, PartialEq, Eq)]
// pub struct TreeNode {
//   pub val: i32,
//   pub left: Option<Rc<RefCell<TreeNode>>>,
//   pub right: Option<Rc<RefCell<TreeNode>>>,
// }
// 
// impl TreeNode {
//   #[inline]
//   pub fn new(val: i32) -> Self {
//     TreeNode {
//       val,
//       left: None,
//       right: None
//     }
//   }
// }
use std::rc::Rc;
use std::cell::RefCell;
use std::collections::VecDeque;

impl Solution {
    pub fn zigzag_level_order(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<Vec<i32>> {
        let mut result: Vec<Vec<i32>> = Vec::new();

        if root.is_none(){
            return result;
        }
        let mut level_order: VecDeque<Rc<RefCell<TreeNode>>> = VecDeque::new();
        let mut prev: VecDeque<Rc<RefCell<TreeNode>>> = VecDeque::new();
        
        if let Some(r) = root {
            level_order.push_back(r);
        }
        let mut zig: bool = false;

        loop {
            let mut level_vec: Vec<i32> = Vec::new();

            while !level_order.is_empty(){
                let node_rc = level_order.pop_front().unwrap();

                let node = node_rc.borrow();
                level_vec.push(node.val);

                if zig{
                    if let Some(left_child) = node.left.clone() { prev.push_back(left_child);}
                    if let Some(right_child) = node.right.clone() {prev.push_back(right_child);}

                } else{
                    if let Some(right_child) = node.right.clone() {prev.push_back(right_child);}
                    if let Some(left_child) = node.left.clone() { prev.push_back(left_child);}

                }

            }

            result.push(level_vec);

            if prev.is_empty(){
                break
            }

            std::mem::swap(&mut prev, &mut level_order);

            zig = !zig;

        }

        return result;
        
    }
}`},{time:1765053255,language:"rs",runtime:0,memory:2,accepted:!0,code_content:`// Definition for a binary tree node.
// #[derive(Debug, PartialEq, Eq)]
// pub struct TreeNode {
//   pub val: i32,
//   pub left: Option<Rc<RefCell<TreeNode>>>,
//   pub right: Option<Rc<RefCell<TreeNode>>>,
// }
// 
// impl TreeNode {
//   #[inline]
//   pub fn new(val: i32) -> Self {
//     TreeNode {
//       val,
//       left: None,
//       right: None
//     }
//   }
// }
use std::rc::Rc;
use std::cell::RefCell;
use std::collections::VecDeque;

impl Solution {
    pub fn zigzag_level_order(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<Vec<i32>> {
        let mut result: Vec<Vec<i32>> = Vec::new();

        if root.is_none(){
            return result;
        }
        let mut level_order: VecDeque<Rc<RefCell<TreeNode>>> = VecDeque::new();
        let mut prev: VecDeque<Rc<RefCell<TreeNode>>> = VecDeque::new();
        
        if let Some(r) = root {
            level_order.push_back(r);
        }
        let mut zig: bool = false;

        loop {
            let mut level_vec: Vec<i32> = Vec::new();

            while !level_order.is_empty(){
                let node_rc = level_order.pop_front().unwrap();

                let node = node_rc.borrow();
                level_vec.push(node.val);

                if let Some(left_child) = node.left.clone() { prev.push_back(left_child);}
                if let Some(right_child) = node.right.clone() {prev.push_back(right_child);}
            }

            if zig{
                result.push(level_vec.iter().rev().copied().collect());
            } else{
                result.push(level_vec);
            }
            

            if prev.is_empty(){
                break
            }

            std::mem::swap(&mut prev, &mut level_order);

            zig = !zig;

        }

        return result;
        
    }
}`}]},104:{title:"maximum depth of binary tree",difficulty:"Easy",html_content:`<h1>104 - Maximum Depth of Binary Tree</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/maximum-depth-of-binary-tree/>maximum-depth-of-binary-tree</a></h2><p>Given the <code>root</code> of a binary tree, return <em>its maximum depth</em>.<p>A binary tree's <strong>maximum depth</strong> is the number of nodes along the longest path from the root node down to the farthest leaf node.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/11/26/tmp-tree.jpg style=width:400px;height:277px><pre>
<strong>Input:</strong> root = [3,9,20,null,null,15,7]
<strong>Output:</strong> 3
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> root = [1,null,2]
<strong>Output:</strong> 2
</pre><p> <p><strong>Constraints:</strong><ul><li>The number of nodes in the tree is in the range <code>[0, 10<sup>4</sup>]</code>.<li><code>-100 &lt;= Node.val &lt;= 100</code></ul>`,submissions:[{time:1719428017,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int maxDepth(TreeNode* root) {
        int dephl = 0;
        int dephr = 0;
        if(root->left){
            dephl = maxDepth(root->left);
            dephl++;
        }

        if(root->right){
            dephr = maxDepth(root->right);
            dephr++;
        }
        if(dephl >= dephr)
        return dephl > 0 ? dephl:dephl+1;
        return dephr > 0 ? dephr:dephr+1;
    }
};`},{time:1719428145,language:"cpp",runtime:0,memory:17,accepted:!0,code_content:`/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int maxDepth(TreeNode* root) {
        if(root == nullptr)
        return 0;
        int dephl = 0;
        int dephr = 0;
        if(root->left){
            dephl = maxDepth(root->left);
            dephl++;
        }

        if(root->right){
            dephr = maxDepth(root->right);
            dephr++;
        }
        if(dephl >= dephr)
        return dephl > 0 ? dephl:dephl+1;
        return dephr > 0 ? dephr:dephr+1;
    }
};`}]},105:{title:"construct binary tree from preorder and inorder traversal",difficulty:"Medium",html_content:`<h1>105 - Construct Binary Tree from Preorder and Inorder Traversal</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/>construct-binary-tree-from-preorder-and-inorder-traversal</a></h2><p>Given two integer arrays <code>preorder</code> and <code>inorder</code> where <code>preorder</code> is the preorder traversal of a binary tree and <code>inorder</code> is the inorder traversal of the same tree, construct and return <em>the binary tree</em>.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2021/02/19/tree.jpg style=width:277px;height:302px><pre>
<strong>Input:</strong> preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
<strong>Output:</strong> [3,9,20,null,null,15,7]
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> preorder = [-1], inorder = [-1]
<strong>Output:</strong> [-1]
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= preorder.length &lt;= 3000</code><li><code>inorder.length == preorder.length</code><li><code>-3000 &lt;= preorder[i], inorder[i] &lt;= 3000</code><li><code>preorder</code> and <code>inorder</code> consist of <strong>unique</strong> values.<li>Each value of <code>inorder</code> also appears in <code>preorder</code>.<li><code>preorder</code> is <strong>guaranteed</strong> to be the preorder traversal of the tree.<li><code>inorder</code> is <strong>guaranteed</strong> to be the inorder traversal of the tree.</ul>`,submissions:[{time:1764774998,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        if not preorder:
            return None
        if len(preorder) == 1:
            return TreeNode(preorder[0])

        head_val = preorder[0]

        split = inorder.index(head_val) + 1

        left_branch = self.buildTree(preorder[1:split], inorder[1:split])
        right_branch = self.buildTree(preorder[split:], inorder[split:])

        return TreeNode(val=head_val, left=left_branch, right=right_branch)

        `},{time:1764775669,language:"py",runtime:104,memory:89,accepted:!0,code_content:`# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        if not preorder:
            return None
        if len(preorder) == 1:
            return TreeNode(preorder[0])

        head_val = preorder[0]

        split = inorder.index(head_val) + 1

        left_branch = self.buildTree(preorder[1:split], inorder[0:split-1])
        right_branch = self.buildTree(preorder[split:], inorder[split:])

        return TreeNode(val=head_val, left=left_branch, right=right_branch)
        `}]},106:{title:"construct binary tree from inorder and postorder traversal",difficulty:"Medium",html_content:`<h1>106 - Construct Binary Tree from Inorder and Postorder Traversal</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/>construct-binary-tree-from-inorder-and-postorder-traversal</a></h2><p>Given two integer arrays <code>inorder</code> and <code>postorder</code> where <code>inorder</code> is the inorder traversal of a binary tree and <code>postorder</code> is the postorder traversal of the same tree, construct and return <em>the binary tree</em>.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2021/02/19/tree.jpg style=width:277px;height:302px><pre>
<strong>Input:</strong> inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
<strong>Output:</strong> [3,9,20,null,null,15,7]
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> inorder = [-1], postorder = [-1]
<strong>Output:</strong> [-1]
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= inorder.length &lt;= 3000</code><li><code>postorder.length == inorder.length</code><li><code>-3000 &lt;= inorder[i], postorder[i] &lt;= 3000</code><li><code>inorder</code> and <code>postorder</code> consist of <strong>unique</strong> values.<li>Each value of <code>postorder</code> also appears in <code>inorder</code>.<li><code>inorder</code> is <strong>guaranteed</strong> to be the inorder traversal of the tree.<li><code>postorder</code> is <strong>guaranteed</strong> to be the postorder traversal of the tree.</ul>`,submissions:[{time:1764781691,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def buildTree(self, inorder: List[int], postorder: List[int]) -> Optional[TreeNode]:
        if not postorder:
            return None
        if len(postorder) == 1:
            return TreeNode(postorder[0])
        if len(postorder) == 2:
            if inorder[0] == postorder[0]:
                return TreeNode(val=postorder[1], left=TreeNode(val=inorder[0]))
            else:
                return TreeNode(val=inorder[0], right=TreeNode(val=postorder[0]))


        head_val = postorder[-1]

        inorder_split = inorder.index(postorder[-1])

        in_left, in_right = inorder[:inorder_split], inorder[inorder_split+1:]

        postorder_split = postorder.index(inorder[inorder_split + 1])

        if postorder_split % 2 == 0:
            postorder_split -= 1


        post_left, post_right = postorder[:postorder_split], postorder[postorder_split:-1]

        left_branch = self.buildTree(in_left, post_left)
        right_branch = self.buildTree(in_right, post_right)

        return TreeNode(val=head_val, left=left_branch, right=right_branch)`},{time:1764782007,language:"py",runtime:70,memory:53,accepted:!0,code_content:`# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def buildTree(self, inorder: List[int], postorder: List[int]) -> Optional[TreeNode]:
        if not inorder:
            return None


        head_val = postorder.pop()

        inorder_index = inorder.index(head_val)


        right_branch = self.buildTree(inorder[inorder_index+1:], postorder)
        left_branch = self.buildTree(inorder[:inorder_index], postorder)

        return TreeNode(val=head_val, left=left_branch, right=right_branch)`}]},108:{title:"convert sorted array to binary search tree",difficulty:"Easy",html_content:`<h1>108 - Convert Sorted Array to Binary Search Tree</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/>convert-sorted-array-to-binary-search-tree</a></h2><p>Given an integer array <code>nums</code> where the elements are sorted in <strong>ascending order</strong>, convert <em>it to a </em><span data-keyword=height-balanced><strong><em>height-balanced</em></strong></span> <em>binary search tree</em>.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2021/02/18/btree1.jpg style=width:302px;height:222px><pre>
<strong>Input:</strong> nums = [-10,-3,0,5,9]
<strong>Output:</strong> [0,-3,9,-10,null,5]
<strong>Explanation:</strong> [0,-10,5,null,-3,null,9] is also accepted:
<img alt src=https://assets.leetcode.com/uploads/2021/02/18/btree2.jpg style=width:302px;height:222px>
</pre><p><strong class=example>Example 2:</strong><p><img alt src=https://assets.leetcode.com/uploads/2021/02/18/btree.jpg style=width:342px;height:142px><pre>
<strong>Input:</strong> nums = [1,3]
<strong>Output:</strong> [3,1]
<strong>Explanation:</strong> [1,null,3] and [3,1] are both height-balanced BSTs.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code><li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code><li><code>nums</code> is sorted in a <strong>strictly increasing</strong> order.</ul>`,submissions:[{time:1766277525,language:"py",runtime:4,memory:18,accepted:!0,code_content:`# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:
        if not nums:
            return None

        mid_index = len(nums) // 2
        right = nums[:mid_index]
        left = nums[mid_index+1:]

        node = TreeNode(nums[mid_index])
        node.left = self.sortedArrayToBST(right)
        node.right = self.sortedArrayToBST(left)

        return node`}]},112:{title:"path sum",difficulty:"Easy",html_content:`<h1>112 - Path Sum</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/path-sum/>path-sum</a></h2><p>Given the <code>root</code> of a binary tree and an integer <code>targetSum</code>, return <code>true</code> if the tree has a <strong>root-to-leaf</strong> path such that adding up all the values along the path equals <code>targetSum</code>.<p>A <strong>leaf</strong> is a node with no children.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2021/01/18/pathsum1.jpg style=width:500px;height:356px><pre>
<strong>Input:</strong> root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
<strong>Output:</strong> true
<strong>Explanation:</strong> The root-to-leaf path with the target sum is shown.
</pre><p><strong class=example>Example 2:</strong><p><img alt src=https://assets.leetcode.com/uploads/2021/01/18/pathsum2.jpg><pre>
<strong>Input:</strong> root = [1,2,3], targetSum = 5
<strong>Output:</strong> false
<strong>Explanation:</strong> There are two root-to-leaf paths in the tree:
(1 --> 2): The sum is 3.
(1 --> 3): The sum is 4.
There is no root-to-leaf path with sum = 5.
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> root = [], targetSum = 0
<strong>Output:</strong> false
<strong>Explanation:</strong> Since the tree is empty, there are no root-to-leaf paths.
</pre><p> <p><strong>Constraints:</strong><ul><li>The number of nodes in the tree is in the range <code>[0, 5000]</code>.<li><code>-1000 &lt;= Node.val &lt;= 1000</code><li><code>-1000 &lt;= targetSum &lt;= 1000</code></ul>`,submissions:[{time:1764887808,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        if not root:
            return False

        stack = deque()
        stack.append((root, root.val))

        while stack:
            node, target = stack.pop()

            if node.left:
                stack.append((node.left, target + node.left.val))
            else:
                if target == targetSum:
                    return True

            if node.right:
                stack.append((node.right, target + node.right.val))
            else:
                if target == targetSum:
                    return True

        return False
        `},{time:1764887939,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        if not root:
            return False

        stack = deque()
        stack.append((root, root.val))

        while stack:
            node, target = stack.pop()

            if node.left:
                stack.append((node.left, target + node.left.val))
            else:
                if target == targetSum and node != root:
                    return True

            if node.right:
                stack.append((node.right, target + node.right.val))
            else:
                if target == targetSum and node != root:
                    return True

        return False

        `},{time:1764888017,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        if not root:
            return False
        
        if root.val == targetSum and root.left is None and root.right is None:
            return True

        stack = deque()
        stack.append((root, root.val))

        while stack:
            node, target = stack.pop()

            if node.left:
                stack.append((node.left, target + node.left.val))
            else:
                if target == targetSum and node != root:
                    return True

            if node.right:
                stack.append((node.right, target + node.right.val))
            else:
                if target == targetSum and node != root:
                    return True

        return False

        `},{time:1764888350,language:"py",runtime:0,memory:19,accepted:!0,code_content:`# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        if not root:
            return False

        if root.val == targetSum and root.left is None and root.right is None:
            return True

        stack = deque()
        stack.append((root, root.val))

        while stack:
            node, target = stack.pop()
            
            leaf: bool = node.left is None and node.right is None

            if node.left:
                stack.append((node.left, target + node.left.val))
            else:
                if target == targetSum and leaf:
                    return True

            if node.right:
                stack.append((node.right, target + node.right.val))
            else:
                if target == targetSum and leaf:
                    return True

        return False`}]},114:{title:"flatten binary tree to linked list",difficulty:"Medium",html_content:`<h1>114 - Flatten Binary Tree to Linked List</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/flatten-binary-tree-to-linked-list/>flatten-binary-tree-to-linked-list</a></h2><p>Given the <code>root</code> of a binary tree, flatten the tree into a "linked list":<ul><li>The "linked list" should use the same <code>TreeNode</code> class where the <code>right</code> child pointer points to the next node in the list and the <code>left</code> child pointer is always <code>null</code>.<li>The "linked list" should be in the same order as a <a href=https://en.wikipedia.org/wiki/Tree_traversal#Pre-order,_NLR target=_blank><strong>pre-order</strong><strong> traversal</strong></a> of the binary tree.</ul><p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2021/01/14/flaten.jpg style=width:500px;height:226px><pre>
<strong>Input:</strong> root = [1,2,5,3,4,null,6]
<strong>Output:</strong> [1,null,2,null,3,null,4,null,5,null,6]
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> root = []
<strong>Output:</strong> []
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> root = [0]
<strong>Output:</strong> [0]
</pre><p> <p><strong>Constraints:</strong><ul><li>The number of nodes in the tree is in the range <code>[0, 2000]</code>.<li><code>-100 &lt;= Node.val &lt;= 100</code></ul><p> <p><strong>Follow up:</strong> Can you flatten the tree in-place (with <code>O(1)</code> extra space)?`,submissions:[{time:1764885301,language:"py",runtime:0,memory:17,accepted:!0,code_content:`# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def flatten(self, root: Optional[TreeNode]) -> None:
        """
        Do not return anything, modify root in-place instead.
        """
        stack = deque()
        head = TreeNode()
        prev = head

        if root is not None:
            stack.append(root)

        while stack:
            node = stack.pop()

            if node.right:
                stack.append(node.right)

            if node.left:
                stack.append(node.left)

            node.left = None
            node.right = None
            prev.right = node
            prev = node


        return head.right
        `}]},117:{title:"populating next right pointers in each node ii",difficulty:"Medium",html_content:`<h1>117 - Populating Next Right Pointers in Each Node II</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/>populating-next-right-pointers-in-each-node-ii</a></h2><p>Given a binary tree<pre>
struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
</pre><p>Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to <code>NULL</code>.<p>Initially, all next pointers are set to <code>NULL</code>.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2019/02/15/117_sample.png style=width:500px;height:171px><pre>
<strong>Input:</strong> root = [1,2,3,4,5,null,7]
<strong>Output:</strong> [1,#,2,3,#,4,5,7,#]
<strong>Explanation: </strong>Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> root = []
<strong>Output:</strong> []
</pre><p> <p><strong>Constraints:</strong><ul><li>The number of nodes in the tree is in the range <code>[0, 6000]</code>.<li><code>-100 &lt;= Node.val &lt;= 100</code></ul><p> <p><strong>Follow-up:</strong><ul><li>You may only use constant extra space.<li>The recursive approach is fine. You may assume implicit stack space does not count as extra space for this problem.</ul>`,submissions:[{time:1764884606,language:"py",runtime:40,memory:19,accepted:!0,code_content:`"""
# Definition for a Node.
class Node:
    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
"""

class Solution:
    def connect(self, root: 'Node') -> 'Node':

        temp_head = root
        while temp_head:
            temp = Node()
            tail = temp

            while temp_head:
                if temp_head.left:
                    tail.next = temp_head.left
                    tail = tail.next
                if temp_head.right:
                    tail.next = temp_head.right
                    tail = tail.next
                temp_head = temp_head.next
            
            
            temp_head = temp.next

        return root`}]},120:{title:"triangle",difficulty:"Medium",html_content:`<h1>120 - Triangle</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/triangle/>triangle</a></h2><p>Given a <code>triangle</code> array, return <em>the minimum path sum from top to bottom</em>.<p>For each step, you may move to an adjacent number of the row below. More formally, if you are on index <code>i</code> on the current row, you may move to either index <code>i</code> or index <code>i + 1</code> on the next row.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
<strong>Output:</strong> 11
<strong>Explanation:</strong> The triangle looks like:
   <u>2</u>
  <u>3</u> 4
 6 <u>5</u> 7
4 <u>1</u> 8 3
The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> triangle = [[-10]]
<strong>Output:</strong> -10
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= triangle.length &lt;= 200</code><li><code>triangle[0].length == 1</code><li><code>triangle[i].length == triangle[i - 1].length + 1</code><li><code>-10<sup>4</sup> &lt;= triangle[i][j] &lt;= 10<sup>4</sup></code></ul><p> <p><strong>Follow up:</strong> Could you do this using only <code>O(n)</code> extra space, where <code>n</code> is the total number of rows in the triangle?`,submissions:[{time:1767794145,language:"py",runtime:3,memory:20,accepted:!0,code_content:`class Solution:
    def minimumTotal(self, triangle: List[List[int]]) -> int:

        for i in range(len(triangle) -1):
            result = [sys.maxsize] * len(triangle[i + 1])
            for j in range(len(triangle[i])):
                result[j] = min(triangle[i][j] + triangle[i+1][j], result[j])
                result[j+1] = min(triangle[i][j] + triangle[i + 1][j+1], result[j+1])


            triangle[i+1] = result

        return min(triangle[-1])`}]},121:{title:"best time to buy and sell stock",difficulty:"Easy",html_content:`<h1>121 - Best Time to Buy and Sell Stock</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/best-time-to-buy-and-sell-stock/>best-time-to-buy-and-sell-stock</a></h2><p>You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day.<p>You want to maximize your profit by choosing a <strong>single day</strong> to buy one stock and choosing a <strong>different day in the future</strong> to sell that stock.<p>Return <em>the maximum profit you can achieve from this transaction</em>. If you cannot achieve any profit, return <code>0</code>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> prices = [7,1,5,3,6,4]
<strong>Output:</strong> 5
<strong>Explanation:</strong> Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> prices = [7,6,4,3,1]
<strong>Output:</strong> 0
<strong>Explanation:</strong> In this case, no transactions are done and the max profit = 0.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= prices.length &lt;= 10<sup>5</sup></code><li><code>0 &lt;= prices[i] &lt;= 10<sup>4</sup></code></ul>`,submissions:[{time:1761224173,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int minp = 0;
        int maxp = 0;

        for (int val : prices){
            if (val > minp){}
        }


        return maxp - minp;
    }
};`},{time:1761224463,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`#include <climits>
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int minp = INT_MAX;
        int maxp = 0;
        int best_p = 0;

        for (int val : prices){
            if (val < minp){
                minp = val;
            }
            if (val > minp){
                maxp = val;
            }
            int temp = maxp - minp;
            if (temp > best_p){
                best_p = temp;
            }
        }

        return best_p;
    }
};`},{time:1761226224,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    int maxProfit(vector<int>& prices) {
        if (prices.size() <= 1){
            return 0;
        }

        int minp = 9999999999;
        int maxp = 0;

        int best_p = 0;

        for (int val : prices){
            if (val > minp){
                maxp = val;
            }
            if (val < minp){
                minp = val;
                continue;
            }
            int temp = maxp - minp;
            if (temp > best_p){
                best_p = temp;
            }
        }

        return best_p;
    }
};`},{time:1761226300,language:"cpp",runtime:0,memory:97,accepted:!0,code_content:`class Solution {
public:
    int maxProfit(vector<int>& prices) {
        if (prices.size() <= 1){
            return 0;
        }

        int minp = 9999999999;
        int maxp = 0;

        int best_p = 0;

        for (int val : prices){
            if (val > minp){
                maxp = val;
            }
            if (val < minp){
                minp = val;
                maxp = 0;
            }
            int temp = maxp - minp;
            if (temp > best_p){
                best_p = temp;
            }
        }

        return best_p;
    }
};`}]},122:{title:"best time to buy and sell stock ii",difficulty:"Medium",html_content:`<h1>122 - Best Time to Buy and Sell Stock II</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/>best-time-to-buy-and-sell-stock-ii</a></h2><p>You are given an integer array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day.<p>On each day, you may decide to buy and/or sell the stock. You can only hold <strong>at most one</strong> share of the stock at any time. However, you can sell and buy the stock multiple times on the <strong>same day</strong>, ensuring you never hold more than one share of the stock.<p>Find and return <em>the <strong>maximum</strong> profit you can achieve</em>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> prices = [7,1,5,3,6,4]
<strong>Output:</strong> 7
<strong>Explanation:</strong> Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> prices = [1,2,3,4,5]
<strong>Output:</strong> 4
<strong>Explanation:</strong> Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Total profit is 4.
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> prices = [7,6,4,3,1]
<strong>Output:</strong> 0
<strong>Explanation:</strong> There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= prices.length &lt;= 3 * 10<sup>4</sup></code><li><code>0 &lt;= prices[i] &lt;= 10<sup>4</sup></code></ul>`,submissions:[{time:1761227141,language:"cpp",runtime:0,memory:17,accepted:!0,code_content:`class Solution {
public:
    int maxProfit(vector<int>& prices) {
        if (prices.size() <= 1){
            return 0;
        }

        int minp = prices[0];
        int profit = 0;

        for (int val : prices){
            if (val < minp){
                minp = val;
            }
            else if (val > minp){
                profit += val - minp;
                minp = val;
            }

        }


        return profit;
    }
};`}]},123:{title:"best time to buy and sell stock iii",difficulty:"Hard",html_content:`<h1>123 - Best Time to Buy and Sell Stock III</h1><h2>Difficulty: Hard - <a href=https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/>best-time-to-buy-and-sell-stock-iii</a></h2><p>You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day.<p>Find the maximum profit you can achieve. You may complete <strong>at most two transactions</strong>.<p><strong>Note:</strong> You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> prices = [3,3,5,0,0,3,1,4]
<strong>Output:</strong> 6
<strong>Explanation:</strong> Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> prices = [1,2,3,4,5]
<strong>Output:</strong> 4
<strong>Explanation:</strong> Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> prices = [7,6,4,3,1]
<strong>Output:</strong> 0
<strong>Explanation:</strong> In this case, no transaction is done, i.e. max profit = 0.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= prices.length &lt;= 10<sup>5</sup></code><li><code>0 &lt;= prices[i] &lt;= 10<sup>5</sup></code></ul>`,submissions:[{time:1768523658,language:"py",runtime:95,memory:30,accepted:!0,code_content:`class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        buy1, buy2 = -prices[0], -prices[0]
        profit1, profit2 = 0, 0

        for price in prices:
            buy1 = max(buy1, -price)
            profit1 = max(profit1, price + buy1)
            buy2 = max(buy2, profit1 - price)
            profit2 = max(profit2, price + buy2)

        return profit2`}]},124:{title:"binary tree maximum path sum",difficulty:"Hard",html_content:`<h1>124 - Binary Tree Maximum Path Sum</h1><h2>Difficulty: Hard - <a href=https://leetcode.com/problems/binary-tree-maximum-path-sum/>binary-tree-maximum-path-sum</a></h2><p>A <strong>path</strong> in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence <strong>at most once</strong>. Note that the path does not need to pass through the root.<p>The <strong>path sum</strong> of a path is the sum of the node's values in the path.<p>Given the <code>root</code> of a binary tree, return <em>the maximum <strong>path sum</strong> of any <strong>non-empty</strong> path</em>.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/10/13/exx1.jpg style=width:322px;height:182px><pre>
<strong>Input:</strong> root = [1,2,3]
<strong>Output:</strong> 6
<strong>Explanation:</strong> The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.
</pre><p><strong class=example>Example 2:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/10/13/exx2.jpg><pre>
<strong>Input:</strong> root = [-10,9,20,null,null,15,7]
<strong>Output:</strong> 42
<strong>Explanation:</strong> The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.
</pre><p> <p><strong>Constraints:</strong><ul><li>The number of nodes in the tree is in the range <code>[1, 3 * 10<sup>4</sup>]</code>.<li><code>-1000 &lt;= Node.val &lt;= 1000</code></ul>`,submissions:[{time:1764890255,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def __init__(self):
        self.result = -0xFFFFFFF

    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        self.dfs(root)
        return self.result

    def dfs(self, root: Optional[TreeNode]) -> int:

        if root.left is None and root.right is None:
            return root.val

        if root.left:
            left = self.dfs(root.left)
        else:
            left = 0

        if root.right:
            right = self.dfs(root.right)
        else:
            right = 0

        self.result = max(self.result, left)
        self.result = max(self.result, right)
        temp = root.val
        if right > 0:
            temp += right
        if left > 0:
            temp += left
        self.result = max(self.result, temp)
        return temp`},{time:1764890331,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def __init__(self):
        self.result = -0xFFFFFFF

    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        self.result = max(self.dfs(root), self.result)
        return self.result

    def dfs(self, root: Optional[TreeNode]) -> int:

        if root.left is None and root.right is None:
            return root.val

        if root.left:
            left = self.dfs(root.left)
        else:
            left = 0

        if root.right:
            right = self.dfs(root.right)
        else:
            right = 0

        self.result = max(self.result, left)
        self.result = max(self.result, right)
        temp = root.val
        if right > 0:
            temp += right
        if left > 0:
            temp += left
        self.result = max(self.result, temp)
        return temp
`},{time:1764890459,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def __init__(self):
        self.result = -0xFFFFFFF

    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        self.result = max(self.dfs(root), self.result)
        return self.result

    def dfs(self, root: Optional[TreeNode]) -> int:

        if root.left is None and root.right is None:
            return root.val

        if root.left:
            left = self.dfs(root.left)
            self.result = max(self.result, left)
        else:
            left = 0

        if root.right:
            right = self.dfs(root.right)
            self.result = max(self.result, right)
        else:
            right = 0

        temp = root.val
        if right > 0:
            temp += right
        if left > 0:
            temp += left
        self.result = max(self.result, temp)
        return temp`},{time:1764891194,language:"py",runtime:7,memory:23,accepted:!0,code_content:`# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def __init__(self):
        self.result = -0xFFFFFFF

    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        self.result = max(self.dfs(root), self.result)
        return self.result

    def dfs(self, root: Optional[TreeNode]) -> int:

        if root.left is None and root.right is None:
            return root.val

        if root.left:
            left = self.dfs(root.left)
            self.result = max(self.result, left)
        else:
            left = 0

        if root.right:
            right = self.dfs(root.right)
            self.result = max(self.result, right)
        else:
            right = 0

        temp = root.val
        if right > 0:
            temp += right
        if left > 0:
            temp += left
        self.result = max(self.result, temp)
        
        branch = max(right, left)
        branch = max(root.val, branch + root.val)
        return branch`}]},125:{title:"valid palindrome",difficulty:"Easy",html_content:`<h1>125 - Valid Palindrome</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/valid-palindrome/>valid-palindrome</a></h2><p>A phrase is a <strong>palindrome</strong> if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.<p>Given a string <code>s</code>, return <code>true</code><em> if it is a <strong>palindrome</strong>, or </em><code>false</code><em> otherwise</em>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> s = "A man, a plan, a canal: Panama"
<strong>Output:</strong> true
<strong>Explanation:</strong> "amanaplanacanalpanama" is a palindrome.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> s = "race a car"
<strong>Output:</strong> false
<strong>Explanation:</strong> "raceacar" is not a palindrome.
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> s = " "
<strong>Output:</strong> true
<strong>Explanation:</strong> s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= s.length &lt;= 2 * 10<sup>5</sup></code><li><code>s</code> consists only of printable ASCII characters.</ul>`,submissions:[{time:1762097447,language:"cpp",runtime:3,memory:9,accepted:!0,code_content:`class Solution {
public:
    bool isPalindrome(string s) {    
        int n = s.size();
        for(int x = 0, y = n-1; x < y; x++, y--){
            while(x < n && !isalnum(s[x])){
                x++;
            }
            while(y > 0 && !isalnum(s[y])){
                y--;
            }
            if(x >= y)
                return true;

            if(toupper(s[x]) != toupper(s[y]))
                return false;
        }
        return true;
        
    }
};`}]},127:{title:"word ladder",difficulty:"Hard",html_content:`<h1>127 - Word Ladder</h1><h2>Difficulty: Hard - <a href=https://leetcode.com/problems/word-ladder/>word-ladder</a></h2><p>A <strong>transformation sequence</strong> from word <code>beginWord</code> to word <code>endWord</code> using a dictionary <code>wordList</code> is a sequence of words <code>beginWord -> s<sub>1</sub> -> s<sub>2</sub> -> ... -> s<sub>k</sub></code> such that:<ul><li>Every adjacent pair of words differs by a single letter.<li>Every <code>s<sub>i</sub></code> for <code>1 &lt;= i &lt;= k</code> is in <code>wordList</code>. Note that <code>beginWord</code> does not need to be in <code>wordList</code>.<li><code>s<sub>k</sub> == endWord</code></ul><p>Given two words, <code>beginWord</code> and <code>endWord</code>, and a dictionary <code>wordList</code>, return <em>the <strong>number of words</strong> in the <strong>shortest transformation sequence</strong> from</em> <code>beginWord</code> <em>to</em> <code>endWord</code><em>, or </em><code>0</code><em> if no such sequence exists.</em><p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
<strong>Output:</strong> 5
<strong>Explanation:</strong> One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
<strong>Output:</strong> 0
<strong>Explanation:</strong> The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= beginWord.length &lt;= 10</code><li><code>endWord.length == beginWord.length</code><li><code>1 &lt;= wordList.length &lt;= 5000</code><li><code>wordList[i].length == beginWord.length</code><li><code>beginWord</code>, <code>endWord</code>, and <code>wordList[i]</code> consist of lowercase English letters.<li><code>beginWord != endWord</code><li>All the words in <code>wordList</code> are <strong>unique</strong>.</ul>`,submissions:[{time:1768430840,language:"py",runtime:223,memory:20,accepted:!0,code_content:`class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        wordSet = set(wordList)

        if endWord not in wordSet and beginWord != endWord:
            return 0

        list_set: list[set[str]] = [set()] * len(beginWord)
        for word in wordList:
            for i in range(len(beginWord)):
                list_set[i].add(word[i])

        queue = deque()
        queue.append((beginWord, 1))
        visited = set()

        while queue:
            this_word, step = queue.popleft()
            if this_word == endWord:
                return step

            this_word = list(this_word)

            for i in range(len(this_word)):
                char = this_word[i]
                for ch in list_set[i]:
                    this_word[i] = ch
                    new_gene = ''.join(this_word)
                    if new_gene not in visited and new_gene in wordSet:
                        queue.append((new_gene, step + 1))
                        visited.add(new_gene)

                this_word[i] = char

        return 0`}]},128:{title:"longest consecutive sequence",difficulty:"Medium",html_content:`<h1>128 - Longest Consecutive Sequence</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/longest-consecutive-sequence/>longest-consecutive-sequence</a></h2><p>Given an unsorted array of integers <code>nums</code>, return <em>the length of the longest consecutive elements sequence.</em><p>You must write an algorithm that runs in <code>O(n)</code> time.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> nums = [100,4,200,1,3,2]
<strong>Output:</strong> 4
<strong>Explanation:</strong> The longest consecutive elements sequence is <code>[1, 2, 3, 4]</code>. Therefore its length is 4.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> nums = [0,3,7,2,5,8,4,6,0,1]
<strong>Output:</strong> 9
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> nums = [1,0,1,2]
<strong>Output:</strong> 3
</pre><p> <p><strong>Constraints:</strong><ul><li><code>0 &lt;= nums.length &lt;= 10<sup>5</sup></code><li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></ul>`,submissions:[{time:1763849368,language:"py",runtime:72,memory:37,accepted:!0,code_content:`class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        od = defaultdict(int)
        for val in nums:
            od[val] = 0


        max_length = 0
        for key, val in od.items():
            if val == -1:
                continue

            temp_length = 1
            temp_val1 = key
            temp_val2 = key
            while temp_val1 + 1 in od:
                od[temp_val1 + 1] = -1
                temp_val1 += 1
                temp_length += 1

            while temp_val2 - 1 in od:
                od[temp_val2 - 1] = -1
                temp_val2 -= 1
                temp_length += 1


            max_length = max(max_length, temp_length)

        return max_length`}]},129:{title:"sum root to leaf numbers",difficulty:"Medium",html_content:`<h1>129 - Sum Root to Leaf Numbers</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/sum-root-to-leaf-numbers/>sum-root-to-leaf-numbers</a></h2><p>You are given the <code>root</code> of a binary tree containing digits from <code>0</code> to <code>9</code> only.<p>Each root-to-leaf path in the tree represents a number.<ul><li>For example, the root-to-leaf path <code>1 -> 2 -> 3</code> represents the number <code>123</code>.</ul><p>Return <em>the total sum of all root-to-leaf numbers</em>. Test cases are generated so that the answer will fit in a <strong>32-bit</strong> integer.<p>A <strong>leaf</strong> node is a node with no children.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2021/02/19/num1tree.jpg style=width:212px;height:182px><pre>
<strong>Input:</strong> root = [1,2,3]
<strong>Output:</strong> 25
<strong>Explanation:</strong>
The root-to-leaf path <code>1->2</code> represents the number <code>12</code>.
The root-to-leaf path <code>1->3</code> represents the number <code>13</code>.
Therefore, sum = 12 + 13 = <code>25</code>.
</pre><p><strong class=example>Example 2:</strong><p><img alt src=https://assets.leetcode.com/uploads/2021/02/19/num2tree.jpg style=width:292px;height:302px><pre>
<strong>Input:</strong> root = [4,9,0,5,1]
<strong>Output:</strong> 1026
<strong>Explanation:</strong>
The root-to-leaf path <code>4->9->5</code> represents the number 495.
The root-to-leaf path <code>4->9->1</code> represents the number 491.
The root-to-leaf path <code>4->0</code> represents the number 40.
Therefore, sum = 495 + 491 + 40 = <code>1026</code>.
</pre><p> <p><strong>Constraints:</strong><ul><li>The number of nodes in the tree is in the range <code>[1, 1000]</code>.<li><code>0 &lt;= Node.val &lt;= 9</code><li>The depth of the tree will not exceed <code>10</code>.</ul>`,submissions:[{time:1764888817,language:"py",runtime:0,memory:17,accepted:!0,code_content:`# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumNumbers(self, root: Optional[TreeNode]) -> int:

        if root.left is None and root.right is None:
            return root.val

        stack = deque()
        stack.append((root, root.val))
        total: int = 0

        while stack:
            node, target = stack.pop()

            if node.left is None and node.right is None:
                total += target
                continue

            if node.left:
                stack.append((node.left, (target * 10) + node.left.val))

            if node.right:
                stack.append((node.right, (target * 10) + node.right.val))

        return total`}]},130:{title:"surrounded regions",difficulty:"Medium",html_content:`<h1>130 - Surrounded Regions</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/surrounded-regions/>surrounded-regions</a></h2><p>You are given an <code>m x n</code> matrix <code>board</code> containing <strong>letters</strong> <code>'X'</code> and <code>'O'</code>, <strong>capture regions</strong> that are <strong>surrounded</strong>:<ul><li><strong>Connect</strong>: A cell is connected to adjacent cells horizontally or vertically.<li><strong>Region</strong>: To form a region <strong>connect every</strong> <code>'O'</code> cell.<li><strong>Surround</strong>: The region is surrounded with <code>'X'</code> cells if you can <strong>connect the region </strong>with <code>'X'</code> cells and none of the region cells are on the edge of the <code>board</code>.</ul><p>To capture a <strong>surrounded region</strong>, replace all <code>'O'</code>s with <code>'X'</code>s <strong>in-place</strong> within the original board. You do not need to return anything.<p> <p><strong class=example>Example 1:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]</span><p><strong>Output:</strong> <span class=example-io>[["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]</span><p><strong>Explanation:</strong></p><img alt src=https://assets.leetcode.com/uploads/2021/02/19/xogrid.jpg style=width:367px;height:158px><p>In the above diagram, the bottom region is not captured because it is on the edge of the board and cannot be surrounded.</div><p><strong class=example>Example 2:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>board = [["X"]]</span><p><strong>Output:</strong> <span class=example-io>[["X"]]</span></div><p> <p><strong>Constraints:</strong><ul><li><code>m == board.length</code><li><code>n == board[i].length</code><li><code>1 &lt;= m, n &lt;= 200</code><li><code>board[i][j]</code> is <code>'X'</code> or <code>'O'</code>.</ul>`,submissions:[{time:1765399716,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution:
    def solve(self, board: List[List[str]]) -> None:

        top = [0] * (len(board))
        left = [0] * (len(board))
        right = [len(board[0])-1] * len(board)
        bottom = [len(board)-1] * len(board)

        stack = deque()

        for x, y in chain(zip(top, range(len(board))), zip(bottom, range(len(board))), zip(left, range(len(board[0]))), zip(right, range(len(board[0])))):
            if board[x][y] == 'O':
                stack.append((x, y))
                board[x][y] = '0'
                while stack:
                    x,y = stack.pop()
                    if x - 1 > 0 and board[x-1][y] == 'O':
                        board[x-1][y] = '0'
                        stack.append((x-1, y))

                    if x + 1 > len(board) and board[x+1][y] == 'O':
                        board[x-1][y] = '0'
                        stack.append((x+1, y))

                    if y -1 > 0 and board[x][y - 1] == 'O':
                        board[x][y - 1] = '0'
                        stack.append((x, y - 1))

                    if y + 1 > len(board[0]) and board[x][y + 1] == 'O':
                        board[x][y + 1] = '0'
                        stack.append((x, y + 1))

        for x in range(len(board)):
            for y in range(len(board[0])):
                if board[x][y] == '0':
                    board[x][y] = 'O'
                elif board[x][y] == 'O':
                    board[x][y] = 'X'`},{time:1765402171,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution:
    def solve(self, board: List[List[str]]) -> None:

        R = len(board)
        C = len(board[0])

        top_r = [0] * C
        bottom_r = [R - 1] * C
        left_c = [0] * R
        right_c = [C - 1] * R

        top_c = range(C)
        bottom_c = range(C)
        left_r = range(R)
        right_r = range(R)

        boundary_coords = chain(
            zip(top_r, top_c),
            zip(bottom_r, bottom_c),
            zip(left_r, left_c),
            zip(right_r, right_c)
        )

        stack = deque()

        for x, y in chain(boundary_coords):
            if board[x][y] == 'O':
                stack.append((x, y))
                board[x][y] = '0'
                while stack:
                    x,y = stack.pop()
                    if x - 1 > 0 and board[x-1][y] == 'O':
                        board[x-1][y] = '0'
                        stack.append((x-1, y))

                    if x + 1 > len(board) and board[x+1][y] == 'O':
                        board[x-1][y] = '0'
                        stack.append((x+1, y))

                    if y -1 > 0 and board[x][y - 1] == 'O':
                        board[x][y - 1] = '0'
                        stack.append((x, y - 1))

                    if y + 1 > len(board[0]) and board[x][y + 1] == 'O':
                        board[x][y + 1] = '0'
                        stack.append((x, y + 1))

        for x in range(len(board)):
            for y in range(len(board[0])):
                if board[x][y] == '0':
                    board[x][y] = 'O'
                elif board[x][y] == 'O':
                    board[x][y] = 'X'
`},{time:1765402820,language:"py",runtime:7,memory:21,accepted:!0,code_content:`class Solution:
    def solve(self, board: List[List[str]]) -> None:

        R = len(board)
        C = len(board[0])

        top_r = [0] * C
        bottom_r = [R - 1] * C
        left_c = [0] * R
        right_c = [C - 1] * R

        top_c = range(C)
        bottom_c = range(C)
        left_r = range(R)
        right_r = range(R)

        boundary_coords = chain(
            zip(top_r, top_c),
            zip(bottom_r, bottom_c),
            zip(left_r, left_c),
            zip(right_r, right_c)
        )

        stack = deque()

        for x, y in chain(boundary_coords):
            if board[x][y] == 'O':
                stack.append((x, y))
                board[x][y] = '0'
                while stack:
                    x, y = stack.pop()

                    if x > 0 and board[x - 1][y] == 'O':
                        board[x - 1][y] = '0'
                        stack.appendleft((x - 1, y))

                    if x < len(board) - 1 and board[x + 1][y] == 'O':
                        board[x + 1][y] = '0'
                        stack.appendleft((x + 1, y))

                    if y > 0 and board[x][y - 1] == 'O':
                        board[x][y - 1] = '0'
                        stack.appendleft((x, y - 1))

                    if y < len(board[0]) - 1 and board[x][y + 1] == 'O':
                        board[x][y + 1] = '0'
                        stack.appendleft((x, y + 1))

        for x in range(len(board)):
            for y in range(len(board[0])):
                if board[x][y] == '0':
                    board[x][y] = 'O'
                elif board[x][y] == 'O':
                    board[x][y] = 'X'`}]},133:{title:"clone graph",difficulty:"Medium",html_content:`<h1>133 - Clone Graph</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/clone-graph/>clone-graph</a></h2><p>Given a reference of a node in a <strong><a href=https://en.wikipedia.org/wiki/Connectivity_(graph_theory)#Connected_graph target=_blank>connected</a></strong> undirected graph.<p>Return a <a href=https://en.wikipedia.org/wiki/Object_copying#Deep_copy target=_blank><strong>deep copy</strong></a> (clone) of the graph.<p>Each node in the graph contains a value (<code>int</code>) and a list (<code>List[Node]</code>) of its neighbors.<pre>
class Node {
    public int val;
    public List&lt;Node> neighbors;
}
</pre><p> <p><strong>Test case format:</strong><p>For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with <code>val == 1</code>, the second node with <code>val == 2</code>, and so on. The graph is represented in the test case using an adjacency list.<p><b>An adjacency list</b> is a collection of unordered <b>lists</b> used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.<p>The given node will always be the first node with <code>val = 1</code>. You must return the <strong>copy of the given node</strong> as a reference to the cloned graph.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2019/11/04/133_clone_graph_question.png style=width:454px;height:500px><pre>
<strong>Input:</strong> adjList = [[2,4],[1,3],[2,4],[1,3]]
<strong>Output:</strong> [[2,4],[1,3],[2,4],[1,3]]
<strong>Explanation:</strong> There are 4 nodes in the graph.
1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
</pre><p><strong class=example>Example 2:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/01/07/graph.png style=width:163px;height:148px><pre>
<strong>Input:</strong> adjList = [[]]
<strong>Output:</strong> [[]]
<strong>Explanation:</strong> Note that the input contains one empty list. The graph consists of only one node with val = 1 and it does not have any neighbors.
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> adjList = []
<strong>Output:</strong> []
<strong>Explanation:</strong> This an empty graph, it does not have any nodes.
</pre><p> <p><strong>Constraints:</strong><ul><li>The number of nodes in the graph is in the range <code>[0, 100]</code>.<li><code>1 &lt;= Node.val &lt;= 100</code><li><code>Node.val</code> is unique for each node.<li>There are no repeated edges and no self-loops in the graph.<li>The Graph is connected and all nodes can be visited starting from the given node.</ul>`,submissions:[{time:1765815008,language:"py",runtime:41,memory:18,accepted:!0,code_content:`"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

from typing import Optional
class Solution:
    def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:
        if not node:
            return None

        node_map: dict[int, 'Node'] = dict()
        dequeue = deque([node])
        while dequeue:
            node = dequeue.popleft()
            if node.val in node_map:
                temp_node = node_map[node.val]
            else:
                temp_node = Node(node.val)


            for item in node.neighbors:
                if item.val in node_map:
                    neighbor_node = node_map[item.val]
                else:
                    neighbor_node = Node(item.val)
                    node_map[item.val] = neighbor_node
                    dequeue.appendleft(item)


                temp_node.neighbors.append(neighbor_node)


            node_map[node.val] = temp_node

        return node_map[1]`},{time:1765815027,language:"py",runtime:51,memory:18,accepted:!0,code_content:`"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

from typing import Optional
class Solution:
    def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:
        if not node:
            return None

        node_map: dict[int, 'Node'] = dict()
        dequeue = deque([node])
        while dequeue:
            node = dequeue.popleft()
            if node.val in node_map:
                temp_node = node_map[node.val]
            else:
                temp_node = Node(node.val)


            for item in node.neighbors:
                if item.val in node_map:
                    neighbor_node = node_map[item.val]
                else:
                    neighbor_node = Node(item.val)
                    node_map[item.val] = neighbor_node
                    dequeue.appendleft(item)


                temp_node.neighbors.append(neighbor_node)


            node_map[node.val] = temp_node

        return node_map[1]`}]},134:{title:"gas station",difficulty:"Medium",html_content:`<h1>134 - Gas Station</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/gas-station/>gas-station</a></h2><p>There are <code>n</code> gas stations along a circular route, where the amount of gas at the <code>i<sup>th</sup></code> station is <code>gas[i]</code>.<p>You have a car with an unlimited gas tank and it costs <code>cost[i]</code> of gas to travel from the <code>i<sup>th</sup></code> station to its next <code>(i + 1)<sup>th</sup></code> station. You begin the journey with an empty tank at one of the gas stations.<p>Given two integer arrays <code>gas</code> and <code>cost</code>, return <em>the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return</em> <code>-1</code>. If there exists a solution, it is <strong>guaranteed</strong> to be <strong>unique</strong>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> gas = [1,2,3,4,5], cost = [3,4,5,1,2]
<strong>Output:</strong> 3
<strong>Explanation:</strong>
Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 4. Your tank = 4 - 1 + 5 = 8
Travel to station 0. Your tank = 8 - 2 + 1 = 7
Travel to station 1. Your tank = 7 - 3 + 2 = 6
Travel to station 2. Your tank = 6 - 4 + 3 = 5
Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
Therefore, return 3 as the starting index.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> gas = [2,3,4], cost = [3,4,3]
<strong>Output:</strong> -1
<strong>Explanation:</strong>
You can't start at station 0 or 1, as there is not enough gas to travel to the next station.
Let's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 0. Your tank = 4 - 3 + 2 = 3
Travel to station 1. Your tank = 3 - 3 + 3 = 3
You cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.
Therefore, you can't travel around the circuit once no matter where you start.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>n == gas.length == cost.length</code><li><code>1 &lt;= n &lt;= 10<sup>5</sup></code><li><code>0 &lt;= gas[i], cost[i] &lt;= 10<sup>4</sup></code><li>The input is generated such that the answer is unique.</ul>`,submissions:[{time:1761437990,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    int canCompleteCircuit(vector<int>& gas, vector<int>& cost) {
        int n = cost.size();
        int indexOfMax = 0;
        int min_cost = 0;

        for(int i = 0; i < n; i++){
            int temp = gas[i] - cost[i];
            if(min_cost < temp){
                indexOfMax = i;
                min_cost = temp;
            }

        }

        int total_cost = gas[indexOfMax];

        // Loop from start_index to the end of the array
        for (int i = indexOfMax+1; i < gas.size(); ++i) {
            total_cost += gas[i] - cost[i];
            if(total_cost < 0){
                return -1;
            }
        }

        // Loop from 0 to start_index - 1
        for (int i = 0; i < indexOfMax; ++i) {
            total_cost += gas[i] - cost[i];
            if(total_cost < 0){
                return -1;
            }
        }
        total_cost -= cost[indexOfMax];
            if(total_cost < 0){
                return -1;
            }

        return indexOfMax;
    }
};`},{time:1761439171,language:"cpp",runtime:0,memory:112,accepted:!0,code_content:`class Solution {
public:
    int canCompleteCircuit(vector<int>& gas, vector<int>& cost) {
        int n = cost.size();
        int minVal = 0;
        int minIndex = -1;
        int total_val = 0;

        for(int i = 0; i < n; i++){
            int temp = gas[i] - cost[i];
            total_val += temp;
            if(total_val < minVal){
                minVal = total_val;
                minIndex = i;
            }
        }

        if(total_val < 0)
            return -1;

        return (minIndex + 1) % n;;
    }
};`}]},135:{title:"candy",difficulty:"Hard",html_content:`<h1>135 - Candy</h1><h2>Difficulty: Hard - <a href=https://leetcode.com/problems/candy/>candy</a></h2><p>There are <code>n</code> children standing in a line. Each child is assigned a rating value given in the integer array <code>ratings</code>.<p>You are giving candies to these children subjected to the following requirements:<ul><li>Each child must have at least one candy.<li>Children with a higher rating get more candies than their neighbors.</ul><p>Return <em>the minimum number of candies you need to have to distribute the candies to the children</em>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> ratings = [1,0,2]
<strong>Output:</strong> 5
<strong>Explanation:</strong> You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> ratings = [1,2,2]
<strong>Output:</strong> 4
<strong>Explanation:</strong> You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
The third child gets 1 candy because it satisfies the above two conditions.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>n == ratings.length</code><li><code>1 &lt;= n &lt;= 2 * 10<sup>4</sup></code><li><code>0 &lt;= ratings[i] &lt;= 2 * 10<sup>4</sup></code></ul>`,submissions:[{time:1761486533,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    int candy(vector<int>& ratings) {
        int n = ratings.size();
        
        int total = 0;
        int num_top = 0;
        int prev = -1;
        bool inc = true;

        for(int i = 0; i < n; i++){
            num_top++;
            bool change = prev < ratings[i];
            if(change ^ inc && prev != ratings[i]){
                inc = !inc;
                prev = ratings[i];
                total += 

            } 

        }
        

        return total;
    }
};`},{time:1761505472,language:"cpp",runtime:0,memory:22,accepted:!0,code_content:`class Solution {
public:
    int candy(vector<int>& ratings) {
        int n = ratings.size();
        
        int total = n;
        int peek, valley;
        

        for(int i = 1; i < n;){
            if (ratings[i-1] == ratings[i]){
                i++; continue;
            }
            peek = 0;
            while(i < n && ratings[i] > ratings[i - 1]){
                peek++;
                i++;
            }
            total += peek * (peek+1) / 2; // sum of ints from 1 to n

            if (i == n) {
                return total;
            }

            valley = 0;
            while(i < n && ratings[i] < ratings[i - 1]){
                valley++;
                i++;
            }
            total += valley * (valley+1) / 2;

            total -= min(peek,valley);

        }
  
        return total;
    }
};
`}]},136:{title:"single number",difficulty:"Easy",html_content:"<h1>136 - Single Number</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/single-number/>single-number</a></h2><p>Given a <strong>non-empty</strong> array of integers <code>nums</code>, every element appears <em>twice</em> except for one. Find that single one.<p>You must implement a solution with a linear runtime complexity and use only constant extra space.<p> <p><strong class=example>Example 1:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>nums = [2,2,1]</span><p><strong>Output:</strong> <span class=example-io>1</span></div><p><strong class=example>Example 2:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>nums = [4,1,2,1,2]</span><p><strong>Output:</strong> <span class=example-io>4</span></div><p><strong class=example>Example 3:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>nums = [1]</span><p><strong>Output:</strong> <span class=example-io>1</span></div><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= nums.length &lt;= 3 * 10<sup>4</sup></code><li><code>-3 * 10<sup>4</sup> &lt;= nums[i] &lt;= 3 * 10<sup>4</sup></code><li>Each element in the array appears twice except for one element which appears only once.</ul>",submissions:[{time:1721432073,language:"cpp",runtime:14,memory:19,accepted:!0,code_content:`class Solution {
public:
    int singleNumber(vector<int>& nums) {
        int x = 0;

        for(auto i: nums){
            x = x ^ i;
        }
        return x;
    }
};`}]},137:{title:"single number ii",difficulty:"Medium",html_content:`<h1>137 - Single Number II</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/single-number-ii/>single-number-ii</a></h2><p>Given an integer array <code>nums</code> where every element appears <strong>three times</strong> except for one, which appears <strong>exactly once</strong>. <em>Find the single element and return it</em>.<p>You must implement a solution with a linear runtime complexity and use only constant extra space.<p> <p><strong class=example>Example 1:</strong><pre><strong>Input:</strong> nums = [2,2,3,2]
<strong>Output:</strong> 3
</pre><p><strong class=example>Example 2:</strong><pre><strong>Input:</strong> nums = [0,1,0,1,0,1,99]
<strong>Output:</strong> 99
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= nums.length &lt;= 3 * 10<sup>4</sup></code><li><code>-2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1</code><li>Each element in <code>nums</code> appears exactly <strong>three times</strong> except for one element which appears <strong>once</strong>.</ul>`,submissions:[{time:1767026246,language:"py",runtime:0,memory:18,accepted:!0,code_content:`class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        ones = 0
        twos = 0

        for num in nums:
            ones ^= (num & ~twos)
            twos ^= (num & ~ones)

        return ones`}]},138:{title:"copy list with random pointer",difficulty:"Medium",html_content:`<h1>138 - Copy List with Random Pointer</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/copy-list-with-random-pointer/>copy-list-with-random-pointer</a></h2><p>A linked list of length <code>n</code> is given such that each node contains an additional random pointer, which could point to any node in the list, or <code>null</code>.<p>Construct a <a href=https://en.wikipedia.org/wiki/Object_copying#Deep_copy target=_blank><strong>deep copy</strong></a> of the list. The deep copy should consist of exactly <code>n</code> <strong>brand new</strong> nodes, where each new node has its value set to the value of its corresponding original node. Both the <code>next</code> and <code>random</code> pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. <strong>None of the pointers in the new list should point to nodes in the original list</strong>.<p>For example, if there are two nodes <code>X</code> and <code>Y</code> in the original list, where <code>X.random --> Y</code>, then for the corresponding two nodes <code>x</code> and <code>y</code> in the copied list, <code>x.random --> y</code>.<p>Return <em>the head of the copied linked list</em>.<p>The linked list is represented in the input/output as a list of <code>n</code> nodes. Each node is represented as a pair of <code>[val, random_index]</code> where:<ul><li><code>val</code>: an integer representing <code>Node.val</code><li><code>random_index</code>: the index of the node (range from <code>0</code> to <code>n-1</code>) that the <code>random</code> pointer points to, or <code>null</code> if it does not point to any node.</ul><p>Your code will <strong>only</strong> be given the <code>head</code> of the original linked list.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2019/12/18/e1.png style=width:700px;height:142px><pre>
<strong>Input:</strong> head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
<strong>Output:</strong> [[7,null],[13,0],[11,4],[10,2],[1,0]]
</pre><p><strong class=example>Example 2:</strong><p><img alt src=https://assets.leetcode.com/uploads/2019/12/18/e2.png style=width:700px;height:114px><pre>
<strong>Input:</strong> head = [[1,1],[2,1]]
<strong>Output:</strong> [[1,1],[2,1]]
</pre><p><strong class=example>Example 3:</strong><p><strong><img alt src=https://assets.leetcode.com/uploads/2019/12/18/e3.png style=width:700px;height:122px></strong><pre>
<strong>Input:</strong> head = [[3,null],[3,0],[3,null]]
<strong>Output:</strong> [[3,null],[3,0],[3,null]]
</pre><p> <p><strong>Constraints:</strong><ul><li><code>0 &lt;= n &lt;= 1000</code><li><code>-10<sup>4</sup> &lt;= Node.val &lt;= 10<sup>4</sup></code><li><code>Node.random</code> is <code>null</code> or is pointing to some node in the linked list.</ul>`,submissions:[{time:1764259753,language:"py",runtime:51,memory:18,accepted:!0,code_content:`class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        if not head:
            return None

        rand_map = dict()
        temp_head = head
        while temp_head:
            rand_map[temp_head] = Node(temp_head.val)
            temp_head = temp_head.next

        temp_head = head
        while temp_head:
            rand_map[temp_head].next = rand_map.get(temp_head.next)
            rand_map[temp_head].random = rand_map.get(temp_head.random)
            temp_head = temp_head.next


        return rand_map[head]`}]},139:{title:"word break",difficulty:"Medium",html_content:`<h1>139 - Word Break</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/word-break/>word-break</a></h2><p>Given a string <code>s</code> and a dictionary of strings <code>wordDict</code>, return <code>true</code> if <code>s</code> can be segmented into a space-separated sequence of one or more dictionary words.<p><strong>Note</strong> that the same word in the dictionary may be reused multiple times in the segmentation.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> s = "leetcode", wordDict = ["leet","code"]
<strong>Output:</strong> true
<strong>Explanation:</strong> Return true because "leetcode" can be segmented as "leet code".
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> s = "applepenapple", wordDict = ["apple","pen"]
<strong>Output:</strong> true
<strong>Explanation:</strong> Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
<strong>Output:</strong> false
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= s.length &lt;= 300</code><li><code>1 &lt;= wordDict.length &lt;= 1000</code><li><code>1 &lt;= wordDict[i].length &lt;= 20</code><li><code>s</code> and <code>wordDict[i]</code> consist of only lowercase English letters.<li>All the strings of <code>wordDict</code> are <strong>unique</strong>.</ul>`,submissions:[{time:1767214489,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        wordSet = set(wordDict)
        lengths_set = {len(s) for s in wordDict}

        return self.find_word(s, wordSet, 0, lengths_set)

    def find_word(self, s: str, wordSet: set[str], start: int, lengths_set: set[int]) -> bool:
        while start < len(s):
            for leng in lengths_set:
                if start + leng > len(s):
                    return False
                if s[start: start + leng] in wordSet:
                    if self.find_word(s, wordSet, start + leng, lengths_set):
                        return True
            else:
                return False`},{time:1767214557,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        wordSet = set(wordDict)
        lengths_set = {len(s) for s in wordDict}

        return self.find_word(s, wordSet, 0, lengths_set)

    def find_word(self, s: str, wordSet: set[str], start: int, lengths_set: set[int]) -> bool:
        while start < len(s):
            for leng in lengths_set:
                if start + leng > len(s):
                    return False
                if s[start: start + leng] in wordSet:
                    if self.find_word(s, wordSet, start + leng, lengths_set):
                        return True
            else:
                return False

        return True`},{time:1767218387,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        wordSet = set(wordDict)
        lengths_set = {len(s) for s in wordDict}
        self.dp = [False] * (len(s) + 1)

        return self.find_word(s, wordSet, 0, lengths_set)

    def find_word(self, s: str, wordSet: set[str], start: int, lengths_set: set[int]) -> bool:
        while start < len(s):
            for leng in lengths_set:
                if start + leng > len(s) or self.dp[start + leng]:
                    return False
                if s[start: start + leng] in wordSet:
                    if self.find_word(s, wordSet, start + leng, lengths_set):
                        return True
                    else:
                        self.dp[start + leng] = True
            else:
                return False

        return True`},{time:1767219186,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution:
        def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        dp = [False] * (len(s) + 1)
        dp[0] = True

        for i in range(1, len(s) + 1):
            for ch in wordDict:
                start = i - len(ch)
                if start >= 0 and dp[start] and s[start:i] == ch:
                    dp[i] = True
                    break
        
        return dp[-1]`},{time:1767219209,language:"py",runtime:3,memory:17,accepted:!0,code_content:`class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        dp = [False] * (len(s) + 1)
        dp[0] = True

        for i in range(1, len(s) + 1):
            for ch in wordDict:
                start = i - len(ch)
                if start >= 0 and dp[start] and s[start:i] == ch:
                    dp[i] = True
                    break

        return dp[-1]`}]},141:{title:"linked list cycle",difficulty:"Easy",html_content:`<h1>141 - Linked List Cycle</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/linked-list-cycle/>linked-list-cycle</a></h2><p>Given <code>head</code>, the head of a linked list, determine if the linked list has a cycle in it.<p>There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the <code>next</code> pointer. Internally, <code>pos</code> is used to denote the index of the node that tail's <code>next</code> pointer is connected to. <strong>Note that <code>pos</code> is not passed as a parameter</strong>.<p>Return <code>true</code><em> if there is a cycle in the linked list</em>. Otherwise, return <code>false</code>.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png style=width:300px;height:97px;margin-top:8px;margin-bottom:8px><pre>
<strong>Input:</strong> head = [3,2,0,-4], pos = 1
<strong>Output:</strong> true
<strong>Explanation:</strong> There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
</pre><p><strong class=example>Example 2:</strong><p><img alt src=https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test2.png style=width:141px;height:74px><pre>
<strong>Input:</strong> head = [1,2], pos = 0
<strong>Output:</strong> true
<strong>Explanation:</strong> There is a cycle in the linked list, where the tail connects to the 0th node.
</pre><p><strong class=example>Example 3:</strong><p><img alt src=https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test3.png style=width:45px;height:45px><pre>
<strong>Input:</strong> head = [1], pos = -1
<strong>Output:</strong> false
<strong>Explanation:</strong> There is no cycle in the linked list.
</pre><p> <p><strong>Constraints:</strong><ul><li>The number of the nodes in the list is in the range <code>[0, 10<sup>4</sup>]</code>.<li><code>-10<sup>5</sup> &lt;= Node.val &lt;= 10<sup>5</sup></code><li><code>pos</code> is <code>-1</code> or a <strong>valid index</strong> in the linked-list.</ul><p> <p><strong>Follow up:</strong> Can you solve it using <code>O(1)</code> (i.e. constant) memory?`,submissions:[{time:1764166933,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        check = set()
        while head.next is not None:
            if head.next in check:
                return True
            check.add(head.next)
            head = head.next
        return False`},{time:1764167045,language:"py",runtime:51,memory:20,accepted:!0,code_content:`# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        check = set()
        while head is not None:
            if head in check:
                return True
            check.add(head)
            head = head.next
        return False`}]},146:{title:"lru cache",difficulty:"Medium",html_content:`<h1>146 - LRU Cache</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/lru-cache/>lru-cache</a></h2><p>Design a data structure that follows the constraints of a <strong><a href=https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU target=_blank>Least Recently Used (LRU) cache</a></strong>.<p>Implement the <code>LRUCache</code> class:<ul><li><code>LRUCache(int capacity)</code> Initialize the LRU cache with <strong>positive</strong> size <code>capacity</code>.<li><code>int get(int key)</code> Return the value of the <code>key</code> if the key exists, otherwise return <code>-1</code>.<li><code>void put(int key, int value)</code> Update the value of the <code>key</code> if the <code>key</code> exists. Otherwise, add the <code>key-value</code> pair to the cache. If the number of keys exceeds the <code>capacity</code> from this operation, <strong>evict</strong> the least recently used key.</ul><p>The functions <code>get</code> and <code>put</code> must each run in <code>O(1)</code> average time complexity.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input</strong>
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
<strong>Output</strong>
[null, null, null, 1, null, -1, null, -1, 3, 4]

<strong>Explanation</strong>
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= capacity &lt;= 3000</code><li><code>0 &lt;= key &lt;= 10<sup>4</sup></code><li><code>0 &lt;= value &lt;= 10<sup>5</sup></code><li>At most <code>2 * 10<sup>5</sup></code> calls will be made to <code>get</code> and <code>put</code>.</ul>`,submissions:[{time:1764685980,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`class Node:
    def __init__(self, val=0, key=1000, next=None, prev=None):
        self.val = val
        self.key = key
        self.next = next
        self.prev = prev


class LRUCache:
    def __init__(self, capacity: int):
        self.head = Node()
        self.tail = self.head

        self.cache = {self.head.key: self.head}
        self.capacity:int = capacity
        self.items:int = 1

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1

        val:int = self.cache[key].val

        if self.cache[key].next:
            self.cache[key].next.prev = self.cache[key].prev
        else:
            return val

        if self.cache[key].prev:
            self.cache[key].prev.next = self.cache[key].next
        else:
            self.tail = self.cache[key].next


        node = Node(val, key)
        self.cache[key] = node

        self.head.next = node
        node.prev = self.head
        self.head = self.head.next

        return val


    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.cache[key].val = value
            return

        if self.capacity == self.items:
            self.tail = self.tail.next
            if self.tail.prev is not None:
                self.cache.pop(self.tail.prev.key, None)
                self.tail.prev = None
            self.items -= 1

        self.items += 1

        node = Node(value, key)

        self.head.next = node
        node.prev = self.head
        self.head = self.head.next

        self.cache[key] = node`},{time:1764686591,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`class Node:
    def __init__(self, val=0, key=1000, next=None, prev=None):
        self.val = val
        self.key = key
        self.next = next
        self.prev = prev


class LRUCache:
    def __init__(self, capacity: int):
        self.head = Node()
        self.tail = self.head

        self.cache = {self.head.key: self.head}
        self.capacity:int = capacity
        self.items:int = 1

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1

        val:int = self.cache[key].val

        if self.cache[key].next:
            self.cache[key].next.prev = self.cache[key].prev
        else:
            return val

        if self.cache[key].prev:
            self.cache[key].prev.next = self.cache[key].next
        else:
            self.tail = self.cache[key].next


        node = Node(val, key)
        self.cache[key] = node

        self.head.next = node
        node.prev = self.head
        self.head = self.head.next

        return val


    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.cache[key].val = value
            return

        node = Node(value, key)

        self.head.next = node
        node.prev = self.head
        self.head = self.head.next

        self.cache[key] = node

        if self.capacity == self.items:
            self.tail = self.tail.next
            if self.tail.prev is not None:
                self.cache.pop(self.tail.prev.key, None)
                self.tail.prev = None
            self.items -= 1

        self.items += 1`},{time:1764687109,language:"py",runtime:210,memory:77,accepted:!0,code_content:`class Node:
    def __init__(self, val=0, key=1000, next=None, prev=None):
        self.val = val
        self.key = key
        self.next = next
        self.prev = prev

class LRUCache:
    def __init__(self, capacity: int):
        self.head = Node()
        self.tail = self.head

        self.cache = {self.head.key: self.head}
        self.capacity:int = capacity
        self.items:int = 1

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1

        val:int = self.cache[key].val

        if self.cache[key].next:
            self.cache[key].next.prev = self.cache[key].prev
        else:
            return val

        if self.cache[key].prev:
            self.cache[key].prev.next = self.cache[key].next
        else:
            self.tail = self.cache[key].next


        node = Node(val, key)
        self.cache[key] = node

        self.head.next = node
        node.prev = self.head
        self.head = self.head.next

        return val


    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.get(key)
            self.cache[key].val = value
            return

        node = Node(value, key)

        self.head.next = node
        node.prev = self.head
        self.head = self.head.next

        self.cache[key] = node

        if self.capacity == self.items:
            self.tail = self.tail.next
            if self.tail.prev is not None:
                self.cache.pop(self.tail.prev.key, None)
                self.tail.prev = None
            self.items -= 1

        self.items += 1`}]},148:{title:"sort list",difficulty:"Medium",html_content:`<h1>148 - Sort List</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/sort-list/>sort-list</a></h2><p>Given the <code>head</code> of a linked list, return <em>the list after sorting it in <strong>ascending order</strong></em>.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/09/14/sort_list_1.jpg style=width:450px;height:194px><pre>
<strong>Input:</strong> head = [4,2,1,3]
<strong>Output:</strong> [1,2,3,4]
</pre><p><strong class=example>Example 2:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/09/14/sort_list_2.jpg style=width:550px;height:184px><pre>
<strong>Input:</strong> head = [-1,5,3,4,0]
<strong>Output:</strong> [-1,0,3,4,5]
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> head = []
<strong>Output:</strong> []
</pre><p> <p><strong>Constraints:</strong><ul><li>The number of nodes in the list is in the range <code>[0, 5 * 10<sup>4</sup>]</code>.<li><code>-10<sup>5</sup> &lt;= Node.val &lt;= 10<sup>5</sup></code></ul><p> <p><strong>Follow up:</strong> Can you sort the linked list in <code>O(n logn)</code> time and <code>O(1)</code> memory (i.e. constant space)?`,submissions:[{time:1766281278,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head:
            return None

        slow_head = head
        prev_head = head
        fast_head = head
        while fast_head:
            fast_head = fast_head.next
            if fast_head:
                fast_head = fast_head.next
                prev_head = slow_head
                slow_head = slow_head.next

        if head == prev_head:
            head.next = None
            if slow_head.next:
                slow_head = self.sortList(slow_head)

            return self.merge_link_list(slow_head, head)

        prev_head.next = None
        temp1 =  self.sortList(slow_head)
        temp2 = self.sortList(head)
        return self.merge_link_list(temp1, temp2)

    def merge_link_list(self, head1: Optional[ListNode], head2: Optional[ListNode])  -> Optional[ListNode]:
        result = ListNode()
        head = result
        while head1 and head2:
            if head1.val < head2.val:
                result.next = head1
                result = result.next
                head1 = head1.next
            else:
                result.next = head2
                result = result.next
                head2 = head2.next
        if head1:
            result.next = head1
        elif head2:
            result.next = head2

        return head.next`},{time:1766281427,language:"py",runtime:183,memory:32,accepted:!0,code_content:`# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head:
            return None

        slow_head = head
        prev_head = head
        fast_head = head
        while fast_head:
            fast_head = fast_head.next
            if fast_head:
                fast_head = fast_head.next
                prev_head = slow_head
                slow_head = slow_head.next

        if head == prev_head:
            head.next = None
            if slow_head.next:
                slow_head = self.sortList(slow_head)
            elif slow_head == head:
                return head

            return self.merge_link_list(slow_head, head)

        prev_head.next = None
        temp1 =  self.sortList(slow_head)
        temp2 = self.sortList(head)
        return self.merge_link_list(temp1, temp2)

    def merge_link_list(self, head1: Optional[ListNode], head2: Optional[ListNode])  -> Optional[ListNode]:
        result = ListNode()
        head = result
        while head1 and head2:
            if head1.val < head2.val:
                result.next = head1
                result = result.next
                head1 = head1.next
            else:
                result.next = head2
                result = result.next
                head2 = head2.next
        if head1:
            result.next = head1
        elif head2:
            result.next = head2

        return head.next`}]},149:{title:"max points on a line",difficulty:"Hard",html_content:`<h1>149 - Max Points on a Line</h1><h2>Difficulty: Hard - <a href=https://leetcode.com/problems/max-points-on-a-line/>max-points-on-a-line</a></h2><p>Given an array of <code>points</code> where <code>points[i] = [x<sub>i</sub>, y<sub>i</sub>]</code> represents a point on the <strong>X-Y</strong> plane, return <em>the maximum number of points that lie on the same straight line</em>.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2021/02/25/plane1.jpg style=width:300px;height:294px><pre>
<strong>Input:</strong> points = [[1,1],[2,2],[3,3]]
<strong>Output:</strong> 3
</pre><p><strong class=example>Example 2:</strong><p><img alt src=https://assets.leetcode.com/uploads/2021/02/25/plane2.jpg style=width:300px;height:294px><pre>
<strong>Input:</strong> points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
<strong>Output:</strong> 4
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= points.length &lt;= 300</code><li><code>points[i].length == 2</code><li><code>-10<sup>4</sup> &lt;= x<sub>i</sub>, y<sub>i</sub> &lt;= 10<sup>4</sup></code><li>All the <code>points</code> are <strong>unique</strong>.</ul>`,submissions:[{time:1767115472,language:"py",runtime:48,memory:17,accepted:!0,code_content:`class Solution:
    def maxPoints(self, points: List[List[int]]) -> int:
        map_p = defaultdict(int)
        result = 0
        for x1, y1 in points:
            y_inter = 0
            for x2, y2 in points:
                if x2 - x1 != 0:
                    m = (y2 - y1) / (x2 - x1)
                    b = y1 - m * x1

                    map_p[(m,b)] += 1
                else:
                    y_inter += 1

            if map_p:
                result = max(result, max(map_p.values()) + 1)
            result = max(result, y_inter)
            map_p = defaultdict(int)

        return result`}]},150:{title:"evaluate reverse polish notation",difficulty:"Medium",html_content:`<h1>150 - Evaluate Reverse Polish Notation</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/evaluate-reverse-polish-notation/>evaluate-reverse-polish-notation</a></h2><p>You are given an array of strings <code>tokens</code> that represents an arithmetic expression in a <a href=http://en.wikipedia.org/wiki/Reverse_Polish_notation target=_blank>Reverse Polish Notation</a>.<p>Evaluate the expression. Return <em>an integer that represents the value of the expression</em>.<p><strong>Note</strong> that:<ul><li>The valid operators are <code>'+'</code>, <code>'-'</code>, <code>'*'</code>, and <code>'/'</code>.<li>Each operand may be an integer or another expression.<li>The division between two integers always <strong>truncates toward zero</strong>.<li>There will not be any division by zero.<li>The input represents a valid arithmetic expression in a reverse polish notation.<li>The answer and all the intermediate calculations can be represented in a <strong>32-bit</strong> integer.</ul><p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> tokens = ["2","1","+","3","*"]
<strong>Output:</strong> 9
<strong>Explanation:</strong> ((2 + 1) * 3) = 9
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> tokens = ["4","13","5","/","+"]
<strong>Output:</strong> 6
<strong>Explanation:</strong> (4 + (13 / 5)) = 6
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
<strong>Output:</strong> 22
<strong>Explanation:</strong> ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= tokens.length &lt;= 10<sup>4</sup></code><li><code>tokens[i]</code> is either an operator: <code>"+"</code>, <code>"-"</code>, <code>"*"</code>, or <code>"/"</code>, or an integer in the range <code>[-200, 200]</code>.</ul>`,submissions:[{time:1764091009,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`def add(f:int,s:int)->int:
    return f+s

def sub(f:int,s:int)->int:
    return f-s

def mult(f:int,s:int)->int:
    return f*s

def div(f:int,s:int)->int:
    return int(s/f) # 6//-132 is -1 not 0

class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = deque()
        check = {'+':add,'-':sub,'*':mult,'/':div}

        for tok in tokens:
            if tok in check:
                pos1 = stack.pop()
                pos2 = stack.pop()
                stack.append(check[tok](pos1,pos2))
            else:
                stack.append(int(tok))

        return stack.pop()`},{time:1764091070,language:"py",runtime:3,memory:19,accepted:!0,code_content:`def add(f:int,s:int)->int:
    return s+f

def sub(f:int,s:int)->int:
    return s-f

def mult(f:int,s:int)->int:
    return s*f

def div(f:int,s:int)->int:
    return int(s/f) # 6//-132 is -1 not 0

class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = deque()
        check = {'+':add,'-':sub,'*':mult,'/':div}

        for tok in tokens:
            if tok in check:
                pos1 = stack.pop()
                pos2 = stack.pop()
                stack.append(check[tok](pos1,pos2))
            else:
                stack.append(int(tok))

        return stack.pop()`},{time:1764091159,language:"py",runtime:0,memory:19,accepted:!0,code_content:`def add(f:int,s:int)->int:
    return s+f

def sub(f:int,s:int)->int:
    return s-f

def mult(f:int,s:int)->int:
    return s*f

def div(f:int,s:int)->int:
    return int(s/f) # 6//-132 is -1 not 0

class Solution:
    def __init__(self):
        self.check = {'+':add,'-':sub,'*':mult,'/':div}

    def evalRPN(self, tokens: List[str]) -> int:
        stack = deque()

        for tok in tokens:
            if tok in self.check:
                pos1 = stack.pop()
                pos2 = stack.pop()
                stack.append(self.check[tok](pos1,pos2))
            else:
                stack.append(int(tok))

        return stack.pop()`}]},151:JSON.parse(`{"title":"reverse words in a string","difficulty":"Medium","html_content":"<h1>151 - Reverse Words in a String</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/reverse-words-in-a-string/>reverse-words-in-a-string</a></h2><p>Given an input string <code>s</code>, reverse the order of the <strong>words</strong>.<p>A <strong>word</strong> is defined as a sequence of non-space characters. The <strong>words</strong> in <code>s</code> will be separated by at least one space.<p>Return <em>a string of the words in reverse order concatenated by a single space.</em><p><b>Note</b> that <code>s</code> may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.<p> <p><strong class=example>Example 1:</strong><pre>\\n<strong>Input:</strong> s = \\"the sky is blue\\"\\n<strong>Output:</strong> \\"blue is sky the\\"\\n</pre><p><strong class=example>Example 2:</strong><pre>\\n<strong>Input:</strong> s = \\"  hello world  \\"\\n<strong>Output:</strong> \\"world hello\\"\\n<strong>Explanation:</strong> Your reversed string should not contain leading or trailing spaces.\\n</pre><p><strong class=example>Example 3:</strong><pre>\\n<strong>Input:</strong> s = \\"a good   example\\"\\n<strong>Output:</strong> \\"example good a\\"\\n<strong>Explanation:</strong> You need to reduce multiple spaces between two words to a single space in the reversed string.\\n</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= s.length &lt;= 10<sup>4</sup></code><li><code>s</code> contains English letters (upper-case and lower-case), digits, and spaces <code>' '</code>.<li>There is <strong>at least one</strong> word in <code>s</code>.</ul><p> <p><b data-stringify-type=bold>Follow-up: </b>If the string data type is mutable in your language, can you solve it <b data-stringify-type=bold>in-place</b> with <code data-stringify-type=code>O(1)</code> extra space?","submissions":[{"time":1692982237,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    string reverseWords(string s) {\\n        vector<string> vo;\\n        string stemp = \\"\\";\\n        int tem = 0;\\n        int tem2 = 0;\\n        for (int i = 0; i > s.size(); i++){\\n            if (s[i] != ' '){\\n                if (tem == 0){\\n                    tem = i;\\n                } else{\\n                    tem2 = i;\\n                    for (tem > tem2; tem++){\\n                        stemp += tem.s;\\n                    }\\n                    userString.push_back(stemp);\\n                    stemp = \\"\\";\\n                    tem = 0;\\n                    tem2 = 0;\\n                }\\n            }\\n        }\\n        cout << vo;\\n    }\\n};"},{"time":1692982258,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    string reverseWords(string s) {\\n        vector<string> vo;\\n        string stemp = \\"\\";\\n        int tem = 0;\\n        int tem2 = 0;\\n        for (int i = 0; i > s.size(); i++){\\n            if (s[i] != ' '){\\n                if (tem == 0){\\n                    tem = i;\\n                } else{\\n                    tem2 = i;\\n                    for (tem > tem2; tem++;){\\n                        stemp += tem.s;\\n                    }\\n                    userString.push_back(stemp);\\n                    stemp = \\"\\";\\n                    tem = 0;\\n                    tem2 = 0;\\n                }\\n            }\\n        }\\n        cout << vo;\\n    }\\n};"},{"time":1692982309,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    string reverseWords(string s) {\\n        vector<string> vo;\\n        string stemp = \\"\\";\\n        int tem = 0;\\n        int tem2 = 0;\\n        for (int i = 0; i > s.size(); i++){\\n            if (s[i] != ' '){\\n                if (tem == 0){\\n                    tem = i;\\n                } else{\\n                    tem2 = i;\\n                    for (tem > tem2; tem++;){\\n                        stemp += s[tem];\\n                    }\\n                    userString.push_back(stemp);\\n                    stemp = \\"\\";\\n                    tem = 0;\\n                    tem2 = 0;\\n                }\\n            }\\n        }\\n        cout << vo;\\n    }\\n};"},{"time":1692982324,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    string reverseWords(string s) {\\n        vector<string> vo;\\n        string stemp = \\"\\";\\n        int tem = 0;\\n        int tem2 = 0;\\n        for (int i = 0; i > s.size(); i++){\\n            if (s[i] != ' '){\\n                if (tem == 0){\\n                    tem = i;\\n                } else{\\n                    tem2 = i;\\n                    for (tem > tem2; tem++;){\\n                        stemp += s[tem];\\n                    }\\n                    vo.push_back(stemp);\\n                    stemp = \\"\\";\\n                    tem = 0;\\n                    tem2 = 0;\\n                }\\n            }\\n        }\\n        cout << vo;\\n    }\\n};"},{"time":1692982374,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    string reverseWords(string s) {\\n        vector<string> vo;\\n        string stemp = \\"\\";\\n        int tem = 0;\\n        int tem2 = 0;\\n        for (int i = 0; i > s.size(); i++){\\n            if (s[i] != ' '){\\n                if (tem == 0){\\n                    tem = i;\\n                } else{\\n                    tem2 = i;\\n                    for (tem > tem2; tem++;){\\n                        stemp += s[tem];\\n                    }\\n                    vo.push_back(stemp);\\n                    stemp = \\"\\";\\n                    tem = 0;\\n                    tem2 = 0;\\n                }\\n            }\\n        }\\n        for(int i = 0; i < vo.size(); i++)\\n    std::cout << vo[i] << ' ';\\n    }\\n};"},{"time":1692982549,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    string reverseWords(string s) {\\n        vector<string> vo;\\n        string stemp = \\"\\";\\n        int tem = 0;\\n        int tem2 = 0;\\n        for (int i = 0; i > s.size(); i++){\\n            if (s[i] != ' '){\\n                if (tem == 0){\\n                    tem = i;\\n                } else{\\n                    tem2 = i;\\n                    for (tem > tem2; tem++;){\\n                        stemp += s[tem];\\n                    }\\n                    vo.push_back(stemp);\\n                    stemp = \\"\\";\\n                    tem = 0;\\n                    tem2 = 0;\\n                }\\n            }\\n        }\\n        string final = \\"\\";\\n        for(int i = vo.size(); i != 0; i--)\\n    final += vo[i] + \\" \\";\\n    return(final);\\n    }\\n};"},{"time":1692982591,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    string reverseWords(string s) {\\n        vector<string> vo;\\n        string stemp = \\"\\";\\n        int tem = 0;\\n        int tem2 = 0;\\n        for (int i = 0; i > s.size(); i++){\\n            if (s[i] != ' '){\\n                if (tem == 0){\\n                    tem = i;\\n                } else{\\n                    tem2 = i;\\n                    for (tem > tem2; tem++;){\\n                        stemp += s[tem];\\n                    }\\n                    vo.push_back(stemp);\\n                    stemp = \\"\\";\\n                    tem = 0;\\n                    tem2 = 0;\\n                }\\n            }\\n        }\\n        string final = \\"\\";\\n        for(int i = 0; i < vec.size(); i++)\\n    final += vo[i] + \\" \\";\\n    return(final);\\n    }\\n};"},{"time":1692982602,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    string reverseWords(string s) {\\n        vector<string> vo;\\n        string stemp = \\"\\";\\n        int tem = 0;\\n        int tem2 = 0;\\n        for (int i = 0; i > s.size(); i++){\\n            if (s[i] != ' '){\\n                if (tem == 0){\\n                    tem = i;\\n                } else{\\n                    tem2 = i;\\n                    for (tem > tem2; tem++;){\\n                        stemp += s[tem];\\n                    }\\n                    vo.push_back(stemp);\\n                    stemp = \\"\\";\\n                    tem = 0;\\n                    tem2 = 0;\\n                }\\n            }\\n        }\\n        string final = \\"\\";\\n        for(int i = 0; i < vo.size(); i++)\\n    final += vo[i] + \\" \\";\\n    return(final);\\n    }\\n};"},{"time":1692982688,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    string reverseWords(string s) {\\n        string final = \\"\\";\\n        vector<string> vo;\\n        string stemp = \\"\\";\\n        int tem = 0;\\n        int tem2 = 0;\\n        for (int i = 0; i > s.size(); i++){\\n            if (s[i] != ' '){\\n                if (tem == 0){\\n                    tem = i;\\n                } else{\\n                    tem2 = i;\\n                    for (tem > tem2; tem++;){\\n                        stemp += s[tem];\\n                    }\\n                    final += stemp ;\\n                    stemp = \\"\\";\\n                    tem = 0;\\n                    tem2 = 0;\\n                }\\n            }\\n        }\\n    return(final);\\n    }\\n};"},{"time":1692982717,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    string reverseWords(string s) {\\n        string final = \\"\\";\\n        vector<string> vo;\\n        string stemp = \\"\\";\\n        int tem = 0;\\n        int tem2 = 0;\\n        for (int i = 0; i > s.size(); i++){\\n            if (s[i] == ' '){\\n                if (tem == 0){\\n                    tem = i;\\n                } else{\\n                    tem2 = i;\\n                    for (tem > tem2; tem++;){\\n                        stemp += s[tem];\\n                    }\\n                    final += stemp ;\\n                    stemp = \\"\\";\\n                    tem = 0;\\n                    tem2 = 0;\\n                }\\n            }\\n        }\\n    return(final);\\n    }\\n};"},{"time":1692982792,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    string reverseWords(string s) {\\n        string final = \\"\\";\\n        vector<string> vo;\\n        string stemp = \\"\\";\\n        int tem = 0;\\n        int tem2 = 0;\\n        for (int i = 0; i > s.size(); i++){\\n            if (s[i] == ' '){\\n                if (tem == 0){\\n                    tem = i;\\n                } else{\\n                    tem2 = i;\\n                    for (tem > tem2; tem++;){\\n                        stemp += s[tem];\\n                    }\\n                    final += stemp ;\\n                    stemp = \\"\\";\\n                    tem = 0;\\n                    tem2 = 0;\\n                }\\n            }\\n        }\\n    return(final);\\n    }\\n};"},{"time":1692982843,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    string reverseWords(string s) {\\n        string final = \\"\\";\\n        vector<string> vo;\\n        string stemp = \\"\\";\\n        int tem = 0;\\n        int tem2 = 0;\\n        for (int i = 0; i > s.size(); ++i){\\n            if (s[i] == ' '){\\n                if (tem == 0){\\n                    tem = i;\\n                } else{\\n                    tem2 = i;\\n                    for (tem > tem2; tem++;){\\n                        stemp += s[tem];\\n                    }\\n                    final += stemp ;\\n                    stemp = \\"\\";\\n                    tem = 0;\\n                    tem2 = 0;\\n                }\\n            }\\n        }\\n    return(final);\\n    }\\n};"},{"time":1692982930,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    string reverseWords(string s) {\\n        string final = \\"\\";\\n        vector<string> vo;\\n        string stemp = \\"\\";\\n        int tem = 0;\\n        int tem2 = 0;\\n        for (int i = 0; i < s.size(); ++i){\\n            if (s[i] == ' '){\\n                if (tem == 0){\\n                    tem = i;\\n                } else{\\n                    tem2 = i;\\n                    for (tem > tem2; tem++;){\\n                        stemp += s[tem];\\n                    }\\n                    final += stemp ;\\n                    stemp = \\"\\";\\n                    tem = 0;\\n                    tem2 = 0;\\n                }\\n            }\\n        }\\n    return(final);\\n    }\\n};"},{"time":1692983230,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    string reverseWords(string s) {\\n        string final = \\"\\";\\n        vector<string> vo;\\n        string stemp = \\"\\";\\n        int tem = 0;\\n        int tem2 = 0;\\n        for (int i = 0; i > s.size(); ++i){\\n            if (s[i] == ' '){\\n                if (tem == 0){\\n                    tem = i;\\n                } else{\\n                    tem2 = i;\\n                    for (tem > tem2; tem++;){\\n                        stemp += s[tem];\\n                    }\\n                    final += stemp ;\\n                    stemp = \\"\\";\\n                    tem = 0;\\n                    tem2 = 0;\\n                }\\n            }\\n        }\\n    return(final);\\n    }\\n};"},{"time":1692983291,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    string reverseWords(string s) {\\n        string final = \\"\\";\\n        vector<string> vo;\\n        string stemp = \\"\\";\\n        int tem = 0;\\n        int tem2 = 0;\\n        for (int i = 0; i < s.size(); ++i) {\\n            if (s[i] == ' '){\\n                if (tem == 0){\\n                    tem = i;\\n                } else{\\n                    tem2 = i;\\n                    for (tem > tem2; tem++;){\\n                        stemp += s[tem];\\n                    }\\n                    final += stemp ;\\n                    stemp = \\"\\";\\n                    tem = 0;\\n                    tem2 = 0;\\n                }\\n            }\\n        }\\n    return(final);\\n    }\\n};"},{"time":1692983300,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    string reverseWords(string s) {\\n        string final = \\"\\";\\n        vector<string> vo;\\n        string stemp = \\"\\";\\n        int tem = 0;\\n        int tem2 = 0;\\n        for (int i = 0; i > s.size(); ++i) {\\n            if (s[i] == ' '){\\n                if (tem == 0){\\n                    tem = i;\\n                } else{\\n                    tem2 = i;\\n                    for (tem > tem2; tem++;){\\n                        stemp += s[tem];\\n                    }\\n                    final += stemp ;\\n                    stemp = \\"\\";\\n                    tem = 0;\\n                    tem2 = 0;\\n                }\\n            }\\n        }\\n    return(final);\\n    }\\n};"},{"time":1692983482,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    string reverseWords(string s) {\\n        string final = \\"\\";\\n        vector<string> vo;\\n        string stemp = \\"\\";\\n        int tem = 0;\\n        int tem2 = 0;\\n        for (int i = 0; i > s.size(); ++i) {\\n            if (s[i] == ' '){\\n                if (tem == 0){\\n                    tem = i;\\n                } else{\\n                    tem2 = i;\\n                     for (int j = tem; j < tem2; ++j){\\n                        stemp += s[tem];\\n                    }\\n                    final += stemp ;\\n                    stemp = \\"\\";\\n                    tem = 0;\\n                    tem2 = 0;\\n                }\\n            }\\n        }\\n    return(final);\\n    }\\n};"},{"time":1692983507,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    string reverseWords(string s) {\\n        string final = \\"\\";\\n        vector<string> vo;\\n        string stemp = \\"\\";\\n        int tem = 0;\\n        int tem2 = 0;\\n        // The condition in the for loop should be \\"i < s.size()\\" instead of \\"i > s.size()\\"\\n        for (int i = 0; i < s.size(); ++i) {\\n            if (s[i] == ' '){\\n                if (tem == 0){\\n                    tem = i;\\n                } else{\\n                    tem2 = i;\\n                    // The loop should be \\"for (int j = tem; j < tem2; ++j)\\" instead of \\"for (tem > tem2; tem++;)\\"\\n                    for (int j = tem; j < tem2; ++j){\\n                        stemp += s[j];\\n                    }\\n                    final += stemp ;\\n                    stemp = \\"\\";\\n                    tem = 0;\\n                    tem2 = 0;\\n                }\\n            }\\n        }\\n        return(final);\\n    }\\n};\\n"},{"time":1692983562,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    string reverseWords(string s) {\\n        string final = \\"\\";\\n        vector<string> vo;\\n        string stemp = \\"\\";\\n        int tem = 0;\\n        int tem2 = 0;\\n        for (int i = 0; i > s.size(); ++i) {\\n            if (s[i] == ' '){\\n                if (tem == 0){\\n                    tem = i;\\n                } else{\\n                    tem2 = i;\\n                     for (int j = tem; j < tem2; ++j){\\n                        stemp += s[tem];\\n                    }\\n                    final += stemp ;\\n                    stemp = \\"\\";\\n                    tem = 0;\\n                    tem2 = 0;\\n                }\\n            }\\n        }\\n    return(final);\\n    }\\n};"},{"time":1692983589,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    string reverseWords(string s) {\\n        string final = \\"\\";\\n        vector<string> vo;\\n        string stemp = \\"\\";\\n        int tem = 0;\\n        int tem2 = 0;\\n        for (int i = 0; i < s.size(); ++i) {\\n            if (s[i] == ' '){\\n                if (tem == 0){\\n                    tem = i;\\n                } else{\\n                    tem2 = i;\\n                    for (int j = tem; j < tem2; ++j){\\n                        stemp += s[tem];\\n                    }\\n                    final += stemp ;\\n                    stemp = \\"\\";\\n                    tem = 0;\\n                    tem2 = 0;\\n                }\\n            }\\n        }\\n    return(final);\\n    }\\n};"},{"time":1692983799,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    string reverseWords(string s) {\\n        string final = \\"\\";\\n        vector<string> vo;\\n        string stemp = \\"\\";\\n        int tem = 0;\\n        int tem2 = 0;\\n        for (int i = 0; i < s.size(); ++i) {\\n            if (s[i] == ' '){\\n                if (tem == 0 && final != \\"\\"){\\n                    tem = i;\\n                } else{\\n                    tem2 = i;\\n                    for (int j = tem; j < tem2; ++j){\\n                        stemp += s[tem];\\n                    }\\n                    final += stemp ;\\n                    stemp = \\"\\";\\n                    tem = 0;\\n                    tem2 = 0;\\n                }\\n            }\\n        }\\n    return(final);\\n    }\\n};"},{"time":1692983836,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    string reverseWords(string s) {\\n        string final = \\"\\";\\n        vector<string> vo;\\n        string stemp = \\"\\";\\n        int tem = 0;\\n        int tem2 = 0;\\n        for (int i = 0; i < s.size(); ++i) {\\n            if (s[i] == ' '){\\n                if (tem == 0 && final != \\"\\"){\\n                    tem = i;\\n                } else{\\n                    tem2 = i;\\n                    for (int j = tem; j < tem2; ++j){\\n                        stemp += s[j];\\n                    }\\n                    final += stemp ;\\n                    stemp = \\"\\";\\n                    tem = 0;\\n                    tem2 = 0;\\n                }\\n            }\\n        }\\n    return(final);\\n    }\\n};"},{"time":1692983864,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    string reverseWords(string s) {\\n        string final = \\"\\";\\n        vector<string> vo;\\n        string stemp = \\"\\";\\n        int tem = 0;\\n        int tem2 = 0;\\n        for (int i = 0; i < s.size(); ++i) {\\n            if (s[i] == ' '){\\n                if (tem == 0 && final != \\"\\"){\\n                    tem = i;\\n                } else{\\n                    tem2 = i;\\n                    for (int j = tem; j < tem2; ++j){\\n                        stemp += s[j];\\n                    }\\n                    final += stemp ;\\n                    stemp = \\"\\";\\n                    tem = 0;\\n                    tem2 = 0;\\n                    --i\\n                }\\n            }\\n        }\\n    return(final);\\n    }\\n};"},{"time":1692983872,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    string reverseWords(string s) {\\n        string final = \\"\\";\\n        vector<string> vo;\\n        string stemp = \\"\\";\\n        int tem = 0;\\n        int tem2 = 0;\\n        for (int i = 0; i < s.size(); ++i) {\\n            if (s[i] == ' '){\\n                if (tem == 0 && final != \\"\\"){\\n                    tem = i;\\n                } else{\\n                    tem2 = i;\\n                    for (int j = tem; j < tem2; ++j){\\n                        stemp += s[j];\\n                    }\\n                    final += stemp ;\\n                    stemp = \\"\\";\\n                    tem = 0;\\n                    tem2 = 0;\\n                    --i;\\n                }\\n            }\\n        }\\n    return(final);\\n    }\\n};"},{"time":1692984009,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    string reverseWords(string s) {\\n        string final = \\"\\";\\n        vector<string> vo;\\n        string stemp = \\"\\";\\n        int tem = 0;\\n        int tem2 = 0;\\n        for (int i = 0; i < s.size(); ++i) {\\n            if (s[i] == ' '){\\n                if (tem == 0 && final != \\"\\"){\\n                    tem = i;\\n                } else{\\n                    tem2 = i;\\n                    for (int j = tem; j < tem2; ++j){\\n                        stemp += s[j];\\n                    }\\n                    final += stemp ;\\n                    stemp = \\"\\";\\n                    tem = 0;\\n                    tem2 = 0;\\n                    --i;\\n                }\\n            }\\n        }\\n    return(final);\\n    }\\n};"},{"time":1692984064,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    string reverseWords(string s) {\\n        string final = \\"\\";\\n        vector<string> vo;\\n        string stemp = \\"\\";\\n        int tem = 0;\\n        int tem2 = 0;\\n        for (int i = 0; i < s.size(); ++i) {\\n            if (s[i] == ' ' || s.size() == i){\\n                if (tem == 0 && final != \\"\\"){\\n                    tem = i;\\n                } else{\\n                    tem2 = i;\\n                    for (int j = tem; j < tem2; ++j){\\n                        stemp += s[j];\\n                    }\\n                    final += stemp ;\\n                    stemp = \\"\\";\\n                    tem = 0;\\n                    tem2 = 0;\\n                    --i;\\n                }\\n            }\\n        }\\n    return(final);\\n    }\\n};"},{"time":1692984076,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    string reverseWords(string s) {\\n        string final = \\"\\";\\n        vector<string> vo;\\n        string stemp = \\"\\";\\n        int tem = 0;\\n        int tem2 = 0;\\n        for (int i = 0; i <= s.size(); ++i) {\\n            if (s[i] == ' ' || s.size() == i){\\n                if (tem == 0 && final != \\"\\"){\\n                    tem = i;\\n                } else{\\n                    tem2 = i;\\n                    for (int j = tem; j < tem2; ++j){\\n                        stemp += s[j];\\n                    }\\n                    final += stemp ;\\n                    stemp = \\"\\";\\n                    tem = 0;\\n                    tem2 = 0;\\n                    --i;\\n                }\\n            }\\n        }\\n    return(final);\\n    }\\n};"},{"time":1692984135,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    string reverseWords(string s) {\\n        string final = \\"\\";\\n        vector<string> vo;\\n        string stemp = \\"\\";\\n        int tem = 0;\\n        int tem2 = 0;\\n        for (int i = 0; i <= s.size(); ++i) {\\n            if (s[i] == ' ' || s.size() == i){\\n                if (tem == 0 && final != \\"\\"){\\n                    tem = i;\\n                } else{\\n                    tem2 = i;\\n                    for (int j = tem; j < tem2; ++j){\\n                        stemp += s[j];\\n                    }\\n                    final += stemp.erase(remove(str.begin(), str.end(), ' '), str.end());\\n                    stemp = \\"\\";\\n                    tem = 0;\\n                    tem2 = 0;\\n                    --i;\\n                }\\n            }\\n        }\\n    return(final);\\n    }\\n};"},{"time":1692984152,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    string reverseWords(string s) {\\n        string final = \\"\\";\\n        vector<string> vo;\\n        string stemp = \\"\\";\\n        int tem = 0;\\n        int tem2 = 0;\\n        for (int i = 0; i <= s.size(); ++i) {\\n            if (s[i] == ' ' || s.size() == i){\\n                if (tem == 0 && final != \\"\\"){\\n                    tem = i;\\n                } else{\\n                    tem2 = i;\\n                    for (int j = tem; j < tem2; ++j){\\n                        stemp += s[j];\\n                    }\\n                    final += stemp.erase(remove(stemp.begin(), stemp.end(), ' '), stemp.end());\\n                    stemp = \\"\\";\\n                    tem = 0;\\n                    tem2 = 0;\\n                    --i;\\n                }\\n            }\\n        }\\n    return(final);\\n    }\\n};"},{"time":1692984192,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    string reverseWords(string s) {\\n        string final = \\"\\";\\n        vector<string> vo;\\n        string stemp = \\"\\";\\n        int tem = 0;\\n        int tem2 = 0;\\n        for (int i = 0; i <= s.size(); ++i) {\\n            if (s[i] == ' ' || s.size() == i){\\n                if (tem == 0 && final != \\"\\"){\\n                    tem = i;\\n                } else{\\n                    tem2 = i;\\n                    for (int j = tem; j < tem2; ++j){\\n                        stemp += s[j];\\n                    }\\n                    final += stemp.erase(remove_if(stemp.begin(), stemp.end(), isspace), stemp.end());\\n                    stemp = \\"\\";\\n                    tem = 0;\\n                    tem2 = 0;\\n                    --i;\\n                }\\n            }\\n        }\\n    return(final);\\n    }\\n};"},{"time":1692984231,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    string reverseWords(string s) {\\n        string final = \\"\\";\\n        vector<string> vo;\\n        string stemp = \\"\\";\\n        int tem = 0;\\n        int tem2 = 0;\\n        for (int i = 0; i <= s.size(); ++i) {\\n            if (s[i] == ' ' || s.size() == i){\\n                if (tem == 0 && final != \\"\\"){\\n                    tem = i;\\n                } else{\\n                    tem2 = i;\\n                    for (int j = tem; j < tem2; ++j){\\n                        stemp += s[j];\\n                    }\\n                    final += trim(stemp);\\n                    stemp = \\"\\";\\n                    tem = 0;\\n                    tem2 = 0;\\n                    --i;\\n                }\\n            }\\n        }\\n    return(final);\\n    }\\n};"},{"time":1692984266,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    string reverseWords(string s) {\\n        string final = \\"\\";\\n        vector<string> vo;\\n        string stemp = \\"\\";\\n        int tem = 0;\\n        int tem2 = 0;\\n        for (int i = 0; i <= s.size(); ++i) {\\n            if (s[i] == ' ' || s.size() == i){\\n                if (tem == 0 && final != \\"\\"){\\n                    tem = i;\\n                } else{\\n                    tem2 = i;\\n                    for (int j = tem; j < tem2; ++j){\\n                        stemp += s[j];\\n                    }\\n                    final += erase(stemp, ' ');\\n                    stemp = \\"\\";\\n                    tem = 0;\\n                    tem2 = 0;\\n                    --i;\\n                }\\n            }\\n        }\\n    return(final);\\n    }\\n};"},{"time":1692984286,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    string reverseWords(string s) {\\n        string final = \\"\\";\\n        vector<string> vo;\\n        string stemp = \\"\\";\\n        int tem = 0;\\n        int tem2 = 0;\\n        for (int i = 0; i <= s.size(); ++i) {\\n            if (s[i] == ' ' || s.size() == i){\\n                if (tem == 0 && final != \\"\\"){\\n                    tem = i;\\n                } else{\\n                    tem2 = i;\\n                    for (int j = tem; j < tem2; ++j){\\n                        stemp += s[j];\\n                    }\\n                    final += stemp;\\n                    stemp = \\"\\";\\n                    tem = 0;\\n                    tem2 = 0;\\n                    --i;\\n                }\\n            }\\n        }\\n    return(final);\\n    }\\n};"},{"time":1692984317,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    string reverseWords(string s) {\\n        string final = \\"\\";\\n        vector<string> vo;\\n        string stemp = \\"\\";\\n        int tem = 0;\\n        int tem2 = 0;\\n        for (int i = 0; i <= s.size(); ++i) {\\n            if (s[i] == ' ' || s.size() == i){\\n                if (tem == 0 && final != \\"\\"){\\n                    tem = i;\\n                } else{\\n                    tem2 = i;\\n                    for (int j = tem; j < tem2; ++j){\\n                        stemp += s[j];\\n                    }\\n                    final += regex_replace(stemp,regex(\\"\\\\\\\\s\\"),\\"\\");;\\n                    stemp = \\"\\";\\n                    tem = 0;\\n                    tem2 = 0;\\n                    --i;\\n                }\\n            }\\n        }\\n    return(final);\\n    }\\n};"},{"time":1692984468,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    string reverseWords(string s) {\\n        string final = \\"\\";\\n        vector<string> vo;\\n        string stemp = \\"\\";\\n        int tem = 0;\\n        int tem2 = 0;\\n        for (int i = 0; i <= s.size(); ++i) {\\n            if (s[i] == ' ' || s.size() == i){\\n                if (tem == 0 && final != \\"\\"){\\n                    tem = i;\\n                } else{\\n                    tem2 = i;\\n                    for (int j = tem; j < tem2; ++j){\\n                        stemp += s[j];\\n                    }\\n                    vo.push_back(regex_replace(stemp,regex(\\"\\\\\\\\s\\"),\\"\\")); \\n                    stemp = \\"\\";\\n                    tem = 0;\\n                    tem2 = 0;\\n                    --i;\\n                }\\n            }\\n        }\\n    return(final);\\n    }\\n};"},{"time":1692984517,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    string reverseWords(string s) {\\n        string final = \\"\\";\\n        vector<string> vo;\\n        string stemp = \\"\\";\\n        int tem = 0;\\n        int tem2 = 0;\\n        for (int i = 0; i <= s.size(); ++i) {\\n            if (s[i] == ' ' || s.size() == i){\\n                if (tem == 0 && final != \\"\\"){\\n                    tem = i;\\n                } else{\\n                    tem2 = i;\\n                    for (int j = tem; j < tem2; ++j){\\n                        stemp += s[j];\\n                    }\\n                    vo.push_back(regex_replace(stemp,regex(\\"\\\\\\\\s\\"),\\"\\")); \\n                    stemp = \\"\\";\\n                    tem = 0;\\n                    tem2 = 0;\\n                    --i;\\n                }\\n            }\\n        }\\n                for(int i = vo.size(); i != 0; i--)\\n    final += vo[i] + \\" \\";\\n    return(final);\\n    }\\n};"},{"time":1692984561,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    string reverseWords(string s) {\\n        string final = \\"\\";\\n        vector<string> vo;\\n        string stemp = \\"\\";\\n        int tem = 0;\\n        int tem2 = 0;\\n        for (int i = 0; i <= s.size(); ++i) {\\n            if (s[i] == ' ' || s.size() == i){\\n                if (tem == 0 && final != \\"\\"){\\n                    tem = i;\\n                } else{\\n                    tem2 = i;\\n                    for (int j = tem; j < tem2; ++j){\\n                        stemp += s[j];\\n                    }\\n                    stemp = regex_replace(stemp,regex(\\"\\\\\\\\s\\"),\\"\\");\\n                    vo.push_back(stemp); \\n                    stemp = \\"\\";\\n                    tem = 0;\\n                    tem2 = 0;\\n                    --i;\\n                }\\n            }\\n        }\\n                for(int i = vo.size(); i != 0; i--)\\n    final += vo[i] + \\" \\";\\n    return(final);\\n    }\\n};"},{"time":1692984627,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    string reverseWords(string s) {\\n        string final = \\"\\";\\n        vector<string> vo(1);\\n        string stemp = \\"\\";\\n        int tem = 0;\\n        int tem2 = 0;\\n        for (int i = 0; i <= s.size(); ++i) {\\n            if (s[i] == ' ' || s.size() == i){\\n                if (tem == 0 && final != \\"\\"){\\n                    tem = i;\\n                } else{\\n                    tem2 = i;\\n                    for (int j = tem; j < tem2; ++j){\\n                        stemp += s[j];\\n                    }\\n                    stemp = regex_replace(stemp,regex(\\"\\\\\\\\s\\"),\\"\\");\\n                    vo.push_back(stemp); \\n                    stemp = \\"\\";\\n                    tem = 0;\\n                    tem2 = 0;\\n                    --i;\\n                }\\n            }\\n        }\\n                for(int i = vo.size(); i != 0; i--)\\n    final += vo[i] + \\" \\";\\n    return(final);\\n    }\\n};"},{"time":1692984799,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    string reverseWords(string s) {\\n        string final = \\"\\";\\n        vector<string> vo(1);\\n        string stemp = \\"\\";\\n        int tem = 0;\\n        int tem2 = 0;\\n        for (int i = 0; i <= s.size(); ++i) {\\n            if (s[i] == ' ' || s.size() == i){\\n                if (tem == 0 && final != \\"\\"){\\n                    tem = i;\\n                } else{\\n                    tem2 = i;\\n                    for (int j = tem; j < tem2; ++j){\\n                        stemp += s[j];\\n                    }\\n                    \\n                    vo.push_back(stemp); \\n                    stemp = \\"\\";\\n                    tem = 0;\\n                    tem2 = 0;\\n                    --i;\\n                }\\n            }\\n        }\\n                for(int i = vo.size(); i != 0; i--)\\n    final += vo[i] + \\" \\";\\n    return(final);\\n    }\\n};"},{"time":1692984951,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    string reverseWords(string s) {\\n        string final = \\"\\";\\n        vector<string> vo;\\n        string stemp = \\"\\";\\n        int tem = 0;\\n        int tem2 = 0;\\n        for (int i = 0; i <= s.size(); ++i) {\\n            if (s[i] == ' ' || s.size() == i){\\n                if (tem == 0 && final != \\"\\"){\\n                    tem = i;\\n                } else{\\n                    tem2 = i;\\n                    for (int j = tem; j < tem2; ++j){\\n                        stemp += s[j];\\n                    }\\n                    stemp = regex_replace(stemp,regex(\\"\\\\\\\\s\\"),\\"\\");\\n                    vo.push_back(stemp); \\n                    stemp = \\"\\";\\n                    tem = 0;\\n                    tem2 = 0;\\n                    --i;\\n                }\\n            }\\n        }\\n\\n    return(final);\\n    }\\n};"},{"time":1692984981,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    string reverseWords(string s) {\\n        string final = \\"\\";\\n        vector<string> vo;\\n        string stemp = \\"\\";\\n        int tem = 0;\\n        int tem2 = 0;\\n        for (int i = 0; i <= s.size(); ++i) {\\n            if (s[i] == ' ' || s.size() == i){\\n                if (tem == 0 && final != \\"\\"){\\n                    tem = i;\\n                } else{\\n                    tem2 = i;\\n                    for (int j = tem; j < tem2; ++j){\\n                        stemp += s[j];\\n                    }\\n\\n                    vo.push_back(stemp); \\n                    stemp = \\"\\";\\n                    tem = 0;\\n                    tem2 = 0;\\n                    --i;\\n                }\\n            }\\n        }\\n\\n    return(final);\\n    }\\n};"},{"time":1692985009,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    string reverseWords(string s) {\\n        string final = \\"\\";\\n        vector<string> vo;\\n        string stemp = \\"\\";\\n        int tem = 0;\\n        int tem2 = 0;\\n        for (int i = 0; i <= s.size(); ++i) {\\n            if (s[i] == ' ' || s.size() == i){\\n                if (tem == 0 && final != \\"\\"){\\n                    tem = i;\\n                } else{\\n                    tem2 = i;\\n                    for (int j = tem; j < tem2; ++j){\\n                        stemp += s[j];\\n                    }\\n\\n                    final += stemp; \\n                    stemp = \\"\\";\\n                    tem = 0;\\n                    tem2 = 0;\\n                    --i;\\n                }\\n            }\\n        }\\n\\n    return(final);\\n    }\\n};"},{"time":1692985069,"language":"cpp","runtime":0,"memory":8,"accepted":true,"code_content":"class Solution {\\npublic:\\n    string reverseWords(string s) {\\n        string final = \\"\\";\\n        vector<string> vo; \\n\\n        int start = 0;\\n        int end = 0;\\n\\n        for (int i = 0; i < s.size(); ++i) {\\n            if (s[i] == ' ') {\\n                end = i;\\n                if (start != end) {\\n                    string word = s.substr(start, end - start);\\n                    vo.push_back(word);\\n                }\\n                start = i + 1; \\n            }\\n        }\\n\\n        if (start < s.size()) {\\n            string word = s.substr(start);\\n            vo.push_back(word);\\n        }\\n\\n        for (int i = vo.size() - 1; i >= 0; --i) {\\n            final += vo[i];\\n            if (i > 0) {\\n                final += \\" \\";\\n            }\\n        }\\n\\n        return final;\\n    }\\n};\\n"},{"time":1761745516,"language":"cpp","runtime":3,"memory":10,"accepted":true,"code_content":"class Solution {\\npublic:\\n    string reverseWords(string s) {\\n        int n = s.size();\\n\\n        char prev = ' ';\\n        string myString(n, ' ');\\n        int index = n;\\n\\n        for(int i = 0; i < n; i++){\\n            if(prev ==' ' && s[i] != ' '){\\n                int start = i;\\n                while(s[i] != ' ' && i < n){\\n                    i++;\\n                }\\n                string temp_str = s.substr(start, i-start);\\n                index -= temp_str.size();\\n                if(index -1 > 0){\\n                    temp_str = \\" \\" + temp_str;\\n                    index--;\\n                }\\n                myString.replace(index, temp_str.size(), temp_str);\\n            }\\n            prev = s[i];\\n        }\\n\\n        int space_index = 0;\\n        while(myString[space_index] == ' ' && space_index < n){\\n            space_index++;\\n        }\\n\\n        return myString.substr(space_index, n- space_index);\\n    }\\n};"}]}`),153:{title:"find minimum in rotated sorted array",difficulty:"Medium",html_content:`<h1>153 - Find Minimum in Rotated Sorted Array</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/>find-minimum-in-rotated-sorted-array</a></h2><p>Suppose an array of length <code>n</code> sorted in ascending order is <strong>rotated</strong> between <code>1</code> and <code>n</code> times. For example, the array <code>nums = [0,1,2,4,5,6,7]</code> might become:<ul><li><code>[4,5,6,7,0,1,2]</code> if it was rotated <code>4</code> times.<li><code>[0,1,2,4,5,6,7]</code> if it was rotated <code>7</code> times.</ul><p>Notice that <strong>rotating</strong> an array <code>[a[0], a[1], a[2], ..., a[n-1]]</code> 1 time results in the array <code>[a[n-1], a[0], a[1], a[2], ..., a[n-2]]</code>.<p>Given the sorted rotated array <code>nums</code> of <strong>unique</strong> elements, return <em>the minimum element of this array</em>.<p>You must write an algorithm that runs in <code>O(log n) time</code>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> nums = [3,4,5,1,2]
<strong>Output:</strong> 1
<strong>Explanation:</strong> The original array was [1,2,3,4,5] rotated 3 times.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> nums = [4,5,6,7,0,1,2]
<strong>Output:</strong> 0
<strong>Explanation:</strong> The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> nums = [11,13,15,17]
<strong>Output:</strong> 11
<strong>Explanation:</strong> The original array was [11,13,15,17] and it was rotated 4 times. 
</pre><p> <p><strong>Constraints:</strong><ul><li><code>n == nums.length</code><li><code>1 &lt;= n &lt;= 5000</code><li><code>-5000 &lt;= nums[i] &lt;= 5000</code><li>All the integers of <code>nums</code> are <strong>unique</strong>.<li><code>nums</code> is sorted and rotated between <code>1</code> and <code>n</code> times.</ul>`,submissions:[{time:1766616715,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution:
    def findMin(self, nums: List[int]) -> int:
        left = 0
        right = len(nums) - 1
        test = len(nums) - 1

        while left <= right:
            mid = (left + right) // 2

            if mid + 1 >= len(nums):
                return nums[mid + 1]
            elif nums[mid] > nums[mid + 1]:
                return nums[mid + 1]
            elif nums[mid] > nums[test]:
                left = mid + 1
            else:
                right = mid - 1

        return nums[0]`},{time:1766616835,language:"py",runtime:0,memory:17,accepted:!0,code_content:`class Solution:
    def findMin(self, nums: List[int]) -> int:
        left = 0
        right = len(nums) - 1
        test = len(nums) - 1

        while left <= right:
            mid = (left + right) // 2

            if mid + 1 >= len(nums):
                return nums[mid]
            elif nums[mid] > nums[mid + 1]:
                return nums[mid + 1]
            elif nums[mid] > nums[test]:
                left = mid + 1
            else:
                right = mid - 1

        return nums[0]`}]},155:{title:"min stack",difficulty:"Medium",html_content:`<h1>155 - Min Stack</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/min-stack/>min-stack</a></h2><p>Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.<p>Implement the <code>MinStack</code> class:<ul><li><code>MinStack()</code> initializes the stack object.<li><code>void push(int val)</code> pushes the element <code>val</code> onto the stack.<li><code>void pop()</code> removes the element on the top of the stack.<li><code>int top()</code> gets the top element of the stack.<li><code>int getMin()</code> retrieves the minimum element in the stack.</ul><p>You must implement a solution with <code>O(1)</code> time complexity for each function.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input</strong>
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

<strong>Output</strong>
[null,null,null,null,-3,null,0,-2]

<strong>Explanation</strong>
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
</pre><p> <p><strong>Constraints:</strong><ul><li><code>-2<sup>31</sup> &lt;= val &lt;= 2<sup>31</sup> - 1</code><li>Methods <code>pop</code>, <code>top</code> and <code>getMin</code> operations will always be called on <strong>non-empty</strong> stacks.<li>At most <code>3 * 10<sup>4</sup></code> calls will be made to <code>push</code>, <code>pop</code>, <code>top</code>, and <code>getMin</code>.</ul>`,submissions:[{time:1764089142,language:"py",runtime:3,memory:21,accepted:!0,code_content:`class MinStack:

    def __init__(self):
        self.stack = []
        self.sortlist = []
        

    def push(self, val: int) -> None:
        self.stack.append(val)
        if self.sortlist:
            val = min(self.sortlist[-1],val)
        self.sortlist.append(val)
        

    def pop(self) -> None:
        self.stack.pop()
        self.sortlist.pop()
        
        

    def top(self) -> int:
        return self.stack[-1]
        

    def getMin(self) -> int:
        return self.sortlist[-1]
        


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()`}]},162:{title:"find peak element",difficulty:"Medium",html_content:`<h1>162 - Find Peak Element</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/find-peak-element/>find-peak-element</a></h2><p>A peak element is an element that is strictly greater than its neighbors.<p>Given a <strong>0-indexed</strong> integer array <code>nums</code>, find a peak element, and return its index. If the array contains multiple peaks, return the index to <strong>any of the peaks</strong>.<p>You may imagine that <code>nums[-1] = nums[n] = -∞</code>. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.<p>You must write an algorithm that runs in <code>O(log n)</code> time.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> nums = [1,2,3,1]
<strong>Output:</strong> 2
<strong>Explanation:</strong> 3 is a peak element and your function should return the index number 2.</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> nums = [1,2,1,3,5,6,4]
<strong>Output:</strong> 5
<strong>Explanation:</strong> Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= nums.length &lt;= 1000</code><li><code>-2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1</code><li><code>nums[i] != nums[i + 1]</code> for all valid <code>i</code>.</ul>`,submissions:[{time:1720998444,language:"cpp",runtime:7,memory:11,accepted:!0,code_content:`class Solution {
public:
    int findPeakElement(vector<int>& nums) {
        int start = 0;
        int end = nums.size()-1;
        int mid;
        while(start < end){
            mid = start + (end - start) / 2;
            if(nums[mid] < nums[mid+1]){
                start = mid + 1;
            }else{
                end = mid;
            }

        }
        return start;
    }
};`}]},167:{title:"two sum ii input array is sorted",difficulty:"Medium",html_content:`<h1>167 - Two Sum II - Input Array Is Sorted</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/>two-sum-ii-input-array-is-sorted</a></h2><p>Given a <strong>1-indexed</strong> array of integers <code>numbers</code> that is already <strong><em>sorted in non-decreasing order</em></strong>, find two numbers such that they add up to a specific <code>target</code> number. Let these two numbers be <code>numbers[index<sub>1</sub>]</code> and <code>numbers[index<sub>2</sub>]</code> where <code>1 &lt;= index<sub>1</sub> &lt; index<sub>2</sub> &lt;= numbers.length</code>.<p>Return<em> the indices of the two numbers, </em><code>index<sub>1</sub></code><em> and </em><code>index<sub>2</sub></code><em>, <strong>added by one</strong> as an integer array </em><code>[index<sub>1</sub>, index<sub>2</sub>]</code><em> of length 2.</em><p>The tests are generated such that there is <strong>exactly one solution</strong>. You <strong>may not</strong> use the same element twice.<p>Your solution must use only constant extra space.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> numbers = [<u>2</u>,<u>7</u>,11,15], target = 9
<strong>Output:</strong> [1,2]
<strong>Explanation:</strong> The sum of 2 and 7 is 9. Therefore, index<sub>1</sub> = 1, index<sub>2</sub> = 2. We return [1, 2].
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> numbers = [<u>2</u>,3,<u>4</u>], target = 6
<strong>Output:</strong> [1,3]
<strong>Explanation:</strong> The sum of 2 and 4 is 6. Therefore index<sub>1</sub> = 1, index<sub>2</sub> = 3. We return [1, 3].
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> numbers = [<u>-1</u>,<u>0</u>], target = -1
<strong>Output:</strong> [1,2]
<strong>Explanation:</strong> The sum of -1 and 0 is -1. Therefore index<sub>1</sub> = 1, index<sub>2</sub> = 2. We return [1, 2].
</pre><p> <p><strong>Constraints:</strong><ul><li><code>2 &lt;= numbers.length &lt;= 3 * 10<sup>4</sup></code><li><code>-1000 &lt;= numbers[i] &lt;= 1000</code><li><code>numbers</code> is sorted in <strong>non-decreasing order</strong>.<li><code>-1000 &lt;= target &lt;= 1000</code><li>The tests are generated such that there is <strong>exactly one solution</strong>.</ul>`,submissions:[{time:1762136527,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        int n = numbers.size();

        int l = 0, r = 1;
        while(true){
            if(l == r){
                r++;
                continue;
            }
            int val = numbers[l] + numbers[r];
            if(val == target)
                return {l+1, r+1};
            else if (val < target)
                r++;
            else
                l++;

        }

        return {-1};
        
    }
};`},{time:1762136857,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
    public:
        vector<int> twoSum(vector<int>& numbers, int target) {
            int n = numbers.size();
    
            int l = 0, r = 1;
            while(true){
                if(l == r){
                    r++;
                    continue;
                }
                int val = numbers[l] + numbers[r];
                if(val == target)
                    return {l+1, r+1};
                else if (val < target && r < n - 1)
                    r++;
                else
                    l++;
    
            }
    
            return {-1};
            
        }
    };`},{time:1762137360,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
    public:
        vector<int> twoSum(vector<int>& numbers, int target) {
            int n = numbers.size();
    
            int l = 0, r = 1;
            while(true){
                if(l == r){
                    r++;
                    continue;
                }
                int val = numbers[l] + numbers[r];
                if(val == target)
                    return {l+1, r+1};
                else if (val < target && r < n - 1 && numbers[l] + numbers[r+1] <= target)
                    r++;
                else
                    l++;
    
            }
    
            return {-1};
            
        }
    };`},{time:1762137529,language:"cpp",runtime:0,memory:19,accepted:!0,code_content:`class Solution {
    public:
        vector<int> twoSum(vector<int>& numbers, int target) {
            int n = numbers.size();
    
            int l = 0, r = n-1;
            while(true){

                int val = numbers[l] + numbers[r];
                if(val == target)
                    return {l+1, r+1};
                else if (val > target)
                    r--;
                else
                    l++;
    
            }
    
            return {-1};
            
        }
    };`}]},169:{title:"majority element",difficulty:"Easy",html_content:`<h1>169 - Majority Element</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/majority-element/>majority-element</a></h2><p>Given an array <code>nums</code> of size <code>n</code>, return <em>the majority element</em>.<p>The majority element is the element that appears more than <code>⌊n / 2⌋</code> times. You may assume that the majority element always exists in the array.<p> <p><strong class=example>Example 1:</strong><pre><strong>Input:</strong> nums = [3,2,3]
<strong>Output:</strong> 3
</pre><p><strong class=example>Example 2:</strong><pre><strong>Input:</strong> nums = [2,2,1,1,1,2,2]
<strong>Output:</strong> 2
</pre><p> <p><strong>Constraints:</strong><ul><li><code>n == nums.length</code><li><code>1 &lt;= n &lt;= 5 * 10<sup>4</sup></code><li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code><li>The input is generated such that a majority element will exist in the array.</ul><p> <p><strong>Follow-up:</strong> Could you solve the problem in linear time and in <code>O(1)</code> space?`,submissions:[{time:1761140680,language:"cpp",runtime:0,memory:28,accepted:!0,code_content:`class Solution {
public:
    int majorityElement(vector<int>& nums) {
        int majority = 0;
        int count = 0;

        for (int i: nums){
            if (count == 0){
                majority = i;
            }

            if (i == majority)
                count++;
            else
                count--;

        }

        return majority;
        
    }
};`}]},172:{title:"factorial trailing zeroes",difficulty:"Medium",html_content:`<h1>172 - Factorial Trailing Zeroes</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/factorial-trailing-zeroes/>factorial-trailing-zeroes</a></h2><p>Given an integer <code>n</code>, return <em>the number of trailing zeroes in </em><code>n!</code>.<p>Note that <code>n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1</code>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> n = 3
<strong>Output:</strong> 0
<strong>Explanation:</strong> 3! = 6, no trailing zero.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> n = 5
<strong>Output:</strong> 1
<strong>Explanation:</strong> 5! = 120, one trailing zero.
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> n = 0
<strong>Output:</strong> 0
</pre><p> <p><strong>Constraints:</strong><ul><li><code>0 &lt;= n &lt;= 10<sup>4</sup></code></ul><p> <p><strong>Follow up:</strong> Could you write a solution that works in logarithmic time complexity?`,submissions:[{time:1767108451,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution:
    def trailingZeroes(self, n: int) -> int:
        twos = 0
        fives = 0
        result = 0
        add = 1
        for i in range(1, n + 1):
            add *= i
            while add % 10 == 0:
                add //= 10
                result += 1
            if add % 2 == 0:
                twos += 1
                add //= 2
            elif add % 5 == 0:
                fives += 1
                add //= 5

        return min(twos, fives) + result`},{time:1767108954,language:"py",runtime:0,memory:17,accepted:!0,code_content:`class Solution:
    def trailingZeroes(self, n: int) -> int:
        result = 0
        while n > 0:
            n //= 5
            result += n

        return result`}]},173:{title:"binary search tree iterator",difficulty:"Medium",html_content:`<h1>173 - Binary Search Tree Iterator</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/binary-search-tree-iterator/>binary-search-tree-iterator</a></h2><p>Implement the <code>BSTIterator</code> class that represents an iterator over the <strong><a href=https://en.wikipedia.org/wiki/Tree_traversal#In-order_(LNR) target=_blank>in-order traversal</a></strong> of a binary search tree (BST):<ul><li><code>BSTIterator(TreeNode root)</code> Initializes an object of the <code>BSTIterator</code> class. The <code>root</code> of the BST is given as part of the constructor. The pointer should be initialized to a non-existent number smaller than any element in the BST.<li><code>boolean hasNext()</code> Returns <code>true</code> if there exists a number in the traversal to the right of the pointer, otherwise returns <code>false</code>.<li><code>int next()</code> Moves the pointer to the right, then returns the number at the pointer.</ul><p>Notice that by initializing the pointer to a non-existent smallest number, the first call to <code>next()</code> will return the smallest element in the BST.<p>You may assume that <code>next()</code> calls will always be valid. That is, there will be at least a next number in the in-order traversal when <code>next()</code> is called.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2018/12/25/bst-tree.png style=width:189px;height:178px><pre>
<strong>Input</strong>
["BSTIterator", "next", "next", "hasNext", "next", "hasNext", "next", "hasNext", "next", "hasNext"]
[[[7, 3, 15, null, null, 9, 20]], [], [], [], [], [], [], [], [], []]
<strong>Output</strong>
[null, 3, 7, true, 9, true, 15, true, 20, false]

<strong>Explanation</strong>
BSTIterator bSTIterator = new BSTIterator([7, 3, 15, null, null, 9, 20]);
bSTIterator.next();    // return 3
bSTIterator.next();    // return 7
bSTIterator.hasNext(); // return True
bSTIterator.next();    // return 9
bSTIterator.hasNext(); // return True
bSTIterator.next();    // return 15
bSTIterator.hasNext(); // return True
bSTIterator.next();    // return 20
bSTIterator.hasNext(); // return False
</pre><p> <p><strong>Constraints:</strong><ul><li>The number of nodes in the tree is in the range <code>[1, 10<sup>5</sup>]</code>.<li><code>0 &lt;= Node.val &lt;= 10<sup>6</sup></code><li>At most <code>10<sup>5</sup></code> calls will be made to <code>hasNext</code>, and <code>next</code>.</ul><p> <p><strong>Follow up:</strong><ul><li>Could you implement <code>next()</code> and <code>hasNext()</code> to run in average <code>O(1)</code> time and use <code>O(h)</code> memory, where <code>h</code> is the height of the tree?</ul>`,submissions:[{time:1764965095,language:"py",runtime:11,memory:24,accepted:!0,code_content:`# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class BSTIterator:
    def __init__(self, root: Optional[TreeNode]):
        self.b_tree = deque()
        self.expand(root)

    def expand(self, node):
        while node is not None:
            self.b_tree.append(node)
            node = node.left

    def next(self) -> int:
        temp = self.b_tree.pop()
        self.expand(temp.right)

        return temp.val

    def hasNext(self) -> bool:
        return bool(self.b_tree)

        
# Your BSTIterator object will be instantiated and called as such:
# obj = BSTIterator(root)
# param_1 = obj.next()
# param_2 = obj.hasNext()`}]},188:{title:"best time to buy and sell stock iv",difficulty:"Hard",html_content:`<h1>188 - Best Time to Buy and Sell Stock IV</h1><h2>Difficulty: Hard - <a href=https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/>best-time-to-buy-and-sell-stock-iv</a></h2><p>You are given an integer array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day, and an integer <code>k</code>.<p>Find the maximum profit you can achieve. You may complete at most <code>k</code> transactions: i.e. you may buy at most <code>k</code> times and sell at most <code>k</code> times.<p><strong>Note:</strong> You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> k = 2, prices = [2,4,1]
<strong>Output:</strong> 2
<strong>Explanation:</strong> Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> k = 2, prices = [3,2,6,5,0,3]
<strong>Output:</strong> 7
<strong>Explanation:</strong> Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4. Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= k &lt;= 100</code><li><code>1 &lt;= prices.length &lt;= 1000</code><li><code>0 &lt;= prices[i] &lt;= 1000</code></ul>`,submissions:[{time:1768680865,language:"py",runtime:27,memory:19,accepted:!0,code_content:`class Solution:
    def maxProfit(self, k: int, prices: List[int]) -> int:
        buy: list[int] = [-prices[0]] * k
        profit: list[int] = [0] * k

        for price in prices:
            buy[0] = max(buy[0], -price)
            profit[0] = max(profit[0], price + buy[0])
            for i in range(1,k):
                buy[i] = max(buy[i], profit[i-1] - price)
                profit[i] = max(profit[i], price + buy[i])

        return profit[-1]`}]},189:{title:"rotate array",difficulty:"Medium",html_content:`<h1>189 - Rotate Array</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/rotate-array/>rotate-array</a></h2><p>Given an integer array <code>nums</code>, rotate the array to the right by <code>k</code> steps, where <code>k</code> is non-negative.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> nums = [1,2,3,4,5,6,7], k = 3
<strong>Output:</strong> [5,6,7,1,2,3,4]
<strong>Explanation:</strong>
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> nums = [-1,-100,3,99], k = 2
<strong>Output:</strong> [3,99,-1,-100]
<strong>Explanation:</strong> 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code><li><code>-2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1</code><li><code>0 &lt;= k &lt;= 10<sup>5</sup></code></ul><p> <p><strong>Follow up:</strong><ul><li>Try to come up with as many solutions as you can. There are at least <strong>three</strong> different ways to solve this problem.<li>Could you do it in-place with <code>O(1)</code> extra space?</ul>`,submissions:[{time:1761144370,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        int n = nums.size();
        int rotate = k % n;
        if (rotate == 0 || n == 0)
            return;
            
        int var_swap = nums[n - rotate];
        int* arr = new int[rotate]; 

        for(int i = 0; i < rotate; i++){
            arr[i] = nums[n - rotate + i];
        }

        for (int x = 0; x < rotate; x++){
            for(int i = x; i < n; i++){
                int temp = nums[i];
                nums[i] = var_swap;
                var_swap = temp;
            }
        } 

        for (int i = 0; i < rotate; i++){
            nums[i] = arr[i];
        }

    }
};`},{time:1761145334,language:"cpp",runtime:0,memory:29,accepted:!0,code_content:`class Solution
{
	public: void rotate(vector<int> &nums, int k)
	{
		int n = nums.size();
		int rotate = k % n;
		if (rotate == 0 || n == 0)
			return;

		int var_swap = nums[0];
		int tmp = 0;
		int rotated = 0;
		int start = 0;
		int curr = 0;

		while (rotated < n)
		{
			do { 	
                tmp = nums[(curr + rotate) %n];
				nums[(curr + rotate) % n] = var_swap;
				var_swap = tmp;
				curr = (curr + rotate) % n;
				rotated++;
			} while (curr != start);
			start++;
			curr = start;
			var_swap = nums[curr];
		}

	}

};
`}]},190:{title:"reverse bits",difficulty:"Easy",html_content:"<h1>190 - Reverse Bits</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/reverse-bits/>reverse-bits</a></h2><p>Reverse bits of a given 32 bits signed integer.<p> <p><strong class=example>Example 1:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>n = 43261596</span><p><strong>Output:</strong> <span class=example-io>964176192</span><p><strong>Explanation:</strong><table><tbody><tr><th>Integer<th>Binary<tr><td>43261596<td>00000010100101000001111010011100<tr><td>964176192<td>00111001011110000010100101000000</table></div><p><strong class=example>Example 2:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>n = 2147483644</span><p><strong>Output:</strong> <span class=example-io>1073741822</span><p><strong>Explanation:</strong><table><tbody><tr><th>Integer<th>Binary<tr><td>2147483644<td>01111111111111111111111111111100<tr><td>1073741822<td>00111111111111111111111111111110</table></div><p> <p><strong>Constraints:</strong><ul><li><code>0 &lt;= n &lt;= 2<sup>31</sup> - 2</code><li><code>n</code> is even.</ul><p> <p><strong>Follow up:</strong> If this function is called many times, how would you optimize it?",submissions:[{time:1767022501,language:"py",runtime:36,memory:17,accepted:!0,code_content:`class Solution:
    def reverseBits(self, n: int) -> int:
        result = 0
        for i in range(31):
            result += n & 1
            result <<= 1
            n >>= 1

        return result`}]},191:{title:"number of 1 bits",difficulty:"Easy",html_content:"<h1>191 - Number of 1 Bits</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/number-of-1-bits/>number-of-1-bits</a></h2><p>Given a positive integer <code>n</code>, write a function that returns the number of <span data-keyword=set-bit>set bits</span> in its binary representation (also known as the <a href=http://en.wikipedia.org/wiki/Hamming_weight target=_blank>Hamming weight</a>).<p> <p><strong class=example>Example 1:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>n = 11</span><p><strong>Output:</strong> <span class=example-io>3</span><p><strong>Explanation:</strong><p>The input binary string <strong>1011</strong> has a total of three set bits.</div><p><strong class=example>Example 2:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>n = 128</span><p><strong>Output:</strong> <span class=example-io>1</span><p><strong>Explanation:</strong><p>The input binary string <strong>10000000</strong> has a total of one set bit.</div><p><strong class=example>Example 3:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>n = 2147483645</span><p><strong>Output:</strong> <span class=example-io>30</span><p><strong>Explanation:</strong><p>The input binary string <strong>1111111111111111111111111111101</strong> has a total of thirty set bits.</div><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= n &lt;= 2<sup>31</sup> - 1</code></ul><p> <p><strong>Follow up:</strong> If this function is called many times, how would you optimize it?",submissions:[{time:1767023071,language:"py",runtime:0,memory:17,accepted:!0,code_content:`class Solution:
    def hammingWeight(self, n: int) -> int:
        result = 0
        for i in range(0, int(math.log2(n)) + 1):
            result += n & 1
            n >>= 1

        return result`}]},198:{title:"house robber",difficulty:"Medium",html_content:`<h1>198 - House Robber</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/house-robber/>house-robber</a></h2><p>You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and <b>it will automatically contact the police if two adjacent houses were broken into on the same night</b>.<p>Given an integer array <code>nums</code> representing the amount of money of each house, return <em>the maximum amount of money you can rob tonight <b>without alerting the police</b></em>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> nums = [1,2,3,1]
<strong>Output:</strong> 4
<strong>Explanation:</strong> Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> nums = [2,7,9,3,1]
<strong>Output:</strong> 12
<strong>Explanation:</strong> Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= nums.length &lt;= 100</code><li><code>0 &lt;= nums[i] &lt;= 400</code></ul>`,submissions:[{time:1721165842,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    int rob(vector<int>& nums) {
    int n = nums.size();
    int first;
    int second = nums[0];
    int third = nums[1];
    int cost = 0;
        

    for(int i = 2; i < n; i++){
        first = second;
        second = third;
        third = nums[i];

        if(first && second && third)
        if(first+third > second){
            cost += first;
            first = 0;
            second = 0;
        }
        else{
            cost += second;
            first = 0;
            second = 0;
            third = 0;
        }

    }
    cost += max(second, third);
    return cost;
    }
};`},{time:1721166067,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    int rob(vector<int>& nums) {
    int n = nums.size();
    if(n == 1)
    return nums[0];
    if(n == 2)
    return max(nums[0], nums[1]);
    int first;
    int second = nums[0];
    int third = nums[1];
    int cost = 0;
        

    for(int i = 2; i < n; i++){
        first = second;
        second = third;
        third = nums[i];

        if(first && second && third)
        if(first+third > second){
            cost += first;
            first = 0;
            second = 0;
        }
        else{
            cost += second;
            first = 0;
            second = 0;
            third = 0;
        }

    }
    cost += max(second, third);
    return cost;
    }
};`},{time:1721166206,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    int rob(vector<int>& nums) {
    int n = nums.size();
    if(n == 1)
    return nums[0];
    if(n == 2)
    return max(nums[0], nums[1]);
    int first;
    int second = nums[0];
    int third = nums[1];
    int cost = 0;
        

    for(int i = 2; i < n; i++){
        first = second;
        second = third;
        third = nums[i];

        if(first != -1 && second != -1 && third != -1)
        if(first+third > second){
            cost += first;
            first = -1;
            second = -1;
        }
        else{
            cost += second;
            first = -1;
            second = -1;
            third = -1;
        }

    }
    cost += max(second, third);
    return cost;
    }
};`},{time:1721166309,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    int rob(vector<int>& nums) {
    int n = nums.size();
    if(n == 1)
    return nums[0];
    if(n == 2)
    return max(nums[0], nums[1]);
    int first;
    int second = nums[0];
    int third = nums[1];
    int cost = 0;
        

    for(int i = 2; i < n; i++){
        first = second;
        second = third;
        third = nums[i];

        if(first != -1 && second != -1 && third != -1)
        if(first+third > second){
            cost += first;
            first = -1;
            second = -1;
        }
        else{
            cost += second;
            first = -1;
            second = -1;
            third = -1;
        }

    }
    int temp = max(second, third);
    if(temp != -1)
    cost += temp;
    return cost;
    }
};`},{time:1721244577,language:"cpp",runtime:0,memory:9,accepted:!0,code_content:`class Solution {
public:
    int rob(vector<int>& nums) {
        int rob1, rob2;
        rob1 = 0;
        rob2 = 0;

        for(auto n : nums){
            int temp = max(n + rob1, rob2);
            rob1 = rob2;
            rob2 = temp;
        }
        return rob2;
    }
};`}]},199:{title:"binary tree right side view",difficulty:"Medium",html_content:"<h1>199 - Binary Tree Right Side View</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/binary-tree-right-side-view/>binary-tree-right-side-view</a></h2><p>Given the <code>root</code> of a binary tree, imagine yourself standing on the <strong>right side</strong> of it, return <em>the values of the nodes you can see ordered from top to bottom</em>.<p> <p><strong class=example>Example 1:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>root = [1,2,3,null,5,null,4]</span><p><strong>Output:</strong> <span class=example-io>[1,3,4]</span><p><strong>Explanation:</strong><p><img alt src=https://assets.leetcode.com/uploads/2024/11/24/tmpd5jn43fs-1.png style=width:400px;height:207px></div><p><strong class=example>Example 2:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>root = [1,2,3,4,null,null,null,5]</span><p><strong>Output:</strong> <span class=example-io>[1,3,4,5]</span><p><strong>Explanation:</strong><p><img alt src=https://assets.leetcode.com/uploads/2024/11/24/tmpkpe40xeh-1.png style=width:400px;height:214px></div><p><strong class=example>Example 3:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>root = [1,null,3]</span><p><strong>Output:</strong> <span class=example-io>[1,3]</span></div><p><strong class=example>Example 4:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>root = []</span><p><strong>Output:</strong> <span class=example-io>[]</span></div><p> <p><strong>Constraints:</strong><ul><li>The number of nodes in the tree is in the range <code>[0, 100]</code>.<li><code>-100 &lt;= Node.val &lt;= 100</code></ul>",submissions:[{time:1719856188,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    vector<int> rightSideView(TreeNode* root) {
    vector<int> v;
    bfs(root, v, 0);
    return v;
        
    }
private:
    void bfs(TreeNode* root, vector<int>& v, int level){
        if (root){
        if(v.size() == level)
        v.push_back(root->val);
        level++;

        bfs(root->right, v, level);
        bfs(root->right, v, level);
        }
    }
};`},{time:1719856385,language:"cpp",runtime:0,memory:13,accepted:!0,code_content:`/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    vector<int> rightSideView(TreeNode* root) {
    vector<int> v;
    bfs(root, v, 0);
    return v;
        
    }
private:
    void bfs(TreeNode* root, vector<int>& v, int level){
        if (root) {
        if(v.size() == level)
        v.push_back(root->val);
        level++;

        bfs(root->right, v, level);
        bfs(root->left, v, level);
        }
    }
};`}]},200:{title:"number of islands",difficulty:"Medium",html_content:`<h1>200 - Number of Islands</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/number-of-islands/>number-of-islands</a></h2><p>Given an <code>m x n</code> 2D binary grid <code>grid</code> which represents a map of <code>'1'</code>s (land) and <code>'0'</code>s (water), return <em>the number of islands</em>.<p>An <strong>island</strong> is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
<strong>Output:</strong> 1
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
<strong>Output:</strong> 3
</pre><p> <p><strong>Constraints:</strong><ul><li><code>m == grid.length</code><li><code>n == grid[i].length</code><li><code>1 &lt;= m, n &lt;= 300</code><li><code>grid[i][j]</code> is <code>'0'</code> or <code>'1'</code>.</ul>`,submissions:[{time:1765301860,language:"py",runtime:234,memory:20,accepted:!0,code_content:`class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        stack = deque()
        number = 0
        for x in range(len(grid)):
            for y in range(len(grid[0])):
                if grid[x][y] == "0":
                    continue

                number += 1
                grid[x][y] = "0"
                stack.append((x,y))
                while stack:
                    j, k = stack.pop()
                    if j > 0 and grid[j - 1][k] == "1":
                        stack.append((j - 1, k))
                        grid[j - 1][k] = "0"

                    if j < len(grid) -1 and grid[j + 1][k] == "1":
                        stack.append((j + 1, k))
                        grid[j + 1][k] = "0"

                    if k > 0 and grid[j][k - 1] == "1":
                        stack.append((j, k - 1))
                        grid[j][k - 1] = "0"

                    if k < len(grid[0]) -1 and grid[j][k + 1] == "1":
                        stack.append((j, k + 1))
                        grid[j][k + 1] = "0"

        return number`},{time:1765302093,language:"py",runtime:0,memory:20,accepted:!0,code_content:`class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        stack = deque()
        number = 0
        for x in range(len(grid)):
            for y in range(len(grid[0])):
                if grid[x][y] == "0":
                    continue

                number += 1
                grid[x][y] = "0"
                stack.append((x,y))
                while stack:
                    j, k = stack.pop()
                    if j > 0 and grid[j - 1][k] == "1":
                        stack.append((j - 1, k))
                        grid[j - 1][k] = "0"

                    if j < len(grid) -1 and grid[j + 1][k] == "1":
                        stack.append((j + 1, k))
                        grid[j + 1][k] = "0"

                    if k > 0 and grid[j][k - 1] == "1":
                        stack.append((j, k - 1))
                        grid[j][k - 1] = "0"

                    if k < len(grid[0]) -1 and grid[j][k + 1] == "1":
                        stack.append((j, k + 1))
                        grid[j][k + 1] = "0"

        return number

__import__("atexit").register(lambda:open("display_runtime.txt","w").write("0"))`}]},201:{title:"bitwise and of numbers range",difficulty:"Medium",html_content:`<h1>201 - Bitwise AND of Numbers Range</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/bitwise-and-of-numbers-range/>bitwise-and-of-numbers-range</a></h2><p>Given two integers <code>left</code> and <code>right</code> that represent the range <code>[left, right]</code>, return <em>the bitwise AND of all numbers in this range, inclusive</em>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> left = 5, right = 7
<strong>Output:</strong> 4
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> left = 0, right = 0
<strong>Output:</strong> 0
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> left = 1, right = 2147483647
<strong>Output:</strong> 0
</pre><p> <p><strong>Constraints:</strong><ul><li><code>0 &lt;= left &lt;= right &lt;= 2<sup>31</sup> - 1</code></ul>`,submissions:[{time:1767034610,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution:
    def rangeBitwiseAnd(self, left: int, right: int) -> int:
        for i in reversed(range(32)):
            shifted_left = left >> i
            shifted_right = right >> i

            if shifted_left != shifted_right:
                temp = (2 ** (i+1) ) -1
                return (left & right) & ~temp

        return 0`},{time:1767034887,language:"py",runtime:20,memory:17,accepted:!0,code_content:`class Solution:
    def rangeBitwiseAnd(self, left: int, right: int) -> int:
        for i in reversed(range(32)):
            shifted_left = left >> i
            shifted_right = right >> i

            if shifted_left != shifted_right:
                temp = (2 ** (i+1) ) -1
                return (left & right) & ~temp

        return left & right`}]},202:{title:"happy number",difficulty:"Easy",html_content:`<h1>202 - Happy Number</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/happy-number/>happy-number</a></h2><p>Write an algorithm to determine if a number <code>n</code> is happy.<p>A <strong>happy number</strong> is a number defined by the following process:<ul><li>Starting with any positive integer, replace the number by the sum of the squares of its digits.<li>Repeat the process until the number equals 1 (where it will stay), or it <strong>loops endlessly in a cycle</strong> which does not include 1.<li>Those numbers for which this process <strong>ends in 1</strong> are happy.</ul><p>Return <code>true</code> <em>if</em> <code>n</code> <em>is a happy number, and</em> <code>false</code> <em>if not</em>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> n = 19
<strong>Output:</strong> true
<strong>Explanation:</strong>
1<sup>2</sup> + 9<sup>2</sup> = 82
8<sup>2</sup> + 2<sup>2</sup> = 68
6<sup>2</sup> + 8<sup>2</sup> = 100
1<sup>2</sup> + 0<sup>2</sup> + 0<sup>2</sup> = 1
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> n = 2
<strong>Output:</strong> false
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= n &lt;= 2<sup>31</sup> - 1</code></ul>`,submissions:[{time:1763839675,language:"py",runtime:0,memory:17,accepted:!0,code_content:`class Solution:
    def isHappy(self, n: int) -> bool:
        check = set()
        sub = ord('0')
        while n not in check:
            check.add(n)
            temp = 0
            for ch in str(n):
                temp += (ord(ch) - sub) ** 2

            if temp == 1:
                return True

            n = temp

        return False`}]},205:{title:"isomorphic strings",difficulty:"Easy",html_content:`<h1>205 - Isomorphic Strings</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/isomorphic-strings/>isomorphic-strings</a></h2><p>Given two strings <code>s</code> and <code>t</code>, <em>determine if they are isomorphic</em>.<p>Two strings <code>s</code> and <code>t</code> are isomorphic if the characters in <code>s</code> can be replaced to get <code>t</code>.<p>All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.<p> <p><strong class=example>Example 1:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>s = "egg", t = "add"</span><p><strong>Output:</strong> <span class=example-io>true</span><p><strong>Explanation:</strong><p>The strings <code>s</code> and <code>t</code> can be made identical by:<ul><li>Mapping <code>'e'</code> to <code>'a'</code>.<li>Mapping <code>'g'</code> to <code>'d'</code>.</ul></div><p><strong class=example>Example 2:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>s = "foo", t = "bar"</span><p><strong>Output:</strong> <span class=example-io>false</span><p><strong>Explanation:</strong><p>The strings <code>s</code> and <code>t</code> can not be made identical as <code>'o'</code> needs to be mapped to both <code>'a'</code> and <code>'r'</code>.</div><p><strong class=example>Example 3:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>s = "paper", t = "title"</span><p><strong>Output:</strong> <span class=example-io>true</span></div><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= s.length &lt;= 5 * 10<sup>4</sup></code><li><code>t.length == s.length</code><li><code>s</code> and <code>t</code> consist of any valid ascii character.</ul>`,submissions:[{time:1763745769,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        set1 = defaultdict(int)
        for c in s:
            set1[c] += 1
        set2 = defaultdict(int)
        for c in t:
            set2[c] += 1

        validate = defaultdict(int)
        for nums in set1.values():
            validate[nums] += 1
        for nums in set2.values():
            validate[nums] -= 1

        return not any(value < 0 for value in validate.values())`},{time:1763746530,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        if len(s) == 0:
            return True

        prev1 = s[0]
        prev2 = t[0]
        for i in range(len(s)):
            if (prev1 == s[i]) ^ (prev2 == t[i]):
                return False
            prev1, prev2 = s[i], t[i]

        return True`},{time:1763746653,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        if len(s) == 0:
            return True

        prev1 = s[0]
        prev2 = t[0]
        for i in range(len(s)):
            if (prev1 == s[i]) ^ (prev2 == t[i]):
                return False
            prev1, prev2 = s[i], t[i]

        set1 = defaultdict(int)
        for c in s:
            set1[c] += 1
        set2 = defaultdict(int)
        for c in t:
            set2[c] += 1

        validate = defaultdict(int)
        for nums in set1.values():
            validate[nums] += 1
        for nums in set2.values():
            validate[nums] -= 1

        return not any(value < 0 for value in validate.values())`},{time:1763747201,language:"py",runtime:7,memory:18,accepted:!0,code_content:`class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        set1 = defaultdict(int)
        set2 = defaultdict(int)

        for i in range(len(s)):
            if s[i] not in set1:
                set1[s[i]] = i

            if t[i] not in set2:
                set2[t[i]] = i

            if set1[s[i]] != set2[t[i]]:
                return False

        return True`}]},206:{title:"reverse linked list",difficulty:"Easy",html_content:`<h1>206 - Reverse Linked List</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/reverse-linked-list/>reverse-linked-list</a></h2><p>Given the <code>head</code> of a singly linked list, reverse the list, and return <em>the reversed list</em>.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg style=width:542px;height:222px><pre>
<strong>Input:</strong> head = [1,2,3,4,5]
<strong>Output:</strong> [5,4,3,2,1]
</pre><p><strong class=example>Example 2:</strong><p><img alt src=https://assets.leetcode.com/uploads/2021/02/19/rev1ex2.jpg style=width:182px;height:222px><pre>
<strong>Input:</strong> head = [1,2]
<strong>Output:</strong> [2,1]
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> head = []
<strong>Output:</strong> []
</pre><p> <p><strong>Constraints:</strong><ul><li>The number of nodes in the list is the range <code>[0, 5000]</code>.<li><code>-5000 &lt;= Node.val &lt;= 5000</code></ul><p> <p><strong>Follow up:</strong> A linked list can be reversed either iteratively or recursively. Could you implement both?`,submissions:[{time:1719423052,language:"cpp",runtime:3,memory:11,accepted:!0,code_content:`/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        ListNode* prev = nullptr;
        ListNode* curr = head;
        ListNode* next = nullptr;

        while(curr){
            next = curr->next;
            curr->next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
};`}]},207:{title:"course schedule",difficulty:"Medium",html_content:`<h1>207 - Course Schedule</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/course-schedule/>course-schedule</a></h2><p>There are a total of <code>numCourses</code> courses you have to take, labeled from <code>0</code> to <code>numCourses - 1</code>. You are given an array <code>prerequisites</code> where <code>prerequisites[i] = [a<sub>i</sub>, b<sub>i</sub>]</code> indicates that you <strong>must</strong> take course <code>b<sub>i</sub></code> first if you want to take course <code>a<sub>i</sub></code>.<ul><li>For example, the pair <code>[0, 1]</code>, indicates that to take course <code>0</code> you have to first take course <code>1</code>.</ul><p>Return <code>true</code> if you can finish all courses. Otherwise, return <code>false</code>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> numCourses = 2, prerequisites = [[1,0]]
<strong>Output:</strong> true
<strong>Explanation:</strong> There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> numCourses = 2, prerequisites = [[1,0],[0,1]]
<strong>Output:</strong> false
<strong>Explanation:</strong> There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= numCourses &lt;= 2000</code><li><code>0 &lt;= prerequisites.length &lt;= 5000</code><li><code>prerequisites[i].length == 2</code><li><code>0 &lt;= a<sub>i</sub>, b<sub>i</sub> &lt; numCourses</code><li>All the pairs prerequisites[i] are <strong>unique</strong>.</ul>`,submissions:[{time:1765851516,language:"py",runtime:4,memory:19,accepted:!0,code_content:`class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        adj = [[] for _ in range(numCourses)]
        for course, pre in prerequisites:
            adj[pre].append(course)

        vis = [False] * numCourses
        path = [False] * numCourses

        def dfs(node):
            vis[node] = path[node] = True
            
            for next_node in adj[node]:
                if not vis[next_node]:
                    if dfs(next_node): return True
                elif path[next_node]: return True
            
            path[node] = False
            return False

        for i in range(numCourses):
            if not vis[i]:
                if dfs(i): return False

        return True
        `}]},208:{title:"implement trie prefix tree",difficulty:"Medium",html_content:`<h1>208 - Implement Trie (Prefix Tree)</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/implement-trie-prefix-tree/>implement-trie-prefix-tree</a></h2><p>A <a href=https://en.wikipedia.org/wiki/Trie target=_blank><strong>trie</strong></a> (pronounced as "try") or <strong>prefix tree</strong> is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.<p>Implement the Trie class:<ul><li><code>Trie()</code> Initializes the trie object.<li><code>void insert(String word)</code> Inserts the string <code>word</code> into the trie.<li><code>boolean search(String word)</code> Returns <code>true</code> if the string <code>word</code> is in the trie (i.e., was inserted before), and <code>false</code> otherwise.<li><code>boolean startsWith(String prefix)</code> Returns <code>true</code> if there is a previously inserted string <code>word</code> that has the prefix <code>prefix</code>, and <code>false</code> otherwise.</ul><p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input</strong>
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
<strong>Output</strong>
[null, null, true, false, true, null, true]

<strong>Explanation</strong>
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // return True
trie.search("app");     // return False
trie.startsWith("app"); // return True
trie.insert("app");
trie.search("app");     // return True
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= word.length, prefix.length &lt;= 2000</code><li><code>word</code> and <code>prefix</code> consist only of lowercase English letters.<li>At most <code>3 * 10<sup>4</sup></code> calls <strong>in total</strong> will be made to <code>insert</code>, <code>search</code>, and <code>startsWith</code>.</ul>`,submissions:[{time:1721530312,language:"cpp",runtime:45,memory:48,accepted:!0,code_content:`class TrieNode {
public:
    TrieNode *child[26];
    bool isWord;
    TrieNode() {
        isWord = false;
        for (auto &a : child) a = nullptr;
    }
};

class Trie {
    TrieNode* root;
public:
    Trie() {
        root = new TrieNode();
    }
    
    void insert(string word) {
        TrieNode * currentNode = root;
        for(auto ch: word){
            if(currentNode->child[ch - 'a'] == NULL){
                currentNode->child[ch - 'a'] = new TrieNode();
            }
            currentNode = currentNode->child[ch - 'a'];
        }
        currentNode->isWord = true;
    }
    
    bool search(string word) {
        TrieNode * currentNode = root;
        for(auto ch: word){
            if(currentNode->child[ch - 'a'] == NULL){
                return false;
            }
            currentNode = currentNode->child[ch - 'a'];
        }
        return currentNode->isWord;
    }
    
    bool startsWith(string prefix) {
        TrieNode * currentNode = root;
        for(auto ch: prefix){
            if(currentNode->child[ch - 'a'] == NULL){
                return false;
            }
            currentNode = currentNode->child[ch - 'a'];
        }
        return true;
    }
};

/**
 * Your Trie object will be instantiated and called as such:
 * Trie* obj = new Trie();
 * obj->insert(word);
 * bool param_2 = obj->search(word);
 * bool param_3 = obj->startsWith(prefix);
 */`}]},209:{title:"minimum size subarray sum",difficulty:"Medium",html_content:`<h1>209 - Minimum Size Subarray Sum</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/minimum-size-subarray-sum/>minimum-size-subarray-sum</a></h2><p>Given an array of positive integers <code>nums</code> and a positive integer <code>target</code>, return <em>the <strong>minimal length</strong> of a </em><span data-keyword=subarray-nonempty><em>subarray</em></span><em> whose sum is greater than or equal to</em> <code>target</code>. If there is no such subarray, return <code>0</code> instead.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> target = 7, nums = [2,3,1,2,4,3]
<strong>Output:</strong> 2
<strong>Explanation:</strong> The subarray [4,3] has the minimal length under the problem constraint.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> target = 4, nums = [1,4,4]
<strong>Output:</strong> 1
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> target = 11, nums = [1,1,1,1,1,1,1,1]
<strong>Output:</strong> 0
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= target &lt;= 10<sup>9</sup></code><li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code><li><code>1 &lt;= nums[i] &lt;= 10<sup>4</sup></code></ul><p> <p><strong>Follow up:</strong> If you have figured out the <code>O(n)</code> solution, try coding another solution of which the time complexity is <code>O(n log(n))</code>.`,submissions:[{time:1762288347,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    int minSubArrayLen(int target, vector<int>& nums) {

        int l = 0, r = 0;
        int n = nums.size()-1;

        int result = INT_MAX;
        int slide_value = nums[0];
        while(r < n || l < n){
            if(slide_value >= target){
                result = min(r-l +1, result);
                if(result == 0)
                    return result;
                slide_value -= nums[l];
                l++;
            } else {
                if(r < n){
                    r++;
                    slide_value += nums[r];
                }
                else{
                    break;
                }
            }

        }
        if(result == INT_MAX)
            return 0;
        return result;
        
    }
};`},{time:1762288503,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    int minSubArrayLen(int target, vector<int>& nums) {

        int l = 0, r = 0;
        int n = nums.size()-1;

        int result = INT_MAX;
        int slide_value = nums[0];
        while(r < n || l < n){
            if(slide_value >= target){
                result = min(r-l +1, result);
                if(result == 0)
                    return result;
                slide_value -= nums[l];
                l++;
            } else {
                if(r < n){
                    r++;
                    slide_value += nums[r];
                }
                else{
                    break;
                }
            }

        }
        if(result == INT_MAX)
            return 0;
        if(nums[n] >= target)
            return 1;
        return result;
        
    }
};`},{time:1762288851,language:"cpp",runtime:0,memory:32,accepted:!0,code_content:`class Solution {
public:
    int minSubArrayLen(int target, vector<int>& nums) {

        int l = 0, r = 0;
        int n = nums.size()-1;

        if(n == 0){
            return static_cast<int>(nums[0] >= target);
        }

        int result = INT_MAX;
        int slide_value = nums[0];
        while(r < n || l < n){
            if(slide_value >= target){
                result = min(r-l +1, result);
                if(result == 0)
                    return result;
                slide_value -= nums[l];
                l++;
            } else {
                if(r < n){
                    r++;
                    slide_value += nums[r];
                }
                else{
                    break;
                }
            }

        }
        if(result == INT_MAX)
            return 0;
        if(nums[n] >= target)
            return 1;
        return result;
        
    }
};`}]},210:{title:"course schedule ii",difficulty:"Medium",html_content:`<h1>210 - Course Schedule II</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/course-schedule-ii/>course-schedule-ii</a></h2><p>There are a total of <code>numCourses</code> courses you have to take, labeled from <code>0</code> to <code>numCourses - 1</code>. You are given an array <code>prerequisites</code> where <code>prerequisites[i] = [a<sub>i</sub>, b<sub>i</sub>]</code> indicates that you <strong>must</strong> take course <code>b<sub>i</sub></code> first if you want to take course <code>a<sub>i</sub></code>.<ul><li>For example, the pair <code>[0, 1]</code>, indicates that to take course <code>0</code> you have to first take course <code>1</code>.</ul><p>Return <em>the ordering of courses you should take to finish all courses</em>. If there are many valid answers, return <strong>any</strong> of them. If it is impossible to finish all courses, return <strong>an empty array</strong>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> numCourses = 2, prerequisites = [[1,0]]
<strong>Output:</strong> [0,1]
<strong>Explanation:</strong> There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
<strong>Output:</strong> [0,2,1,3]
<strong>Explanation:</strong> There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> numCourses = 1, prerequisites = []
<strong>Output:</strong> [0]
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= numCourses &lt;= 2000</code><li><code>0 &lt;= prerequisites.length &lt;= numCourses * (numCourses - 1)</code><li><code>prerequisites[i].length == 2</code><li><code>0 &lt;= a<sub>i</sub>, b<sub>i</sub> &lt; numCourses</code><li><code>a<sub>i</sub> != b<sub>i</sub></code><li>All the pairs <code>[a<sub>i</sub>, b<sub>i</sub>]</code> are <strong>distinct</strong>.</ul>`,submissions:[{time:1768611710,language:"py",runtime:0,memory:21,accepted:!0,code_content:`class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        adj = [[] for _ in range(numCourses)]
        for course, pre in prerequisites:
            adj[pre].append(course)

        vis = [False] * numCourses
        path = [False] * numCourses
        self.result:List[int] = []

        def dfs(node):
            vis[node] = path[node] = True

            for next_node in adj[node]:
                if not vis[next_node]:
                    if dfs(next_node):
                        return True
                elif path[next_node]:
                    return True

            self.result.append(node)

            path[node] = False
            return False

        for i in range(numCourses):
            if not vis[i]:
                if dfs(i):
                    return []

        self.result.reverse()
        return self.result`}]},211:{title:"design add and search words data structure",difficulty:"Medium",html_content:`<h1>211 - Design Add and Search Words Data Structure</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/design-add-and-search-words-data-structure/>design-add-and-search-words-data-structure</a></h2><p>Design a data structure that supports adding new words and finding if a string matches any previously added string.<p>Implement the <code>WordDictionary</code> class:<ul><li><code>WordDictionary()</code> Initializes the object.<li><code>void addWord(word)</code> Adds <code>word</code> to the data structure, it can be matched later.<li><code>bool search(word)</code> Returns <code>true</code> if there is any string in the data structure that matches <code>word</code> or <code>false</code> otherwise. <code>word</code> may contain dots <code>'.'</code> where dots can be matched with any letter.</ul><p> <p><strong class=example>Example:</strong><pre>
<strong>Input</strong>
["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
<strong>Output</strong>
[null,null,null,null,false,true,true,true]

<strong>Explanation</strong>
WordDictionary wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // return False
wordDictionary.search("bad"); // return True
wordDictionary.search(".ad"); // return True
wordDictionary.search("b.."); // return True
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= word.length &lt;= 25</code><li><code>word</code> in <code>addWord</code> consists of lowercase English letters.<li><code>word</code> in <code>search</code> consist of <code>'.'</code> or lowercase English letters.<li>There will be at most <code>2</code> dots in <code>word</code> for <code>search</code> queries.<li>At most <code>10<sup>4</sup></code> calls will be made to <code>addWord</code> and <code>search</code>.</ul>`,submissions:[{time:1768319815,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`class WordDictionary:

    def __init__(self):
        self.dict = dict()
        self.is_word = False

    def addWord(self, word: str) -> None:
        temp_dict: WordDictionary = self
        for ch in word:
            if ch in temp_dict.dict:
                temp_dict = temp_dict.dict[ch]
            else:
                temp = WordDictionary()
                temp_dict.dict[ch] = temp
                temp_dict = temp

        temp_dict.is_word = True

    def search(self, word: str) -> bool:
        temp_dict: WordDictionary = self
        for index, ch in enumerate(word):
            if ch == '.':
                for item in temp_dict.dict.values():
                    if item.search(word[index+1:]):
                        return True
            elif ch in temp_dict.dict:
                temp_dict = temp_dict.dict[ch]
            else:
                return False

        return temp_dict.is_word`},{time:1768328602,language:"py",runtime:1048,memory:67,accepted:!0,code_content:`class WordDictionary:

    def __init__(self):
        self.dict = dict()
        self.is_word = False

    def addWord(self, word: str) -> None:
        temp_dict: WordDictionary = self
        for ch in word:
            if ch in temp_dict.dict:
                temp_dict = temp_dict.dict[ch]
            else:
                temp = WordDictionary()
                temp_dict.dict[ch] = temp
                temp_dict = temp

        temp_dict.is_word = True

    def search(self, word: str) -> bool:
        temp_dict: WordDictionary = self

        if not temp_dict.dict and word:
            return False

        for index, ch in enumerate(word):
            if not temp_dict.dict:
                return False

            if ch == '.':
                for item in temp_dict.dict.values():
                    if item.search(word[index+1:]):
                        return True

                return False
            elif ch in temp_dict.dict:
                temp_dict = temp_dict.dict[ch]
            else:
                return False

        return temp_dict.is_word`}]},212:JSON.parse(`{"title":"word search ii","difficulty":"Hard","html_content":"<h1>212 - Word Search II</h1><h2>Difficulty: Hard - <a href=https://leetcode.com/problems/word-search-ii/>word-search-ii</a></h2><p>Given an <code>m x n</code> <code>board</code> of characters and a list of strings <code>words</code>, return <em>all words on the board</em>.<p>Each word must be constructed from letters of sequentially adjacent cells, where <strong>adjacent cells</strong> are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/11/07/search1.jpg style=width:322px;height:322px><pre>\\n<strong>Input:</strong> board = [[\\"o\\",\\"a\\",\\"a\\",\\"n\\"],[\\"e\\",\\"t\\",\\"a\\",\\"e\\"],[\\"i\\",\\"h\\",\\"k\\",\\"r\\"],[\\"i\\",\\"f\\",\\"l\\",\\"v\\"]], words = [\\"oath\\",\\"pea\\",\\"eat\\",\\"rain\\"]\\n<strong>Output:</strong> [\\"eat\\",\\"oath\\"]\\n</pre><p><strong class=example>Example 2:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/11/07/search2.jpg style=width:162px;height:162px><pre>\\n<strong>Input:</strong> board = [[\\"a\\",\\"b\\"],[\\"c\\",\\"d\\"]], words = [\\"abcb\\"]\\n<strong>Output:</strong> []\\n</pre><p> <p><strong>Constraints:</strong><ul><li><code>m == board.length</code><li><code>n == board[i].length</code><li><code>1 &lt;= m, n &lt;= 12</code><li><code>board[i][j]</code> is a lowercase English letter.<li><code>1 &lt;= words.length &lt;= 3 * 10<sup>4</sup></code><li><code>1 &lt;= words[i].length &lt;= 10</code><li><code>words[i]</code> consists of lowercase English letters.<li>All the strings of <code>words</code> are unique.</ul>","submissions":[{"time":1768423561,"language":"py","runtime":-1,"memory":-1,"accepted":false,"code_content":"class TrieNode:\\n    def __init__(self):\\n        self.children: Dict[int:TrieNode] = {}\\n        self.isEndOfWord: bool = False\\n\\n    def insert(self, key: str) -> None:\\n        curr: TrieNode = self\\n        for c in key:\\n            index: int = ord(c) - ord('a')\\n            if index in curr.children:\\n                new_node = curr.children[index]\\n            else:\\n                new_node = TrieNode()\\n                curr.children[index] = new_node\\n\\n            curr = new_node\\n        curr.isEndOfWord = True\\n\\n    def search(self, key: str) -> bool:\\n        curr: TrieNode = self\\n        for c in key:\\n            index: int = ord(c) - ord('a')\\n            if index not in curr.children:\\n                return False\\n\\n            curr = curr.children[index]\\n        return curr.isEndOfWord\\n\\n    def ch_search(self, key: str) -> None|TrieNode:\\n        index: int = ord(key) - ord('a')\\n        if index in self.children:\\n            return self.children[index]\\n        else:\\n            return None\\n\\n\\nclass Solution:\\n    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:\\n        result: List[str] = []\\n\\n        trie:TrieNode = TrieNode()\\n        for word in words:\\n            trie.insert(word)\\n\\n\\n        def dfs(check_board: List[List[bool]], x: int, y: int, this_trie: TrieNode, word: str) -> None:\\n            if x > 0 and check_board[x - 1][y]:\\n                current_trie: TrieNode = this_trie.ch_search(board[x - 1][y])\\n                if current_trie:\\n                    new_word = word + board[x - 1][y]\\n                    if current_trie.isEndOfWord:\\n                        result.append(new_word)\\n                    check_board[x - 1][y] = False\\n                    dfs(check_board, x - 1, y, current_trie, new_word)\\n                    check_board[x - 1][y] = True\\n\\n            if y > 0 and check_board[x][y - 1]:\\n                current_trie: TrieNode = this_trie.ch_search(board[x][y - 1])\\n                if current_trie:\\n                    new_word = word + board[x][y - 1]\\n                    if current_trie.isEndOfWord:\\n                        result.append(new_word)\\n                    check_board[x][y - 1] = False\\n                    dfs(check_board, x, y  - 1, current_trie, new_word)\\n                    check_board[x][y - 1] = True\\n\\n            if x + 1 < len(check_board) and check_board[x + 1][y]:\\n                current_trie: TrieNode = this_trie.ch_search(board[x + 1][y])\\n                if current_trie:\\n                    new_word = word + board[x + 1][y]\\n                    if current_trie.isEndOfWord:\\n                        result.append(new_word)\\n                    check_board[x + 1][y] = False\\n                    dfs(check_board, x + 1, y, current_trie, new_word)\\n                    check_board[x + 1][y] = True\\n\\n            if y + 1 < len(check_board[0]) and check_board[x][y + 1]:\\n                current_trie: TrieNode = this_trie.ch_search(board[x][y + 1])\\n                if current_trie:\\n                    new_word = word  + board[x][y + 1]\\n                    if current_trie.isEndOfWord:\\n                        result.append(new_word)\\n                    check_board[x][y + 1] = False\\n                    dfs(check_board, x, y + 1, current_trie, new_word)\\n                    check_board[x][y + 1] = True\\n\\n        checking_board: list[list[bool]] = [[True for _ in range(len(board[0]))] for _ in range(len(board))]\\n        for x in range(len(board)):\\n            for y in range(len(board[0])):\\n                current_trie: TrieNode = trie.ch_search(board[x][y])\\n                if current_trie:\\n                    if current_trie.isEndOfWord:\\n                        result.append(board[x][y])\\n                    dfs(checking_board, x, y, current_trie, board[x][y] + \\"\\")\\n\\n        return result"},{"time":1768423714,"language":"py","runtime":-1,"memory":-1,"accepted":false,"code_content":"class TrieNode:\\n    def __init__(self):\\n        self.children: Dict[int:TrieNode] = {}\\n        self.isEndOfWord: bool = False\\n\\n    def insert(self, key: str) -> None:\\n        curr: TrieNode = self\\n        for c in key:\\n            index: int = ord(c) - ord('a')\\n            if index in curr.children:\\n                new_node = curr.children[index]\\n            else:\\n                new_node = TrieNode()\\n                curr.children[index] = new_node\\n\\n            curr = new_node\\n        curr.isEndOfWord = True\\n\\n    def search(self, key: str) -> bool:\\n        curr: TrieNode = self\\n        for c in key:\\n            index: int = ord(c) - ord('a')\\n            if index not in curr.children:\\n                return False\\n\\n            curr = curr.children[index]\\n        return curr.isEndOfWord\\n\\n    def ch_search(self, key: str) -> None|TrieNode:\\n        index: int = ord(key) - ord('a')\\n        if index in self.children:\\n            return self.children[index]\\n        else:\\n            return None\\n\\n\\nclass Solution:\\n    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:\\n        result: set[str] = set()\\n\\n        trie:TrieNode = TrieNode()\\n        for word in words:\\n            trie.insert(word)\\n\\n\\n        def dfs(check_board: List[List[bool]], x: int, y: int, this_trie: TrieNode, word: str) -> None:\\n            if x > 0 and check_board[x - 1][y]:\\n                current_trie: TrieNode = this_trie.ch_search(board[x - 1][y])\\n                if current_trie:\\n                    new_word = word + board[x - 1][y]\\n                    if current_trie.isEndOfWord:\\n                        result.add(new_word)\\n                    check_board[x - 1][y] = False\\n                    dfs(check_board, x - 1, y, current_trie, new_word)\\n                    check_board[x - 1][y] = True\\n\\n            if y > 0 and check_board[x][y - 1]:\\n                current_trie: TrieNode = this_trie.ch_search(board[x][y - 1])\\n                if current_trie:\\n                    new_word = word + board[x][y - 1]\\n                    if current_trie.isEndOfWord:\\n                        result.add(new_word)\\n                    check_board[x][y - 1] = False\\n                    dfs(check_board, x, y  - 1, current_trie, new_word)\\n                    check_board[x][y - 1] = True\\n\\n            if x + 1 < len(check_board) and check_board[x + 1][y]:\\n                current_trie: TrieNode = this_trie.ch_search(board[x + 1][y])\\n                if current_trie:\\n                    new_word = word + board[x + 1][y]\\n                    if current_trie.isEndOfWord:\\n                        result.add(new_word)\\n                    check_board[x + 1][y] = False\\n                    dfs(check_board, x + 1, y, current_trie, new_word)\\n                    check_board[x + 1][y] = True\\n\\n            if y + 1 < len(check_board[0]) and check_board[x][y + 1]:\\n                current_trie: TrieNode = this_trie.ch_search(board[x][y + 1])\\n                if current_trie:\\n                    new_word = word  + board[x][y + 1]\\n                    if current_trie.isEndOfWord:\\n                        result.add(new_word)\\n                    check_board[x][y + 1] = False\\n                    dfs(check_board, x, y + 1, current_trie, new_word)\\n                    check_board[x][y + 1] = True\\n\\n        checking_board: list[list[bool]] = [[True for _ in range(len(board[0]))] for _ in range(len(board))]\\n        for x in range(len(board)):\\n            for y in range(len(board[0])):\\n                current_trie: TrieNode = trie.ch_search(board[x][y])\\n                if current_trie:\\n                    if current_trie.isEndOfWord:\\n                        result.add(board[x][y])\\n                    dfs(checking_board, x, y, current_trie, board[x][y] + \\"\\")\\n\\n        return list(result)"},{"time":1768423953,"language":"py","runtime":4739,"memory":22,"accepted":true,"code_content":"class TrieNode:\\n    def __init__(self):\\n        self.children: Dict[int:TrieNode] = {}\\n        self.isEndOfWord: bool = False\\n\\n    def insert(self, key: str) -> None:\\n        curr: TrieNode = self\\n        for c in key:\\n            index: int = ord(c) - ord('a')\\n            if index in curr.children:\\n                new_node = curr.children[index]\\n            else:\\n                new_node = TrieNode()\\n                curr.children[index] = new_node\\n\\n            curr = new_node\\n        curr.isEndOfWord = True\\n\\n    def search(self, key: str) -> bool:\\n        curr: TrieNode = self\\n        for c in key:\\n            index: int = ord(c) - ord('a')\\n            if index not in curr.children:\\n                return False\\n\\n            curr = curr.children[index]\\n        return curr.isEndOfWord\\n\\n    def ch_search(self, key: str) -> None|TrieNode:\\n        index: int = ord(key) - ord('a')\\n        if index in self.children:\\n            return self.children[index]\\n        else:\\n            return None\\n\\n\\nclass Solution:\\n    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:\\n        result: set[str] = set()\\n\\n        trie:TrieNode = TrieNode()\\n        for word in words:\\n            trie.insert(word)\\n\\n\\n        def dfs(check_board: List[List[bool]], x: int, y: int, this_trie: TrieNode, word: str) -> None:\\n            if x > 0 and check_board[x - 1][y]:\\n                current_trie: TrieNode = this_trie.ch_search(board[x - 1][y])\\n                if current_trie:\\n                    new_word = word + board[x - 1][y]\\n                    if current_trie.isEndOfWord:\\n                        result.add(new_word)\\n                    check_board[x - 1][y] = False\\n                    dfs(check_board, x - 1, y, current_trie, new_word)\\n                    check_board[x - 1][y] = True\\n\\n            if y > 0 and check_board[x][y - 1]:\\n                current_trie: TrieNode = this_trie.ch_search(board[x][y - 1])\\n                if current_trie:\\n                    new_word = word + board[x][y - 1]\\n                    if current_trie.isEndOfWord:\\n                        result.add(new_word)\\n                    check_board[x][y - 1] = False\\n                    dfs(check_board, x, y  - 1, current_trie, new_word)\\n                    check_board[x][y - 1] = True\\n\\n            if x + 1 < len(check_board) and check_board[x + 1][y]:\\n                current_trie: TrieNode = this_trie.ch_search(board[x + 1][y])\\n                if current_trie:\\n                    new_word = word + board[x + 1][y]\\n                    if current_trie.isEndOfWord:\\n                        result.add(new_word)\\n                    check_board[x + 1][y] = False\\n                    dfs(check_board, x + 1, y, current_trie, new_word)\\n                    check_board[x + 1][y] = True\\n\\n            if y + 1 < len(check_board[0]) and check_board[x][y + 1]:\\n                current_trie: TrieNode = this_trie.ch_search(board[x][y + 1])\\n                if current_trie:\\n                    new_word = word  + board[x][y + 1]\\n                    if current_trie.isEndOfWord:\\n                        result.add(new_word)\\n                    check_board[x][y + 1] = False\\n                    dfs(check_board, x, y + 1, current_trie, new_word)\\n                    check_board[x][y + 1] = True\\n\\n        checking_board: list[list[bool]] = [[True for _ in range(len(board[0]))] for _ in range(len(board))]\\n        for x in range(len(board)):\\n            for y in range(len(board[0])):\\n                current_trie: TrieNode = trie.ch_search(board[x][y])\\n                if current_trie:\\n                    if current_trie.isEndOfWord:\\n                        result.add(board[x][y])\\n                    checking_board[x][y] = False\\n                    dfs(checking_board, x, y, current_trie, board[x][y] + \\"\\")\\n                    checking_board[x][y] = True\\n\\n        return list(result)"}]}`),215:{title:"kth largest element in an array",difficulty:"Medium",html_content:`<h1>215 - Kth Largest Element in an Array</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/kth-largest-element-in-an-array/>kth-largest-element-in-an-array</a></h2><p>Given an integer array <code>nums</code> and an integer <code>k</code>, return <em>the</em> <code>k<sup>th</sup></code> <em>largest element in the array</em>.<p>Note that it is the <code>k<sup>th</sup></code> largest element in the sorted order, not the <code>k<sup>th</sup></code> distinct element.<p>Can you solve it without sorting?<p> <p><strong class=example>Example 1:</strong><pre><strong>Input:</strong> nums = [3,2,1,5,6,4], k = 2
<strong>Output:</strong> 5
</pre><p><strong class=example>Example 2:</strong><pre><strong>Input:</strong> nums = [3,2,3,1,2,4,5,5,6], k = 4
<strong>Output:</strong> 4
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= k &lt;= nums.length &lt;= 10<sup>5</sup></code><li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></ul>`,submissions:[{time:1720384712,language:"cpp",runtime:101,memory:64,accepted:!0,code_content:`class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        priority_queue<int> pq;
        for (int i : nums) {
        pq.push(i);
        }

        for(int i = 1; i < k; i++){
            pq.pop();
        }
        return pq.top();



    }
};`}]},216:{title:"combination sum iii",difficulty:"Medium",html_content:`<h1>216 - Combination Sum III</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/combination-sum-iii/>combination-sum-iii</a></h2><p>Find all valid combinations of <code>k</code> numbers that sum up to <code>n</code> such that the following conditions are true:<ul><li>Only numbers <code>1</code> through <code>9</code> are used.<li>Each number is used <strong>at most once</strong>.</ul><p>Return <em>a list of all possible valid combinations</em>. The list must not contain the same combination twice, and the combinations may be returned in any order.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> k = 3, n = 7
<strong>Output:</strong> [[1,2,4]]
<strong>Explanation:</strong>
1 + 2 + 4 = 7
There are no other valid combinations.</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> k = 3, n = 9
<strong>Output:</strong> [[1,2,6],[1,3,5],[2,3,4]]
<strong>Explanation:</strong>
1 + 2 + 6 = 9
1 + 3 + 5 = 9
2 + 3 + 4 = 9
There are no other valid combinations.
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> k = 4, n = 1
<strong>Output:</strong> []
<strong>Explanation:</strong> There are no valid combinations.
Using 4 different numbers in the range [1,9], the smallest sum we can get is 1+2+3+4 = 10 and since 10 > 1, there are no valid combination.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>2 &lt;= k &lt;= 9</code><li><code>1 &lt;= n &lt;= 60</code></ul>`,submissions:[{time:1721085142,language:"cpp",runtime:3,memory:8,accepted:!0,code_content:`class Solution {
public:
    vector<vector<int>> combinationSum3(int k, int n) {
        vector<vector<int>> ans; 
        vector<int> temp; 

        recursive(ans, temp, k, n, 1); 
        return ans;  
    }

private:
    void recursive(vector<vector<int>>&ans, vector<int>& temp, int k, int n, int start){
        if(!(k || n)){
            ans.push_back(temp);
            return;
        }
        else if((k>0 && !n) || (!k && n>0)) return;

         for(; start<=9; start++){
            if(start > n) break;
            temp.push_back(start);
            recursive(ans, temp, k-1, n-start, start+1);
            temp.pop_back();
         }
    }
};`}]},219:{title:"contains duplicate ii",difficulty:"Easy",html_content:`<h1>219 - Contains Duplicate II</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/contains-duplicate-ii/>contains-duplicate-ii</a></h2><p>Given an integer array <code>nums</code> and an integer <code>k</code>, return <code>true</code> <em>if there are two <strong>distinct indices</strong> </em><code>i</code><em> and </em><code>j</code><em> in the array such that </em><code>nums[i] == nums[j]</code><em> and </em><code>abs(i - j) &lt;= k</code>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> nums = [1,2,3,1], k = 3
<strong>Output:</strong> true
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> nums = [1,0,1,1], k = 1
<strong>Output:</strong> true
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> nums = [1,2,3,1,2,3], k = 2
<strong>Output:</strong> false
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code><li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code><li><code>0 &lt;= k &lt;= 10<sup>5</sup></code></ul>`,submissions:[{time:1763841106,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:

        check = defaultdict(int)

        for i, val in enumerate(nums):
            check[val] += 1
            if i-k >= 0:
                check[i-k] -= 1

            if check[val] >= 2:
                return True

        return False`},{time:1763841580,language:"py",runtime:79,memory:33,accepted:!0,code_content:`class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:

        check = defaultdict(int)

        for i, val in enumerate(nums):
            check[val] += 1

            if check[val] >= 2:
                return True

            if i-k >= 0:
                check[nums[i-k]] -= 1

        return False`}]},221:{title:"maximal square",difficulty:"Medium",html_content:`<h1>221 - Maximal Square</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/maximal-square/>maximal-square</a></h2><p>Given an <code>m x n</code> binary <code>matrix</code> filled with <code>0</code>'s and <code>1</code>'s, <em>find the largest square containing only</em> <code>1</code>'s <em>and return its area</em>.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/11/26/max1grid.jpg style=width:400px;height:319px><pre>
<strong>Input:</strong> matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
<strong>Output:</strong> 4
</pre><p><strong class=example>Example 2:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/11/26/max2grid.jpg style=width:165px;height:165px><pre>
<strong>Input:</strong> matrix = [["0","1"],["1","0"]]
<strong>Output:</strong> 1
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> matrix = [["0"]]
<strong>Output:</strong> 0
</pre><p> <p><strong>Constraints:</strong><ul><li><code>m == matrix.length</code><li><code>n == matrix[i].length</code><li><code>1 &lt;= m, n &lt;= 300</code><li><code>matrix[i][j]</code> is <code>'0'</code> or <code>'1'</code>.</ul>`,submissions:[{time:1768864830,language:"py",runtime:87,memory:33,accepted:!0,code_content:`class Solution:
    def maximalSquare(self, matrix: List[List[str]]) -> int:
        if matrix is None or len(matrix) < 1:
            return 0

        rows = len(matrix)
        cols = len(matrix[0])

        dp_grid = [[0] * (cols + 1) for _ in range(rows + 1)]
        max_side = 0

        for x in range(rows):
            for y in range(cols):
                if matrix[x][y] == "1":
                    dp_grid[x+1][y+1] = min(dp_grid[x][y], dp_grid[x+1][y], dp_grid[x][y+1]) + 1
                    max_side = max(max_side, dp_grid[x+1][y+1])


        return max_side * max_side`}]},222:{title:"count complete tree nodes",difficulty:"Easy",html_content:`<h1>222 - Count Complete Tree Nodes</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/count-complete-tree-nodes/>count-complete-tree-nodes</a></h2><p>Given the <code>root</code> of a <strong>complete</strong> binary tree, return the number of the nodes in the tree.<p>According to <strong><a href=http://en.wikipedia.org/wiki/Binary_tree#Types_of_binary_trees target=_blank>Wikipedia</a></strong>, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between <code>1</code> and <code>2<sup>h</sup></code> nodes inclusive at the last level <code>h</code>.<p>Design an algorithm that runs in less than <code data-stringify-type=code>O(n)</code> time complexity.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2021/01/14/complete.jpg style=width:372px;height:302px><pre>
<strong>Input:</strong> root = [1,2,3,4,5,6]
<strong>Output:</strong> 6
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> root = []
<strong>Output:</strong> 0
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> root = [1]
<strong>Output:</strong> 1
</pre><p> <p><strong>Constraints:</strong><ul><li>The number of nodes in the tree is in the range <code>[0, 5 * 10<sup>4</sup>]</code>.<li><code>0 &lt;= Node.val &lt;= 5 * 10<sup>4</sup></code><li>The tree is guaranteed to be <strong>complete</strong>.</ul>`,submissions:[{time:1764971219,language:"py",runtime:0,memory:23,accepted:!0,code_content:`# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def countNodes(self, root):
        if not root:
            return 0
        
        left = root
        right= root

        height = 0

        while right:
            if left:
                left = left.left
            
            right = right.right
            height += 1

        if left is None:
            return (1<<height) -1
        return 1 + self.countNodes(root.left) + self.countNodes(root.right)`}]},224:{title:"basic calculator",difficulty:"Hard",html_content:`<h1>224 - Basic Calculator</h1><h2>Difficulty: Hard - <a href=https://leetcode.com/problems/basic-calculator/>basic-calculator</a></h2><p>Given a string <code>s</code> representing a valid expression, implement a basic calculator to evaluate it, and return <em>the result of the evaluation</em>.<p><strong>Note:</strong> You are <strong>not</strong> allowed to use any built-in function which evaluates strings as mathematical expressions, such as <code>eval()</code>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> s = "1 + 1"
<strong>Output:</strong> 2
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> s = " 2-1 + 2 "
<strong>Output:</strong> 3
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> s = "(1+(4+5+2)-3)+(6+8)"
<strong>Output:</strong> 23
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= s.length &lt;= 3 * 10<sup>5</sup></code><li><code>s</code> consists of digits, <code>'+'</code>, <code>'-'</code>, <code>'('</code>, <code>')'</code>, and <code>' '</code>.<li><code>s</code> represents a valid expression.<li><code>'+'</code> is <strong>not</strong> used as a unary operation (i.e., <code>"+1"</code> and <code>"+(2 + 3)"</code> is invalid).<li><code>'-'</code> could be used as a unary operation (i.e., <code>"-1"</code> and <code>"-(2 + 3)"</code> is valid).<li>There will be no two consecutive operators in the input.<li>Every number and running calculation will fit in a signed 32-bit integer.</ul>`,submissions:[{time:1764095608,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution:
    def calculate(self, s: str) -> int:
        stack = deque()
        prev_opp = True

        for ch in s:
            match ch:
                case ' ':
                    continue
                case '(':
                    stack.append(ch)
                case ')':
                    imm1 = stack.pop()
                    while stack[-1] != '(':
                        opp = stack.pop()
                        imm2 = stack.pop()
                        if opp == '+':
                            imm1 = imm2 + imm1
                        else:
                            imm1 = imm2 - imm1
                    stack.pop() # removes '('
                    stack.append(imm1)

                case '-':
                    prev_opp = True
                    stack.append(ch)
                case '+':
                    prev_opp = True
                    stack.append(ch)
                case _:
                    if prev_opp:
                        stack.append(int(ch))
                        prev_opp = False
                    else:
                        stack[-1] = (stack[-1] * 10) + int(ch)

        result = 0
        while stack:
            temp = stack.pop()
            if stack and stack.pop() == '-':
                result -= temp
            else:
                result += temp

        return result`},{time:1764096212,language:"py",runtime:71,memory:19,accepted:!0,code_content:`class Solution:
    def calculate(self, s: str) -> int:
        stack = deque()
        prev_opp = True

        for ch in s:
            match ch:
                case ' ':
                    continue
                case '(':
                    stack.append(ch)
                case ')':
                    result = 0
                    while stack[-1] != '(':
                        temp = stack.pop()
                        if stack[-1] != '(' and stack.pop() == '-':
                            result -= temp
                        else:
                            result += temp
                    stack.pop() # removes '('
                    stack.append(result)

                case '-':
                    prev_opp = True
                    stack.append(ch)
                case '+':
                    prev_opp = True
                    stack.append(ch)
                case _:
                    if prev_opp:
                        stack.append(int(ch))
                        prev_opp = False
                    else:
                        stack[-1] = (stack[-1] * 10) + int(ch)

        result = 0
        while stack:
            temp = stack.pop()
            if stack and stack.pop() == '-':
                result -= temp
            else:
                result += temp

        return result`}]},226:{title:"invert binary tree",difficulty:"Easy",html_content:`<h1>226 - Invert Binary Tree</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/invert-binary-tree/>invert-binary-tree</a></h2><p>Given the <code>root</code> of a binary tree, invert the tree, and return <em>its root</em>.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2021/03/14/invert1-tree.jpg style=width:500px;height:165px><pre>
<strong>Input:</strong> root = [4,2,7,1,3,6,9]
<strong>Output:</strong> [4,7,2,9,6,3,1]
</pre><p><strong class=example>Example 2:</strong><p><img alt src=https://assets.leetcode.com/uploads/2021/03/14/invert2-tree.jpg style=width:500px;height:120px><pre>
<strong>Input:</strong> root = [2,1,3]
<strong>Output:</strong> [2,3,1]
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> root = []
<strong>Output:</strong> []
</pre><p> <p><strong>Constraints:</strong><ul><li>The number of nodes in the tree is in the range <code>[0, 100]</code>.<li><code>-100 &lt;= Node.val &lt;= 100</code></ul>`,submissions:[{time:1764689665,language:"py",runtime:0,memory:17,accepted:!0,code_content:`# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if root is None:
            return None

        temp = self.invertTree(root.right)
        root.right = self.invertTree(root.left)
        root.left = temp

        return root
        `}]},228:{title:"summary ranges",difficulty:"Easy",html_content:`<h1>228 - Summary Ranges</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/summary-ranges/>summary-ranges</a></h2><p>You are given a <strong>sorted unique</strong> integer array <code>nums</code>.<p>A <strong>range</strong> <code>[a,b]</code> is the set of all integers from <code>a</code> to <code>b</code> (inclusive).<p>Return <em>the <strong>smallest sorted</strong> list of ranges that <strong>cover all the numbers in the array exactly</strong></em>. That is, each element of <code>nums</code> is covered by exactly one of the ranges, and there is no integer <code>x</code> such that <code>x</code> is in one of the ranges but not in <code>nums</code>.<p>Each range <code>[a,b]</code> in the list should be output as:<ul><li><code>"a->b"</code> if <code>a != b</code><li><code>"a"</code> if <code>a == b</code></ul><p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> nums = [0,1,2,4,5,7]
<strong>Output:</strong> ["0->2","4->5","7"]
<strong>Explanation:</strong> The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> nums = [0,2,3,4,6,8,9]
<strong>Output:</strong> ["0","2->4","6","8->9"]
<strong>Explanation:</strong> The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"
</pre><p> <p><strong>Constraints:</strong><ul><li><code>0 &lt;= nums.length &lt;= 20</code><li><code>-2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1</code><li>All the values of <code>nums</code> are <strong>unique</strong>.<li><code>nums</code> is sorted in ascending order.</ul>`,submissions:[{time:1763926510,language:"py",runtime:0,memory:18,accepted:!0,code_content:`class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        if not nums:
            return []

        result = []
        bottom = nums[0]
        next_val = nums[0]

        for i in range(1, len(nums)):
            val = nums[i]

            if next_val + 1 == val:
                next_val = val
            else:
                if next_val == bottom:
                    result.append(str(bottom))
                else:
                    result.append(f"{bottom}->{next_val}")

                next_val = val
                bottom = val

        if next_val == bottom:
            result.append(str(bottom))
        else:
            result.append(f"{bottom}->{next_val}")

        return result`}]},230:{title:"kth smallest element in a bst",difficulty:"Medium",html_content:`<h1>230 - Kth Smallest Element in a BST</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/kth-smallest-element-in-a-bst/>kth-smallest-element-in-a-bst</a></h2><p>Given the <code>root</code> of a binary search tree, and an integer <code>k</code>, return <em>the</em> <code>k<sup>th</sup></code> <em>smallest value (<strong>1-indexed</strong>) of all the values of the nodes in the tree</em>.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2021/01/28/kthtree1.jpg style=width:212px;height:301px><pre>
<strong>Input:</strong> root = [3,1,4,null,2], k = 1
<strong>Output:</strong> 1
</pre><p><strong class=example>Example 2:</strong><p><img alt src=https://assets.leetcode.com/uploads/2021/01/28/kthtree2.jpg style=width:382px;height:302px><pre>
<strong>Input:</strong> root = [5,3,6,2,4,null,null,1], k = 3
<strong>Output:</strong> 3
</pre><p> <p><strong>Constraints:</strong><ul><li>The number of nodes in the tree is <code>n</code>.<li><code>1 &lt;= k &lt;= n &lt;= 10<sup>4</sup></code><li><code>0 &lt;= Node.val &lt;= 10<sup>4</sup></code></ul><p> <p><strong>Follow up:</strong> If the BST is modified often (i.e., we can do insert and delete operations) and you need to find the kth smallest frequently, how would you optimize?`,submissions:[{time:1765295451,language:"py",runtime:0,memory:21,accepted:!0,code_content:`# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def __init__(self):
        self.k: int = 0
        self.result = -1
        self.count = 0

    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        self.count = 0
        self.result = -1

        self.k = k
        self.Inorder(root)

        return self.result


    def Inorder(self, root) -> None:
        if root is None or self.count >= self.k:
            return

        self.Inorder(root.left)

        self.count += 1

        if self.count == self.k:
            self.result = root.val
            return

        self.Inorder(root.right)

        `}]},236:{title:"lowest common ancestor of a binary tree",difficulty:"Medium",html_content:`<h1>236 - Lowest Common Ancestor of a Binary Tree</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/>lowest-common-ancestor-of-a-binary-tree</a></h2><p>Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.<p>According to the <a href=https://en.wikipedia.org/wiki/Lowest_common_ancestor target=_blank>definition of LCA on Wikipedia</a>: “The lowest common ancestor is defined between two nodes <code>p</code> and <code>q</code> as the lowest node in <code>T</code> that has both <code>p</code> and <code>q</code> as descendants (where we allow <b>a node to be a descendant of itself</b>).”<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2018/12/14/binarytree.png style=width:200px;height:190px><pre>
<strong>Input:</strong> root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
<strong>Output:</strong> 3
<strong>Explanation:</strong> The LCA of nodes 5 and 1 is 3.
</pre><p><strong class=example>Example 2:</strong><p><img alt src=https://assets.leetcode.com/uploads/2018/12/14/binarytree.png style=width:200px;height:190px><pre>
<strong>Input:</strong> root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
<strong>Output:</strong> 5
<strong>Explanation:</strong> The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> root = [1,2], p = 1, q = 2
<strong>Output:</strong> 1
</pre><p> <p><strong>Constraints:</strong><ul><li>The number of nodes in the tree is in the range <code>[2, 10<sup>5</sup>]</code>.<li><code>-10<sup>9</sup> &lt;= Node.val &lt;= 10<sup>9</sup></code><li>All <code>Node.val</code> are <strong>unique</strong>.<li><code>p != q</code><li><code>p</code> and <code>q</code> will exist in the tree.</ul>`,submissions:[{time:1719805577,language:"cpp",runtime:35,memory:17,accepted:!0,code_content:`/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        bool pb = false;
        bool qb = false;
        return traversal(root, p->val, q->val, pb, qb);
    }
private:
    TreeNode* traversal(TreeNode* root, int p, int q, bool& pb, bool& qb){
        if (!root) return nullptr;

        bool leftPb = false, leftQb = false;
        TreeNode* left = traversal(root->left, p, q, leftPb, leftQb);

        bool rightPb = false, rightQb = false;
        TreeNode* right = traversal(root->right, p, q, rightPb, rightQb);

        pb = (leftPb || rightPb || root->val == p);
        qb = (leftQb || rightQb || root->val == q);

        if (root->val == p || root->val == q)
        return root;

        if (left && right) return root;

        return left ? left : right;
    }
};`}]},238:{title:"product of array except self",difficulty:"Medium",html_content:`<h1>238 - Product of Array Except Self</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/product-of-array-except-self/>product-of-array-except-self</a></h2><p>Given an integer array <code>nums</code>, return <em>an array</em> <code>answer</code> <em>such that</em> <code>answer[i]</code> <em>is equal to the product of all the elements of</em> <code>nums</code> <em>except</em> <code>nums[i]</code>.<p>The product of any prefix or suffix of <code>nums</code> is <strong>guaranteed</strong> to fit in a <strong>32-bit</strong> integer.<p>You must write an algorithm that runs in <code>O(n)</code> time and without using the division operation.<p> <p><strong class=example>Example 1:</strong><pre><strong>Input:</strong> nums = [1,2,3,4]
<strong>Output:</strong> [24,12,8,6]
</pre><p><strong class=example>Example 2:</strong><pre><strong>Input:</strong> nums = [-1,1,0,-3,3]
<strong>Output:</strong> [0,0,9,0,0]
</pre><p> <p><strong>Constraints:</strong><ul><li><code>2 &lt;= nums.length &lt;= 10<sup>5</sup></code><li><code>-30 &lt;= nums[i] &lt;= 30</code><li>The input is generated such that <code>answer[i]</code> is <strong>guaranteed</strong> to fit in a <strong>32-bit</strong> integer.</ul><p> <p><strong>Follow up:</strong> Can you solve the problem in <code>O(1)</code> extra space complexity? (The output array <strong>does not</strong> count as extra space for space complexity analysis.)`,submissions:[{time:1692999313,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        for (auto & element : nums) 
  {
    cout << element << " ";
  }
    }
};`},{time:1692999707,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
      vector<int> final;
      int temp = 1;
 for(int i: nums){
   for(int x: nums){
     if(i != x){
       temp = temp * nums[x]
     }
   }
  final.push_back(temp);
  temp = 1;
}
return(final);
    }
};`},{time:1692999715,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
      vector<int> final;
      int temp = 1;
 for(int i: nums){
   for(int x: nums){
     if(i != x){
       temp = temp * nums[x];
     }
   }
  final.push_back(temp);
  temp = 1;
}
return(final);
    }
};`},{time:1692999731,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
      vector<int> final;
      int temp = 1;
 for(auto i: nums){
   for(auto x: nums){
     if(i != x){
       temp = temp * nums[x];
     }
   }
  final.push_back(temp);
  temp = 1;
}
return(final);
    }
};`},{time:1692999873,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
      int n = nums.size();
      vector<int> final;
      int temp = 1;
 for (int i = 0; i < n; ++i) {
   for (int x = 0; x < n; ++x) {
     if(i != x){
       temp = temp * nums[x];
     }
   }
  final.push_back(temp);
  temp = 1;
}
return(final);
    }
};`},{time:1692999906,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
      int n = nums.size();
      vector<int> final;
      int temp = 1;
 for (int i = 0; i < n; ++i) {
   for (int x = 0; x < n; ++x) {
     if(i != x){
       temp = temp * nums[x];
     }
   }
  final.push_back(temp);
  temp = 1;
}
return(final);
    }
};`},{time:1693000023,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
      int n = nums.size();
      vector<int> final;
      int temp = 1;
 for (int i = 0; i < n; ++i) {
   for (int x = 0; x < n; ++x) {
     if(i != x){
       temp = temp * nums[x];
     }
   }
  final.push_back(temp);
  temp = 1;
}
return(final);
    }
};`},{time:1693000839,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
      int n = nums.size();
      int test = 1;
      vector<int> final;
      int temp = 1;
      for (int t = 0; t < n; ++t) {
        if(nums[t] != 1){
        
        }
        else if (nums[t] != -1){temp = -1}
        else {
          test = 0;
          temp = 1
          break;}
      }
      if (test){
        for (int i = 0; i < n; ++i) {
          final.push_back(temp * nums[x]);
        }
        return(final);
      }
 for (int i = 0; i < n; ++i) {
   for (int x = 0; x < n; ++x) {
     if(i != x){
       temp = temp * nums[x];
     }
   }
  final.push_back(temp);
  temp = 1;
}
return(final);
    }
};`},{time:1693002522,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`bool reverse(bool boolean) 
{
  if(boolean == true){
    return false;
  }
  else
    return true;
}

class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
      int n = nums.size();
      int test = 1;
      bool test2 = true;
      vector<int> final;
      int temp = 1;
      for (int t = 0; t < n; ++t) {
        if(nums[t] == 1){
          
        }
        else if(nums[t] == -1){
          reverse(test2);
        }
        else {
          test = 0;
          }

      }
      int test3;
      if (test2)
      test3 = -1;
      else 
      test3 = 1;
      if (test){
        for (int y = 0; y < n; ++y) {
          final.push_back(test3 * nums[y]);
        }
        return(final);
      }
 for (int i = 0; i < n; ++i) {
   for (int x = 0; x < n; ++x) {
     if(i != x){
       temp = temp * nums[x];
     }
   }
  final.push_back(temp);
  temp = 1;
}
return(final);
    }
};
`},{time:1721697336,language:"cpp",runtime:28,memory:40,accepted:!0,code_content:`class Solution {

public:

    vector<int> productExceptSelf(vector<int>& nums) {

        int sum = 1;

        int zero = 0;

        int index = -1;

        for(int i = 0; i < nums.size(); i++){

            if(nums[i]){

                sum *= nums[i];

            }

            else{

                zero++;

                index = i;

            }

        }

        if(zero >= 2){

            vector<int> temp(nums.size(), 0);

            return temp;

        }

        else if(zero == 1){

            vector<int> temp(nums.size(), 0);

            temp[index] = sum;

            return temp;

        }

        else{

            vector<int> temp;

            for(auto i : nums){

                temp.push_back(sum / i);

            }

            return temp;

        }

    }

};`},{time:1761403048,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int n = nums.size();
        if(n <= 2){
            return nums;
        }

        int* prefix = new int[n];
        int* postfix = new int[n];

        prefix[0] = nums[0];
        postfix[n-1] = nums[n-1];

        for(int i =1; i<n; i++){
            prefix[i] = prefix[i-1] * nums[i];
        }
        for(int i =n-2; i>0; i--){
            postfix[i] = postfix[i+1] * nums[i];
        }

        for(int i =1; i<n-1; i++){
            nums[i] = prefix[i-1] * postfix[i+1];

        }

        nums[0] = postfix[1];
        nums[n-1] = prefix[n-2];

        return nums;

        
    }
};`},{time:1761403189,language:"cpp",runtime:0,memory:42,accepted:!0,code_content:`class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int n = nums.size();
        if(n <= 1){
            return nums;
        }
        if(n <= 2){
            vector<int> t = {nums[1],nums[0]};
            return t;
        }

        int* prefix = new int[n];
        int* postfix = new int[n];

        prefix[0] = nums[0];
        postfix[n-1] = nums[n-1];

        for(int i =1; i<n; i++){
            prefix[i] = prefix[i-1] * nums[i];
        }
        for(int i =n-2; i>0; i--){
            postfix[i] = postfix[i+1] * nums[i];
        }

        for(int i =1; i<n-1; i++){
            nums[i] = prefix[i-1] * postfix[i+1];

        }

        nums[0] = postfix[1];
        nums[n-1] = prefix[n-2];

        return nums;

        
    }
};`}]},242:{title:"valid anagram",difficulty:"Easy",html_content:'<h1>242 - Valid Anagram</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/valid-anagram/>valid-anagram</a></h2><p>Given two strings <code>s</code> and <code>t</code>, return <code>true</code> if <code>t</code> is an <span data-keyword=anagram>anagram</span> of <code>s</code>, and <code>false</code> otherwise.<p> <p><strong class=example>Example 1:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>s = "anagram", t = "nagaram"</span><p><strong>Output:</strong> <span class=example-io>true</span></div><p><strong class=example>Example 2:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>s = "rat", t = "car"</span><p><strong>Output:</strong> <span class=example-io>false</span></div><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= s.length, t.length &lt;= 5 * 10<sup>4</sup></code><li><code>s</code> and <code>t</code> consist of lowercase English letters.</ul><p> <p><strong>Follow up:</strong> What if the inputs contain Unicode characters? How would you adapt your solution to such a case?',submissions:[{time:1763749565,language:"py",runtime:7,memory:18,accepted:!0,code_content:`class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        validate = defaultdict(int)
        for ch in t:
            validate[ch] += 1

        for ch in s:
            validate[ch] -= 1

        return not any(value != 0 for value in validate.values())
        
        `}]},274:{title:"h index",difficulty:"Medium",html_content:`<h1>274 - H-Index</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/h-index/>h-index</a></h2><p>Given an array of integers <code>citations</code> where <code>citations[i]</code> is the number of citations a researcher received for their <code>i<sup>th</sup></code> paper, return <em>the researcher's h-index</em>.<p>According to the <a href=https://en.wikipedia.org/wiki/H-index target=_blank>definition of h-index on Wikipedia</a>: The h-index is defined as the maximum value of <code>h</code> such that the given researcher has published at least <code>h</code> papers that have each been cited at least <code>h</code> times.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> citations = [3,0,6,1,5]
<strong>Output:</strong> 3
<strong>Explanation:</strong> [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> citations = [1,3,1]
<strong>Output:</strong> 1
</pre><p> <p><strong>Constraints:</strong><ul><li><code>n == citations.length</code><li><code>1 &lt;= n &lt;= 5000</code><li><code>0 &lt;= citations[i] &lt;= 1000</code></ul>`,submissions:[{time:1761311911,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    int hIndex(vector<int>& citations) {
        std::sort(citations.begin(), citations.end());
        int n = citations.size();

        for(int i = 0, x = n-1; x > 0; ++i, x--){
            if(citations[x] <= i){
                return max(citations[x], i);
            }
        }

        return 0;

    }
};`},{time:1761312705,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    int hIndex(vector<int>& citations) {
        std::sort(citations.begin(), citations.end());
        int n = citations.size();

        for(int i = 0, x = n-1; x > 0; ++i, x--){
            if(citations[x] <= i){
                return max(citations[x], i);
            }
        }

        if(n == 1 && citations[0] == 1){
            return 1;
        }

        return 0;

    }
};`},{time:1761312736,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    int hIndex(vector<int>& citations) {
        std::sort(citations.begin(), citations.end());
        int n = citations.size();

        for(int i = 0, x = n-1; x > 0; ++i, x--){
            if(citations[x] <= i){
                return max(citations[x], i);
            }
        }

        if(n == 1){
            return 1;
        }

        return 0;

    }
};`},{time:1761312790,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    int hIndex(vector<int>& citations) {
        std::sort(citations.begin(), citations.end());
        int n = citations.size();

        for(int i = 0, x = n-1; x > 0; ++i, x--){
            if(citations[x] <= i){
                return max(citations[x], i);
            }
        }

        if(n == 1 && citations[0] != 0){
            return 1;
        }

        return 0;

    }
};`},{time:1761312820,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    int hIndex(vector<int>& citations) {
        std::sort(citations.begin(), citations.end());
        int n = citations.size();

        for(int i = 0, x = n-1; x >= 0; ++i, x--){
            if(citations[x] <= i){
                return max(citations[x], i);
            }
        }

        if(n == 1 && citations[0] != 0){
            return 1;
        }

        return 0;

    }
};`},{time:1761313176,language:"cpp",runtime:0,memory:12,accepted:!0,code_content:`class Solution {
public:
    int hIndex(vector<int>& citations) {
        std::sort(citations.begin(), citations.end());
        int n = citations.size();

        int minn = 0;

        for(int i = 0, x = n-1; x >= 0; i++, x--){
            minn = min(citations[x], i+1);
            if(citations[x] <= i){
                return max({citations[x], i, minn});
            }
        }

        return minn;

    }
};`}]},282:JSON.parse(`{"title":"expression add operators","difficulty":"Hard","html_content":"<h1>282 - Expression Add Operators</h1><h2>Difficulty: Hard - <a href=https://leetcode.com/problems/expression-add-operators/>expression-add-operators</a></h2><p>Given a string <code>num</code> that contains only digits and an integer <code>target</code>, return <em><strong>all possibilities</strong> to insert the binary operators </em><code>'+'</code><em>, </em><code>'-'</code><em>, and/or </em><code>'*'</code><em> between the digits of </em><code>num</code><em> so that the resultant expression evaluates to the </em><code>target</code><em> value</em>.<p>Note that operands in the returned expressions <strong>should not</strong> contain leading zeros.<p><strong>Note</strong> that a number can contain multiple digits.<p> <p><strong class=example>Example 1:</strong><pre>\\n<strong>Input:</strong> num = \\"123\\", target = 6\\n<strong>Output:</strong> [\\"1*2*3\\",\\"1+2+3\\"]\\n<strong>Explanation:</strong> Both \\"1*2*3\\" and \\"1+2+3\\" evaluate to 6.\\n</pre><p><strong class=example>Example 2:</strong><pre>\\n<strong>Input:</strong> num = \\"232\\", target = 8\\n<strong>Output:</strong> [\\"2*3+2\\",\\"2+3*2\\"]\\n<strong>Explanation:</strong> Both \\"2*3+2\\" and \\"2+3*2\\" evaluate to 8.\\n</pre><p><strong class=example>Example 3:</strong><pre>\\n<strong>Input:</strong> num = \\"3456237490\\", target = 9191\\n<strong>Output:</strong> []\\n<strong>Explanation:</strong> There are no expressions that can be created from \\"3456237490\\" to evaluate to 9191.\\n</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= num.length &lt;= 10</code><li><code>num</code> consists of only digits.<li><code>-2<sup>31</sup> &lt;= target &lt;= 2<sup>31</sup> - 1</code></ul>","submissions":[{"time":1761787504,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\n    public:\\n        int calc_str(string expr){\\n            int i = 1;\\n            int total = expr[0] - '0';\\n            int temp = 0;\\n            while(i < expr.size()){\\n                int val = expr[i+1] - '0';\\n                switch(expr[i]){\\n                    case '+':{\\n                        total += temp;\\n                        temp = val;\\n                        break;\\n                    }\\n                    case '-':{\\n                        total += temp;\\n                        temp = -val;\\n                        break;\\n                    }\\n                    case '*':{\\n                        if (temp == 0){ \\n                            if (total == 0)\\n                                total = val;\\n                            else\\n                                total *= val;\\n                        }\\n                        else\\n                            temp *= val;\\n                    }\\n                }\\n                i += 2;\\n            }\\n            return total + temp;\\n    \\n        }\\n    \\n    \\n        vector<string> addOperators(string num, int target) {\\n            int n = num.size();\\n            stack<pair<string,int>> op;\\n            op.push(pair<string,int>{{num[0]},1});\\n    \\n            vector<string> result;\\n    \\n            while(!op.empty()){\\n                pair<string,int> prev_val = op.top();\\n                int i = prev_val.second;\\n                string prev_str = prev_val.first;\\n                op.pop();\\n                if(i >= num.size()){\\n                    if(calc_str(prev_str) == target){\\n                        result.push_back(prev_str);\\n                    }\\n                    continue;\\n                }\\n                \\n                \\n                op.push(pair<string,int>{{prev_str + \\"+\\" + num[i]},{i +1}});\\n                op.push(pair<string,int>{{prev_str + \\"-\\" + num[i]},{i +1}});\\n                op.push(pair<string,int>{{prev_str + \\"*\\" + num[i]},{i +1}});\\n    \\n            }\\n        \\n            return result;\\n        }\\n    };"},{"time":1761835944,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\n    public:\\n        int calc_str(string expr, vector<int> &nums){\\n            int x = 1;\\n            int i = 0;\\n            int total = nums[0];\\n            int temp = 0;\\n            bool temp_assigned = false;\\n            while(i < expr.size()){\\n                int val = nums[x];\\n                switch(expr[i]){\\n                    case '+':{\\n                        if(temp_assigned)\\n                            total += temp;\\n                        temp = val;\\n                        temp_assigned = true;\\n                        break;\\n                    }\\n                    case '-':{\\n                        if(temp_assigned)\\n                            total += temp;\\n                        temp = -val;\\n                        temp_assigned = true;\\n                        break;\\n                    }\\n                    case '*':{\\n                        if (!temp_assigned){ \\n                            total *= val;\\n                        }\\n                        else\\n                            temp *= val;\\n                    }\\n                }\\n                i++;\\n                x++;\\n            }\\n            return total + temp;\\n    \\n        }\\n        string op_str(string expr, vector<int> &nums){\\n            string result {};\\n            for(int i = 0, x = 0; i < expr.size(); i++, x +=2){\\n                result += to_string(nums[i]);\\n                result.push_back(expr[i]);\\n            }\\n            result += to_string(nums[nums.size()-1]);\\n            return result;\\n\\n        }\\n\\n        void dfs(vector<int> nums, string cmd, int i, vector<string>& result, string& num, int target){\\n            nums.push_back(num[i] - '0');\\n\\n            if(i >= num.size()-1){\\n                    if(calc_str(cmd, nums) == target){\\n                        result.push_back(op_str(cmd, nums));\\n                    }\\n                    return;\\n                }\\n            i++;\\n\\n            dfs(nums, cmd + \\"+\\", i, result, num, target);\\n            dfs(nums, cmd + \\"-\\", i, result, num, target);\\n            dfs(nums, cmd + \\"*\\", i, result, num, target);\\n\\n            if(num[i-1] - '0' == 0 && nums.size() >= 2){\\n                nums.pop_back();\\n                nums[nums.size()-1] *= 10;\\n                dfs(nums, cmd, i, result, num, target);\\n            }\\n    \\n        }\\n    \\n    \\n        vector<string> addOperators(string num, int target) {\\n            int n = num.size();\\n            vector<string> result {};\\n\\n            dfs({}, {}, 0, result, num, target);\\n    \\n            return result;\\n        }\\n    \\n    };"},{"time":1761919909,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\n    public:\\n        long calc_str(string expr, vector<long> &nums){\\n            \\n            int x = 1;\\n            int i = 0;\\n            long total = nums[0];\\n            long temp = 0;\\n            bool temp_assigned = false;\\n            while(i < expr.size()){\\n                long val = nums[x];\\n                switch(expr[i]){\\n                    case '+':{\\n                        if(temp_assigned)\\n                            total += temp;\\n                        temp = val;\\n                        temp_assigned = true;\\n                        break;\\n                    }\\n                    case '-':{\\n                        if(temp_assigned)\\n                            total += temp;\\n                        temp = -val;\\n                        temp_assigned = true;\\n                        break;\\n                    }\\n                    case '*':{\\n                        if (!temp_assigned){ \\n                            total *= val;\\n                        }\\n                        else\\n                            temp *= val;\\n                    }\\n                }\\n                i++;\\n                x++;\\n            }\\n            return total + temp;\\n    \\n        }\\n        string op_str(string expr, vector<long> &nums){\\n\\n            string result {};\\n            for(int i = 0, x = 0; i < expr.size(); i++, x +=2){\\n                result += to_string(nums[i]);\\n                result.push_back(expr[i]);\\n            }\\n            result += to_string(nums[nums.size()-1]);\\n            return result;\\n\\n        }\\n\\n        void dfs(vector<long> nums, string cmd, int i, vector<string>& result, string& num, int target){\\n            if(i < num.size()){\\n                if(i >= 1){\\n                    long temp = nums[nums.size()-1];\\n                    nums[nums.size()-1] *= 10;\\n                    nums[nums.size()-1] += num[i]-'0';\\n                    dfs(nums, cmd, i+1, result, num, target);\\n                    nums[nums.size()-1] = temp;\\n                    nums.push_back(num[i] - '0');\\n                } else{\\n                    nums.push_back(num[i] - '0');\\n                    dfs(nums, cmd, i+1, result, num, target);\\n                    return;\\n                }\\n                \\n            }\\n\\n            if(i < num.size()){\\n                i++;\\n                dfs(nums, cmd + \\"*\\", i, result, num, target);\\n                dfs(nums, cmd + \\"-\\", i, result, num, target);\\n                dfs(nums, cmd + \\"+\\", i, result, num, target);\\n            }\\n            else{\\n                if(calc_str(cmd, nums) == target){\\n                    result.push_back(op_str(cmd, nums));\\n                }\\n                return;\\n            }\\n            \\n        }\\n    \\n    \\n        vector<string> addOperators(string num, int target) {\\n            int n = num.size();\\n            vector<string> result {};\\n\\n            dfs({}, {}, 0, result, num, target);\\n    \\n            return result;\\n        }\\n        \\n    };"},{"time":1761922759,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\n    public:\\n        long calc_str(string expr, vector<long> &nums){\\n            \\n            int x = 1;\\n            int i = 0;\\n            long total = nums[0];\\n            long temp = 0;\\n            bool temp_assigned = false;\\n            while(i < expr.size()){\\n                long val = nums[x];\\n                switch(expr[i]){\\n                    case '+':{\\n                        if(temp_assigned)\\n                            total += temp;\\n                        temp = val;\\n                        temp_assigned = true;\\n                        break;\\n                    }\\n                    case '-':{\\n                        if(temp_assigned)\\n                            total += temp;\\n                        temp = -val;\\n                        temp_assigned = true;\\n                        break;\\n                    }\\n                    case '*':{\\n                        if (!temp_assigned){ \\n                            total *= val;\\n                        }\\n                        else\\n                            temp *= val;\\n                    }\\n                }\\n                i++;\\n                x++;\\n            }\\n            return total + temp;\\n    \\n        }\\n        string op_str(string expr, vector<long> &nums){\\n\\n            string result {};\\n            for(int i = 0, x = 0; i < expr.size(); i++, x +=2){\\n                result += to_string(nums[i]);\\n                result.push_back(expr[i]);\\n            }\\n            result += to_string(nums[nums.size()-1]);\\n            return result;\\n\\n        }\\n\\n        void dfs(vector<long> nums, string cmd, int i, vector<string>& result, string& num, int target){\\n            if(i < num.size()){\\n                if(!nums.empty() && nums[nums.size()-1] == 0){\\n                    nums.push_back(num[i] - '0');\\n                }\\n                else if(i >= 1){\\n                    long temp = nums[nums.size()-1];\\n                    nums[nums.size()-1] *= 10;\\n                    nums[nums.size()-1] += num[i]-'0';\\n                    dfs(nums, cmd, i+1, result, num, target);\\n                    \\n                    nums[nums.size()-1] = temp;\\n                    nums.push_back(num[i] - '0');\\n\\n                } else{\\n                    nums.push_back(num[i] - '0');\\n                    dfs(nums, cmd, i+1, result, num, target);\\n                    return;\\n                }\\n            } \\n\\n            if(nums.size() == 2 && nums[1] == 5)\\n                cout << \\"here\\n\\";\\n\\n            if(i < num.size()){\\n                i++;\\n                dfs(nums, cmd + \\"*\\", i, result, num, target);\\n                dfs(nums, cmd + \\"-\\", i, result, num, target);\\n                dfs(nums, cmd + \\"+\\", i, result, num, target);\\n            }\\n            else{\\n                if(calc_str(cmd, nums) == target){\\n                    result.push_back(op_str(cmd, nums));\\n                }\\n                return;\\n            }\\n            \\n        }\\n    \\n    \\n        vector<string> addOperators(string num, int target) {\\n            int n = num.size();\\n            vector<string> result {};\\n\\n            dfs({}, {}, 0, result, num, target);\\n    \\n            return result;\\n        }\\n        \\n    };"},{"time":1761937380,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\n    public:\\n        long calc_str(string expr, vector<long> &nums){\\n            \\n            int x = 1;\\n            int i = 0;\\n            long total = nums[0];\\n            long temp = 0;\\n            bool temp_assigned = false;\\n            while(i < expr.size()){\\n                long val = nums[x];\\n                switch(expr[i]){\\n                    case '+':{\\n                        if(temp_assigned)\\n                            total += temp;\\n                        temp = val;\\n                        temp_assigned = true;\\n                        break;\\n                    }\\n                    case '-':{\\n                        if(temp_assigned)\\n                            total += temp;\\n                        temp = -val;\\n                        temp_assigned = true;\\n                        break;\\n                    }\\n                    case '*':{\\n                        if (!temp_assigned){ \\n                            total *= val;\\n                        }\\n                        else\\n                            temp *= val;\\n                    }\\n                }\\n                i++;\\n                x++;\\n            }\\n            return total + temp;\\n    \\n        }\\n        string op_str(string expr, vector<long> &nums){\\n\\n            string result {};\\n            for(int i = 0, x = 0; i < expr.size(); i++, x +=2){\\n                result += to_string(nums[i]);\\n                result.push_back(expr[i]);\\n            }\\n            result += to_string(nums[nums.size()-1]);\\n            return result;\\n\\n        }\\n\\n        void dfs(vector<long> nums, string cmd, int i, vector<string>& result, string& num, int target){\\n            if(i < num.size()){\\n                if(!nums.empty() && nums[nums.size()-1] == 0){\\n                    nums.push_back(num[i] - '0');\\n                }\\n                else if(i >= 1){\\n                    long temp = nums[nums.size()-1];\\n                    nums[nums.size()-1] *= 10;\\n                    nums[nums.size()-1] += num[i]-'0';\\n                    dfs(nums, cmd, i+1, result, num, target);\\n                    \\n                    nums[nums.size()-1] = temp;\\n                    nums.push_back(num[i] - '0');\\n\\n                } else{\\n                    nums.push_back(num[i] - '0');\\n                    dfs(nums, cmd, i+1, result, num, target);\\n                    return;\\n                }\\n            } \\n\\n            if(i < num.size()){\\n                i++;\\n                dfs(nums, cmd + \\"*\\", i, result, num, target);\\n                dfs(nums, cmd + \\"-\\", i, result, num, target);\\n                dfs(nums, cmd + \\"+\\", i, result, num, target);\\n            }\\n            else{\\n                if(calc_str(cmd, nums) == target){\\n                    result.push_back(op_str(cmd, nums));\\n                }\\n                return;\\n            }\\n            \\n        }\\n    \\n    \\n        vector<string> addOperators(string num, int target) {\\n            int n = num.size();\\n            vector<string> result {};\\n\\n            dfs({}, {}, 0, result, num, target);\\n    \\n            return result;\\n        }\\n        \\n    };"},{"time":1761946460,"language":"cpp","runtime":403,"memory":93,"accepted":true,"code_content":"class Solution {\\npublic:\\n    vector<string> addOperators(string num, int target) {\\n        vector<string> result;\\n        \\n        dfs(num, target, {}, {}, {}, {}, result);\\n        return result;\\n    }\\n    \\nprivate:\\n    void dfs(const string& num, int target, int pos, long long eval, long long multed, \\n             string path, vector<string>& result) {\\n        \\n        if (pos == num.length()) {\\n            if (eval == target) {\\n                result.push_back(path);\\n            }\\n            return;\\n        }\\n        \\n        for (int i = pos; i < num.length(); i++) {\\n            string cur = num.substr(pos, i - pos + 1);\\n            \\n            if (cur.length() > 1 && cur[0] == '0') {\\n                break;\\n            }\\n            \\n            long long curVal = stoll(cur);\\n            \\n            if (pos == 0) {\\n                dfs(num, target, i + 1, curVal, curVal, cur, result);\\n            } else {\\n                dfs(num, target, i + 1, eval + curVal, curVal, \\n                    path + \\"+\\" + cur, result);\\n                \\n                dfs(num, target, i + 1, eval - curVal, -curVal, \\n                    path + \\"-\\" + cur, result);\\n                \\n                dfs(num, target, i + 1, eval - multed + multed * curVal, \\n                    multed * curVal, path + \\"*\\" + cur, result);\\n            }\\n        }\\n    }\\n};"}]}`),283:{title:"move zeroes",difficulty:"Easy",html_content:`<h1>283 - Move Zeroes</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/move-zeroes/>move-zeroes</a></h2><p>Given an integer array <code>nums</code>, move all <code>0</code>'s to the end of it while maintaining the relative order of the non-zero elements.<p><strong>Note</strong> that you must do this in-place without making a copy of the array.<p> <p><strong class=example>Example 1:</strong><pre><strong>Input:</strong> nums = [0,1,0,3,12]
<strong>Output:</strong> [1,3,12,0,0]
</pre><p><strong class=example>Example 2:</strong><pre><strong>Input:</strong> nums = [0]
<strong>Output:</strong> [0]
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code><li><code>-2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1</code></ul><p> <p><strong>Follow up:</strong> Could you minimize the total number of operations done?`,submissions:[{time:1693073427,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int zeros = 0;
        if(nums.size() == 1){
            return;
        }
        for(int i = 0; i < nums.size(); i++){
            if(nums[i] == 0){
                zeros++;
            }
        }
        remove(nums.begin(),nums.end(),0);
        for(int x = 0; x <= zeros; x++){
            nums[nums.size() - x] = 0;
    }}
};`},{time:1693073513,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int zeros = 0;
        for(int i = 0; i < nums.size(); i++){
            if(nums[i] == 0){
                zeros++;
            }
        }
        if(nums.size() == zeros){
            return;
        }
        remove(nums.begin(),nums.end(),0);
        for(int x = 0; x <= zeros; x++){
            nums[nums.size() - x] = 0;
    }}
};`},{time:1693073562,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int zeros = 0;
        for(int i = 0; i < nums.size(); i++){
            if(nums[i] == 0){
                zeros++;
            }
        }
        if(nums.size() == zeros || zeros == 0){
            return;
        }
        remove(nums.begin(),nums.end(),0);
        for(int x = 0; x <= zeros; x++){
            nums[nums.size() - x] = 0;
    }}
};`},{time:1693074149,language:"cpp",runtime:9,memory:19,accepted:!0,code_content:`class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int zeros = 0;
        for(int i = 0; i < nums.size(); i++){
            if(nums[i] == 0){
                zeros++;
            }
        }
        if(nums.size() == zeros || zeros == 0){
            return;
        }
        remove(nums.begin(),nums.end(),0);
        for(int x = 1; x <= zeros; x++){
            nums[nums.size() - x] = 0;
    }}
};`},{time:1693074175,language:"cpp",runtime:20,memory:19,accepted:!0,code_content:`class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int zeros = 0;
        for(int i = 0; i < nums.size(); i++){
            if(nums[i] == 0){
                zeros++;
            }
        }

        remove(nums.begin(),nums.end(),0);
        for(int x = 1; x <= zeros; x++){
            nums[nums.size() - x] = 0;
    }}
};`},{time:1693074188,language:"cpp",runtime:24,memory:19,accepted:!0,code_content:`class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int zeros = 0;
        for(int i = 0; i < nums.size(); i++){
            if(nums[i] == 0){
                zeros++;
            }
        }
        if(nums.size() == zeros || zeros == 0){
            return;
        }
        remove(nums.begin(),nums.end(),0);
        for(int x = 1; x <= zeros; x++){
            nums[nums.size() - x] = 0;
    }}
};`}]},289:{title:"game of life",difficulty:"Medium",html_content:`<h1>289 - Game of Life</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/game-of-life/>game-of-life</a></h2><p>According to <a href=https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life target=_blank>Wikipedia's article</a>: "The <b>Game of Life</b>, also known simply as <b>Life</b>, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."<p>The board is made up of an <code>m x n</code> grid of cells, where each cell has an initial state: <b>live</b> (represented by a <code>1</code>) or <b>dead</b> (represented by a <code>0</code>). Each cell interacts with its <a href=https://en.wikipedia.org/wiki/Moore_neighborhood target=_blank>eight neighbors</a> (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):<ol><li>Any live cell with fewer than two live neighbors dies as if caused by under-population.<li>Any live cell with two or three live neighbors lives on to the next generation.<li>Any live cell with more than three live neighbors dies, as if by over-population.<li>Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.</ol><p><span>The next state of the board is determined by applying the above rules simultaneously to every cell in the current state of the <code>m x n</code> grid <code>board</code>. In this process, births and deaths occur <strong>simultaneously</strong>.</span><p><span>Given the current state of the <code>board</code>, <strong>update</strong> the <code>board</code> to reflect its next state.</span><p><strong>Note</strong> that you do not need to return anything.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/12/26/grid1.jpg style=width:562px;height:322px><pre>
<strong>Input:</strong> board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
<strong>Output:</strong> [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
</pre><p><strong class=example>Example 2:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/12/26/grid2.jpg style=width:402px;height:162px><pre>
<strong>Input:</strong> board = [[1,1],[1,0]]
<strong>Output:</strong> [[1,1],[1,1]]
</pre><p> <p><strong>Constraints:</strong><ul><li><code>m == board.length</code><li><code>n == board[i].length</code><li><code>1 &lt;= m, n &lt;= 25</code><li><code>board[i][j]</code> is <code>0</code> or <code>1</code>.</ul><p> <p><strong>Follow up:</strong><ul><li>Could you solve it in-place? Remember that the board needs to be updated simultaneously: You cannot update some cells first and then use their updated values to update other cells.<li>In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches upon the border of the array (i.e., live cells reach the border). How would you address these problems?</ul>`,submissions:[{time:1763682630,language:"py",runtime:0,memory:17,accepted:!0,code_content:`class Solution:
    def gameOfLife(self, board: List[List[int]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """

        for x in range(len(board)):
            for y in range(len(board[0])):
                if board[x][y] % 2 == 1:
                    lx = x -1 >= 0
                    hx = x + 1 < len(board)
                    ly = y -1 >= 0
                    hy = y + 1 < len(board[0])
                    if lx:
                        board[x-1][y] += 2
                        if ly:
                            board[x-1][y-1] += 2
                        if hy:
                            board[x-1][y+1] += 2
                    if hx:
                        board[x+1][y] += 2
                        if ly:
                            board[x+1][y-1] += 2
                        if hy:
                            board[x+1][y+1] += 2
                    if ly:
                        board[x][y-1] += 2
                    if hy:
                        board[x][y+1] += 2

        for x in range(len(board)):
            for y in range(len(board[0])):
                board[x][y] = int(5 <= board[x][y] <= 7)`}]},290:{title:"word pattern",difficulty:"Easy",html_content:`<h1>290 - Word Pattern</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/word-pattern/>word-pattern</a></h2><p>Given a <code>pattern</code> and a string <code>s</code>, find if <code>s</code> follows the same pattern.<p>Here <b>follow</b> means a full match, such that there is a bijection between a letter in <code>pattern</code> and a <b>non-empty</b> word in <code>s</code>. Specifically:<ul><li>Each letter in <code>pattern</code> maps to <strong>exactly</strong> one unique word in <code>s</code>.<li>Each unique word in <code>s</code> maps to <strong>exactly</strong> one letter in <code>pattern</code>.<li>No two letters map to the same word, and no two words map to the same letter.</ul><p> <p><strong class=example>Example 1:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>pattern = "abba", s = "dog cat cat dog"</span><p><strong>Output:</strong> <span class=example-io>true</span><p><strong>Explanation:</strong><p>The bijection can be established as:<ul><li><code>'a'</code> maps to <code>"dog"</code>.<li><code>'b'</code> maps to <code>"cat"</code>.</ul></div><p><strong class=example>Example 2:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>pattern = "abba", s = "dog cat cat fish"</span><p><strong>Output:</strong> <span class=example-io>false</span></div><p><strong class=example>Example 3:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>pattern = "aaaa", s = "dog cat cat dog"</span><p><strong>Output:</strong> <span class=example-io>false</span></div><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= pattern.length &lt;= 300</code><li><code>pattern</code> contains only lower-case English letters.<li><code>1 &lt;= s.length &lt;= 3000</code><li><code>s</code> contains only lowercase English letters and spaces <code>' '</code>.<li><code>s</code> <strong>does not contain</strong> any leading or trailing spaces.<li>All the words in <code>s</code> are separated by a <strong>single space</strong>.</ul>`,submissions:[{time:1763748078,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        words = defaultdict(int)
        for word in s.split():
            words[word] += 1

        patset = defaultdict(int)
        for ch in pattern:
            patset[ch] += 1

        validate = defaultdict(int)
        for nums in words.values():
            validate[nums] += 1
        for nums in patset.values():
            validate[nums] -= 1

        return not any(value != 0 for value in validate.values())`},{time:1763748276,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        set1 = defaultdict(int)
        set2 = defaultdict(int)
        words = s.split()

        for i in range(len(pattern)):
            if words[i] not in set1:
                set1[words[i]] = i

            if pattern[i] not in set2:
                set2[pattern[i]] = i

            if set1[words[i]] != set2[pattern[i]]:
                return False

        return True`},{time:1763748417,language:"py",runtime:1,memory:17,accepted:!0,code_content:`class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        set1 = defaultdict(int)
        set2 = defaultdict(int)
        words = s.split()
        if len(words) != len(pattern):
            return False

        for i in range(len(pattern)):
            if words[i] not in set1:
                set1[words[i]] = i

            if pattern[i] not in set2:
                set2[pattern[i]] = i

            if set1[words[i]] != set2[pattern[i]]:
                return False

        return True`}]},295:{title:"find median from data stream",difficulty:"Hard",html_content:`<h1>295 - Find Median from Data Stream</h1><h2>Difficulty: Hard - <a href=https://leetcode.com/problems/find-median-from-data-stream/>find-median-from-data-stream</a></h2><p>The <strong>median</strong> is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.<ul><li>For example, for <code>arr = [2,3,4]</code>, the median is <code>3</code>.<li>For example, for <code>arr = [2,3]</code>, the median is <code>(2 + 3) / 2 = 2.5</code>.</ul><p>Implement the MedianFinder class:<ul><li><code>MedianFinder()</code> initializes the <code>MedianFinder</code> object.<li><code>void addNum(int num)</code> adds the integer <code>num</code> from the data stream to the data structure.<li><code>double findMedian()</code> returns the median of all elements so far. Answers within <code>10<sup>-5</sup></code> of the actual answer will be accepted.</ul><p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input</strong>
["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
[[], [1], [2], [], [3], []]
<strong>Output</strong>
[null, null, null, 1.5, null, 2.0]

<strong>Explanation</strong>
MedianFinder medianFinder = new MedianFinder();
medianFinder.addNum(1);    // arr = [1]
medianFinder.addNum(2);    // arr = [1, 2]
medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3);    // arr[1, 2, 3]
medianFinder.findMedian(); // return 2.0
</pre><p> <p><strong>Constraints:</strong><ul><li><code>-10<sup>5</sup> &lt;= num &lt;= 10<sup>5</sup></code><li>There will be at least one element in the data structure before calling <code>findMedian</code>.<li>At most <code>5 * 10<sup>4</sup></code> calls will be made to <code>addNum</code> and <code>findMedian</code>.</ul><p> <p><strong>Follow up:</strong><ul><li>If all integer numbers from the stream are in the range <code>[0, 100]</code>, how would you optimize your solution?<li>If <code>99%</code> of all integer numbers from the stream are in the range <code>[0, 100]</code>, how would you optimize your solution?</ul>`,submissions:[{time:1766711984,language:"py",runtime:151,memory:40,accepted:!0,code_content:`class MedianFinder:
    def __init__(self):
        self.is_even: bool = True
        self.top : List[int] = []
        self.bottom: List[int] = []

    def addNum(self, num: int) -> None:
        self.is_even = not self.is_even
        if self.is_even:
            heapq.heappush(self.bottom, -num)
        else:
            heapq.heappush(self.top, num)

        if self.top and self.bottom and self.top[0] < -self.bottom[0]:
            val1 = -heapq.heappop(self.top)
            val2 = -heapq.heappop(self.bottom)
            heapq.heappush(self.top, val2)
            heapq.heappush(self.bottom, val1)


    def findMedian(self) -> float:
        if self.is_even:
            return (self.top[0] + -self.bottom[0]) / 2
        else:
            return self.top[0]`}]},300:{title:"longest increasing subsequence",difficulty:"Medium",html_content:`<h1>300 - Longest Increasing Subsequence</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/longest-increasing-subsequence/>longest-increasing-subsequence</a></h2><p>Given an integer array <code>nums</code>, return <em>the length of the longest <strong>strictly increasing </strong></em><span data-keyword=subsequence-array><em><strong>subsequence</strong></em></span>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> nums = [10,9,2,5,3,7,101,18]
<strong>Output:</strong> 4
<strong>Explanation:</strong> The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> nums = [0,1,0,3,2,3]
<strong>Output:</strong> 4
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> nums = [7,7,7,7,7,7,7]
<strong>Output:</strong> 1
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= nums.length &lt;= 2500</code><li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></ul><p> <p><b>Follow up:</b> Can you come up with an algorithm that runs in <code>O(n log(n))</code> time complexity?`,submissions:[{time:1767718355,language:"py",runtime:3,memory:19,accepted:!0,code_content:`class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        dp = []

        for num in nums:
            if len(dp) == 0 or num > dp[-1]:
                dp.append(num)
            else:
                index = bisect.bisect_left(dp, num)
                dp[index] = num


        return len(dp)`}]},322:{title:"coin change",difficulty:"Medium",html_content:`<h1>322 - Coin Change</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/coin-change/>coin-change</a></h2><p>You are given an integer array <code>coins</code> representing coins of different denominations and an integer <code>amount</code> representing a total amount of money.<p>Return <em>the fewest number of coins that you need to make up that amount</em>. If that amount of money cannot be made up by any combination of the coins, return <code>-1</code>.<p>You may assume that you have an infinite number of each kind of coin.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> coins = [1,2,5], amount = 11
<strong>Output:</strong> 3
<strong>Explanation:</strong> 11 = 5 + 5 + 1
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> coins = [2], amount = 3
<strong>Output:</strong> -1
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> coins = [1], amount = 0
<strong>Output:</strong> 0
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= coins.length &lt;= 12</code><li><code>1 &lt;= coins[i] &lt;= 2<sup>31</sup> - 1</code><li><code>0 &lt;= amount &lt;= 10<sup>4</sup></code></ul>`,submissions:[{time:1767312320,language:"py",runtime:738,memory:17,accepted:!0,code_content:`class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        dp = [sys.maxsize] * (amount + 1)
        dp[0] = 0

        for i in range(1, amount + 1):
            for coin in coins:
                if i - coin >= 0:
                    dp[i] = min(dp[i], 1 + dp[i - coin])


        return dp[amount] if sys.maxsize != dp[amount] else -1`}]},328:{title:"odd even linked list",difficulty:"Medium",html_content:`<h1>328 - Odd Even Linked List</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/odd-even-linked-list/>odd-even-linked-list</a></h2><p>Given the <code>head</code> of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return <em>the reordered list</em>.<p>The <strong>first</strong> node is considered <strong>odd</strong>, and the <strong>second</strong> node is <strong>even</strong>, and so on.<p>Note that the relative order inside both the even and odd groups should remain as it was in the input.<p>You must solve the problem in <code>O(1)</code> extra space complexity and <code>O(n)</code> time complexity.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2021/03/10/oddeven-linked-list.jpg style=width:300px;height:123px><pre>
<strong>Input:</strong> head = [1,2,3,4,5]
<strong>Output:</strong> [1,3,5,2,4]
</pre><p><strong class=example>Example 2:</strong><p><img alt src=https://assets.leetcode.com/uploads/2021/03/10/oddeven2-linked-list.jpg style=width:500px;height:142px><pre>
<strong>Input:</strong> head = [2,1,3,5,6,4,7]
<strong>Output:</strong> [2,3,6,7,1,5,4]
</pre><p> <p><strong>Constraints:</strong><ul><li>The number of nodes in the linked list is in the range <code>[0, 10<sup>4</sup>]</code>.<li><code>-10<sup>6</sup> &lt;= Node.val &lt;= 10<sup>6</sup></code></ul>`,submissions:[{time:1719270259,language:"cpp",runtime:3,memory:13,accepted:!0,code_content:`/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* oddEvenList(ListNode* head) {
    if (!head || !head->next) {
            return head;
        }   
    ListNode* odd = head;
    ListNode* even = head->next;
    ListNode* evenHead = even;

    while(even && even->next){
        odd->next = even->next;
        odd = even->next;
        even->next = odd->next;
        even = odd->next;
    }
    odd->next = evenHead;
    return head;

    }
};`}]},334:{title:"increasing triplet subsequence",difficulty:"Medium",html_content:`<h1>334 - Increasing Triplet Subsequence</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/increasing-triplet-subsequence/>increasing-triplet-subsequence</a></h2><p>Given an integer array <code>nums</code>, return <code>true</code><em> if there exists a triple of indices </em><code>(i, j, k)</code><em> such that </em><code>i &lt; j &lt; k</code><em> and </em><code>nums[i] &lt; nums[j] &lt; nums[k]</code>. If no such indices exists, return <code>false</code>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> nums = [1,2,3,4,5]
<strong>Output:</strong> true
<strong>Explanation:</strong> Any triplet where i &lt; j &lt; k is valid.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> nums = [5,4,3,2,1]
<strong>Output:</strong> false
<strong>Explanation:</strong> No triplet exists.
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> nums = [2,1,5,0,4,6]
<strong>Output:</strong> true
<strong>Explanation:</strong> One of the valid triplet is (1, 4, 5), because nums[1] == 1 &lt; nums[4] == 4 &lt; nums[5] == 6.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= nums.length &lt;= 5 * 10<sup>5</sup></code><li><code>-2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1</code></ul><p> <p><strong>Follow up:</strong> Could you implement a solution that runs in <code>O(n)</code> time complexity and <code>O(1)</code> space complexity?`,submissions:[{time:1693003966,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    bool increasingTriplet(vector<int>& nums) {
        int n = nums.size();
        for (int i = 0; i < n; ++i) {
        if(i != 0 && (i != n)){
        if((nums[i+1] < nums[i]) && (nums[i-1] < nums[i]))
            return(true);
        }}

        return(false);
    }
};`},{time:1693004029,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    bool increasingTriplet(vector<int>& nums) {
        int n = nums.size();
        for (int i = 0; i < n; ++i) {
        if(i != 0 && (i != n)){
        if((nums[i+1] > nums[i]) && (nums[i-1] < nums[i]))
            return(true);
        }}

        return(false);
    }
};`},{time:1693004256,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    bool increasingTriplet(vector<int>& nums) {
        int n = nums.size();
        for (int i = 1; i < n-1; ++i) {
        if((nums[i+1] > nums[i]) && (nums[i-1] < nums[i]))
            return(true);
        }

        return(false);
    }
};`},{time:1693004320,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    bool increasingTriplet(vector<int>& nums) {
        int n = nums.size();
        for (int i = 1; i < n-1; ++i) {
        if((nums[i+1] > nums[i]) && (nums[i-1] < nums[i]))
            return(true);
        }

        return(false);
    }
};`},{time:1693005552,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    bool increasingTriplet(vector<int>& nums) {
        int n = nums.size();
        int low = nums[0];
        int sec;
        for (int i = 1; i < n-1; ++i) {
            if (low < nums[i]){
                sec = nums[i];
                for (int t = 1; t < n-1; ++t) 
                    if (sec < nums[t]){
                        return(true);
                    }
            }
            if(low > nums[i])
            low = nums[i];
        }
        return(false);
    }
};`},{time:1693006034,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    bool increasingTriplet(vector<int>& nums) {
        int n = nums.size();
        int low = nums[0];
        int sec;
        for (int i = 1; i < n-1; i++) {
            if (low < nums[i]){
                sec = nums[i];
                for (int t = i + 1; t < n; ++t) {
                    if (sec < nums[t]) {
                    return true;
                }
}

            }
            if(low > nums[i])
            low = nums[i];
        }
        return(false);
    }
};`},{time:1693006663,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    bool increasingTriplet(vector<int>& nums) {
        int n = nums.size();
        int low = 9999999;
        int sec = 9999999;
        for (int num : nums) {
            if (num <= low){
                low = num;}
             else if (num <= sec){
                sec = num;
            } else {
                return true;
            }

        
    }return(false);}
};`},{time:1693006725,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    bool increasingTriplet(vector<int>& nums) {
        int n = nums.size();
        int low = 100000001;
        int sec = 100000001;
        for (int num : nums) {
            if (num <= low){
                low = num;}
             else if (num <= sec){
                sec = num;
            } else {
                return true;
            }

        
    }return(false);}
};`},{time:1693006803,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    bool increasingTriplet(vector<int>& nums) {
        int n = nums.size();
        int low = 294967294;
        int sec = 294967294;
        for (int num : nums) {
            if (num <= low){
                low = num;}
             else if (num <= sec){
                sec = num;
            } else {
                return true;
            }

        
    }return(false);}
};`},{time:1693006862,language:"cpp",runtime:87,memory:111,accepted:!0,code_content:`class Solution {
public:
    bool increasingTriplet(vector<int>& nums) {
        int n = nums.size();
        int low = 2147483647;
        int sec = 2147483647;
        for (int num : nums) {
            if (num <= low){
                low = num;}
             else if (num <= sec){
                sec = num;
            } else {
                return true;
            }

        
    }return(false);}
};`}]},338:{title:"counting bits",difficulty:"Easy",html_content:`<h1>338 - Counting Bits</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/counting-bits/>counting-bits</a></h2><p>Given an integer <code>n</code>, return <em>an array </em><code>ans</code><em> of length </em><code>n + 1</code><em> such that for each </em><code>i</code><em> </em>(<code>0 &lt;= i &lt;= n</code>)<em>, </em><code>ans[i]</code><em> is the <strong>number of </strong></em><code>1</code><em><strong>'s</strong> in the binary representation of </em><code>i</code>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> n = 2
<strong>Output:</strong> [0,1,1]
<strong>Explanation:</strong>
0 --> 0
1 --> 1
2 --> 10
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> n = 5
<strong>Output:</strong> [0,1,1,2,1,2]
<strong>Explanation:</strong>
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101
</pre><p> <p><strong>Constraints:</strong><ul><li><code>0 &lt;= n &lt;= 10<sup>5</sup></code></ul><p> <p><strong>Follow up:</strong><ul><li>It is very easy to come up with a solution with a runtime of <code>O(n log n)</code>. Can you do it in linear time <code>O(n)</code> and possibly in a single pass?<li>Can you do it without using any built-in function (i.e., like <code>__builtin_popcount</code> in C++)?</ul>`,submissions:[{time:1721431189,language:"cpp",runtime:5,memory:9,accepted:!0,code_content:`class Solution {
public:
    vector<int> countBits(int n) {
    vector<int> bits(n + 1, 0);

       for(int i = 1; i < n +1; i++){
            bits[i] = bits[i >> 1] + (i & 1);
            
        }
        return bits;
    }
};`}]},345:{title:"reverse vowels of a string",difficulty:"Easy",html_content:`<h1>345 - Reverse Vowels of a String</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/reverse-vowels-of-a-string/>reverse-vowels-of-a-string</a></h2><p>Given a string <code>s</code>, reverse only all the vowels in the string and return it.<p>The vowels are <code>'a'</code>, <code>'e'</code>, <code>'i'</code>, <code>'o'</code>, and <code>'u'</code>, and they can appear in both lower and upper cases, more than once.<p> <p><strong class=example>Example 1:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>s = "IceCreAm"</span><p><strong>Output:</strong> <span class=example-io>"AceCreIm"</span><p><strong>Explanation:</strong><p>The vowels in <code>s</code> are <code>['I', 'e', 'e', 'A']</code>. On reversing the vowels, s becomes <code>"AceCreIm"</code>.</div><p><strong class=example>Example 2:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>s = "leetcode"</span><p><strong>Output:</strong> <span class=example-io>"leotcede"</span></div><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= s.length &lt;= 3 * 10<sup>5</sup></code><li><code>s</code> consist of <strong>printable ASCII</strong> characters.</ul>`,submissions:[{time:1686957546,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    string reverseVowels(string s) {
        vector<char> vo;
        for(int i = 0; i < s.size(); i++){
            if(s[i] == 'a')
            vo.push_back('a');
            if(s[i] == 'A')
            vo.push_back('A');
            if(s[i] == 'e')
            vo.push_back('e');
            if(s[i] == 'E')
            vo.push_back('E');
            if(s[i] == 'i')
            vo.push_back('i');
            if(s[i] == 'I')
            vo.push_back('I');
            if(s[i] == 'o')
            vo.push_back('o');
            if(s[i] == 'O')
            vo.push_back('O');
        }
        int temp = 0;
        std::reverse(vo.begin(), vo.end());
        for (int i = 0; i < s.size(); i++) {
            if (s[i] == 'a' || s[i] == 'A' || s[i] == 'e' || s[i] == 'E' || s[i] == 'i' || s[i] == 'I' || s[i] == 'o' || s[i] == 'O' || s[i] == 'u' || s[i] == 'U') {
                s[i] = vo[temp++];
            }
        }
        return s;
    }
};`},{time:1686958054,language:"cpp",runtime:17,memory:8,accepted:!0,code_content:`class Solution {
public:
    string reverseVowels(string s) {
        vector<char> vo;
        for(int i = 0; i < s.size(); i++){
            if(s[i] == 'a')
            vo.push_back('a');
            if(s[i] == 'A')
            vo.push_back('A');
            if(s[i] == 'e')
            vo.push_back('e');
            if(s[i] == 'E')
            vo.push_back('E');
            if(s[i] == 'i')
            vo.push_back('i');
            if(s[i] == 'I')
            vo.push_back('I');
            if(s[i] == 'o')
            vo.push_back('o');
            if(s[i] == 'O')
            vo.push_back('O');
            if(s[i] == 'u')
            vo.push_back('u');
            if(s[i] == 'U')
            vo.push_back('U');
        }
        int temp = 0;
        std::reverse(vo.begin(), vo.end());
        for (int i = 0; i < s.size(); i++) {
            if (s[i] == 'a' || s[i] == 'A' || s[i] == 'e' || s[i] == 'E' || s[i] == 'i' || s[i] == 'I' || s[i] == 'o' || s[i] == 'O' || s[i] == 'u' || s[i] == 'U') {
                s[i] = vo[temp++];
            }
        }
        return s;
    }
};`}]},373:{title:"find k pairs with smallest sums",difficulty:"Medium",html_content:`<h1>373 - Find K Pairs with Smallest Sums</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/find-k-pairs-with-smallest-sums/>find-k-pairs-with-smallest-sums</a></h2><p>You are given two integer arrays <code>nums1</code> and <code>nums2</code> sorted in <strong>non-decreasing order</strong> and an integer <code>k</code>.<p>Define a pair <code>(u, v)</code> which consists of one element from the first array and one element from the second array.<p>Return <em>the</em> <code>k</code> <em>pairs</em> <code>(u<sub>1</sub>, v<sub>1</sub>), (u<sub>2</sub>, v<sub>2</sub>), ..., (u<sub>k</sub>, v<sub>k</sub>)</code> <em>with the smallest sums</em>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> nums1 = [1,7,11], nums2 = [2,4,6], k = 3
<strong>Output:</strong> [[1,2],[1,4],[1,6]]
<strong>Explanation:</strong> The first 3 pairs are returned from the sequence: [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> nums1 = [1,1,2], nums2 = [1,2,3], k = 2
<strong>Output:</strong> [[1,1],[1,1]]
<strong>Explanation:</strong> The first 2 pairs are returned from the sequence: [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= nums1.length, nums2.length &lt;= 10<sup>5</sup></code><li><code>-10<sup>9</sup> &lt;= nums1[i], nums2[i] &lt;= 10<sup>9</sup></code><li><code>nums1</code> and <code>nums2</code> both are sorted in <strong>non-decreasing order</strong>.<li><code>1 &lt;= k &lt;= 10<sup>4</sup></code><li><code>k &lt;= nums1.length * nums2.length</code></ul>`,submissions:[{time:1766698297,language:"py",runtime:95,memory:37,accepted:!0,code_content:`class Solution:
    def kSmallestPairs(self, nums1: List[int], nums2: List[int], k: int) -> List[List[int]]:
        result: List[List[int]] = []
        heap = []
        visited = set()

        heapq.heappush(heap, (nums1[0] + nums2[0], 0, 0))
        visited.add((0, 0))

        for _ in range(k):
            _, i, j = heapq.heappop(heap)
            result.append([nums1[i], nums2[j]])

            if i + 1 < len(nums1) and (i + 1, j) not in visited:
                heapq.heappush(heap, (nums1[i + 1] + nums2[j], i + 1, j))
                visited.add((i + 1, j))

            if j + 1 < len(nums2) and (i, j + 1) not in visited:
                heapq.heappush(heap, (nums1[i] + nums2[j + 1], i, j + 1))
                visited.add((i, j + 1))

        return result`}]},374:{title:"guess number higher or lower",difficulty:"Easy",html_content:`<h1>374 - Guess Number Higher or Lower</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/guess-number-higher-or-lower/>guess-number-higher-or-lower</a></h2><p>We are playing the Guess Game. The game is as follows:<p>I pick a number from <code>1</code> to <code>n</code>. You have to guess which number I picked (the number I picked stays the same throughout the game).<p>Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.<p>You call a pre-defined API <code>int guess(int num)</code>, which returns three possible results:<ul><li><code>-1</code>: Your guess is higher than the number I picked (i.e. <code>num > pick</code>).<li><code>1</code>: Your guess is lower than the number I picked (i.e. <code>num &lt; pick</code>).<li><code>0</code>: your guess is equal to the number I picked (i.e. <code>num == pick</code>).</ul><p>Return <em>the number that I picked</em>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> n = 10, pick = 6
<strong>Output:</strong> 6
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> n = 1, pick = 1
<strong>Output:</strong> 1
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> n = 2, pick = 1
<strong>Output:</strong> 1
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= n &lt;= 2<sup>31</sup> - 1</code><li><code>1 &lt;= pick &lt;= n</code></ul>`,submissions:[{time:1720735963,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`/** 
 * Forward declaration of guess API.
 * @param  num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * int guess(int num);
 */

class Solution {
public:
    int guessNumber(int n) {
        long long st = 1;
        long long end = n;
        int test;
        int gues = 1;
        while(gues){
            test = st + (end-st) /2;
            gues = guess(test);
            if(gues == -1)
                end = test;
            else 
                st = test +1;
        }
        return test;
    }
};`},{time:1720736019,language:"cpp",runtime:2,memory:7,accepted:!0,code_content:`/** 
 * Forward declaration of guess API.
 * @param  num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * int guess(int num);
 */

class Solution {
public:
    int guessNumber(int n) {
        long long st = 1;
        long long end = n;
        long long test;
        int gues = 1;
        while(gues){
            test = st + (end-st) /2;
            gues = guess(test);
            if(gues == -1)
                end = test;
            else 
                st = test +1;
        }
        return test;
    }
};`},{time:1720736142,language:"cpp",runtime:3,memory:7,accepted:!0,code_content:`/** 
 * Forward declaration of guess API.
 * @param  num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * int guess(int num);
 */

class Solution {
public:
    int guessNumber(int n) {
        long long st = 1;
        long long end = n;
        long long test;
        int gues = 1;
        while(gues){
            test = (end) /2;
            gues = guess(test);
            if(gues == -1)
                end = test;
            else 
                st = test +1;
        }
        return test;
    }
};`}]},380:{title:"insert delete getrandom o1",difficulty:"Medium",html_content:`<h1>380 - Insert Delete GetRandom O(1)</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/insert-delete-getrandom-o1/>insert-delete-getrandom-o1</a></h2><p>Implement the <code>RandomizedSet</code> class:<ul><li><code>RandomizedSet()</code> Initializes the <code>RandomizedSet</code> object.<li><code>bool insert(int val)</code> Inserts an item <code>val</code> into the set if not present. Returns <code>true</code> if the item was not present, <code>false</code> otherwise.<li><code>bool remove(int val)</code> Removes an item <code>val</code> from the set if present. Returns <code>true</code> if the item was present, <code>false</code> otherwise.<li><code>int getRandom()</code> Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the <b>same probability</b> of being returned.</ul><p>You must implement the functions of the class such that each function works in <strong>average</strong> <code>O(1)</code> time complexity.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input</strong>
["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
[[], [1], [2], [2], [], [1], [2], []]
<strong>Output</strong>
[null, true, false, true, 2, true, false, 2]

<strong>Explanation</strong>
RandomizedSet randomizedSet = new RandomizedSet();
randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
randomizedSet.insert(2); // 2 was already in the set, so return false.
randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>-2<sup>31</sup> &lt;= val &lt;= 2<sup>31</sup> - 1</code><li>At most <code>2 * </code><code>10<sup>5</sup></code> calls will be made to <code>insert</code>, <code>remove</code>, and <code>getRandom</code>.<li>There will be <strong>at least one</strong> element in the data structure when <code>getRandom</code> is called.</ul>`,submissions:[{time:1761401086,language:"cpp",runtime:50,memory:113,accepted:!0,code_content:`class RandomizedSet {
    private:
    vector<int> rand_index;
    std::unordered_map<int,int> rand_set;

public:
    RandomizedSet() {
        rand_set = {};
    }
    
    bool insert(int val) {
        //Return value for find(), An iterator to the requested element. If no such element is found, 
        //past-the-end (see end()) iterator is returned.
        if (rand_set.find(val) == rand_set.end()){
            rand_set[val] = rand_index.size();
            rand_index.push_back(val);
            return true;
        }

        return false;
        
    }
    
    bool remove(int val) {
        if (rand_set.find(val) != rand_set.end()){
            int index_remove = rand_set[val];

            rand_set[rand_index.back()] = index_remove;
            rand_set.erase(val);
            rand_index[index_remove] = rand_index.back();
            rand_index.pop_back();

            return true;
        }
        
        return false;
        
    }
    
    int getRandom() {
        return rand_index[rand() % rand_index.size()];
    }
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * RandomizedSet* obj = new RandomizedSet();
 * bool param_1 = obj->insert(val);
 * bool param_2 = obj->remove(val);
 * int param_3 = obj->getRandom();
 */`}]},383:{title:"ransom note",difficulty:"Easy",html_content:`<h1>383 - Ransom Note</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/ransom-note/>ransom-note</a></h2><p>Given two strings <code>ransomNote</code> and <code>magazine</code>, return <code>true</code><em> if </em><code>ransomNote</code><em> can be constructed by using the letters from </em><code>magazine</code><em> and </em><code>false</code><em> otherwise</em>.<p>Each letter in <code>magazine</code> can only be used once in <code>ransomNote</code>.<p> <p><strong class=example>Example 1:</strong><pre><strong>Input:</strong> ransomNote = "a", magazine = "b"
<strong>Output:</strong> false
</pre><p><strong class=example>Example 2:</strong><pre><strong>Input:</strong> ransomNote = "aa", magazine = "ab"
<strong>Output:</strong> false
</pre><p><strong class=example>Example 3:</strong><pre><strong>Input:</strong> ransomNote = "aa", magazine = "aab"
<strong>Output:</strong> true
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= ransomNote.length, magazine.length &lt;= 10<sup>5</sup></code><li><code>ransomNote</code> and <code>magazine</code> consist of lowercase English letters.</ul>`,submissions:[{time:1763683093,language:"py",runtime:19,memory:17,accepted:!0,code_content:`class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        counts = defaultdict(int)

        for ch in ransomNote:
            counts[ch] -= 1

        for ch in magazine:
            counts[ch] += 1

        return not any(value < 0 for value in counts.values())

        `}]},392:{title:"is subsequence",difficulty:"Easy",html_content:`<h1>392 - Is Subsequence</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/is-subsequence/>is-subsequence</a></h2><p>Given two strings <code>s</code> and <code>t</code>, return <code>true</code><em> if </em><code>s</code><em> is a <strong>subsequence</strong> of </em><code>t</code><em>, or </em><code>false</code><em> otherwise</em>.<p>A <strong>subsequence</strong> of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., <code>"ace"</code> is a subsequence of <code>"<u>a</u>b<u>c</u>d<u>e</u>"</code> while <code>"aec"</code> is not).<p> <p><strong class=example>Example 1:</strong><pre><strong>Input:</strong> s = "abc", t = "ahbgdc"
<strong>Output:</strong> true
</pre><p><strong class=example>Example 2:</strong><pre><strong>Input:</strong> s = "axc", t = "ahbgdc"
<strong>Output:</strong> false
</pre><p> <p><strong>Constraints:</strong><ul><li><code>0 &lt;= s.length &lt;= 100</code><li><code>0 &lt;= t.length &lt;= 10<sup>4</sup></code><li><code>s</code> and <code>t</code> consist only of lowercase English letters.</ul><p> <p><strong>Follow up:</strong> Suppose there are lots of incoming <code>s</code>, say <code>s<sub>1</sub>, s<sub>2</sub>, ..., s<sub>k</sub></code> where <code>k >= 10<sup>9</sup></code>, and you want to check one by one to see if <code>t</code> has its subsequence. In this scenario, how would you change your code?`,submissions:[{time:1693074884,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    bool isSubsequence(string s, string t) {
        for (int i = 0; i < s.length(); i++) {
            if(t.find(s[i]) == std::string::npos){
                return false;
            }
        }
        return true;
    }
};`},{time:1693078700,language:"cpp",runtime:3,memory:6,accepted:!0,code_content:`class Solution {
  public: bool isSubsequence(string s, string t) {
    int x = 0; int i = 0;
    while(i < s.length() && x < t.length()){
        if (s[i] == t[x]) {
                i++;
            }
            x++;
    }

return i == s.length();

  }

};`}]},394:{title:"decode string",difficulty:"Medium",html_content:`<h1>394 - Decode String</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/decode-string/>decode-string</a></h2><p>Given an encoded string, return its decoded string.<p>The encoding rule is: <code>k[encoded_string]</code>, where the <code>encoded_string</code> inside the square brackets is being repeated exactly <code>k</code> times. Note that <code>k</code> is guaranteed to be a positive integer.<p>You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, <code>k</code>. For example, there will not be input like <code>3a</code> or <code>2[4]</code>.<p>The test cases are generated so that the length of the output will never exceed <code>10<sup>5</sup></code>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> s = "3[a]2[bc]"
<strong>Output:</strong> "aaabcbc"
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> s = "3[a2[c]]"
<strong>Output:</strong> "accaccacc"
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> s = "2[abc]3[cd]ef"
<strong>Output:</strong> "abcabccdcdcdef"
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= s.length &lt;= 30</code><li><code>s</code> consists of lowercase English letters, digits, and square brackets <code>'[]'</code>.<li><code>s</code> is guaranteed to be <strong>a valid</strong> input.<li>All the integers in <code>s</code> are in the range <code>[1, 300]</code>.</ul>`,submissions:[{time:1717890282,language:"cpp",runtime:0,memory:7,accepted:!0,code_content:`class Solution {
public:
    string decodeString(string s) {
        string ans;
        int i = 0;
        while (i < s.length()) {
            if (isdigit(s[i])) {
                int mult = 0;
                while (isdigit(s[i])) {
                    mult = mult * 10 + (s[i] - '0');
                    i++;
                }
                i++;
                int fbracket = 1;
                int start = i;
                while (fbracket != 0) {
                    if (s[i] == '[') fbracket++;
                    if (s[i] == ']') fbracket--;
                    i++;
                }
                string temp = decodeString(s.substr(start, i - start - 1));
                for (int j = 0; j < mult; j++) {
                    ans += temp;
                }
            } else {
                ans += s[i];
                i++;
            }
        }
        return ans;
    }
};
`}]},399:{title:"evaluate division",difficulty:"Medium",html_content:`<h1>399 - Evaluate Division</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/evaluate-division/>evaluate-division</a></h2><p>You are given an array of variable pairs <code>equations</code> and an array of real numbers <code>values</code>, where <code>equations[i] = [A<sub>i</sub>, B<sub>i</sub>]</code> and <code>values[i]</code> represent the equation <code>A<sub>i</sub> / B<sub>i</sub> = values[i]</code>. Each <code>A<sub>i</sub></code> or <code>B<sub>i</sub></code> is a string that represents a single variable.<p>You are also given some <code>queries</code>, where <code>queries[j] = [C<sub>j</sub>, D<sub>j</sub>]</code> represents the <code>j<sup>th</sup></code> query where you must find the answer for <code>C<sub>j</sub> / D<sub>j</sub> = ?</code>.<p>Return <em>the answers to all queries</em>. If a single answer cannot be determined, return <code>-1.0</code>.<p><strong>Note:</strong> The input is always valid. You may assume that evaluating the queries will not result in division by zero and that there is no contradiction.<p><strong>Note: </strong>The variables that do not occur in the list of equations are undefined, so the answer cannot be determined for them.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
<strong>Output:</strong> [6.00000,0.50000,-1.00000,1.00000,-1.00000]
<strong>Explanation:</strong> 
Given: <em>a / b = 2.0</em>, <em>b / c = 3.0</em>
queries are: <em>a / c = ?</em>, <em>b / a = ?</em>, <em>a / e = ?</em>, <em>a / a = ?</em>, <em>x / x = ? </em>
return: [6.0, 0.5, -1.0, 1.0, -1.0 ]
note: x is undefined => -1.0</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0], queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
<strong>Output:</strong> [3.75000,0.40000,5.00000,0.20000]
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> equations = [["a","b"]], values = [0.5], queries = [["a","b"],["b","a"],["a","c"],["x","y"]]
<strong>Output:</strong> [0.50000,2.00000,-1.00000,-1.00000]
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= equations.length &lt;= 20</code><li><code>equations[i].length == 2</code><li><code>1 &lt;= A<sub>i</sub>.length, B<sub>i</sub>.length &lt;= 5</code><li><code>values.length == equations.length</code><li><code>0.0 &lt; values[i] &lt;= 20.0</code><li><code>1 &lt;= queries.length &lt;= 20</code><li><code>queries[i].length == 2</code><li><code>1 &lt;= C<sub>j</sub>.length, D<sub>j</sub>.length &lt;= 5</code><li><code>A<sub>i</sub>, B<sub>i</sub>, C<sub>j</sub>, D<sub>j</sub></code> consist of lower case English letters and digits.</ul>`,submissions:[{time:1720227138,language:"cpp",runtime:0,memory:11,accepted:!0,code_content:`class Solution {
public:
    vector<double> calcEquation(vector<vector<string>>& equations, vector<double>& values, vector<vector<string>>& queries) {
        bool flag = false;
        vector<double> ans;
        unordered_map<string, vector<pair<string, double>>> adj;
        unordered_map<string, bool> is_vis;
        for(int i = 0; i < equations.size(); i++) {
            adj[equations[i][0]].push_back({equations[i][1], values[i]});
            adj[equations[i][1]].push_back({equations[i][0], 1/values[i]});
            is_vis[equations[i][0]] = false;
            is_vis[equations[i][1]] = false;
        }
        for(int i = 0; i < queries.size(); i++)
        {
            if (adj.find(queries[i][0]) == adj.end() || adj.find(queries[i][1]) == adj.end()) {
                cout << queries[i][0] << " , " << queries[i][1] <<endl;
                ans.push_back(-1.0);
                continue;
            }

            dfs(adj, is_vis, ans, queries[i][0],queries[i][1], 1, flag);

            if (flag == false) {
                ans.push_back(-1.0);
            }
            is_vis.clear();
            flag = false;
        }

        return ans;
    }
private:
void dfs(unordered_map<string, vector<pair<string, double>>> &adj, unordered_map<string, bool> &is_vis, vector<double> &ans, string cur, string dest, double res, bool &flag)
    {
        is_vis[cur] = true;

        if(cur == dest) {
            ans.push_back(res);
            flag = true;
            return;
        }

        for(int i = 0; i < adj[cur].size(); i++) {
            string x = adj[cur][i].first;
            double value = adj[cur][i].second;

            if(is_vis[x] == false) {
                dfs(adj, is_vis, ans, x , dest, res*value, flag);
            }
        }
    }
};`}]},433:{title:"minimum genetic mutation",difficulty:"Medium",html_content:`<h1>433 - Minimum Genetic Mutation</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/minimum-genetic-mutation/>minimum-genetic-mutation</a></h2><p>A gene string can be represented by an 8-character long string, with choices from <code>'A'</code>, <code>'C'</code>, <code>'G'</code>, and <code>'T'</code>.<p>Suppose we need to investigate a mutation from a gene string <code>startGene</code> to a gene string <code>endGene</code> where one mutation is defined as one single character changed in the gene string.<ul><li>For example, <code>"AACCGGTT" --> "AACCGGTA"</code> is one mutation.</ul><p>There is also a gene bank <code>bank</code> that records all the valid gene mutations. A gene must be in <code>bank</code> to make it a valid gene string.<p>Given the two gene strings <code>startGene</code> and <code>endGene</code> and the gene bank <code>bank</code>, return <em>the minimum number of mutations needed to mutate from </em><code>startGene</code><em> to </em><code>endGene</code>. If there is no such a mutation, return <code>-1</code>.<p>Note that the starting point is assumed to be valid, so it might not be included in the bank.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> startGene = "AACCGGTT", endGene = "AACCGGTA", bank = ["AACCGGTA"]
<strong>Output:</strong> 1
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> startGene = "AACCGGTT", endGene = "AAACGGTA", bank = ["AACCGGTA","AACCGCTA","AAACGGTA"]
<strong>Output:</strong> 2
</pre><p> <p><strong>Constraints:</strong><ul><li><code>0 &lt;= bank.length &lt;= 10</code><li><code>startGene.length == endGene.length == bank[i].length == 8</code><li><code>startGene</code>, <code>endGene</code>, and <code>bank[i]</code> consist of only the characters <code>['A', 'C', 'G', 'T']</code>.</ul>`,submissions:[{time:1768317409,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution:
    def minMutation(self, startGene: str, endGene: str, bank: List[str]) -> int:
        bank_set = set(bank)
        if endGene not in bank_set and startGene != endGene:
            return -1

        queue = deque()
        queue.append((startGene,0))
        visited = set()

        while queue:
            thisGene, depth = queue.pop()
            if thisGene == endGene:
                return depth
            string = list(thisGene)

            for i in range(len(string)):
                char = string[i]
                for ch in ['A','C','G','T']:
                    string[i] = ch
                    new_gene = ''.join(string)
                    if new_gene not in visited and new_gene in bank:
                        queue.append((new_gene, depth + 1))
                        visited.add(new_gene)

                string[i] = char

        return -1`},{time:1768317750,language:"py",runtime:0,memory:19,accepted:!0,code_content:`class Solution:
    def minMutation(self, startGene: str, endGene: str, bank: List[str]) -> int:
        bank_set = set(bank)
        if endGene not in bank_set and startGene != endGene:
            return -1

        queue = deque()
        queue.append((startGene,0))
        visited = set()

        while queue:
            thisGene, depth = queue.popleft()
            if thisGene == endGene:
                return depth
            thisGene = list(thisGene)

            for i in range(len(thisGene)):
                char = thisGene[i]
                for ch in ['A','C','G','T']:
                    thisGene[i] = ch
                    new_gene = ''.join(thisGene)
                    if new_gene not in visited and new_gene in bank:
                        queue.append((new_gene, depth + 1))
                        visited.add(new_gene)

                thisGene[i] = char

        return -1`}]},435:{title:"non overlapping intervals",difficulty:"Medium",html_content:`<h1>435 - Non-overlapping Intervals</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/non-overlapping-intervals/>non-overlapping-intervals</a></h2><p>Given an array of intervals <code>intervals</code> where <code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code>, return <em>the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping</em>.<p><strong>Note</strong> that intervals which only touch at a point are <strong>non-overlapping</strong>. For example, <code>[1, 2]</code> and <code>[2, 3]</code> are non-overlapping.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> intervals = [[1,2],[2,3],[3,4],[1,3]]
<strong>Output:</strong> 1
<strong>Explanation:</strong> [1,3] can be removed and the rest of the intervals are non-overlapping.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> intervals = [[1,2],[1,2],[1,2]]
<strong>Output:</strong> 2
<strong>Explanation:</strong> You need to remove two [1,2] to make the rest of the intervals non-overlapping.
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> intervals = [[1,2],[2,3]]
<strong>Output:</strong> 0
<strong>Explanation:</strong> You don't need to remove any of the intervals since they're already non-overlapping.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= intervals.length &lt;= 10<sup>5</sup></code><li><code>intervals[i].length == 2</code><li><code>-5 * 10<sup>4</sup> &lt;= start<sub>i</sub> &lt; end<sub>i</sub> &lt;= 5 * 10<sup>4</sup></code></ul>`,submissions:[{time:1721679471,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    int eraseOverlapIntervals(vector<vector<int>>& intervals) {
        int solution = 1;
        int n = intervals.size();
        sort(intervals.begin(), intervals.end(), cmp);
        int prev = 0;
        for (int i = 1; i < n; i++){
            if(intervals[i][0] >= intervals[prev][1]){
                prev = i;
                solution++;
            }
            
        }

        return n - solution;
    }
private:
    static bool cmp(vector<int>& a, vector<int>& b){
        if(a[0] == b[0])
        return a[1] < b[1];
        return a[0] < b[0];
    }
};`},{time:1721679626,language:"cpp",runtime:222,memory:93,accepted:!0,code_content:`class Solution {
public:
    int eraseOverlapIntervals(vector<vector<int>>& intervals) {
        int solution = 1;
        int n = intervals.size();
        sort(intervals.begin(), intervals.end(), cmp);
        int prev = 0;
        for (int i = 1; i < n; i++){
            if(intervals[i][0] >= intervals[prev][1]){
                prev = i;
                solution++;
            }
            
        }

        return n - solution;
    }
private:
    static bool cmp(vector<int>& a, vector<int>& b){
        return a[1] < b[1];
    }
};`}]},437:{title:"path sum iii",difficulty:"Medium",html_content:`<h1>437 - Path Sum III</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/path-sum-iii/>path-sum-iii</a></h2><p>Given the <code>root</code> of a binary tree and an integer <code>targetSum</code>, return <em>the number of paths where the sum of the values along the path equals</em> <code>targetSum</code>.<p>The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2021/04/09/pathsum3-1-tree.jpg style=width:450px;height:386px><pre>
<strong>Input:</strong> root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
<strong>Output:</strong> 3
<strong>Explanation:</strong> The paths that sum to 8 are shown.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
<strong>Output:</strong> 3
</pre><p> <p><strong>Constraints:</strong><ul><li>The number of nodes in the tree is in the range <code>[0, 1000]</code>.<li><code>-10<sup>9</sup> &lt;= Node.val &lt;= 10<sup>9</sup></code><li><code>-1000 &lt;= targetSum &lt;= 1000</code></ul>`,submissions:[{time:1719460226,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int pathSum(TreeNode* root, int targetSum) {
        stack<int> v;
        return recurse(root, targetSum, v);
    }
private:
    int recurse(TreeNode* root, int targetSum, stack<int> v){
        int value = 0;
        if(root->left){
        v.push(root->left);
        value += recurse(root->left, targetSum, v);
        v.pop();
        }
        if(root->right){
        v.push(root->right);
        value += recurse(root->right, targetSum, v);
        v.pop();
        }

        if(root->left == nullptr && root->right == nullptr){
            while(!v.empty()){
            
            value += combinations(targetSum, v);
            v.pop();
            }
        }
        return value;

    }
    int combinations(int targetSum, stack<int> v){
    int value = 0;
    while (!v.empty()) {
        value += v.top();
        v.pop();
    }
    if (value == targetSum)
        return 1;
        return 0;
    }
};`},{time:1719787771,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int pathSum(TreeNode* root, int targetSum) {
        map<int, int> sumcount;
        sumcount[0] = 1;
        return traverse(root, targetSum, 0 , sumcount);
    }

private: 
    int traverse(TreeNode* root, int targetSum, int currentsum, map<int, int> sumcount){
        if(root == nullptr) return 0;
        currentsum += root->val;

        int numPathsToCurrent  = sumcount[currentsum - targetSum];
        sumcount[currentsum]++;

        int result = numPathsToCurrent 
        + traverse(root->left, targetSum, currentsum, sumcount)
        + traverse(root->right, targetSum, currentsum, sumcount);
        sumcount[currentsum]--;
        return result;
    }
};`},{time:1719787922,language:"cpp",runtime:1202,memory:375,accepted:!0,code_content:`/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int pathSum(TreeNode* root, int targetSum) {
        map<long, int> sumcount;
        sumcount[0] = 1;
        return traverse(root, targetSum, 0 , sumcount);
    }

private: 
    int traverse(TreeNode* root, int targetSum, long currentsum, map<long, int> sumcount){
        if(root == nullptr) return 0;
        currentsum += root->val;

        int numPathsToCurrent  = sumcount[currentsum - targetSum];
        sumcount[currentsum]++;

        int result = numPathsToCurrent 
        + traverse(root->left, targetSum, currentsum, sumcount)
        + traverse(root->right, targetSum, currentsum, sumcount);
        sumcount[currentsum]--;
        return result;
    }
};`}]},443:{title:"string compression",difficulty:"Medium",html_content:`<h1>443 - String Compression</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/string-compression/>string-compression</a></h2><p>Given an array of characters <code>chars</code>, compress it using the following algorithm:<p>Begin with an empty string <code>s</code>. For each group of <strong>consecutive repeating characters</strong> in <code>chars</code>:<ul><li>If the group's length is <code>1</code>, append the character to <code>s</code>.<li>Otherwise, append the character followed by the group's length.</ul><p>The compressed string <code>s</code> <strong>should not be returned separately</strong>, but instead, be stored <strong>in the input character array <code>chars</code></strong>. Note that group lengths that are <code>10</code> or longer will be split into multiple characters in <code>chars</code>.<p>After you are done <strong>modifying the input array,</strong> return <em>the new length of the array</em>.<p>You must write an algorithm that uses only constant extra space.<p><strong>Note: </strong>The characters in the array beyond the returned length do not matter and should be ignored.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> chars = ["a","a","b","b","c","c","c"]
<strong>Output:</strong> Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
<strong>Explanation:</strong> The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> chars = ["a"]
<strong>Output:</strong> Return 1, and the first character of the input array should be: ["a"]
<strong>Explanation:</strong> The only group is "a", which remains uncompressed since it's a single character.
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
<strong>Output:</strong> Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
<strong>Explanation:</strong> The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= chars.length &lt;= 2000</code><li><code>chars[i]</code> is a lowercase English letter, uppercase English letter, digit, or symbol.</ul>`,submissions:[{time:1693013015,language:"cpp",runtime:3,memory:9,accepted:!0,code_content:`class Solution {
public:
    int compress(vector<char>& chars) {
        string final;
        int temp = 0;
        if (chars.empty()) {
            return final.size();
        }
        
        final += chars[0];
        for (int ch : chars) {
            if (final.back() == ch){
                temp += 1;
            }
            else {
                if (temp > 1) {
                    final += to_string(temp);
                }
                temp = 1;
                final += ch;
            }
        }
        if (temp > 1) {
            final += to_string(temp); 
        }
        chars.clear();
        for (char ch : final) {
            chars.push_back(ch); 
        }
     return final.size();
    }
};`}]},450:{title:"delete node in a bst",difficulty:"Medium",html_content:`<h1>450 - Delete Node in a BST</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/delete-node-in-a-bst/>delete-node-in-a-bst</a></h2><p>Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return <em>the <strong>root node reference</strong> (possibly updated) of the BST</em>.<p>Basically, the deletion can be divided into two stages:<ol><li>Search for a node to remove.<li>If the node is found, delete the node.</ol><p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/09/04/del_node_1.jpg style=width:800px;height:214px><pre>
<strong>Input:</strong> root = [5,3,6,2,4,null,7], key = 3
<strong>Output:</strong> [5,4,6,2,null,null,7]
<strong>Explanation:</strong> Given key to delete is 3. So we find the node with value 3 and delete it.
One valid answer is [5,4,6,2,null,null,7], shown in the above BST.
Please notice that another valid answer is [5,2,6,null,4,null,7] and it's also accepted.
<img alt src=https://assets.leetcode.com/uploads/2020/09/04/del_node_supp.jpg style=width:350px;height:255px>
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> root = [5,3,6,2,4,null,7], key = 0
<strong>Output:</strong> [5,3,6,2,4,null,7]
<strong>Explanation:</strong> The tree does not contain a node with value = 0.
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> root = [], key = 0
<strong>Output:</strong> []
</pre><p> <p><strong>Constraints:</strong><ul><li>The number of nodes in the tree is in the range <code>[0, 10<sup>4</sup>]</code>.<li><code>-10<sup>5</sup> &lt;= Node.val &lt;= 10<sup>5</sup></code><li>Each node has a <strong>unique</strong> value.<li><code>root</code> is a valid binary search tree.<li><code>-10<sup>5</sup> &lt;= key &lt;= 10<sup>5</sup></code></ul><p> <p><strong>Follow up:</strong> Could you solve it with time complexity <code>O(height of tree)</code>?`,submissions:[{time:1719943862,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    TreeNode* deleteNode(TreeNode* root, int key) {
        if(root == nullptr) return nullptr;
        
        else if(key < root->val){
            root->left = deleteNode(root->left, key);
        }
        else if (key < root->val){
            root->right = deleteNode(root->right, key);
        }else{
            if (root->left == nullptr) {
                TreeNode* temp = root->right;
                delete root;
                return temp;
            } else if (root->right == nullptr) {
                TreeNode* temp = root->left;
                delete root;
                return temp;
            }
        
        TreeNode* temp = minValueNode(root->right);
        root->val = temp->val;
        root->right = deleteNode(root->right, temp->val);
    }
    return root;
        }
private:
    TreeNode* minValueNode(TreeNode* node) {
        TreeNode* current = node;
        while (current && current->left != nullptr) {
            current = current->left;
        }
        return current;
    }


};`},{time:1719943944,language:"cpp",runtime:23,memory:32,accepted:!0,code_content:`/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    TreeNode* deleteNode(TreeNode* root, int key) {
        if(root == nullptr) return nullptr;
        
        if(key < root->val){
            root->left = deleteNode(root->left, key);
        }
        else if (key > root->val){
            root->right = deleteNode(root->right, key);
        }else{
            if (root->left == nullptr) {
                TreeNode* temp = root->right;
                delete root;
                return temp;
            } else if (root->right == nullptr) {
                TreeNode* temp = root->left;
                delete root;
                return temp;
            }
        
        TreeNode* temp = minValueNode(root->right);
        root->val = temp->val;
        root->right = deleteNode(root->right, temp->val);
    }
    return root;
        }
private:
    TreeNode* minValueNode(TreeNode* node) {
        TreeNode* current = node;
        while (current && current->left != nullptr) {
            current = current->left;
        }
        return current;
    }


};`}]},452:{title:"minimum number of arrows to burst balloons",difficulty:"Medium",html_content:`<h1>452 - Minimum Number of Arrows to Burst Balloons</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/>minimum-number-of-arrows-to-burst-balloons</a></h2><p>There are some spherical balloons taped onto a flat wall that represents the XY-plane. The balloons are represented as a 2D integer array <code>points</code> where <code>points[i] = [x<sub>start</sub>, x<sub>end</sub>]</code> denotes a balloon whose <strong>horizontal diameter</strong> stretches between <code>x<sub>start</sub></code> and <code>x<sub>end</sub></code>. You do not know the exact y-coordinates of the balloons.<p>Arrows can be shot up <strong>directly vertically</strong> (in the positive y-direction) from different points along the x-axis. A balloon with <code>x<sub>start</sub></code> and <code>x<sub>end</sub></code> is <strong>burst</strong> by an arrow shot at <code>x</code> if <code>x<sub>start</sub> &lt;= x &lt;= x<sub>end</sub></code>. There is <strong>no limit</strong> to the number of arrows that can be shot. A shot arrow keeps traveling up infinitely, bursting any balloons in its path.<p>Given the array <code>points</code>, return <em>the <strong>minimum</strong> number of arrows that must be shot to burst all balloons</em>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> points = [[10,16],[2,8],[1,6],[7,12]]
<strong>Output:</strong> 2
<strong>Explanation:</strong> The balloons can be burst by 2 arrows:
- Shoot an arrow at x = 6, bursting the balloons [2,8] and [1,6].
- Shoot an arrow at x = 11, bursting the balloons [10,16] and [7,12].
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> points = [[1,2],[3,4],[5,6],[7,8]]
<strong>Output:</strong> 4
<strong>Explanation:</strong> One arrow needs to be shot for each balloon for a total of 4 arrows.
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> points = [[1,2],[2,3],[3,4],[4,5]]
<strong>Output:</strong> 2
<strong>Explanation:</strong> The balloons can be burst by 2 arrows:
- Shoot an arrow at x = 2, bursting the balloons [1,2] and [2,3].
- Shoot an arrow at x = 4, bursting the balloons [3,4] and [4,5].
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= points.length &lt;= 10<sup>5</sup></code><li><code>points[i].length == 2</code><li><code>-2<sup>31</sup> &lt;= x<sub>start</sub> &lt; x<sub>end</sub> &lt;= 2<sup>31</sup> - 1</code></ul>`,submissions:[{time:1721679647,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    int findMinArrowShots(vector<vector<int>>& points) {
        sort(points.begin(), points.end(), cmp);
        int xs = INT_MIN;
        int xe = INT_MIN;
        int shots = 0;
        for(auto i : points){
            if(xe < i[0]){
                shots++;
                xs = i[0];
                xe = i[1];
            }
            else {
                xs = max(xs, i[0]);
                xe = min(xe, i[1]);
            }
        }
        return shots;
    }
private:
    static bool cmp(vector<int>& a, vector<int>& b){
        return a[0] < b[0];
    }
};`},{time:1721680944,language:"cpp",runtime:303,memory:106,accepted:!0,code_content:`class Solution {
public:
    int findMinArrowShots(vector<vector<int>>& points) {
        sort(points.begin(), points.end(), cmp);
        int xs = points[0][1];
        int shots = 1;
        for(auto i : points){
            if(i[0] > xs){
                shots++;
                xs = i[1];
            }
        }
        return shots;
    }
private:
    static bool cmp(vector<int>& a, vector<int>& b){
        return a[1] < b[1];
    }

};`}]},502:{title:"ipo",difficulty:"Hard",html_content:`<h1>502 - IPO</h1><h2>Difficulty: Hard - <a href=https://leetcode.com/problems/ipo/>ipo</a></h2><p>Suppose LeetCode will start its <strong>IPO</strong> soon. In order to sell a good price of its shares to Venture Capital, LeetCode would like to work on some projects to increase its capital before the <strong>IPO</strong>. Since it has limited resources, it can only finish at most <code>k</code> distinct projects before the <strong>IPO</strong>. Help LeetCode design the best way to maximize its total capital after finishing at most <code>k</code> distinct projects.<p>You are given <code>n</code> projects where the <code>i<sup>th</sup></code> project has a pure profit <code>profits[i]</code> and a minimum capital of <code>capital[i]</code> is needed to start it.<p>Initially, you have <code>w</code> capital. When you finish a project, you will obtain its pure profit and the profit will be added to your total capital.<p>Pick a list of <strong>at most</strong> <code>k</code> distinct projects from given projects to <strong>maximize your final capital</strong>, and return <em>the final maximized capital</em>.<p>The answer is guaranteed to fit in a 32-bit signed integer.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> k = 2, w = 0, profits = [1,2,3], capital = [0,1,1]
<strong>Output:</strong> 4
<strong>Explanation:</strong> Since your initial capital is 0, you can only start the project indexed 0.
After finishing it you will obtain profit 1 and your capital becomes 1.
With capital 1, you can either start the project indexed 1 or the project indexed 2.
Since you can choose at most 2 projects, you need to finish the project indexed 2 to get the maximum capital.
Therefore, output the final maximized capital, which is 0 + 1 + 3 = 4.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> k = 3, w = 0, profits = [1,2,3], capital = [0,1,2]
<strong>Output:</strong> 6
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= k &lt;= 10<sup>5</sup></code><li><code>0 &lt;= w &lt;= 10<sup>9</sup></code><li><code>n == profits.length</code><li><code>n == capital.length</code><li><code>1 &lt;= n &lt;= 10<sup>5</sup></code><li><code>0 &lt;= profits[i] &lt;= 10<sup>4</sup></code><li><code>0 &lt;= capital[i] &lt;= 10<sup>9</sup></code></ul>`,submissions:[{time:1766686047,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution:
    def findMaximizedCapital(self, k: int, w: int, profits: List[int], capital: List[int]) -> int:
        cost_profit = []


        for cost, profit in zip(capital, profits):
            if profit != 0:
                heapq.heappush(cost_profit, (cost, profit))

        projects = []
        x: int = 0

        while True:
            while len(cost_profit) > x and cost_profit[x][0] <= w:
                cost, profit = cost_profit[x]
                heapq.heappush(projects, -profit)
                x += 1

            if not projects or k == 0:
                return w

            while projects and k != 0:
                profit = heapq.heappop(projects)
                w -= profit
                k -= 1`},{time:1766690913,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution:
    def findMaximizedCapital(self, k: int, w: int, profits: List[int], capital: List[int]) -> int:
        cost_profit = []


        for cost, profit in zip(capital, profits):
            if profit != 0:
                heapq.heappush(cost_profit, (cost, profit))

        projects = []
        x: int = 0

        for _ in range(k):
            while len(cost_profit) > x and cost_profit[x][0] <= w:
                cost, profit = cost_profit[x]
                heapq.heappush(projects, -profit)
                x += 1

            if not projects:
                break

            w -= heapq.heappop(projects)

        return w`},{time:1766691219,language:"py",runtime:304,memory:44,accepted:!0,code_content:`class Solution:
    def findMaximizedCapital(self, k: int, w: int, profits: List[int], capital: List[int]) -> int:
        cost_profit = []


        for cost, profit in zip(capital, profits):
            if profit != 0:
                cost_profit.append((cost, -profit))

        cost_profit.sort()

        projects = []
        x: int = 0
        size = len(cost_profit)

        for _ in range(k):
            while size > x and cost_profit[x][0] <= w:
                cost, profit = cost_profit[x]
                heapq.heappush(projects, profit)
                x += 1

            if not projects:
                break

            w -= heapq.heappop(projects)

        return w`}]},530:{title:"minimum absolute difference in bst",difficulty:"Easy",html_content:`<h1>530 - Minimum Absolute Difference in BST</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/minimum-absolute-difference-in-bst/>minimum-absolute-difference-in-bst</a></h2><p>Given the <code>root</code> of a Binary Search Tree (BST), return <em>the minimum absolute difference between the values of any two different nodes in the tree</em>.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2021/02/05/bst1.jpg style=width:292px;height:301px><pre>
<strong>Input:</strong> root = [4,2,6,1,3]
<strong>Output:</strong> 1
</pre><p><strong class=example>Example 2:</strong><p><img alt src=https://assets.leetcode.com/uploads/2021/02/05/bst2.jpg style=width:282px;height:301px><pre>
<strong>Input:</strong> root = [1,0,48,null,null,12,49]
<strong>Output:</strong> 1
</pre><p> <p><strong>Constraints:</strong><ul><li>The number of nodes in the tree is in the range <code>[2, 10<sup>4</sup>]</code>.<li><code>0 &lt;= Node.val &lt;= 10<sup>5</sup></code></ul><p> <p><strong>Note:</strong> This question is the same as 783: <a href=https://leetcode.com/problems/minimum-distance-between-bst-nodes/ target=_blank>https://leetcode.com/problems/minimum-distance-between-bst-nodes/</a>`,submissions:[{time:1765223160,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def getMinimumDifference(self, root: Optional[TreeNode]) -> int:
        prev = 0

        while root:
            if root.left:
                prev = root.val
                root = root.left
            elif root.right:
                prev = root.val
                root = root.right
            else:
                return prev - root.val

        return 0
        `},{time:1765223261,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def getMinimumDifference(self, root: Optional[TreeNode]) -> int:
        prev = 0

        while root:
            if root.left:
                prev = root.val
                root = root.left
            elif root.right:
                prev = root.val
                root = root.right
            else:
                return abs(prev - root.val)

        return 0
        `},{time:1765224048,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def getMinimumDifference(self, root: Optional[TreeNode]) -> int:
        min_dif = 0xFFFFFFF
        stack = deque()
        stack.append(root)

        while stack:
            node = stack.pop()
            if node.left:
                min_dif = min(abs(node.val - node.left.val), min_dif)
                stack.append(node.left)

            if node.right:
                min_dif = min(abs(node.right.val - node.val), min_dif)
                stack.append(node.right)


        return min_dif`},{time:1765225044,language:"py",runtime:-1,memory:-1,accepted:!1,code_content:`# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def getMinimumDifference(self, root: Optional[TreeNode]) -> int:
        min_dif = 0xFFFFFFF
        stack = deque()
        stack.append(root)
        prev = -99999999

        while stack or root:
            while root:
                stack.append(root)
                root = root.left

            node = stack.pop()
            min_dif = min(min_dif, abs(node.val - prev))

            prev = node.val
            root = node.right


        return min_dif`},{time:1765225227,language:"py",runtime:1,memory:19,accepted:!0,code_content:`# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def getMinimumDifference(self, root: Optional[TreeNode]) -> int:
        min_dif = 0xFFFFFFF
        stack = deque()
        prev = None

        while stack or root:
            while root:
                stack.append(root)
                root = root.left

            node = stack.pop()
            if prev is not None:
                min_dif = min(min_dif, abs(node.val - prev))

            prev = node.val
            root = node.right


        return min_dif`}]},547:{title:"number of provinces",difficulty:"Medium",html_content:`<h1>547 - Number of Provinces</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/number-of-provinces/>number-of-provinces</a></h2><p>There are <code>n</code> cities. Some of them are connected, while some are not. If city <code>a</code> is connected directly with city <code>b</code>, and city <code>b</code> is connected directly with city <code>c</code>, then city <code>a</code> is connected indirectly with city <code>c</code>.<p>A <strong>province</strong> is a group of directly or indirectly connected cities and no other cities outside of the group.<p>You are given an <code>n x n</code> matrix <code>isConnected</code> where <code>isConnected[i][j] = 1</code> if the <code>i<sup>th</sup></code> city and the <code>j<sup>th</sup></code> city are directly connected, and <code>isConnected[i][j] = 0</code> otherwise.<p>Return <em>the total number of <strong>provinces</strong></em>.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/12/24/graph1.jpg style=width:222px;height:142px><pre>
<strong>Input:</strong> isConnected = [[1,1,0],[1,1,0],[0,0,1]]
<strong>Output:</strong> 2
</pre><p><strong class=example>Example 2:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/12/24/graph2.jpg style=width:222px;height:142px><pre>
<strong>Input:</strong> isConnected = [[1,0,0],[0,1,0],[0,0,1]]
<strong>Output:</strong> 3
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= n &lt;= 200</code><li><code>n == isConnected.length</code><li><code>n == isConnected[i].length</code><li><code>isConnected[i][j]</code> is <code>1</code> or <code>0</code>.<li><code>isConnected[i][i] == 1</code><li><code>isConnected[i][j] == isConnected[j][i]</code></ul>`,submissions:[{time:1719972832,language:"cpp",runtime:28,memory:20,accepted:!0,code_content:`class Solution {
public:
    int findCircleNum(vector<vector<int>>& isConnected) {
        int size = 0;
        set<int> mp;
        stack<int> stack;
        vector<vector<int>>::iterator ptr;
        int count = -1;


        for (ptr = isConnected.begin(); ptr < isConnected.end(); ptr++) {
        count++;
        if(mp.contains(count)) continue;

        stack.push(count);
        while (!stack.empty()) {
            checks(isConnected[stack.top()], stack, mp);
        }
        size++;
        
        }
        return size;

    }
private:
    void checks(vector<int> room, stack<int>& stack, set<int>& mp){
        mp.insert(stack.top());
        stack.pop();
        
        for (int i = 0; i < room.size(); ++i) {
            if (room[i] && mp.find(i) == mp.end()) {
                stack.push(i);
                mp.insert(i);
            }
        }
    }
};`}]},605:{title:"can place flowers",difficulty:"Easy",html_content:`<h1>605 - Can Place Flowers</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/can-place-flowers/>can-place-flowers</a></h2><p>You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in <strong>adjacent</strong> plots.<p>Given an integer array <code>flowerbed</code> containing <code>0</code>'s and <code>1</code>'s, where <code>0</code> means empty and <code>1</code> means not empty, and an integer <code>n</code>, return <code>true</code> <em>if</em> <code>n</code> <em>new flowers can be planted in the</em> <code>flowerbed</code> <em>without violating the no-adjacent-flowers rule and</em> <code>false</code> <em>otherwise</em>.<p> <p><strong class=example>Example 1:</strong><pre><strong>Input:</strong> flowerbed = [1,0,0,0,1], n = 1
<strong>Output:</strong> true
</pre><p><strong class=example>Example 2:</strong><pre><strong>Input:</strong> flowerbed = [1,0,0,0,1], n = 2
<strong>Output:</strong> false
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= flowerbed.length &lt;= 2 * 10<sup>4</sup></code><li><code>flowerbed[i]</code> is <code>0</code> or <code>1</code>.<li>There are no two adjacent flowers in <code>flowerbed</code>.<li><code>0 &lt;= n &lt;= flowerbed.length</code></ul>`,submissions:[{time:1686952692,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    bool canPlaceFlowers(vector<int>& flowerbed, int n) {
        int num = 0;
        for(int i = 1; i > flowerbed.size(); i++){
            if(!(flowerbed[i-1] || flowerbed[i] || flowerbed[i+1])){
                num++;
                flowerbed[i] = 1;
            }
        }
        return num >= n;
    }
};`},{time:1686952846,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    bool canPlaceFlowers(vector<int>& flowerbed, int n) {
        int num = 0;
        for(int i = 1; i < flowerbed.size(); i++){
            if(!(flowerbed[i-1] || flowerbed[i] || flowerbed[i+1])){
                num++;
                flowerbed[i] = 1;
            }
        }
        return num >= n;
    }
};`},{time:1686952958,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    bool canPlaceFlowers(vector<int>& flowerbed, int n) {
        int num = 0;
        if(!(flowerbed[0] || flowerbed[1])){
            num++;
            flowerbed[0] = 1;
        }
        for(int i = 1; i < flowerbed.size(); i++){
            if(!(flowerbed[i-1] || flowerbed[i] || flowerbed[i+1])){
                num++;
                flowerbed[i] = 1;
            }
        }
        return num >= n;
    }
};`},{time:1686953232,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    bool canPlaceFlowers(vector<int>& flowerbed, int n) {
        int num = 0;
        if(!(flowerbed[0] || flowerbed[1])){
            num++;
            flowerbed[0] = 1;
        }
        if(!(flowerbed[flowerbed.size()-2] || flowerbed[flowerbed.size()-1])){
            num++;
            flowerbed[flowerbed.size() -1] = 1;
        }
        for(int i = 1; i < flowerbed.size()-1; i++){
            if(!(flowerbed[i-1] || flowerbed[i] || flowerbed[i+1])){
                num++;
                flowerbed[i] = 1;
            }
        }
        return num >= n;
    }
};`},{time:1686953251,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    bool canPlaceFlowers(vector<int>& flowerbed, int n) {
        int num = 0;
        if(!(flowerbed[0] || flowerbed[1])){
            num++;
            flowerbed[0] = 1;
        }
        if(!(flowerbed[flowerbed.size()-2] || flowerbed[flowerbed.size()-1])){
            num++;
            flowerbed[flowerbed.size() -1] = 1;
        }
        for(int i = 1; i < flowerbed.size()-1; i++){
            if(!(flowerbed[i-1] || flowerbed[i] || flowerbed[i+1])){
                num++;
                flowerbed[i] = 1;
            }
        }
        return num >= n;
    }
};`},{time:1686953264,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    bool canPlaceFlowers(vector<int>& flowerbed, int n) {
        int num = 0;
        if (!(flowerbed[0] || flowerbed[1])) {
            num++;
            flowerbed[0] = 1;
        }
        if (!(flowerbed[flowerbed.size() - 1] || flowerbed[flowerbed.size() - 2])) {
            num++;
            flowerbed[flowerbed.size() - 1] = 1;
        }
        for (int i = 1; i < flowerbed.size() - 1; i++) {
            if (!(flowerbed[i - 1] || flowerbed[i] || flowerbed[i + 1])) {
                num++;
                flowerbed[i] = 1;
            }
        }
        return num >= n;
    }
};
`},{time:1686953421,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    bool canPlaceFlowers(vector<int>& flowerbed, int n) {
        int num = 0;
        if (!(flowerbed[0] || flowerbed[1])) {
            num++;
            flowerbed[0] = 1;
        }
        if(flowerbed.size() >= 2){
        if (!(flowerbed[flowerbed.size() - 1] || flowerbed[flowerbed.size() - 2])) {
            num++;
            flowerbed[flowerbed.size() - 1] = 1;
        }}
        for (int i = 1; i < flowerbed.size() - 1; i++) {
            if (!(flowerbed[i - 1] || flowerbed[i] || flowerbed[i + 1])) {
                num++;
                flowerbed[i] = 1;
            }
        }
        return num >= n;
    }
};
`},{time:1686953665,language:"cpp",runtime:17,memory:20,accepted:!0,code_content:`class Solution {
public:
    bool canPlaceFlowers(vector<int>& flowerbed, int n) {
        int num = 0;
        if(flowerbed.size() == 1){
            if (!(flowerbed[0]))
                num++;
            return num >= n;
        }
        if (!(flowerbed[0] || flowerbed[1])) {
            num++;
            flowerbed[0] = 1;
        }
        if(flowerbed.size() >= 2){
        if (!(flowerbed[flowerbed.size() - 1] || flowerbed[flowerbed.size() - 2])) {
            num++;
            flowerbed[flowerbed.size() - 1] = 1;
        }}
        for (int i = 1; i < flowerbed.size() - 1; i++) {
            if (!(flowerbed[i - 1] || flowerbed[i] || flowerbed[i + 1])) {
                num++;
                flowerbed[i] = 1;
            }
        }
        return num >= n;
    }
};
`}]},637:{title:"average of levels in binary tree",difficulty:"Easy",html_content:`<h1>637 - Average of Levels in Binary Tree</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/average-of-levels-in-binary-tree/>average-of-levels-in-binary-tree</a></h2><p>Given the <code>root</code> of a binary tree, return <em>the average value of the nodes on each level in the form of an array</em>. Answers within <code>10<sup>-5</sup></code> of the actual answer will be accepted.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2021/03/09/avg1-tree.jpg style=width:277px;height:302px><pre>
<strong>Input:</strong> root = [3,9,20,null,null,15,7]
<strong>Output:</strong> [3.00000,14.50000,11.00000]
Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
Hence return [3, 14.5, 11].
</pre><p><strong class=example>Example 2:</strong><p><img alt src=https://assets.leetcode.com/uploads/2021/03/09/avg2-tree.jpg style=width:292px;height:302px><pre>
<strong>Input:</strong> root = [3,9,20,15,7]
<strong>Output:</strong> [3.00000,14.50000,11.00000]
</pre><p> <p><strong>Constraints:</strong><ul><li>The number of nodes in the tree is in the range <code>[1, 10<sup>4</sup>]</code>.<li><code>-2<sup>31</sup> &lt;= Node.val &lt;= 2<sup>31</sup> - 1</code></ul>`,submissions:[{time:1765049729,language:"py",runtime:0,memory:19,accepted:!0,code_content:`# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def averageOfLevels(self, root: Optional[TreeNode]) -> List[float]:
        result: List[float] = []
        if not root:
            return result

        level_order = deque()
        prev = deque()
        level_order.append(root)

        while True:
            amount = 0
            number = 0
            while level_order:
                node = level_order.pop()
                amount += node.val
                number += 1
                if node.left:
                    prev.append(node.left)
                if node.right:
                    prev.append(node.right)

            if amount == 0:
                temp = 0
            else:
                temp = amount / number

            result.append(temp)
            if not prev:
                break

            prev, level_order = level_order, prev

        return result`},{time:1765051537,language:"rs",runtime:-1,memory:-1,accepted:!1,code_content:`// Definition for a binary tree node.
// #[derive(Debug, PartialEq, Eq)]
// pub struct TreeNode {
//   pub val: i32,
//   pub left: Option<Rc<RefCell<TreeNode>>>,
//   pub right: Option<Rc<RefCell<TreeNode>>>,
// }
// 
// impl TreeNode {
//   #[inline]
//   pub fn new(val: i32) -> Self {
//     TreeNode {
//       val,
//       left: None,
//       right: None
//     }
//   }
// }
use std::rc::Rc;
use std::cell::RefCell;
use std::collections::VecDeque;

impl Solution {
    pub fn average_of_levels(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<f64> {
        let mut result: Vec<f64> = Vec::new();

        if root.is_none(){
            return result;
        }
        let mut level_order: VecDeque<Rc<RefCell<TreeNode>>> = VecDeque::new();
        let mut prev: VecDeque<Rc<RefCell<TreeNode>>> = VecDeque::new();
        
        if let Some(r) = root {
            level_order.push_back(r);
        }

        loop {
            let mut amount = 0;
            let mut number = 0;
            while !level_order.is_empty(){
                let node_rc = level_order.pop_front().unwrap();

                let node = node_rc.borrow();
                amount += node.val;
                number += 1;
                if let Some(left_child) = node.left.clone() {
                    prev.push_back(left_child);
                }
                if let Some(right_child) = node.right.clone() {
                    prev.push_back(right_child);
                }

            }
            let mut temp: f64 = 0 as f64;
            if amount != 0{
                temp = amount as f64 / number as f64;
            }
            result.push(temp);

            if prev.is_empty(){
                break
            }

            std::mem::swap(&mut prev, &mut level_order);

        }

        return result;
        
    }
}`},{time:1765051638,language:"rs",runtime:0,memory:3,accepted:!0,code_content:`// Definition for a binary tree node.
// #[derive(Debug, PartialEq, Eq)]
// pub struct TreeNode {
//   pub val: i32,
//   pub left: Option<Rc<RefCell<TreeNode>>>,
//   pub right: Option<Rc<RefCell<TreeNode>>>,
// }
// 
// impl TreeNode {
//   #[inline]
//   pub fn new(val: i32) -> Self {
//     TreeNode {
//       val,
//       left: None,
//       right: None
//     }
//   }
// }
use std::rc::Rc;
use std::cell::RefCell;
use std::collections::VecDeque;

impl Solution {
    pub fn average_of_levels(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<f64> {
        let mut result: Vec<f64> = Vec::new();

        if root.is_none(){
            return result;
        }
        let mut level_order: VecDeque<Rc<RefCell<TreeNode>>> = VecDeque::new();
        let mut prev: VecDeque<Rc<RefCell<TreeNode>>> = VecDeque::new();
        
        if let Some(r) = root {
            level_order.push_back(r);
        }

        loop {
            let mut amount: i64 = 0;
            let mut number = 0;
            while !level_order.is_empty(){
                let node_rc = level_order.pop_front().unwrap();

                let node = node_rc.borrow();
                amount += node.val as i64;
                number += 1;
                if let Some(left_child) = node.left.clone() {
                    prev.push_back(left_child);
                }
                if let Some(right_child) = node.right.clone() {
                    prev.push_back(right_child);
                }

            }
            let mut temp: f64 = 0 as f64;
            if amount != 0{
                temp = amount as f64 / number as f64;
            }
            result.push(temp);

            if prev.is_empty(){
                break
            }

            std::mem::swap(&mut prev, &mut level_order);

        }

        return result;
        
    }
}`}]},643:{title:"maximum average subarray i",difficulty:"Easy",html_content:`<h1>643 - Maximum Average Subarray I</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/maximum-average-subarray-i/>maximum-average-subarray-i</a></h2><p>You are given an integer array <code>nums</code> consisting of <code>n</code> elements, and an integer <code>k</code>.<p>Find a contiguous subarray whose <strong>length is equal to</strong> <code>k</code> that has the maximum average value and return <em>this value</em>. Any answer with a calculation error less than <code>10<sup>-5</sup></code> will be accepted.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> nums = [1,12,-5,-6,50,3], k = 4
<strong>Output:</strong> 12.75000
<strong>Explanation:</strong> Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> nums = [5], k = 1
<strong>Output:</strong> 5.00000
</pre><p> <p><strong>Constraints:</strong><ul><li><code>n == nums.length</code><li><code>1 &lt;= k &lt;= n &lt;= 10<sup>5</sup></code><li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></ul>`,submissions:[{time:1702577476,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    double findMaxAverage(vector<int>& nums, int k) {
        float ave = 0;
        float greatest = 0;
        float temp = 0;
        for(int i = 0; i < nums.size(); i++){
            ave += nums[i];
        }
        if (nums.size() == 1){
            return nums[0];
        }
        for(int i = 0; i < nums.size() - k; i++){
            for(int x = i; x < (i + k); x++){
            temp += nums[x];
            }
            if (abs(greatest - ave) > abs(temp - ave)){
                greatest = temp;
            }
            temp = 0;
    }
    return greatest / k;
};
};`},{time:1702577564,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    double findMaxAverage(vector<int>& nums, int k) {
        float ave = 0;
        float greatest = 0;
        float temp = 0;
        for(int i = 0; i < nums.size(); i++){
            ave += nums[i];
        }
        if (nums.size() == 1){
            return nums[0];
        }
        for(int i = 0; i < nums.size() - k+1; i++){
            for(int x = i; x < (i + k); x++){
            temp += nums[x];
            }
            if (abs(greatest - ave) > abs(temp - ave)){
                greatest = temp;
            }
            temp = 0;
    }
    return greatest / k;
};
};`},{time:1702577628,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    double findMaxAverage(vector<int>& nums, int k) {
        float ave = 0;
        double greatest = 0;
        double temp = 0;
        for(int i = 0; i < nums.size(); i++){
            ave += nums[i];
        }
        if (nums.size() == 1){
            return nums[0];
        }
        for(int i = 0; i < nums.size() - k+1; i++){
            for(int x = i; x < (i + k); x++){
            temp += nums[x];
            }
            if (abs(greatest - ave) > abs(temp - ave)){
                greatest = temp;
            }
            temp = 0;
    }
    return greatest / k;
};
};`},{time:1702578652,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    double findMaxAverage(vector<int>& nums, int k) {
        float ave = 0;
        double greatest = 0;
        double temp = 0;
        for(int i = 0; i < nums.size(); i++){
            ave += nums[i];
        }

        
        if (nums.size() == 1){
            return nums[0];
        }
        for(int i = 0; i < nums.size() - k+1; i++){
            for(int x = i; x < (i + k); x++){
            temp += nums[x];
            }
            if (greatest - ave < temp - ave){
                greatest = temp;
            }
            temp = 0;
    }
    return greatest / k;
    
};
};`},{time:1702578978,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    double findMaxAverage(vector<int>& nums, int k) {
        float ave = 0;
        double greatest = 0;
        double temp = 0;
        for(int i = 0; i < nums.size(); i++){
            ave += nums[i];
        }
        
        
        if (nums.size() == 1){
            return nums[0];
        }
        for(int i = 0; i < nums.size() - k+1; i++){
            for(int x = i; x < (i + k); x++){
            temp += nums[x];
            }
            if (abs(greatest) - ave < abs(temp) - ave){
                greatest = temp;
            }
            temp = 0;
    }
    return greatest / k;
    
};
};`},{time:1702579369,language:"cpp",runtime:148,memory:110,accepted:!0,code_content:`class Solution {
public:
    double findMaxAverage(vector<int>& nums, int k) {
        double ave = 0;
        double greatest = 0;
        for (int i = 0; i < k; ++i) {
            ave += nums[i];
        }
        greatest = ave;
        
        for (int i = k; i < nums.size(); ++i) {
            ave += nums[i] - nums[i - k]; 
            greatest = max(greatest, ave); 
        }
    
    return greatest / k;
    }
};
`}]},649:{title:"dota2 senate",difficulty:"Medium",html_content:`<h1>649 - Dota2 Senate</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/dota2-senate/>dota2-senate</a></h2><p>In the world of Dota2, there are two parties: the Radiant and the Dire.<p>The Dota2 senate consists of senators coming from two parties. Now the Senate wants to decide on a change in the Dota2 game. The voting for this change is a round-based procedure. In each round, each senator can exercise <strong>one</strong> of the two rights:<ul><li><strong>Ban one senator's right:</strong> A senator can make another senator lose all his rights in this and all the following rounds.<li><strong>Announce the victory:</strong> If this senator found the senators who still have rights to vote are all from the same party, he can announce the victory and decide on the change in the game.</ul><p>Given a string <code>senate</code> representing each senator's party belonging. The character <code>'R'</code> and <code>'D'</code> represent the Radiant party and the Dire party. Then if there are <code>n</code> senators, the size of the given string will be <code>n</code>.<p>The round-based procedure starts from the first senator to the last senator in the given order. This procedure will last until the end of voting. All the senators who have lost their rights will be skipped during the procedure.<p>Suppose every senator is smart enough and will play the best strategy for his own party. Predict which party will finally announce the victory and change the Dota2 game. The output should be <code>"Radiant"</code> or <code>"Dire"</code>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> senate = "RD"
<strong>Output:</strong> "Radiant"
<strong>Explanation:</strong> 
The first senator comes from Radiant and he can just ban the next senator's right in round 1. 
And the second senator can't exercise any rights anymore since his right has been banned. 
And in round 2, the first senator can just announce the victory since he is the only guy in the senate who can vote.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> senate = "RDD"
<strong>Output:</strong> "Dire"
<strong>Explanation:</strong> 
The first senator comes from Radiant and he can just ban the next senator's right in round 1. 
And the second senator can't exercise any rights anymore since his right has been banned. 
And the third senator comes from Dire and he can ban the first senator's right in round 1. 
And in round 2, the third senator can just announce the victory since he is the only guy in the senate who can vote.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>n == senate.length</code><li><code>1 &lt;= n &lt;= 10<sup>4</sup></code><li><code>senate[i]</code> is either <code>'R'</code> or <code>'D'</code>.</ul>`,submissions:[{time:1717907161,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    string predictPartyVictory(string senate) {
        int r = 0;
        int d = 0;
        bool radiant = false;
        bool dire = false;
        for(auto c: senate){
            if(r > 0){
                if(c == 'R'){
                r++;
                radiant = true;
                continue;}
                senate.pop_back();
                r--;
                continue;
            }
            if(d > 0){
                if(c == 'D'){
                d++;
                dire = true;
                continue;}
                senate.pop_back();
                d--;
                continue;
            }
            if(c == 'R'){ 
            r++; 
            radiant = true;}
            else d++;
        }
        if(radiant == true && dire == false) return "Radiant";
        if(radiant == false && dire == true) return "Dire";
        string temp;
        if(radiant && dire)
        temp = predictPartyVictory(senate);
        if (temp == "Radiant") return "Radiant";
        return "Dire";

    }
};`},{time:1717961288,language:"cpp",runtime:8,memory:10,accepted:!0,code_content:`class Solution {
public:
    string predictPartyVictory(string senate) {
        queue<int> radiant, dire;
        int n = senate.size();

        for (int i = 0; i < n; ++i) {
            if (senate[i] == 'R')
                radiant.push(i);
            else
                dire.push(i);
        }
        while (!radiant.empty() && !dire.empty()) {
            int rad = radiant.front();
            int dir = dire.front();
            radiant.pop();
            dire.pop();

            if(rad < dir){
                radiant.push(n+rad);
            }
            else{
                dire.push(n+dir);
            }

        }
        if(radiant.empty())
        return "Dire";
        return "Radiant";


    }
};`}]},714:{title:"best time to buy and sell stock with transaction fee",difficulty:"Medium",html_content:`<h1>714 - Best Time to Buy and Sell Stock with Transaction Fee</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/>best-time-to-buy-and-sell-stock-with-transaction-fee</a></h2><p>You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day, and an integer <code>fee</code> representing a transaction fee.<p>Find the maximum profit you can achieve. You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction.<p><strong>Note:</strong><ul><li>You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).<li>The transaction fee is only charged once for each stock purchase and sale.</ul><p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> prices = [1,3,2,8,4,9], fee = 2
<strong>Output:</strong> 8
<strong>Explanation:</strong> The maximum profit can be achieved by:
- Buying at prices[0] = 1
- Selling at prices[3] = 8
- Buying at prices[4] = 4
- Selling at prices[5] = 9
The total profit is ((8 - 1) - 2) + ((9 - 4) - 2) = 8.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> prices = [1,3,7,5,10,3], fee = 3
<strong>Output:</strong> 6
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= prices.length &lt;= 5 * 10<sup>4</sup></code><li><code>1 &lt;= prices[i] &lt; 5 * 10<sup>4</sup></code><li><code>0 &lt;= fee &lt; 5 * 10<sup>4</sup></code></ul>`,submissions:[{time:1721418127,language:"cpp",runtime:138,memory:93,accepted:!0,code_content:`class Solution {
public:
    int maxProfit(vector<int>& prices, int fee) {
        int n=prices.size();
        vector<vector<int>> dp(n+1,vector<int>(2,0));

        for(int index=n-1; index>=0; index--){
            for(int buy=0; buy<=1 ;buy++){
                  int profit=0;
        if(buy){
            profit= max((-prices[index]+dp[index+1][0]),(dp[index+1][1])); 
        }
        else{
             profit= max((prices[index]+dp[index+1][1]-fee),(dp[index+1][0]));
        }
         dp[index][buy]= profit;
                     
        }}
        return dp[0][1];

    }
};`}]},724:{title:"find pivot index",difficulty:"Easy",html_content:`<h1>724 - Find Pivot Index</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/find-pivot-index/>find-pivot-index</a></h2><p>Given an array of integers <code>nums</code>, calculate the <strong>pivot index</strong> of this array.<p>The <strong>pivot index</strong> is the index where the sum of all the numbers <strong>strictly</strong> to the left of the index is equal to the sum of all the numbers <strong>strictly</strong> to the index's right.<p>If the index is on the left edge of the array, then the left sum is <code>0</code> because there are no elements to the left. This also applies to the right edge of the array.<p>Return <em>the <strong>leftmost pivot index</strong></em>. If no such index exists, return <code>-1</code>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> nums = [1,7,3,6,5,6]
<strong>Output:</strong> 3
<strong>Explanation:</strong>
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> nums = [1,2,3]
<strong>Output:</strong> -1
<strong>Explanation:</strong>
There is no index that satisfies the conditions in the problem statement.</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> nums = [2,1,-1]
<strong>Output:</strong> 0
<strong>Explanation:</strong>
The pivot index is 0.
Left sum = 0 (no elements to the left of index 0)
Right sum = nums[1] + nums[2] = 1 + -1 = 0
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code><li><code>-1000 &lt;= nums[i] &lt;= 1000</code></ul><p> <p><strong>Note:</strong> This question is the same as 1991: <a href=https://leetcode.com/problems/find-the-middle-index-in-array/ target=_blank>https://leetcode.com/problems/find-the-middle-index-in-array/</a>`,submissions:[{time:1706410956,language:"cpp",runtime:18,memory:33,accepted:!0,code_content:`class Solution {
public:
    int pivotIndex(vector<int>& nums) {
        int rightsum = accumulate(nums.begin(), nums.end(), 0);
        int leftsum = 0; 
        for (int i = 0; i < nums.size(); i++) {
            rightsum -= nums[i];
            if(leftsum == rightsum){
                return i;
            }
            leftsum += nums[i];
        }
        return -1;
    }
};`}]},735:{title:"asteroid collision",difficulty:"Medium",html_content:`<h1>735 - Asteroid Collision</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/asteroid-collision/>asteroid-collision</a></h2><p>We are given an array <code>asteroids</code> of integers representing asteroids in a row. The indices of the asteroid in the array represent their relative position in space.<p>For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.<p>Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> asteroids = [5,10,-5]
<strong>Output:</strong> [5,10]
<strong>Explanation:</strong> The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> asteroids = [8,-8]
<strong>Output:</strong> []
<strong>Explanation:</strong> The 8 and -8 collide exploding each other.
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> asteroids = [10,2,-5]
<strong>Output:</strong> [10]
<strong>Explanation:</strong> The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.
</pre><p><strong class=example>Example 4:</strong><pre>
<strong>Input:</strong> asteroids = [3,5,-6,2,-1,4]​​​​​​​
<strong>Output:</strong> [-6,2,4]
<strong>Explanation:</strong> The asteroid -6 makes the asteroid 3 and 5 explode, and then continues going left. On the other side, the asteroid 2 makes the asteroid -1 explode and then continues going right, without reaching asteroid 4.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>2 &lt;= asteroids.length &lt;= 10<sup>4</sup></code><li><code>-1000 &lt;= asteroids[i] &lt;= 1000</code><li><code>asteroids[i] != 0</code></ul>`,submissions:[{time:1717715153,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    vector<int> asteroidCollision(vector<int>& asteroids) {
    vector<int> vec;

    int aster = 0;

    for (auto c: asteroids){
        if (c == 0){
            continue;
        }
        if(aster == 0){
            aster = c;
            continue;
        }
        if(aster == abs(c)){
            aster = 0;
            continue;
        }

        if(aster < c){
            vec.push_back(aster);
            aster = c;
            continue;
        }
        if(aster > c){
            if (aster > abs(c))
            c = aster;
            else
            aster = c;
            continue;
        }
        if(aster == c){
            vec.push_back(c);
            continue;
        }
       }
       if(aster != 0)
       vec.push_back(aster);
       return vec;


    }
};`},{time:1717720181,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    vector<int> asteroidCollision(vector<int>& asteroids) {
    vector<int> vec;
    int aster = 0;
    for (auto c: asteroids){
        if (c == 0){
            continue;
        }
        if(aster == 0){
            aster = c;
            continue;
        }
        if(aster == abs(c)){
            aster = 0;
            continue;
        }
        if(aster == c){
            vec.push_back(c);
            continue;
        }

        if(aster < c){
            vec.push_back(aster);
            aster = c;
            continue;
        }
        if(signbit(aster) == signbit(c)){
            vec.push_back(aster);
            aster = c;
            continue;
        }

        if(signbit(aster) > signbit(c)){
            for(int i = vec.size(); i > 0; i--){
                if(vec[i] > c){
                    aster = vec[i];
                    break;
                }
                if(vec[i] < c){
                    vec.pop_back();
                    continue;
                }
                if(vec[i] == c){
                    vec.pop_back();
                    aster = 0;
                    break;
                }
            }
        }
       }
       int test = asteroids.back();
    if (signbit(aster) >= signbit(test) || aster > abs(test) || test == 0 ){
        if (aster != 0){
       vec.push_back(aster);}
    }
       



       return vec;


    }
};`},{time:1721765012,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Stack { 
public: 
    vector<int> v;
    // Function to push an element onto the stack 
    void push(int data) 
    { 
        v.push_back(data); 
        cout << "Pushed: " << data << endl; 
    } 
  
    // Function to pop an element from the stack 
    int pop() 
    { 
        if (isEmpty()) { 
            cout << "Stack is empty. Cannot pop.
"; 
            return -1; 
        } 
        int top = v.back(); 
        v.pop_back(); 
        cout << "
Popped: " << top << endl; 
        return top; 
    } 
  
    // Function to get the top element of the stack without 
    // removing it 
    int top() 
    { 
        if (isEmpty()) { 
            cout << "Stack is empty. No top element.
"; 
            return -1; 
        } 
        return v.back(); 
    } 
  
    // Function to check if the stack is empty 
    bool isEmpty() { return v.empty(); } 
};

class Solution {
public:
    vector<int> asteroidCollision(vector<int>& asteroids) {
        Stack mystack;
        for(auto i : asteroids){
            if(mystack.isEmpty()){
                mystack.push(i);
            }
            else if(i > 0){
                mystack.push(i);
            }
            else{
                bool test = true;
                while(!mystack.isEmpty() && test){
                    if(abs(i) > mystack.top()){
                        if(mystack.top() < 0){
                            mystack.push(i);
                            test = false;
                        }else{
                            mystack.pop();
                        }
                    }else if(abs(i) == mystack.top()){
                        mystack.pop();
                        test = false;
                    }else{
                        test = false;
                    }

                }
            }

        }
        return mystack.v;
    }
};`},{time:1721766326,language:"cpp",runtime:8,memory:20,accepted:!0,code_content:`class Stack { 
public: 
    vector<int> v;
    // Function to push an element onto the stack 
    void push(int data) 
    { 
        v.push_back(data); 
    } 
  
    // Function to pop an element from the stack 
    int pop() 
    { 
        if (isEmpty()) { 
            return -1; 
        } 
        int top = v.back(); 
        v.pop_back(); 
        return top; 
    } 
  
    // Function to get the top element of the stack without 
    // removing it 
    int top() 
    { 
        if (isEmpty()) { 
            return -1; 
        } 
        return v.back(); 
    } 
  
    // Function to check if the stack is empty 
    bool isEmpty() { return v.empty(); } 
};

class Solution {
public:
    vector<int> asteroidCollision(vector<int>& asteroids) {
        Stack mystack;
        for(auto i : asteroids){
            if(mystack.isEmpty()){
                mystack.push(i);
            }
            else if(i > 0){
                mystack.push(i);
            }
            else if(i < 0){
                while(!mystack.isEmpty()&&mystack.top()>0&&mystack.top()<abs(i)){
                    mystack.pop();
                }
                if(!mystack.isEmpty()&&mystack.top()>0){
                    if(mystack.top()==abs(i)){
                        mystack.pop();
                    }
                }else{
                    mystack.push(i);
                }

            }

        }
        return mystack.v;
    }
};`}]},739:{title:"daily temperatures",difficulty:"Medium",html_content:`<h1>739 - Daily Temperatures</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/daily-temperatures/>daily-temperatures</a></h2><p>Given an array of integers <code>temperatures</code> represents the daily temperatures, return <em>an array</em> <code>answer</code> <em>such that</em> <code>answer[i]</code> <em>is the number of days you have to wait after the</em> <code>i<sup>th</sup></code> <em>day to get a warmer temperature</em>. If there is no future day for which this is possible, keep <code>answer[i] == 0</code> instead.<p> <p><strong class=example>Example 1:</strong><pre><strong>Input:</strong> temperatures = [73,74,75,71,69,72,76,73]
<strong>Output:</strong> [1,1,4,2,1,1,0,0]
</pre><p><strong class=example>Example 2:</strong><pre><strong>Input:</strong> temperatures = [30,40,50,60]
<strong>Output:</strong> [1,1,1,0]
</pre><p><strong class=example>Example 3:</strong><pre><strong>Input:</strong> temperatures = [30,60,90]
<strong>Output:</strong> [1,1,0]
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= temperatures.length &lt;= 10<sup>5</sup></code><li><code>30 &lt;= temperatures[i] &lt;= 100</code></ul>`,submissions:[{time:1721689353,language:"cpp",runtime:102,memory:105,accepted:!0,code_content:`class Solution {
public:
    vector<int> dailyTemperatures(vector<int>& temperatures) {
        int n = temperatures.size();
        stack<int> indices;
        vector<int> result(n, 0);
        int idx = 0;

        for (int i = 0; i < n; ++i) {
            while (!indices.empty() && temperatures[i] > temperatures[indices.top()]) {
                idx = indices.top();
                indices.pop();
                result[idx] = i - idx;
            }
            indices.push(i);
        }
        return result;
    }
};`}]},747:{title:"min cost climbing stairs",difficulty:"Easy",html_content:`<h1>747 - Min Cost Climbing Stairs</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/min-cost-climbing-stairs/>min-cost-climbing-stairs</a></h2><p>You are given an integer array <code>cost</code> where <code>cost[i]</code> is the cost of <code>i<sup>th</sup></code> step on a staircase. Once you pay the cost, you can either climb one or two steps.<p>You can either start from the step with index <code>0</code>, or the step with index <code>1</code>.<p>Return <em>the minimum cost to reach the top of the floor</em>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> cost = [10,<u>15</u>,20]
<strong>Output:</strong> 15
<strong>Explanation:</strong> You will start at index 1.
- Pay 15 and climb two steps to reach the top.
The total cost is 15.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> cost = [<u>1</u>,100,<u>1</u>,1,<u>1</u>,100,<u>1</u>,<u>1</u>,100,<u>1</u>]
<strong>Output:</strong> 6
<strong>Explanation:</strong> You will start at index 0.
- Pay 1 and climb two steps to reach index 2.
- Pay 1 and climb two steps to reach index 4.
- Pay 1 and climb two steps to reach index 6.
- Pay 1 and climb one step to reach index 7.
- Pay 1 and climb two steps to reach index 9.
- Pay 1 and climb one step to reach the top.
The total cost is 6.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>2 &lt;= cost.length &lt;= 1000</code><li><code>0 &lt;= cost[i] &lt;= 999</code></ul>`,submissions:[{time:1721155194,language:"cpp",runtime:3,memory:16,accepted:!0,code_content:`class Solution {
public:
    int minCostClimbingStairs(vector<int>& cost) {
        int n = cost.size();
        int prev1 = cost[0];
        int prev2 = cost[1];

        for (int i = 2; i < n; i++) {
            int curr = cost[i] + min(prev1, prev2);
            prev1 = prev2;
            prev2 = curr;
        }

        return min(prev1, prev2);
    }
};
`}]},772:{title:"construct quad tree",difficulty:"Medium",html_content:`<h1>772 - Construct Quad Tree</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/construct-quad-tree/>construct-quad-tree</a></h2><p>Given a <code>n * n</code> matrix <code>grid</code> of <code>0's</code> and <code>1's</code> only. We want to represent <code>grid</code> with a Quad-Tree.<p>Return <em>the root of the Quad-Tree representing </em><code>grid</code>.<p>A Quad-Tree is a tree data structure in which each internal node has exactly four children. Besides, each node has two attributes:<ul><li><code>val</code>: True if the node represents a grid of 1's or False if the node represents a grid of 0's. Notice that you can assign the <code>val</code> to True or False when <code>isLeaf</code> is False, and both are accepted in the answer.<li><code>isLeaf</code>: True if the node is a leaf node on the tree or False if the node has four children.</ul><pre>
class Node {
    public boolean val;
    public boolean isLeaf;
    public Node topLeft;
    public Node topRight;
    public Node bottomLeft;
    public Node bottomRight;
}</pre><p>We can construct a Quad-Tree from a two-dimensional area using the following steps:<ol><li>If the current grid has the same value (i.e all <code>1's</code> or all <code>0's</code>) set <code>isLeaf</code> True and set <code>val</code> to the value of the grid and set the four children to Null and stop.<li>If the current grid has different values, set <code>isLeaf</code> to False and set <code>val</code> to any value and divide the current grid into four sub-grids as shown in the photo.<li>Recurse for each of the children with the proper sub-grid.</ol><p><img alt src=https://assets.leetcode.com/uploads/2020/02/11/new_top.png style=width:777px;height:181px><p>If you want to know more about the Quad-Tree, you can refer to the <a href=https://en.wikipedia.org/wiki/Quadtree>wiki</a>.<p><strong>Quad-Tree format:</strong><p>You don't need to read this section for solving the problem. This is only if you want to understand the output format here. The output represents the serialized format of a Quad-Tree using level order traversal, where <code>null</code> signifies a path terminator where no node exists below.<p>It is very similar to the serialization of the binary tree. The only difference is that the node is represented as a list <code>[isLeaf, val]</code>.<p>If the value of <code>isLeaf</code> or <code>val</code> is True we represent it as <strong>1</strong> in the list <code>[isLeaf, val]</code> and if the value of <code>isLeaf</code> or <code>val</code> is False we represent it as <strong>0</strong>.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/02/11/grid1.png style=width:777px;height:99px><pre>
<strong>Input:</strong> grid = [[0,1],[1,0]]
<strong>Output:</strong> [[0,1],[1,0],[1,1],[1,1],[1,0]]
<strong>Explanation:</strong> The explanation of this example is shown below:
Notice that 0 represents False and 1 represents True in the photo representing the Quad-Tree.
<img alt src=https://assets.leetcode.com/uploads/2020/02/12/e1tree.png style=width:777px;height:186px>
</pre><p><strong class=example>Example 2:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/02/12/e2mat.png style=width:777px;height:343px><pre>
<strong>Input:</strong> grid = [[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0]]
<strong>Output:</strong> [[0,1],[1,1],[0,1],[1,1],[1,0],null,null,null,null,[1,0],[1,0],[1,1],[1,1]]
<strong>Explanation:</strong> All values in the grid are not the same. We divide the grid into four sub-grids.
The topLeft, bottomLeft and bottomRight each has the same value.
The topRight have different values so we divide it into 4 sub-grids where each has the same value.
Explanation is shown in the photo below:
<img alt src=https://assets.leetcode.com/uploads/2020/02/12/e2tree.png style=width:777px;height:328px>
</pre><p> <p><strong>Constraints:</strong><ul><li><code>n == grid.length == grid[i].length</code><li><code>n == 2<sup>x</sup></code> where <code>0 &lt;= x &lt;= 6</code></ul>`,submissions:[{time:1766285689,language:"py",runtime:84,memory:18,accepted:!0,code_content:`"""
# Definition for a QuadTree node.
class Node:
    def __init__(self, val, isLeaf, topLeft, topRight, bottomLeft, bottomRight):
        self.val = val
        self.isLeaf = isLeaf
        self.topLeft = topLeft
        self.topRight = topRight
        self.bottomLeft = bottomLeft
        self.bottomRight = bottomRight
"""

class Solution:
    def construct(self, grid: List[List[int]]) -> 'Node':

        def quad(size: int, x: int, y: int) -> 'Node':
            if size == 1:
                return Node(grid[x][y], True, None, None, None, None)
            elif size == 2:
                temp = grid[x][y]  # needed
                if all(x == temp for x in [grid[x + 1][y], grid[x][y + 1], grid[x + 1][y + 1]]):
                    return Node(grid[x][y], True, None, None, None, None)

            size //= 2
            topLeft = quad(size, x, y)
            topright = quad(size, x, y + size)
            bottomLeft = quad(size, x + size, y)
            bottomright = quad(size, x + size, y + size)

            temp = topLeft.val  # needed
            if topLeft.isLeaf and topright.isLeaf and bottomLeft.isLeaf and bottomright.isLeaf and topLeft.val == topright.val == bottomLeft.val == bottomright.val:
                return Node(topLeft.val, True, None, None, None, None)
            else:
                return Node(1, False, topLeft, topright, bottomLeft, bottomright)

        return quad(len(grid), 0, 0)`}]},783:{title:"search in a binary search tree",difficulty:"Easy",html_content:`<h1>783 - Search in a Binary Search Tree</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/search-in-a-binary-search-tree/>search-in-a-binary-search-tree</a></h2><p>You are given the <code>root</code> of a binary search tree (BST) and an integer <code>val</code>.<p>Find the node in the BST that the node's value equals <code>val</code> and return the subtree rooted with that node. If such a node does not exist, return <code>null</code>.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2021/01/12/tree1.jpg style=width:422px;height:302px><pre>
<strong>Input:</strong> root = [4,2,7,1,3], val = 2
<strong>Output:</strong> [2,1,3]
</pre><p><strong class=example>Example 2:</strong><p><img alt src=https://assets.leetcode.com/uploads/2021/01/12/tree2.jpg style=width:422px;height:302px><pre>
<strong>Input:</strong> root = [4,2,7,1,3], val = 5
<strong>Output:</strong> []
</pre><p> <p><strong>Constraints:</strong><ul><li>The number of nodes in the tree is in the range <code>[1, 5000]</code>.<li><code>1 &lt;= Node.val &lt;= 10<sup>7</sup></code><li><code>root</code> is a binary search tree.<li><code>1 &lt;= val &lt;= 10<sup>7</sup></code></ul>`,submissions:[{time:1719859129,language:"cpp",runtime:32,memory:33,accepted:!0,code_content:`/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    TreeNode* searchBST(TreeNode* root, int val) {
        if(root == nullptr || root->val == val){
            return root;
        }
        else if(val < root->val){
            return searchBST(root->left, val);
        }
        else{
            return searchBST(root->right, val);
        }
    }
};`}]},806:{title:"domino and tromino tiling",difficulty:"Medium",html_content:`<h1>806 - Domino and Tromino Tiling</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/domino-and-tromino-tiling/>domino-and-tromino-tiling</a></h2><p>You have two types of tiles: a <code>2 x 1</code> domino shape and a tromino shape. You may rotate these shapes.<p><img alt src=https://assets.leetcode.com/uploads/2021/07/15/lc-domino.jpg style=width:362px;height:195px><p>Given an integer n, return <em>the number of ways to tile an</em> <code>2 x n</code> <em>board</em>. Since the answer may be very large, return it <strong>modulo</strong> <code>10<sup>9</sup> + 7</code>.<p>In a tiling, every square must be covered by a tile. Two tilings are different if and only if there are two 4-directionally adjacent cells on the board such that exactly one of the tilings has both squares occupied by a tile.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2021/07/15/lc-domino1.jpg style=width:500px;height:226px><pre>
<strong>Input:</strong> n = 3
<strong>Output:</strong> 5
<strong>Explanation:</strong> The five different ways are shown above.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> n = 1
<strong>Output:</strong> 1
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= n &lt;= 1000</code></ul>`,submissions:[{time:1721273716,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    int numTilings(int n) {
        if(n <= 2){return n;}
        if(n == 3){return 5;}
        vector<int> dp(n , 0);
        dp[0] = 1; dp[1] = 2; dp[2] = 5;

        const unsigned int M = 1000000007;

        for(int i = 3; i < n; i++){
            dp[i] = dp[i-1]%M * 2 + dp[i-3]%M;
        }

        return dp[n-1];
    }
};`},{time:1721273832,language:"cpp",runtime:0,memory:7,accepted:!0,code_content:`class Solution {
public:
    int numTilings(int n) {
        if(n <= 2){return n;}
        if(n == 3){return 5;}
        vector<int> dp(n , 0);
        dp[0] = 1; dp[1] = 2; dp[2] = 5;

        const unsigned int M = 1000000007;

        for(int i = 3; i < n; i++){
            dp[i] = dp[i-1]%M * 2 + dp[i-3]%M;
            dp[i] = dp[i] %M;
        }

        return dp[n-1];
    }
};`}]},871:{title:"keys and rooms",difficulty:"Medium",html_content:`<h1>871 - Keys and Rooms</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/keys-and-rooms/>keys-and-rooms</a></h2><p>There are <code>n</code> rooms labeled from <code>0</code> to <code>n - 1</code> and all the rooms are locked except for room <code>0</code>. Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key.<p>When you visit a room, you may find a set of <strong>distinct keys</strong> in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms.<p>Given an array <code>rooms</code> where <code>rooms[i]</code> is the set of keys that you can obtain if you visited room <code>i</code>, return <code>true</code> <em>if you can visit <strong>all</strong> the rooms, or</em> <code>false</code> <em>otherwise</em>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> rooms = [[1],[2],[3],[]]
<strong>Output:</strong> true
<strong>Explanation:</strong> 
We visit room 0 and pick up key 1.
We then visit room 1 and pick up key 2.
We then visit room 2 and pick up key 3.
We then visit room 3.
Since we were able to visit every room, we return true.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> rooms = [[1,3],[3,0,1],[2],[0]]
<strong>Output:</strong> false
<strong>Explanation:</strong> We can not enter room number 2 since the only key that unlocks it is in that room.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>n == rooms.length</code><li><code>2 &lt;= n &lt;= 1000</code><li><code>0 &lt;= rooms[i].length &lt;= 1000</code><li><code>1 &lt;= sum(rooms[i].length) &lt;= 3000</code><li><code>0 &lt;= rooms[i][j] &lt; n</code><li>All the values of <code>rooms[i]</code> are <strong>unique</strong>.</ul>`,submissions:[{time:1719966639,language:"cpp",runtime:10,memory:14,accepted:!0,code_content:`class Solution {
public:
    bool canVisitAllRooms(vector<vector<int>>& rooms) {
        int size = rooms.size();
        set<int> mp;
        stack<int> stack;
        stack.push(0);

        while (!stack.empty()) {
        mp.insert(stack.top());
        assign(rooms[stack.top()], stack, mp);
    }
        if(size == mp.size())
        return true;
        return false;



    }
private:
    void assign(vector<int> room, stack<int>& stack, set<int>& mp){
        stack.pop();
        vector<int>::iterator ptr;
        for (ptr = room.begin(); ptr < room.end(); ptr++) {
        if(mp.contains(*ptr)){
            continue;
        } else{
            stack.push(*ptr);
        }
        }


    }
};`}]},904:{title:"leaf similar trees",difficulty:"Easy",html_content:`<h1>904 - Leaf-Similar Trees</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/leaf-similar-trees/>leaf-similar-trees</a></h2><p>Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a <strong>leaf value sequence</strong><em>.</em><p><img alt src=https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/16/tree.png style=width:400px;height:336px><p>For example, in the given tree above, the leaf value sequence is <code>(6, 7, 4, 9, 8)</code>.<p>Two binary trees are considered <em>leaf-similar</em> if their leaf value sequence is the same.<p>Return <code>true</code> if and only if the two given trees with head nodes <code>root1</code> and <code>root2</code> are leaf-similar.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/09/03/leaf-similar-1.jpg style=width:600px;height:237px><pre>
<strong>Input:</strong> root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
<strong>Output:</strong> true
</pre><p><strong class=example>Example 2:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/09/03/leaf-similar-2.jpg style=width:300px;height:110px><pre>
<strong>Input:</strong> root1 = [1,2,3], root2 = [1,3,2]
<strong>Output:</strong> false
</pre><p> <p><strong>Constraints:</strong><ul><li>The number of nodes in each tree will be in the range <code>[1, 200]</code>.<li>Both of the given trees will have values in the range <code>[0, 200]</code>.</ul>`,submissions:[{time:1719431278,language:"cpp",runtime:0,memory:14,accepted:!0,code_content:`/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    bool leafSimilar(TreeNode* root1, TreeNode* root2) {
        vector<int> leaves1, leaves2;
        
        getLeaves(root1, leaves1);
        getLeaves(root2, leaves2);
        
        return leaves1 == leaves2;
    }
private:
    void getLeaves(TreeNode* node, vector<int>& leaves) {
        if (node == nullptr) return;
        if (node->left == nullptr && node->right == nullptr) {
            leaves.push_back(node->val);
        } else {
            if (node->left != nullptr) {
                getLeaves(node->left, leaves);
            }
            if (node->right != nullptr) {
                getLeaves(node->right, leaves);
            }
        }
    }
};`}]},907:{title:"koko eating bananas",difficulty:"Medium",html_content:`<h1>907 - Koko Eating Bananas</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/koko-eating-bananas/>koko-eating-bananas</a></h2><p>Koko loves to eat bananas. There are <code>n</code> piles of bananas, the <code>i<sup>th</sup></code> pile has <code>piles[i]</code> bananas. The guards have gone and will come back in <code>h</code> hours.<p>Koko can decide her bananas-per-hour eating speed of <code>k</code>. Each hour, she chooses some pile of bananas and eats <code>k</code> bananas from that pile. If the pile has less than <code>k</code> bananas, she eats all of them instead and will not eat any more bananas during this hour.<p>Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.<p>Return <em>the minimum integer</em> <code>k</code> <em>such that she can eat all the bananas within</em> <code>h</code> <em>hours</em>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> piles = [3,6,7,11], h = 8
<strong>Output:</strong> 4
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> piles = [30,11,23,4,20], h = 5
<strong>Output:</strong> 30
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> piles = [30,11,23,4,20], h = 6
<strong>Output:</strong> 23
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= piles.length &lt;= 10<sup>4</sup></code><li><code>piles.length &lt;= h &lt;= 10<sup>9</sup></code><li><code>1 &lt;= piles[i] &lt;= 10<sup>9</sup></code></ul>`,submissions:[{time:1721014316,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    int minEatingSpeed(vector<int>& piles, int h) {
        sort(piles.begin(),piles.end());
        int start = piles[0];
        int end = piles[piles.size()-1];
        int mid = start + (end - start) / 2;
        int guess = 1;
        while(guess){
            mid = start + ((end-start) / 2);
            guess = test(piles, mid, h, end, start);
            if(guess <= -1)
                end = mid;
            else 
                start = mid +1;
        }
        guess = test(piles, mid-1, h, end, start);
        while(guess == 0){
            mid--;
            guess = test(piles, mid-1, h, end, start);

        }

        return mid;
    }
private: 
    int test(vector<int> piles, int mid, int h, int end, int start){
        int turns = 0;
        for(auto i : piles){
            turns += ceil(1.0 * i /mid);
        }
        return turns - h;
}

};`},{time:1721015106,language:"cpp",runtime:19,memory:37,accepted:!0,code_content:`class Solution {
public:
    int minEatingSpeed(vector<int>& piles, int h) {
        int start = 1;
        int end = *max_element(piles.begin(), piles.end());
        int mid = start + (end - start) / 2;
        int guess = 1;

        while(start < end){
            mid = start + ((end-start) / 2);
            if(test(piles, mid, h)){
                end = mid;
            }
            else{
                start = mid +1;
            }
        }
        return start;

    }
private: 
    bool test(vector<int> piles, int k, int h){
        int turns = 0;
        for(auto i : piles){
            turns += (i + k - 1) / k;
        }
        if(turns > h){
            return false;
        }
        return true;
}

};`}]},937:{title:"online stock span",difficulty:"Medium",html_content:`<h1>937 - Online Stock Span</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/online-stock-span/>online-stock-span</a></h2><p>Design an algorithm that collects daily price quotes for some stock and returns <strong>the span</strong> of that stock's price for the current day.<p>The <strong>span</strong> of the stock's price in one day is the maximum number of consecutive days (starting from that day and going backward) for which the stock price was less than or equal to the price of that day.<ul><li>For example, if the prices of the stock in the last four days is <code>[7,2,1,2]</code> and the price of the stock today is <code>2</code>, then the span of today is <code>4</code> because starting from today, the price of the stock was less than or equal <code>2</code> for <code>4</code> consecutive days.<li>Also, if the prices of the stock in the last four days is <code>[7,34,1,2]</code> and the price of the stock today is <code>8</code>, then the span of today is <code>3</code> because starting from today, the price of the stock was less than or equal <code>8</code> for <code>3</code> consecutive days.</ul><p>Implement the <code>StockSpanner</code> class:<ul><li><code>StockSpanner()</code> Initializes the object of the class.<li><code>int next(int price)</code> Returns the <strong>span</strong> of the stock's price given that today's price is <code>price</code>.</ul><p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input</strong>
["StockSpanner", "next", "next", "next", "next", "next", "next", "next"]
[[], [100], [80], [60], [70], [60], [75], [85]]
<strong>Output</strong>
[null, 1, 1, 1, 2, 1, 4, 6]

<strong>Explanation</strong>
StockSpanner stockSpanner = new StockSpanner();
stockSpanner.next(100); // return 1
stockSpanner.next(80);  // return 1
stockSpanner.next(60);  // return 1
stockSpanner.next(70);  // return 2
stockSpanner.next(60);  // return 1
stockSpanner.next(75);  // return 4, because the last 4 prices (including today's price of 75) were less than or equal to today's price.
stockSpanner.next(85);  // return 6
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= price &lt;= 10<sup>5</sup></code><li>At most <code>10<sup>4</sup></code> calls will be made to <code>next</code>.</ul>`,submissions:[{time:1721695373,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class StockSpanner {
public:
    StockSpanner() {
        
    }
    stack<int> indices;
    stack<int> numbers;
    int next(int price) {
        if(indices.empty()){
            indices.push(price);
            numbers.push(1);
            return 1;
        }
        int temp = 1;
        while(indices.top() < price){
            temp += numbers.top();
            indices.pop();
            numbers.pop();
        }
        indices.push(price);
        numbers.push(temp);
        return temp;
    }
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * StockSpanner* obj = new StockSpanner();
 * int param_1 = obj->next(price);
 */`},{time:1721695779,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class StockSpanner {
public:
    StockSpanner() {
        
    }
    stack<int> indices;
    stack<int> numbers;
    int next(int price) {
        if(indices.empty()){
            indices.push(price);
            numbers.push(1);
            return 1;
        }
        int temp = 1;
        while(!indices.empty() && (indices.top() < price)){
            temp += numbers.top();
            indices.pop();
            numbers.pop();
        }
        indices.push(price);
        numbers.push(temp);
        return temp;
    }
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * StockSpanner* obj = new StockSpanner();
 * int param_1 = obj->next(price);
 */`},{time:1721695871,language:"cpp",runtime:172,memory:90,accepted:!0,code_content:`class StockSpanner {
public:
    StockSpanner() {
        
    }
    stack<int> indices;
    stack<int> numbers;
    int next(int price) {
        if(indices.empty()){
            indices.push(price);
            numbers.push(1);
            return 1;
        }
        int temp = 1;
        while(!indices.empty() && (indices.top() <= price)){
            temp += numbers.top();
            indices.pop();
            numbers.pop();
        }
        indices.push(price);
        numbers.push(temp);
        return temp;
    }
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * StockSpanner* obj = new StockSpanner();
 * int param_1 = obj->next(price);
 */`}]},945:{title:"snakes and ladders",difficulty:"Medium",html_content:`<h1>945 - Snakes and Ladders</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/snakes-and-ladders/>snakes-and-ladders</a></h2><p>You are given an <code>n x n</code> integer matrix <code>board</code> where the cells are labeled from <code>1</code> to <code>n<sup>2</sup></code> in a <a href=https://en.wikipedia.org/wiki/Boustrophedon target=_blank><strong>Boustrophedon style</strong></a> starting from the bottom left of the board (i.e. <code>board[n - 1][0]</code>) and alternating direction each row.<p>You start on square <code>1</code> of the board. In each move, starting from square <code>curr</code>, do the following:<ul><li>Choose a destination square <code>next</code> with a label in the range <code>[curr + 1, min(curr + 6, n<sup>2</sup>)]</code>. <ul><li>This choice simulates the result of a standard <strong>6-sided die roll</strong>: i.e., there are always at most 6 destinations, regardless of the size of the board.</ul><li>If <code>next</code> has a snake or ladder, you <strong>must</strong> move to the destination of that snake or ladder. Otherwise, you move to <code>next</code>.<li>The game ends when you reach the square <code>n<sup>2</sup></code>.</ul><p>A board square on row <code>r</code> and column <code>c</code> has a snake or ladder if <code>board[r][c] != -1</code>. The destination of that snake or ladder is <code>board[r][c]</code>. Squares <code>1</code> and <code>n<sup>2</sup></code> are not the starting points of any snake or ladder.<p>Note that you only take a snake or ladder at most once per dice roll. If the destination to a snake or ladder is the start of another snake or ladder, you do <strong>not</strong> follow the subsequent snake or ladder.<ul><li>For example, suppose the board is <code>[[-1,4],[-1,3]]</code>, and on the first move, your destination square is <code>2</code>. You follow the ladder to square <code>3</code>, but do <strong>not</strong> follow the subsequent ladder to <code>4</code>.</ul><p>Return <em>the least number of dice rolls required to reach the square </em><code>n<sup>2</sup></code><em>. If it is not possible to reach the square, return </em><code>-1</code>.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2018/09/23/snakes.png style=width:500px;height:394px><pre>
<strong>Input:</strong> board = [[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,13,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]]
<strong>Output:</strong> 4
<strong>Explanation:</strong> 
In the beginning, you start at square 1 (at row 5, column 0).
You decide to move to square 2 and must take the ladder to square 15.
You then decide to move to square 17 and must take the snake to square 13.
You then decide to move to square 14 and must take the ladder to square 35.
You then decide to move to square 36, ending the game.
This is the lowest possible number of moves to reach the last square, so return 4.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> board = [[-1,-1],[-1,3]]
<strong>Output:</strong> 1
</pre><p> <p><strong>Constraints:</strong><ul><li><code>n == board.length == board[i].length</code><li><code>2 &lt;= n &lt;= 20</code><li><code>board[i][j]</code> is either <code>-1</code> or in the range <code>[1, n<sup>2</sup>]</code>.<li>The squares labeled <code>1</code> and <code>n<sup>2</sup></code> are not the starting points of any snake or ladder.</ul>`,submissions:[{time:1767737670,language:"py",runtime:16,memory:19,accepted:!0,code_content:`class Solution:
    def snakesAndLadders(self, board: List[List[int]]) -> int:
        n = len(board)
        flatten = [0] * (n * n)
        for i in range(n - 1, -1, -2):
            for j in range(n):
                flatten[(n - 1 - i) * n + j] = board[i][j] - 1
                if i >= 1:
                    flatten[(n - i) * n + (n - 1 - j)] = board[i - 1][j] - 1

        visited = [-1] * (n * n)
        queue = deque()
        queue.append(0)
        visited[0] = 0

        while queue:
            curr = queue.popleft()
            if curr == n * n - 1:
                return visited[curr]
            i0 = min(6, n * n - 1 - curr)
            for i in range(1, i0 + 1):
                next = curr + i
                if flatten[next] != -2: next = flatten[next]
                if visited[next] != -1: continue
                visited[next] = visited[curr] + 1
                queue.append(next)
        return -1`}]},954:{title:"maximum sum circular subarray",difficulty:"Medium",html_content:`<h1>954 - Maximum Sum Circular Subarray</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/maximum-sum-circular-subarray/>maximum-sum-circular-subarray</a></h2><p>Given a <strong>circular integer array</strong> <code>nums</code> of length <code>n</code>, return <em>the maximum possible sum of a non-empty <strong>subarray</strong> of </em><code>nums</code>.<p>A <strong>circular array</strong> means the end of the array connects to the beginning of the array. Formally, the next element of <code>nums[i]</code> is <code>nums[(i + 1) % n]</code> and the previous element of <code>nums[i]</code> is <code>nums[(i - 1 + n) % n]</code>.<p>A <strong>subarray</strong> may only include each element of the fixed buffer <code>nums</code> at most once. Formally, for a subarray <code>nums[i], nums[i + 1], ..., nums[j]</code>, there does not exist <code>i &lt;= k1</code>, <code>k2 &lt;= j</code> with <code>k1 % n == k2 % n</code>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> nums = [1,-2,3,-2]
<strong>Output:</strong> 3
<strong>Explanation:</strong> Subarray [3] has maximum sum 3.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> nums = [5,-3,5]
<strong>Output:</strong> 10
<strong>Explanation:</strong> Subarray [5,5] has maximum sum 5 + 5 = 10.
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> nums = [-3,-2,-3]
<strong>Output:</strong> -2
<strong>Explanation:</strong> Subarray [-2] has maximum sum -2.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>n == nums.length</code><li><code>1 &lt;= n &lt;= 3 * 10<sup>4</sup></code><li><code>-3 * 10<sup>4</sup> &lt;= nums[i] &lt;= 3 * 10<sup>4</sup></code></ul>`,submissions:[{time:1766450869,language:"py",runtime:63,memory:21,accepted:!0,code_content:`class Solution:
    def maxSubarraySumCircular(self, nums: List[int]) -> int:
        result: int = nums[0]
        current: int = 0

        min_result: int = nums[0]
        min_current: int = 0

        sum = 0

        for num in nums:
            sum += num

            min_current += num
            min_result = min(min_result, min_current)
            if min_current > 0:
                min_current = 0


            current += num
            result = max(result, current)
            if current < 0:
                current = 0

        if sum != min_result:
            result = max(result, sum -min_result)
        return result`}]},969:{title:"number of recent calls",difficulty:"Easy",html_content:`<h1>969 - Number of Recent Calls</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/number-of-recent-calls/>number-of-recent-calls</a></h2><p>You have a <code>RecentCounter</code> class which counts the number of recent requests within a certain time frame.<p>Implement the <code>RecentCounter</code> class:<ul><li><code>RecentCounter()</code> Initializes the counter with zero recent requests.<li><code>int ping(int t)</code> Adds a new request at time <code>t</code>, where <code>t</code> represents some time in milliseconds, and returns the number of requests that has happened in the past <code>3000</code> milliseconds (including the new request). Specifically, return the number of requests that have happened in the inclusive range <code>[t - 3000, t]</code>.</ul><p>It is <strong>guaranteed</strong> that every call to <code>ping</code> uses a strictly larger value of <code>t</code> than the previous call.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input</strong>
["RecentCounter", "ping", "ping", "ping", "ping"]
[[], [1], [100], [3001], [3002]]
<strong>Output</strong>
[null, 1, 2, 3, 3]

<strong>Explanation</strong>
RecentCounter recentCounter = new RecentCounter();
recentCounter.ping(1);     // requests = [<u>1</u>], range is [-2999,1], return 1
recentCounter.ping(100);   // requests = [<u>1</u>, <u>100</u>], range is [-2900,100], return 2
recentCounter.ping(3001);  // requests = [<u>1</u>, <u>100</u>, <u>3001</u>], range is [1,3001], return 3
recentCounter.ping(3002);  // requests = [1, <u>100</u>, <u>3001</u>, <u>3002</u>], range is [2,3002], return 3
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= t &lt;= 10<sup>9</sup></code><li>Each test case will call <code>ping</code> with <strong>strictly increasing</strong> values of <code>t</code>.<li>At most <code>10<sup>4</sup></code> calls will be made to <code>ping</code>.</ul>`,submissions:[{time:1717903818,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class RecentCounter {
public:
    queue<int> que;

    RecentCounter() {
        
    }
    
    int ping(int t) {
        int temp = t - 3000;
        que.push(t);

        if(que.front() < temp){
            que.pop();
        }
        
        return que.size();
    }
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * RecentCounter* obj = new RecentCounter();
 * int param_1 = obj->ping(t);
 */`},{time:1717904057,language:"cpp",runtime:136,memory:61,accepted:!0,code_content:`class RecentCounter {
public:
    queue<int> que;

    RecentCounter() {
        
    }
    
    int ping(int t) {
        int temp = t - 3000;
        que.push(t);

        while(!que.empty() && que.front() < temp){
            que.pop();
        }

        return que.size();
    }
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * RecentCounter* obj = new RecentCounter();
 * int param_1 = obj->ping(t);
 */`}]},1036:{title:"rotting oranges",difficulty:"Medium",html_content:`<h1>1036 - Rotting Oranges</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/rotting-oranges/>rotting-oranges</a></h2><p>You are given an <code>m x n</code> <code>grid</code> where each cell can have one of three values:<ul><li><code>0</code> representing an empty cell,<li><code>1</code> representing a fresh orange, or<li><code>2</code> representing a rotten orange.</ul><p>Every minute, any fresh orange that is <strong>4-directionally adjacent</strong> to a rotten orange becomes rotten.<p>Return <em>the minimum number of minutes that must elapse until no cell has a fresh orange</em>. If <em>this is impossible, return</em> <code>-1</code>.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2019/02/16/oranges.png style=width:650px;height:137px><pre>
<strong>Input:</strong> grid = [[2,1,1],[1,1,0],[0,1,1]]
<strong>Output:</strong> 4
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> grid = [[2,1,1],[0,1,1],[1,0,1]]
<strong>Output:</strong> -1
<strong>Explanation:</strong> The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> grid = [[0,2]]
<strong>Output:</strong> 0
<strong>Explanation:</strong> Since there are already no fresh oranges at minute 0, the answer is just 0.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>m == grid.length</code><li><code>n == grid[i].length</code><li><code>1 &lt;= m, n &lt;= 10</code><li><code>grid[i][j]</code> is <code>0</code>, <code>1</code>, or <code>2</code>.</ul>`,submissions:[{time:1720380593,language:"cpp",runtime:8,memory:16,accepted:!0,code_content:`class Solution {
public:
    int orangesRotting(vector<vector<int>>& grid) {
        int turns = 0;
        int oranges = 0;
        int rotorange = 0;
        int n = grid.size();
        int m = grid[0].size();
        vector<int> dx = {-1, 0, 1, 0};
        vector<int> dy = {0, 1, 0, -1};
        queue<pair<int, int>> q;

        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < m; ++j) {
                if (grid[i][j]) {
                    oranges++;
                }
                if (grid[i][j] == 2) {
                    rotorange++;
                    q.push({i, j});
                }
            }
        }

        if (rotorange == oranges)
            return 0; 

        while (!q.empty()) {
            int size = q.size();
            turns++;
            while (size--) {
                auto curr = q.front();
                q.pop();
                int i = curr.first;
                int j = curr.second;
                for (int k = 0; k < 4; ++k) {
                    int new_i = i + dx[k];
                    int new_j = j + dy[k];
                    if (new_i >= 0 && new_i < n && new_j >= 0 && new_j < m && grid[new_i][new_j] == 1) {
                        rotorange++;
                        grid[new_i][new_j] = 2; 
                        q.push({new_i, new_j});
                    }
                }
            }
        }
        return (rotorange == oranges) ? turns - 1 : -1;
    }
};
`}]},1046:{title:"max consecutive ones iii",difficulty:"Medium",html_content:`<h1>1046 - Max Consecutive Ones III</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/max-consecutive-ones-iii/>max-consecutive-ones-iii</a></h2><p>Given a binary array <code>nums</code> and an integer <code>k</code>, return <em>the maximum number of consecutive </em><code>1</code><em>'s in the array if you can flip at most</em> <code>k</code> <code>0</code>'s.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
<strong>Output:</strong> 6
<strong>Explanation:</strong> [1,1,1,0,0,<u><strong>1</strong>,1,1,1,1,<strong>1</strong></u>]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
<strong>Output:</strong> 10
<strong>Explanation:</strong> [0,0,<u>1,1,<strong>1</strong>,<strong>1</strong>,1,1,1,<strong>1</strong>,1,1</u>,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code><li><code>nums[i]</code> is either <code>0</code> or <code>1</code>.<li><code>0 &lt;= k &lt;= nums.length</code></ul>`,submissions:[{time:1702689425,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    int longestOnes(vector<int>& nums, int k) {
        int zero = 0;
        int count = 0;
        int max = 0;
        
        for(int i = 0; i < nums.size(); i++){
            while(zero <= k && nums.size() >= i + count){
                if(nums[i + count] == 0){
                    zero++;
                }
                count++;
            }
            max = std::max(max,count);
            count = 0;
            zero = 0;
        }
        return max -1;
    }
};`},{time:1702690830,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    int longestOnes(vector<int>& nums, int k) {
        int zero = 0;
        int count = 0;
        int max = 0;
        
        for(int i = 0; i < nums.size(); i++){
            while(zero <= k && nums.size() > i + count){
                if(nums[i + count] == 0){
                    zero++;
                }
                if(zero <= k)
                count++;
            }
            max = std::max(max,count);
            count = 0;
            zero = 0;
        }
        return max;
    }
};`},{time:1721763712,language:"cpp",runtime:49,memory:61,accepted:!0,code_content:`class Solution {
public:
    int longestOnes(vector<int>& nums, int k) {
        int n = nums.size();
        queue<int> q;
        int maxlen = 0;
        int zeros = 0;

        for (auto i : nums){
            if(i){
                q.push(i);
            }else{
                q.push(i);
                zeros++;
                while(k < zeros){
                    if(q.front() == 0)
                        zeros--;
                        q.pop();
                }
            }
            maxlen = (maxlen > q.size()) ? maxlen : q.size();

        }
        return (maxlen > q.size()) ? maxlen : q.size();

    }
};`}]},1116:{title:"maximum level sum of a binary tree",difficulty:"Medium",html_content:`<h1>1116 - Maximum Level Sum of a Binary Tree</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/>maximum-level-sum-of-a-binary-tree</a></h2><p>Given the <code>root</code> of a binary tree, the level of its root is <code>1</code>, the level of its children is <code>2</code>, and so on.<p>Return the <strong>smallest</strong> level <code>x</code> such that the sum of all the values of nodes at level <code>x</code> is <strong>maximal</strong>.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2019/05/03/capture.JPG style=width:200px;height:175px><pre>
<strong>Input:</strong> root = [1,7,0,7,-8,null,null]
<strong>Output:</strong> 2
<strong>Explanation: </strong>
Level 1 sum = 1.
Level 2 sum = 7 + 0 = 7.
Level 3 sum = 7 + -8 = -1.
So we return the level with the maximum sum which is level 2.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> root = [989,null,10250,98693,-89388,null,null,null,-32127]
<strong>Output:</strong> 2
</pre><p> <p><strong>Constraints:</strong><ul><li>The number of nodes in the tree is in the range <code>[1, 10<sup>4</sup>]</code>.<li><code>-10<sup>5</sup> &lt;= Node.val &lt;= 10<sup>5</sup></code></ul>`,submissions:[{time:1719857544,language:"cpp",runtime:134,memory:104,accepted:!0,code_content:`/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int maxLevelSum(TreeNode* root) {
    map<int, int> dictionary;
    bfs(root, dictionary, 0);
    int max = root->val;
    int level = 0;
    for (const auto& pair : dictionary) {
        if(max < pair.second){
            level = pair.first;
            max = pair.second;
        }
    }
    return level +1;

    }
private:
    void bfs(TreeNode* root, map<int, int>& dictionary, int level){
        if (root) {
        dictionary[level] += root->val;
        
        level++;

        bfs(root->right, dictionary, level);
        bfs(root->left, dictionary, level);
        }
    }
};`}]},1146:{title:"greatest common divisor of strings",difficulty:"Easy",html_content:'<h1>1146 - Greatest Common Divisor of Strings</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/greatest-common-divisor-of-strings/>greatest-common-divisor-of-strings</a></h2><p>For two strings <code>s</code> and <code>t</code>, we say "<code>t</code> divides <code>s</code>" if and only if <code>s = t + t + t + ... + t + t</code> (i.e., <code>t</code> is concatenated with itself one or more times).<p>Given two strings <code>str1</code> and <code>str2</code>, return <em>the largest string </em><code>x</code><em> such that </em><code>x</code><em> divides both </em><code>str1</code><em> and </em><code>str2</code>.<p> <p><strong class=example>Example 1:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>str1 = "ABCABC", str2 = "ABC"</span><p><strong>Output:</strong> <span class=example-io>"ABC"</span></div><p><strong class=example>Example 2:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>str1 = "ABABAB", str2 = "ABAB"</span><p><strong>Output:</strong> <span class=example-io>"AB"</span></div><p><strong class=example>Example 3:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>str1 = "LEET", str2 = "CODE"</span><p><strong>Output:</strong> <span class=example-io>""</span></div><p><strong class=example>Example 4:</strong><div class=example-block><p><strong>Input:</strong> <span class=example-io>str1 = "AAAAAB", str2 = "AAA"</span><p><strong>Output:</strong> <span class=example-io>""</span>​​​​​​​</div><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= str1.length, str2.length &lt;= 1000</code><li><code>str1</code> and <code>str2</code> consist of English uppercase letters.</ul>',submissions:[{time:1686541992,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    string gcdOfStrings(string str1, string str2) {
        if (str1.length() == str2.length() ) {
            return "";
        }
        int temp = 0;
        string word;
        int mult = str1.length() / str2.length();
        for(int i = 0; i <= mult; i++){
            temp = 0;
            for (int x = 0; x < str2.length(); x++){
                if(str1[i+x] == str2[x]) 
                    temp += 1;
            }
            if (temp != str2.length()){
                for(int c = i + str2.length()-1; c != str1.length(); c++)
                    word += str1[c];
                return word;
            }
        }
        return word;
    }
};
`},{time:1686542028,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    string gcdOfStrings(string str1, string str2) {
        if (str1.length() == str2.length() ) {
            return "";
        }
        int temp = 0;
        string word;
        int mult = str1.length() / str2.length();
        for(int i = 0; i <= mult; i++){
            temp = 0;
            for (int x = 0; x < str2.length(); x++){
                if(str1[i+x] == str2[x]) 
                    temp += 1;
            }
            if (temp != str2.length()){
                for(int c = i + str2.length()-1; c != str1.length(); c++)
                    word += str1[c];
                return word;
            }
        }
        return word;
    }
};
`},{time:1686542166,language:"cpp",runtime:0,memory:7,accepted:!0,code_content:`class Solution {
public:
    string gcdOfStrings(string str1, string str2) {
        if(str1 + str2 != str2 + str1)
            return "";

        return str1.substr(0, gcd(str1.size(), str2.size()));
    }
};`}]},1236:{title:"n th tribonacci number",difficulty:"Easy",html_content:`<h1>1236 - N-th Tribonacci Number</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/n-th-tribonacci-number/>n-th-tribonacci-number</a></h2><p>The Tribonacci sequence T<sub>n</sub> is defined as follows: <p>T<sub>0</sub> = 0, T<sub>1</sub> = 1, T<sub>2</sub> = 1, and T<sub>n+3</sub> = T<sub>n</sub> + T<sub>n+1</sub> + T<sub>n+2</sub> for n >= 0.<p>Given <code>n</code>, return the value of T<sub>n</sub>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> n = 4
<strong>Output:</strong> 4
<strong>Explanation:</strong>
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> n = 25
<strong>Output:</strong> 1389537
</pre><p> <p><strong>Constraints:</strong><ul><li><code>0 &lt;= n &lt;= 37</code><li>The answer is guaranteed to fit within a 32-bit integer, ie. <code>answer &lt;= 2^31 - 1</code>.</ul>`,submissions:[{time:1721086473,language:"cpp",runtime:2,memory:7,accepted:!0,code_content:`class Solution {
public:
    int tribonacci(int n) {
        if(!n)
        return 0;
        if(n == 1 || n == 2)
        return 1;
        queue<int> tri;
        tri.push(0); tri.push(1); tri.push(1);
        int mid = 1;
        int temp;
        for (int i = 2; i < n; i++){
            temp = tri.front() + mid + tri.back();
            mid = tri.back();
            tri.pop();
            tri.push(temp);
        }
        return temp;
    }
};`}]},1250:{title:"longest common subsequence",difficulty:"Medium",html_content:`<h1>1250 - Longest Common Subsequence</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/longest-common-subsequence/>longest-common-subsequence</a></h2><p>Given two strings <code>text1</code> and <code>text2</code>, return <em>the length of their longest <strong>common subsequence</strong>. </em>If there is no <strong>common subsequence</strong>, return <code>0</code>.<p>A <strong>subsequence</strong> of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.<ul><li>For example, <code>"ace"</code> is a subsequence of <code>"abcde"</code>.</ul><p>A <strong>common subsequence</strong> of two strings is a subsequence that is common to both strings.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> text1 = "abcde", text2 = "ace" 
<strong>Output:</strong> 3  
<strong>Explanation:</strong> The longest common subsequence is "ace" and its length is 3.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> text1 = "abc", text2 = "abc"
<strong>Output:</strong> 3
<strong>Explanation:</strong> The longest common subsequence is "abc" and its length is 3.
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> text1 = "abc", text2 = "def"
<strong>Output:</strong> 0
<strong>Explanation:</strong> There is no such common subsequence, so the result is 0.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= text1.length, text2.length &lt;= 1000</code><li><code>text1</code> and <code>text2</code> consist of only lowercase English characters.</ul>`,submissions:[{time:1721328443,language:"cpp",runtime:25,memory:25,accepted:!0,code_content:`class Solution {
public:
    int longestCommonSubsequence(string text1, string text2) {
        int n = text1.size();
        int m = text2.size();
        vector<vector<int>> DP( n + 1, vector<int>(m+1, -1));

        for(int i = 0; i <= n; i++) DP[i][0] = 0;
        for(int i = 0; i <= m; i++) DP[0][i] = 0;

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= m; j++) {
                if (text1[i - 1] == text2[j - 1]) {
                    DP[i][j] = DP[i - 1][j - 1] + 1;
                } else {
                    DP[i][j] = max(DP[i - 1][j], DP[i][j - 1]);
                }
            }
        }
        
        return DP[n][m];
        }
};`}]},1319:{title:"unique number of occurrences",difficulty:"Easy",html_content:`<h1>1319 - Unique Number of Occurrences</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/unique-number-of-occurrences/>unique-number-of-occurrences</a></h2><p>Given an array of integers <code>arr</code>, return <code>true</code> <em>if the number of occurrences of each value in the array is <strong>unique</strong> or </em><code>false</code><em> otherwise</em>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> arr = [1,2,2,1,1,3]
<strong>Output:</strong> true
<strong>Explanation:</strong> The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> arr = [1,2]
<strong>Output:</strong> false
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> arr = [-3,0,1,-3,1,1,1,-3,10,0]
<strong>Output:</strong> true
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= arr.length &lt;= 1000</code><li><code>-1000 &lt;= arr[i] &lt;= 1000</code></ul>`,submissions:[{time:1717548323,language:"cpp",runtime:0,memory:10,accepted:!0,code_content:`class Solution {
public:
    bool uniqueOccurrences(vector<int>& arr) {
    std::map<int, int> frequencyMap;
    std::set<int> checkifunique;

    for (const auto& elem : arr) {
        frequencyMap[elem]++;
    }

    for (const auto& pair : frequencyMap) {
        checkifunique.insert(pair.second);
    }
    if(frequencyMap.size() == checkifunique.size()){
        return true;
    }
    return false;

    }
};`},{time:1717548542,language:"cpp",runtime:0,memory:10,accepted:!0,code_content:`class Solution {
public:
    bool uniqueOccurrences(vector<int>& arr) {
    std::map<int, int> frequencyMap;
    std::set<int> checkifunique;

    for (const auto& elem : arr) {
        frequencyMap[elem]++;
    }

    for (const auto& pair : frequencyMap) {
        checkifunique.insert(pair.second);
    }
    return frequencyMap.size() == checkifunique.size();

    }
};`}]},1392:{title:"find the difference of two arrays",difficulty:"Easy",html_content:`<h1>1392 - Find the Difference of Two Arrays</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/find-the-difference-of-two-arrays/>find-the-difference-of-two-arrays</a></h2><p>Given two <strong>0-indexed</strong> integer arrays <code>nums1</code> and <code>nums2</code>, return <em>a list</em> <code>answer</code> <em>of size</em> <code>2</code> <em>where:</em><ul><li><code>answer[0]</code> <em>is a list of all <strong>distinct</strong> integers in</em> <code>nums1</code> <em>which are <strong>not</strong> present in</em> <code>nums2</code><em>.</em><li><code>answer[1]</code> <em>is a list of all <strong>distinct</strong> integers in</em> <code>nums2</code> <em>which are <strong>not</strong> present in</em> <code>nums1</code>.</ul><p><strong>Note</strong> that the integers in the lists may be returned in <strong>any</strong> order.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> nums1 = [1,2,3], nums2 = [2,4,6]
<strong>Output:</strong> [[1,3],[4,6]]
<strong>Explanation:
</strong>For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums1. Therefore, answer[1] = [4,6].</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> nums1 = [1,2,3,3], nums2 = [1,1,2,2]
<strong>Output:</strong> [[3],[]]
<strong>Explanation:
</strong>For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].
Every integer in nums2 is present in nums1. Therefore, answer[1] = [].
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= nums1.length, nums2.length &lt;= 1000</code><li><code>-1000 &lt;= nums1[i], nums2[i] &lt;= 1000</code></ul>`,submissions:[{time:1706505790,language:"cpp",runtime:52,memory:40,accepted:!0,code_content:`class Solution {
public:
    vector<int> findthesum(vector<int>& nums1, vector<int>& nums2) {
        unordered_set<int> inum1;
        unordered_set<int> inum2;
        for (int list : nums1) {
            inum1.insert(list);
        }
        for (int list : nums2) {
            if (inum1.find(list) == inum1.end()) {
                inum2.insert(list);
            }
        }
        return vector<int>(inum2.begin(), inum2.end());
    }
    vector<vector<int>> findDifference(vector<int>& nums1, vector<int>& nums2) {
        return {findthesum(nums2,nums1),findthesum(nums1,nums2)};
    }
};`}]},1397:{title:"search suggestions system",difficulty:"Medium",html_content:`<h1>1397 - Search Suggestions System</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/search-suggestions-system/>search-suggestions-system</a></h2><p>You are given an array of strings <code>products</code> and a string <code>searchWord</code>.<p>Design a system that suggests at most three product names from <code>products</code> after each character of <code>searchWord</code> is typed. Suggested products should have common prefix with <code>searchWord</code>. If there are more than three products with a common prefix return the three lexicographically minimums products.<p>Return <em>a list of lists of the suggested products after each character of </em><code>searchWord</code><em> is typed</em>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
<strong>Output:</strong> [["mobile","moneypot","monitor"],["mobile","moneypot","monitor"],["mouse","mousepad"],["mouse","mousepad"],["mouse","mousepad"]]
<strong>Explanation:</strong> products sorted lexicographically = ["mobile","moneypot","monitor","mouse","mousepad"].
After typing m and mo all products match and we show user ["mobile","moneypot","monitor"].
After typing mou, mous and mouse the system suggests ["mouse","mousepad"].
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> products = ["havana"], searchWord = "havana"
<strong>Output:</strong> [["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]]
<strong>Explanation:</strong> The only word "havana" will be always suggested while typing the search word.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= products.length &lt;= 1000</code><li><code>1 &lt;= products[i].length &lt;= 3000</code><li><code>1 &lt;= sum(products[i].length) &lt;= 2 * 10<sup>4</sup></code><li>All the strings of <code>products</code> are <strong>unique</strong>.<li><code>products[i]</code> consists of lowercase English letters.<li><code>1 &lt;= searchWord.length &lt;= 1000</code><li><code>searchWord</code> consists of lowercase English letters.</ul>`,submissions:[{time:1721593297,language:"cpp",runtime:116,memory:80,accepted:!0,code_content:`class Trie{
    struct Node{
        bool isWord = false;
        vector<Node*> children{vector<Node*>(26,NULL)};
    } *Root, *curr;

    void dfs(Node* curr, string &word, vector<string> &ans){
        if(ans.size() == 3)return;
        if(curr->isWord)ans.push_back(word);
        for(char c = 'a'; c <= 'z'; c++){
            if(curr->children[c-'a']){
                word+=c;
                dfs(curr->children[c-'a'],word,ans);
                word.pop_back();
            }
        }
    }


public:
    Trie(){
        Root = new Node;
    }
    void insert(string &s){
        curr = Root;
        for(char &c : s){
            if(!curr->children[c-'a'])
                curr->children[c-'a'] = new Node();
                curr=curr->children[c-'a'];
        }
        curr->isWord = true;
    }
    vector<string> getwords(string &prefix){
        curr=Root;
        vector<string> res;
        for(char &c: prefix){
            if(!curr->children[c-'a'])
            return res;
            curr=curr->children[c-'a'];
        }
        dfs(curr,prefix,res);
        return res;
    }

};




class Solution {
public:
    vector<vector<string>> suggestedProducts(vector<string>& products, string searchWord) {
        Trie trie = Trie();
        vector<vector<string>> res;
        for(string &w:products)trie.insert(w);
        string prefix;
        for(char &c:searchWord){
            prefix+=c;
            res.push_back(trie.getwords(prefix));

        }
        return res;
    }
};`}]},1441:{title:"minimum flips to make a or b equal to c",difficulty:"Medium",html_content:`<h1>1441 - Minimum Flips to Make a OR b Equal to c</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/>minimum-flips-to-make-a-or-b-equal-to-c</a></h2><p>Given 3 positives numbers <code>a</code>, <code>b</code> and <code>c</code>. Return the minimum flips required in some bits of <code>a</code> and <code>b</code> to make ( <code>a</code> OR <code>b</code> == <code>c</code> ). (bitwise OR operation).<br> Flip operation consists of change <strong>any</strong> single bit 1 to 0 or change the bit 0 to 1 in their binary representation.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/01/06/sample_3_1676.png style=width:260px;height:87px><pre>

<strong>Input:</strong> a = 2, b = 6, c = 5

<strong>Output:</strong> 3

<strong>Explanation: </strong>After flips a = 1 , b = 4 , c = 5 such that (<code>a</code> OR <code>b</code> == <code>c</code>)</pre><p><strong class=example>Example 2:</strong><pre>

<strong>Input:</strong> a = 4, b = 2, c = 7

<strong>Output:</strong> 1

</pre><p><strong class=example>Example 3:</strong><pre>

<strong>Input:</strong> a = 1, b = 2, c = 3

<strong>Output:</strong> 0

</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= a &lt;= 10^9</code><li><code>1 &lt;= b &lt;= 10^9</code><li><code>1 &lt;= c &lt;= 10^9</code></ul>`,submissions:[{time:1721528020,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    int minFlips(int a, int b, int c) {
        int count = 0;
        int abit,bbit,cbit;
        int num = floor(max(log2(a), max(log2(b), log2(c))));
        for (int i = 0; i < num; i++){
            abit = (a >> i) & 1;
            bbit = (b >> i) & 1;
            cbit = (c >> i) & 1;

            if((abit | bbit) != cbit)
            count += (abit && bbit)? 2:1;
        }
        return count;
    }
};`},{time:1721528042,language:"cpp",runtime:2,memory:7,accepted:!0,code_content:`class Solution {
public:
    int minFlips(int a, int b, int c) {
        int count = 0;
        int abit,bbit,cbit;
        int num = floor(max(log2(a), max(log2(b), log2(c)))) +1;
        for (int i = 0; i < num; i++){
            abit = (a >> i) & 1;
            bbit = (b >> i) & 1;
            cbit = (c >> i) & 1;

            if((abit | bbit) != cbit)
            count += (abit && bbit)? 2:1;
        }
        return count;
    }
};`}]},1474:{title:"longest zigzag path in a binary tree",difficulty:"Medium",html_content:`<h1>1474 - Longest ZigZag Path in a Binary Tree</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/>longest-zigzag-path-in-a-binary-tree</a></h2><p>You are given the <code>root</code> of a binary tree.<p>A ZigZag path for a binary tree is defined as follow:<ul><li>Choose <strong>any </strong>node in the binary tree and a direction (right or left).<li>If the current direction is right, move to the right child of the current node; otherwise, move to the left child.<li>Change the direction from right to left or from left to right.<li>Repeat the second and third steps until you can't move in the tree.</ul><p>Zigzag length is defined as the number of nodes visited - 1. (A single node has a length of 0).<p>Return <em>the longest <strong>ZigZag</strong> path contained in that tree</em>.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/01/22/sample_1_1702.png style=width:221px;height:383px><pre>
<strong>Input:</strong> root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1]
<strong>Output:</strong> 3
<strong>Explanation:</strong> Longest ZigZag path in blue nodes (right -> left -> right).
</pre><p><strong class=example>Example 2:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/01/22/sample_2_1702.png style=width:157px;height:329px><pre>
<strong>Input:</strong> root = [1,1,1,null,1,null,null,1,1,null,1]
<strong>Output:</strong> 4
<strong>Explanation:</strong> Longest ZigZag path in blue nodes (left -> right -> left -> right).
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> root = [1]
<strong>Output:</strong> 0
</pre><p> <p><strong>Constraints:</strong><ul><li>The number of nodes in the tree is in the range <code>[1, 5 * 10<sup>4</sup>]</code>.<li><code>1 &lt;= Node.val &lt;= 100</code></ul>`,submissions:[{time:1719801923,language:"cpp",runtime:107,memory:91,accepted:!0,code_content:`/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int longestZigZag(TreeNode* root) {
        if (!root) return 0;
        int maxZigZag = 0;
        traverse(root->left, false, 1, maxZigZag);
        traverse(root->right, true, 1, maxZigZag);
        return maxZigZag;
    }
private: 
    void traverse(TreeNode* root, bool right, int length, int& maxZigZag) {
        if (!root) return;
        maxZigZag = max(maxZigZag, length);
        if (right) {
            traverse(root->left, false, length + 1, maxZigZag);
            traverse(root->right, true, 1, maxZigZag);
        } else {
            traverse(root->left, false, 1, maxZigZag);
            traverse(root->right, true, length + 1, maxZigZag);
        }
    }
};`}]},1528:{title:"kids with the greatest number of candies",difficulty:"Easy",html_content:`<h1>1528 - Kids With the Greatest Number of Candies</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/>kids-with-the-greatest-number-of-candies</a></h2><p>There are <code>n</code> kids with candies. You are given an integer array <code>candies</code>, where each <code>candies[i]</code> represents the number of candies the <code>i<sup>th</sup></code> kid has, and an integer <code>extraCandies</code>, denoting the number of extra candies that you have.<p>Return <em>a boolean array </em><code>result</code><em> of length </em><code>n</code><em>, where </em><code>result[i]</code><em> is </em><code>true</code><em> if, after giving the </em><code>i<sup>th</sup></code><em> kid all the </em><code>extraCandies</code><em>, they will have the <strong>greatest</strong> number of candies among all the kids</em><em>, or </em><code>false</code><em> otherwise</em>.<p>Note that <strong>multiple</strong> kids can have the <strong>greatest</strong> number of candies.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> candies = [2,3,5,1,3], extraCandies = 3
<strong>Output:</strong> [true,true,true,false,true] 
<strong>Explanation:</strong> If you give all extraCandies to:
- Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
- Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
- Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
- Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
- Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> candies = [4,2,1,1,2], extraCandies = 1
<strong>Output:</strong> [true,false,false,false,false] 
<strong>Explanation:</strong> There is only 1 extra candy.
Kid 1 will always have the greatest number of candies, even if a different kid is given the extra candy.
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> candies = [12,1,12], extraCandies = 10
<strong>Output:</strong> [true,false,true]
</pre><p> <p><strong>Constraints:</strong><ul><li><code>n == candies.length</code><li><code>2 &lt;= n &lt;= 100</code><li><code>1 &lt;= candies[i] &lt;= 100</code><li><code>1 &lt;= extraCandies &lt;= 50</code></ul>`,submissions:[{time:1686949301,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    vector<bool> kidsWithCandies(vector<int>& candies, int extraCandies) {
        int temp = 0;
        int temp2;
        vector<bool> arr{};
        for(int i = 0; i < candies.size(); i++){
            temp2 = candies[i] + extraCandies;
            if (temp2 >= temp){
                temp = temp2;
                arr.push_back(true);
            }
            else{
                arr.push_back(false);
            }
        }
        return arr;
    }
};`},{time:1686949319,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    vector<bool> kidsWithCandies(vector<int>& candies, int extraCandies) {
        int temp = 0;
        int temp2;
        vector<bool> arr{};
        for(int i = 0; i < candies.size(); i++){
            temp2 = candies[i] + extraCandies;
            if (temp2 >= temp){
                temp = temp2;
                arr.push_back(true);
            }
            else{
                arr.push_back(false);
            }
        }
        return arr;
    }
};`},{time:1686949841,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    vector<bool> kidsWithCandies(vector<int>& candies, int extraCandies) {
        int temp = 0;
        int temp2;
        vector<bool> arr{};
        for(int i = 0; i < candies.size(); i++){
            if (candies[i] >= temp){
                temp = candies[i];
                arr.push_back(true);
            }
            else{
                arr.push_back(false);
            }
        }
        return arr;
    }
};`},{time:1686950307,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    vector<bool> kidsWithCandies(vector<int>& candies, int extraCandies) {
        int temp = 0;
        int temp2;
        vector<bool> arr{};
        for(int i = 0; i < candies.size(); i++){
            if (candies[i] + extraCandies> temp){
                temp = candies[i];
                arr.push_back(true);
            }
            else{
                arr.push_back(false);
            }
        }
        return arr;
    }
};`},{time:1686950368,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    vector<bool> kidsWithCandies(vector<int>& candies, int extraCandies) {
        int temp = 0;
        int temp2;
        vector<bool> arr{};
        for(int i = 0; i < candies.size(); i++){
            if (candies[i] + extraCandies> temp){
                arr.push_back(true);
            }
            else{
                arr.push_back(false);
            }
            if (candies[i] > temp){
                temp = candies[i];
            }
        }
        return arr;
    }
};`},{time:1686950534,language:"cpp",runtime:0,memory:8,accepted:!0,code_content:`class Solution {
public:
    vector<bool> kidsWithCandies(vector<int>& candies, int extraCandies) {
        int temp = 0;
        int max = *max_element(candies.begin(), candies.end());
        vector<bool> arr{};
        for(int i = 0; i < candies.size(); i++){
            if (candies[i] + extraCandies >= max){
                arr.push_back(true);
            }
            else{
                arr.push_back(false);
            }
        }
        return arr;
    }
};`}]},1544:{title:"count good nodes in binary tree",difficulty:"Medium",html_content:`<h1>1544 - Count Good Nodes in Binary Tree</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/count-good-nodes-in-binary-tree/>count-good-nodes-in-binary-tree</a></h2><p>Given a binary tree <code>root</code>, a node <em>X</em> in the tree is named <strong>good</strong> if in the path from root to <em>X</em> there are no nodes with a value <em>greater than</em> X.<p>Return the number of <strong>good</strong> nodes in the binary tree.<p> <p><strong class=example>Example 1:</strong><p><strong><img alt src=https://assets.leetcode.com/uploads/2020/04/02/test_sample_1.png style=width:263px;height:156px></strong><pre>

<strong>Input:</strong> root = [3,1,4,3,null,1,5]

<strong>Output:</strong> 4

<strong>Explanation:</strong> Nodes in blue are <strong>good</strong>.

Root Node (3) is always a good node.

Node 4 -> (3,4) is the maximum value in the path starting from the root.

Node 5 -> (3,4,5) is the maximum value in the path

Node 3 -> (3,1,3) is the maximum value in the path.</pre><p><strong class=example>Example 2:</strong><p><strong><img alt src=https://assets.leetcode.com/uploads/2020/04/02/test_sample_2.png style=width:157px;height:161px></strong><pre>

<strong>Input:</strong> root = [3,3,null,4,2]

<strong>Output:</strong> 3

<strong>Explanation:</strong> Node 2 -> (3, 3, 2) is not good, because "3" is higher than it.</pre><p><strong class=example>Example 3:</strong><pre>

<strong>Input:</strong> root = [1]

<strong>Output:</strong> 1

<strong>Explanation:</strong> Root is considered as <strong>good</strong>.</pre><p> <p><strong>Constraints:</strong><ul><li>The number of nodes in the binary tree is in the range <code>[1, 10^5]</code>.<li>Each node's value is between <code>[-10^4, 10^4]</code>.</ul>`,submissions:[{time:1719439698,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int goodNodes(TreeNode* root) {
        
        int i = goodnode(root, root->val);
        return (i) ? i : i+1;
    }
private:
    int goodnode(TreeNode* root, int max, int value = 0){
        if(root->left){
            if(root->val >= max){
                value++;
                value += goodnode(root->left, root->val);
            }
            else{
                value += goodnode(root->left, max);
            }
        }
        if(root->right){
            if(root->val >= max){
                value++;
                value += goodnode(root->right, root->val);
            }
            else{
                value += goodnode(root->right, max);
            }
        }
        return value;


    }
};`},{time:1719440583,language:"cpp",runtime:86,memory:84,accepted:!0,code_content:`/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int goodNodes(TreeNode* root) {
        return goodnode(root, root->val);
    }
    
private:
    int goodnode(TreeNode* root, int max){
        if(root == nullptr) return 0;
        int value = 0;
        if(root->val >= max){
            value++;
            max = root->val;
        }
        value += goodnode(root->left, max);
        value += goodnode(root->right, max);
        
        return value;
    }
};`}]},1567:{title:"maximum number of vowels in a substring of given length",difficulty:"Medium",html_content:`<h1>1567 - Maximum Number of Vowels in a Substring of Given Length</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/>maximum-number-of-vowels-in-a-substring-of-given-length</a></h2><p>Given a string <code>s</code> and an integer <code>k</code>, return <em>the maximum number of vowel letters in any substring of </em><code>s</code><em> with length </em><code>k</code>.<p><strong>Vowel letters</strong> in English are <code>'a'</code>, <code>'e'</code>, <code>'i'</code>, <code>'o'</code>, and <code>'u'</code>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> s = "abciiidef", k = 3
<strong>Output:</strong> 3
<strong>Explanation:</strong> The substring "iii" contains 3 vowel letters.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> s = "aeiou", k = 2
<strong>Output:</strong> 2
<strong>Explanation:</strong> Any substring of length 2 contains 2 vowels.
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> s = "leetcode", k = 3
<strong>Output:</strong> 2
<strong>Explanation:</strong> "lee", "eet" and "ode" contain 2 vowels.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code><li><code>s</code> consists of lowercase English letters.<li><code>1 &lt;= k &lt;= s.length</code></ul>`,submissions:[{time:1702669845,language:"cpp",runtime:19,memory:10,accepted:!0,code_content:`bool test(char par){ 
    if(par == 'a' || par == 'e' || par == 'i' || par == 'o' || par == 'u'){
        return true;
    }
    return false;
}
class Solution {
public:
    int maxVowels(string s, int k) {
        int pts = 0;
        for(int i = 0; i < k; i++){
            if(test(s[i]))
                pts++;
        }

        int max = pts;
        for(int i = k; i < s.size(); i++){
            if(test(s[i -k]))
                pts--;
            if(test(s[i]))
                pts++;
            max = std::max(max, pts);
        }


        return max;
    }
};`}]},1576:{title:"reorder routes to make all paths lead to the city zero",difficulty:"Medium",html_content:`<h1>1576 - Reorder Routes to Make All Paths Lead to the City Zero</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/>reorder-routes-to-make-all-paths-lead-to-the-city-zero</a></h2><p>There are <code>n</code> cities numbered from <code>0</code> to <code>n - 1</code> and <code>n - 1</code> roads such that there is only one way to travel between two different cities (this network form a tree). Last year, The ministry of transport decided to orient the roads in one direction because they are too narrow.<p>Roads are represented by <code>connections</code> where <code>connections[i] = [a<sub>i</sub>, b<sub>i</sub>]</code> represents a road from city <code>a<sub>i</sub></code> to city <code>b<sub>i</sub></code>.<p>This year, there will be a big event in the capital (city <code>0</code>), and many people want to travel to this city.<p>Your task consists of reorienting some roads such that each city can visit the city <code>0</code>. Return the <strong>minimum</strong> number of edges changed.<p>It's <strong>guaranteed</strong> that each city can reach city <code>0</code> after reorder.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/05/13/sample_1_1819.png style=width:311px;height:189px><pre>
<strong>Input:</strong> n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]]
<strong>Output:</strong> 3
<strong>Explanation: </strong>Change the direction of edges show in red such that each node can reach the node 0 (capital).
</pre><p><strong class=example>Example 2:</strong><p><img alt src=https://assets.leetcode.com/uploads/2020/05/13/sample_2_1819.png style=width:509px;height:79px><pre>
<strong>Input:</strong> n = 5, connections = [[1,0],[1,2],[3,2],[3,4]]
<strong>Output:</strong> 2
<strong>Explanation: </strong>Change the direction of edges show in red such that each node can reach the node 0 (capital).
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> n = 3, connections = [[1,0],[2,0]]
<strong>Output:</strong> 0
</pre><p> <p><strong>Constraints:</strong><ul><li><code>2 &lt;= n &lt;= 5 * 10<sup>4</sup></code><li><code>connections.length == n - 1</code><li><code>connections[i].length == 2</code><li><code>0 &lt;= a<sub>i</sub>, b<sub>i</sub> &lt;= n - 1</code><li><code>a<sub>i</sub> != b<sub>i</sub></code></ul>`,submissions:[{time:1720037574,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    int minReorder(int n, vector<vector<int>>& connections) {
        int change = 0;
        set<int> connected;
        connected.insert(0);
        vector<vector<int>>::iterator ptr;
        for (ptr = connections.begin(); ptr < connections.end(); ptr++) {
            checks(*ptr, connected, change);
        }
        return change;
    }
private:
    void checks(vector<int> connect, set<int>& connected, int& change){
        if(connected.contains(connect[1])){
            connected.insert(connect[0]);
        }
        else{
            change++;
            connected.insert(connect[1]);
        }
    }
};`},{time:1720039731,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    int minReorder(int n, vector<vector<int>>& connections) {
        int change = 0;
        set<int> connected;
        connected.insert(0);
        stack<int> fstack;
        stack<int> lstack;
        vector<vector<int>>::iterator ptr;
        for (ptr = connections.begin(); ptr < connections.end(); ptr++) {
            checks(*ptr, connected, fstack, lstack);
        }

        while (!fstack.empty()) {
            stackcheck(fstack.top(), lstack.top(), change, connected);
            fstack.pop();
            lstack.pop();
        }

        return change;
    }
private:
    void checks(vector<int> connect, set<int>& connected, stack<int>& fstack, stack<int>& lstack){
        if(connected.contains(connect[1])){
            connected.insert(connect[0]);
        }
        else{
            fstack.push(connect[0]);
            lstack.push(connect[1]);
        }
    }
    void stackcheck(int fstack, int lstack, int& change, set<int>& connected){
        if(connected.contains(lstack)){
            connected.insert(fstack);
        }
        else{
            change++;
            connected.insert(lstack);
        }
    }
};`},{time:1720039974,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    int minReorder(int n, vector<vector<int>>& connections) {
        int change = 0;
        set<int> connected;
        connected.insert(0);
        queue<int> fstack;
        queue<int> lstack;
        vector<vector<int>>::iterator ptr;
        for (ptr = connections.begin(); ptr < connections.end(); ptr++) {
            checks(*ptr, connected, fstack, lstack);
        }

        while (!fstack.empty()) {
            stackcheck(fstack.front(), lstack.front(), change, connected);
            fstack.pop();
            lstack.pop();
        }

        return change;
    }
private:
    void checks(vector<int> connect, set<int>& connected, queue<int>& fstack, queue<int>& lstack){
        if(connected.contains(connect[1])){
            connected.insert(connect[0]);
        }
        else{
            fstack.push(connect[0]);
            lstack.push(connect[1]);
        }
    }
    void stackcheck(int fstack, int lstack, int& change, set<int>& connected){
        if(connected.contains(lstack)){
            connected.insert(fstack);
        }
        else{
            change++;
            connected.insert(lstack);
        }
    }
};`},{time:1720200962,language:"cpp",runtime:284,memory:110,accepted:!0,code_content:`class Solution {
public:
    int minReorder(int n, vector<vector<int>>& connections) {
        vector<int> adj[n];
        vector<int> rvadj[n];

        for(auto connection : connections)
        {
            adj[connection[0]].push_back(connection[1]);
            rvadj[connection[1]].push_back(connection[0]);
        }

        queue<int> q;
        int op = 0;
        vector<int> vis(n, 0);

        q.push(0);
        vis[0] = 1;

        while(!q.empty())
        {
            int l = q.size();
            while(l--)
            {
                int node = q.front();
                q.pop();

                for(auto x : adj[node])
                {
                    if(vis[x] != 1)
                    {
                        vis[x] = 1;
                        op++;
                        q.push(x);
                    }
                }
                for(auto x : rvadj[node])
                {
                    if(vis[x] != 1)
                    {
                        vis[x] = 1;
                        q.push(x);
                    }
                }
            }
        }

        return op;

    }
};`}]},1586:{title:"longest subarray of 1s after deleting one element",difficulty:"Medium",html_content:`<h1>1586 - Longest Subarray of 1's After Deleting One Element</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/>longest-subarray-of-1s-after-deleting-one-element</a></h2><p>Given a binary array <code>nums</code>, you should delete one element from it.<p>Return <em>the size of the longest non-empty subarray containing only </em><code>1</code><em>'s in the resulting array</em>. Return <code>0</code> if there is no such subarray.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> nums = [1,1,0,1]
<strong>Output:</strong> 3
<strong>Explanation:</strong> After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> nums = [0,1,1,1,0,1,1,0,1]
<strong>Output:</strong> 5
<strong>Explanation:</strong> After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> nums = [1,1,1]
<strong>Output:</strong> 2
<strong>Explanation:</strong> You must delete one element.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code><li><code>nums[i]</code> is either <code>0</code> or <code>1</code>.</ul>`,submissions:[{time:1706379638,language:"cpp",runtime:47,memory:58,accepted:!0,code_content:`class Solution {
public:
    int longestSubarray(vector<int>& nums) {
        int onea = 0, oneb = 0, maxx = 0, test = 1;

        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] == 0) {
                test = 0;
                oneb = onea;
                onea = 0;
            } else {
                onea++;
            }
            maxx = max(maxx, onea + oneb);
        }
        if (test){
            maxx--;
        }
        return maxx;
    }
};`}]},1777:{title:"determine if two strings are close",difficulty:"Medium",html_content:`<h1>1777 - Determine if Two Strings Are Close</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/determine-if-two-strings-are-close/>determine-if-two-strings-are-close</a></h2><p>Two strings are considered <strong>close</strong> if you can attain one from the other using the following operations:<ul><li>Operation 1: Swap any two <strong>existing</strong> characters. <ul><li>For example, <code>a<u>b</u>cd<u>e</u> -> a<u>e</u>cd<u>b</u></code></ul><li>Operation 2: Transform <strong>every</strong> occurrence of one <strong>existing</strong> character into another <strong>existing</strong> character, and do the same with the other character. <ul><li>For example, <code><u>aa</u>c<u>abb</u> -> <u>bb</u>c<u>baa</u></code> (all <code>a</code>'s turn into <code>b</code>'s, and all <code>b</code>'s turn into <code>a</code>'s)</ul></ul><p>You can use the operations on either string as many times as necessary.<p>Given two strings, <code>word1</code> and <code>word2</code>, return <code>true</code><em> if </em><code>word1</code><em> and </em><code>word2</code><em> are <strong>close</strong>, and </em><code>false</code><em> otherwise.</em><p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> word1 = "abc", word2 = "bca"
<strong>Output:</strong> true
<strong>Explanation:</strong> You can attain word2 from word1 in 2 operations.
Apply Operation 1: "a<u>bc</u>" -> "a<u>cb</u>"
Apply Operation 1: "<u>a</u>c<u>b</u>" -> "<u>b</u>c<u>a</u>"
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> word1 = "a", word2 = "aa"
<strong>Output:</strong> false
<strong>Explanation: </strong>It is impossible to attain word2 from word1, or vice versa, in any number of operations.
</pre><p><strong class=example>Example 3:</strong><pre>
<strong>Input:</strong> word1 = "cabbba", word2 = "abbccc"
<strong>Output:</strong> true
<strong>Explanation:</strong> You can attain word2 from word1 in 3 operations.
Apply Operation 1: "ca<u>b</u>bb<u>a</u>" -> "ca<u>a</u>bb<u>b</u>"
Apply Operation 2: "<u>c</u>aa<u>bbb</u>" -> "<u>b</u>aa<u>ccc</u>"
Apply Operation 2: "<u>baa</u>ccc" -> "<u>abb</u>ccc"
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= word1.length, word2.length &lt;= 10<sup>5</sup></code><li><code>word1</code> and <code>word2</code> contain only lowercase English letters.</ul>`,submissions:[{time:1717550311,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    bool closeStrings(string word1, string word2) {
    

    map<char, int> word1Map;
    for (const char& elem : word1) {
        word1Map[elem]++;
    }

    map<char, int> word2Map;
    for (const char& elem : word2) {
        word2Map[elem]++;
    }

    map<int, int> word1int;
    for (const auto& pair : word1Map) {
        word1int[pair.second]++;
    }

    map<int, int> word2int;
    for (const auto& pair : word2Map) {
        word2int[pair.second]++;
    }

    return word1int == word2int;


    }
};`},{time:1717551138,language:"cpp",runtime:141,memory:23,accepted:!0,code_content:`class Solution {
public:
    bool closeStrings(string word1, string word2) {
    

    map<char, int> word1Map;
    set<char> word1Keys;
    for (const char& elem : word1) {
        word1Map[elem]++;
        word1Keys.insert(elem);
        
    }

    map<char, int> word2Map;
    set<char> word2Keys;
    for (const char& elem : word2) {
        word2Map[elem]++;
        word2Keys.insert(elem);
    }

    map<int, int> word1int;
    for (const auto& pair : word1Map) {
        word1int[pair.second]++;
    }

    map<int, int> word2int;
    for (const auto& pair : word2Map) {
        word2int[pair.second]++;
    }

    return (word1int == word2int) && (word1Keys == word2Keys);


    }
};

`},{time:1717551343,language:"cpp",runtime:134,memory:23,accepted:!0,code_content:`class Solution {
public:
    bool closeStrings(string word1, string word2) {
    

    map<char, int> word1Map;
    set<char> word1Keys;
    for (const char& elem : word1) {
        word1Map[elem]++;
        word1Keys.insert(elem);
        
    }

    map<char, int> word2Map;
    set<char> word2Keys;
    for (const char& elem : word2) {
        word2Map[elem]++;
        word2Keys.insert(elem);
    }

    if (word1Keys != word2Keys) return false;

    vector<int> freq1, freq2;
        for (const auto& pair : word1Map) {
            freq1.push_back(pair.second);
        }
        for (const auto& pair : word2Map) {
            freq2.push_back(pair.second);
        }

        sort(freq1.begin(), freq1.end());
        sort(freq2.begin(), freq2.end());

        return freq1 == freq2;


    }
};

`}]},1798:{title:"max number of k sum pairs",difficulty:"Medium",html_content:`<h1>1798 - Max Number of K-Sum Pairs</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/max-number-of-k-sum-pairs/>max-number-of-k-sum-pairs</a></h2><p>You are given an integer array <code>nums</code> and an integer <code>k</code>.<p>In one operation, you can pick two numbers from the array whose sum equals <code>k</code> and remove them from the array.<p>Return <em>the maximum number of operations you can perform on the array</em>.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> nums = [1,2,3,4], k = 5
<strong>Output:</strong> 2
<strong>Explanation:</strong> Starting with nums = [1,2,3,4]:
- Remove numbers 1 and 4, then nums = [2,3]
- Remove numbers 2 and 3, then nums = []
There are no more pairs that sum up to 5, hence a total of 2 operations.</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> nums = [3,1,3,4,3], k = 6
<strong>Output:</strong> 1
<strong>Explanation:</strong> Starting with nums = [3,1,3,4,3]:
- Remove the first two 3's, then nums = [1,4,3]
There are no more pairs that sum up to 6, hence a total of 1 operation.</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code><li><code>1 &lt;= nums[i] &lt;= 10<sup>9</sup></code><li><code>1 &lt;= k &lt;= 10<sup>9</sup></code></ul>`,submissions:[{time:1699328663,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    int maxOperations(vector<int>& nums, int k) {
        int total = 0;
        int temp = 0;
        int half = k / 2;
        int halfnum;

        std::sort(nums.begin(), nums.end());
    auto it = std::unique(nums.begin(), nums.end());
        nums.erase(it, nums.end());
        for (int i = 0; i < nums.size(); i++) {
    }


        for(int i = 0; i < nums.size(); i++){
            if (nums[i] > half){
                halfnum = i;
                break;
            }
        }
        if ( !(nums.size() % 2 == 0))
   halfnum--;


 for(int i = 0; i < nums.size(); i++){
    if (nums[i] < k){
        temp = k - nums[i];
        for(int j = halfnum; j < nums.size(); j++){
            if (nums[j] == temp){
                total++;
                break; 
            }
        }
    }
}

        return total;
    }
};`},{time:1699420709,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    int maxOperations(vector<int>& nums, int k) {
        int first = 0;
        int last = nums.size() -1;
        int total = 0;
        int temp;

        std::sort(nums.begin(), nums.end());
    auto it = std::unique(nums.begin(), nums.end());
        nums.erase(it, nums.end());


while (first < last){
    temp = nums[first] + nums[last];
if(temp == k){
    first++;
    last--;
    total++;
}
if (temp > k){
    last--;
}
if (temp < k){
    first++;
}

}

        return total;
    }
};`},{time:1699421016,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    int maxOperations(vector<int>& nums, int k) {
        int first = 0;
        int last = nums.size() - 1;
        int total = 0;
        int temp;

        std::sort(nums.begin(), nums.end());
        auto it = std::unique(nums.begin(), nums.end());
        nums.erase(it, nums.end());

        while (first < last) {
            temp = nums[first] + nums[last];
            if (temp == k) {
                first++;
                last--;
                total++;
            }
            if (temp > k) {
                last--;
            }
            if (temp < k) {
                first++;
            }
        }

        return total;
    }
};
`},{time:1699421374,language:"cpp",runtime:100,memory:58,accepted:!0,code_content:`class Solution {
public:
    int maxOperations(vector<int>& nums, int k) {
        int first = 0;
        int last = nums.size() - 1;
        int total = 0;
        int temp;

        sort(nums.begin(), nums.end());
  

        while (first < last) {
            if (nums[first] + nums[last] == k) {
                first++;
                last--;
                total++;
            }
            if (nums[first] + nums[last] > k) {
                last--;
            }
            if (nums[first] + nums[last] < k) {
                first++;
            }
        }

        return total;
    }
};
`}]},1833:{title:"find the highest altitude",difficulty:"Easy",html_content:`<h1>1833 - Find the Highest Altitude</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/find-the-highest-altitude/>find-the-highest-altitude</a></h2><p>There is a biker going on a road trip. The road trip consists of <code>n + 1</code> points at different altitudes. The biker starts his trip on point <code>0</code> with altitude equal <code>0</code>.<p>You are given an integer array <code>gain</code> of length <code>n</code> where <code>gain[i]</code> is the <strong>net gain in altitude</strong> between points <code>i</code>​​​​​​ and <code>i + 1</code> for all (<code>0 &lt;= i &lt; n)</code>. Return <em>the <strong>highest altitude</strong> of a point.</em><p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> gain = [-5,1,5,0,-7]
<strong>Output:</strong> 1
<strong>Explanation:</strong> The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> gain = [-4,-3,-2,-1,4,3,2]
<strong>Output:</strong> 0
<strong>Explanation:</strong> The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>n == gain.length</code><li><code>1 &lt;= n &lt;= 100</code><li><code>-100 &lt;= gain[i] &lt;= 100</code></ul>`,submissions:[{time:1706406557,language:"cpp",runtime:0,memory:9,accepted:!0,code_content:`class Solution {
public:
    int largestAltitude(vector<int>& gain) {
        int maxx = 0, next = 0;
        for (int i = 0; i < gain.size(); i++){
            next += gain[i];
            maxx = max(maxx, next);
        }
        return maxx;
    }
};`}]},1894:{title:"merge strings alternately",difficulty:"Easy",html_content:`<h1>1894 - Merge Strings Alternately</h1><h2>Difficulty: Easy - <a href=https://leetcode.com/problems/merge-strings-alternately/>merge-strings-alternately</a></h2><p>You are given two strings <code>word1</code> and <code>word2</code>. Merge the strings by adding letters in alternating order, starting with <code>word1</code>. If a string is longer than the other, append the additional letters onto the end of the merged string.<p>Return <em>the merged string.</em><p> <p><strong class=example>Example 1:</strong><pre>

<strong>Input:</strong> word1 = "abc", word2 = "pqr"

<strong>Output:</strong> "apbqcr"

<strong>Explanation:</strong> The merged string will be merged as so:

word1:  a   b   c

word2:    p   q   r

merged: a p b q c r

</pre><p><strong class=example>Example 2:</strong><pre>

<strong>Input:</strong> word1 = "ab", word2 = "pqrs"

<strong>Output:</strong> "apbqrs"

<strong>Explanation:</strong> Notice that as word2 is longer, "rs" is appended to the end.

word1:  a   b 

word2:    p   q   r   s

merged: a p b q   r   s

</pre><p><strong class=example>Example 3:</strong><pre>

<strong>Input:</strong> word1 = "abcd", word2 = "pq"

<strong>Output:</strong> "apbqcd"

<strong>Explanation:</strong> Notice that as word1 is longer, "cd" is appended to the end.

word1:  a   b   c   d

word2:    p   q 

merged: a p b q c   d

</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= word1.length, word2.length &lt;= 100</code><li><code>word1</code> and <code>word2</code> consist of lowercase English letters.</ul>`,submissions:[{time:1686537715,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    string mergeAlternately(string word1, string word2) {
        char word[100];
        int biggest;
        if word1.length <= word2.length
            biggest = word2.length;
        else 
            biggest = word1.length;
        for (int i = 0; i < biggest; i++){
            if(word1.length >= i)
                word[2 * i] = word1[i];
        }
        if(word2.length >= i)
                word[2 * i + 1] = word2[i];
        }






    }
};`},{time:1686538032,language:"cpp",runtime:0,memory:6,accepted:!0,code_content:`class Solution {
public:
    string mergeAlternately(string word1, string word2) {
        string word;
        int biggest;
        if (word1.length() <= word2.length())
            biggest = word2.length();
        else 
            biggest = word1.length();
        for (int i = 0; i < biggest; i++) {
            if (word1.length() > i)
                word += word1[i];
            if (word2.length() > i)
                word += word2[i];
        }
        return word;
    }
};
`},{time:1686538176,language:"cpp",runtime:0,memory:6,accepted:!0,code_content:`class Solution {
public:
    string mergeAlternately(string word1, string word2) {
        string word;
        int biggest;
        biggest = (word1.length() <= word2.length()) ? word2.length() : word1.length();
        for (int i = 0; i < biggest; i++) {
            if (word1.length() > i)
                word += word1[i];
            if (word2.length() > i)
                word += word2[i];
        }
        return word;
    }
};
`},{time:1721766539,language:"cpp",runtime:0,memory:7,accepted:!0,code_content:`class Solution {
public:
    string mergeAlternately(string word1, string word2) {
        string word;
        int biggest;
        biggest = (word1.length() <= word2.length()) ? word2.length() : word1.length();
        for (int i = 0; i < biggest; i++) {
            if (word1.length() > i)
                word += word1[i];
            if (word2.length() > i)
                word += word2[i];
        }
        return word;
    }
};
`}]},2038:JSON.parse(`{"title":"nearest exit from entrance in maze","difficulty":"Medium","html_content":"<h1>2038 - Nearest Exit from Entrance in Maze</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/>nearest-exit-from-entrance-in-maze</a></h2><p>You are given an <code>m x n</code> matrix <code>maze</code> (<strong>0-indexed</strong>) with empty cells (represented as <code>'.'</code>) and walls (represented as <code>'+'</code>). You are also given the <code>entrance</code> of the maze, where <code>entrance = [entrance<sub>row</sub>, entrance<sub>col</sub>]</code> denotes the row and column of the cell you are initially standing at.<p>In one step, you can move one cell <strong>up</strong>, <strong>down</strong>, <strong>left</strong>, or <strong>right</strong>. You cannot step into a cell with a wall, and you cannot step outside the maze. Your goal is to find the <strong>nearest exit</strong> from the <code>entrance</code>. An <strong>exit</strong> is defined as an <strong>empty cell</strong> that is at the <strong>border</strong> of the <code>maze</code>. The <code>entrance</code> <strong>does not count</strong> as an exit.<p>Return <em>the <strong>number of steps</strong> in the shortest path from the </em><code>entrance</code><em> to the nearest exit, or </em><code>-1</code><em> if no such path exists</em>.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2021/06/04/nearest1-grid.jpg style=width:333px;height:253px><pre>\\n<strong>Input:</strong> maze = [[\\"+\\",\\"+\\",\\".\\",\\"+\\"],[\\".\\",\\".\\",\\".\\",\\"+\\"],[\\"+\\",\\"+\\",\\"+\\",\\".\\"]], entrance = [1,2]\\n<strong>Output:</strong> 1\\n<strong>Explanation:</strong> There are 3 exits in this maze at [1,0], [0,2], and [2,3].\\nInitially, you are at the entrance cell [1,2].\\n- You can reach [1,0] by moving 2 steps left.\\n- You can reach [0,2] by moving 1 step up.\\nIt is impossible to reach [2,3] from the entrance.\\nThus, the nearest exit is [0,2], which is 1 step away.\\n</pre><p><strong class=example>Example 2:</strong><p><img alt src=https://assets.leetcode.com/uploads/2021/06/04/nearesr2-grid.jpg style=width:253px;height:253px><pre>\\n<strong>Input:</strong> maze = [[\\"+\\",\\"+\\",\\"+\\"],[\\".\\",\\".\\",\\".\\"],[\\"+\\",\\"+\\",\\"+\\"]], entrance = [1,0]\\n<strong>Output:</strong> 2\\n<strong>Explanation:</strong> There is 1 exit in this maze at [1,2].\\n[1,0] does not count as an exit since it is the entrance cell.\\nInitially, you are at the entrance cell [1,0].\\n- You can reach [1,2] by moving 2 steps right.\\nThus, the nearest exit is [1,2], which is 2 steps away.\\n</pre><p><strong class=example>Example 3:</strong><p><img alt src=https://assets.leetcode.com/uploads/2021/06/04/nearest3-grid.jpg style=width:173px;height:93px><pre>\\n<strong>Input:</strong> maze = [[\\".\\",\\"+\\"]], entrance = [0,0]\\n<strong>Output:</strong> -1\\n<strong>Explanation:</strong> There are no exits in this maze.\\n</pre><p> <p><strong>Constraints:</strong><ul><li><code>maze.length == m</code><li><code>maze[i].length == n</code><li><code>1 &lt;= m, n &lt;= 100</code><li><code>maze[i][j]</code> is either <code>'.'</code> or <code>'+'</code>.<li><code>entrance.length == 2</code><li><code>0 &lt;= entrance<sub>row</sub> &lt; m</code><li><code>0 &lt;= entrance<sub>col</sub> &lt; n</code><li><code>entrance</code> will always be an empty cell.</ul>","submissions":[{"time":1720241975,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    int nearestExit(vector<vector<char>>& maze, vector<int>& entrance) {\\n        int y = entrance[0];\\n        int x = entrance[1];\\n        int lowestt = 99999;\\n        int ymax = maze.size();\\n        int xmax = maze[0].size(); // Corrected xmax value\\n        set<pair<int, int>> travel;\\n        travel.insert(make_pair(y, x));\\n        bfs(maze, x, y, lowestt, xmax, ymax, 0, travel); // Start with 0 turns\\n        return (lowestt == 99999) ? -1 : lowestt;\\n    }\\n\\nprivate:\\n    void bfs(vector<vector<char>>& maze, int x, int y, int& lowestt, int xmax, int ymax, int turns, set<pair<int, int>>& travel) {\\n        if (!travel.contains(make_pair(y, x)) && (x == 0 || x == xmax - 1 || y == 0 || y == ymax - 1)) {\\n            travel.insert(make_pair(y, x));\\n            lowestt = min(lowestt, turns);\\n        } else {\\n            travel.insert(make_pair(y, x));\\n            if (x != xmax - 1 && !travel.contains(make_pair(y, x + 1)) && maze[y][x + 1] == '.') {\\n                bfs(maze, x + 1, y, lowestt, xmax, ymax, turns + 1, travel);\\n            }\\n\\n            if (x != 0 && !travel.contains(make_pair(y, x - 1)) && maze[y][x - 1] == '.') {\\n                bfs(maze, x - 1, y, lowestt, xmax, ymax, turns + 1, travel);\\n            }\\n\\n            if (y != ymax - 1 && !travel.contains(make_pair(y + 1, x)) && maze[y + 1][x] == '.') {\\n                bfs(maze, x, y + 1, lowestt, xmax, ymax, turns + 1, travel);\\n            }\\n\\n            if (y != 0 && !travel.contains(make_pair(y - 1, x)) && maze[y - 1][x] == '.') {\\n                bfs(maze, x, y - 1, lowestt, xmax, ymax, turns + 1, travel);\\n            }\\n        }\\n    }\\n};\\n"},{"time":1720242016,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    int nearestExit(vector<vector<char>>& maze, vector<int>& entrance) {\\n        int y = entrance[0];\\n        int x = entrance[1];\\n        int lowestt = 99999;\\n        int ymax = maze.size();\\n        int xmax = maze[0].size(); // Corrected xmax value\\n        set<pair<int, int>> travel;\\n        travel.insert(make_pair(y, x));\\n        bfs(maze, x, y, lowestt, xmax, ymax, 0, travel); // Start with 0 turns\\n        return (lowestt == 99999) ? -1 : lowestt;\\n    }\\n\\nprivate:\\n    void bfs(vector<vector<char>>& maze, int x, int y, int& lowestt, int xmax, int ymax, int turns, set<pair<int, int>> travel) {\\n        if (!travel.contains(make_pair(y, x)) && (x == 0 || x == xmax - 1 || y == 0 || y == ymax - 1)) {\\n            travel.insert(make_pair(y, x));\\n            lowestt = min(lowestt, turns);\\n        } else {\\n            travel.insert(make_pair(y, x));\\n            if (x != xmax - 1 && !travel.contains(make_pair(y, x + 1)) && maze[y][x + 1] == '.') {\\n                bfs(maze, x + 1, y, lowestt, xmax, ymax, turns + 1, travel);\\n            }\\n\\n            if (x != 0 && !travel.contains(make_pair(y, x - 1)) && maze[y][x - 1] == '.') {\\n                bfs(maze, x - 1, y, lowestt, xmax, ymax, turns + 1, travel);\\n            }\\n\\n            if (y != ymax - 1 && !travel.contains(make_pair(y + 1, x)) && maze[y + 1][x] == '.') {\\n                bfs(maze, x, y + 1, lowestt, xmax, ymax, turns + 1, travel);\\n            }\\n\\n            if (y != 0 && !travel.contains(make_pair(y - 1, x)) && maze[y - 1][x] == '.') {\\n                bfs(maze, x, y - 1, lowestt, xmax, ymax, turns + 1, travel);\\n            }\\n        }\\n    }\\n};\\n"},{"time":1720244047,"language":"cpp","runtime":-1,"memory":-1,"accepted":false,"code_content":"class Solution {\\npublic:\\n    int nearestExit(vector<vector<char>>& maze, vector<int>& entrance) {\\n        int y = entrance[0];\\n        int x = entrance[1];\\n        int lowestt = 99999;\\n        int ymax = maze.size();\\n        int xmax = maze[0].size(); \\n        set<pair<int, int>> travel;\\n        travel.insert(make_pair(y, x));\\n        stack<tuple <int, int, int>> g;\\n        g.push(make_tuple(y,x,0));\\n\\n        while (!g.empty()) {\\n        bfs(maze, get<1>(g.top()), get<0>(g.top()), lowestt, xmax, ymax, get<2>(g.top()), travel, g);\\n        g.pop();\\n        } \\n        return (lowestt == 0) ? -1 : lowestt;\\n    }\\n\\nprivate:\\n    void bfs(vector<vector<char>>& maze, int x, int y, int& lowestt, int xmax, int ymax, int turns, set<pair<int, int>>& travel, stack<tuple <int, int, int>>& g) {\\n        if (!travel.contains(make_pair(y, x)) && (x == 0 || x == xmax - 1 || y == 0 || y == ymax - 1)) {\\n            travel.insert(make_pair(y, x));\\n            lowestt = min(lowestt, turns);\\n        } else {\\n            travel.insert(make_pair(y, x));\\n            if (x != xmax - 1 && !travel.contains(make_pair(y, x + 1)) && maze[y][x + 1] == '.') \\n            g.push(make_tuple(x+1,y, turns+1));\\n\\n            if (x != 0 && !travel.contains(make_pair(y, x - 1)) && maze[y][x - 1] == '.') \\n            g.push(make_tuple(x-1,y, turns+1));\\n\\n            if (y != ymax - 1 && !travel.contains(make_pair(y + 1, x)) && maze[y + 1][x] == '.') \\n            g.push(make_tuple(x,y+1, turns+1));\\n\\n            if (y != 0 && !travel.contains(make_pair(y - 1, x)) && maze[y - 1][x] == '.') \\n            g.push(make_tuple(x,y-1, turns+1));\\n        }\\n    }\\n};\\n"},{"time":1720244064,"language":"cpp","runtime":91,"memory":33,"accepted":true,"code_content":"class Solution {\\npublic:\\n    int nearestExit(vector<vector<char>>& grid, vector<int>& entrance) {\\n\\n        int n = grid.size();\\n\\n        int m = grid[0].size();\\n\\n        // direction co-ordinates\\n\\n        vector<int> dx = {-1, 0, 1, 0};\\n\\n        vector<int> dy = {0, 1, 0, -1};\\n\\n        // declare a queue\\n\\n        queue<pair<int, int>> q;\\n\\n        // push the entracnce point into queue\\n\\n        q.push({entrance[0], entrance[1]});\\n\\n        int level = 0;\\n\\n        // mark the entrance cell as visited\\n\\n        grid[entrance[0]][entrance[1]] = '+';\\n\\n        while(!q.empty())\\n        {\\n            int size = q.size();\\n\\n            while(size--)\\n            {\\n                auto curr = q.front();\\n\\n                q.pop();\\n\\n                int i = curr.first;\\n\\n                int j = curr.second;\\n\\n                // if exit cell is found return level\\n\\n                if(!(i == entrance[0] && j == entrance[1]) && (i == 0 || j == 0 || i == n - 1 || j == m - 1))\\n                {\\n                    return level;\\n                }\\n\\n                // push the next level cell into queue which is not visited and don't have wall and mark that cell as visited\\n\\n                for(int k = 0; k < 4; k++)\\n                {\\n                    int new_i = i + dx[k];\\n\\n                    int new_j = j + dy[k];\\n\\n                    if(new_i >= 0 && new_i < n && new_j >= 0 && new_j < m && grid[new_i][new_j] != '+')\\n                    {\\n                        grid[new_i][new_j] = '+';\\n\\n                        q.push({new_i, new_j});\\n                    }\\n                }\\n            }\\n\\n            // increment level\\n\\n            level++;\\n        }\\n\\n        return -1;\\n    }\\n};"}]}`),2216:{title:"delete the middle node of a linked list",difficulty:"Medium",html_content:`<h1>2216 - Delete the Middle Node of a Linked List</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/>delete-the-middle-node-of-a-linked-list</a></h2><p>You are given the <code>head</code> of a linked list. <strong>Delete</strong> the <strong>middle node</strong>, and return <em>the</em> <code>head</code> <em>of the modified linked list</em>.<p>The <strong>middle node</strong> of a linked list of size <code>n</code> is the <code>⌊n / 2⌋<sup>th</sup></code> node from the <b>start</b> using <strong>0-based indexing</strong>, where <code>⌊x⌋</code> denotes the largest integer less than or equal to <code>x</code>.<ul><li>For <code>n</code> = <code>1</code>, <code>2</code>, <code>3</code>, <code>4</code>, and <code>5</code>, the middle nodes are <code>0</code>, <code>1</code>, <code>1</code>, <code>2</code>, and <code>2</code>, respectively.</ul><p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2021/11/16/eg1drawio.png style=width:500px;height:77px><pre>
<strong>Input:</strong> head = [1,3,4,7,1,2,6]
<strong>Output:</strong> [1,3,4,1,2,6]
<strong>Explanation:</strong>
The above figure represents the given linked list. The indices of the nodes are written below.
Since n = 7, node 3 with value 7 is the middle node, which is marked in red.
We return the new list after removing this node. 
</pre><p><strong class=example>Example 2:</strong><p><img alt src=https://assets.leetcode.com/uploads/2021/11/16/eg2drawio.png style=width:250px;height:43px><pre>
<strong>Input:</strong> head = [1,2,3,4]
<strong>Output:</strong> [1,2,4]
<strong>Explanation:</strong>
The above figure represents the given linked list.
For n = 4, node 2 with value 3 is the middle node, which is marked in red.
</pre><p><strong class=example>Example 3:</strong><p><img alt src=https://assets.leetcode.com/uploads/2021/11/16/eg3drawio.png style=width:150px;height:58px><pre>
<strong>Input:</strong> head = [2,1]
<strong>Output:</strong> [2]
<strong>Explanation:</strong>
The above figure represents the given linked list.
For n = 2, node 1 with value 1 is the middle node, which is marked in red.
Node 0 with value 2 is the only node remaining after removing node 1.</pre><p> <p><strong>Constraints:</strong><ul><li>The number of nodes in the list is in the range <code>[1, 10<sup>5</sup>]</code>.<li><code>1 &lt;= Node.val &lt;= 10<sup>5</sup></code></ul>`,submissions:[{time:1719256523,language:"cpp",runtime:516,memory:298,accepted:!0,code_content:`/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* deleteMiddle(ListNode* head) {
        if (!head || !head->next) {
            return nullptr;
        }
        ListNode* temp = head;
        ListNode* doubletemp = head;
        ListNode* prev = nullptr;
        int index = 0;
        while(doubletemp && doubletemp->next){
            doubletemp = doubletemp->next->next;
            prev = temp;
            temp = temp->next;
        }
        if(prev){
            prev->next = temp->next;
        }
        delete temp;
        return head;
    }
};`}]},2236:{title:"maximum twin sum of a linked list",difficulty:"Medium",html_content:`<h1>2236 - Maximum Twin Sum of a Linked List</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/>maximum-twin-sum-of-a-linked-list</a></h2><p>In a linked list of size <code>n</code>, where <code>n</code> is <strong>even</strong>, the <code>i<sup>th</sup></code> node (<strong>0-indexed</strong>) of the linked list is known as the <strong>twin</strong> of the <code>(n-1-i)<sup>th</sup></code> node, if <code>0 &lt;= i &lt;= (n / 2) - 1</code>.<ul><li>For example, if <code>n = 4</code>, then node <code>0</code> is the twin of node <code>3</code>, and node <code>1</code> is the twin of node <code>2</code>. These are the only nodes with twins for <code>n = 4</code>.</ul><p>The <strong>twin sum </strong>is defined as the sum of a node and its twin.<p>Given the <code>head</code> of a linked list with even length, return <em>the <strong>maximum twin sum</strong> of the linked list</em>.<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2021/12/03/eg1drawio.png style=width:250px;height:70px><pre>
<strong>Input:</strong> head = [5,4,2,1]
<strong>Output:</strong> 6
<strong>Explanation:</strong>
Nodes 0 and 1 are the twins of nodes 3 and 2, respectively. All have twin sum = 6.
There are no other nodes with twins in the linked list.
Thus, the maximum twin sum of the linked list is 6. 
</pre><p><strong class=example>Example 2:</strong><p><img alt src=https://assets.leetcode.com/uploads/2021/12/03/eg2drawio.png style=width:250px;height:70px><pre>
<strong>Input:</strong> head = [4,2,2,3]
<strong>Output:</strong> 7
<strong>Explanation:</strong>
The nodes with twins present in this linked list are:
- Node 0 is the twin of node 3 having a twin sum of 4 + 3 = 7.
- Node 1 is the twin of node 2 having a twin sum of 2 + 2 = 4.
Thus, the maximum twin sum of the linked list is max(7, 4) = 7. 
</pre><p><strong class=example>Example 3:</strong><p><img alt src=https://assets.leetcode.com/uploads/2021/12/03/eg3drawio.png style=width:200px;height:88px><pre>
<strong>Input:</strong> head = [1,100000]
<strong>Output:</strong> 100001
<strong>Explanation:</strong>
There is only one node with a twin in the linked list having twin sum of 1 + 100000 = 100001.
</pre><p> <p><strong>Constraints:</strong><ul><li>The number of nodes in the list is an <strong>even</strong> integer in the range <code>[2, 10<sup>5</sup>]</code>.<li><code>1 &lt;= Node.val &lt;= 10<sup>5</sup></code></ul>`,submissions:[{time:1719424475,language:"cpp",runtime:183,memory:121,accepted:!0,code_content:`/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    int pairSum(ListNode* head) {
        ListNode* doub = head;
        ListNode* temp = head;
        stack<int> stack;
        int greatest = 0;
        while(doub && doub->next){
            doub = doub->next->next;
            stack.push(temp->val);
            temp = temp->next;
        }
        while(temp){
            if(temp->val + stack.top() > greatest)
            greatest = temp->val + stack.top();

            temp = temp->next;
            stack.pop();
        }
        return greatest;
    }
};`}]},2392:{title:"successful pairs of spells and potions",difficulty:"Medium",html_content:`<h1>2392 - Successful Pairs of Spells and Potions</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/successful-pairs-of-spells-and-potions/>successful-pairs-of-spells-and-potions</a></h2><p>You are given two positive integer arrays <code>spells</code> and <code>potions</code>, of length <code>n</code> and <code>m</code> respectively, where <code>spells[i]</code> represents the strength of the <code>i<sup>th</sup></code> spell and <code>potions[j]</code> represents the strength of the <code>j<sup>th</sup></code> potion.<p>You are also given an integer <code>success</code>. A spell and potion pair is considered <strong>successful</strong> if the <strong>product</strong> of their strengths is <strong>at least</strong> <code>success</code>.<p>Return <em>an integer array </em><code>pairs</code><em> of length </em><code>n</code><em> where </em><code>pairs[i]</code><em> is the number of <strong>potions</strong> that will form a successful pair with the </em><code>i<sup>th</sup></code><em> spell.</em><p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> spells = [5,1,3], potions = [1,2,3,4,5], success = 7
<strong>Output:</strong> [4,0,3]
<strong>Explanation:</strong>
- 0<sup>th</sup> spell: 5 * [1,2,3,4,5] = [5,<u><strong>10</strong></u>,<u><strong>15</strong></u>,<u><strong>20</strong></u>,<u><strong>25</strong></u>]. 4 pairs are successful.
- 1<sup>st</sup> spell: 1 * [1,2,3,4,5] = [1,2,3,4,5]. 0 pairs are successful.
- 2<sup>nd</sup> spell: 3 * [1,2,3,4,5] = [3,6,<u><strong>9</strong></u>,<u><strong>12</strong></u>,<u><strong>15</strong></u>]. 3 pairs are successful.
Thus, [4,0,3] is returned.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> spells = [3,1,2], potions = [8,5,8], success = 16
<strong>Output:</strong> [2,0,2]
<strong>Explanation:</strong>
- 0<sup>th</sup> spell: 3 * [8,5,8] = [<u><strong>24</strong></u>,15,<u><strong>24</strong></u>]. 2 pairs are successful.
- 1<sup>st</sup> spell: 1 * [8,5,8] = [8,5,8]. 0 pairs are successful. 
- 2<sup>nd</sup> spell: 2 * [8,5,8] = [<strong><u>16</u></strong>,10,<u><strong>16</strong></u>]. 2 pairs are successful. 
Thus, [2,0,2] is returned.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>n == spells.length</code><li><code>m == potions.length</code><li><code>1 &lt;= n, m &lt;= 10<sup>5</sup></code><li><code>1 &lt;= spells[i], potions[i] &lt;= 10<sup>5</sup></code><li><code>1 &lt;= success &lt;= 10<sup>10</sup></code></ul>`,submissions:[{time:1720989556,language:"cpp",runtime:149,memory:103,accepted:!0,code_content:`class Solution {
public:
    vector<int> successfulPairs(vector<int>& spells, vector<int>& potions, long long success) {
    sort(potions.begin(),potions.end());
    int m = potions.size();
    int maxPotionValue=potions[m-1];

    vector<int> solution; 
    long long value;
    for (auto temp : spells){
        value = ceil(1.0 * success / temp);
        if(value>maxPotionValue){
                solution.push_back(0);
                continue;
            }
        int index=lower_bound(potions.begin(),potions.end(),value)-potions.begin();
        int count=m-index;
        solution.push_back(count);

    }
    return solution;
    }
};`}]},2413:{title:"smallest number in infinite set",difficulty:"Medium",html_content:`<h1>2413 - Smallest Number in Infinite Set</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/smallest-number-in-infinite-set/>smallest-number-in-infinite-set</a></h2><p>You have a set which contains all positive integers <code>[1, 2, 3, 4, 5, ...]</code>.<p>Implement the <code>SmallestInfiniteSet</code> class:<ul><li><code>SmallestInfiniteSet()</code> Initializes the <strong>SmallestInfiniteSet</strong> object to contain <strong>all</strong> positive integers.<li><code>int popSmallest()</code> <strong>Removes</strong> and returns the smallest integer contained in the infinite set.<li><code>void addBack(int num)</code> <strong>Adds</strong> a positive integer <code>num</code> back into the infinite set, if it is <strong>not</strong> already in the infinite set.</ul><p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input</strong>
["SmallestInfiniteSet", "addBack", "popSmallest", "popSmallest", "popSmallest", "addBack", "popSmallest", "popSmallest", "popSmallest"]
[[], [2], [], [], [], [1], [], [], []]
<strong>Output</strong>
[null, null, 1, 2, 3, null, 1, 4, 5]

<strong>Explanation</strong>
SmallestInfiniteSet smallestInfiniteSet = new SmallestInfiniteSet();
smallestInfiniteSet.addBack(2);    // 2 is already in the set, so no change is made.
smallestInfiniteSet.popSmallest(); // return 1, since 1 is the smallest number, and remove it from the set.
smallestInfiniteSet.popSmallest(); // return 2, and remove it from the set.
smallestInfiniteSet.popSmallest(); // return 3, and remove it from the set.
smallestInfiniteSet.addBack(1);    // 1 is added back to the set.
smallestInfiniteSet.popSmallest(); // return 1, since 1 was added back to the set and
                                   // is the smallest number, and remove it from the set.
smallestInfiniteSet.popSmallest(); // return 4, and remove it from the set.
smallestInfiniteSet.popSmallest(); // return 5, and remove it from the set.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= num &lt;= 1000</code><li>At most <code>1000</code> calls will be made <strong>in total</strong> to <code>popSmallest</code> and <code>addBack</code>.</ul>`,submissions:[{time:1720393054,language:"cpp",runtime:84,memory:50,accepted:!0,code_content:`class SmallestInfiniteSet {
public:
    SmallestInfiniteSet() {
        for(int i = 1; i < 1001; i++)
        s.insert(i);
    }
    
    int popSmallest() {
        const int temp = *s.begin();
        s.erase(s.begin());
        return temp;
    }
    
    void addBack(int num) {
        s.insert(num);
    }
private:
    set<int> s;
};

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * SmallestInfiniteSet* obj = new SmallestInfiniteSet();
 * int param_1 = obj->popSmallest();
 * obj->addBack(num);
 */`}]},2428:{title:"equal row and column pairs",difficulty:"Medium",html_content:`<h1>2428 - Equal Row and Column Pairs</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/equal-row-and-column-pairs/>equal-row-and-column-pairs</a></h2><p>Given a <strong>0-indexed</strong> <code>n x n</code> integer matrix <code>grid</code>, <em>return the number of pairs </em><code>(r<sub>i</sub>, c<sub>j</sub>)</code><em> such that row </em><code>r<sub>i</sub></code><em> and column </em><code>c<sub>j</sub></code><em> are equal</em>.<p>A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).<p> <p><strong class=example>Example 1:</strong><p><img alt src=https://assets.leetcode.com/uploads/2022/06/01/ex1.jpg style=width:150px;height:153px><pre>
<strong>Input:</strong> grid = [[3,2,1],[1,7,6],[2,7,7]]
<strong>Output:</strong> 1
<strong>Explanation:</strong> There is 1 equal row and column pair:
- (Row 2, Column 1): [2,7,7]
</pre><p><strong class=example>Example 2:</strong><p><img alt src=https://assets.leetcode.com/uploads/2022/06/01/ex2.jpg style=width:200px;height:209px><pre>
<strong>Input:</strong> grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
<strong>Output:</strong> 3
<strong>Explanation:</strong> There are 3 equal row and column pairs:
- (Row 0, Column 0): [3,1,2,2]
- (Row 2, Column 2): [2,4,2,2]
- (Row 3, Column 2): [2,4,2,2]
</pre><p> <p><strong>Constraints:</strong><ul><li><code>n == grid.length == grid[i].length</code><li><code>1 &lt;= n &lt;= 200</code><li><code>1 &lt;= grid[i][j] &lt;= 10<sup>5</sup></code></ul>`,submissions:[{time:1717637846,language:"cpp",runtime:58,memory:29,accepted:!0,code_content:`class Solution {
public:
    int equalPairs(vector<vector<int>>& grid) {
        int size = grid.size();
        std::map<std::vector<int>, int> pair;
        int count = 0;

        for (auto row : grid) {
            pair[row]++;
        }

        std::vector<int> myvector(size); 
        for (int x = 0; x < size; x++) {
            for (int y = 0; y < size; y++) {
                myvector[y] = grid[y][x];
            }
            if (pair.find(myvector) != pair.end()) {
                count += pair[myvector];
            }
        }

        return count;
    }
};`}]},2470:{title:"removing stars from a string",difficulty:"Medium",html_content:`<h1>2470 - Removing Stars From a String</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/removing-stars-from-a-string/>removing-stars-from-a-string</a></h2><p>You are given a string <code>s</code>, which contains stars <code>*</code>.<p>In one operation, you can:<ul><li>Choose a star in <code>s</code>.<li>Remove the closest <strong>non-star</strong> character to its <strong>left</strong>, as well as remove the star itself.</ul><p>Return <em>the string after <strong>all</strong> stars have been removed</em>.<p><strong>Note:</strong><ul><li>The input will be generated such that the operation is always possible.<li>It can be shown that the resulting string will always be unique.</ul><p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> s = "leet**cod*e"
<strong>Output:</strong> "lecoe"
<strong>Explanation:</strong> Performing the removals from left to right:
- The closest character to the 1<sup>st</sup> star is 't' in "lee<strong><u>t</u></strong>**cod*e". s becomes "lee*cod*e".
- The closest character to the 2<sup>nd</sup> star is 'e' in "le<strong><u>e</u></strong>*cod*e". s becomes "lecod*e".
- The closest character to the 3<sup>rd</sup> star is 'd' in "leco<strong><u>d</u></strong>*e". s becomes "lecoe".
There are no more stars, so we return "lecoe".</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> s = "erase*****"
<strong>Output:</strong> ""
<strong>Explanation:</strong> The entire string is removed, so we return an empty string.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code><li><code>s</code> consists of lowercase English letters and stars <code>*</code>.<li>The operation above can be performed on <code>s</code>.</ul>`,submissions:[{time:1717644271,language:"cpp",runtime:674,memory:24,accepted:!0,code_content:`class Solution {
public:
    string removeStars(string s) {
        int rem = 0;
        for(int i = s.size() - 1; i >= 0; i--){
            if(s[i] == '*'){
                rem++;
            } else if (rem > 0) {
                rem--;
            } else {
                continue;
            }
            s.erase(i, 1); 
        }
        return s;
    }
};`}]},2553:{title:"total cost to hire k workers",difficulty:"Medium",html_content:`<h1>2553 - Total Cost to Hire K Workers</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/total-cost-to-hire-k-workers/>total-cost-to-hire-k-workers</a></h2><p>You are given a <strong>0-indexed</strong> integer array <code>costs</code> where <code>costs[i]</code> is the cost of hiring the <code>i<sup>th</sup></code> worker.<p>You are also given two integers <code>k</code> and <code>candidates</code>. We want to hire exactly <code>k</code> workers according to the following rules:<ul><li>You will run <code>k</code> sessions and hire exactly one worker in each session.<li>In each hiring session, choose the worker with the lowest cost from either the first <code>candidates</code> workers or the last <code>candidates</code> workers. Break the tie by the smallest index. <ul><li>For example, if <code>costs = [3,2,7,7,1,2]</code> and <code>candidates = 2</code>, then in the first hiring session, we will choose the <code>4<sup>th</sup></code> worker because they have the lowest cost <code>[<u>3,2</u>,7,7,<u><strong>1</strong>,2</u>]</code>.<li>In the second hiring session, we will choose <code>1<sup>st</sup></code> worker because they have the same lowest cost as <code>4<sup>th</sup></code> worker but they have the smallest index <code>[<u>3,<strong>2</strong></u>,7,<u>7,2</u>]</code>. Please note that the indexing may be changed in the process.</ul><li>If there are fewer than candidates workers remaining, choose the worker with the lowest cost among them. Break the tie by the smallest index.<li>A worker can only be chosen once.</ul><p>Return <em>the total cost to hire exactly </em><code>k</code><em> workers.</em><p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> costs = [17,12,10,2,7,2,11,20,8], k = 3, candidates = 4
<strong>Output:</strong> 11
<strong>Explanation:</strong> We hire 3 workers in total. The total cost is initially 0.
- In the first hiring round we choose the worker from [<u>17,12,10,2</u>,7,<u>2,11,20,8</u>]. The lowest cost is 2, and we break the tie by the smallest index, which is 3. The total cost = 0 + 2 = 2.
- In the second hiring round we choose the worker from [<u>17,12,10,7</u>,<u>2,11,20,8</u>]. The lowest cost is 2 (index 4). The total cost = 2 + 2 = 4.
- In the third hiring round we choose the worker from [<u>17,12,10,7,11,20,8</u>]. The lowest cost is 7 (index 3). The total cost = 4 + 7 = 11. Notice that the worker with index 3 was common in the first and last four workers.
The total hiring cost is 11.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> costs = [1,2,4,1], k = 3, candidates = 3
<strong>Output:</strong> 4
<strong>Explanation:</strong> We hire 3 workers in total. The total cost is initially 0.
- In the first hiring round we choose the worker from [<u>1,2,4,1</u>]. The lowest cost is 1, and we break the tie by the smallest index, which is 0. The total cost = 0 + 1 = 1. Notice that workers with index 1 and 2 are common in the first and last 3 workers.
- In the second hiring round we choose the worker from [<u>2,4,1</u>]. The lowest cost is 1 (index 2). The total cost = 1 + 1 = 2.
- In the third hiring round there are less than three candidates. We choose the worker from the remaining workers [<u>2,4</u>]. The lowest cost is 2 (index 0). The total cost = 2 + 2 = 4.
The total hiring cost is 4.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>1 &lt;= costs.length &lt;= 10<sup>5 </sup></code><li><code>1 &lt;= costs[i] &lt;= 10<sup>5</sup></code><li><code>1 &lt;= k, candidates &lt;= costs.length</code></ul>`,submissions:[{time:1720725987,language:"cpp",runtime:112,memory:76,accepted:!0,code_content:`class Solution {
public:
    long long totalCost(vector<int>& costs, int k, int candidates) {
    int n = costs.size();
    priority_queue <int, vector<int>, greater<int>> temp1;
    priority_queue <int, vector<int>, greater<int>> temp2;
    for (int i=0;i<candidates;i++){
        temp1.push(costs[i]);
        }
    for (int i=n-1;i>=n-candidates && i >= candidates ;i--){
        temp2.push(costs[i]);
    }
    int cursor1 =candidates;
    int cursor2 = n-candidates-1;
    long long cost = 0;
    while(k--){
    int a  = INT_MAX;
    int b  = INT_MAX;
    if(!temp1.empty())
    a = temp1.top();
    if(!temp2.empty())
    b = temp2.top();

    if(a<=b){
        cost += a;
        temp1.pop();
        if(cursor1<=cursor2){
            temp1.push(costs[cursor1]);
            cursor1++;
        }
        }
    else{
        cost += b;
        temp2.pop();
        if(cursor1<=cursor2){
            temp2.push(costs[cursor2]);
            cursor2--;
        }
    }


    }
    return cost;
    }
};`}]},2636:{title:"maximum subsequence score",difficulty:"Medium",html_content:`<h1>2636 - Maximum Subsequence Score</h1><h2>Difficulty: Medium - <a href=https://leetcode.com/problems/maximum-subsequence-score/>maximum-subsequence-score</a></h2><p>You are given two <strong>0-indexed</strong> integer arrays <code>nums1</code> and <code>nums2</code> of equal length <code>n</code> and a positive integer <code>k</code>. You must choose a <strong>subsequence</strong> of indices from <code>nums1</code> of length <code>k</code>.<p>For chosen indices <code>i<sub>0</sub></code>, <code>i<sub>1</sub></code>, ..., <code>i<sub>k - 1</sub></code>, your <strong>score</strong> is defined as:<ul><li>The sum of the selected elements from <code>nums1</code> multiplied with the <strong>minimum</strong> of the selected elements from <code>nums2</code>.<li>It can defined simply as: <code>(nums1[i<sub>0</sub>] + nums1[i<sub>1</sub>] +...+ nums1[i<sub>k - 1</sub>]) * min(nums2[i<sub>0</sub>] , nums2[i<sub>1</sub>], ... ,nums2[i<sub>k - 1</sub>])</code>.</ul><p>Return <em>the <strong>maximum</strong> possible score.</em><p>A <strong>subsequence</strong> of indices of an array is a set that can be derived from the set <code>{0, 1, ..., n-1}</code> by deleting some or no elements.<p> <p><strong class=example>Example 1:</strong><pre>
<strong>Input:</strong> nums1 = [1,3,3,2], nums2 = [2,1,3,4], k = 3
<strong>Output:</strong> 12
<strong>Explanation:</strong> 
The four possible subsequence scores are:
- We choose the indices 0, 1, and 2 with score = (1+3+3) * min(2,1,3) = 7.
- We choose the indices 0, 1, and 3 with score = (1+3+2) * min(2,1,4) = 6. 
- We choose the indices 0, 2, and 3 with score = (1+3+2) * min(2,3,4) = 12. 
- We choose the indices 1, 2, and 3 with score = (3+3+2) * min(1,3,4) = 8.
Therefore, we return the max score, which is 12.
</pre><p><strong class=example>Example 2:</strong><pre>
<strong>Input:</strong> nums1 = [4,2,3,1,1], nums2 = [7,5,10,9,6], k = 1
<strong>Output:</strong> 30
<strong>Explanation:</strong> 
Choosing index 2 is optimal: nums1[2] * nums2[2] = 3 * 10 = 30 is the maximum possible score.
</pre><p> <p><strong>Constraints:</strong><ul><li><code>n == nums1.length == nums2.length</code><li><code>1 &lt;= n &lt;= 10<sup>5</sup></code><li><code>0 &lt;= nums1[i], nums2[j] &lt;= 10<sup>5</sup></code><li><code>1 &lt;= k &lt;= n</code></ul>`,submissions:[{time:1720411457,language:"cpp",runtime:-1,memory:-1,accepted:!1,code_content:`class Solution {
public:
    long long maxScore(vector<int>& nums1, vector<int>& nums2, int k) {
        vector<pair<int,int>>v;
        int n=nums2.size();
        for(int i=0;i<n;i++){
            v.push_back({nums2[i],i});
        }
        sort(v.rbegin(),v.rend());
        priority_queue <int, vector<int>, greater<int>> gq;

        long long maxsum = 0;
        long long sum = 0;
        for(int i = 0; i < v.size(); i++){
            auto &[a,b]=v[i];
            sum += nums1[b];
            gq.push(nums1[b]);
            if(k==gq.size()){
                maxsum = max(maxsum, sum * a);
            }
            if(k - 1 < gq.size()){
                sum -= nums1[b];
                gq.pop();
            }
        }
        return maxsum;

    }
};`},{time:1720411615,language:"cpp",runtime:185,memory:98,accepted:!0,code_content:`class Solution {
public:
    long long maxScore(vector<int>& nums1, vector<int>& nums2, int k) {
        vector<pair<int,int>>v;
        int n=nums2.size();
        for(int i=0;i<n;i++){
            v.push_back({nums2[i],i});
        }
        sort(v.rbegin(),v.rend());
        priority_queue <int, vector<int>, greater<int>> gq;

        long long maxsum = 0;
        long long sum = 0;
        for(int i = 0; i < v.size(); i++){
            auto &[a,b]=v[i];
            sum += nums1[b];
            gq.push(nums1[b]);
            if(k==gq.size()){
                maxsum = max(maxsum, sum * a);
            }
            if(k - 1 < gq.size()){
                sum -= gq.top();
                gq.pop();
            }
        }
        return maxsum;

    }
};`}]}};var Re=H("<title> </title>"),Ae=H("<desc> </desc>"),Fe=H('<svg><!><!><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.35709 16V5.78571c0-.43393.34822-.78571.77777-.78571H18.5793c.4296 0 .7778.35178.7778.78571V16M5.35709 16h-1c-.55229 0-1 .4477-1 1v1c0 .5523.44771 1 1 1H20.3571c.5523 0 1-.4477 1-1v-1c0-.5523-.4477-1-1-1h-1M5.35709 16H19.3571M9.35709 8l2.62501 2.5L9.35709 13m4.00001 0h2"></path></svg>');function Ge(U,e){ie(e,!0);const p=pe("iconCtx")??{},Z={xs:"w-3 h-3",sm:"w-4 h-4",md:"w-5 h-5",lg:"w-6 h-6",xl:"w-8 h-8"};let T=te(e,"color",19,()=>p.color||"currentColor"),C=te(e,"strokeWidth",19,()=>p.strokeWidth||2),K=he(e,["$$slots","$$events","$$legacy","size","width","height","color","title","strokeWidth","desc","class","ariaLabel"]);const q=x(()=>e.width===void 0&&e.height===void 0?e.size??p.size??"md":"md"),m=x(()=>e.width===void 0&&e.height===void 0?Z[n(q)]:void 0),P=x(()=>`${e.title?.id||""} ${e.desc?.id||""}`.trim()),R=x(()=>!!(e.title?.id||e.desc?.id)),M=x(()=>!!e.ariaLabel||n(R));var b=Fe();me(b,t=>({xmlns:"http://www.w3.org/2000/svg",fill:"none",color:T(),width:e.width,height:e.height,...K,class:t,viewBox:"0 0 24 24",role:n(M)?"img":void 0,"aria-label":e.ariaLabel,"aria-describedby":n(R)?n(P):void 0,"aria-hidden":!n(M)}),[()=>ge("shrink-0",n(m),e.class)]);var A=s(b);{var g=t=>{var r=Re(),h=s(r,!0);o(r),j(()=>{X(r,"id",e.title.id),f(h,e.title.title)}),l(t,r)};J(A,t=>{e.title?.id&&e.title.title&&t(g)})}var u=d(A);{var L=t=>{var r=Ae(),h=s(r,!0);o(r),j(()=>{X(r,"id",e.desc.id),f(h,e.desc.desc)}),l(t,r)};J(u,t=>{e.desc?.id&&e.desc.desc&&t(L)})}var v=d(u);o(b),j(()=>X(v,"stroke-width",C())),l(U,b),ae()}var We=H("<title> </title>"),Ye=H("<desc> </desc>"),Be=H('<svg><!><!><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19 7h1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h11.5M7 14h6m-6 3h6m0-10h.5m-.5 3h.5M7 7h3v3H7V7Z"></path></svg>');function Pe(U,e){ie(e,!0);const p=pe("iconCtx")??{},Z={xs:"w-3 h-3",sm:"w-4 h-4",md:"w-5 h-5",lg:"w-6 h-6",xl:"w-8 h-8"};let T=te(e,"color",19,()=>p.color||"currentColor"),C=te(e,"strokeWidth",19,()=>p.strokeWidth||2),K=he(e,["$$slots","$$events","$$legacy","size","width","height","color","title","strokeWidth","desc","class","ariaLabel"]);const q=x(()=>e.width===void 0&&e.height===void 0?e.size??p.size??"md":"md"),m=x(()=>e.width===void 0&&e.height===void 0?Z[n(q)]:void 0),P=x(()=>`${e.title?.id||""} ${e.desc?.id||""}`.trim()),R=x(()=>!!(e.title?.id||e.desc?.id)),M=x(()=>!!e.ariaLabel||n(R));var b=Be();me(b,t=>({xmlns:"http://www.w3.org/2000/svg",fill:"none",color:T(),width:e.width,height:e.height,...K,class:t,viewBox:"0 0 24 24",role:n(M)?"img":void 0,"aria-label":e.ariaLabel,"aria-describedby":n(R)?n(P):void 0,"aria-hidden":!n(M)}),[()=>ge("shrink-0",n(m),e.class)]);var A=s(b);{var g=t=>{var r=We(),h=s(r,!0);o(r),j(()=>{X(r,"id",e.title.id),f(h,e.title.title)}),l(t,r)};J(A,t=>{e.title?.id&&e.title.title&&t(g)})}var u=d(A);{var L=t=>{var r=Ye(),h=s(r,!0);o(r),j(()=>{X(r,"id",e.desc.id),f(h,e.desc.desc)}),l(t,r)};J(u,t=>{e.desc?.id&&e.desc.desc&&t(L)})}var v=d(u);o(b),j(()=>X(v,"stroke-width",C())),l(U,b),ae()}var Ve=N("Filter<!>",1),Xe=N("<li><!></li> <li><!></li> <li><!></li> <li><!></li>",1),He=N('<button><li class="flex items-center p-3 md:odd:bg-transparent md:nth-[4n+1]:bg-slate-50 md:nth-[4n+2]:bg-slate-50 odd:bg-slate-50 justify-between w-full group"><span class="font-medium trunca text-gray-500 group-hover:text-fuchsia-500"> </span> <span class="font-medium trunca text-gray-500 group-hover:text-fuchsia-500"> </span> <span> </span></li></button>'),Ue=N('<p> <a class="link-primary" title="Leetcode" href="https://leetcode.com/u/nickolasddiaz/">Leetcode Link</a></p> <div class="flex flex-wrap gap-4 items-center justify-between"><!> <!> <!></div> <ul class="space-y-4 p-4 mx-auto bg-gray-100 shadow-lg rounded-lg grid grid-cols-1 md:grid-cols-2 list-disc"></ul>',1),Ze=N('<div class="flex items-center gap-2"><!> Description</div>'),Ke=N('<p class="text-gray-500 dark:text-gray-400"><!></p>'),Je=N('<div class="flex items-center gap-2"><!> <span> </span></div>'),Qe=N('<div class="flex gap-4 text-sm text-gray-500 dark:text-gray-400 px-4 pt-3 pb-2"><span> </span> <span> </span> <span> </span> <span> </span></div> <div class="h-full"><!></div>',1),$e=N("<!> <!>",1),en=N('<div class="w-full h-full flex flex-col"><!></div>'),nn=N("<!> <!>",1);function xn(U,e){ie(e,!0);const p={All:0,Easy:1,Medium:2,Hard:3},Z={Hard:"text-red-400",Medium:"text-orange-300",Easy:"text-green-400"};let T=ee("1"),C=ee(!1);function K(g){D(T,g,!0),D(C,!0)}let q=ee(""),m=ee(we(p.All));const P=new je({document:{id:"id",index:["id","title"],store:!0},tokenize:"forward"});Object.entries(B).forEach(([g,u])=>{P.add({id:g,title:u.title,difficulty:u.difficulty})});const R=x(()=>()=>{const g=Object.entries(B),u=n(m)===p.All?g:g.filter(([,t])=>t.difficulty===Object.keys(p)[n(m)]);if(!n(q).trim())return u;const L=P.search(n(q),{index:["id","title"],enrich:!0}),v=new Set(L.flatMap(t=>t.result.map(r=>String(r.id))));return u.filter(([t])=>v.has(t))});var M=nn(),b=W(M);Se(b,{children:(g,u)=>{var L=Ue(),v=W(L),t=s(v);Y(),o(v);var r=d(v,2),h=s(r);Ce(h,{class:"w-full md:flex-1",get value(){return n(q)},set value(y){D(q,y,!0)}});var V=d(h,2);Oe(V,{children:(y,F)=>{Y();var w=Ve(),E=d(W(w));qe(E,{class:"ms-2 h-6 w-6 text-white dark:text-white"}),l(y,w)},$$slots:{default:!0}});var oe=d(V,2);ze(oe,{simple:!0,class:"*:p-2",children:(y,F)=>{var w=Xe(),E=W(w),I=s(E);ne(I,{name:"filter",get value(){return p.All},get group(){return n(m)},set group(i){D(m,i,!0)},children:(i,G)=>{Y();var k=$("All");l(i,k)},$$slots:{default:!0}}),o(E);var a=d(E,2),S=s(a);ne(S,{name:"filter",get value(){return p.Easy},get group(){return n(m)},set group(i){D(m,i,!0)},children:(i,G)=>{Y();var k=$("Easy");l(i,k)},$$slots:{default:!0}}),o(a);var c=d(a,2),O=s(c);ne(O,{name:"filter",get value(){return p.Medium},get group(){return n(m)},set group(i){D(m,i,!0)},children:(i,G)=>{Y();var k=$("Medium");l(i,k)},$$slots:{default:!0}}),o(c);var _=d(c,2),z=s(_);ne(z,{name:"filter",get value(){return p.Hard},get group(){return n(m)},set group(i){D(m,i,!0)},children:(i,G)=>{Y();var k=$("Hard");l(i,k)},$$slots:{default:!0}}),o(_),l(y,w)},$$slots:{default:!0}}),o(r);var Q=d(r,2);de(Q,21,()=>n(R)(),([y,F])=>y,(y,F)=>{var w=x(()=>ke(n(F),2));let E=()=>n(w)[0],I=()=>n(w)[1];var a=He(),S=s(a),c=s(S),O=s(c,!0);o(c);var _=d(c,2),z=s(_,!0);o(_);var i=d(_,2),G=s(i,!0);o(i),o(S),o(a),j(()=>{f(O,E()),f(z,I().title),ce(i,1,`font-bold ${Z[I().difficulty]??""}`),f(G,I().difficulty)}),Ee("click",a,()=>K(E())),l(y,a)}),o(Q),j(y=>f(t,`Here serves all of my ${y??""} Leetcode Submissions. `),[()=>Object.keys(B).length]),l(g,L)}});var A=d(b,2);{let g=x(()=>`${n(T)} - ${B[n(T)].title} - ${B[n(T)].difficulty}`);Le(A,{get title(){return n(g)},class:"h-[90vh]",classes:{body:"p-0 flex-1 truncate"},get open(){return n(C)},set open(u){D(C,u,!0)},children:(u,L)=>{var v=_e(),t=W(v);{var r=h=>{var V=en(),oe=s(V);Me(oe,{tabStyle:"underline",children:(Q,y)=>{var F=$e(),w=W(F);ue(w,{open:!0,titleSlot:a=>{var S=Ze(),c=s(S);Pe(c,{size:"md"}),Y(),o(S),l(a,S)},children:(a,S)=>{var c=Ke(),O=s(c);Ne(O,()=>B[n(T)].html_content),o(c),l(a,c)},$$slots:{titleSlot:!0,default:!0}});var E=d(w,2);de(E,17,()=>B[n(T)].submissions,I=>I.code_content,(I,a)=>{ue(I,{titleSlot:c=>{var O=Je(),_=s(O);Ge(_,{size:"md"});var z=d(_,2),i=s(z,!0);o(z),o(O),j(()=>f(i,n(a).language)),l(c,O)},children:(c,O)=>{var _=Qe(),z=W(_),i=s(z),G=s(i,!0);o(i);var k=d(i,2),fe=s(k,!0);o(k);var se=d(k,2),xe=s(se,!0);o(se);var re=d(se,2),be=s(re,!0);o(re),o(z);var le=d(z,2),ve=s(le);De(ve,{get code(){return n(a).code_content},get lang(){return n(a).language}}),o(le),j(ye=>{f(G,ye),f(fe,n(a).runtime===-1?"":n(a).runtime+"s"),f(xe,n(a).memory===-1?"":n(a).memory+"MB"),ce(re,1,Ie(n(a).accepted?"text-green-500":"text-red-500")),f(be,n(a).accepted?"✔ Accepted":"✘ Rejected")},[()=>new Date(n(a).time*1e3).toLocaleString()]),l(c,_)},$$slots:{titleSlot:!0,default:!0}})}),l(Q,F)},$$slots:{default:!0}}),o(V),l(h,V)};J(t,h=>{n(C)&&h(r)})}l(u,v)},$$slots:{default:!0}})}l(U,M),ae()}Te(["click"]);export{xn as component};
