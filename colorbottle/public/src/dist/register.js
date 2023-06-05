function registerUser(event) {
    event.preventDefault();
    try {
        var name = event.target.elements.name.value;
        var email_1 = event.target.elements.email.value;
        var password = event.target.elements.password.value;
        var playerRegister = { name: name, email: email_1, password: password };
        console.log(playerRegister);
        if (!name)
            throw new Error("Name Requierd");
        if (!email_1)
            throw new Error("cant find user email");
        if (!password)
            throw new Error("cant find user password");
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
            window.location.href = "login.html?" + "email=" + email_1;
        });
    }
    catch (error) {
        console.error(error);
    }
}
