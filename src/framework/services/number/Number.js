
const POWER_TO_LABEL_MAP = {
  1: 'k',
  2: 'm',
  3: 'b',
};

function formatBigNumber(number) {
  const absolute = Math.abs(number);
  // Floor of log (base 1000) of number, e.g. 1,234,567 -> 2
  const power = Math.floor(Math.log(absolute) / Math.log(1000));
  const label = POWER_TO_LABEL_MAP[power];

  if (label) {
    return `${Math.round(number / (1000 ** power))}${label}`;
  }
  return `${Math.round(number)}`;
}

export default {
  formatBigNumber,
};
