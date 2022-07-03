import React, { Fragment }from "react";
import logo from "./img/logo.png";


function AppLogo(){
    return(
    <Fragment>
            <img src={logo} width="750px" alt="logo_home" className="col-9 row mt-2 ms-"/>
        </Fragment>
    )
}

export default AppLogo;