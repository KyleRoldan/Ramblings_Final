export const getAllUsers = () => {

  return fetch("http://localhost:8088/user").then(
    (res) => res.json()
  )

}

export const getAllItems = () => {

  return fetch("http://localhost:8088/item").then(
    (res) => res.json()
  )

}

export const getAllFavorites = () => {

  return fetch("http://localhost:8088/favorite").then(
    (res) => res.json()
  )

}

export const getAllFavoritesByuserId = () => {


  return fetch("").then((res)=>res.json())
}



export const getAllCategories = () => {

  return fetch("http://localhost:8088/category").then(


    (res) => res.json()
  )

}


export const getItemById = (itemId) => {
  return fetch(`http://localhost:8088/item/${itemId}`).then((res) =>
    res.json()
  );

};

export const getFavoriteRelationship = (itemId,userId) => {

  return fetch(`http://localhost:8088/favorite?itemId=${itemId}&userId=${userId}`).then(
    (res) => res.json()
  )

}

export const deleteFavorite = (id) => {
  return fetch(`http://localhost:8088/favorite/${id}`, {
    method: "DELETE",
  });
};



export const submitNewItem = (inputTitle, inputDescription, option, inputPrice, newInputs) => {
  // Data to be sent in the request
  const requestData = {
    title: inputTitle,
    description: inputDescription,
    categoryId: parseInt(option),
    price: parseInt(inputPrice),
    images: newInputs,  // Assuming 'images' is an array of image URLs            
  };

  return fetch("http://localhost:8088/item", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData)
  });
};




export const deleteItem = (itemId) => {
  return fetch(`http://localhost:8088/item/${itemId}`, {
    method: "DELETE",
  });
};

export const getFavoritedItems = () => {

  return fetch 
  (`http://localhost:8088/item?_embed=favorite`)
  .then((response)=>response.json())

  
}


export const assignLike = (favorite) =>{


  return fetch(`http://localhost:8088/favorite`,{
     method: "POST",
     headers: {
        "Content-Type": "application/json",
     },
     body: JSON.stringify(favorite)
  }
  
  
  )
}

export const updateLike = (item) =>{


  return fetch(`http://localhost:8088/item/${item.id}`,{
     method: "PUT",
     headers: {
        "Content-Type": "application/json",
     },
     body: JSON.stringify(item),
  }
  
  
  )
}

export const deleteLike = (itemId) => {

  return fetch(`http://localhost:8088/item/${itemId}`,

  {
     method:"DELETE",

  })


}

export const getListOfFavorites = (userId) => {

  return fetch(`http://localhost:8088/favorite?userId=${userId}`).then(
    (res) => res.json()
  )

}




















































