import React from "react";

const Heading = props =>{
    return(
        <>
        <h1>{props.text}</h1>
        <style>
        {
            `h1{
                font=size:48px;
            }`
        }

        </style>
        </>
    )
}
export default Heading;