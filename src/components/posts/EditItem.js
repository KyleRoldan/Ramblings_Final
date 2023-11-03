import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { getAllCategories } from "../../services/FetchCalls"


export const EditItem = () => {
    const [searchTerm, setSearchTerm] = useState({})
    const [allCategories, setAllCategories] = useState([])
    const [newInput, setNewInput] = useState(""); // New input field
    const [newInputs, setNewInputs] = useState([]); // Array to store new inputs
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



    // Add a new input to the array
    const addEditInput = () => {
        setNewInputs([...newInputs, newInput]);
        setNewInput(""); // Clear the input field after adding
    };

    // Remove an input from the array
    const removeEditInput = (index) => {
        const updatedInputs = [...newInputs];
        updatedInputs.splice(index, 1);
        setNewInputs(updatedInputs);
    };

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


    return <div className="ticketForm">
        <h2 className="ticketForm__title">Edit Item</h2>
        <div>


            <div className="form-group">
                <div>Title:</div>
                <textarea
                    required autoFocus
                    type="text"
                    style={{
                        height: ""
                    }}
                    className="form-control"
                    value={ticket.title}
                    onChange={
                        (evt) => {
                            const copy = { ...ticket }
                            copy.title = evt.target.value
                            assignTicket(copy)
                        }
                    }>{ticket.title}</textarea>
            </div>

            <div className="form-group">
                <div>Description:</div>
                <textarea
                    required autoFocus
                    type="text"
                    style={{
                        height: ""
                    }}
                    className="form-control"
                    value={ticket.description}
                    onChange={
                        (evt) => {
                            const copy = { ...ticket }
                            copy.description = evt.target.value
                            assignTicket(copy)
                        }
                    }>{ticket.description}</textarea>
            </div>

            <div className="form-group">
                <div>Category:</div>

                <select
    value={searchTerm} 
    onChange={handleCategoryChange}
>
    {allCategories.map((category) => (
        <option key={category.id} value={category.id}>
            {category.name}
        </option>
    ))}
</select>



                <div className="form-group">
                    <div>Price:</div>
                    <textarea
                        required autoFocus
                        type="text"
                        style={{
                            height: ""
                        }}
                        className="form-control"
                        value={ticket.price}
                        onChange={
                            (evt) => {
                                const copy = { ...ticket }
                                copy.price = evt.target.value
                                assignTicket(copy)
                            }
                        }>{ticket.price}</textarea>
                </div>


                <h1>New Inputs</h1>
                <div> <img className="form-Image" alt="input" src={ticket.images[0]} />
                    <textarea
                        required autoFocus
                        type="text"
                        style={{
                            height: "50px",
                            width: "600px"
                        }}
                        className="form-control"
                        value={ticket.images[0]}
                        onChange={
                            (evt) => {
                                const copy = { ...ticket }
                                copy.images[0] = evt.target.value
                                assignTicket(copy)
                            }
                        }>{ticket.images[0]}</textarea></div>

                <div> <img className="form-Image" alt="input" src={ticket.images[1]}/>
                <textarea
                    required autoFocus
                    type="text"
                    style={{
                        height: "50px",
                        width: "600px"
                    }}
                    className="form-control"
                    value={ticket.images[1]}
                    onChange={
                        (evt) => {
                            const copy = { ...ticket }
                            copy.images[1] = evt.target.value
                            assignTicket(copy)
                        }
                    }>{ticket.images[1]}</textarea></div>
                    <div> <img className="form-Image" alt="input" src={ticket.images[2]}/>

                <textarea
                    required autoFocus
                    type="text"
                    style={{
                        height: "50px",
                        width: "600px"
                    }}
                    className="form-control"
                    value={ticket.images[2]}
                    onChange={
                        (evt) => {
                            const copy = { ...ticket }
                            copy.images[2] = evt.target.value
                            assignTicket(copy)
                        }
                    }>{ticket.images[2]}</textarea></div>

<div> <img className="form-Image" alt="input" src={ticket.images[3]}/>
                <textarea
                    required autoFocus
                    type="text"
                    style={{
                        height: "50px",
                        width: "600px"
                    }}
                    className="form-control"
                    value={ticket.images[3]}
                    onChange={
                        (evt) => {
                            const copy = { ...ticket }
                            copy.images[3] = evt.target.value
                            assignTicket(copy)
                        }
                    }>{ticket.images[3]}</textarea></div>

<div> <img className="form-Image" alt="input" src={ticket.images[4]}/>
                <textarea
                    required autoFocus
                    type="text"
                    style={{
                        height: "50px",
                        width: "600px"
                    }}
                    className="form-control"
                    value={ticket.images[4]}
                    onChange={
                        (evt) => {
                            const copy = { ...ticket }
                            copy.images[4] = evt.target.value
                            assignTicket(copy)
                        }
                    }>{ticket.images[4]}</textarea></div>

<div> <img className="form-Image" alt="iput" src={ticket.images[5]}/>
                <textarea
                    required autoFocus
                    type="text"
                    style={{
                        height: "50px",
                        width: "600px"
                    }}
                    className="form-control"
                    value={ticket.images[5]}
                    onChange={
                        (evt) => {
                            const copy = { ...ticket }
                            copy.images[5] = evt.target.value
                            assignTicket(copy)
                        }
                    }>{ticket.images[5]}</textarea></div>

                <div> <img className="form-Image" alt="input" src={ticket.images[6]}/>
                <textarea
                    required autoFocus
                    type="text"
                    style={{
                        height: "50px",
                        width: "600px"
                    }}
                    className="form-control"
                    value={ticket.images[6]}
                    onChange={
                        (evt) => {
                            const copy = { ...ticket }
                            copy.images[6] = evt.target.value
                            assignTicket(copy)
                        }
                    }>{ticket.images[6]}</textarea></div>

<div> <img className="form-Image" alt="input" src={ticket.images[7]}/>
                <textarea
                    required autoFocus
                    type="text"
                    style={{
                        height: "50px",
                        width: "600px"
                    }}
                    className="form-control"
                    value={ticket.images[7]}
                    onChange={
                        (evt) => {
                            const copy = { ...ticket }
                            copy.images[7] = evt.target.value
                            assignTicket(copy)
                        }
                    }>{ticket.images[7]}</textarea></div>








                <input
                    className="newInput"
                    placeholder="New Image"
                    type="text"
                    value={newInput}
                    onChange={(e) => setNewInput(e.target.value)}
                />
                <button className="classic-button" onClick={addEditInput}>Add New Image</button>

                {newInputs.map((input, index) => (
                    <div key={index}>
                        <img className="form-Image" alt="input" src={input} />
                        <button className="classic-button" onClick={() => removeEditInput(index)}>Remove</button>
                    </div>
                ))}


            </div>



        </div>


        <button
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="classic-button">
            Save Edits
        </button>
    </div>
}