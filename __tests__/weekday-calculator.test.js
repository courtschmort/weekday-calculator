import { Date } from './../src/weekday-calculator.js';

describe('Date', () => {
  test('day, month, and year inputs are required', () => {
    let date = new Date("", "", "");
    expect(date.day).toEqual("");
    expect(date.month).toEqual("");
    expect(date.year).toEqual("");
  });
  test('should concatenate month day, year', () => {
    let date = new Date(14, "March", 1989);
    expect(date.concatDate()).toEqual("March 14, 1989");
  });
  test('should only accept dates from October 15, 1582 and December 31, 9999', () => {
    let date = new Date(1, "January", 10000);
    expect(date.checkInputs()).toEqual(false);
  });
  test('should only accept dates from October 15, 1582 and December 31, 9999', () => {
    let date = new Date(14, "October", 1582);
    expect(date.checkInputs()).toEqual(false);
  });
  test('should only accept dates from October 15, 1582 and December 31, 9999', () => {
    let date = new Date(14, "October", 1583);
    expect(date.checkInputs()).toEqual(true);
  });
  test('should only accept dates from October 15, 1582 and December 31, 9999', () => {
    let date = new Date(31, "December", 9999);
    expect(date.checkInputs()).toEqual(true);
  });
  test('day should update when month is selected', () => {
    let date = new Date(14, "November", 2019);
    expect(date.checkYearMonth()).toEqual("30");
  });
  test('day should update when year and month are selected to account for leap year', () => {
    let date = new Date(6, "February", 2020);
    expect(date.checkYearMonth()).toEqual(29);
  });
  test('day should update when year and month are selected to account for non-leap-year', () => {
    let date = new Date(6, "February", 2019);
    expect(date.checkYearMonth()).toEqual(28);
  });
})
