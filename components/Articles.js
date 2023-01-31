
const Articles = () => {
  return (
    <div className="w-[80%] mx-auto flex flex-col md:flex-row justify-between py-6 space-y-4 md:space-y-0 md:space-x-6">
        
        <div className="flex space-x-5">
            <div>
                <img src="./images/image-retro-pcs.jpg" alt="retro" />
            </div>
            <div className="space-y-3 ">
                <h3 className="text-3xl font-bold text-gray-400">01</h3>
                <h6 className="font-semibold cursor-pointer hover:text-red-500">
                Reviving Retro PCs
                </h6>
                <p className="font-medium text-sm text-gray-600">
                What happens when old PCs are given modern upgrades?
                </p>
            </div>
        </div>
        
        <div className="flex space-x-5">
            <div>
                <img src="./images/image-top-laptops.jpg" alt="top-laptops" />
            </div>
            <div className="space-y-3 ">
                <h3 className="text-3xl font-bold text-gray-400">02</h3>
                <h6 className="font-semibold cursor-pointer hover:text-red-500">
                Top 10 Laptops of 2023
                </h6>
                <p className="font-medium text-sm text-gray-600">
                Our best picks for various needs and budgets.
                </p>
            </div>
        </div>
        
        <div className="flex space-x-5">
            <div>
                <img src="./images/image-gaming-growth.jpg" alt="gaming-growth" />
            </div>
            <div className="space-y-3 ">
                <h3 className="text-3xl font-bold text-gray-400">03</h3>
                <h6 className="font-semibold cursor-pointer hover:text-red-500">
                The Growth of Gaming
                </h6>
                <p className="font-medium text-sm text-gray-600">
                How the pandemic has sparked fresh opportunities.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Articles