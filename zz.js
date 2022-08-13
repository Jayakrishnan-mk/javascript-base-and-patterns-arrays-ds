const array = [0, 1, 2, 4, 5, 7];
let count = 0;
for (let i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
        if (array[j] == (i + 1)) {
            count++;
            i++;
        }
        
    }
    console.log(' ');
    if (count != 0) {
        console.log(array[i], "->", array[j]);
    }
    else {

        console.log(array[i]);
    }
}