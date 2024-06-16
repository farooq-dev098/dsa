/**
 * 
 * Problem 1
 * Given an integer array, find the maximum subarray sum out of all the sub arrays.
 */

console.log("=====================================")
console.log(" Maximum Sub Array Sum -  Brute Force")
console.log("=====================================")

/**
 * T:C O(n^3)
 * S:C O(1)
 */

function maximumSubArraySum1(A){
    let ans = 0;

    //get all sub-array
    for(let s=0; s<A.length; s++){
        for(let e=0; e<A.length; e++){
            let sum = 0;
            for(let i=s; i<=e; i++){
                sum += A[i];
            }
            ans = Math.max(ans, sum);
        }
    }

    return ans;

}


let A=[-2,3,4,-1,5,-10,7];
console.log(maximumSubArraySum1(A));

let A1=[-3,4,6,8,-10,2,7];
console.log(maximumSubArraySum1(A1));


console.log("===============================================================")
console.log(" Maximum Sub Array Sum -  Prefix Sum (Bcz we are repeating Sum)")
console.log("===============================================================")

/**
 * T:C O(n^2)
 * S:C O(n)
 */

function maximumSubArraySum_PrefixSum1(A){
    let n = A.length;
    let pSum = new Array(n);
    pSum[0] = A[0];

    for(let i=1; i<n; i++){
        pSum[i] = pSum[i-1] + A[i];
    }

    let maxSum = -Infinity;
    for(let i=0; i<n; i++){
        for(let j=i; j<n; j++){
            let currentSum = pSum[j-1] - pSum[i];
            if(currentSum > maxSum){
                maxSum = currentSum;
            }
        }
    }

    return maxSum;
}

let B=[-2,3,4,-1,5,-10,7];
console.log(maximumSubArraySum_PrefixSum1(B));

let B1=[-3,4,6,8,-10,2,7];
console.log(maximumSubArraySum_PrefixSum1(B1));



console.log("===============================================================")
console.log(" Maximum Sub Array Sum -  Prefix Sum (Bcz we are repeating Sum)")
console.log("===============================================================")

/**
 * T:C O(n)
 * S:C O(n)
 */

function maximumSubArraySum_PrefixSum2(A){
    let n = A.length;
    let pSum = new Array(n);
    pSum[0] = A[0];

    for(let i=1; i<n; i++){
        pSum[i] = pSum[i-1] + A[i];
    }

    let minPSum = 0;
    let maxSubArrSum = A[0];

    for(let i=0; i<n; i++){
        maxSubArrSum = Math.max(maxSubArrSum, pSum[i] - minPSum);
        minPSum = Math.min(minPSum, pSum[i])
    }

    return maxSubArrSum;
}

let C=[-2,3,4,-1,5,-10,7];
console.log(maximumSubArraySum_PrefixSum2(C));

let C1=[-3,4,6,8,-10,2,7];
console.log(maximumSubArraySum_PrefixSum2(C1));


console.log("=================================================")
console.log(" Maximum Sub Array Sum -  Carry Forward technique")
console.log("=================================================")

/**
 * T:C O(n*n)
 * S:C O(1)
 */

function maximumSubArraySum_carryForward(A){
    let ans = A[0];

    for(let s=0; s<A.length; s++){
        let sum = 0;
        for(let e=s; e<A.length; e++){
            sum += A[e];
            ans = Math.max(ans, sum);
        }
    }

    return ans;
}

let D=[-2,3,4,-1,5,-10,7];
console.log(maximumSubArraySum_carryForward(D));

let D1=[-3,4,6,8,-10,2,7];
console.log(maximumSubArraySum_carryForward(D1));


console.log("=======================================")
console.log(" Maximum Sub Array Sum -  Kadan's Algo ")
console.log("=======================================")

/**
 * T:C O(n)
 * S:C O(1)
 */

function maximumSubArraySum_kadansAlgo(A){
    let sum=0;
    let ans = Number.MIN_SAFE_INTEGER;

    for(let i=0; i<A.length; i++){
        sum = sum + A[i];
        ans = Math.max(ans, sum);

        if(sum < 0)
            sum = 0;
    }

    return ans;
}

let E=[-2,3,4,-1,5,-10,7];
console.log(maximumSubArraySum_kadansAlgo(E));

let E1=[-3,4,6,8,-10,2,7];
console.log(maximumSubArraySum_kadansAlgo(E1));

let E2=[9,2,4,2];
console.log(maximumSubArraySum_kadansAlgo(E2));


console.log("=======================================")
console.log(" Maximum Sub Array Sum ASENDING -  Kadan's Algo ")
console.log("=======================================")

function maxAscendingSum(arr) {
    if (arr.length === 0) return 0;

    let maxSum = arr[0];
    let currentSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            currentSum += arr[i];
        } else {
            maxSum = Math.max(maxSum, currentSum);
            currentSum = arr[i];
        }
    }

    maxSum = Math.max(maxSum, currentSum);
    return maxSum;
}

// Test case
let E3 = [9, 2, 4, 2];
console.log(maxAscendingSum(E3)); // Expected output: 9



/**
 * PROBLEM 2
 * Given an array where every element is 0. Find the final array after 
 * performing multiple queries.
 */


console.log("==========================================")
console.log(" Multiple Queries Operation - Brute Force ")
console.log("==========================================")

/**
 * T:C O(Q*N)
 * S:C O(1)
 */

function multipleQueries1(A, Q){

    for(let i=0; i<Q.length; i++){
        let s = Q[i][0];
        let num = Q[i][1];
        for(let j=0; j<A.length; j++){
            if(j>=s){
                A[j] = A[j] + num;
            }
        }
    }

    return A;
}

let Arr1 = [0,0,0,0,0];
let Q1 = [[1,3],[0,2],[4,1]];
console.log(multipleQueries1(Arr1, Q1))



console.log("==========================================")
console.log(" Multiple Queries Operation - Optimized ")
console.log("==========================================")

/**
 * T:C O(Q+N)
 * S:C O(1)
 */


function multipleQueries2(A, Q){
    

    for(let i=0; i<A.length; i++){
        let index = Q[i][0];
        let value = Q[i][1];

        A[index] += value;
    }

    for(let i=1; i<A.length; i++){
        A[i] += A[i-1];
    }

    return A;
}

let Arr2 = [0,0,0,0,0];
let Q2 = [[1,3],[0,2],[4,1]];
console.log(multipleQueries1(Arr2, Q2))



/**
 * PROBLEM 3
 * Given an array where every element is 0. Find the final array after 
 * performing multiple queries.
 */

console.log("=================================================")
console.log(" Multiple Queries Operation i to J - Brute Force ")
console.log("=================================================")

/**
 * T:C O(Q*N)
 * S:C O(1)
 */

function multipleQueriesItoJ1(A, Q){
    for(let i=0; i<Q.length; i++){
        let s = Q[i][0];
        let e = Q[i][1];
        let value = Q[i][2];

        for(let j=s; j<=e; j++){
            A[j] += value;
        }
    }

    return A;
}

let arr1 = [0,0,0,0,0,0,0,0];
let q1 = [[1,4,3], [0,5,-1], [2,2,4], [4,6,3]]

console.log(multipleQueriesItoJ1(arr1, q1));


console.log("=================================================")
console.log(" Multiple Queries Operation i to J - OPTIMIZED ")
console.log("=================================================")

/**
 * T:C O(Q+N)
 * S:C O(1)
 */


function multipleQueriesItoJ1_rangeSum(A, Q){
    for(let i=0; i<Q.length; i++){
        let s = Q[i][0];
        let e = Q[i][1];
        let value = Q[i][2];

        //Add value in A[s] && -value in A[e+1]

        A[s] += value;

        if(e !== A.length - 1)
            A[e+1] += (-value);
    }

    //calculate psum
    for(let i=1; i<A.length; i++){
        A[i] += A[i-1];
    }

    return A;
}

let arr2 = [0,0,0,0,0,0,0,0];
let q2 = [[1,4,3], [0,5,-1], [2,2,4], [4,6,3]]

console.log(multipleQueriesItoJ1_rangeSum(arr2, q2));



/**
 * PROBLEM 4
 * 
 * Given N buildings with height of each building. 
 * Find the rain water trapped between the buildings.
 */
console.log("==============================================")
console.log(" Water Trapped On Buildings Sum - Brute Force ")
console.log("==============================================")

/**
 * T:C O(N*N)
 * S:C O(1)
 */

function rainWaterTrapped(A){
    let ans =0;
    let n = A.length;

    for(let i=0; i<n; i++){
        //get lMax : max from [0..i]
        let lMax = A[0];
        for(let j=1; j<=i; j++){
            lMax = Math.max(lMax, A[j])
        }

        //get rMax : max from[i...n-1];
        let rMax = A[n-1];
        for(let j=n-1; j>=i; j--){
            rMax = Math.max(rMax, A[j]);
        }
        let water = Math.min(lMax,rMax) - A[i];
        ans += water;
    }

    return ans
}

let build = [5,4,2,1,3,6];
console.log(rainWaterTrapped(build));

let build2 = [2,1,3,2,1,2,4,3,2,1,3,1];
console.log(rainWaterTrapped(build2));


console.log("========================================================")
console.log(" Water Trapped On Buildings Sum - Optimized - PrefixSum ")
console.log("========================================================")

/**
 * T:C O(Q*N)
 * S:C O(1)
 */

function rainWaterTrapped_prefixSum(A) {
    let n = A.length;
    let lMax = new Array(n);
    let rMax = new Array(n);

    // Calculate the left max array
    lMax[0] = A[0];
    for (let i = 1; i < n; i++) {
        lMax[i] = Math.max(lMax[i - 1], A[i]);
    }

    // Calculate the right max array
    rMax[n - 1] = A[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rMax[i] = Math.max(rMax[i + 1], A[i]);
    }

    let ans = 0;
    // Calculate the trapped water
    for (let i = 0; i < n; i++) {
        let water = Math.min(lMax[i], rMax[i]) - A[i];
        ans += water;
    }

    return ans;
}

let build3 = [5, 4, 2, 1, 3, 6];
console.log(rainWaterTrapped_prefixSum(build3)); // Output: 9

let build4 = [2, 1, 3, 2, 1, 2, 4, 3, 2, 1, 3, 1];
console.log(rainWaterTrapped_prefixSum(build4)); // Output: 15

let build5 = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(rainWaterTrapped_prefixSum(build5)); // Output: 6




console.log("========================================================")
console.log(" Beggers Sum ")
console.log("========================================================")

function sumArrayBeggers(A, B){
    let bArr = new Array(A).fill(0);


        for(let i=0; i<B.length; i++){
            let s = B[i][0];
            let e = B[i][1];
            let money = B[i][2];

            // console.log(s, e, money)

             bArr[s-1] += money;

            if(e != A)
                bArr[e] += (-money)

            // console.log(bArr)
        }
        console.log(bArr)
        //calculate psum
        for(let i=1; i<A; i++){
            bArr[i] += bArr[i-1];
        }

        return bArr;
}


let Arr = 5
let Beg = [[1, 2, 10], [2, 3, 20], [2, 5, 25]]
console.log(sumArrayBeggers(Arr, Beg))



console.log("========================================================")
console.log(" Add 1 to Numbers & return Array ")
console.log("========================================================")

/**
 * T:C O(N)
 * S:C O(1)
 */


function addOneToNumber(A) {
    let n = A.length;
    let addOne = 1;  // We are adding 1

    // Iterate from the last digit to the first
    for (let i = n - 1; i >= 0; i--) {
        let sum = A[i] + addOne;
        if (sum >= 10) {
            A[i] = 0;  // Set current digit to 0 if sum is 10 or more
            addOne = 1;      // Continue the carry
        } else {
            A[i] = sum; // Set current digit to the sum if sum is less than 10
            addOne = 0;       // No carry needed, break the loop
            break;
        }
    }

    // If carry is still 1 after the loop, prepend 1 to the array
    if (addOne === 1) {
        A.unshift(1);
    }

    //if leading number is 0
    while (A[0] === 0) {
        A.shift();
    }

    return A;
}

// Example usage:
let input1 = [0,3,7,6,4,0,5,5,5];
console.log(addOneToNumber(input1)); // Output: [1, 2, 4]

let input2 = [9, 9, 9, 9, 9];
console.log(addOneToNumber(input2)); // Output: [1, 0, 0, 0]
