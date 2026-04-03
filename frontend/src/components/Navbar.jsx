import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Coins } from "lucide-react";
import LoginModal from "./LoginModal";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [openLogin, setOpenLogin] = useState(false);
  let userData = false;
  return (
    <>
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo*/}
          <div className="flex items-center gap-2 cursor-pointer bg-white/5 p-2 px-4 rounded-2xl border border-zinc-600">
            <img
              src="artificial-intelligence.png"
              alt=""
              className="w-10 h-10 invert-[0.6] sepia saturate-[300%] hue-rotate-[240deg]"
              style={{ width: "40px", height: "40px" }}
            />
            <spam className="font-semibold text-lg bg-linear-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
              Kalli AI
            </spam>
          </div>
          {/* right Side*/}
          <div className="flex items-center gap-5">
            <button
              onChangeCapture={() => navigate("/pricing")}
              className="hidden md:block text-sm text-zinc-400 hover:text-white transition"
            >
              Pricing
            </button>

            {/* Credits*/}
            {userData && (
              <div
                className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10
               text-sm cursor-pointer hover:bg-white/10 transition"
              >
                <Coins size={14} className="text-yellow-400" />
                <span className="text-white">100</span>
                <span className="text-zinc-200">Credits</span>
                <span className="font-semibold text-zinc-200">+</span>
              </div>
            )}

            {/* Profile or Login */}
            {userData ? (
              <div className="relative">
                <button className="flex items-center">
                  <img
                    src="https://ui-avatars.com/api/?name=Yuvraj+chauhan"
                    alt=""
                    className="w-9 h-9 rounded-full border border-white/20 object-cover hover:scale-105 transition"
                  />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setOpenLogin(true)}
                className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 font-semibold text-sm transition text-white"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </motion.div>
      {openLogin && (
        <LoginModal open={openLogin} onClose={() => setOpenLogin(false)} />
      )}
    </>
  );
};

export default Navbar;
