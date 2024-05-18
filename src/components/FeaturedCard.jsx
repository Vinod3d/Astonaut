import icon1 from '../assets/FeaturedIcons/icon1.png'
import icon2 from '../assets/FeaturedIcons/icon2.png'
import icon3 from '../assets/FeaturedIcons/icon3.png'

const FeaturedCard = () => {
  return (
    <div className="px-8 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col justify-center items-center gap-8 h-66 border border-gray-500 p-6 rounded-2xl shadow-lg text-center">
          <img src={icon1}  className='w-20' alt="icon1" />
          <p className="text-white dark:text-zinc-900 text-3xl font-semibold font-poppin">
            Native super-app + trading terminal
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-8 h-66 bg-gradient-to-r border border-gray-500 rounded-2xl p-6 shadow-lg text-center">
          <img src={icon2} className='w-28' alt="icon2" />
          <p className="text-white dark:text-zinc-900 text-3xl font-semibold font-poppin">
            Premium User Experience
          </p>
        </div>
        <div className="w-full relative flex flex-col justify-center items-center gap-8 h-66 bg-gradient-to-r border border-gray-500 p-6 rounded-2xl shadow-lg text-center overflow-hidden">
          <div className="flex w-full gap-6 justify-center items-center relative">
            <div className="absolute -left-32 h-36 w-36 flex justify-center items-center rounded-full grad-1 shadow-glow border-2 border-purple-500"></div>
            <div className="absolute -right-32 h-36 w-36 flex justify-center items-center rounded-full grad-1 shadow-glow border-2 border-purple-500"></div>
            <div className="h-36 w-36 flex justify-center items-center rounded-full grad-1 shadow-glow border-2 border-purple-500">
              <img src={icon3} className="w-16" alt="" />
            </div>
          </div>
          <p className="text-white dark:text-zinc-900 text-3xl font-semibold font-poppin">
            All new Perfectly Crafted Tools
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
