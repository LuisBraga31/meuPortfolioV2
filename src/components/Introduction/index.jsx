import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

import styles from './Introduction.module.css';
import Perfil from '../../assets/perfil_semfundo.png';

export default function Introduction() {

    return (
        
        <section id="introduction" className={styles.introduction}>
            
            <div className={styles.introductionImage}>
                <img src={Perfil} alt="Luis Braga - perfil"/>
            </div>

            <div className={styles.introductionText}>
                <div className={styles.introductionTitle}>
                    <h1> Olá! Eu sou </h1>
                    <h1> <strong className={styles.luisbragadev}> Luis Gustavo Braga</strong> </h1>
                </div>
                <p> Prazer, eu sou o Luis, tenho 24 anos e sou desenvolvedor Front-end.</p>
                
                <div className={styles.introductionContacts}>
                    <a href="https://github.com/LuisBraga31" target="_blank" rel="noopener noreferrer"> <FaGithub size={28}/> </a>
                    <a href="https://www.linkedin.com/in/luis-gustavo-braga/" target="_blank" rel="noopener noreferrer"> <FaLinkedin size={28}/> </a>
                    <a href="mailto:luisgustavobsilva@gmail.com" target="_blank" rel="noopener noreferrer"> <BiLogoGmail size={28}/> </a>
                 </div>

            </div>

        </section>

    )
  
}
