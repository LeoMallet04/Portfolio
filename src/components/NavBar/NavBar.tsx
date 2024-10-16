import React from "react";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <header className={styles.NavBarBody}>
      <nav className={styles.NavBarContent}>
         <ul className="flex flex-row items-center">
          <button className={styles.ButtonStyle} > <img className="h-9 w-9" src="src/assets/GitHub.svg" alt="GitHub" /></button>
          <button className={styles.ButtonStyle}> <img className="h-9 w-9" src="src/assets/Linkedin.svg" alt="Linkedin" /></button>
          <button className="bg-black rounded-xl h-8 w-28 text-base mt-3 mx-3 font-bold">Contate-me</button>
         </ul>
        </nav>
    </header>
      
  )
}



export default NavBar;