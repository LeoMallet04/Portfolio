import Options from "../Body/Cogs/Options";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <header className={styles.NavBarBody}>
      <nav className={styles.NavBarContent}>
         <ul className="flex flex-row items-center">
          <button onClick={() => { window.open("https://github.com/LeoMallet04")}} className={styles.ButtonStyle} > <img className="h-9 w-9" src="src/assets/navbaricons/GitHub.png" alt="GitHub" /></button>
          <button onClick={() => { window.open("https://www.linkedin.com/in/leonardo-mallet-65a19931a/")}}className={styles.ButtonStyle}> <img className="h-9 w-9" src="src/assets/navbaricons/Linkedin.png" alt="Linkedin" /></button>
          <Options></Options>
         </ul>
        </nav>
    </header>
      
  )
}



export default NavBar;