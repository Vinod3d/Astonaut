import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import logo from '../assets/logo.png'


const Header = () => {
    return (
        <>
            <div className='header bg-black flex justify-between h-16 items-center px-10 text-white'>
                <a href="#" className="text-lg">
                    <FaEnvelope />
                </a>
                <div className="logo">
                    <a href="#"><img src={logo} alt="" /></a>
                </div>
                <div className="flex space-x-3 text-lg">
                    <a href="#"><FaTelegramPlane /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaDiscord /></a>
                </div>
            </div>
        </>
    )
}

export default Header