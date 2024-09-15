import React from "react";
import './contacts.css'

const Contact = () => {
    return (
        <div id="ContactPage">
            <h1>CONTACT ME</h1>
            <span className="ContactDesc">Please fill out the form to contact me</span>
            <form className="ContactForm">
                <input type="Text" className="name"  placeholder="Your Name"/>
                <input type="email" className="email"  placeholder="Your email"/>
                <textarea className="msg" name="message" rows='4' placeholder="Message"></textarea>
                <button type="submit" value='send' className="SubmitBtn">Submit</button>
            </form>
            <h2>COPYRIGHT Naldoza @ 2024</h2>
        </div>
    )
}

export default Contact