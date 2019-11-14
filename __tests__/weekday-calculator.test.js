import { Date } from './../weekday-calculator.js';

describe('Date', () => {
  test('day, month, and year inputs are required', () => {
    let date = new Date();
    expect(date.day).toEqual("");
  })
})
