import './styles.css';
import { Date } from './date.js';


$(document).ready(function() {
  $('#date-form').submit(function(event) {
    event.preventDefault();
    let db = $('#date1').val();
    let currentDate = $('#currentDate').val();
    let earthAge = Date.calculateAge(db, currentDate);
    let planet = parseInt($('#planet').val());
    //let inputExpectacy = parseInt($('#lifeExpectancy').val());

    let planetToErthRatios = [0.24,0.62,1.88,11.86];
    let planetAge = Date.convertInPlanetAge(planetToErthRatios[planet], earthAge);
    $("#planet-age").text(planetAge);

    $("#output-age").text(earthAge);
    $("#output-ageInSeconds").text(Date.ageInSeconds(earthAge));

  });
});
