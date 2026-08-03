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
                            <FaLinkedinIn />
                        </button>
                    </a>
                    <a href="https://www.facebook.com/people/Raymond-Aviation/61592843458835/" target='_blank'>
                        <button className="button flex-center">
                            <FaFacebookF />

                        </button>
                    </a>
                    <a href="https://www.instagram.com/raymond.aviation/" target='_blank'>
                        <button className="button flex-center">
                            <RiInstagramFill />

                        </button>
                    </a>
                    <button className="button flex-center">
                        <FaYoutube />

                    </button>
                </div>
            </>

        </>
    )
}

export default SocialIcons