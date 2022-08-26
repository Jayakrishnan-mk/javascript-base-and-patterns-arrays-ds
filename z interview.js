const array = [1,2,3,3,3,2,1,4,5,5,5];
let flag;
for(let i=0; i<array.length-1; i++) {
    flag = 0;
    for(let j=0; j<array.length; j++) {
        if(array[i] == array[j]) {
            flag++;
        }
    }
    if(flag == 1){

        console.log(array[i]);
    }
}