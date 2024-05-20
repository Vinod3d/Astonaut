import React from 'react'
import HeroImg from '../assets/hero.png'
import { FiArrowDownRight } from "react-icons/fi";
import Header from './Header';

const Hero = () => {
    return (
        <div className='px-8 p-5 mt-5 max-w-align-element m-auto'>
            <div className="relative border border-gray-500 rounded-2xl min-h-screen overflow-hidden">
                <Header />
                <div className="hero  bg-black  flex items-center justify-center p-16">
                    <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
                        {/* Left Side Content */}
                        <div className="md:flex-1 flex-col text-center md:text-left p-4">
                            <div className="content-group text-white">
                                <div className='flex items-center space-x-5 '>

                                    <h1 className="text-gradient2 font-main font-bold md:text-[6vw] text-5xl">Future </h1>
                                    <FiArrowDownRight className='md:text-[6vw] text-5xl cursor-pointer text-purple-600' />
                                </div>
                                <h1 className="text-gradient2  font-main md:text-[6vw] text-5xl font-bold p-1 text">of Launch</h1>
                            </div>
                            <div className="action-btn mt-10 flex justify-center md:justify-start space-x-4">
                                <a href="#" className="bg-purple-600  text-white py-2 px-4 rounded-2xl hover:bg-purple-700">Join Now</a>
                                <a href="#" className=" text-white py-2 px-4">How to Join</a>
                            </div>
                        </div>

                        {/* Right Side Image */}
                        <div className=" order-1 flex-1 flex justify-center items-center relative p-4">
                            <div className="relative">
                                <div className="border border-gray-300 rounded-3xl p-4">
                                    <div className="border border-gray-400 rounded-3xl p-4">
                                        <div className="border border-gray-500 rounded-3xl p-4">
                                            <div className="rounded-3xl bg-purple-600 h-96 w-80">
                                                <img src={HeroImg} alt="Hero" className="rounded-3xl" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
