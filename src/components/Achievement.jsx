import { FiArrowDownRight } from 'react-icons/fi';
import pose2 from '../assets/pose2.png';

const Achievement = () => {
    return (
        <div className='achievement relative px-4 md:px-8 pb-10 max-w-align-element m-auto'>
            <div className=" border border-gray-500 rounded-2xl bg-white text-white overflow-hidden">
                <div className="md:h-[650px] flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-[35%] md:h-[100%] flex justify-between flex-col  p-4 md:p-8">
                        <div className="text-center md:text-left">
                            <h2 className='text-gradient font-main-bold font-semibold text-5xl absolute top-24 md:text-[6vw] md:ml-20 mb-4'>We're Not new,</h2>
                            <img src={pose2} alt="Animated Character" className="md:absolute md:top-[-50px] w-full md:w-[37rem] ml-0" />
                        </div>
                        <div className="flex justify-center md:justify-start">
                            <button className="text-purple-400 font-semibold px-6 inline-flex items-center pb-16 pl-20">
                                <span className='border rounded-full p-1'><FiArrowDownRight className='text-base' /></span>
                                <span className='px-2'>Know more</span>
                            </button>
                        </div>
                    </div>
                    <div className="md:w-[65%] flex flex-col justify-center  md:h-[100%] p-4 md:p-8">
                        <div className="flex flex-col gap-16 md:gap-24 text-center mt-10 md:text-left">
                            <div className="textContent">
                                <h2 className="text-gradient font-main-bold text-4xl md:text-[6vw] my-16">Already above</h2>
                                <h2 className='text-4xl md:text-[6vw] text-purple-500 font-main-bold'><span className="text-black md:text-[5vw] italic">the</span> Surface</h2>
                            </div>
                            <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
                                <div className='flex justify-center items-center gap-4 h-28 w-full md:w-72 p-6 md:p-10 grad-2 rounded-3xl'>
                                    <p className="text-3xl md:text-5xl font-normal">24K</p>
                                    <p className="text-sm md:text-lg">Projects Launched</p>
                                </div>
                                <div className='flex justify-center items-center gap-4 h-28 w-full md:w-72 p-6 md:p-8 grad-2 rounded-3xl'>
                                    <p className="text-3xl md:text-5xl font-semibold">2.3M</p>
                                    <p className="text-sm md:text-lg">Members in Community</p>
                                </div>
                                <button className="h-28 w-28 bg-purple-500 hover:bg-purple-600 hidden lg:block text-white font-bold p-2 rounded-3xl">
                                    <FiArrowDownRight className='text-5xl md:text-7xl m-auto' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    );
}

export default Achievement;
