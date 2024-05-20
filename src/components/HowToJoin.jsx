import pose3 from '../assets/pose3.png'
import SignImg from '../assets/FeaturedIcons/Signicon.svg'
import verify from '../assets/FeaturedIcons/verify.svg'
import doneIcon from '../assets/FeaturedIcons/doneIcon.svg'
import { FiArrowDownRight } from "react-icons/fi";

const HowToJoin = () => {
    return (
        <div className="px-4 md:px-8 pb-10 max-w-align-element m-auto">
            <div className="howToJoin border border-gray-500 rounded-2xl bg-black  overflow-hidden">
                <div className="md:h-[640px] flex flex-wrap items-center text-white md:p-5">
                    <div className="w-full lg:w-2/3 px-4">
                        <div className='flex'>
                            <h1 className="text-4xl md:text-[4vw] pl-2 font-main-bold flex-1 mb-6">How to join?</h1>
                            <p className="flex-1 text-[22px] pl-5 mb-8">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 m-auto gap-4">
                            <div className=" card-1 border border-gray-600 w-[100%] max-w-[449px] m-auto h-56 md:h-48 p-4 rounded-3xl shadow-lg">
                                <div className='flex flex-col h-[100%]  justify-between'>
                                    <div className='flex justify-between'>
                                        <h2 className="text-lg font-semibold">Sign up</h2>
                                        <p className="text-base mt-2 font-2 text-gray-500">Step 1</p>
                                    </div>
                                    <button className="  inline-block text-white py-2 px-4 rounded">
                                        <a href="#" className='cursor-pointer'>
                                            <img src={SignImg} alt="signicon" className='relative -top-3 m-auto ' />
                                        </a>
                                    </button>
                                    <div className="flex justify-between">
                                        <p className="text-base font-2 text-gray-500">Sign up to the System</p>
                                        <FiArrowDownRight className='text-4xl text-purple-600' />
                                    </div>
                                </div>
                            </div>
                            <div className="card-2 border border-gray-600 w-[100%] max-w-[449px] m-auto h-56 md:h-48 p-4 rounded-3xl shadow-lg">
                                <div className='flex flex-col h-[100%] justify-between'>
                                    <div className='flex justify-between'>
                                        <h2 className="text-lg font-semibold">Fill Details</h2>
                                        <p className="text-base mt-2 font-2 text-gray-500">Step 2</p>
                                    </div>

                                    <div className="flex justify-between">
                                        <p className="text-base font-2 text-gray-500">Fill all your details</p>
                                        <FiArrowDownRight className='text-4xl text-purple-600' />
                                    </div>
                                </div>
                            </div>
                            <div className="card-3 border border-gray-600 w-[100%] max-w-[449px] m-auto h-56 md:h-48 p-4 rounded-3xl shadow-lg">
                                <div className='flex flex-col h-[100%] justify-between'>
                                    <div className='flex justify-between'>
                                        <h2 className="text-lg font-semibold">Verify</h2>
                                        <p className="text-base mt-2 font-2 text-gray-500">Step 3</p>
                                    </div>
                                    <button className="  inline-block text-white py-2 px-4 rounded">
                                        <a href="#" className='cursor-pointer'>
                                            <img src={verify} alt="signicon" className='relative -top-3 right-1 m-auto ' />
                                        </a>
                                    </button>
                                    <div className="flex justify-between">
                                        <p className="text-base font-2 text-gray-500">Verify your email</p>
                                        <FiArrowDownRight className='text-4xl text-purple-600' />
                                    </div>
                                </div>
                            </div>
                            <div className="relative card-4 border border-gray-600 w-[100%] max-w-[449px] m-auto h-56 md:h-48 p-4 rounded-3xl shadow-lg">
                                <div className='flex flex-col h-[100%] justify-between'>
                                    <div className='flex justify-between'>
                                        <h2 className="text-lg font-semibold">Done!</h2>
                                        <p className="text-base font-2 text-gray-500 mt-2">Step 4</p>
                                    </div>
                                    <button className="  inline-block text-white py-2 px-4 rounded">
                                        <a href="#" className='cursor-pointer'>
                                            <img src={doneIcon} alt="signicon" className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ' />
                                        </a>
                                    </button>
                                    <div className="flex justify-between">
                                        <p className="text-base font-2 text-gray-500">Verify your email</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 px-4 flex justify-center items-center">
                        <img src={pose3} alt="Astronaut illustration" className="max-w-full h-auto" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowToJoin