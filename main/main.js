$(document).ready(function () {

    let apiKey = "a03d830140c3e415955bb97782ca97ea";
    let cityLondon = "London";
    let cityNewYork = "New York";
    let cityParis = "Paris";

    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes();
    let thisDay = today.getDay();
    let nameOfTheDay;

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    switch (thisDay) {
        case 1:
            nameOfTheDay = days[0]
            break;
        case 2:
            nameOfTheDay = days[1]
            break;
        case 3:
            nameOfTheDay = days[2]
            break;
        case 4:
            nameOfTheDay = days[3]
            break;
        case 5:
            nameOfTheDay = days[4]
            break;
        case 6:
            nameOfTheDay = days[5]
            break;

        default:
            console.log(nameOfTheDay = days[6]);
            break;
    }


    fetch('https://api.openweathermap.org/data/2.5/find?q=' + cityLondon + '&units=metric&appid=' + apiKey)
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }
                response.json().then(function (data) {
                    console.log(data);
                    let widget = showData(data);
                    $('#london').html(widget);

                });
            }
        )
        .catch(function () {
            console.log('Something went wrong ');
        });

    fetch('https://api.openweathermap.org/data/2.5/find?q=' + cityNewYork + '&units=metric&appid=' + apiKey)
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }
                response.json().then(function (data) {
                    console.log(data);
                    let widget = showData(data);
                    $('#newYork').html(widget);

                });
            }
        )
        .catch(function () {
            console.log('Something went wrong ');
        });
    fetch('https://api.openweathermap.org/data/2.5/find?q=' + cityParis + '&units=metric&appid=' + apiKey)
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }
                response.json().then(function (data) {
                    console.log(data);
                    let widget = showData(data);
                    $('#paris').html(widget);

                });
            }
        )
        .catch(function () {
            console.log('Something went wrong ');
        });

   

    $("#citySearch").click(function () {
        let city = $('#city').val();
        if (city != "") {
            fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&appid=a03d830140c3e415955bb97782ca97ea')
                .then(
                    function (response) {
                        if (response.status !== 200) {
                            console.log('Looks like there was a problem. Status Code: ' +
                                response.status);
                            return;
                        }
                        response.json().then(function (data) {
                            console.log(data);
                            let widget = showDataForFiveDays(data);
                            $('#showWidget').html(widget);
                            $('.tempForNextDaysForSearchCity').html('<span> Next days in ' + data.city.name +
                                data.city.country + '</span>')
                            fillSideTable(data)
                        });
                    }
                )
                .catch(function () {
                    console.log('Something went wrong ');
                });
        }
        else {
            $("#eror").html(" <br><div class='alert alert-danger alert-dismissible'><button type='button' class='close' data-dismiss='alert'>×</button>This field cannot be empty.</div>");
        }

    })

    $('#getLocation').click(function () {
        getLocation();
        setTimeout(function () {
            fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&units=metric&appid=' + apiKey)
                .then(
                    function (response) {
                        if (response.status !== 200) {
                            console.log('Looks like there was a problem. Status Code: ' +
                                response.status);
                            return;
                        }
                        response.json().then(function (data) {
                            showDataforWidget(data)
                            setTimeout(function () {
                                $('#exampleModal').show();

                            }, 6000)
                        });
                    }
                )
                .catch(function () {
                    console.log('Something went wrong ');
                });
        }, 5000)
    })

    $("#dateTime").html('<span> ' + date + '   ' + time + '</span>')
    $(".tommorow").html(nameOfTheDay);
    $(".afterTommorow").html(nameOfTheDay);
    $(".twoDaysafterTommorow").html(nameOfTheDay);
    $('#logOut').click(function () {
        window.location.replace('../login.html');
        console.log("clickced")
    })


})


