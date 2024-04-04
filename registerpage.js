function register() {
    var registerFirstName = document.getElementById('firstname').value;
    var RegisterLastName = document.getElementById('lastname').value;
    var registerEmail = document.getElementById('email').value;
    var registerPassword = document.getElementById('password').value;
    var loginURL = "https://evoapi.reigdev.hu/api/v1/Login/";

    var newRequest = new XMLHttpRequest();
    newRequest.open('GET', loginURL, true);
    newRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    newRequest.onload = function() {
        if (newRequest.status == 200) {
            var response = newRequest.responseText;
            if (response.success) {
                alert('Sikeres regisztráció!');
            } else {
                alert('Nem sikerült a regisztráció');
            }
        }
    };
	var adat = "registerFirstName=" + encodeURIComponent(registerFirstName) + "&RegisterLastName=" + encodeURIComponent(RegisterLastName) + "&registerEmail" + encodeURIComponent(registerEmail) + "&registerPassword" + encodeURIComponent(registerPassword);
    newRequest.send(adat);
}