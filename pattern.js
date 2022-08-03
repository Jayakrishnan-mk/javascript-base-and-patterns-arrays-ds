for( let i=1; i<6; i++) {
    for(let j=i; j<6; j++) {
        if(i===j || i+j===4 ) {
            process.stdout.write('*');
        }
        else {
            process.stdout.write(' ');
        }
    }
    console.log('');
}

// hollow triangle-- triangle border

// for(let i=0 ; i<10; i++) {
//     for(let j=0; j<2*10; j++) {
//         if(i==10-1){
//             process.stdout.write('*')
//         }else {
//             if(j==10-i || j==10+i){
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

// reverse pyramid/traingle reverse

// for(let i=0; i < 5; i++) {
//     for( let j=0; j<=i ; j++) {
//         process.stdout.write(" ")
//     }
//     for( let k=i; k<5; k++) {
//         process.stdout.write("* ")
//     }console.log(' ');
// }

// pyramid or hill pattern // triangle

// for(let i=0; i < 5; i++) {
//     for( let j=i; j<=5 ; j++) {
//         process.stdout.write(" ")
//     }
//     for( let k=0; k<i; k++) {
//         process.stdout.write("* ")
//     }console.log(' ');
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
