export class Date {

  static age(date1, date2) {
    let birthYear = parseInt(date1.slice(date1.length - 4, date1.length));
    let currentYear = parseInt(date2.slice(date2.length - 4, date2.length));

    return currentYear - birthYear;
  }
}
