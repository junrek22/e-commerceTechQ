
const NavBar = () => {
    return ( 
        <>
         <nav className="flex inline-flex container">
            <div className="nav-container">
              <div id="Logo-SearchBar">
                
              </div>
            </div>
            <div className="nav-container">
              <div id="menu">

              </div>
            </div>
            <div className="nav-container">
              <div id="menuButtons">
                <button className="nav-button">Home</button>
                <button className="nav-button">Products</button>
                <button className="nav-button">About Us</button>
                <button className="nav-button">Contact</button>
              </div>
            </div>
         </nav>
        </>
     );
}
 
export default NavBar;