// Challenge 1
function capitalize(string1) {
  return string1[0].toUpperCase() + string1.slice(1);
}
// Challenge 2
function allCaps(string1) {
  return string1.toUpperCase();
}
// Challenge 3
function capitalizeWords(string1) {
  const string1Array = string1.split(' ');
  const charArray = [];
  for (let i = 0; i < string1Array.length; i += 1) {
    charArray.push(string1Array[i].charAt(0).toUpperCase() + string1Array[i].slice(1));
  }
  return charArray.join(' ');
}
// Challenge 4
function removeExtraSpaces(string1) {
  const noEndSpace = string1.trim();
  const array = noEndSpace.split(' ').filter((w) => w !== '');
  return array.join(' ');
}
// Challenge 5
function kebobCase(string1) {
  const removeSpace = removeExtraSpaces(string1).toLowerCase();
  const array = removeSpace.split('').filter((char) => char !== '!');
  const normal = array.join('');
  const kebob = normal.split(' ').join('-');
  return kebob;
}
// Challenge 6
function snakeCase(string1) {
  const removeSpace = removeExtraSpaces(string1).toLowerCase();
  const array = removeSpace.split('').filter((char) => char !== '!');
  const normal = array.join('');
  const snake = normal.replaceAll(' ', '_');
  return snake;
}
// Challenge 7
function camelCase(string1) {
  const wordArray = string1.split(' ');
  let camel = '';
  for (let i = 0; i < wordArray.length; i += 1) {
    if (i === 0) {
      camel += wordArray[i].toLowerCase();
    } else {
      camel += capitalizeWords(wordArray[i]);
    }
  }
  return camel;
}
// Challenge 8
function shift(string1, numChar) {
  const array = string1.split('');
  let shifted = array.slice(numChar);
  for (let i = 0; i < numChar; i += 1) {
    const first = array[i];
    shifted.push(first);
  }
  shifted = shifted.join('');
  return shifted;
}
// Challenge 9
function makeHashTag(string1) {
  const array = capitalizeWords(string1).split(' ');
  const hashtags = [];
  for (let i = 0; i < array.length; i += 1) {
    const hashtag = `#${array[i]}`;
    hashtags.push(hashtag);
  }
  return hashtags;
}
// Challenge 10
function isEmpty(string1) {
  const noEndSpace = string1.trim();
  const array = noEndSpace.split(' ').filter((w) => w !== '');
  let result = '';
  if (array.length === 0) {
    result = 'true';
  } else {
    result = 'false';
  }
  return result;
}
function runAll() {
  console.log(capitalize('pineapple'));
  console.log(allCaps('pineapple'));
  console.log(capitalizeWords('pineapples are better apples'));
  console.log(removeExtraSpaces(' pineapples  are better    than  apples   '));
  console.log(kebobCase('PeAr!     PeAch! PinEapple!    PumPkin!   '));
  console.log(snakeCase('PeAr!     PeAch! PinEapple!    PumPkin!   '));
  console.log(camelCase('js uses camel case'));
  console.log(shift('Hello world', 4));
  console.log(makeHashTag('beautiful photo mars'));
  console.log(isEmpty('                '));
  console.log(isEmpty('Nope! Full of Words!'));
}
runAll();
