const {compareAsc} = require('date-fns');

function sortDates(arr){
    return arr.sort(compareAsc);
}

module.exports = sortDates;