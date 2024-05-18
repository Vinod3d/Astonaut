import men from '../assets/men.png'

const FeatureTab = () => {
    return (
        <div className="px-8 pb-10 relative">
            <div className=" bg-black border rounded-2xl border-gray-500 text-white overflow-hidden ">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                    <div className="tabPhoto flex-1">
                        <img src={men} className='m-auto' alt="Futuristic Character" />
                    </div>
                    <div className="flex-1 flex flex-col gap-16">
                        <div className="flex space-x-3">
                            <button id="engageTab" className="bg-purple-600 py-2 w-48 px-4 rounded-2xl">Engage</button>
                            <button id="snapshotTab" className="bg-transparent py-2 w-48 px-4 rounded-2xl hover:bg-purple-700">Snapshot</button>
                            <button id="lotteryTab" className="bg-transparent py-2 w-48 px-4 rounded-2xl hover:bg-purple-700">Lottery</button>
                            <button id="contributionTab" className="bg-transparent py-2 w-48 px-4 rounded-2xl hover:bg-purple-700">Contribution</button>
                        </div>
                        <div className="tabContent">
                            <h2 id="tabTitle " className="text-4xl font-bold mb-9 font-main">Engage</h2>
                            <p id="tabDescription" className="text-lg">Put all your idle coins to work.</p>
                            <p id="tabContent">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s. Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FeatureTab