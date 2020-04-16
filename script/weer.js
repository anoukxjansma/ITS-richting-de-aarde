function getAPIdata() {
	let cityName = document.getElementById('cityName').value;
	let request = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&lang=nl&appid=37bcf4cf4b9c757597ef691171fa0714';

	fetch(request)
	.then(function(response) {
		if(!response.ok) throw Error(response.statusText);
		return response.json();
	})

	.then(function(response) {
		onAPISucces(response);
	})

	.catch(function (error) {
		onAPIError(error);
	});
};

function onAPISucces(response) {
	var description = response.weather[0].description;
	var temp = response.main.temp;
	var windSpeed = response.wind.speed;
	var pressure = response.main.pressure;


	var weatherDes = document.getElementById('weatherDes');
		weatherDes.innerHTML = description;
	var weatherTemp = document.getElementById('weatherTemp');
		weatherTemp.innerHTML = (temp + " °C");
	var weatherWind = document.getElementById('weatherWind');
		weatherWind.innerHTML = (windSpeed + " m/s");
	var weatherPress = document.getElementById('weatherPress');
		weatherPress.innerHTML = (pressure + " hPa");
};

function onAPIError(error) {
	console.error('Fetch request failed', error);

	document.getElementById('btn-weergeven').classList.add('btn-animation');
	setTimeout(function(){ document.getElementById('btn-weergeven').classList.remove('btn-animation'); }, 2000);

	var weatherDes = document.getElementById('weatherDes');
		weatherDes.innerHTML = "Error! Voer plaats in";
	var weatherTemp = document.getElementById('weatherTemp');
		weatherTemp.innerHTML = "Helaas...";
	var weatherWind = document.getElementById('weatherWind');
		weatherWind.innerHTML = "Jammer";
	var weatherPress = document.getElementById('weatherPress');
		weatherPress.innerHTML = "Sorry :(";
};