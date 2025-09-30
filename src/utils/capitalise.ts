/**
 * Capitalizes the first character of a string.
 *
 * @example
 * capitalize("hello"); // "Hello"
 * capitalize("world"); // "World"
 * capitalize("");      // ""
 *
 * @param {string} str - The input string.
 * @returns {string} A new string with the first character in uppercase.
 */
export default function capitalize(str: string): string {
  if (!str) return '';
  return str[0].toUpperCase() + str.slice(1);
}
