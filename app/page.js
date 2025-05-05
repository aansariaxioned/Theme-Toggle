"use client"

import { useContext } from "react";
import { ThemeContext } from "./context/ThemeProvider";
import { FaMoon, FaSun } from "react-icons/fa";


export default function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="day-light-content">
      <div className="content">
        <h1>Next.js Day/Light Mode page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia unde omnis et, ab explicabo pariatur nostrum dolorem maxime deleniti sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, atque nobis nihil provident ullam beatae quaerat aliquam expedita ab fugiat?</p>
      </div>
      <button className="btn" onClick={toggleTheme}>
        {theme === 'light' ? (<FaMoon></FaMoon>) : (<FaSun></FaSun>)}
      </button>
    </div>
  );
}
