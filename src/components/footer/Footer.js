// src/components/footer/Footer.js
import '../styles/Footer.css';
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter, FaSquareInstagram } from "react-icons/fa6";
export default function Footer () {
    return (
        <>
            <div id="content">
                {/* Other page content */}
            </div>
            <div className='FOOTER_DIV'>
                <div className='FOOTER_DIV_TSD'><p className='FOOTER_DIV_TSD_P'>TrendScribe</p></div>
                <div className='FOOTER_DIV_TSD'><p className='FOOTER_DIV_TSD_CR'>&copy; {new Date().getFullYear()} TrendScribe. All Rights Reserved.</p></div>
                <div className='FOOTER_DIV_ICON'>
                    <a href="https://facebook.com" target="_blank"><FaFacebook size={25} color="white" /></a>
                    <a href="https://twitter.com" target="_blank"><FaSquareXTwitter size={25} color="white" /></a>
                    <a href="https://instagram.com" target="_blank"><FaSquareInstagram size={25} color="white" /></a>
                    <a href="https://linkedin.com" target="_blank"><FaLinkedin size={25} color="white" /></a>
                </div>
            </div>
        </>
    );
}