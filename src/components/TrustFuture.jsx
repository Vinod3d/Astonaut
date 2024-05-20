import bg from '../assets/bg.png'
import pose5 from '../assets/pose5.png'
import { FiArrowUpRight } from "react-icons/fi";

const TrustFuture = () => {
    return (
        <div className='px-4 md:px-8 pb-10 max-w-align-element m-auto'>
            <div className="TrustTheFuture md:relative border border-gray-500 rounded-2xl bg-black  overflow-hidden">

                <div className="md:h-[450px] grad-4 flex flex-col md:flex-row justify-around">
                    <div className="md:absolute left-16 top-32 flex flex-col  justify-center  " >
                        <div className="leading-3 text-white">

                            <h2 className="text-4xl font-bold font-main-bold text-[5vw] inline-block tracking-tighter">Trust</h2>
                            <span className='text-[45px] pl-5 italic tracking-tighter'>the</span>
                        </div>
                        <h2 className='text-white leading leading-[80px]  font-main-bold text-[5vw] tracking-tighter'>Future</h2>
                    </div>
                    <div className="relative">
                        <img src={bg} alt="bg" className="w-full h-full object-cover z" />
                        <div className="">
                            <img src={pose5} alt="" className='absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   w-[37vw]' />
                        </div>
                    </div>

                    <div className="md:absolute right-5 w-80 h-64 bg-white text-purple-800 p-4 rounded-3xl shadow-lg mt-24 mr-20 ">
                        <div className="flex flex-col gap-8 ">
                            <div className="flex justify-between">
                                <h2 className="text-5xl">730K</h2>
                                <FiArrowUpRight className='text-5xl' />
                            </div>
                            <div className="text-xl font-semibold">
                                <p className="">People Trusted</p>
                                <p className="">Now it's you.</p>
                            </div>
                            <button className="bg-purple-500 text-white p-2 rounded-2xl mt-4">Join now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrustFuture;
