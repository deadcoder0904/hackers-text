$(document).ready(function () {

  var box = $('#box');
  var button = $('.action-button');
  var noinput = $('#no-input');
  var output = $('#result');

  $('#times').click(function () {
    noinput.css('display', 'none');
  });

    button.click(function () {
      var val = box.val();
      if(val === "") {
        noinput.css('display', 'block');
        $('#error').html('Enter a String.');
      }
      else {
        noinput.css('display', 'none');
        var url;
        if($(this).attr("id") == "1")
          url = "https://montanaflynn-l33t-sp34k.p.mashape.com/encode?text=";     //encode
        else url = "https://montanaflynn-l33t-sp34k.p.mashape.com/decode?text=";  //decode
        url += encodeURIComponent(val);
        $.ajax({
          method: 'GET',
          headers: {'X-Mashape-Key': 'l7ccOZZwlymsh5f0S5jntk8Tg0eRp1dTEpFjsnuoS11DohYlmz', 'Accept': 'text/plain'},
          url: url,
          dataType: 'json',
          success: function (data) {
          },
          error: function (err) {
            var res = "<h1>" + err.responseText + "</h1>";
            output.html(res);
          }
        });
      }
  });
});