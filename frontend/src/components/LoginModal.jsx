import { Sparkles, X } from "lucide-react";
import React from "react";
import { motion } from "motion/react";

const LoginModal = ({ open, onClose }) => {
  return (
    <div>
      {open && (
        <motion.div className="fixed inset-0 flex z-100  items-center justify-center bg-black/80 backdrop-blur-xl px-4">
          <motion.div className="relative w-full max-w-md p-px rounded-3xl bg-linear-to-br from-purple-500/40 via-blue-500/30 to-transparent">
            <div className="relative rounded-3xl bg-[#0b0b0b] border border-white/10 shadow-[0_30px_120px_rgba(0,0,0,0,0.8)] overflow-hidden">
              {/* glow background*/}
              <motion.div className="absolute -top-32 -left-32 w-80 h-80 bg-purple-500/30 blur-[140px]" />
              <motion.div className="absolute -bottom-32 -right-32 w-80 h-80 bg-blue-500/25 blur-[140px]" />
              <button 
              onClick={onClose}
              className="absolute top-5 right-5 z-20 text-zinc-400 hover:text-white transition">
                <X />
              </button>
              <div className="relative px-8 pt-14 pb-10 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-white/10 rounded-full bg-white/5 backdrop-blur">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-gray-300">
                    AI Website Builder
                  </span>
                </div>
                <h2 className="text-3xl font-semibold leading-tight mb-3 space-x-2 text-white">
                    Welcome to{" "}
                    <span className="bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent ">Kalli AI</span>
                </h2>
                <motion.button
                whileHover={{scale:1.04}}
                whileTap={{scale:0.96}}
                className="group relative w-full h-13 rounded-xl bg-white text-black font-semibold shadow-xl overflow-hidden"
                >
                    <div className="relative flex items-center justify-center gap-3">
                    <img className="h-15 w-15" src="https://images.icon-icons.com/1269/PNG/512/1497553309-101_84843.png" alt="" />
                    Continue with Google
                    </div>
                </motion.button>
                <div className="flex items-center gap-4 my-10">
                    <div className="h-px flex-1 bg-white/10"/>
                    <span className="text-xs tracking-tight text-zinc-500">Secure Login</span>
                    <div className="h-px flex-1 bg-white/10"/>
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed">
                    By continuing you agree to our {" "}
                    <span className="underline cursor-pointer hover:text-zinc-300">Terms and Serivces</span>{" "}
                    and{" "}
                    <span className="underline cursor-pointer hover:text-zinc-300">Privacy Policy</span>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default LoginModal;
