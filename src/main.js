import './styles.css';
import { Date } from './date.js';


$(document).ready(function() {
  $('#date-form').submit(function(event) {
    event.preventDefault();
    let db = $('#date1').val();
    let currentDate = $('#currentDate').val();
    let output = Date.age(db, currentDate);

    $("#output").text(output);
  });
});
