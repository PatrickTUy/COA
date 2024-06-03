const stringTransform = (string) => {
  if (string.length % 3 === 0 && string.length % 5 === 0) {
    let reversedAsciiCode = ''; //  this string will store the reversed ascii code
    for (let i = string.length; i >= 0; i--) {
      reversedAsciiCode += string.charCodeAt(i) + ' ';
    }

    return reversedAsciiCode;
  } else if (string.length % 3 === 0) {
    let reversed = '';
    for (let i = string.length; i >= 0; i--) {
      reversed += string[i];
    }
    return reversed;
  } else if (string.length % 5 === 0) {
    let asciiCode = '';
    for (let i = 0; i <= string.length; i++) {
      asciiCode += string.charCodeAt(i) + ' ';
    }
    return asciiCode;
  }
};
