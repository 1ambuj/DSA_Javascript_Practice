const arr = [5 ,4 ,8 ,6]
let min = arr[0]
for(let i=0; i<arr.length;i++){
    if(arr[i]<min){
        min = arr[i]
    }
}
console.log(min)