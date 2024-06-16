function findSingleElement(A) {
    // This will hold the unique number we are looking for
    let result = 0n;
  
    // We need to check each bit position from 0 to 63 (for a 64-bit integer, considering BigInt)
    for (let i = 0; i < 64; i++) {
      // Count number of bits at position i
      let bitSum = 0n;
      for (let j = 0; j < A.length; j++) {
        // Convert element to BigInt before performing bitwise operations
        if ((BigInt(A[j]) & (1n << BigInt(i))) !== 0n) {
          bitSum++;
        }
      }
      // If bitSum is not a multiple of 3, it means the unique number has a '1' in this bit position
      if (bitSum % 3n !== 0n) {
        result |= (1n << BigInt(i));
      }
    }
  
    return result;
  }
  
  // Example usage
  const A = [890,992,172,479,973,901,417,215,901,283,788,102,726,609,379,587,630,283,10,707,203,417,382,601,713,290,489,374,203,680,108,463,290,290,382,886,584,406,809,601,176,11,554,801,166,303,308,319,172,619,400,885,203,463,303,303,885,308,460,283,406,64,584,973,572,194,383,630,395,901,992,973,938,609,938,382,169,707,680,965,726,726,890,383,172,102,10,308,10,102,587,809,460,379,713,890,463,108,108,811,176,169,313,886,400,319,22,885,572,64,120,619,313,3,460,713,811,965,479,3,247,886,120,707,120,176,374,609,395,811,406,809,801,554,3,194,11,587,169,215,313,319,554,379,788,194,630,601,965,417,788,479,64,22,22,489,166,938,66,801,374,66,619,489,215,584,383,66,680,395,400,166,572,11,992];
  console.log(findSingleElement(A)); // Expected output: 247n
  



  function findUniqueElements(A) {
    let val = 0n;
    for (let i = 0; i < A.length; i++) {
      val = val ^ BigInt(A[i]);
    }
  
    let indx = -1n;
    for (let i = 0; i < 64; i++) {
      if ((val & (1n << BigInt(i))) > 0n) {
        indx = BigInt(i);
        break;
      }
    }
  
    let set = 0n;
    let unset = 0n;
    for (let i = 0; i < A.length; i++) {
      if ( ( BigInt(A[i]) & (1n << indx) ) > 0n) {
        set = set ^ BigInt(A[i]);
      } else {
        unset = unset ^ BigInt(A[i]);
      }
    }
  
    return [Number(unset), Number(set)].sort();
  }
  
  // Example usage
  const B = [186,256,102,377,186,377]
  console.log(findUniqueElements(B)); // Outputs: [ 3n, 247n ]
  