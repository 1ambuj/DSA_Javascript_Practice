//selection sort is a shorting algorithum means we can arrange the data in any order
//because selecftion sort take comlexity(o(n2))
function selectionsort(arr){
   for(let i=0 ; i<arr.length-1; i++){
    let min = minelment(arr,i)
    if(min !=i){
        let temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
    }
   }
   return arr
}

function minelment(arr, i){
   let min_element = i
    for(let j=i+1 ; j<arr.length; j++){
        if(arr[j]<arr[min_element]){
            min_element = j
        }
    }
    return min_element
}

const result = selectionsort([6,8,3,9,2])
console.log(result)