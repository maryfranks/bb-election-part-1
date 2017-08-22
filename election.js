document.addEventListener("DOMContentLoaded", function() {

  $.ajax({
      url: "https://bb-election-api.herokuapp.com/",
      method: "GET",
      dataType: "json"
    }).done(function (responseData) {

      var candidatesArray = responseData.candidates;
      console.log(candidatesArray);
      for (var i = 0; i < candidatesArray.length; i++) {
        var name = candidatesArray[i]['name']
        var votes = candidatesArray[i]['votes']

        var newListItem = document.createElement('li');
        newListItem.innerText = name + ", votes: " + votes;
        var mainList = document.getElementById('candidates');
        mainList.appendChild(newListItem);
      }

    });

});
