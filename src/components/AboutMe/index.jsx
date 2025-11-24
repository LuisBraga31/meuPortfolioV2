import styles from './AboutMe.module.css';

export default function AboutMe() {

    return (
        
        <section id="aboutme" className={styles.aboutMe}>
            
            <div className={styles.aboutMeContainer}>

                <h2> Sobre Mim </h2>

                <p> 
                    Olá, meu nome é Luis Gustavo Braga. Sou formado em Sistemas de Informação pelo Centro Universitário de Itajubá - FEPI e 
                    apaixonado por tecnologia, especialmente pelo desenvolvimento Front-End. Atualmente, trabalho em projetos pessoais para aprimorar 
                    minhas habilidades, utilizando ReactJS no desenvolvimento web e React Native no desenvolvimento mobile. Busco me aperfeiçoar continuamente 
                    para me tornar um desenvolvedor Full-Stack. Entre meus principais projetos, destaco o Top10Game, um jogo de adivinhação de listas de Top 10. 
                    Ele já conta com um site e um aplicativo disponível na Play Store, ambos acessíveis na seção de <a href="#projects"> projetos </a> do meu portfólio.
                </p>

            </div>
            

        </section>

    )
  
}
