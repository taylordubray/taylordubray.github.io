const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)

  .then(function (response)
  {

    return response.json();
    
  })
  
  .then(function (jsonObject)
  {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const towndata = jsonObject['towns'];

    for (let i = 0; i < towndata.length; i++ )
    {

        if ((towndata[i].name != "Fish Haven") && (towndata[i].name != "Preston") && (towndata[i].name != "Soda Springs"))
        {
            continue;
        }

        let townInfoSection = document.createElement('section');
        let townNameH1 = document.createElement('h1');
        let townMottoH4 = document.createElement('h4');
        let yearFoundedP = document.createElement('p');
        let populationP = document.createElement('p');
        let annualRainfallP = document.createElement('p');
        
        
        let townImg = document.createElement('img')

        let textDiv = document.createElement('div');

        let imgDiv = document.createElement('div');


        townInfoSection.className = "town-data-section";

        townNameH1.textContent = towndata[i].name;
        townMottoH4.textContent = towndata[i].motto;
        yearFoundedP.textContent = "Year Founded: " + towndata[i].yearFounded;
        populationP.textContent = "Population: " + towndata[i].currentPopulation;
        annualRainfallP.textContent = "Annual Rain Fall: " + towndata[i].averageRainfall;
        townImg.src = "images/" + towndata[i].photo;
        townImg.alt = "Photo of " + towndata[i].name;


        textDiv.appendChild(townNameH1);
        textDiv.appendChild(townMottoH4);        
        textDiv.appendChild(yearFoundedP);
        textDiv.appendChild(populationP);
        textDiv.appendChild(annualRainfallP);
        
        
        
        imgDiv.appendChild(townImg);

        townInfoSection.appendChild(textDiv);
        townInfoSection.appendChild(imgDiv);


        document.querySelector('div.town-data').appendChild(townInfoSection);

    }


  });