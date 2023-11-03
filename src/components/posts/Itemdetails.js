import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItemById} from "../../services/FetchCalls";
import { CreateItemDetails } from "./createItemDetails";
import { AdminItemDetails } from "./AdminItemDetails";


export const ItemDetails = ({ currentUser }) => {
  const {itemId} = useParams();
  
  

 
  
  const [item, setItem] = useState({});
 

  useEffect(() => {
    getItemById(itemId).then((itemData) => {
      setItem(itemData);
      
    });
  }, [itemId]);
  
  return currentUser.isAdmin ? (<AdminItemDetails  item={item} currentUser={currentUser}/>) : (<CreateItemDetails item={item} currentUser={currentUser}/>)  
};


