import Head from "next/head";
import AboutUs from "../../components/CustomPages/AboutUs";
import FooterBlack1 from "../../components/Footer/FooterBlack1";
import HomeNav from "../../components/NavBar/HomeNavBar";
import AbouUsBottom from "../../components/CustomPages/aboutus-bottom";


export default function About() {

    return (
        <div>
            <Head>
                <title>ABOUT US : WE BELIEVE IN “PEOPLE GOALS” YOURS AND OURS.</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <meta name="keywords" content="An exercise system that keeps you safe, makes things simple, and gives you support so you feel capable and confident.
        Free Mock Test: Get Online Test Series for Bank PO, Clerk, IBPS, SBI, SSC, LIC, RBI, RRB, JEE, CTET, GATE &amp; other 2020 Exams. Attempt Mock Test, Practice Set, Analyse your preparation and practice question answers in Hindi and English" />
                <meta name="description" content="  Using this website users will be able to get new alerts & updates from MOCKTEST and access Online Test Series for RRB NTPC ,
                                RRB GROUP D , SSC CGL , BIHAR POLICE etc. examinations and information related to all government examinations. To access online test series you only need to  going to our website.
                                Users have the option to download the question paper after the exam. Once the test is completed or submitted , you get your response and analysis of your paper ."/>
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="ABOUT US : WE BELIEVE IN “PEOPLE GOALS” YOURS AND OURS." />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="  Using this website users will be able to get new alerts & updates from MOCKTEST and access Online Test Series for RRB NTPC ,
                                RRB GROUP D , SSC CGL , BIHAR POLICE etc. examinations and information related to all government examinations. To access online test series you only need to  going to our website.
                                Users have the option to download the question paper after the exam. Once the test is completed or submitted , you get your response and analysis of your paper ."/>
                <meta property="og:image" alt="about us image" content="https://mocktest.vercel.app/pexels-kulik-stepan-2.jpg" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:description" content="  Using this website users will be able to get new alerts & updates from MOCKTEST and access Online Test Series for RRB NTPC ,
                                RRB GROUP D , SSC CGL , BIHAR POLICE etc. examinations and information related to all government examinations. To access online test series you only need to  going to our website.
                                Users have the option to download the question paper after the exam. Once the test is completed or submitted , you get your response and analysis of your paper ." />
                <meta name="twitter:title" content="ABOUT US : WE BELIEVE IN “PEOPLE GOALS” YOURS AND OURS." />
                <meta name="twitter:site" content="https://mocktest.site/aboutus/About" />
                <meta name="twitter:image" alt="about us image" content="https://mocktest.site/pexels-kulik-stepan-2.jpg" />
                <link rel="icon" href="https://mocktest.vercel.app/aboutus/About" />
               
                <link rel="canonical" href="https://mocktest.site/aboutus/About" />
              
            </Head>

            <HomeNav />
            <AboutUs />
            <AbouUsBottom />
            <FooterBlack1 />
        </div>

    )
}