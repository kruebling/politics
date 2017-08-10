var republican = 0;
var democrat = 0;
var independent = 0;

$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();

    var one = $("input:radio[name=optradio1]:checked").val();
    var two = $("input:radio[name=optradio2]:checked").val();
    var three = $("input:radio[name=optradio3]:checked").val();
    var four = $("#party").val();

    if (one==undefined || two==undefined || three==undefined) {
      alert("Please select a response for each question");
    } if (one == 'rep') {
      republican += 1;
    } else if (one == 'dem') {
      democrat += 1;
    } else if (one == 'ind') {
      independent += 1;
    } if (two == 'rep') {
      republican += 1;
    } else if (two == 'dem') {
      democrat += 1;
    } else if (two == 'ind') {
      independent += 1;
    } if (three == 'rep') {
      republican += 1;
    } else if (three == 'dem') {
      democrat += 1;
    } else if (three == 'ind') {
      independent += 1;
    } if (four == 'rep') {
      republican += 1;
    } else if (four == 'dem') {
      democrat += 1;
    } else if (four == 'ind') {
      independent += 1;
    }

    $('#result').text('You scored ' + republican + ' for republican and ' + democrat + ' for democrat and ' + independent + ' as independent.');
    alert(republican +''+ democrat +''+ independent);

  });
});
