/* *************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  let result = '';
  if (num % 3 !== 0 && num % 5 !== 0) {
    return num;
  }
  if (num % 3 === 0) {
    result += 'Fizz';
  }
  if (num % 5 === 0) {
    result += 'Buzz';
  }
  return result;
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  return (n !== 1) ? n * getFactorial(n - 1) : 1;
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  return (n1 !== n2) ? n1 + getSumBetweenNumbers(n1 + 1, n2) : n2;
}


/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  let result = false;
  const max = Math.max(a, b, c);
  const min = Math.min(a, b, c);
  let middle = 0;
  if (max !== min) {
    if (a !== max && a !== min) {
      middle = a;
    } else if (b !== max && b !== min) {
      middle = b;
    } else if (c !== max && c !== min) {
      middle = c;
    }
    if ((middle + min) > max) {
      result = true;
    }
  } else {
    result = true;
  }
  return result;
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  let result = false;
  const checkH = (rect1.top + rect1.height) >= (rect2.top + rect2.height);
  const checkW = (rect1.left + rect1.width) >= (rect2.left + rect2.width);
  const isTop = rect1.top >= rect2.top;
  const isHeight = rect1.height >= rect2.top;
  const isWidth = rect1.width >= rect2.left;
  if (checkH && checkW) {
    result = true;
  } else if (isTop) {
    result = true;
  } else if (isHeight && isWidth) {
    result = true;
  }
  return result;
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  const c = circle;
  const p = point;
  const result = (c.center.x - p.x) ** 2 + (c.center.y - p.y) ** 2 < c.radius ** 2;
  return result;
}

/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  const arr = str.split('');
  let result = null;
  for (let i = 0; i < str.length; i += 1) {
    const value = arr.filter((item) => item === arr[i]);
    if (value.length === 1) {
      result = arr[i];
      break;
    }
  }
  return result;
}


/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const arr = [];
  arr.push(a);
  arr.push(b);
  arr.sort();
  let result = '';
  result += isStartIncluded === true ? '[' : '(';
  result += `${arr[0]}, `;
  result += arr[1];
  result += isEndIncluded === true ? ']' : ')';
  return result;
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  let str = String(num);
  str = str.split('').reverse().join('');
  return +str;
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
  const str = String(ccn);
  const arr = str.split('');
  let result = 0;
  for (let i = arr.length - 2; i > -1; i -= 2) {
    arr[i] = Number(arr[i]);
    let value = arr[i] * 2;
    if (value > 9) {
      value = (value % 10) + 1;
    }
    result += value;
  }
  for (let i = arr.length - 1; i > -1; i -= 2) {
    arr[i] = Number(arr[i]);
    result += arr[i];
  }
  return (result % 10) === 0;
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  const str = String(num);
  const arr = str.split('');
  let value = arr.reduce((sum, item) => sum + +item, 0);
  if (value > 10) {
    value = (value % 10) + Math.trunc(value / 10);
  }
  return value;
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  let s = str;
  for (let i = 0; i < s.length; i += 1) {
    if (s.indexOf('[]') > -1) {
      s = s.replace('[]', '');
      i -= 1;
    } else if (s.indexOf('<>') > -1) {
      s = s.replace('<>', '');
      i -= 1;
    } else if (s.indexOf('{}') > -1) {
      s = s.replace('{}', '');
      i -= 1;
    } else if (s.indexOf('()') > -1) {
      s = s.replace('()', '');
      i -= 1;
    } else {
      break;
    }
  }
  return s === '';
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  const s = n;
  let v = num;
  let result = '';
  while (v >= s) {
    let value = v % s;
    value = String(value);
    result += value;
    v -= (v % s);
    v /= s;
  }
  let value = v % s;
  value = String(value);
  result += value;
  result = result.split('').reverse().join('');
  return result;
}


/**
 * Returns the commom directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
  const arr = pathes;
  let result = '';
  for (let i = 0; i < arr.length; i += 1) {
    if (i === 0) {
      const v = arr[i].split('/');
      for (let j = 0; j < v.length; j += 1) {
        if (!v[j].includes('.')) {
          result += `${v[j]}/`;
        }
      }
    } else if (!arr[i].includes(result)) {
      const v = arr[i].split('/');
      let copy = '';
      for (let j = 0; j < v.length; j += 1) {
        if (result.includes(v[j])) {
          copy += `${v[j]}/`;
        }
      }
      result = copy;
    }
  }
  return result;
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  let result = null;
  if (m1[1] !== undefined) {
    result = m2;
  } else {
    let v = 0;
    for (let i = 0; i < 3; i += 1) {
      v += (m1[0][i] * m2[i][0]);
    }
    result = [[v]];
  }
  return result;
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
  const MIN_NUMBER = 0;
  const arr = position;
  let check0 = 0;
  let checkX = 0;
  let result;
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[i].length; j += 1) {
      if (arr[i][j] === '0') {
        check0 += 1;
      } else if (arr[i][j] === 'X') {
        checkX += 1;
      }
    }
    if (check0 === 3 || checkX === 3) {
      result = arr[i][MIN_NUMBER];
    }
    check0 = 0;
    checkX = 0;
  }
  if (arr[0][0] === '0' && arr[1][1] === '0' && arr[2][2] === '0') {
    result = '0';
  }
  if (arr[2][0] === '0' && arr[1][1] === '0' && arr[0][2] === '0') {
    result = '0';
  }
  if (arr[0][0] === 'X' && arr[1][1] === 'X' && arr[2][2] === 'X') {
    result = 'X';
  }
  if (arr[2][0] === 'X' && arr[1][1] === 'X' && arr[0][2] === 'X') {
    result = 'X';
  }
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[i].length; j += 1) {
      if (arr[j][i] === '0') {
        check0 += 1;
      } else if (arr[j][i] === 'X') {
        checkX += 1;
      }
      if (check0 === 3 || checkX === 3) {
        result = arr[j][i];
      }
    }
    check0 = 0;
    checkX = 0;
  }
  return result;
}


module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
