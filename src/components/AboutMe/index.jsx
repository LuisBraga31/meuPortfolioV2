import styles from './AboutMe.module.css';

export default function AboutMe() {

    return (
        
        <section id="aboutme" className={styles.aboutMe}>
            
            <div className={styles.aboutMeContainer}>

                <h2> Sobre Mim </h2>

                <p> 
                    Olá, meu nome é Luis Gustavo Braga! Eu sou formado em Sistemas de Informação pelo Centro Universitário 
                    de Itajubá - FEPI. Eu sou apaixonado pela área de tecnologia, especialmente na área de desenvolvimento front-end,
                    onde, atualmente, utilizo ReactJS para criar meus projetos. Já no desenvolvimento back-end, estou estudando NodeJs
                    e Java para ampliar meus conhecimentos para me tornar um desenvolvedor Full-Stack.
                </p>

            </div>
            

        </section>

    )
  
}