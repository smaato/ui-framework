
export class NumberAbbreviator {

  /**
   * @param {Array} symbolsOrderedByScale - An array of strings that will be
   *   used to symbolize each order (e.g. an array of [K, MM, B] will
   *   symbolize 1,000, 1,000,000, and 1,000,000,000 as 1K, 1MM and 1B).
   *
   * @param {number} precision - An integer representing how many decimal places
   *   of precision to preserve.
   */
  constructor(customConfig) {
    const config = Object.assign({}, {
      symbolsOrderedByScale: ['k', 'M', 'B'],
      precision: 2,
      trimTrailingZeroes: false,
    }, customConfig);

    this.symbolsOrderedByScale = config.symbolsOrderedByScale;
    this.precision = config.precision;
    this.trimTrailingZeroes = config.trimTrailingZeroes;

    // Create an array of scales, by powers of 1000.
    // i.e. [1000, 1000000, 1000000000, ...]
    this.scales = this.symbolsOrderedByScale.map((symbol, index) => {
      return Math.pow(1000, index + 1);
    });
  }

  findScaleIndex(number) {
    for (let index = this.scales.length - 1; index >= 0; index--) {
      if (number >= this.scales[index]) {
        return index;
      }
    }
    // Less than or equal to 999, or there are no scales.
    return -1;
  }

  scaleNumber(number, scaleIndex) {
    if (scaleIndex === -1) {
      // If it's not divisible by a scale, then return the original number.
      return number;
    }
    return number / this.scales[scaleIndex];
  }

  findSymbol(scaleIndex) {
    // Return an empty string if the index is out of range of our scales.
    if (scaleIndex === -1 || scaleIndex >= this.symbolsOrderedByScale.length) {
      return '';
    }
    return this.symbolsOrderedByScale[scaleIndex];
  }

  abbreviate(number) {
    const scaleIndex = this.findScaleIndex(number);
    const scaledNumber = this.scaleNumber(number, scaleIndex);
    let truncatedNumber = scaledNumber.toFixed(this.precision);
    if (this.trimTrailingZeroes) {
      truncatedNumber = parseFloat(truncatedNumber);
    }
    const symbol = this.findSymbol(scaleIndex);
    return `${truncatedNumber}${symbol}`;
  }

}

export default {
  create: config => {
    return new NumberAbbreviator(config);
  },
};
