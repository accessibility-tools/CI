const faceSad = `
     .-""""""-.
   .'          '.
  /   O      O   \\
 :           \`    :
 |                |   
 :    .------.    :
  \\  '        '  /
   '.          .'
     '-......-'
`;

const faceHappy = `
    .-""""""-.
   .'          '.
  /   O      O   \\
 :                :
 |                |   
 : ',          ,' :
  \\  '-......-'  /
   '.          .'
     '-......-'
`;

const mark = `
 .----------------. 
| .--------------. |
| |              | |
| |      _       | |
| |     | |      | |
| |     | |      | |
| |     | |      | |
| |     |_|      | |
| |     (_)      | |
| '--------------' |
 '----------------' 
`;

const defaultColumns = 80;
const asciiLineWSBreaks = 4;

function drawLine() {
  const cols = process.stdout.columns || defaultColumns;
  return (
    '\n'.repeat(asciiLineWSBreaks) +
    '-'.repeat(cols) +
    '\n'.repeat(asciiLineWSBreaks)
  );
}

module.exports = {
  faceHappy,
  faceSad,
  mark,
  drawLine
};
