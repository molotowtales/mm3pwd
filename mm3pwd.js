let facts = [16,29,27,9,4,12,19,14,31,5,24,33,23,20,34,10,15,2,35,0,3,7,11];

let input = [
  7,  // energy tanks (0-9)
  1,  // spark (0 = unbeaten, 1 = beaten)
  1,  // shadow
  1,  // needle
  1,  // magnet
  1,  // gemini
  1,  // hard
  1,  // top
  1,  // snake
  1,  // spark2
  1,  // shadow2
  1,  // needle2
  0,  // gemini2
  0,  // break
];

let pass = [];

// energy tanks
pass.push(facts[input[0]]);

// robot masters
for (let i = 0; i < 12; i++) {
  if (input[i+1] > 0) {
    if (i % 2 == 0 && input[i+2] > 0) {
      pass.push(facts[11+(i++)]);
    } else {
      pass.push(36 + facts[11+i]);
    }
  }
}

// break man
if (input[13] > 0) {
  pass.push(facts[10]);
}

// output result
try {
  var clc = require('cli-color')
  render_grid(pass);
} catch (e) {
  render_list(pass);
}



function render_list(_pass) {
  let pass = _pass.sort(function(a,b){return a == b ? 0 : a < b ? -1 : 1});
  for (let i = 0; i < pass.length; i++) {
    console.log(pass[i] >= 35 ? 'R' : 'B', String.fromCharCode(65+Math.floor((pass[i] >= 35 ? pass[i]-36 : pass[i]) / 6)), 1 + pass[i] % 6);
  }
}

function render_grid(pass) {
  let grid = new Array(6);
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(6).join(' ').split('');
  }
  for (let i = 0; i < pass.length; i++) {
    let c = pass[i] >= 35 ? clc.red : clc.blue,
        y = Math.floor((pass[i] % 36) / 6),
        x = pass[i] % 6;
    grid[y][x] = c('*');
  }
  console.log('  1 2 3 4 5 6');
  for (let i = 0; i < grid.length; i++) {
    console.log(String.fromCharCode(65+i), grid[i].join(' '));
  }
}
