import React from "react";

function Footer() {

    const currentYear = new Date().getFullYear();

//after return need to put ()
    return(
        <footer>
            <p>Copyright © {currentYear}</p>

        </footer> 
    );
}

export default Footer;