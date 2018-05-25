export class Date {

  static ageInSeconds(age) {
    age = age * 365 * 86400;
    return age;
  }

  static calculateAge(date1, date2) {
    let birthYear = parseInt(date1.slice(date1.length - 4, date1.length));
    let currentYear = parseInt(date2.slice(date2.length - 4, date2.length));
    let age = (currentYear - birthYear);
    return age;
  }

  static convertInPlanetAge(ratio, earthAge) {
    let planetAge = Math.floor(earthAge/ratio);
    return planetAge;
  }

  static calculateYearsLeft(age, lifeExpectancy) {
    if (age < lifeExpectancy) {
      return lifeExpectancy - age;
    } else {
      return -1;
    }
  }

  static calculateYearsOverLived(age, lifeExpectancy) {
    return age - lifeExpectancy;
  }
}
