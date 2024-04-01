import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getAllCategories } from "../../services/FetchCalls"
import "../posts/postCss/AddItem.css"
import addImage from "../../assets/addImage.png"



export const EditItem = () => {
    const [searchTerm, setSearchTerm] = useState({})
    const [allCategories, setAllCategories] = useState([])
    // const [newInput, setNewInput] = useState(""); // New input field
    // const [newInputs, setNewInputs] = useState([]); // Array to store new inputs
    const [ticket, assignTicket] = useState({
        title: "",
        description: "",
        categoryId: "",
        price: "",
        images: [],

    })
    const { itemId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getAllCategories().then((categoriesArray) => {
            setAllCategories(categoriesArray)
        })
    }, [])

    useEffect(() => {

        setSearchTerm({})
    }, []);



    useEffect(() => {
        fetch(`http://localhost:8088/item/${itemId}`)
            .then(response => response.json())
            .then((data) => {
                assignTicket(data);

                // Set the initial value of the searchTerm to the current category ID
                setSearchTerm(data.categoryId);
            });
    }, [itemId]);


    const handleCategoryChange = (event) => {
        const selectedId = event.target.value;
        setSearchTerm(selectedId); // Update searchTerm
        const copy = { ...ticket };
        copy.categoryId = selectedId; // Update categoryId in the copy of ticket
        assignTicket(copy); // Update the ticket state
    };



    // // Add a new input to the array
    // const addEditInput = () => {
    //     setNewInputs([...newInputs, newInput]);
    //     setNewInput(""); // Clear the input field after adding
    // };

    // // Remove an input from the array
    // const removeEditInput = (index) => {
    //     const updatedInputs = [...newInputs];
    //     updatedInputs.splice(index, 1);
    //     setNewInputs(updatedInputs);
    // };

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        return fetch(`http://localhost:8088/item/${itemId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ticket)
        })
            .then(response => response.json())
            .then(() => {
                navigate(`/items/${itemId}`)
            })
    }


    return <>
 <div className="editBox">Edit Item</div>
        <div className="addItemPage">




            <div className="add_item_whole-container">




                <h2>Title</h2>
                <textarea
                    required autoFocus
                    type="text"
                    style={{
                        height: ""
                    }}
                    className="newTitle"
                    value={ticket.title}
                    onChange={
                        (evt) => {
                            const copy = { ...ticket }
                            copy.title = evt.target.value
                            assignTicket(copy)
                        }
                    }>{ticket.title}</textarea>



                <h2>Description</h2>
                <textarea
                    required autoFocus
                    type="text"
                    style={{
                        height: ""
                    }}
                    className="newPost"
                    value={ticket.description}
                    onChange={
                        (evt) => {
                            const copy = { ...ticket }
                            copy.description = evt.target.value
                            assignTicket(copy)
                        }
                    }>{ticket.description}</textarea>



                <h2>Category</h2>

                <select
                    className="addSelect"
                    value={searchTerm}
                    onChange={handleCategoryChange}
                >
                    {allCategories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>




                <h2>Price</h2>
                <textarea
                    required autoFocus
                    placeholder="Add Image"
                    type="text"
                    style={{
                        height: "20px",
                        width: "50px"
                    }}
                    className="newPrice"
                    value={ticket.price}
                    onChange={
                        (evt) => {
                            const copy = { ...ticket }
                            copy.price = evt.target.value
                            assignTicket(copy)
                        }
                    }>{ticket.price}</textarea>


<div className="newImageWhole">
            <h1>Images</h1>
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <div key={index}>
                {ticket.images[index] ? (
                  <>
                    <img className="newInput" alt="input" src={ticket.images[index]} />
                    <textarea
                      required
                      autoFocus
                      placeholder="Add Image"
                      type="text"
                      style={{
                        height: "50px",
                        width: "600px",
                      }}
                      className="form-control"
                      value={ticket.images[index]}
                      onChange={(evt) => {
                        const copy = { ...ticket };
                        copy.images[index] = evt.target.value;
                        assignTicket(copy);
                      }}
                    ></textarea>
                  </>
                ) : (
                  <><img className="newInput" alt="input" src={addImage} />
                  <textarea
                      required
                      autoFocus
                      placeholder="Add Image"
                      type="text"
                      style={{
                        height: "50px",
                        width: "600px",
                      }}
                      className="form-control"
                      value={ticket.images[index]}
                      onChange={(evt) => {
                        const copy = { ...ticket };
                        copy.images[index] = evt.target.value;
                        assignTicket(copy);
                      }}
                    ></textarea>
                  
               </> )}
              </div>
            ))}
          </div>

                <button
                    onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                    className="classic-button-edit">
                    Save Edits
                </button>





            </div>
        </div>

    </>
}

