import React, { useState, useEffect } from 'react';
import { deleteFavorite, getFavoriteRelationship } from '../../services/FetchCalls';


export const FavoriteButton = ({ itemId, userId, onFavoriteChange }) => {
  const [alreadyFavorited, setAlreadyFavorited] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [test,setTest] = useState([])
  




  useEffect(() => {
    getFavoriteRelationship(itemId, userId).then((itemArray) => {
      setTest(itemArray);
    });
  }, []);

  useEffect(() => {
    // You can use an API call here to check if the item is already favorited by the user
    fetch(`http://localhost:8088/favorite?itemId=${itemId}&userId=${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setAlreadyFavorited(data); // Assuming the API returns a boolean indicating if it's favorited
        if (alreadyFavorited.length === 1) {
          setIsFavorite(true)
        }
      });
  }, [itemId, userId, alreadyFavorited.length]);

  
  

  const handleFavorite = () => {
    fetch("http://localhost:8088/favorite", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        itemId: itemId,
        userId: userId,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        setIsFavorite(true); // Update the local state
        onFavoriteChange(true);
      });
  };


    const handleUnfavorite = () => {
      deleteFavorite(test[0].id)
      setIsFavorite(false)
  };


  return (
    <div>
      {isFavorite ? (
        <button className="classic-button" onClick={handleUnfavorite}>
          Unlike
        </button>
      ) : (
        <button className="classic-button" onClick={handleFavorite}>
          Favorite
        </button>
      )}
    </div>
  );
};
