import { Links } from "./Links"
import { Logo } from "./Logo"

import './styles.css'

export const Menu = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-light">
            <div className="container-fluid d-flex flex-row justify-content-start">

                <Logo imgPath="../../assets/img/logo/logo.png" alt="Magic the Gathering" />

                <div className="d-flex justify-content-start" id="navbarSupportedContent">
                    
                    <ul className="navbar-nav mb-2 d-flex flex-row" >
                        <Links text="Sets" to="/" />
                    </ul>
                </div>
            </div>
        </nav>
    )
}