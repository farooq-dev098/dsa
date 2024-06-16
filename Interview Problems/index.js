/**
 * < Question > : Given a binary array [ ]. We can at most replace a single 0 with 1. 
 * Find the maximum consecutive 1's we can get in the array[ ] after the replacement. 
 * Constraints: 1 ≤ N ≤ 10^3
 * [  1, 1,  1,  0,  1,  1,  0,  1, 1,  1,  1,  0,  0, 1, 1, 0, 1  ]
 */


console.log("===========================")
console.log("     max consecutive ones  ")
console.log("===========================")

function findMaxConsecutiveOnes(A){
    let totalOnes = 0;
    const stringArr = A.split('');
    const n = stringArr.length;

    // Count total number of 1's in the string
    for (let i = 0; i < n; i++) {
        if (stringArr[i] === '1') {
            totalOnes++;
        }
    }

    // If the entire string is made of 1's, return its length
    if (totalOnes === n) {
        return n;
    }

    let ans = 0;

    // Traverse the string to calculate potential maximum consecutive 1's
    for (let i = 0; i < n; i++) {
        if (stringArr[i] === '0' && stringArr.includes('1')) {
            let l = 0;
            let r = 0;

            // Count 1's to the left of the 0
            let j = i - 1;
            while (j >= 0 && stringArr[j] === '1') {
                l++;
                j--;
            }

            // Count 1's to the right of the 0
            let k = i + 1;
            while (k < n && stringArr[k] === '1') {
                r++;
                k++;
            }

            // Calculate the potential max length if swapping the 0
            ans = Math.max(ans, l + 1 + r);
        }
    }

    // Ensure the answer doesn't exceed the total number of 1's
    return Math.min(ans, totalOnes);
}


const A = '00000011111111' //7
console.log(findMaxConsecutiveOnes(A));

const B = '01110110110';
console.log(findMaxConsecutiveOnes(B)); //6

const C = '000000000000000';
console.log(findMaxConsecutiveOnes(C)); //0

const D = '11010110000000000';
console.log(findMaxConsecutiveOnes(D));



console.log("==============================")
console.log("majority element in an array  ")
console.log("==============================")

function getMajorityElement(A){
    let majorityIndex = 0;
    let count = 0;

    if (A.length <= 1) {
        return A[0];
    }

    for(let i=0; i<A.length; i++){
        if(count === 0){
            majorityIndex = i;
            count = 1;
        }else{
            if(A[i] === A[majorityIndex]){
                count ++;
            }else{
                count --;
            }
        }
    }

    //check majority element has occurance > N/2
    count = 0;
    for(let i=0; i<A.length; i++){
        if(A[i] === A[majorityIndex]){
            count++;
        }
    }

    if(count > A.length/2)
        return Number(A[majorityIndex]);
    else
        return -1;

}

let E = [2, 1, 2];
console.log(getMajorityElement(E)); //2

let F=[1, 1, 1];
console.log(getMajorityElement(F)); //1

let G=[100]
console.log(getMajorityElement(G)); //100


console.log("==============================")
console.log("majority element 2 in an array  ")
console.log("==============================")

function getMajorityElement2(nums) {
    let candidate = nums[0];
    let count = 0;

    // Step 1: Find the candidate for majority element
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
            count = 1;
        } else {
            if (num === candidate) {
                count++;
            } else {
                count--;
            }
        }
    }

    // Step 2: Verify if the candidate is actually the majority element
    count = 0;
    for (let num of nums) {
        if (num === candidate) {
            count++;
        }
    }

    // Given the problem constraints, we assume the majority element always exists
    return candidate;
}

// Example usage
let H = [2, 1, 2];
console.log(getMajorityElement2(H)); // Output: 2

let I = [1, 1, 1];
console.log(getMajorityElement2(I)); // Output: 1

let J = [100];
console.log(getMajorityElement2(J)); // Output: 100
