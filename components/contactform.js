import React, { useState } from "react";
const ContactForm = ()=>{
    const[ state, setState ] = useState({contact_name: "", contact_email: "", contact_message:"",})
    const handleChange = e=>{
        const {name, value} = e.target
        setState({...state, [name]: value})
    }

    return (
        <>
        <h1> Contact Us</h1>
        <form>
            <label>Your Name
                <input                 
                type="text"
                placeholder="name" 
                name="contact_name"
                value={state.name}
                onchange={handleChange}/>
            </label>
            <label>Email
                <input 
                placeholder="email" 
                type="email"
                name="contact_email"
                value={state.email}
                onchange={handleChange}/>
            </label>
            <label>Your Message
                <input 
                placeholder="what do you want to say?" 
                name="contact_message"
                value={state.message}
                onchange={handleChange}/>
            </label>
        </form>
        </>
    )
}
export default ContactForm;