function isValidISODate(dateString) {
    const regexISODate = /^\d{4}-\d{2}-\d{2}$/;
    return regexISODate.test(dateString);
}
  
test('isValidISODate returns true for valid ISO date', () => {
    const validDate = '2023-12-09';
    expect(isValidISODate(validDate)).toBe(true);
});

test('isValidISODate returns false for invalid ISO date', () => {
    const invalidDate = '2023/12/09';
    expect(isValidISODate(invalidDate)).toBe(false);
});