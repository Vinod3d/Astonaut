import { FiArrowDownRight } from 'react-icons/fi';
import pose2 from '../assets/pose2.png';

const Achievement = () => {
    return (
        <div className='achievement relative px-4 md:px-8 pb-10 max-w-align-element m-auto'>
            <div className=" border border-gray-500 rounded-2xl bg-white text-white overflow-hidden">
                <div className="md:h-[650px] flex flex-col justify-center py-5">
                    <div className="">
                        <div className="text-center md:text-left">
                            <h2 className='text-gradient font-main-bold font-semibold text-5xl  md:text-[6vw] md:ml-20 md:mt-0 mt-14'>We're Not new,</h2>
                        </div>
                    </div>
                    <div className=" flex flex-col md:flex-row justify-between ">
                        <div className="md:w-[40%]">
                            <div className="w-96 h-96 md:w-0 md:h-0">
                                <img src={pose2} alt="Animated Character" className="absolute w-[550px] -mt-48 md:-mt-52" />
                            </div>
                        </div>
                        <div className="textContent md:w-[60%] m-auto">
                            <h2 className="text-gradient font-main-bold text-5xl md:text-[6vw] ">Already above</h2>
                            <h2 className='text-5xl md:text-[6vw] text-purple-500 font-main-bold'><span className="text-black md:text-[5vw] text-4xl italic">the</span> Surface</h2>
                        </div>
                    </div>
                    <div className="md:mt-28 md:mb-0 mb-7">
                        <div className="flex flex-col md:flex-row md:justify-between">
                            <button className="text-purple-400 font-semibold px-6 inline-flex items-center mt-8 pb-16 md:pl-20 m-auto">
                                <span className='border rounded-full p-2 border-purple-400'><FiArrowDownRight className='text-base' /></span>
                                 <span className='px-2'>Know more</span>
                            </button>
                            <div className="flex flex-col gap-5 lg:flex-row justify-center md:justify-start   m-auto md:mr-16 ">
                                <div className='flex justify-center items-center gap-4 h-28 w-[400px] md:w-72 p-6 md:p-10 grad-2 rounded-3xl'>
                                    <p className="text-5xl md:text-5xl font-normal">24K</p>
                                    <div className='text-left'>
                                        <p className="text-xl md:text-lg">Projects</p>
                                        <p className="text-xl md:text-lg">Launched</p>
                                    </div>
                                </div>
                                <div className='flex justify-center items-center gap-4 h-28 w-[400px] md:w-72 p-6 md:p-8 grad-2 rounded-3xl '>
                                    <p className="text-5xl md:text-5xl font-semibold">2.3M</p>
                                    <div>
                                        <p className="text-xl md:text-lg">Members in</p>
                                        <p className="text-xl md:text-lg"> Community</p>
                                    </div>
                                </div>
                                <button className="h-28 w-28 bg-purple-500 hover:bg-purple-600 hidden xl:block text-white font-bold p-2 rounded-3xl">
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
