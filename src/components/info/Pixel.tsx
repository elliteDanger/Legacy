function Pixel() {

  return (
    <>
      <div className="md:container mx-auto py-24 flex flex-col space-y-8">
        <div>
          <p className="font-trispace text-3xl font-bold leading-9">
            PIXEL Collection
          </p>
        </div>
        <div className="flex space-x-12">
          <div className="basis-1/2">
            <p className="text-base font-normal leading-6">
              Vulputate nunc egestas neque et venenatis facilisis tincidunt ac accumsan. Eget risus sed sem enim viverra sit ut lacus scelerisque. In tristique mauris euismod ultricies in eu placerat nisl morbi.
            </p>
            <p className="text-base font-normal leading-6">&nbsp;</p>
            <p className="text-base font-normal leading-6">
              Pellentesque orci nec enim lacinia turpis quis auctor. Nisi phasellus tellus neque enim bibendum lectus praesent.
            </p>
            <p className="text-base font-normal leading-6">&nbsp;</p>
            <p className="text-base font-normal leading-6">
              Magna montes pharetra ac libero non aliquet. Orci neque mi justo scelerisque in. Nibh amet egestas mattis at consectetur vulputate lacus nisi molestie. 
            </p>
            <div className="mt-6 py-3 flex">
              <p className="font-news text-lg font-bold leading-5 border-[#F38E0C] border-b-2">
                View the full collection
              </p>
            </div>
          </div>
          <div className="basis-1/2">
            <div className="flex justify-between items-center">
              <p className="font-trispace text-lg font-semibold leading-5">Minting Status</p>
              <div className="bg-[#FF002E] rounded-[10px] w-[64px] h-[20px] flex justify-center items-center">
                <p className="font-trispace font-normal text-sm leading-4 text-white">Close</p>
              </div>
            </div>
            <div className="mt-10">
              <p className="font-noto text-lg font-normal leading-6 text-[#636363]">Minted 125/125</p>
              <div className="mt-3">
                <div className="z-0 relative overflow-hidden h-5 mt-5 rounded-full bg-[rgb(53,48,74)]">
                  <div
                    className="h-full rounded-full transition-transform !duration-500 opacity-100"
                    style={{
                      backgroundColor: "#F38E0C",
                      backgroundImage: `repeating-linear-gradient(
                        60deg,
                        transparent,
                        transparent 15px,
                        #F59F30 15px,
                        #F59F30 30px
                      )`,
                      transform: `translateX(-0%)`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
              <button className="border-[#F38E0C] border-2 mt-10 w-full py-[14px] rounded-[10px]">
                <p className="font-news font-normal text-lg leading-5 text-[#F38E0C]">Connect To MINT</p>
              </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pixel

