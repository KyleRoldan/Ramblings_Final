import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./Login.css"
import { getUserByEmail } from "../../services/UserService"
import navLogoImage from "../../assets/ramblingsvintagelogo.png"

export const Login = () => {
  const [email, set] = useState("")
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    return getUserByEmail(email).then((foundUsers) => {
      if (foundUsers.length === 1) {
        const user = foundUsers[0]
        localStorage.setItem(
          "ramblings_user",
          JSON.stringify({
            fullName: user.fullName,
            email: user.email,
            isAdmin: user.isAdmin,
            id: user.id
          })
        )

        navigate("/")
      } else {
        window.alert("Invalid login")
      }
    })
  }

  return (
    <div className="background-container">

     
        <img className="login-logo" src={navLogoImage} alt ="logo"/>
      


        <div className="auth-container">

{/* <div className="log-in-text">Log in</div> */}

<div className= "secondary-conatiner">
  <form className="auth-form" onSubmit={handleLogin}>

    <div className="auth-box">
      <div className="auth-fieldset">
        <input
          type="email"
          value={email}
          className="auth-form-input"
          onChange={(evt) => set(evt.target.value)}
          placeholder="Email address"
          required
          autoFocus
        />
      </div>
    </div>

     <div className="auth-fieldset">
      <div>
        <button className="classic-button-login" type="submit">Sign In</button>
      </div>
    </div>

  </form>

{/* <div className="newUser-box">New user?</div> */}

<div className="register-link">
  <Link to="/register"><button className="classic-button-login" type="submit">Join Now</button></Link>
</div>

</div>


   
    </div>
    </div>
  )
}

