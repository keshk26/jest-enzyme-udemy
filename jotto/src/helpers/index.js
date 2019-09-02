/**
 * @function getLetterMatchCount
 * @param {string} guessedWord 
 * @param {string} secretWord
 * @returns {number} - Number of letters matched between guess word and secret word 
 */
export const getLetterMatchCount = (guessedWord, secretWord) => {
    const secretLetterSet = new Set(secretWord.split(''));
    const guessedWordSet = new Set(guessedWord.split(''));
    return [...secretLetterSet].filter(letter => guessedWordSet.has(letter)).length
}