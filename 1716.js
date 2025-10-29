// thanks to chatgpt for the help. this problem was worth 2 white hairs
// see readme for brainstorm process
/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
    let total = 0
    let monday = 1

    for (let day = 1; day <= n; day++) {
        let dayOfWeek = (day - 1) % 7
        total += monday + dayOfWeek

        if (day % 7 === 0) {
            monday++
        }
    }

    return total;
};