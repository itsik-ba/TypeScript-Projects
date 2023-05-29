function handleLogin(event) {
    event.preventDefault();
    try {
        var email_1 = event.target.elements.name.value;
        var password = event.target.elements.password.value;
        var userLogin = { email: email_1, password: password };
        var htmlEror = document.querySelector("#error");
        if (!email_1)
            throw new Error("user name is not valid");
        if (!password)
            throw new Error("cant find user password");
        fetch("/api/users/login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userLogin)
        })
            .then(function (res) {
            console.log(res);
            if (res.status === 401) {
                alert("email/password incorrect");
                throw new Error("email/password incorrect");
            }
            else {
                return res.json();
            }
        })
            .then(function (data) {
            console.log(data);
            window.location.href = "./main.html?" + "email=" + email_1;
        });
    }
    catch (error) {
        console.error(error);
    }
}
