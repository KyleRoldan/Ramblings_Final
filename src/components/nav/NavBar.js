import React, { useEffect, useState } from 'react';
import navIconImage from "../../assets/menu_icon.png"
import navLogoImage from "../../assets/ramblingsvintagelogo.png"
import "./NavBar.css"
import { Link, useNavigate, } from 'react-router-dom'
import { getAllUsers } from '../../services/FetchCalls'





export const NavBar = ({currentUser}) => {
  const navigate = useNavigate()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  
  useEffect(() => {
    getAllUsers().then((usersArray) => {
      setAllUsers(usersArray);
    });
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleServiceClick = () => {
    
    
    // Optionally, you can close the dropdown by setting isDropdownOpen to false
    setIsDropdownOpen(false);
  };

  const userEmail = allUsers
  .filter((user) => user.id === currentUser.id)
  .map((user )=> user.fullName)

  

  return (
    <div className="navbar">
        
        <div className="userSection">
            <div className="userProfilePic-box">
<<<<<<< HEAD
                {/* <img className="userProfilePic" alt="User Profile Pic" src={navIconImage}/> */}
                Hey,
=======
                <img className="userProfilePic" alt="User Profile Pic" src={navIconImage}/>
>>>>>>> 92724c619b302066aa0b0fe537d329344da44927
            </div>
        <div className="userBox"> {userEmail} </div>
       </div>
       
       <div className="logoBox">
        <img className= "nav-logo" src={navLogoImage} alt="Dropdown Button" />
       </div>

      <div className="nav-itemDropDown">
        <button onClick={toggleDropdown} className="dropdown-button">
        <img className= "nav-Icon" src={navIconImage} alt="Dropdown Button" />
        </button>
        {isDropdownOpen && (
          <div className="dropdown-content">

<<<<<<< HEAD
            <Link className='link-tag' to="/items">
            <div className="dropdown-item" onClick={() => handleServiceClick(1)}>
            H
            o
            m
            e</div>
            </Link>

            <Link className='link-tag' to="/addItem">
            <div className="dropdown-item" onClick={() => handleServiceClick(2)}>
            A
            d
            d 
            
            I
            t
            e
            m
            s</div>
=======
            <Link to="/items">
            <div className="dropdown-item" onClick={() => handleServiceClick(1)}>Home</div>
            </Link>

            <Link to="/addItem">
            <div className="dropdown-item" onClick={() => handleServiceClick(2)}>Add Items</div>
>>>>>>> 92724c619b302066aa0b0fe537d329344da44927
            </Link>

           

            
            
            
            
            
            
            {/* <Link to="/favorites">
            <div className="dropdown-item" onClick={() => handleServiceClick(2)}>Favorites</div>
            </Link>

            <Link to="/lists">
            <div className="dropdown-item" onClick={() => handleServiceClick(3)}> Curated List</div>
            </Link> */}


{localStorage.getItem("ramblings_user") ? (
<<<<<<< HEAD
    <Link 
      className='link-tag'
=======
    <Link
      className="navbar-link"
>>>>>>> 92724c619b302066aa0b0fe537d329344da44927
      to=""
      onClick={() => {
        localStorage.removeItem("ramblings_user")
        navigate("/", { replace: true })
      }}
    >
      <div className="dropdown-item">
<<<<<<< HEAD
      L
      o
      g
      o
      u
      t
=======
      Logout
>>>>>>> 92724c619b302066aa0b0fe537d329344da44927
      </div>
    </Link>
) : (
  ""
)}

          </div>
        )}
      </div>

    </div>
  );
}


