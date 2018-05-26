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
  it('should test whether function calculate right age in years from given dates on chosen planet', function() {
    expect(Date.calculateAge("05-23-2017", "05-25-2018", 1)).toEqual(1);
  });
});

describe('Date', function() {
  it('should test whether function calculate right age in seconds from given dates', function() {
    let age = Date.calculateAge("05-23-2017", "05-25-2018", 1);
    expect(Date.ageInSeconds(age)).toEqual(31536000);
  });
});

describe('Date', function() {
  it('should test whether function calculate the age of a human in some planet years', function() {
    expect(Date.calculateAge("05-23-2017", "05-25-2018",0.24)).toEqual(4);
  });
});

describe('Date', function() {
  it('should test whether function calculate how many years a user has left to live on earth', function() {
    expect(Date.calculateYearsLeft(69, 70, 1)).toEqual(1);
  });
});

describe('Date', function() {
  it('should test whether function calculate how many years a user has left to live on the planet', function() {
    expect(Date.calculateYearsLeft(69, 70, 0.24)).toEqual(4);
  });
});

describe('Date', function() {
  it('should test whether function calculate how many years a user overlived on the earth', function() {
    expect(Date.calculateYearsOverLived(80,79,1)).toEqual(1);
  });
});

describe('Date', function() {
  it('should test whether function calculate how many years a user overlived on the planet', function() {
    expect(Date.calculateYearsOverLived(80,79,0.24)).toEqual(4);
  });
});
