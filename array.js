// array descending order == 

// const array = [5,4,2,6,1];
// let temp;
// for(let i = 0; i<array.length-1; i++) {
//     for(let j=i+1; j<array.length; j++) {
//         if(array[i] < array[j]) {
//             temp = array[i];
//             array[i] = array[j];
//             array[j] = temp;
//         }
//     }
//     console.log(array[i]);
// }

//palindrome--

// const str = "malayalam";
// // console.log(str.length);
// let flag;
// const length = str.length;
// for(let i = 0; i<length/2; i++) {
//     if(str[i] !== str[length-i-1]){
//          flag = 1;
//         break;
//     }
// }

// if(flag == 1) {
//     console.log('no');
// }
// else {
//     console.log('yes');
// }

// print vittu poya number from 1- to - 15--

// const array = [1, 3, 5, 6, 7, 8, 10, 14, 15];

// let m = 0;

// for (i = 1; i < 16; i++) {
//     if (array[m] != i) {
//         console.log(i);
//     }
//     else {
//         m++
//     }
// }

// delete or remove duplication / repeat number from an array--

// const array = [1,3,5,5,8,9,9,9,5];
// let temp;
// for(let i= 0; i< array.length-1; i++) {
//     for(let j=i+1; j<array.length; j++) {
//         if(array[i] == array[j]){
//             temp = array[j];
//             array[j] = array[array.length-1];
//             array[array.length-1] = temp;

//             array.pop();

//             j--;
//         }
//         else {
//             continue;
//         }
//     }
// }

// console.log(array);

// prime numbers print--

// const a = [15,5,2,6,9,10,13,1, 5, 2, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21,23, 25,27,29,31];

// for(let i=0; i<a.length; i++) {
//     let flag = 0;
//     for(let j=1; j<=a[i]; j++) {
        
//         if(a[i] % j == 0) {
//             flag ++;
//         }
        

//     }
//     if(flag == 2){
//         console.log(a[i]);
//     }
// }

// for(let i=0; i<a.length; i++) {
//     let flag = false;
//     if (a[i]>1){
//         for(let j=2; j<=a[i]/2; j++) {
        
//             if(a[i] % j == 0) {
//                 flag = true
//                 break
//             }
//         }
//         if(flag == false){
//             console.log(a[i]);
//         }
//     }
// }