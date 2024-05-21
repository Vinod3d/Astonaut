import bg3 from '../assets/bg3.svg'
import pose5 from '../assets/pose5.png'
import { FiArrowUpRight } from "react-icons/fi";
import Header from './Header';

const TrustFuture = () => {
    return (
        <div className='px-4 md:px-8 pb-10 max-w-align-element m-auto'>
            <div className="TrustTheFuture md:relative border border-gray-500 rounded-2xl bg-black  overflow-hidden">
                <div className="md:h-[450px] grad-4 flex flex-col md:flex-row justify-around">
                    <div className="md:absolute z-10 left-16 top-32 flex flex-col  justify-center items-center mt-20 md:mt-10 " >
                        <div className="leading-3 text-white">

                            <h2 className="text-4xl font-bold font-main-bold lg:text-[65px] md:text-5xl text-[65px] inline-block tracking-tighter">Trust</h2>
                            <span className='lg:text-[45px] md:text-4xl text-[45px] pl-5 italic tracking-tighter'>the</span>
                        </div>
                        <h2 className='text-white leading leading-[80px]  font-main-bold lg:text-[65px] md:text-5xl text-[65px] tracking-tighter'>Future</h2>
                    </div>
                    <div className='order-last md:absolute h-96 w-96 m-auto'>
                        <div className="relative md:static ">
                            {/* <img src={bg3} alt="bg" className="w-full h-full object-cover " /> */}
                            <div className="">
                                {/* <img src={pose5} alt="" className='  md:static  top-1/2 left-1/2 transform mt-[124px] -translate-x-1/2 -translate-y-1/2 w-96 md:w-[37vw]' /> */}
                                <img src={pose5} alt="" className='  md:static md:mt-28 mt-12 md:w-[37vw]' />
                            </div>
                        </div>
                    </div>

                    <div className="md:absolute z-10 right-5 lg:w-80 lg:h-64 md:w-70 md:w-56 w-80 h-64  bg-white text-purple-800 p-4 rounded-3xl shadow-lg md:mt-24 my-16 mx-auto md:mr-0 lg:mr-10 ">
                        <div className="flex flex-col gap-8 ">
                            <div className="flex justify-between">
                                <h2 className="text-5xl">730K</h2>
                                <FiArrowUpRight className='text-5xl' />
                            </div>
                            <div className="text-xl font-semibold">
                                <p className="">People Trusted</p>
                                <p className="">Now it's you.</p>
                            </div>
                            <button className="bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-2xl mt-4">Join now</button>
                        </div>
                    </div>
                </div>
            </div>
            <Header/>
        </div>
    );
}

export default TrustFuture;
