
var sum_pairs=function(ints, s){
    let results = [];
    ints.forEach((int, index) => {
        for(let i = 0; i< ints.length; i++) {
            if(int + ints[i] === s &&  (results.length === 0 ||ints.indexOf(results[1]) >  ints.indexOf(i) && ints.indexOf(i) !== -1)) {
                results = [int, ints[i]];
            }
        }
    })



    return results;
}



console.log(sum_pairs([ 5, 3, 7, 5], 10));