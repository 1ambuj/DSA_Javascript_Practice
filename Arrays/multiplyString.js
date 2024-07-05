/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if(num1==0 || num2==0){
        return "0"
    }
    let number1 = num1.split('').reverse()
    let number2 = num2.split('').reverse()
    let result = new  Array(num1.length + num2.length).fill(0)
    for(let i=0 ; i<number1.length; i++){
        for(let j=0; j<number2.length ; j++){
            let product = number1[i] * number2[j]
            let sum = result[i + j] + product
            result[i+j] = sum%10
            result[i + j + 1] += Math.floor(sum / 10)
        }
    }
   while(result[result.length-1]===0){
    result.pop()
   }
   return result.reverse().join('')
   
};