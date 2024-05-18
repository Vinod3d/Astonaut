import { FiArrowDownRight } from 'react-icons/fi'
import pose2 from '../assets/pose2.png'

const Achievement = () => {
    return (
        <div className='achievement px-8 pb-10'>
            <div className="border border-gray-500 rounded-2xl bg-white text-white">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 flex flex-col justify-center">
                        <div className="">
                            <h2 className='text-black font-main-bold font-semibold text-7xl '>We're Not new,</h2>
                            <img src={pose2} alt="Animated Character" className="pose w-full" />
                        </div>
                        <button className="text-purple-400 font-semibold px-6 inline-flex items-center">
                            <span className='border rounded-full p-1'><FiArrowDownRight className='text-base ' /></span>
                            <span className='px-2'>Know more</span>
                        </button>
                    </div>
                    <div className="md:w-1/2">
                        <div className="flex flex-col gap-32">
                            <div className="textContent">
                                <h2 className="text-black font-main-bold  text-7xl mb-4"> Already above </h2>
                                <h2 className='text-7xl text-black font-main-bold'><span className="text-purple-300 italic ">the</span> Surface</h2>
                            </div>

                            <div className="flex space-x-4">
                                <div className='flex justify-center items-center gap-4 h-32 w-72 p-10 bg-purple-500 rounded-3xl'>
                                    <p className="text-5xl font-normal">24K</p>
                                    <p className="text-lg">Projects Launched</p>
                                </div>
                                <div className='flex justify-center items-center gap-4 h-32 w-72 p-10 bg-purple-500 rounded-3xl'>
                                    <p className="text-4xl font-semibold">2.3M</p>
                                    <p className="text-lg">Members in Community</p>
                                </div>
                                <button className="h-32 w-28 bg-purple-500 hover:bg-purple-600 text-white font-bold p-2 rounded-3xl">
                                    <FiArrowDownRight className='text-8xl'/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Achievement