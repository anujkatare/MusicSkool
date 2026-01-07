"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/utils";
import Link from "next/link";



function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/" >
          <MenuItem setActive={setActive}  active={null} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            Home
          </div>
        </MenuItem>
        </Link>
        
        <MenuItem setActive={setActive} active={active} item="Courses">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/interface-design">Beginner Guitar Mastery</HoveredLink>
            <HoveredLink href="/seo">Piano for Absolute Beginners</HoveredLink>
            <HoveredLink href="/branding">Advanced Vocal Training</HoveredLink>
            <HoveredLink href="/interface-design">Music Production with FL Studio</HoveredLink>
            <HoveredLink href="/seo">Indian Classical Music Basics</HoveredLink>
            <HoveredLink href="/branding">DJ Mixing & Live Performance</HoveredLink>
          </div>
        </MenuItem>
         <Link href="/contacts" >
          <MenuItem setActive={setActive}  active={null} item="Contact Us"/>
          
        
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;