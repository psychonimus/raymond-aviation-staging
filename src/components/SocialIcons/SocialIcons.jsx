import React from 'react'
import './SocialIcons.css'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";

const SocialIcons = () => {
    return (
        <>
            <>
                
                <div className="button-container">
                    <button className="button flex-center">
                        <FaLinkedinIn/>
                    </button>
                    <button className="button flex-center">
                        <FaFacebookF/>
                        
                    </button>
                    <button className="button flex-center">
                        <RiInstagramFill/>
                        
                    </button>
                    <button className="button flex-center">
                        <FaYoutube/>
                        
                    </button>
                </div>
            </>

        </>
    )
}

export default SocialIcons