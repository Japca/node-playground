var sum_pairs = function (ints, s) {
    let result;
    ints.forEach((int, index) => {
        for (let i = index + 1; i < ints.length; i++) {
            if (int + ints[i] === s && (result === undefined || ints.lastIndexOf(ints[i]) < ints.lastIndexOf(result[1]))) {
                result = [int, ints[i]];
            }
        }
    })

    return result;
}


function isIsogram(str) {
    return !/(\w).*\1/i.test(str)
}


const rps = (a, b) => a == b ? 'Draw!' : `Player ${/rp|ps|sr/.test(a[0] + b[0]) ? 2 : 1} won!`;

const snail = (arrays) => {
    let result = [...arrays[0]];
    for (let i = 1; i < arrays.length; i++) {
        const currentArray = arrays[i];
        result.push(currentArray[currentArray.length - 1])
    }

    const currArray = arrays[arrays.length -1];
    for (let i = currArray.length - 2; i >= 0; i--) {
        result.push(currArray[i])
    }


    for(let i = arrays.length -2; i > 0; i--) {
        const currentArray = arrays[i];
        result.push(currentArray[0]);
    }

    for(let i = 1; i <  arrays[1].length -1; i++) {
        result.push(arrays[1][i]);
    }


    return result;
}


console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));