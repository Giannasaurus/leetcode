// i passed test case #1!!!! im goated B)))
// its 4 56am, i come back later
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
    console.log('total:', total)
    return total
};