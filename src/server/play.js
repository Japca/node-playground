const R = require('ramda')

const users = [
    {name: 'Jakub', lastName: 'Krhovjak', age: 23, height: 180, address: {city: 'Roznov', street: 'Kramolisov 832'}},
    {name: 'Michal', lastName: 'Jatro', age: 44, height: 190, address: {city: 'Roznov', street: 'Dolni 23'}},
    {name: 'Petr', lastName: 'Hut', age: 63, height: 160, address: {city: 'Praha', street: 'Na podli 5'}},
    {name: 'Lojza', lastName: 'Krivik', age: 16, height: 170, address: {city: 'Velka lhota', street: 'U potucku 345'}},
    {name: 'Jakub', lastName: 'Krivik', age: 16, height: 170, address: {city: 'Mala lhota', street: 'Nad Lesy 412'}}
]


// let filter = R.filter(user => user.age % 2 === 1, users);
// console.log(filter)
// console.log('-----------------------------------------------')
// let value = users.filter(user => user.age % 2 === 1);


// let filter = R.filter(R.whereEq({ name: 'Jakub' }), users);
// console.log(filter)

// let filter = R.filter(R.whereEq({ name: 'Jakub' }), users);
// console.log(filter)


// letvalue = users.find(user => user.name === 'Jakub');
// console.log(value)

//let values = users.forEach(user => console.log(R.values(user)))
// R.forEach(user => console.log(R.values(user)), users)
// console.log(values);
// console.log(R.forEach(R.values(user => user), users));
//
// Test.assertEquals(iqTest("2 4 7 8 10"),3);
// Test.assertEquals(iqTest("1 2 2"), 1);


// let nbYear = (xs) => xs.reduce((a, b) => a ^ b)
//
// console.log(nbYear([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5, 5, 5]));

//
// let list = names => {
//     const length = names.length;
//     let result ='';
//     names.forEach((value, index) => {
//         if(index + 2  > length) {
//             result += length === 1 ? value.name : `& ${value.name}`;
//         } else {
//             result += value.name + (index + 2 === length ? ' ': ', ');
//         }
//     })
//     return result;
// }

// var list = (names) =>  names.map(x => x.name).join(', ').replace(/(.*),(.*)/, "$1 &$2")
//
// console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]));


const romans =
    [{number: 1, roman: 'I'},
        {number: 2, roman: 'II'},
        {number: 3, roman: 'III'},
        {number: 4, roman: 'IV'},
        {number: 5, roman: 'V'},
        {number: 6, roman: 'VI'},
        {number: 7, roman: 'VII'},
        {number: 8, roman: 'VIII'},
        {number: 9, roman: 'IX'},
        {number: 10, roman: 'X'},
        {number: 50, roman: 'L'},
        {number: 100, roman: 'C'},
        {number: 500, roman: 'D'},
        {number: 1000, roman: 'M'}


        ]
//
// const romans = [{1: 'I'}, {5:'V'}, {10:'X'}, {50: 'L'}, {100: 'C'}, {500: 'D'}, {100: 'M'}]
solution = (number) => {
    const numbers = number.toString().split('');
    let result = ''
    if(number <= 10 || number % 5 === 0) {
        result += romans.find(roman => number === roman.number).roman;
    }
    if(number > 10 && number < 100) {
        let first=''
        let last = numbers % 10;

        if(number < 40) {
            // result += parseInt(numbers[0]).
        }

        result += romans.find(roman => number <= roman.number).roman;
        // result +=
    }


    return result;
}

console.log(solution(51));
// console.log(solution(126))


// values.forEach(x => counts[x] = (counts[x] || 0)+1);
