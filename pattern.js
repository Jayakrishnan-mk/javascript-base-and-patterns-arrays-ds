//hollow diamond --

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 2 * 5; j++) {

        if (j == 5 - i || j == 5 + i) {
            process.stdout.write('*')

        } else {
            process.stdout.write(' ')

        }

    } console.log('');
}



// butterfly pattern--

// for (i = 1; i < 2 * 5; i++) {
//     for (j = 1; j <= 2 * 5; j++) {
//         if (i <= 5) {
//             if (j <= i || j >= ((2 * 5) + 1) - i) {
//                 process.stdout.write('*')
//             } else {
//                 process.stdout.write(' ')

//             }
//         } else {
//             if (j < ((2 * 5) + 1) - i || j > i) {
//                 process.stdout.write('*')

//             } else {
//                 process.stdout.write(' ')

//             }
//         }
//     } console.log('');
// }



// hollow increasing triangle--

// for(let i=1; i<=5; i++) {
//     for(let j=1; j<=5; j++) {
//         if(i==5 || i==j|| j==1){
//             process.stdout.write("* ")

//         }else {
//             process.stdout.write("  ")

//         }
//     }console.log('');
// }


// cross pattern "into"--

// for( let i=1; i<6; i++) {
//     for(let j=1; j<6; j++) {
//         if(i===j || i+j===6 ) {
//             process.stdout.write('*');
//         }
//         else {
//             process.stdout.write(' ');
//         }
//     }
//     console.log('');
// }

// hollow triangle-- triangle border--

// for(let i=0 ; i<5; i++) {
//     for(let j=0; j<2*5; j++) {
//         if(i==5-1){
//             process.stdout.write('*')
//         }else {
//             if(j==5-i || j==5+i){
//                 process.stdout.write('*')

//             }else {
//                 process.stdout.write(' ')

//             }
//         }
//     }console.log('');
// }


// plus pattern --

// for( let i=1; i<6; i++) {
//     for(let j=1; j<6; j++) {
//         if(j==6/2 || i==6/2) {
//             process.stdout.write('*');
//         }
//         else {
//             process.stdout.write(' ');
//         }
//     }console.log('');
// }

// reverse pyramid/traingle reverse--

// for(let i=0; i < 5; i++) {
//     for( let j=0; j<=i ; j++) {
//         process.stdout.write(" ")
//     }
//     for( let k=i; k<5; k++) {
//         process.stdout.write("* ")
//     }console.log(' ');
// }

// pyramid or hill pattern // triangle--

// for(let i=1; i<=5; i++) {
//     for(let j=1; j<=5; j++) {
//         if(i==5 || i+j==6 || j>=(5-i)+1){
//             process.stdout.write("* ")

//         }else {
//             process.stdout.write(" ")

//         }
//     }console.log('');
// }

// decreasing triangle pattern star--

// for(let i=0; i < 5; i++) {
//     for( let j=i; j<=5 ; j++) {
//         process.stdout.write(" * ")
//     }console.log('');
// }


// increasing triangle pattern star--

// for(let i=0; i < 5; i++) {
//     for( let j=0; j<=i ; j++) {
//         process.stdout.write(" * ")
//     }console.log('');
// }

// square pattern star--

// for(let i=0; i<5; i++) {
//     for(let j=0; j<5; j++) {
//         process.stdout.write(' * ');
//     }console.log('');
// }
