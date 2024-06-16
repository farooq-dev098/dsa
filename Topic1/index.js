/**
 * factorial of a number
 */


/**
 *  Brute force approach
 */

function  getFactorialCount(n){
    let count =0;

    for(let i=1; i<=n; i++){
        if(n%i === 0){
            count++;
        }
    }

    return count;
}

let A=24;
console.log(getFactorialCount(A));


/**
 * Optimized approach (non-repeating)
 */


function getFactorialCount2(n){
    let count=0;

    /**
     * prevent non-repeating
     */
    for(let i=1; i<=n/i; i++){
        
        if(n%i === 0){
            /**
             * for edge case when i & n/i are equal e.g 100 factorial has 10, 10
             */
            if(i===n/i){
                count++;
            }else{
                count = count + 2;
            }
        }
    }
    
    return count;
}

let B=24;
console.log(getFactorialCount2(B));



function antiDiagonals(A) {
    const N = A.length;
    const result = new Array(2 * N - 1);

    // Initialize the result array with undefined values
    for (let i = 0; i < result.length; i++) {
        result[i] = [];
    }

    // Fill the result array with anti-diagonals
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            const sum = i + j;
            result[sum].push(A[i][j]);
        }
    }

    // Pad each row with undefined to make them of equal length
    for (let i = 0; i < result.length; i++) {
        const len = result[i].length;
        for (let j = 0; j < N - len; j++) {
            result[i].push(undefined);
        }
    }

    return result;
}

// Test cases
const A1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(antiDiagonals(A1));

const A2 = [
    [1, 2],
    [3, 4]
];
console.log(antiDiagonals(A2));





function transpose(A) {
    const rows = A.length;
    const cols = A[0].length;
    const result = new Array(cols);

    for (let i = 0; i < cols; i++) {
        result[i] = new Array(rows);
        for (let j = 0; j < rows; j++) {
            result[i][j] = A[j][i];
        }
    }

    return result;
}

// Test cases
const AB1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(transpose(A1));

const AB2 = [
    [1, 2],
    [1, 2],
    [1, 2]
];
console.log(transpose(A2));



function rotateMatrix(matrix) {
    const n = matrix.length;
    
    // Transpose the matrix
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // Reverse each row
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n / 2; j++) {
            [matrix[i][j], matrix[i][n - 1 - j]] = [matrix[i][n - 1 - j], matrix[i][j]];
        }
    }

    return matrix;
}

// Test cases
const A122 = [
    [1, 2],
    [3, 4]
];
console.log(rotateMatrix(A1));

const A222 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(rotateMatrix(A2));
