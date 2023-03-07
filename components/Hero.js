import React from "react";

const Hero = () => {
  return (
    <div className="flex items-center h-screen mb-12 bg-fixed bg-center bg-cover">
      {/* overlay */}
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-tr from-[#1E1E1E] via-[#1E1E1E] to-[#5e3333] z-[2]" />
      <div className="w-full z-10 mb-10">
        <div className="max-w-[1240px] m-auto">
          <div className="p-4 text-white z-[2]">
            <p className="text-xl">Search or upload Music to get</p>
            <h2 className="text-3xl font-bold">Music Genre Classification</h2>
            <div className="pt-4">
              <input
                type="file"
                className="text-sm text-grey-500
            file:mr-5 file:py-2 file:px-6
            file:rounded-lg file:border-0
            file:text-sm file:font-medium
            file:text-white
            hover:file:cursor-pointer file:bg-gradient-to-r from-[#F86F3C]
to-[#D3535B]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
