import React, { Component } from "react";

class FooterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const footerStyle = {
      position: "fixed",
      bottom: "0",
      width: "100%",
      backgroundColor: "#001F3F", // Warna biru tua (navy)
      textAlign: "center",
      padding: "10px",
    };

    const textStyles = {
      color: "#f0eee4", // Warna teks
    };

    return (
      <div>
        <footer style={footerStyle}>
          <span className="text-muted" style={textStyles}>
            © 2024 Dinamik-18. All Rights Reserved | For inquiries, please
            email: info@dinamik-18.com
          </span>
        </footer>
      </div>
    );
  }
}

export default FooterComponent;
