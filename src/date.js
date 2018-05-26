export class Date {

  static ageInSeconds(age) {
    const convertToSec = 365 * 86400;
    age = age * convertToSec;
    return age;
  }

  static calculateAge(date1, date2, ratio) {
    let birthYear = parseInt(date1.slice(date1.length - 4, date1.length));
    let currentYear = parseInt(date2.slice(date2.length - 4, date2.length));
    let age = Math.floor((currentYear - birthYear)/ratio);
    return age;
  }

  static calculateYearsLeft(age, lifeExpectancy, ratio) {
    if (age < lifeExpectancy) {
      let yearsLeft = Math.floor((lifeExpectancy - age)/ratio)
      return yearsLeft;
    } else {
      return -1;
    }
  }

  static calculateYearsOverLived(age, lifeExpectancy, ratio) {
    let years = Math.floor((age - lifeExpectancy)/ratio)
    return years;
  }
}
