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
                <p> Prazer, eu sou o Luis, tenho 23 anos e sou desenvolvedor Front-end.</p>
            </div>

        </section>

    )
  
}