const array = [0, 1, 2, 4, 5, 7];
let count = 0;
const arr= [];
for (let i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
        if (array[j] == (i + 1)) {
            count++;
            i++;
        }
        
    }
    // console.log(' ');
    if (count != 0) {
        arr.push(array[i], "->", array[j]);
    }
    else {

        arr.push(array[i]);
    }
}
console.log(arr);
console.log('git pushed');