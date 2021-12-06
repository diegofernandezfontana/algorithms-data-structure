function factorial(number) {
  if (number === 0) {
    return 1;
  }
  return number * factorial(number - 1);
}

/* Example:
  factorial(5) -> factorial(4) -> factorial(3) -> factorial(2) -> factorial(1) -> factorial(0)
  return 5 *      (return 4 *    (return 3 *      (return 2 *    (return 1 *     (return 1))));
  return 5 * 4 * 3 * 2 * 1 * 1
  return 120
 */
