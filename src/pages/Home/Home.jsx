import Header from '../../components/Header';
import Introduction from '../../components/Introduction';
import AboutMe from '../../components/AboutMe';
import Skills from '../../components/Skills';
import PersonalProjects from '../../components/PersonalProjects';
import Footer from '../../components/Footer';

import styles from './home.module.css';

function Home() {

  return (
    <>
      <Header/>
        <main className={styles.main}>
          <Introduction/>
          <AboutMe/>
          <Skills/>
          <PersonalProjects/>
        </main>
      <Footer/>
    </>
  )
}

export default Home
