
/**
 * These services are not intended for use in production.
 */

/**
 * Remove spaces, tabs, newlines.
 */
function cleanString(str) {
  return str.replace(/\s\s+/g, ' ');
}

export default {
  cleanString,
};
