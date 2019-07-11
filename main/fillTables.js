 const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

 let today = new Date();
 let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
 let time = today.getHours() + ":" + today.getMinutes();
 var arr_day = [];

 for(let i=1; i<= 3; i++) {
     var tomorrow = new Date(today);
     tomorrow.setDate(today.getDate() + i);
     arr_day.push(days[tomorrow.getDay()])
 }

    function fillSideTable(data) {
        $('#sideTable').html(' <tbody> <tr> <td> Next days in ' + data.city.name +
        data.city.country + ' </td></tr> <tr> <td scope="col" > '+arr_day[0]+ ' </td> <td scope="col" > '+arr_day[1]+ '<td scope="col" > '+arr_day[2]+ ' </tr>   <tr> <td> '
             + "<img src='http://openweathermap.org/img/w/" 
            + data.list[8].weather[0].icon + ".png'>"
            + data.list[8].weather[0].description + '</td>  <td>  ' + "<img src='http://openweathermap.org/img/w/" + data.list[16].weather[0].icon + ".png'>"
            + data.list[16].weather[0].description + '</td>  <td>  ' + "<img src='http://openweathermap.org/img/w/" + data.list[24].weather[0].icon + ".png'>"
            + data.list[24].weather[0].description + '</td> </tr> '
            + '<tr> <td>Weather: ' + data.list[8].weather[0].main + ' </td>  <td> Weather: ' + data.list[16].weather[0].main + ' </td>  <td> Weather: ' + data.list[24].weather[0].main + '</td> </tr>'
            + '<tr> <td> Temp: ' + data.list[8].main.temp.toFixed() + '&deg;</td>  <td>Temp: ' + data.list[16].main.temp.toFixed() + '&deg;</td>  <td> Temp: ' + data.list[24].main.temp.toFixed() + '&deg;</td> </tr> </tbody>')
    }

    function showDataforWidget(data) {

        $(".temp").html(data.list[0].main.temp.toFixed() + '&deg')
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
            "<li>Temperature: " + data.list[0].main.temp.toFixed() + "&deg;</li> " +
            "<li>Minimum temperature: " + data.list[0].main.temp_min.toFixed() + "&deg;</li> " +
            "<li>Maximum temperature: " + data.list[0].main.temp_max.toFixed() + "&deg;</li> " +
            "<li>Pressure: " + data.list[0].main.pressure + " hPa</li> " +
            "<li>Humidity: " + data.list[0].main.humidity + " %</li> " +
            "<li>Wind Speed: " + data.list[0].wind.speed + " m/s</li></ul> ";
    }

    function showData(data) {
        return "<h4> Current weather for " + data.list[0].name + " " + data.list[0].sys.country + " </h4>" +
            "<ul > <img src='http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png'>"
            + data.list[0].weather[0].description +
            "<li >Weather: " + data.list[0].weather[0].main + "</li> " +
            "<li>Temperature: " + data.list[0].main.temp.toFixed() + "&deg;</li> " +
            "<li>Minimum temperature: " + data.list[0].main.temp_min.toFixed() + "&deg;</li> " +
            "<li>Maximum temperature: " + data.list[0].main.temp_max.toFixed() + "&deg;</li> " +
            "<li>Pressure: " + data.list[0].main.pressure + " hPa</li> " +
            "<li>Humidity: " + data.list[0].main.humidity + " %</li> " +
            "<li>Wind Speed: " + data.list[0].wind.speed + " m/s</li></ul> ";
    }

   
    
