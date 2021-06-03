const button = document.querySelector('button');

button.addEventListener('click', event => {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState !== 4) return;
		if (xhr.status >= 200 && xhr.status < 300) {
			var activity = JSON.parse(xhr.responseText);
			document.getElementById("activity").innerHTML = activity.activity;

		}
	};
	const url = "https://www.boredapi.com/api/activity";
	xhr.open('GET', url);
	xhr.send();
});