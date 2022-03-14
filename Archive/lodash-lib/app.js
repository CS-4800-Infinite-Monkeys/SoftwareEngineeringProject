const _ = require("lodash");

let words = ['sky', 'wood', 'forest', 'falcon',
    'pear', 'ocean', 'universe'];

module.exports = {
    firstInArray: function(){
        return _.first(words);
    },    
    lastInArray: function(){
        return _.last(words);
    }
};
let fel = _.first(words);
let lel = _.last(words);

console.log(`First element: ${fel}`);
console.log(`Last element: ${lel}`);