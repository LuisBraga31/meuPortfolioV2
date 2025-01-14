import styles from './AboutMe.module.css';

export default function AboutMe() {

    return (
        
        <section id="aboutme" className={styles.aboutMe}>
            
            <div className={styles.aboutMeContainer}>

                <h2> Sobre Mim </h2>

                <p> 
                Olá, meu nome é Luis Gustavo Braga! Eu sou formado em Sistemas de Informação pelo Centro Universitário de Itajubá - FEPI. 
                Sou apaixonado pela área de tecnologia, especialmente no desenvolvimento Front-End. Atualmente desenvolvo alguns projetos 
                para aprimorar meus conhecimentos, no desenvolvimento web utilizo como base o ReactJS e no desenvolvimento mobile estou
                utilizando o React Native. Estou constantemente expandindo meus conhecimentos para me tornar um desenvolvedor Full-Stack. 
                Por fim, atualmente tenho um projeto chamado Top10Game, que é um simples jogo de acertar o top10 de um determinado assunto, 
                atualmente tenho um site desse jogo e um aplicativo disponível na Play Store, na seção de <a href="#projects"> projetos </a> 
                deste meu portfólio, você pode acessá-los.
                </p>

            </div>
            

        </section>

    )
  
}
