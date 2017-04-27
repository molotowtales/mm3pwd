let facts = [
  'C5', 'E6', 'E4', 'B4', 'A5', 'C1', 'D2', 'C3', 'F2', 'A6',
  'E1',
  'F4', 'D6',
  'D3', 'F5',
  'B5', 'C4',
  'A3', 'F6',
  'A1', 'A4',
  'B2', 'B6'
];

let input = [
  7,  // energy tanks
  0,  // break
  1,  // spark
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
];

let pass = [];

pass.push('b' + facts[input[0]]);
if (input[1] > 0) {
  pass.push('b' + facts[10]);
}

for (let i = 0; i < 12; i++) {
  if (input[i+2] > 0) {
    if (i % 2 == 0 && input[i+3] > 0) {
      pass.push('b' + facts[11+(i++)]);
    } else {
      pass.push('r' + facts[11+i]);
    }
  }
}

console.log(pass);
