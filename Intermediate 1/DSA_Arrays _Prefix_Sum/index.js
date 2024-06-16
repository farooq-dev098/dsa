/**
 * Arrays - Prefix Sum
 */

/**
 * Problem Find sum of elements from the given query
 * N is the array of integers
 * Q is the 2-D array of positive numbers
 */

function querySum(A, Q){

    for(let i=0; i<Q.length; i++){
        let l = Q[i][0];
        let r = Q[i][1];

        let sum = 0;
        for(let j=l; j<=r; j++){
            sum += A[j];
        }
        console.log(sum)
    }

}

let A = [-3,6,2,4,5,2,8,-9,3,1];
let Q = [
    [4,8],
    [3,7],
    [1,3],
    [0,4],
    [7,7]
];

querySum(A, Q);

/**
 * above solution will give TLE
 * O(Q*N)
 * O(1)
 */


console.log("=====================================")
console.log("         Prefix Sum Problem 1        ")
console.log("=====================================")

/**
 * Range Sum Query - Immutable
 * Given an integer array nums, handle multiple queries of the form: 
 * sumRange(i, j) which returns the sum of the elements of nums 
 * between indices i and j inclusive
 */

function sumInRange(A, Q){
    let pSum = new Array(A.length);
    pSum[0] = A[0];

    for(let i=1; i<A.length; i++){
        pSum[i] = pSum[i-1] + A[i];        
    }

    console.log("pSum", pSum);

    for(let i=0; i<Q.length; i++){
        let l=Q[i][0];
        let r=Q[i][1];

        if(l===0){
            console.log(pSum[r]);
        }else{
            console.log(pSum[r]-pSum[l-1]);
        }
    }
}

let A3 = [-2, 0, 3, -5, 2, -1];
let Q3 = [[0, 2], [2, 5], [0, 5]];

sumInRange(A3, Q3);

console.log("==============================================================")
console.log("         Sum of all even indexed elements - Bruteforce        ")
console.log("==============================================================")

function sumOfEvenIndexedBruteForce(A, Q){


    for(let i=0; i<Q.length; i++){
        let l = Q[i][0];
        let r = Q[i][1];

        let sum = 0;
        for(let j=l; j<=r; j++){
            if(j%2 === 0){
                sum += A[j];
            }
        }

        console.log(sum)
    }
}

let Arr1 = [2,3,1,6,4,5];
let Qr1 = [[1,3], [2, 5], [0, 4], [3,3]];
sumOfEvenIndexedBruteForce(Arr1, Qr1);


console.log("==============================================================")
console.log("         Sum of all even indexed elements - Optimized         ")
console.log("==============================================================")

function sumOfEvenIndexedBruteForce(A, Q){


    for(let i=0; i<Q.length; i++){
        let l = Q[i][0];
        let r = Q[i][1];

        let sum = 0;
        for(let j=l; j<=r; j++){
            if(j%2 === 0){
                sum += A[j];
            }
        }

        console.log(sum)
    }
}

let Arr = [2,3,1,6,4,5];
let Qr = [[1,3], [2, 5], [0, 4], [3,3]];
sumOfEvenIndexedBruteForce(Arr, Qr);




console.log("=================================================")
console.log("         Prefix Sum Problem 2 Pivot Index        ")
console.log("=================================================")

/**
 * Find Pivot Index
 * Problem: Given an array of integers nums, find the pivot index. 
 * The pivot index is the index where the sum of all the numbers to 
 * the left of the index is equal to the sum of all the numbers 
 * to the right of the index.
 */

function pivotIndex(A){
    let n = A.length;
    let pSum = new Array(n);
    pSum[0] = A[0];

    for(let i=1; i<n; i++){
        pSum[i] = pSum[i-1] + A[i];
    }

    // console.log("pSum", pSum);

    //prefixSum = pf[r] - pf[l-1]; 

    for(let i=0; i<pSum.length; i++){
        let lSum = 0;
        let rSum = 0;

        if(i==0){
            lSum = pSum[i];
        }else{
            lSum = pSum[i] - pSum[i-1]
        }


        if(i===n){
            rSum = pSum[i];
        }else{
            rSum = pSum[n-1] - pSum[i]
        }

        // console.log("rSum-rSum", lSum, rSum)

        if(lSum === rSum){
            return i;
        }
    }
    
}

let A4 = [1, 7, 3, 6, 5, 6];
console.log(pivotIndex(A4))
