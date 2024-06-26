import { useEffect, useState } from "react"
import { getAllCategories, getAllItems, submitNewItem, } from "../../services/FetchCalls"
import { Link } from "react-router-dom"
import "./postCss/AddItem.css"





export const AddItem = ({ currentUser }) => {
  const [, setAllItems] = useState([])
  const [inputTitle, setInputTitle] = useState("")
  const [inputDescription, setInputDescription] = useState("")
  const [itemData, setItemData] = useState({});

  const [inputPrice, setInputPrice] = useState("")
  const [allCategories, setAllCategories] = useState([])

  const [searchTerm, setSearchTerm] = useState({})
  const [newInput, setNewInput] = useState(""); // New input field
  const [newInputs, setNewInputs] = useState([]); // Array to store new inputs





  useEffect(() => {
    getAllItems().then((itemsArray) => {
      setAllItems(itemsArray);

    })
  }, [])


  useEffect(() => {
    getAllCategories().then((categoriesArray) => {
      setAllCategories(categoriesArray)
    })
  }, [])








  /////////////////Input Features/////////////////////////////////


  const handleItemSave = () => {
    submitNewItem(inputTitle, inputDescription, searchTerm, inputPrice, newInputs).then((item) => {
      setItemData(item);
    });
  };

  useEffect(() => {
    setInputTitle("")
    setInputDescription("")

    setInputPrice("")
    setSearchTerm({})
  }, [itemData]);

  const handleTitleChange = (event) => {
    setInputTitle(event.target.value);
  };

  const handleInputDescriptionChange = (event) => {
    setInputDescription(event.target.value);
  };


  const handlePriceChange = (event) => {
    setInputPrice(event.target.value);
  };

  const handleCategoryChange = (event) => {
    const selectedId = event.target.value
    setSearchTerm(selectedId);
  };

  // Add a new input to the array
  const addNewInput = () => {
    setNewInputs([...newInputs, newInput]);
    setNewInput(""); // Clear the input field after adding
  };

  // Remove an input from the array
  const removeNewInput = (index) => {
    const updatedInputs = [...newInputs];
    updatedInputs.splice(index, 1);
    setNewInputs(updatedInputs);
  };


  return (<>

<div className="editBox">Add Item</div>
<div className="addItemPage">




    <div className="add_item_whole-container">



      <h1>Title</h1>
      <input
        className="newTitle"
        placeholder="Create Title"
        type="text"
        value={inputTitle}
        onChange={handleTitleChange}
      />

      <h1>Description</h1>
      <textarea
        className="newPost"
        rows="4"
        placeholder="New Post Here"
        type="text"
        value={inputDescription}
        onChange={handleInputDescriptionChange}
      />


      <h1>Price</h1>
      <input
        className="newPrice"
        placeholder="Add Price"
        type="text"
        value={inputPrice} 
        onChange={handlePriceChange}
      />
       <h1>Category</h1>
      <select
        className="addSelect"
        value={searchTerm}
        onChange={handleCategoryChange}>
        <option>Select an Category</option>

        {allCategories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>

      <h1>Images</h1>

      <div className="newImage">
        <input
          className="newInput"
          placeholder="New Image"
          type="text"
          value={newInput}
          onChange={(e) => setNewInput(e.target.value)}
        />
        <button className="classic-button" onClick={addNewInput}>Add New Image</button>

        <div className="newImageWhole">
          {newInputs.map((input, index) => (
            <div key={index} className="form-Image">
              <img className="image" src={input} alt="input" />
              <div className="overlay">
                <button className="overlay-button" onClick={() => removeNewInput(index)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>



      </div>

      <Link to={`/items`}><button className="classic-button" onClick={() => {
        handleItemSave()



      }}>ADD</button></Link>






    </div>



    {/* <div className="addImage-container_whole">
        {allItems.map((item) => (
          <div className="addImage-container" key={item.id}>
            <ul>
              <li>
              <Link to={`/items/${item.id}`}>{item.title}</Link>
              </li>
            </ul>
           
          </div>
        ))}
      </div> */}






</div>
  </>
  )
}