import logosvg from "../../svg/logo.svg"

const Header = () => {

    const descLogo = "Logo do Blog."
    return (
        
        <>
<header className="flex-space-between">
    <div className="logo border">
        <img src={logosvg} alt={descLogo} />
    </div>
    <div className="search ">
        <input className="input-search" type="text" name="search" />
    </div>
    <ul className="menu">
        <li> <a  className="nav-link" href="#">Categories</a></li>
        <li> <a  className="nav-link" href="#">About</a></li>
        <li> <a className="nav-link" href="#">Content</a></li>
    </ul>
</header>
        </>
    );
}

export default Header;