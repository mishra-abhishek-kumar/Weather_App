const url = "https://api.api-ninjas.com/v1/weather?city=";

const options = {
    "method": 'GET',
    "headers": {
        "X-Api-Key": 'Q96lfn93GOQ7IGLdYwlKVA==RR4rywohaljxyD09'
    },
    contentType: 'application/json'
};

const fetchData = async (city) => {
    const response = await fetch(url+city, options);
    const data = await response.json();

    //getting id's of HTMl elements and passing value to it
    cloud_pct.innerHTML = data.cloud_pct;
    feels_like.innerHTML = data.feels_like;
    humidity.innerHTML = data.humidity;
    max_temp.innerHTML = data.max_temp;
    min_temp.innerHTML = data.min_temp;
    sunrise.innerHTML = data.sunrise;
    sunset.innerHTML = data.sunset;
    temp.innerHTML = data.temp;
    wind_degrees.innerHTML = data.wind_degrees;
    wind_speed.innerHTML = data.wind_speed;

    console.log(data);
}


submit.addEventListener("click", (e) => {
    city.innerHTML = inputPlace.value;
    fetchData(inputPlace.value);
})

city.innerHTML = "Mumbai";
fetchData("Mumbai");


// https://api-ninjas.com/api/weather

