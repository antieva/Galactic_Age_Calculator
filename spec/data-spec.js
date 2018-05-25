import { Date } from './../src/date.js';

// describe('Date', function() {
//   it('should test whether function return right age in years', function() {
//     expect(Date.age("12-23-2010", "05-25-2018")).toEqual(8);
//   });
// });

describe('Date', function() {
  it('should test whether function return given age in seconds', function() {
    expect(Date.ageInSeconds(1)).toEqual(31536000);
  });
});


describe('Date', function() {
  it('should test whether function calculate right age in seconds from given dates', function() {
    expect(Date.calculateAge("05-23-2017", "05-25-2018")).toEqual(31536000);
  });
});
