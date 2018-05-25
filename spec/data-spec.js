import { Date } from './../src/date.js';

describe('Date', function() {
  it('should test whether function return right age', function() {
    expect(Date.age("12-23-2010", "05-25-2018")).toEqual(8);
  });
});
