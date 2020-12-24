import Head from 'next/head'
import AboutUs from '../components/CustomPages/AboutUs'
import LandingPage1 from '../components/CustomPages/LandingPage1'
import OurTeam from '../components/CustomPages/OurTeam'
import FooterBlack1 from '../components/Footer/FooterBlack1'
import HomeNav from '../components/NavBar/HomeNavBar'

export default function Home() {
  return (
    <div>

      <HomeNav />


      <LandingPage1 />
      
      <AboutUs />
      <OurTeam />
     
     
      <FooterBlack1 />

    </div>
  )
}
