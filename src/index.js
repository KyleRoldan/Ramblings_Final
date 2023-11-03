
import { createRoot } from "react-dom/client"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import App from "./App"


const container = document.getElementById("root")
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)




// export const getFavoritedItems = () => {

//   return fetch 
//   (`http://localhost:8088/favorite?_embed=itemId`)
//   .then((response)=>response.json())

  
// }


// export const assignLike = (favorite) =>{


//   return fetch(`http://localhost:8088/favorite`,{
//      method: "POST",
//      headers: {
//         "Content-Type": "application/json",
//      },
//      body: JSON.stringify(favorite)
//   }
  
  
//   )
// }

// export const updateLike = (item) =>{


//   return fetch(`http://localhost:8088/item/${item.id}`,{
//      method: "PUT",
//      headers: {
//         "Content-Type": "application/json",
//      },
//      body: JSON.stringify(item),
//   }
  
  
//   )
// }

// export const deleteLike = (itemId) => {

//   return fetch(`http://localhost:8088/item/${itemId}`,

//   {
//      method:"DELETE",

//   })


// }
