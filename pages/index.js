import Head from 'next/head'
import AboutUs from '../components/CustomPages/AboutUs'
import LandingPage1 from '../components/CustomPages/LandingPage1'
import OurTeam from '../components/CustomPages/OurTeam'
import FooterBlack1 from '../components/Footer/FooterBlack1'
import HomeNav from '../components/NavBar/HomeNavBar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mock-Test : GET PREPARED, CONFIDENT & MOTIVATED</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="keywords" content="moct test , free mock test rrb ssc , latest free moc test,An exercise system that keeps you safe, makes things simple, and gives you support so you feel capable and confident.
        Free Mock Test: Get Online Test Series for Bank PO, Clerk, IBPS, SBI, SSC, LIC, RBI, RRB, JEE, CTET, GATE &amp; other 2020 Exams. Attempt Mock Test, Practice Set, Analyse your preparation and practice question answers in Hindi and English" />
        <meta name="description" content="
        Free Mock Test: Get Online Test Series for Bank PO, Clerk, IBPS, SBI, SSC, LIC, RBI, RRB, JEE, CTET, GATE &amp; other 2020 Exams. Attempt Mock Test, Practice Set, Analyse your preparation and practice question answers in Hindi and English
        An exercise system that keeps you safe, makes things simple, and gives you support so you feel capable and confident.
                                             "/>
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Mock-Test : GET PREPARED, CONFIDENT & MOTIVATED " />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="An exercise system that keeps you safe, makes things simple, and gives you support so you feel capable and confident.
        Free Mock Test: Get Online Test Series for Bank PO, Clerk, IBPS, SBI, SSC, LIC, RBI, RRB, JEE, CTET, GATE &amp; other 2020 Exams. Attempt Mock Test, Practice Set, Analyse your preparation and practice question answers in Hindi and English
                                             " />
        <meta property="og:image" alt="image" content="https://mocktest.vercel.app/study-1.jpg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content="An exercise system that keeps you safe, makes things simple, and gives you support so you feel capable and confident.
        Free Mock Test: Get Online Test Series for Bank PO, Clerk, IBPS, SBI, SSC, LIC, RBI, RRB, JEE, CTET, GATE &amp; other 2020 Exams. Attempt Mock Test, Practice Set, Analyse your preparation and practice question answers in Hindi and English" />
        <meta name="twitter:title" content="Mock-Test : GET PREPARED, CONFIDENT & MOTIVATED" />
        <meta name="twitter:site" content="https://mocktest.site/" />
        <meta name="twitter:image" content="https://mocktest.site/rishabh-agarwal-unsplash.jpg" />
        <link rel="icon" href="https://mocktest.site/" />
      
        <link rel="canonical" href="https://mocktest.site/" />
       
      </Head>

      <HomeNav />


      <LandingPage1 />

      <AboutUs />
      <OurTeam />


      <FooterBlack1 />

    </div>
  )
}
