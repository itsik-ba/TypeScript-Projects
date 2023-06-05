function registerUser(event: any){
    event.preventDefault()

    try {
      const name = event.target.elements.name.value;  
      const email = event.target.elements.email.value;  
      const password = event.target.elements.password.value; 
      const playerRegister = { name, email, password}
      console.log(playerRegister)
      if (!name) throw new Error("Name Requierd")
      if (!email) throw new Error("cant find user email")
      if (!password) throw new Error("cant find user password")
      fetch("/api/players/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(playerRegister),
      })
        .then((res) => {
          console.log(res)
          if (res.status === 409) {
            alert("user already exists")
            throw new Error("user already exists");
          } else {
            return res.json();
          }
        })
        .then((data) => {
          window.location.href = "login.html?" + "email=" + email
        })
       


    } catch (error) {
      console.error(error)  
    }
   
}






