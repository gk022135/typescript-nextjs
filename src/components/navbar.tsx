// You're importing a component that needs `useState`. This React hook only works in a client component. To fix, mark the file (or its parent) with the `"use client"` directive.

"use client"



import { useRouter } from "next/router";
import { useState} from "react"
import React from 'react';
import Link from "next/link";

const Navbar: React.FC = () => {  // only works with arrow function -> React.FC

    // const navigate = useRouter();

  return (
    <div className="w-screen bg-white/50 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-3">
        <ul className="flex flex-row justify-between space-x-6 text-gray-800 font-medium">
          <li className="hover:text-blue-500 cursor-pointer">Home</li>

          <li className="hover:text-blue-500 cursor-pointer"><Link href= "/comp/ok">okkk bhai</Link></li>

          <li className="hover:text-blue-500 cursor-pointer">Services</li>

          <li className="hover:text-blue-500 cursor-pointer">Contact</li>
          
          <li className="hover:text-blue-500 cursor-pointer">Login</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;



/*
React.FC stands for React Functional Component. It's a TypeScript type definition that tells the compiler:

"This component is a React function component, which may accept props and must return valid JSX."

React.FC: A built-in TypeScript type for a React functional componen
*/