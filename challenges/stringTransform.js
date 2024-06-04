const stringTransform = (string) => {
  if (string.length % 3 === 0 && string.length % 5 === 0) {
    let reversedAsciiCode = ''; // Initialize a string to help in reversing the string and store the reversed ascii code
    for (let i = string.length - 1; i >= 0; i--) {
      reversedAsciiCode += string.charCodeAt(i);
      if (i > 0) {
        reversedAsciiCode += ' ';
      }
    }
    return reversedAsciiCode;
  } else if (string.length % 3 === 0) {
    let reversed = ''; // Initialize a string to store the reversed string
    for (let i = string.length - 1; i >= 0; i--) {
      reversed += string[i];
    }
    return reversed;
  } else if (string.length % 5 === 0) {
    let asciiCode = ''; // Initialize a string store the ASCII code
    for (let i = 0; i < string.length; i++) {
      asciiCode += string.charCodeAt(i);
      if (i < string.length - 1) {
        asciiCode += ' '; //check to avoid appending an extra space at the end of the ASCII code strings.
      }
    }
    return asciiCode;
  }
  return false; // return false if none of the conditions match
};

console.log(stringTransform('Hello World1234'));
