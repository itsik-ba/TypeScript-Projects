function handleLogin(event: any) {
    event.preventDefault()
    try {
      const email = event.target.elements.name.value;
      const password = event.target.elements.password.value;
      const userLogin = { email, password }
      if (!email) throw new Error("user name is not valid");
      if (!password) throw new Error("cant find user password")
  
  
      fetch("/api/users/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userLogin),
      })
        .then((res) => {
          console.log(res)
          if (res.status === 401) {
            alert("email/password incorrect")
            throw new Error("email/password incorrect");
          } else {
            return res.json();
          }
        })
        .then((data) => {
          console.log(data);
  
          window.location.href = "./main.html?" + "email=" + email
        })
  
    } catch (error) {
      console.error(error)
    }
  
}  