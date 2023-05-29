function registerUser(event) {
    event.preventDefault();
    try {
        var playerName = event.target.elements.name.value;
        var playerEmail_1 = event.target.elements.email.value;
        var playerPassword = event.target.elements.password.value;
        var playerRegister = { playerName: playerName, playerEmail: playerEmail_1, playerPassword: playerPassword };
        console.log(playerRegister);
        fetch("/api/players/register", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(playerRegister)
        })
            .then(function (res) {
            console.log(res);
            if (res.status === 409) {
                alert("user already exists");
                throw new Error("user already exists");
            }
            else {
                return res.json();
            }
        })
            .then(function (data) {
            window.location.href = "login.html?" + "email=" + playerEmail_1;
        });
    }
    catch (error) {
        console.error(error);
    }
}
