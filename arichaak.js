
let largePackCount = 0;
let smallPackCount = 0;

function getQuantity(input) {
    if (input == 3 || input == 1) {
        console.log("No packets available")
    }

    if (input == 2) {

        console.log("2kg packet required= 1 Nos")

    } 
    else if (input == 4) {
        console.log("2kg packet required 2 Nos")

    } 
    else if (input == 5) {
        console.log("5kg packet required 1 Nos")

    } 
    else if (input > 5) {
        if (input % 5 == 0) {
            largePackCount = input / 5;
            console.log("5 kg packet required Nos ", largePackCount)

        }
        else {
            let mod = input % 5;
            if (mod % 2 == 0) {
                smallPackCount = mod / 2;
                largePackCount = parseInt(input / 5)
                let check = smallPackCount * 2 + largePackCount * 5;
                if (input == check) {
                    console.log("5 kg packet required Nos ", largePackCount);
                    console.log("2kg packet required Nos", smallPackCount);

                }
            } 
            else {
                largePackCount = parseInt(input / 5) - 1
                let balance = input - largePackCount * 5
                if (balance % 2 == 0) {
                    smallPackCount = balance / 2;
                }
                let check = smallPackCount * 2 + largePackCount * 5;
                if (input == check) {
                    console.log("5 kg packet required Nos ", largePackCount);
                    console.log("2kg packet required Nos", smallPackCount);
                }
            }
        }
    } 
    else {
        console.log("No packets are available")
    }
}

getQuantity(16)