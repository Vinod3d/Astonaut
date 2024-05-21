import React from 'react';
import pose4 from '../assets/pose4.png';
import { FiArrowDownRight } from 'react-icons/fi';

const ContactForm = () => {
    return (
        <div className='px-4 md:px-8 pb-10 max-w-align-element m-auto'>
            <div className="contactForm grad-3 border border-gray-500 rounded-2xl overflow-hidden">
                <div className="md:h-[640px] flex flex-col md:flex-row items-center justify-between">
                    <div className="relative w-[40%]  hidden md:block">
                        <div className=" flex flex-col justify-end items-end">
                            <button href="#" className="ml-9 absolute top-28 left-6 flex items-center space-x-2 text-purple-600 hover:text-purple-800">
                                <span className='border rounded-full border-purple-600 p-1'>
                                    <FiArrowDownRight className='text-base' />
                                </span>
                                <span className='px-2'>Know more</span>
                            </button>
                            <img src={pose4} alt="Decorative Image" className=" w-[30vw] lg:w-[450px] md:mt-80 lg:mt-20 " />
                        </div>
                    </div>
                    <div className="mt-8 md:mt-0 flex-1 p-6">
                        <form className="md:space-y-4 md:px-16">
                        <h2 className="md:text-[4vw] text-4xl  font-main-bold font-bold mb-10">Let's Collaborate</h2>
                            <div className="flex flex-wrap -mx-2">
                                <div className="w-full md:w-1/2 px-2 mb-4">
                                    <label className="block text-sm font-medium uppercase text-gray-700" htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Your Name"
                                        className="w-full p-2 border-b border-zinc-300 focus:outline-none"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 px-2 mb-4">
                                    <label className="block text-sm font-medium uppercase text-gray-700" htmlFor="subject">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        placeholder="Choose Subject"
                                        className="w-full p-2 border-b border-zinc-300 focus:outline-none"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-2">
                                <div className="w-full lg:w-1/3 px-2 mb-4">
                                    <label className="block text-sm font-medium uppercase text-gray-700" htmlFor="behalfof">Behalf of</label>
                                    <input
                                        type="text"
                                        id="behalfof"
                                        placeholder="Personal"
                                        className="w-full p-2 border-b border-zinc-300 focus:outline-none"
                                    />
                                </div>
                                <div className="w-full lg:w-1/3 px-2 mb-4">
                                    <label className="block text-sm font-medium uppercase text-gray-700" htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Email Address"
                                        className="w-full p-2 border-b border-zinc-300 focus:outline-none"
                                    />
                                </div>
                                <div className="w-full md:w-1/3 px-2 mb-4">
                                    <label className="block text-sm font-medium uppercase text-gray-700" htmlFor="personal">Behalf of</label>
                                    <input
                                        type="text"
                                        id="personal"
                                        placeholder="Personal"
                                        className="w-full p-2 border-b border-zinc-300 focus:outline-none"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-2">
                                <div className="w-full lg:w-2/3 px-2 mb-4">
                                    <label className="block text-sm font-medium uppercase text-gray-700" htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        placeholder="Start typing here"
                                        className="w-full p-2 border-b border-zinc-300 focus:outline-none"
                                        rows="1"
                                    ></textarea>
                                </div>
                                <div className="w-full lg:w-[30%] px-2 mb-4 flex items-end">
                                    <button
                                        type="submit"
                                        className="w-full bg-purple-500 text-white px-4 py-4 rounded-3xl hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                    >
                                        Submit now
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
