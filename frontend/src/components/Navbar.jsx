import React from 'react'
import {motion} from 'framer-motion'


const Navbar = () => {
  return (
    <>
    <motion.div
    className='fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10'
    >
        <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
            {/* Logo*/}
            <div className='flex items-center gap-2 cursor-pointer bg-white/5 p-2 px-4 rounded-2xl border border-zinc-600'>
                <img src="artificial-intelligence.png" alt=""  className="w-10 h-10 invert-[0.6] sepia saturate-[300%] hue-rotate-[240deg]"  style={{ width: "40px", height: "40px", }} />
                <spam className= 'font-semibold text-lg bg-linear-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent'>Kalli AI</spam>
            </div>

        </div>

    </motion.div>
    </>
  )
}

export default Navbar