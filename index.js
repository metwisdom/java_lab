function calculateTax(amount) {
    return amount * 0.1;
}

function convertToUpperCase(text) {
    return text.toUpperCase();
}

function findMaximum(firstNumber, secondNumber) {
    return Math.max(firstNumber, secondNumber);
}

function isPalindrome(word) {
    const normalizedWord = word.toLowerCase();
    const reversedWord = normalizedWord.split('').reverse().join('');
    return normalizedWord === reversedWord;
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const discountAmount = originalPrice * (discountPercentage / 100);
    return originalPrice - discountAmount;
}

module.exports = {
    calculateTax,
    convertToUpperCase,
    findMaximum,
    isPalindrome,
    calculateDiscountedPrice,
};