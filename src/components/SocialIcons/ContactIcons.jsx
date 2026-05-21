import React from 'react'
import './SocialIcons.css'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";

const ContactIcons = ({icon1, icon2}) => {
    return (
        <>
            <>
                
                <div className="button-container">
                    <button className="button flex-center">
                        <a href="tel:+91 9820570000" style={{textDecoration:"none", color:"inherit"}} >{icon1}</a>
                        
                    </button>
                    <button className="button flex-center">
                        <a href="mailto:charter@raymond.in" style={{textDecoration:"none", color:"inherit"}}>{icon2}</a> 
                    </button>
                    
                </div>
            </>

        </>
    )
}

export default ContactIcons