import { FaBars } from "react-icons/fa";
import styles from './Header.module.css';

export default function Header() {

    return (

      <header id="header" className={styles.header}>
        
        <div className={styles.headerLogo}> 
          <h2> Luis Braga <strong>Dev</strong> </h2>
        </div>

        <nav className={styles.headerNav}>
          <a href="#"> Home </a>
          <a href="#aboutme"> Sobre mim </a>
          <a href="#skills"> Skills </a>
          <a href="#projects"> Projetos </a>
          <a href="#contacts"> Contatos </a>
        </nav>

        <div className={styles.menuHamb}>
            <FaBars size={24}/>
        </div>

      </header>

    )
  
}
