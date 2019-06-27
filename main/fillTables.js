
    function fillSideTable(data) {
        $('#sideTable').html(' <tbody> <tr> <td> ' + "<img src='http://openweathermap.org/img/w/" + data.list[8].weather[0].icon + ".png'>"
            + data.list[8].weather[0].description + '</td>  <td>  ' + "<img src='http://openweathermap.org/img/w/" + data.list[16].weather[0].icon + ".png'>"
            + data.list[16].weather[0].description + '</td>  <td>  ' + "<img src='http://openweathermap.org/img/w/" + data.list[24].weather[0].icon + ".png'>"
            + data.list[24].weather[0].description + '</td> </tr> '
            + '<tr> <td>Weather: ' + data.list[8].weather[0].main + ' </td>  <td> Weather: ' + data.list[16].weather[0].main + ' </td>  <td> Weather: ' + data.list[24].weather[0].main + '</td> </tr>'
            + '<tr> <td> Temp: ' + data.list[8].main.temp + '&deg;</td>  <td>Temp: ' + data.list[16].main.temp + '&deg;</td>  <td> Temp: ' + data.list[24].main.temp + '&deg;</td> </tr> </tbody>')
    }



    function showDataforWidget(data) {

        $(".temp").html(data.list[0].main.temp + '&deg')
        $(".location").html(data.city.name + " " + data.city.country)
        $(".wind").html(data.list[0].wind.speed + '<br>' + 'mph')
        $(".rain").html(data.list[0].main.humidity + '<br>' + '%')
        $(".conditions").html("<img src='http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png'>"
            + data.list[0].weather[0].description).css({ "font-family": "Open Sans" })
    }


    function showDataForFiveDays(data) {
        return "<h4> Current weather for " + data.city.name + " " + data.city.country + " </h4>" +
            "<ul > <img src='http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png'>"
            + data.list[0].weather[0].description +
            "<li >Weather: " + data.list[0].weather[0].main + "</li> " +
            "<li>Temperature: " + data.list[0].main.temp + "&deg;</li> " +
            "<li>Minimum temperature: " + data.list[0].main.temp_min + "&deg;</li> " +
            "<li>Maximum temperature: " + data.list[0].main.temp_max + "&deg;</li> " +
            "<li>Pressure: " + data.list[0].main.pressure + " hPa</li> " +
            "<li>Humidity: " + data.list[0].main.humidity + " %</li> " +
            "<li>Wind Speed: " + data.list[0].wind.speed + " m/s</li></ul> ";


    }

    function showData(data) {
        return "<h4> Current weather for " + data.list[0].name + " " + data.list[0].sys.country + " </h4>" +
            "<ul > <img src='http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png'>"
            + data.list[0].weather[0].description +
            "<li >Weather: " + data.list[0].weather[0].main + "</li> " +
            "<li>Temperature: " + data.list[0].main.temp + "&deg;</li> " +
            "<li>Minimum temperature: " + data.list[0].main.temp_min + "&deg;</li> " +
            "<li>Maximum temperature: " + data.list[0].main.temp_max + "&deg;</li> " +
            "<li>Pressure: " + data.list[0].main.pressure + " hPa</li> " +
            "<li>Humidity: " + data.list[0].main.humidity + " %</li> " +
            "<li>Wind Speed: " + data.list[0].wind.speed + " m/s</li></ul> ";
    }


    
    let latitude;
    let longitude;
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }
    function showPosition(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
    }
