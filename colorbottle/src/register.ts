function registerUser(event: any){
    event.preventDefault()

    try {
      const playerName = event.target.elements.name.value;  
      const playerEmail = event.target.elements.email.value;  
      const playerPassword = event.target.elements.password.value; 
      const playerRegister = { playerName, playerEmail, playerPassword}
      console.log(playerRegister)

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
          window.location.href = "login.html?" + "email=" + playerEmail
        })
       


    } catch (error) {
      console.error(error)  
    }
   
}






