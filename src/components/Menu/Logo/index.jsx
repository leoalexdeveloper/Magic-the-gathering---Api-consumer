import { Link } from "react-router-dom"

export const Logo = (props) => {
    const {imgPath, alt} = props
    return (
        <Link className="navbar-brand p-2" to="/">
            <img src={imgPath} alt={alt} />
        </Link>
    )
}