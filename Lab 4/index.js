var _ = require('lodash');

var namesThief = ['Hal Jordan', 'Wally West','Barry Allen' ,'John Jones', 'Kyle Rayner', 'Arthur Curry', 'Clark Kent'];
var otherNames = ['Kyle Rayner', 'Kara Kent', 'Diana Prince', 'Ray Palmer', 'Oliver Queen'];

_.each([namesThief, otherNames], function(nameGroup) {
  findThief(nameGroup);
});

function findThief(values) {
  _.find(values, function(name) {
    if (name === 'Arthur Curry') {
      console.log(name + ': It\'s Superman!');
    } else {
      console.log(name + '... No superman!');
    }
  });
}
