function login() {
    var emailorusername = document.getElementById('floatingInput').value;
    var password = document.getElementById('floatingPassword').value;
    var loginURL = "https://evoapi.reigdev.hu/api/v1/Login/";

    var newRequest = new XMLHttpRequest();
    newRequest.open('GET', loginURL, true);
    newRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    newRequest.onload = function() { //Átalakítás alatt :-)
        if (newRequest.status == 200) {
            var response = newRequest.responseText;
            if (response.success) {
                alert('Sikeres bejelentkezés!');
            } else {
                alert('Nem sikerült a bejelentkezés!');
            }
        }
    };
	var adat = "username=" + encodeURIComponent(emailorusername) + "&password=" + encodeURIComponent(password);
    newRequest.send(adat);
}