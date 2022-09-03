const array = [];

array.push(1, 2);
array.shift()

array.unshift(3)
array.pop()

array.push(2, 4)

const newArray = array.slice(0, 2)

// console.log(array);
newArray.push(1, 4)
// newArray[0] = 100
newArray.splice(0, 1, 100)

newArray.forEach((x) => {
     x = x+2
})


console.log(newArray);
