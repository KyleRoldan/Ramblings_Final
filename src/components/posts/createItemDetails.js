import React, { useState, useEffect } from "react";
import { getAllCategories, getAllUsers, getAllFavorites, getAllItems, assignLike, updateLike, getFavoritedItems, deleteLike } from "../../services/FetchCalls";
import "./postCss/ItemDetails.css";
import { FavoriteButton } from "./FavoriteButton";








export const CreateItemDetails = ({ item, currentUser }) => {
  const [allItems, setAllItems] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [allFavorites, setAllFavorites] = useState([])
  const [likeCount, setLikeCount] = useState([])
  const [allFavoriteItems, setAllFavoriteItems] = useState({})
  const [isFavorite, setIsFavorite] = useState(false);
  
  
  const userId = currentUser.id
  const itemId = item.id

  useEffect(() => {
    getAllItems().then((itemArray) => {
      setAllItems(itemArray);
    });
  }, []);

  useEffect(() => {
    getAllCategories().then((categoryArray) => {
      setAllCategories(categoryArray);
    });
  }, []);

  

  useEffect(() => {
    getAllFavorites().then((favArray) => {
      setAllFavorites(favArray);
    });
  }, []);
  

  useEffect(() => {
    getFavoritedItems().then((favItemArray) => {
      setAllFavoriteItems(favItemArray);
    });
  }, []);


//////////DISPLAY A LIKE COUNT///////////////////////////////////////////////////

  // useEffect(() => {
  //   const postLikeCounts = {}

  //   allItems.forEach((item) => {
  //     const likesForPost = allFavorites.filter(
  //       (like) => like.itemId === item.id
  //     )
  //     postLikeCounts[item.id] = likesForPost.length
  //   })

  //   setLikeCount(postLikeCounts)
  // }, [allFavorites, allItems, item.id])

  
  const itemCategory = allCategories
    .filter(category => category.id === item.categoryId)
    .map(topic => topic.name);

  
  
    const handleFavoriteChange = (updatedIsFavorite) => {
    
          setIsFavorite(updatedIsFavorite);
      
        };
    
      





        if (!item || !item.title) {
          return null;
        }


        const hasImages = item.images.some((image) => !!image);

        if (!hasImages) {
          return null;
        }


  return (
    <div className="post-details">
      <div className="imageBox">
  {item.images[1] && (
    <img src={item.images[1]} alt="no upload yet" className="image_Display" />
  )}
  {item.images[2] && (
    <img src={item.images[2]} alt="no upload yet" className="image_Display" />
  )}
  {item.images[3] && (
    <img src={item.images[3]} alt="no upload yet" className="image_Display" />
  )}
</div>
      <div className="item-details-info-box">

        <div className = "item-details-etsy">
          
          
          <h1>${item.price}</h1>

        <div className="buying-favorite-box">
  <a href="https://www.etsy.com/shop/ramblingsvintageshop" target="_blank" rel="noreferrer" className="etsy_button">
    <img className="etsy_logo" src="" alt="Etsy Button" />
  </a>


        <FavoriteButton        
         itemId= {itemId} 
         userId={userId}
         isFavorite={isFavorite}
        onFavoriteChange={handleFavoriteChange}
        />
      </div>


{/* /////////Display a Like Count ///////////////////////////////////////////////////////// */}
          {/* <div key={item.id}>
            Likes: {likeCount[item.id] || 0}
          </div> */}






        </div>
      </div>
    </div>
  );
};



