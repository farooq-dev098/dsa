/**
 * PROBLEM I
 * You are given a collection of intervals A in a 2-D array format, where each interval is represented by a pair of integers `[start, end]`. 
 * The intervals are sorted based on their start values.
 * 
 * Your task is to merge all overlapping intervals and return the resulting set of non-overlapping intervals.
 * 
 */


console.log("===========================================")
console.log("        Merge Overlapping Intervals        ")
console.log("===========================================")

/**
 * T:C O(N)
 * S:C O(1)
 */


function mergeOverlappingIntervals(A){
    let n = A.length;
    let start1 = A[0][0];
    let end1  = A[0][1];
    let ans = new Array();

    for(let i=0; i<n; i++){
        let start2 = A[i][0];
        let end2 = A[i][1];
        
        if(end1 >= start2){
            start1 = Math.min(start1, start2);
            end1 = Math.max(end1, end2);
        }else{
            ans.push([start1, end1]);
            start1 = start2
            end1 = end2;
        }
    }

    ans.push([start1, end1]);
    return ans;
}


let A = [[1,2],[1,4],[5,6],[6,8],[7,10],[8,9],[12,14]];
console.log(mergeOverlappingIntervals(A));




console.log("===============================================")
console.log("        Merge Non-Overlapping Intervals        ")
console.log("===============================================")

/**
 * T:C O(N)
 * S:C O(1)
 */


function mergeNonOverlappingIntervals(A, B){
    let n = A.length;
    let sNew = B[0];
    let eNew = B[1];

    let ans = new Array();

    for(let i=0; i<n; i++){
        let start = A[i][0];
        let end = A[i][1];

        if(end < sNew){  //no overlapping from start
            ans.push([start, end])
        }else if(eNew < start){ //no overlapping from end
            ans.push([sNew, eNew]);
            for(let j=i; j<n; j++){
                ans.push([A[j][0], A[j][1]])
            }

            return ans;
        }else{   //overlapping
            sNew = Math.min(sNew, start);
            eNew = Math.max(eNew, end);
        }
    }

    ans.push([sNew, eNew]);
    return ans;
}


let A1 = [[1,5],[6,10],[9,12]];
let B1 = [4,7];
console.log(mergeNonOverlappingIntervals(A1, B1))

let A2 = [[1,3],[4,7],[10,14],[16,19],[21,24],[27,30],[32,35]];
let B2 = [10,22];
console.log(mergeNonOverlappingIntervals(A2, B2))



console.log("===============================================")
console.log("   Find missing integer in given array range   ")
console.log("===============================================")

/**
 * T:C O(N)
 * S:C O(1)
 */

function missingIntegerInArray(A) {
    let n = A.length;
    let i = 0;

    while (i < n) {
        if (A[i] >= 1 && A[i] <= n && A[i] !== A[A[i] - 1]) {
            // Swap A[i] with A[A[i] - 1]
            let correctIndex = A[i] - 1;
            [A[i], A[correctIndex]] = [A[correctIndex], A[i]];
        } else {
            i++;
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (A[i] !== i + 1) {
            return i + 1;
        }
    }

    return n + 1;
}

let A3 = [-3, -7, 1, 10, 3, 8, 2];
console.log(missingIntegerInArray(A3)); // Output: 4




