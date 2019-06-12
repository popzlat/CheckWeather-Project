$(document).ready(function () {

let userEmail = $('#exampleInputEmail1').val();
let userPass = $('#exampleInputPassword1').val();



  setTimeout(function () {
    $("#gifDiv").hide();
    $("#logInModal").show();

  }, 1000);

  let jsonUrl = "https://raw.githubusercontent.com/popzlat/CheckWeather-Project/master/users.json"
  let response;
  function getDataFromJson(url) {
    $.ajax({
      url: url,
      type: 'GET',
      crossDomain: 'true',
      async: false,
      success: function (data) {
        response = JSON.parse(data);
        console.log(response)
      },
      error: function () {
        console.log("Users not found");
      }
    })
  }
  getDataFromJson(jsonUrl)

  let activeUser = null;
  

  let userFirstName;


  let user = {};

  function replaceHtml(){
    window.location.replace('main/main.html');
  }


  // function checkUser(response, username, password) {
  //   for (let index = 0; index < response.length; index++) {
  //     if ( username == response[index].email ) {
  //       if ( password==response[index].password ) {
  //         userFirstName = response[index].firstName;

  //         user.id = response[index].id;
  //         user.firstName = response[index].firstName;
  //         user.lastName = response[index].lastName;
  //         user.email = response[index].email;
  //         user = activeUser;
  //         userFirstName = activeUser.firstName;

  //       replaceHtml()
          
  //       }

  //     }
  //   }

  // }

  // checkUser(response,userEmail,userPass)



  $("#loginBtn").click(function () {
  replaceHtml();
  });













})