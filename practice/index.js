
// count factors of a number
function countFactors(n){
    let count =0;

    for(let i=1; i<= n/i; i++){
        if(n%i === 0){
            if(i===n/i){
                count = count + 1;
            }else{
                count = count + 2;
            }
        }
    }

    return count;
}

const n = 100;
console.log(countFactors(n))



// check if number is a prime number or not


function checkPrimeNumber(n){
    if(countFactors(n) === 2)
        return true;
    else 
        return false
}

console.log(checkPrimeNumber(23))
console.log(checkPrimeNumber(18))