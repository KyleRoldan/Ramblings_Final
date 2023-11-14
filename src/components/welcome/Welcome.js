import { Link, useNavigate } from "react-router-dom"
import "./Welcome.css"


export const Welcome = () => {
    const navigate = useNavigate()


    return (<>
        <div className="body">
            <div className="welcome-container">

            <div className="welcome-container-text">


            <Link className='link-tag' to="/items">
            <button className="classic-button">
            E
            n
            t
            e
            r
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
        </div>
    </>)

}