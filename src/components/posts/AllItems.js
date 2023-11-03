import { useState, useEffect } from "react";
import { getAllItems, getAllFavorites, getAllCategories } from "../../services/FetchCalls";
import { Link } from "react-router-dom"
import ".//postCss/AllItems.css"
import magnifyglass from "../../assets/magnifyglass.png"
import sort from "../../assets/sort.png"
import unSort from "../../assets/unSort.png"



export const AllItems = ({ currentUser }) => {
    const [allItems, setAllItems] = useState([])
    const [allFavorites, setAllFavorites] = useState([])
    const [allCategories, setAllCategories] = useState([])
    const [categoryForItem, setCategoryForItem] = useState({})
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredItems, setFilteredItems] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpenSecondary, setIsDropdownOpenSecondary] = useState(false);


    useEffect(() => {
        getAllFavorites().then((favoritesArray) => {
            setAllFavorites(favoritesArray)
        })
    }, [])

    useEffect(() => {
        getAllItems().then((itemsArray) => {
            setAllItems(itemsArray);

        })
    }, [])

    useEffect(() => {
        getAllCategories().then((categoryArray) => {
            setAllCategories(categoryArray)
        })
    }, [])




    ///////////////////////Categories/////////////////////////////////////

    useEffect(() => {
        const itemCategory = {}

        allItems.forEach((item) => {
            const categoriesForItems = allCategories.filter(
                (category) => category.id === item.categoryId
            );
            itemCategory[item.id] = categoriesForItems
        });

        setCategoryForItem(itemCategory)
    }, [allItems, allCategories])


    /////////////////////////////////////////////////////////////////

    /////////////////Search Features/////////////////////////////////

    useEffect(() => {
        const foundItems = allItems.filter((item) => {
            // Check if no category is chosen or "Select" is chosen
            if (isNaN(selectedCategory) || selectedCategory === "All" || selectedCategory === 0) {
                // Show all items
                return item.title && item.title.toLowerCase().includes(searchTerm.toLowerCase());

            }

            // Check if the selectedCategory matches the item's category
            if (selectedCategory === item.categoryId) {
                // Check if the item's title includes the search term (case-insensitive)
                return item.title && item.title.toLowerCase().includes(searchTerm.toLowerCase());

            }

            return false; // Filter out items that don't match the criteria.
        });

        // Set the filtered items after filtering is complete.
        setFilteredItems(foundItems);
    }, [selectedCategory, searchTerm, allItems]);




    /////////////////////////////////////////////////////////////////

    return <>


<div className="whole-container">

        <div className="searchSort-container">
            {/* <div className="search-Box">
                <input
                    onChange={(event) => { setSearchTerm(event.target.value) }}
                    type="text"
                    // placeholder="search title"
                    className="title-search-input"
                />

            </div> */}



            {/* <div className="sort-box">
                <select
                    className="category-search-input"
                    value={selectedCategory}
                    onChange={(event) => setSelectedCategory(parseInt(event.target.value))}
                >
                    <option className="dropdown" value="All">All</option>
                    {allCategories.map((itemOption) => (
                        <option className="dropdown-option" key={itemOption.id} value={itemOption.id}>
                            {itemOption.name}
                        </option>
                    ))}
                </select>
            </div> */}
            <div
                className="dropdown"
                src={magnifyglass}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)} // You'll need a state variable like isDropdownOpen to control the dropdown's visibility
            >
                 <img className= "magnifyglass" src={magnifyglass} alt="search button" />
            </div>

            {isDropdownOpen && (
                <div className="dropdown-options">

                    <input
                        onChange={(event) => { setSearchTerm(event.target.value) }}
                        type="text"
                        // placeholder="search title"
                        className="title-search-input"
                    />


{/* <div className="sort-box">
                <select
                    className="category-search-input"
                    value={selectedCategory}
                    onChange={(event) => setSelectedCategory(parseInt(event.target.value))}
                >
                    <option className="dropdown" value="All">All</option>
                    {allCategories.map((itemOption) => (
                        <option className="dropdown-option" key={itemOption.id} value={itemOption.id}>
                            {itemOption.name}
                        </option>
                    ))}
                </select>
            </div>  */}

                    <div
                        
                        className="dropdown-secondary"
                        onClick={() => setIsDropdownOpenSecondary(!isDropdownOpenSecondary)}
                    ><img className= "arrow" src={isDropdownOpenSecondary ? unSort : sort} alt="arrow" /></div>
                    {isDropdownOpenSecondary && (
                    <div>
                    {allCategories.map((itemOption) => (

                        <button
                            className="dropdown-option"
                            key={itemOption.id}
                            value={itemOption.id}
                            onClick={(event) => setSelectedCategory(parseInt(event.target.value))}
                        >
                            {itemOption.name}
                        </button>                  
                    ))}
                </div>
                    )}
                </div>
            )}









        </div>

    </div>





        <div className="image-container_whole">
            {filteredItems.map((item) => (

                <div className="image-container" key={item.id}>
                    <img src={item.images[0]} alt="jacket" />
                    <div className="overlay">
                        <Link className="link_styling" to={`/items/${item.id}`}>{item.title}</Link>
                        <div>${item.price}</div>
                    </div>






                </div>

            ))}

        </div>

        {/* ////////////ItEM CARD STYLED IN RELATION TO CAPSTONE WIREFRAM//////////////////////////////*/}

        {/* <div className="item_body">

            {filteredItems.map((item) => (
                <div className="item_card" key={item.id}>
                    <div className="image_boxCard">
                        <img src={testImg} alt="item detail" className="image_DisplayCard" />
                    </div>

                    <div className="item_card_info">
                        <h3><Link to={`/items/${item.id}`}>{item.title}</Link></h3>
                        {categoryForItem[item.id]?.map(category => category.name)}
                    </div>

                    <h1><div className="item_card_price"> {item.price}</div></h1>


                </div>
            ))} */}



    </>
}


