import React from 'react'

const Navbar = () => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      {/* overlay */}
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2]">
        <h2>MELOALCHEMY</h2>
      </div>
    </div>
  );
}

export default Navbar