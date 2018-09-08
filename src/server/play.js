// var sum_pairs = function (ints, s) {
//     let result;
//     ints.forEach((int, index) => {
//         for (let i = index + 1; i < ints.length; i++) {
//             if (int + ints[i] === s && (result === undefined || ints.lastIndexOf(ints[i]) < ints.lastIndexOf(result[1]))) {
//                 result = [int, ints[i]];
//             }
//         }
//     })
//
//     return result;
// }
//

const mixedFraction = (fraction) => {
    const split = fraction.split('/');
    const dividend = parseInt(split[0]);
    const divider = parseInt(split[1]);
    const result =  dividend / divider;
    const rest = dividend % divider;
    if(rest === 0) {
        return String(result);
    }

    if(result < 0) {

    }

   return 'nic';

}
console.info(mixedFraction('4/7'));
console.info(mixedFraction('6/3'));


// const R = require('ramda')
//
// var array = [2, 5, 9];
// console.log(array)
//
// var index = array.indexOf(5);
// if (index > -1) {
//     array.splice(index, 1);
// }
// // array = [2, 9]
// console.log(array);

// const findAll = (whole, width) => {
//
// }
//
//
// console.log(findAll(2, 3))

// const mixedFraction = (fraction) => {
// 	const splitFraction = fraction.split('/')
// 	let result = splitFraction[0] / splitFraction[1];
// 	return result;
// }
//
// console.log(mixedFraction('42/9'))
//
// const banksData = [
// 		{'CSOB': {gateWay: 'GPE', email: 'gpwebpay@gpe.cz'}},
// 	{'CSO': {gateWay: 'GPE', email: 'gpwebpay@gpe.cz'}}
//
// ];
//
//
// const getBanksData = (selector) => (aquirer) => (data) => {
// 	debugger;
// 	return R.path([aquirer, selector], R.find(R.propEq(aquirer), data));
// 	//pathOr('', [1, selector], find(propEq(0, searchValue), map));
// 	// return R.find(R.propEq('CSOB'))(banksData)
// 	//  return R.mapObjIndexed((value) => value.email, R.find(R.propEq(aquirer))(banksData))[aquirer];
//
// 	// return R.filter(key =>'CSOB' === key, banksData)
// 	// let data;
// 	// R.forEachObjIndexed((value, key) => {'CSOB' == key;  data = value.email} , banksData)
// 	// return data
// }
//
// const getData = getBanksData('email')('CSOB')
// //
// // const getBanksData = aquirer => {
// // 	R.find()
// // }
//
// // import { find, identity, propEq, useWith } from 'ramda';
// //
// // const f = useWith(find, [propEq('id'), identity]);
//
// //console.log(getData(banksData)); //=> {a: 2})
// console.log(Math.pow(2, 5))