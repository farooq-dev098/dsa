/**
 * Given two integers a and n, find a^n using recursion.
 */

console.log("===================================")
console.log("   power function a^n - approach 1 ")
console.log("===================================")

function powerFunc(a, n){
    if(n==0)
        return 1;

    return powerFunc(a, n-1) * a;
}

let a=2;
let n=4;
console.log(powerFunc(a, n))


console.log("===================================")
console.log("   power function a^n - approach 2 ")
console.log("===================================")

function powerFunc2(a, n){
    if(n==0)
        return 1;

    let half = powerFunc2(a, Math.floor(n / 2));

    if (n % 2 === 0) {
        return half * half;
    } else {
        return half * half * a;
    }
}

let a2=2;
let n2=4;
console.log(powerFunc2(a2, n2))



function powerFuncWithMod(A, B, C){
    if(A===0)
        return 0;

    if(B===0)
        return 1;

    let ans = BigInt(powerFunc2(A, Math.floor(B / 2)));
        ans = (ans * ans) % C;


    if (n % 2 === 1) {
        ans = (ans * A) % C
    } 

    ans = (ans + C) % C

    return Number(ans)
}

