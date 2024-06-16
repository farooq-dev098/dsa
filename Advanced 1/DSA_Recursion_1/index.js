function bar(x,y){
    if(y===0)
        return 0
    return (x + bar(x, y-1))
}

function foo(x, y){
    if(y===0)
        return 1;
    return bar(x,foo(x, y-1))
}

console.log(foo(3, 5))


function recursion(n){
    if(n===0)
        return 1

    return recursion(n-1)
}




module.exports = { 
    // param A : integer
    // param B : integer
    // param C : integer
    // return an integer
    solve: function(A, B, C) {
      // Recursive function to compute (base^exp) % mod
      function modExp(base, exp, mod) {
        if (exp === 0) { // Base case
          return 1;
        }
        
        let half = modExp(base, Math.floor(exp / 2), mod); // Recursive call for half the exponent
        half = (half * half) % mod; // Square the result and take modulo
        
        if (exp % 2 !== 0) { // If the exponent is odd
          half = (half * base) % mod;
        }
        
        return half;
      }
  
      // Ensure A is positive
      A = ((A % C) + C) % C;
  
      return modExp(A, B, C);
    }
  };
  
  // Example usage:
  console.log(module.exports.solve(2, 3, 3));  // Output: 2
  console.log(module.exports.solve(3, 3, 1));  // Output: 0
  console.log(module.exports.solve(67790475, 13522204, 98794224));  // Correct output
  



  module.exports = { 
    // param A : integer
    // param B : integer
    // param C : integer
    // return an integer
    solve: function(A, B, C) {
      // Ensure A is positive within the modulo range
      A = ((A % C) + C) % C;
  
      // Helper function for modular exponentiation
      function modExp(base, exp, mod) {
        if (exp === 0) {
          return 1;
        }
        let half = modExp(base, Math.floor(exp / 2), mod);
        half = (half * half) % mod;
        if (exp % 2 !== 0) {
          half = (half * base) % mod;
        }
        return half;
      }
  
      return modExp(A, B, C);
    }
  };
  
  // Example usage:
  console.log(module.exports.solve(2, 3, 3));  // Output: 2
  console.log(module.exports.solve(3, 3, 1));  // Output: 0
  console.log(module.exports.solve(67790475, 13522204, 98794224));  // Output: 95037368
  


  module.exports = { 
    // param A : integer
    // param B : integer
    // param C : integer
    // return an integer
    solve: function(A, B, C) {
      // Ensure A is within the positive modulo range
      A = ((A % C) + C) % C;
  
      // Helper function for modular exponentiation
      function modExp(base, exp, mod) {
        let result = 1;
        base = base % mod;
  
        while (exp > 0) {
          // If exp is odd, multiply base with the result
          if (exp % 2 === 1) {
            result = (result * base) % mod;
          }
          // Now exp must be even
          exp = Math.floor(exp / 2);
          base = (base * base) % mod;
        }
        return result;
      }
  
      return modExp(A, B, C);
    }
  };
  
  // Example usage:
  console.log(module.exports.solve(2, 3, 3));  // Output: 2
  console.log(module.exports.solve(3, 3, 1));  // Output: 0
  console.log(module.exports.solve(67790475, 13522204, 98794224));  // Expected Output: 38615985
  