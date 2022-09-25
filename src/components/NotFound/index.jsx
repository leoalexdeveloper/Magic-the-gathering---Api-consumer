import { Link } from "react-router-dom"
import "./styles.css"

export const NotFound = () => {
    return (
        <div className="not-found-container">
            <div className="col-12 text-light bg-dark d-flex flex-row align-items-center">
                <span className="fs-1  p-4">Page not found</span>
                    <Link to="/sets" style={{textDecoration: "none"}}>
                        <span className="fs-2 text-light border p-2 rounded">Click here to home</span>
                    </Link>
            </div>
        </div>
    )
}