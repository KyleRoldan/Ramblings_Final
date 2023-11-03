import { Link, useNavigate } from "react-router-dom"
import "./Welcome.css"


export const Welcome = () => {
    const navigate = useNavigate()


    return (<>
        <div className="body">
            <div className="welcome-container">


            <Link className='link-tag' to="/items">
            <button className="classic-button">
            H
            o
            m
            e
            </button>
            </Link>




                {localStorage.getItem("ramblings_user") ? (
                    <Link
                        className=""
                        to=""
                        onClick={() => {
                            localStorage.removeItem("ramblings_user")
                            navigate("/", { replace: true })
                        }}
                    >
                        <button className="classic-button">
                            L
                            o
                            g
                            o
                            u
                            t
                        </button>
                    </Link>
                ) : (
                    ""
                )}








            </div>
        </div>
    </>)

}