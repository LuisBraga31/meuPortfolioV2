import styles from './HomePage.module.css';
import Perfil from '../../assets/perfil.png';

export default function HomePage() {

    return (
        <main>
            
            <section id="introduction" className={styles.introduction}>
            
                <div className={styles.introductionText}>
                    <div>
                        <h1> Olá! Eu sou </h1>
                        <h1> <strong className={styles.luisbragadev}> Luis Gustavo Braga</strong> </h1>
                    </div>
                    <p> Sou um jovem mineiro de 23 anos e desenvolvedor Front-end.</p>
                </div>
                
                <div className={styles.introductionImage}>
                    <img src={Perfil} alt="Luis Braga - perfil"/>
                </div>

            </section>
            
        </main>
    )

}