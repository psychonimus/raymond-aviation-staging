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
                    <a href="https://www.linkedin.com/company/raymond-aviation/?viewAsMember=true" target='_blank'>
                        <button className="button flex-center">
                        <FaLinkedinIn/>
                    </button>
                    </a>
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