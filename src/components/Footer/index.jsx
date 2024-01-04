import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

import styles from './Footer.module.css';

export default function Footer() {

    return (
      <footer id="contacts">

        <div className={styles.contacts}>
          
          <div className={styles.contactItem}>
            <a href="https://github.com/LuisBraga31"> <FaGithub size={32}/> </a>
            <p> github.com/LuisBraga31 </p>
          </div>

          <div className={styles.contactItem}>
            <a href="https://www.linkedin.com/in/luis-gustavo-braga/"> <FaLinkedin size={32}/> </a>
            <p> linkedin.com/in/luis-gustavo-braga/ </p>
          </div>

          <div className={styles.contactItem}>
            <a href="mailto:luisgustavobsilva@gmail.com"> <BiLogoGmail size={32}/> </a>
            <p> luisgustavobsilva@gmail.com </p>
          </div>
        
        </div>

        <div className={styles.footer}>
          <small> © 2023 / Luis Braga Dev - Todos os direitos reservados </small>
        </div>
          
      </footer>
    )

}
