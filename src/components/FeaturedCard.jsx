import icon1 from '../assets/FeaturedIcons/icon1.png'
import icon2 from '../assets/FeaturedIcons/icon2.png'
import icon3 from '../assets/FeaturedIcons/icon3.png'

const FeaturedCard = () => {
  return (
    <div className="px-8 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col justify-center items-center gap-8 h-64 bg-gradient-to-r from-purple-600 to-purple-800 p-6 rounded-2xl shadow-lg text-center">
          <img src={icon1} alt="" />
          <p className="text-white dark:text-zinc-900 text-lg font-semibold">
            Native super-app + trading terminal
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-8 h-64 bg-gradient-to-r from-purple-600 to-purple-800 p-6 rounded-2xl shadow-lg text-center">
          <img src={icon2} alt="" />
          <p className="text-white dark:text-zinc-900 text-lg font-semibold">
            Premium User Experience
          </p>
        </div>
        <div className="relative flex flex-col justify-center items-center gap-8 h-64 bg-gradient-to-r border p-6 rounded-2xl shadow-lg text-center overflow-hidden">
         
         <div className="flex w-full gap-6">
          <div className="absolute -left-24 h-36 flex justify-center items-center w-36 rounded-full grad-1 shadow-glow border-2 border-purple-500"></div>
          <div className="h-36 flex translate-x-36 justify-center items-center w-36 rounded-full grad-1 shadow-glow border-2 border-purple-500">
            <img src={icon3} className='w- w-20' alt="" />
          </div>
          <div className="absolute -right-24 h-36 flex justify-center items-center w-36 rounded-full grad-1 shadow-glow border-2 border-purple-500"></div>
         </div>
          <p className="text-white dark:text-zinc-900 text-lg font-semibold">
            All new Perfectly Crafted Tools
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
