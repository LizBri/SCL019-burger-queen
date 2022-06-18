import React, { Fragment } from "react";
import Tables from "./Tables";


export default function Home(){
    return(

        <Fragment>
            <input className="btn btn-outline-warning col mb-3 btn-sm" 
                   type= "button" 
                   value= "Mesas" 
                   onClick={Tables}/>

            <input className="btn btn-outline-warning col mb-3 btn-sm"
                   type="button" 
                   value="Cocina"/>

        </Fragment> 
    )
}