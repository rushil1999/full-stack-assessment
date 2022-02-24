import { NextPage } from "next";
import FaqSection from "../components/faqSection";
import NavBar from "../components/navBar";
import SubNavBar from "../components/subNavBar";
import styles from '../styles/faqSection.module.css';

const LandingPage: NextPage = () => {
  return(
    <div>
      
      <div className={styles.outerSection}>
        <NavBar/>
        <SubNavBar/>
        <div style={{paddingBottom: '440px'}}></div>
        
      </div>  
      <div className={styles['faq-style-wrapper']}>
        <FaqSection/>
      </div>
      
      
    </div>
  )
}

export default LandingPage;