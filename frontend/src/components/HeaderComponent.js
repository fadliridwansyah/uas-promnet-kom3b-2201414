import React, { Component } from "react";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const navbarStyle = {
      backgroundColor: "#001F3F", // Warna biru tua (navy)
    };

    return (
      <div>
        <header>
          <nav className="navbar navbar-dark" style={navbarStyle}>
            <div className="d-flex">
              <a href="/users" className="navbar-brand text-info">
                <span style={{ color: "white" }}>DINAMIK-18</span>
              </a>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;
