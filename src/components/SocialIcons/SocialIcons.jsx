import React from 'react'
import './SocialIcons.css'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";

const SocialIcons = ({icon1, icon2, icon3, icon4}) => {
    return (
        <>
            <>
                
                <div className="button-container">
                    <button className="button flex-center">
                        {icon1}
                    </button>
                    <button className="button flex-center">
                        {icon2}
                    </button>
                    <button className="button flex-center">
                        {icon3}
                    </button>
                    <button className="button flex-center">
                        {icon4}
                    </button>
                </div>
            </>

        </>
    )
}

export default SocialIcons