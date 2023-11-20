import React from 'react';

// Header component definition
const Header = () => {
    // Render the Header component
    return (
      <div>
        {/* Navbar using Bootstrap styles */}
        <nav className="navbar navbar-expand-lg mb-2 " style={{ backgroundColor: 'mediumaquamarine' }}>
          {/* Container for navbar content */}
          <div className="container-fluid text-center">
            {/* Navbar toggler button for responsive design */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* Navbar content container */}
            <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarTogglerDemo01">
              {/* Navbar brand with Conway's Game of Life title */}
              <a className="navbar-brand" href="#" style={{ color: 'white', border: 'none', fontFamily: 'cursive', fontWeight: 'bold', fontSize: '23px', animation: 'blinking 1s infinite' }}>Conway's - Game of Life</a>
            </div>
          </div>
        </nav>
      </div>
    );
  }

export default Header;
