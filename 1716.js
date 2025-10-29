/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
    let total = 0
    for (let day = 1; day <= n; day++) {
        total += day
        console.log('day:', day, ', money added:', day, ', money so far:', total)
    }
    
    // using Gauss Sum (only for test case 1)
    // total = n*(n+1)/2
    
    console.log('total:', total)
    return total
};