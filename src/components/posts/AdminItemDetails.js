import React, { useState, useEffect, } from "react";
import { getAllCategories, favoriteItem, getAllFavorites, deleteItem, getAllItems } from "../../services/FetchCalls";
import "./postCss/ItemDetails.css";
import { Link, useNavigate } from "react-router-dom";



export const AdminItemDetails = ({ item, currentUser }) => {
  const navigate = useNavigate;

  const [allItems, setAllItems] = useState([])
  const [isfavorited, setIsfavorited] = useState(false);
  const [allCategories, setAllCategories] = useState([]);


  useEffect(() => {
    getAllItems().then((itemsArray) => {
      setAllItems(itemsArray);

    })
  }, [])



  useEffect(() => {
    getAllCategories().then((categoryArray) => {
      setAllCategories(categoryArray);
    });
  }, []);

  const itemCategory = allCategories
    .filter(category => category.id === item.categoryId)
    .map(topic => topic.name);


  ///////////////////HANDLE DELETE POST/////////////////////////////////////////////////////////////
  const handleDeleteItem = (itemId) => {
    // Delete the post from the database
    deleteItem(itemId).then(() => {
      // Remove the deleted post from filteredMyPosts
      setAllItems((deletedItem) => deletedItem.filter((item) => item.id !== itemId));
    });
  };

  if (!item || !item.title) {
    return <div>Loading...</div>;
  }

  const confirmDelete = () => {
    const shouldDelete = window.confirm("Are you sure you want to delete this item?");

    if (shouldDelete) {

      handleDeleteItem(item.id);

    }

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

        <div className="admin-item-details-etsy">

          <h1>${item.price}</h1>

          <div className="admin-buying-favorite-box">

            <h1> <Link className="admin_delete_btn" to={`/items`} > <button className="classic-button" onClick={confirmDelete}>DELETE</button></Link> </h1>

            <h1> <Link className="admin_edit_btn" to={`/items/${item.id}/editItem`} ><button className="classic-button" >EDIT</button></Link></h1>
          </div>

        </div>


        <h1>{item.title}</h1>
        <p className="opaque-text">{itemCategory}</p>
        <p className="item-description">{item.description}</p>



        <div className="imageBox_Extra">
          {item.images[4] && (
            <img src={item.images[1]} alt="no upload yet" className="image_Display_Extra" />
          )}
          {item.images[5] && (
            <img src={item.images[2]} alt="no upload yet" className="image_Display_Extra" />
          )}
        </div>


      </div>

    </div>
  );
};