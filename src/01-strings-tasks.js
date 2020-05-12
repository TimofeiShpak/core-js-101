/* *******************************************************************************************
 *                                                                                           *
 * Plese read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String   *
 *                                                                                           *
 ******************************************************************************************* */


/**
 * Returns the result of concatenation of two strings.
 *
 * @param {string} value1
 * @param {string} value2
 * @return {string}
 *
 * @example
 *   'aa', 'bb' => 'aabb'
 *   'aa',''    => 'aa'
 *   '',  'bb'  => 'bb'
 */
function concatenateStrings(value1, value2) {
  return value1 + value2;
}


/**
 * Returns the length of given string.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'aaaaa' => 5
 *   'b'     => 1
 *   ''      => 0
 */
function getStringLength(value) {
  return value.length;
}

/**
 * Returns the result of string template and given parameters firstName and lastName.
 * Please do not use concatenation, use template string :
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
 *
 * @param {string} firstName
 * @param {string} lastName
 * @return {string}
 *
 * @example
 *   'John','Doe'      => 'Hello, John Doe!'
 *   'Chuck','Norris'  => 'Hello, Chuck Norris!'
 */
function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

/**
 * Extracts a name from template string 'Hello, First_Name Last_Name!'.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'Hello, John Doe!' => 'John Doe'
 *   'Hello, Chuck Norris!' => 'Chuck Norris'
 */
function extractNameFromTemplate(value) {
  let result = '';
  for (let i = 7; i + 1 < value.length; i += 1) {
    result += value[i];
  }
  return result;
}


/**
 * Returns a first char of the given string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'John Doe'  => 'J'
 *   'cat'       => 'c'
 */
function getFirstChar(value) {
  const result = value[0];
  return result;
}

/**
 * Removes a leading and trailing whitespace characters from string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   '  Abracadabra'    => 'Abracadabra'
 *   'cat'              => 'cat'
 *   '\tHello, World! ' => 'Hello, World!'
 */
function removeLeadingAndTrailingWhitespaces(value) {
  const result = value.replace(/^\s+|\s+$/g, '');
  return result;
}

/**
 * Returns a string that repeated the specified number of times.
 *
 * @param {string} value
 * @param {string} count
 * @return {string}
 *
 * @example
 *   'A', 5  => 'AAAAA'
 *   'cat', 3 => 'catcatcat'
 */
function repeatString(value, count) {
  let result = '';
  for (let i = 0; i < count; i += 1) {
    result += value;
  }
  return result;
}

/**
 * Remove the first occurrence of string inside another string
 *
 * @param {string} str
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'To be or not to be', 'not'  => 'To be or  to be'
 *   'I like legends', 'end' => 'I like legs',
 *   'ABABAB','BA' => 'ABAB'
 */
function removeFirstOccurrences(str, value) {
  const result = str.replace(value, '');
  return result;
}

/**
 * Remove the first and last angle brackets from tag string
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   '<div>' => 'div'
 *   '<span>' => 'span'
 *   '<a>' => 'a'
 */
function unbracketTag(str) {
  const result = str.replace(/<|>/g, '');
  return result;
}


/**
 * Converts all characters of the specified string into the upper case
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   'Thunderstruck' => 'THUNDERSTRUCK'
 *  'abcdefghijklmnopqrstuvwxyz' => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
 */
function convertToUpperCase(str) {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    result += str[i].toUpperCase();
  }
  return result;
}

/**
 * Extracts e-mails from single string with e-mails list delimeted by semicolons
 *
 * @param {string} str
 * @return {array}
 *
 * @example
 *   'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'
 *   => [
 *      'angus.young@gmail.com',
 *      'brian.johnson@hotmail.com',
 *      'bon.scott@yahoo.com'
 *   ],
 *   'info@gmail.com' => ['info@gmail.com']
 */
function extractEmails(str) {
  const result = str.split(';');
  return result;
}

/**
 * Returns the string representation of rectangle with specified width and height
 * using pseudograhic chars
 *
 * @param {number} width
 * @param {number} height
 * @return {string}
 *
 * @example
 *
 *            '┌────┐\n'+
 *  (6,4) =>  '│    │\n'+
 *            '│    │\n'+
 *            '└────┘\n'
 *
 *  (2,2) =>  '┌┐\n'+
 *            '└┘\n'
 *
 *             '┌──────────┐\n'+
 *  (12,3) =>  '│          │\n'+
 *             '└──────────┘\n'
 *
 */
function getRectangleString(width, height) {
  let result = '';
  result += '┌';
  for (let i = 0; i < width - 2; i += 1) {
    result += '─';
  }
  result += '┐';
  result += '\n';
  for (let i = 0; i < height - 2; i += 1) {
    result += '│';
    for (let j = 0; j < width - 2; j += 1) {
      result += ' ';
    }
    result += '│\n';
  }
  result += '└';
  for (let i = 0; i < width - 2; i += 1) {
    result += '─';
  }
  result += '┘\n';
  return result;
}


/**
 * Encode specified string with ROT13 cipher
 * See details:  https://en.wikipedia.org/wiki/ROT13
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *
 *   'hello' => 'uryyb'
 *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
 *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
 *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
 *    => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
 *
 */
function encodeToRot13(str) {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    const code = str[i].charCodeAt();
    if (code > 64 && code < 91) {
      if (code < 78) {
        result += String.fromCharCode(code + 13);
      } else {
        result += String.fromCharCode(code - 13);
      }
    } else if (code > 96 && code < 123) {
      if (code < 110) {
        result += String.fromCharCode(code + 13);
      } else {
        result += String.fromCharCode(code - 13);
      }
    } else {
      result += str[i];
    }
  }
  return result;
}

/**
 * Returns true if the value is string; otherwise false.
 * @param {string} value
 * @return {boolean}
 *
 * @example
 *   isString() => false
 *   isString(null) => false
 *   isString([]) => false
 *   isString({}) => false
 *   isString('test') => true
 *   isString(new String('test')) => true
 */
function isString(value) {
  const str = value;
  let result = false;
  if (typeof str === 'string' || (str instanceof String)) {
    result = true;
  }
  return result;
}


/**
 * Returns playid card id.
 *
 * Playing cards inittial deck inclides the cards in the following order:
 *
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 *
 * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
 * Function returns the zero-based index of specified card in the initial deck above.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'A♣' => 0
 *   '2♣' => 1
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */
function getCardId(value) {
  const cards = {
    'A♣': 0,
    '2♣': 1,
    '3♣': 2,
    '4♣': 3,
    '5♣': 4,
    '6♣': 5,
    '7♣': 6,
    '8♣': 7,
    '9♣': 8,
    '10♣': 9,
    'J♣': 10,
    'Q♣': 11,
    'K♣': 12,
    'A♦': 13,
    '2♦': 14,
    '3♦': 15,
    '4♦': 16,
    '5♦': 17,
    '6♦': 18,
    '7♦': 19,
    '8♦': 20,
    '9♦': 21,
    '10♦': 22,
    'J♦': 23,
    'Q♦': 24,
    'K♦': 25,
    'A♥': 26,
    '2♥': 27,
    '3♥': 28,
    '4♥': 29,
    '5♥': 30,
    '6♥': 31,
    '7♥': 32,
    '8♥': 33,
    '9♥': 34,
    '10♥': 35,
    'J♥': 36,
    'Q♥': 37,
    'K♥': 38,
    'A♠': 39,
    '2♠': 40,
    '3♠': 41,
    '4♠': 42,
    '5♠': 43,
    '6♠': 44,
    '7♠': 45,
    '8♠': 46,
    '9♠': 47,
    '10♠': 48,
    'J♠': 49,
    'Q♠': 50,
    'K♠': 51,
  };
  const result = cards[value];
  return result;
}


module.exports = {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  getCardId,
};
