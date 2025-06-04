
const CenterPart = () => {
  return (
   <section
  className="min-h-[90vh] flex items-center justify-center px-4 
  bg-[linear-gradient(to_bottom,_#0d0d0d_0%,_#0d0d0d_70%,_#202030_85%,_#e64a19_100%)] 
  relative text-white text-center">
      <div className="max-w-2xl w-full">
        {/* Headings */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
Shrink it. Share it. Simplify it
        </h1>
        <p className="text-gray-300 text-lg mb-10">
          Shorten your websites, track clicks, and create custom URLs with ease.
        </p>

        {/* Input Box */}
        <div className="bg-[#1c1c1c] rounded-2xl px-5 py-4 flex flex-col sm:flex-row items-center sm:items-stretch justify-between space-y-4 sm:space-y-0 shadow-lg">
          <input
            type="text"
            placeholder="Paste your link to shorten it and share it with the world.."
            className="flex-1 bg-transparent text-white placeholder-gray-400 text-sm focus:outline-none"
          />
          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-1 border border-gray-600 text-white text-xs px-3 py-1 rounded-full hover:border-white">
              <span className="text-lg">＋</span>
              <span>Public</span>
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 rounded-full p-2">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CenterPart;
