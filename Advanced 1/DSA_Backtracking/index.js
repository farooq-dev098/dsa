/**
 * Question - Given an integer A, write a function to 
 * generate all valid parentheses of length 2*A
 */

console.log('=========================================')
console.log('   Generate All the Valid Parenthesis    ')
console.log('=========================================')

/**
 * TC: <= O(2^A)
 * SC: O(2A) = O(A)
 */

function generateValidParenthesis(A){

    function getParenthesisCount(A, str, openCount, closeCount, result){
        if(str.length === 2*A){
            result.push(str);
            return;
        }

        if(openCount < A)
            getParenthesisCount(A, str+'(', openCount+1, closeCount, result)

        if(closeCount < openCount)
            getParenthesisCount(A, str+')', openCount, closeCount+1, result)
    }
    const result = [];
    getParenthesisCount(A, '', 0, 0, result);
    return result;
}

console.log(generateValidParenthesis(4))


/**
 * Question - Given an array with distinct integers.
 * Print all the subsets using recursion.
 */

console.log('================================')
console.log('   Generate All Subsets         ')
console.log('================================')

/**
 * TC: <= O(2^A)
 * SC: O(2A) = O(A)
 */


function subSets(A){

    function getSubSets(A, result, index, current){
        if(index === A.length){
            result.push([...current]);
            return;
        }

        // Include the current element
        current.push(A[index]);
        getSubSets(A, result, index+1, current);

        // Exclude the current element
        current.pop();
        getSubSets(A, result, index+1, current);
    }

    const result = [];
    getSubSets(A, result, 0, []);
    return result;
}

const A = [9, -20, -11, -8, -4, 2, -12, 14, 1, -18];
console.log(subSets(A))


console.log('==================================')
console.log('   Generate All Subsets 2         ')
console.log('==================================')

function subSets2(A){
    // Sort the array to ensure non-descending order of elements within subsets
    A.sort((a, b) => a - b);

    const result = [];

    function generateSubsets(index, current) {
        // Push a copy of the current subset to the result
        result.push([...current]);

        for (let i = index; i < A.length; i++) {
            // Include the current element
            current.push(A[i]);
            // Move to the next element
            generateSubsets(i + 1, current);
            // Exclude the current element and backtrack
            current.pop();
        }
    }

    generateSubsets(0, []);

    // Sort the final list of subsets lexicographically
    result.sort();

    return result;
}

const A1 = [9, -20, -11, -8, -4, 2, -12, 14, 1, -18];
console.log(subSets2(A1))




console.log('===========================================')
console.log('   Generate All Subsets 2 Lexical Sort     ')
console.log('===========================================')


function subsets(A){
    const result = [];
    
    A.sort((a, b) => a - b);

    function getSubSets(index, current) {
        if (index === A.length) {
            result.push([...current]);
            return;
        }

        // Not taking the current element
        getSubSets(index + 1, current);

        // Taking the current element
        current.push(A[index]);
        getSubSets(index + 1, current);
        current.pop(); // Backtrack
    }

    getSubSets(0, []);

    // Sort the result lexicographically
    result.sort((a, b) => {
        for (let i = 0; i < Math.min(a.length, b.length); i++) {
            if (a[i] !== b[i]) {
                return a[i] - b[i];
            }
        }
        return a.length - b.length;
    });

    return result;
}
const A2 = [9, -20, -11, -8, -4, 2, -12, 14, 1, -18];
console.log(subSets2(A2))

/**
 * Problem Description
 * Given an integer array A of size N denoting collection of numbers , return all possible permutations.
 * NOTE:
 *  No two entries in the permutation sequence should be the same.
 *  For the purpose of this problem, assume that all the numbers in the collection are unique.
 *  Return the answer in any order
 */

console.log('===========================================')
console.log('               Integer Permutation         ')
console.log('===========================================')

function permutationInters(A){
    const result = [];

        function getPermutation(A, index, visited, current) {
            if (index === A.length) {
                result.push([...current]); // Push a copy of current
                return;
            }

            for (let i = 0; i < A.length; i++) {
                // If the element is not used yet
                if (!visited[i]) {
                    // Do
                    visited[i] = true;
                    current.push(A[i]);

                    // Recur
                    getPermutation(A, index + 1, visited, current);

                    // Backtrack
                    visited[i] = false;
                    current.pop();
                }
            }
        }

        getPermutation(A, 0, new Array(A.length).fill(false), []);
        
        return result;
}