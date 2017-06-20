// 1. Fetch your users data

// 2. Loop over the data
let customers = document.querySelector(".customers");


(function () {

  'use strict';

fetch("https://randomuser.me/api/?results=15")
.then(function(response) {
  response.json()
.then(function(data) {
      console.log(data.results);
      let users = data.results;
      let userData = "";


      for (var i = 0; i < users.length; i++) {
        userData += "<img src=" + users[i].picture.large + ">";
        userData += users[i].name.first + " " + users[i].name.last;
        userData += users[i].email;
        userData += " " + users[i].location.street + " " + users[i].location.city + " " +users[i].location.state;
        userData += " " + users[i].cell;
        userData += "<br>";
      }
// cnange all [0] to [i]

       customers.innerHTML = userData;

    })
  })
})();





  // Your Code Goes Here

// name, email, cell, image
//
// name {first:
//   last
// }
// picture {
//   .large: ("url-string)
// location {
//   street: ("string")
//   city;: ("string")
//   state: ("string")
// }
// cell: ("string")
