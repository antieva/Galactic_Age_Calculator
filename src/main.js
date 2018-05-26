import './styles.css';
import { Date } from './date.js';


$(document).ready(function() {
  $('#date-form').submit(function(event) {
    event.preventDefault();
    let db = $('#date1').val();
    let currentDate = $('#currentDate').val();
    let planet = parseInt($('#planet').val());
    let inputExpectancy = parseInt($('#lifeExpectancy').val());

    const planetToErthRatios = [[0.24, "Mercury"],[0.62, "Venus"],[1.88, "Mars"],[11.86, "Jupiter"],[1, "Earth"]];

    let planetAge = Date.calculateAge(db, currentDate, planetToErthRatios[planet][0]);
    $("#planet-name").text(planetToErthRatios[planet][1])
    $("#planet-age").text(planetAge);
    if (planet == 4) {
      $("#output-ageInSeconds").text(Date.ageInSeconds(earthAge));
    }

    let earthAge = Date.calculateAge(db, currentDate, 1);
    let yearsLeft = Date.calculateYearsLeft(earthAge, inputExpectancy);
    if (yearsLeft > 0) {
      $(".output-leftYears").text("The years you have left to live on" + planetToErthRatios[planet][1] + ": " + yearsLeft + ".");
    } else if (yearsLeft < 0) {
      $(".output-leftYears").text("You have lived past the life expectancy on " + Date.calculateYearsOverLived(earthAge, inputExpectancy, planetToErthRatios[planet][0])  + ".");
    } else {
      $(".output-leftYears").text("You just reached the poit of the life expectancy.")
    }
    $("#output2").show();

  });
});
