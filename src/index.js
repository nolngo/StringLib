function capitalize(string1) {
  return string1[0].toUpperCase() + string1.slice(1);
}

function allCaps(string1) {
  return string1.toUpperCase();
}

function capitalizeWords(string1) {
  string1Array = string1.split(' ');
  charArray = []
    for (var x = 0; x < string1Array.length; x++) {
      charArray.push(string1Array[x].charAt(0).toUpperCase().slice(1));
    }
    return charArray.join(' ');
}