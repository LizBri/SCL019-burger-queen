import React, { Fragment }from "react";
import logo from "./img/logo.png";


function AppLogo(){
    return(
    <Fragment>
            <img src={logo} width="750px" alt="logo_home" className="col mr-8"/>
        </Fragment>
    )
}

export default AppLogo;