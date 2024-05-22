import React from 'react';
import men from '../assets/men.png';

const FeatureTab = () => {
    return (
        <div className="px-4 md:px-8 pb-10 relative">
            <div className="bg-black border rounded-2xl border-gray-500 text-white overflow-hidden">
                <div className="container md:h-[500px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
                    <div className="tabPhoto w-full md:w-1/2 lg:w-2/5 ">
                        <img src={men} className='m-auto w-96 md:w-[500px] lg:w-[30rem] mt-24 md:mb-22 -mb-16' alt="Futuristic Character" />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-3/5 flex flex-col gap-8 md:gap-16 px-4 md:px-0">
                        <div className="flex flex-wrap justify-center md:justify-start space-x-4 mt-10 font-main">
                            <button id="engageTab" className="bg-purple-600 py-2 px-6 my-2 rounded-3xl  ">Engage</button>
                            <button id="snapshotTab" className="bg-transparent py-2 px-6 my-2 border rounded-3xl hover:bg-purple-700">Snapshot</button>
                            <button id="lotteryTab" className="bg-transparent py-2 px-6 my-2 border rounded-3xl  hover:bg-purple-700">Lottery</button>
                            <button id="contributionTab" className="bg-transparent py-2 my-2 px-6 border rounded-3xl  hover:bg-purple-700">Contribution</button>
                        </div>
                        <div className="tabContent font-main text-center md:text-left">
                            <h2 id="tabTitle" className="text-4xl md:text-5xl font-bold mb-4 md:mb-9 font-main">Engage</h2>
                            <p id="tabDescription" className="text-xl font-semibold md:text-lg mb-5">Put all your idle coins to work.</p>
                            <p id="tabContent" className="text-sm md:text-base">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s. Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeatureTab;
