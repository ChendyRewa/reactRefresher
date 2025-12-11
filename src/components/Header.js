import { LOGO_URL } from "../utils/constants";
export const Header=()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} alt="application logo" className="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>contact US</li>
                    <li>Help</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;