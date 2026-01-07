"use client";


import { Meteors } from "@/components/ui/meteors";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import Navbar from "@/components/Navbar";
import SplashCursor from '@/components/ui/SplashCursor';
function Contacts() {
  return (
   
    <div className="flex min-h-screen items-center justify-center bg-black px-4">
       <SplashCursor/>
       <Navbar />
      <div className="relative w-full max-w-2xl ">
        {/* Glow background */}
        <div className="absolute inset-0 h-full w-full scale-[0.85] rounded-full bg-linear-to-r from-blue-500 to-purple-400  blur-3xl" />

        {/* Card */}
        <div className="relative overflow-hidden rounded-2xl border h-full w-full p-10 shadow-xl">
          <h1 className="relative z-50 mb-3 text-2xl font-bold text-white">
            Contact Us
          </h1>

          <p className="relative z-50 mb-8 text-sm text-white">
            Feel free to connect with me through any of the platforms below.
            I’m always open to collaborations, ideas, and conversations.
          </p>

          {/* Social Links */}
          <div className="relative z-50 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <a
              href="https://www.linkedin.com/in/anuj-katare"
              target="_blank"
              className="flex flex-col items-center gap-2 rounded-lg border border-white p-4 text-gray-300 transition hover:border-blue-500 hover:text-blue-400"
            >
              <FaLinkedin size={22} />
              <span className="text-xs">LinkedIn</span>
            </a>

            <a
              href="https://github.com/anujkatare"
              target="_blank"
              className="flex flex-col items-center gap-2 rounded-lg border border-white p-4 text-gray-300 transition hover:border-gray-400 hover:text-white"
            >
              <FaGithub size={22} />
              <span className="text-xs">GitHub</span>
            </a>

            <a
              href="https://www.instagram.com/theyhates.anuj/"
              target="_blank"
              className="flex flex-col items-center gap-2 rounded-lg border border-white p-4 text-gray-300 transition hover:border-pink-500 hover:text-pink-400"
            >
              <FaInstagram size={22} />
              <span className="text-xs">Instagram</span>
            </a>

            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=KnqNxrVVjvlDTKhDLLVBwKDhTvFZNPWggCpFBrkLSxrTQNbwHMjxwxkDvwvgXVprJfpZsWGWrJbRGvnkVkdGlqmKJPbLzcXZTlbsQjjsBhZhlNpQqCPWBKDRSMwJVQlkhpBzxBnlxwTwsGcKBJsfr"
              className="flex flex-col items-center gap-2 rounded-lg border border-white p-4 text-gray-300 transition hover:border-red-500 hover:text-red-400"
            >
              <FaEnvelope size={22} />
              <span className="text-xs">Gmail</span>
            </a>
          </div>

          {/* Meteors effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}

export default Contacts;
