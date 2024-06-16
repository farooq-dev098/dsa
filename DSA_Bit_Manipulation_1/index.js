function countPairsWithBit(A, B) {
    // let setPair = new Array()

    // for(let i=0; i<B.length; i++){
    //     for(let j=0; j<A.length; i++){
    //         if ((A[j] & (1 << B[i])) !== 0) {
    //             setPair.push(A[j])
    //         }
    //     }
    // }

    // return setPair;

    // const maxBit = 31; // Considering 32-bit integers
    
    // const bitCount = Array.from({ length: maxBit + 1 }, () => 0);

    
    // // Preprocess: Count numbers with each bit set
    // A.forEach(num => {
    //     for (let bit = 0; bit <= maxBit; bit++) {
    //         if ((num & (1 << bit)) !== 0) {
    //             bitCount[bit]++;
    //         }
    //     }
    // });
    // console.log("bitCount", bitCount)
    
    // // Process queries
    // return B.map(bit => {
    //     const count = bitCount[bit];
    //     // Return the count directly since the problem is about how many numbers have the bit set
    //     return count;
    // });
}

// Example usage:
// const A1 = [1, 2, 3];
// const B1 = [0, 1];
// console.log(countPairsWithBit(A1, B1)); // Output: [2, 2]

// const A2 = [2, 4, 7, 11];
// const B2 = [3];
// console.log(countPairsWithBit(A2, B2)); // Output: [2]

function countPairsWithBit(A, B) {
    let results = [];
    
    // Iterate over each query in B
    for (let i = 0; i < B.length; i++) {
        let count = 0;
        
        // Check each number in A
        for (let j = 0; j < A.length; j++) {
            // Check if the B[i] bit is set in A[j]
            if ((A[j] & (1 << B[i])) !== 0) {
                count++;
            }
        }
        
        // Store the count of numbers with the B[i] bit set
        results.push(count);
    }
    
    return results;
}

// Example usage:
const A1 = [1, 2, 3];
const B1 = [0, 1];
console.log(countPairsWithBit(A1, B1)); // Output: [2, 2]

const A2 = [2, 4, 7, 11];
const B2 = [3];
console.log(countPairsWithBit(A2, B2)); // Output: [2]
