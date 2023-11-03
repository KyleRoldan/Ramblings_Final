import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"
import { createUser, getUserByEmail } from "../../services/UserService"

export const Register = (props) => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    isAdmin: false
    
  })
  let navigate = useNavigate()

  const registerNewUser = () => {
    const newUser = {
      ...user,
     
    }

    createUser(newUser).then((createdUser) => {
      if (createdUser.hasOwnProperty("id")) {
        localStorage.setItem(
          "ramblings_user",
          JSON.stringify({
            id: createdUser.id,
            staff: createdUser.isStaff,
          })
        )

        navigate("/")
      }
    })
  }

  const handleRegister = (e) => {
    e.preventDefault()
    getUserByEmail(user.email).then((response) => {
      if (response.length > 0) {
        // Duplicate email. No good.
        window.alert("Account with that email address already exists")
      } else {
        // Good email, create user.
        registerNewUser()
      }
    })
  }

  const updateUser = (evt) => {
    const copy = { ...user }
    copy[evt.target.id] = evt.target.value
    setUser(copy)
  }

  return (
  
  
  <div className="auth-container">

  <div className="log-in-text">Join</div>
  
  <div className= "secondary-conatiner">
    <form className="auth-form" onSubmit={handleRegister}>
      
      <div className="auth-box">
        <div className="auth-fieldset">
        <input
              onChange={updateUser}
              type="text"
              id="fullName"
              className="auth-form-input"
              placeholder="Enter your name"
              required
              autoFocus
            />
        </div>
      </div>
       
       <div className="auth-box">
        <div className="auth-fieldset">
        <input
              onChange={updateUser}
              type="email"
              id="email"
              className="auth-form-input"
              placeholder="Email address"
              required
            />
        </div>
      </div>
      <div className="newUser-box"></div>

      <div className="register-link">
        <button class="classic-button" type="submit">Register</button>
     </div>




    </form>
  </div>
  


</div>




//     <main className="auth-container">
//       <form className="auth-form" onSubmit={handleRegister}>
        
//        <div><h2>join</h2></div> 
//         <fieldset className="auth-fieldset">
//           <div>
//             <input
//               onChange={updateUser}
//               type="text"
//               id="fullName"
//               className="auth-form-input"
//               placeholder="Enter your name"
//               required
//               autoFocus
//             />
//           </div>
//         </fieldset>
//         <fieldset className="auth-fieldset">
//           <div>
//             <input
//               onChange={updateUser}
//               type="email"
//               id="email"
//               className="auth-form-input"
//               placeholder="Email address"
//               required
//             />
//           </div>
//         </fieldset>

//         <fieldset className="auth-fieldset">
//           <div>
//             <button type="submit">Register</button>
//           </div>
//         </fieldset>
//       </form>
//     </main>


)
}
