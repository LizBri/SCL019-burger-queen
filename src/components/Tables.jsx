import React, {  Fragment, useState } from "react";
import Menu from "./Menu";

export default function Tables () {

    return(
        <Fragment>
            <select className="text-warning">
                <option >Mesas</option>
                <option>Mesa 1</option>
                <option>Mesa 2</option>
                <option>Mesa 3</option>
                <option>Mesa 4</option>
                <option>Mesa 5</option>
                <option>Mesa 6</option>
            </select>
            <Menu/>
        </Fragment>
    )
}