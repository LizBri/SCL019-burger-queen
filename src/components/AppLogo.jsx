import React, { Fragment }from "react";
import logo from "./img/logo.png";


function AppLogo(){
    return(
    <Fragment className="mb-3 col">
            <img src={logo} width="800px" alt="logo_home"/>
        </Fragment>
    )
}

export default AppLogo;