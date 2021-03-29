const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  _asciiOffset = 65;
  _alphabetLength = 26;

  constructor(isDirectMachine) {
    this.isDirectMachine = isDirectMachine || isDirectMachine === undefined;
  }

  _abstractEncrypt(message, key) {
    const messageCharacters = message.toUpperCase().split('');
    const keyCharacters = key.toUpperCase().split('');
    const resultString = [];
    let keyIndex = 0;
    for (const messageCharacter of messageCharacters) {
      const messageCharCode = messageCharacter.charCodeAt(0);
      if (messageCharCode < 65 || messageCharCode > 90) {
        resultString.push(messageCharacter);
      } else {
        if (keyIndex === keyCharacters.length) keyIndex = 0;
        let amount = messageCharCode + keyCharacters[keyIndex].charCodeAt(0) - 2 * this._asciiOffset;
        if (amount >= this._alphabetLength) amount = amount % this._alphabetLength;
        resultString.push(String.fromCharCode(amount + this._asciiOffset))
        keyIndex++;
      }
    }
    return resultString.join('');
  }

  _abstractDecrypt(message, key) {
    const messageCharacters = message.toUpperCase().split('');
    const keyCharacters = key.toUpperCase().split('');
    const resultString = [];
    let keyIndex = 0;
    for (const messageCharacter of messageCharacters) {
      const messageCharCode = messageCharacter.charCodeAt(0);
      if (messageCharCode < 65 || messageCharCode > 90) {
        resultString.push(messageCharacter);
      } else {
        if (keyIndex === keyCharacters.length) keyIndex = 0;
        const keyCharCode = keyCharacters[keyIndex].charCodeAt(0);
        let result = messageCharCode - keyCharCode;
        if (messageCharCode < keyCharCode) result += this._alphabetLength;
        resultString.push(String.fromCharCode(result + this._asciiOffset))
        keyIndex++;
      }
    }
    return resultString.join('');
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('An absence of argument');
    const directResult = this._abstractEncrypt(message, key);
    return this.isDirectMachine ? directResult : directResult.split('').reverse().join('');
  }    
  decrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('An absence of argument');
    const directResult = this._abstractDecrypt(message, key);
    return this.isDirectMachine ? directResult : directResult.split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
