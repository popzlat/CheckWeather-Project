$(document).ready(function () {

const userEmail = $('#exampleInputEmail1').val();
const userPass = $('#exampleInputPassword1').val();



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

  

  function replaceHtml(){
    window.location.replace('main/main.html');
  }


  // login validation .......... Todoo



  $("#loginBtn").click(function () {
    let username = $('#exampleInputEmail1').val();
    console.log($('#exampleInputEmail1').val())
  replaceHtml();
  localStorage.setItem("user", username);
  });













})