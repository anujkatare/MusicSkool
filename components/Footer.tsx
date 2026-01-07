"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full bg-black text-gray-300">
      
  

      <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 ">
        
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          
       
          <div>
            <h2 className="text-2xl font-bold text-white">MusicSkool</h2>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Learn from industry experts.  
              Build skills that matter.  
              Grow with confidence.
            </p>
          </div>

        
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-white">About Us</Link></li>
              <li><Link href="#" className="hover:text-white">Courses</Link></li>
              <li><Link href="#" className="hover:text-white">Instructors</Link></li>
              <li><Link href="#" className="hover:text-white">Careers</Link></li>
            </ul>
          </div>

      
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Resources
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-white">Blog</Link></li>
              <li><Link href="#" className="hover:text-white">Help Center</Link></li>
              <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white">Terms & Conditions</Link></li>
            </ul>
          </div>

          
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Stay Updated
            </h3>
            <p className="mb-4 text-sm text-gray-400">
              Subscribe to get updates on new courses and features.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-md bg-gray-900 px-3 py-2 text-sm text-white outline-none ring-1 ring-gray-700 focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-6 md:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} MusicSkool. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <Link href="#" className="hover:text-white">Twitter</Link>
            <Link href="#" className="hover:text-white">LinkedIn</Link>
            <Link href="#" className="hover:text-white">GitHub</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
