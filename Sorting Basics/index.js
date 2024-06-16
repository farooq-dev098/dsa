
//Problem 1: Minimum Cost to remove all elements

/**
 * 
 * To get the minimum cost to remove an element at ith index
 * (i+1) * arr[i];
 */

function minCost(A){

    //sort descending
    A = A.sort((a,b)=>(b-a)); // T:C= n log n

    let ans = 0;
    for(let i=0; i<A.length; i++){
        ans += (i+1) * A[i];
    }

    return ans;

}

let A = [2,1,4];
console.log(minCost(A))

let B=[4,6,1];
console.log(minCost(B))

let C=[3,5,1,-3];
console.log(minCost(C))

/**
 * ================
 * T:C
 * O(n log n + n)
 * O(n log n)
 * ================
 * S:C
 * O(1)
 */


console.log('=============================')
console.log(' Noble Integers: - Brute Force')
console.log('=============================')



/**
 * =======================================================================
 *      Noble Integers :- Count of smaller elements is equal to itself
 */



/**
 * Brute Force Approach
 * ================
 * T:C
 * O(n*n)
 * ================
 * S:C
 * O(1)
 */

function nobleElement(A){
    let ans = 0;
    for(let i=0; i<A.length; i++){
        let count = 0;

        /*
            count smaller elements
            its also a repeating part so need to optimize this
        */
        for(let j=0; j<A.length; j++){
            if(A[j] < A[i]) count ++;
        }

        if(count === A[i]) ans++;
    }

    return ans;
}

let D = [1,-5,3,5,-10,4];
console.log(nobleElement(D))


let E = [-3,0,2,5];
console.log(nobleElement(E))


console.log('=============================')
console.log(' Noble Integers: - Optimized')
console.log('=============================')

/**
 * Brute Force Approach
 * ================
 * T:C
 * O(n*n)
 * ================
 * S:C
 * O(1)
 */

function nobleElement2(A){
    A=A.sort((a, b) => a-b);
    let ans = 0;
    for(let i=0; i<A.length; i++){
        if(i === A[i]) ans++;
    }

    return ans;
}

let F = [1,-5,3,5,-10,4];
console.log(nobleElement(F))


let G = [-3,0,2,5];
console.log(nobleElement(G))

/**
 * In sorted array
 * All smaller elements for element "i" will be [0, i-1]
 * Index gives me count of smaller elements
 * if index === arr[i] -> noble element
 */




console.log('=============================')
console.log(' Not Noble Integers: - Optimized')
console.log('=============================')

function notNobleElement(A){
    A=A.sort((a, b) => a-b);
    console.log("sorted", A)
    for(let i=0; i<A.length; i++){
        if((A.length - i)-1 === A[i]) 
            return 1;
    }

    return -1;
}

let H = [3, 2, 1, 3];
console.log(notNobleElement(H))


let I = [1, 1, 3, 3];
console.log(notNobleElement(I))






console.log('=============================')
console.log('        Selection Sort       ')
console.log('=============================')


function selectionSort(A){
    let minIndex;

    for(let i=0; i<A.length; i++){
        //set min-index to ist elem of unsorted part

        minIndex=i;
        for(let j=i+1; j<A.length; j++){
            if(A[j] < A[minIndex]){
                minIndex = j;
            }
        }

        //swap min element with element at min position
        [A[i], A[minIndex]] = [A[minIndex], A[i]]
    }
    return A;
}


let J = [5,6,4,2];
console.log(selectionSort(J))



console.log('=============================')
console.log('        Selection Sort B Swaps      ')
console.log('=============================')

function selectionSortBSwaps(A, B){
    for(let i=0; i<B; i++){
        let minIndex = i;
        for(let j=i+1; j<A.length; j++){
            if(A[i] > A[j]){
                minIndex=j;
            }
        }

        [A[i], A[minIndex]] = [A[minIndex], A[i]]
    }
    console.log(A)
    return A[B-1];
}

// let A1 = [2, 1, 4, 3, 2]
// let B1 = 3;

// console.log(selectionSortBSwaps(A1, B1));

// let A2 = [2, 1, 4, 3, 2]
// let B2 = 3;

// console.log(selectionSortBSwaps(A2, B2));

let A3 = [8,16,80,55,32,8,38,40,65,18,15,45,50,38,54,52,23,74,81,42,28,16,66,35,91,36,44,9,85,58,59,49,75,20,87,60,17,11,39,62,20,17,46,26,81,92]
let B3 = 9;

console.log(selectionSortBSwaps(A3, B3));



console.log('=============================')
console.log('        Selection Sort kthsmallest      ')
console.log('=============================')

function kthsmallest(A, B) {
    for (let i = 0; i < B; i++) {
        let min_idx = i;
        for (let j = i + 1; j < A.length; j++) {
            if (A[j] < A[min_idx]) {
                min_idx = j;
            }
        }
        [A[i], A[min_idx]] = [A[min_idx], A[i]];
    }
    console.log(A)
    return A[B-1];
}

// Example usage
let A4 = [8,16,80,55,32,8,38,40,65,18,15,45,50,38,54,52,23,74,81,42,28,16,66,35,91,36,44,9,85,58,59,49,75,20,87,60,17,11,39,62,20,17,46,26,81,92];
let B4 = 9;

console.log(kthsmallest(A4, B4)); // Output: 17



console.log('=============================')
console.log('        toggle characters    ')
console.log('=============================')
function toggleCharacter(A) {
    let chars = A.split('');
    for (let i = 0; i < chars.length; i++) {
        let charCode = chars[i].charCodeAt(0);
        if (charCode >= 65 && charCode <= 90) { // Check for uppercase letters
            chars[i] = String.fromCharCode(charCode + 32); // Convert to lowercase
        } else if (charCode >= 97 && charCode <= 122) { // Check for lowercase letters
            chars[i] = String.fromCharCode(charCode - 32); // Convert to uppercase
        }
    }
    return chars.join('');
}

let str1 = "Hello";
console.log(toggleCharacter(str1)); // Output: hELLO


console.log('=============================')
console.log('        reverse string    ')
console.log('=============================')
function reverseString(A){
    let str = A.split('');
    let reverStr = '';
    for(let i=str.length-1; i>=0; i--){
        reverStr += str[i];
    }

    return reverStr;
}

let str2 = "Hello";
console.log(reverseString(str2)); // Output: olleH



console.log('=============================')
console.log('  check palindrome string    ')
console.log('=============================')

function checkPalindrome(A){
    let str = A.split('');
    let i =0;
    let j=str.length-1;

    while(i<j){
        if(str[i] !== str[j]){
            return false;
        }

        i++;
        j--;
    }

    return true;
}

let str3 = "madam";
console.log(checkPalindrome(str3)); // Output: true

let str4 = "hello";
console.log(checkPalindrome(str4)); // Output: false


console.log('=============================')
console.log('  check palindrome string within range    ')
console.log('=============================')

function checkPalindromeInRange(A, S, E){
    let str = A.split('');
    let i =S;
    let j=E;

    while(i<j){
        if(str[i] !== str[j]){
            return false;
        }

        i++;
        j--;
    }

    return true;
}

let str5 = "gsfmadambhd";
let S1 = 3;
let E1 = 7;
console.log(checkPalindromeInRange(str5, S1, E1)); // Output: true

let S2 = 3;
let E2 = 5;
console.log(checkPalindromeInRange(str5, S2, E2)); // Output: true



console.log('=================================================')
console.log('  longest palindrome string length  brute force  ')
console.log('=================================================')

function longestPalindromeLength(A){
    let ans = 0;
    let n = A.length;

    for(s=0; s<n; s++){
        for(let e=s; e<n; e++){
            if(checkPalindromeInRange(A, s, e)){
                subLength = e-s+1;
                ans = Math.max(ans, subLength);
            }
        }
    }

    return ans;
}

let str6 = "anmadamm";
console.log(longestPalindromeLength(str6));


console.log('=================================================')
console.log('  longest palindrome string length  optimized    ')
console.log('=================================================')

function palindromeLength(A, s, e){
    let str = A.split('');

    while(A[s] === A[e] && A[s] >=0 && A[e] < A.length){
        s--;
        e++;
    }

    return e-s-1;
}

let str7 = "anmadamm";
console.log(palindromeLength(str7));


console.log('=================================================')
console.log('  longest palindrome string length  optimized    ')
console.log('=================================================')
function longestPalindrome(A){
    let str = A.split('');
    let ans = 0;
    for(let i=0; i<str.length; i++){
        let oddLength = palindromeLength(A, str[i], str[i]);
        let evenLength = palindromeLength(A, str[i], str[i+1]);
        let maxLength = Math.max(oddLength, evenLength);
        ans = Math.max(ans, maxLength);
    }
    return ans;
}



console.log('=================================================')
console.log('  longest longestPalindromicSubstring  optimized    ')
console.log('=================================================')
function longestPalindromicSubstring(A) {
    let n = A.length;
    // Create a 2D dp array and initialize all elements as false.
    let dp = Array.from({length: n}, () => Array(n).fill(false));
    let maxLength = 1;
    let start = 0;

    // All substrings of length 1 are palindromes
    for(let i = 0; i < n; i++) {
        dp[i][i] = true;
    }

    // Check for substring of length 2
    for(let i = 0; i < n - 1; i++) {
        if(A[i] === A[i+1]) {
            dp[i][i+1] = true;
            start = i;
            maxLength = 2;
        }
    }

    // Check for lengths greater than 2
    for(let len = 3; len <= n; len++) {
        for(let i = 0; i < n - len + 1; i++) {
            let j = i + len - 1;
            if(dp[i+1][j-1] && A[i] === A[j]) {
                dp[i][j] = true;
                if(len > maxLength) {
                    start = i;
                    maxLength = len;
                }
            }
        }
    }

    return A.substring(start, start + maxLength);
}


let AAA = "aaaabaaa";
console.log(longestPalindromicSubstring(AAA))


let AAAA = "abba"
console.log(longestPalindromicSubstring(AAAA))




