
const Main = () => {
  return (
    <div className="w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-6 py-5  ">
        {/* mainDiv 1 */}
        <div className="md:w-2/3">
            <div>
                <img src="./images/image-web-3-desktop.jpg" alt="" />
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-3 py-5">
                <h2 className="md:w-1/2 text-3xl md:text-6xl font-bold">
                The Bright Future of Web 3.0?
                </h2>
                <div className="md:w-1/2">
                    <div className="font-medium md:text-lg mb-4">
                    We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise? 
                    </div>
                    <p className="py-1 md:py-2 px-2 md:px-5 bg-red-400 text-white inline-block uppercase cursor-pointer hover:bg-slate-900 transition duration-150 ease-linear">
                        read more
                    </p>
                </div>
            </div>
        </div>

        {/* mainDiv 2 */}
        <div className="bg-slate-900 md:w-1/3 text-white p-4">
            <h4 className="text-xl font-semibold text-yellow-600 mb-6">
                New
            </h4>
            
            <div>
                <h6 className="mb-3 cursor-pointer hover:text-yellow-400">
                    Hydrogen vs Electric Cars
                </h6>
                <p className="text-sm font-light text-white/75">
                    Will hydrogen-fueled  cars ever catch up to EVs?
                </p>
                <div className="h-[2px] bg-white my-3" />
            </div>
            
            <div>
                <h6 className="mb-3 cursor-pointer hover:text-yellow-400">
                The Downsides of AI Artistry
                </h6>
                <p className="text-sm font-light text-white/75">
                What are the possible adverse effects of on-demand AI image generation?
                </p>
                <div className="h-[2px] bg-white my-3" />
            </div>
            
            <div>
                <h6 className="mb-3 cursor-pointer hover:text-yellow-400">
                Is VC Funding Drying Up?
                </h6>
                <p className="text-sm font-light text-white/75">
                Private funding by VC firms is down 50% YOY. We take a look at what that means.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main