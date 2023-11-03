import { Outlet, Route, Routes } from "react-router-dom"
import {NavBar} from "../components/nav/NavBar"
import { Welcome } from "../components/welcome/Welcome"
import { useEffect, useState } from "react"
import { AddItem } from "../components/posts/AddItem"
import { AllItems } from "../components/posts/AllItems"
import { AllLists } from "../components/posts/About"
import { EditItem } from "../components/posts/EditItem"
import { EditList } from "../components/posts/EditList"
import { Favorites } from "../components/posts/Favorites"
import { ItemDetails } from "../components/posts/Itemdetails"
import { ListDetails } from "../components/posts/ListDetails"
import { AdminViews } from "./AdminViews"
import { UserView } from "./UserView"







export const ApplicationViews = () => {
    
    const [currentUser, setCurrentUser] = useState({})

useEffect(() => {
  const localLearningUser = localStorage.getItem("ramblings_user")
  const learningUserObject = JSON.parse(localLearningUser)
  setCurrentUser(learningUserObject)
}, [])






    return currentUser.isAdmin ? (<AdminViews currentUser={currentUser}/>) : (<UserView currentUser={currentUser}/>)
}
