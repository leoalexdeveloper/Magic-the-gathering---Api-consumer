import { Link } from "react-router-dom"

export const Links = (props) => {
    const { text, to } = props
    return (
        <li className="nav-item">
            <Link className="nav-link" to={to}>
                <button className="btn btn-sm fs-6 p-0 px-4">{text}</button>
            </Link>
        </li>
    )
}