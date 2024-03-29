$(document).ready(function () {

    let activUser = localStorage.getItem("user");

    $("#wellcomeId").html("Wellcome" + " " + activUser);
    let apiKey = "a03d830140c3e415955bb97782ca97ea";
    let cityLondon = "London";
    let cityNewYork = "New York";
    let cityParis = "Paris";

    let latitude;
    let longitude;

    function showPosition(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
    }

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }


    fetch('https://api.openweathermap.org/data/2.5/find?q=' + cityLondon + '&units=metric&appid=' + apiKey)
        .then(
            (response) => {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }
                response.json().then((data) => {
                    let widget = showData(data);
                    $('#london').html(widget);

                });
            }
        )
        .catch(() => {
            console.log('Something went wrong ');
        });

    fetch('https://api.openweathermap.org/data/2.5/find?q=' + cityNewYork + '&units=metric&appid=' + apiKey)
        .then(
            (response) => {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }
                response.json().then((data) => {
                    let widget = showData(data);
                    $('#newYork').html(widget);

                });
            }
        )
        .catch(() => {
            console.log('Something went wrong ');
        });
    fetch('https://api.openweathermap.org/data/2.5/find?q=' + cityParis + '&units=metric&appid=' + apiKey)
        .then(
            (response) => {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }
                response.json().then((data) => {
                    let widget = showData(data);
                    $('#paris').html(widget);
                });
            }
        )
        .catch(() => {
            console.log('Something went wrong ');
        });

    $("#citySearch").click(function () {
        let city = $('#city').val();
        if (city !== "") {
            fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&appid=a03d830140c3e415955bb97782ca97ea')
                .then(
                    (response) => {
                        if (response.status !== 200) {
                            console.log('Looks like there was a problem. Status Code: ' +
                                response.status);
                            confirm("Please enter valid city name")
                            return;
                        }
                        $("#exampleModal").modal('show');
                        $("#eror").hide();
                        response.json().then((data) => {
                            let widget = showDataForFiveDays(data);
                            $('#showWidget').html(widget);
                            fillSideTable(data)
                        });
                    }
                )
                .catch(() => {
                    console.log('Something went wrong ');
                });
        }
        else {
            $("#eror").show();
            $("#eror").html(" <br><div class='alert alert-danger alert-dismissible'><button type='button' class='close' data-dismiss='alert'>×</button>This field cannot be empty.</div>");
        }
    })

    $('#getLocation').click(function () {
        getLocation();
        setTimeout(function () {
            fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&units=metric&appid=' + apiKey)
                .then(
                    (response) => {
                        if (response.status !== 200) {
                            console.log('Looks like there was a problem. Status Code: ' +
                                response.status);
                            return;
                        }
                        response.json().then((data) => {
                            showDataforWidget(data)
                        });
                    }
                )
                .catch(() => {
                    console.log('Something went wrong ');
                });
        }, 5000)
    })

    $("#dateTime").html('<span> ' + date + '   ' + time + '</span>')
    $('#logOut').click(function () {
        window.location.replace('../index.html');
        localStorage.removeItem("user")
    })
})


