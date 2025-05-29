// import Options from "../Body/Cogs/Options";
import styles from "./NavBar.module.css";


function NavBar({changeLanguage}: {changeLanguage: (language:string) => void}) {
  return (
    <header className={styles.NavBarBody}>
      <nav className={styles.NavBarContent}>
         <ul className="flex flex-row items-center">
          <button onClick={() => changeLanguage("BR")} className="h-10 w-10 bg-black"></button>
          <button onClick={() => changeLanguage("ENG")} className="h-10 w-10 bg-black"></button>
          <div className=""></div>
          <button onClick={() => { window.open("https://github.com/LeoMallet04")}} className={styles.ButtonStyle} > <img className="h-9 w-9" src="/assets/navbar/github.png" alt="GitHub" /></button>
          <button onClick={() => { window.open("https://www.linkedin.com/in/leonardo-scheidt/")}}className={styles.ButtonStyle}> <img className="h-9 w-9" src="/assets/navbar/linkedin.png" alt="Linkedin" /></button>
          {/* <Options></Options> */}
         </ul>
        </nav>
    </header>
      
  )
}



export default NavBar;