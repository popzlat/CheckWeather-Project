$(document).ready(function () {

  setTimeout(function () {
    $("#gifDiv").hide();
    $("#logInModal").show();
  }, 3000);

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
      },
      error: function () {
        console.log("Users not found");
      }
    })
  }
  getDataFromJson(jsonUrl)


  function replaceHtml() {
    window.location.replace('main/main.html');
  }

  let user;
  

  function checkUser(username, password) {
    let userFlag = true;
    let passFlag = true;

    for (let i = 0; i < response.length; i++) {
      if (response[i].email === username) {
        if (response[i].password === password) {
          passFlag = false;
        } else {
          passFlag = true;
        }
        userFlag = false;
        user = response[i].firstName;
        break;
      }
    }

    if (userFlag) {
      console.log("ok")
    }

    if (!userFlag && passFlag) {
      confirm("Wrong password")
    }

    if (userFlag && passFlag) {
      confirm("Wrong username and wrong password")
    }
    if (!userFlag && !passFlag) {
      localStorage.setItem("user", user);
      replaceHtml();
    }
  }

  $("#loginBtn").click(function () {
    let userEmail = $('#exampleInputEmail1').val();
    let userPass = $('#exampleInputPassword1').val();
    checkUser(userEmail, userPass);
  });




})