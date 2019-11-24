const currentWeatherRequestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=c1ed581fad3ad1154a8a70dafc61d847&units=imperial';

const forecastWeatherRequestURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=c1ed581fad3ad1154a8a70dafc61d847&units=imperial';

fetch(currentWeatherRequestURL)

  .then(function (response)
  {

    return response.json();
    
  })
  
  .then(function (jsonObject)
  {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    document.getElementById("current-weather-temperature").innerHTML = jsonObject['main']['temp'];

    document.getElementById("current-weather-humidity").innerHTML = jsonObject['main']['humidity'] + "%";

    document.getElementById("current-weather-wind-speed").innerHTML = jsonObject['wind']['speed'];

    document.getElementById("current-weather-condition").innerHTML = jsonObject['weather'][0]['main'];


    var temperature = parseFloat(jsonObject['wind']['speed']);

    var windSpeed = parseFloat(jsonObject['wind']['speed']);

   
    if (temperature > 50 || windSpeed < 3)
    {
        document.getElementById("windchill").innerHTML = "N/A";
    }
    else
    {
        var windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));

        document.getElementById("windchill").innerHTML = windChill.toFixed(2) + "° F";
    }    
    

  });

  
  
  
  
  
  
  
  
fetch(forecastWeatherRequestURL)

  .then(function (response)
  {

    return response.json();
    
  })
  
  .then(function (jsonObject)
  {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const forecastList = jsonObject['list']

    var dayCounter = 1;

    for (i = 0; i < forecastList.length; i++)
    {        

        if (forecastList[i]['dt_txt'].includes('18:00:00'))
        {
            var unixTime = parseFloat(forecastList[i]['dt']);

            var forecastDate = new Date(unixTime * 1000);

            var forecastDayNumber = forecastDate.getDay();

            var dayOfWeek = "";

            switch(forecastDayNumber)
            {
                case 0:
                    dayOfWeek = "Sun";
                    break;
                case 1:
                    dayOfWeek = "Mon";
                    break;
                case 2:
                    dayOfWeek = "Tue";
                    break;
                case 3:
                    dayOfWeek = "Wed";
                    break;
                case 4:
                    dayOfWeek = "Thu";
                    break;
                case 5:
                    dayOfWeek = "Fri";
                    break;
                case 6:
                    dayOfWeek = "Sat";
                    break;
                default:
                    break;
            }
            
            document.getElementById("day" + dayCounter + "-day-name").innerHTML = dayOfWeek;

            document.getElementById("day" + dayCounter + "-weather-icon").src = 'https://openweathermap.org/img/w/' + forecastList[i]['weather'][0].icon + '.png';

            document.getElementById("day" + dayCounter + "-temperature").innerHTML = forecastList[i]['main']['temp'];

            dayCounter++;
        }
    }

    // document.getElementById("current-temp").innerHTML = main['temp']

    // const weather = jsonObject['weather']

    // const imagesrc = 'https://openweathermap.org/img/w/' + weather[0].icon + '.png';

    // const desc = weather[0].description;



    // document.getElementById("imagesrc").innerHTML = imagesrc;

    // document.getElementById("icon").alt = desc;

    // document.getElementById("icon").src = imagesrc;




  });
