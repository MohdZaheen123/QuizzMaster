"use client";
import React from "react";
import { motion } from "framer-motion";
import LampContainer from "@/components/ui/LampContainer";



export default function page() {
  return (
    <div className="">
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=""
      >
        <p className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
        Welcome to<br /> <span className="text-red-500">QuizzMaster</span>
        </p>
      </motion.h1>
      <div className="flex flex-col justify-center items-center h-full text-gray-400">
      <p className="text-2xl mb-10 text-gray-800 font-semibold">Learn play grow</p>

      <p className="">QuizzMaster is a platform specifically designed to test your knowledge in various topic in a very fun way.</p>
      <p>So what are you waiting for! grab a cofee and get started.</p>

      </div>

    </LampContainer>
    </div>
  );
}
