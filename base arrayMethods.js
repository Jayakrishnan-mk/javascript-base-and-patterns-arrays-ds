// ............every....................................................
// const a = [1,2,3,4];
// console.log( a.every(tried) );
// function tried(x) {
//     return x>0
// }

// ...........fill.....................................................
// const a = [1,2,3,4];
// console.log( a.fill(1) );

// ...........filter.....................................................
// const a = [1,2,3,4];
// console.log( a.filter(checking) );
// function checking(x) {
//     return x > 0
// }

// ...........find.....................................................
// const a = [1,2,3,4];
// console.log( a.find(checking) );
// function checking(x) {
//     return x > 2
// }

// ...........findIndex.....................................................
// const a = [1,2,3,4];
// console.log( a.findIndex(checking) );
// function checking(x) {
//     return x > 2
// }

// ...........forEach.....................................................
// const a = [2,3,5,4,23];
// let sum = 0;
// a.forEach(hello)
// function hello(x){
//     sum = sum+x;
// }

// console.log(sum);

// ...........map.....................................................
// const a = [1,2,3,5,6,7]

// const b = a.map(x);
// function x(z){
//     z= z*2;
//     return z
// }
// console.log(b);

// ...........from....................................................
// const a = [1,2,3,5,6,7]

// const b = Array.from(a.map((x) => {return x*2}));

// console.log(b);

// ...........includes....................................................
// const a = [1,2,3,5,6,7]

// const b = a.includes(3)

// console.log(b);

// ...........indexof....................................................
// const a = [1,2,3,5,6,7]

// const b = a.indexOf(3)

// console.log(b);

// ...........isarray....................................................
// const a = [1,2,3,5,6,7]

// const b = Array.isArray(a)

// console.log(b);


// ...........join....................................................
// const a = [1,2,3,5,6,7]

// const b = a.join()

// console.log(b);
// console.log(typeof(b));

// ...........keys....................................................
// const a = [1,2,3,5,6,7]

// const b = a.keys()

// for(x of b){
//     console.log(x);
// }

// ...........lastIndexOf....................................................
// const a = [1,2,3,4,2,5];

// const b = a.lastIndexOf(2);
// console.log(b);

// ...........length....................................................
// const a = [1,2,3,4,2,5];

// const b = a.length;
// console.log(b);

// ...........pop....................................................
// const a = [1,2,3,4,2,5];

// a.pop();
// console.log(a);

// ...........push....................................................
// const a = [1,2,3,4,2,5];

// a.push(6);
// console.log(a);

// ...........reduce....................................................
// const a = [1,2,3,4,2,5];

// const g = a.reduce(cb, 0);

// function cb (total, num) {
//     return total + num;
// }
// console.log(g);

// ...........reduceright....................................................
// const a = [1,2,3,4,2,5];

// const g = a.reduceRight(accum, 0);

// function accum (total, num) {
//     return total + num;
// }
// console.log(g);

// ...........reverse....................................................
// const a = [1,2,3,4,2,5];

// const g = a.reduceRight(accum, 0);

// function accum (total, num) {
//     return total + num;
// }
// console.log(g);

// ...........shift....................................................
// const a = [1,2,3,4,2,5];

// const g = a.shift();

// console.log(a);

// ...........unshift....................................................
// const a = [1,2,3,4,2,5];

// const g = a.unshift(0);

// console.log(a);

// ...........slice....................................................
// const a = [1,2,3,4,2,5];

// const g = a.slice(3);

// console.log(g);

// ...........splice....................................................
// const a = [1,2,3,4,2,5];

// const g = a.splice(3, 3, "apple", "orange");

// console.log(g);
// console.log(a);

// ...........some....................................................
// const a = [1,2,3,4,2,5];

// const g = a.some(somee);

// function somee(x) {
//     return x > 3; 
// }
// console.log(g);

// ...........sort in letters....................................................
// const a = ['aa', 'bza','zed', 'ddez', 'qas', 'wes'];

// const g = a.sort();

// console.log(g);

// ...........sort in numbers....................................................
// const a = [2,23,1,5,63,7,4,3];

// const g = a.sort(function(a,b){return a-b});

// console.log(g);

// ...........toString...................................................
// const a = [22315633];

// const g = a.toString();

// console.log(g);
// console.log(typeof(g));

// ...........valueOf...................................................
// const a = [22315633];

// const g = a.valueOf();

// console.log(a);
// console.log(g);
