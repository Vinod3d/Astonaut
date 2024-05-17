import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import logo from '../assets/logo.png'


const Header = () => {
  return (
    <>
        <div className='header bg-black flex justify-between h-16 items-center px-10 text-white'>
            <div className="text-lg ">
                <FaEnvelope/>
            </div>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="flex space-x-3 text-lg">
                <FaTelegramPlane />
                <FaTwitter />
                <FaDiscord />
            </div>
        </div>
    </>
  )
}

export default Header