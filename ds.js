
const array = [9,7,6,0,5,2,4];
const target = 10;
let new_ar =[];
for(let i=0; i<array.length; i++){
    for(let j=i+1; j<array.length; j++){
        if(array[i] + array[j] == target){
            new_ar.push(array[i], array[j]);
        }
    }
}
console.log(new_ar);