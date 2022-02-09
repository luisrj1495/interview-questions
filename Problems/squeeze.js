// Squeeze a String
// Implement a method/function that replaces consecutive repetitions of any character with the character.

// The method/function should return a new String.

// Examples:

// Ejemplos:

// squeeze("hola") // -> "hola"
// squeeze("hello") // -> "helo"
// squeeze("hel   lo wooorld") // -> "helo world"
// hel lo world

/**
 * Steps
 * 1. Check word by character
 * 2. check if that word already have a letter
 * 3. Return the word
 */

let squeeze = (word) => {
  let newWord = "";

  for (let i = 1; i <= word.length; i++) {
    if (word[i - 1] !== word[i]) newWord += word[i - 1];
  }

  return newWord;
};

describe("Test squeeze function", () => {
  beforeAll(() => {});

  test("Estar seguro que recibiendo hellllow voy a obtener hellow", () => {
    expect(squeeze("hellllow")).toEqual("hellow");
  });
});
