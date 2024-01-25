import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import styles from './Header.module.css';

export default function Header() {

    const [menu, setMenu] = useState(false);

    const showMenu = () => setMenu(!menu);

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
        </nav>

        <div className={styles.menuHamb}>
            <FaBars size={24} onClick={showMenu} className={menu ? `${styles.desactive}` : ``}/>
            <MdOutlineClose size={32} onClick={showMenu} className={menu ? `` : `${styles.desactive}`}/>
        </div>

        <nav className={menu ? `${styles.menuResponsive} ${styles.active}` : `${styles.menuResponsive} `}>
          <div className={styles.menuItens}>
            <a href="#"> Home </a>
            <a href="#aboutme"> Sobre mim </a>
            <a href="#skills"> Skills </a>
            <a href="#projects"> Projetos </a>
          </div>
        </nav>

      </header>

    )
  
}
