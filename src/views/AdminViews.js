import { Outlet, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/nav/NavBar"
import { Welcome } from "../components/welcome/Welcome"
import { AllItems } from "../components/posts/AllItems"
import { ItemDetails } from "../components/posts/Itemdetails"
import { Favorites } from "../components/posts/Favorites"
import { AllLists } from "../components/posts/About"
import { AddItem } from "../components/posts/AddItem"
import { EditItem } from "../components/posts/EditItem"







export const AdminViews = ({currentUser}) => {

return (

<>

<Routes>
  <Route path="/"

element={
<>
<NavBar currentUser={currentUser}/>
<Outlet />
</>
}
>
<Route index element={<Welcome />} />
<Route path ="items" index element={<AllItems currentUser={currentUser} />} />
<Route path="/items/:itemId" element={<ItemDetails currentUser={currentUser} />} />
<Route path="/items/:itemId/editItem" element={<EditItem currentUser={currentUser} />} />

<Route path ="addItem" index element={<AddItem currentUser={currentUser}/>} />
{/* <Route path="favorites" element={<Favorites currentUser={currentUser} />} />
<Route path ="lists" index element={<AllLists currentUser={currentUser}/>} /> */}




</Route>
  </Routes>
  
  
  </>





)




}