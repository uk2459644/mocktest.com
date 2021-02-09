import Head from "next/head";
import AboutUs from "../../components/CustomPages/AboutUs";
import FooterBlack1 from "../../components/Footer/FooterBlack1";
import HomeNav from "../../components/NavBar/HomeNavBar";


export default function About() {

    return (
        <div>
            <Head>
                <title>ABOUT US : WE BELIEVE IN “PEOPLE GOALS” YOURS AND OURS.</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <meta name="keywords" content="An exercise system that keeps you safe, makes things simple, and gives you support so you feel capable and confident.
        Free Mock Test: Get Online Test Series for Bank PO, Clerk, IBPS, SBI, SSC, LIC, RBI, RRB, JEE, CTET, GATE &amp; other 2020 Exams. Attempt Mock Test, Practice Set, Analyse your preparation and practice question answers in Hindi and English" />
                <meta name="description" content="
       Are you passionate about “Your Goals ?”.

       Have you a dream of “Govt Jobs ?”
       
       Why are you waiting for ?
       
       Join our awesome community of “Govt Jobs aspirants”and begin your journey in a more confident way ."/>
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="ABOUT US : WE BELIEVE IN “PEOPLE GOALS” YOURS AND OURS." />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Are you passionate about “Your Goals ?”.

Have you a dream of “Govt Jobs ?”

Why are you waiting for ?

Join our awesome community of “Govt Jobs aspirants”and begin your journey in a more confident way . "/>
                <meta property="og:image" alt="about us image" content="https://mocktest.vercel.app/pexels-kulik-stepan-2.jpg" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:description" content="Are you passionate about “Your Goals ?”.

Have you a dream of “Govt Jobs ?”

Why are you waiting for ?

Join our awesome community of “Govt Jobs aspirants”and begin your journey in a more confident way ." />
                <meta name="twitter:title" content="ABOUT US : WE BELIEVE IN “PEOPLE GOALS” YOURS AND OURS." />
                <meta name="twitter:site" content="https://mocktest.site/aboutus/About" />
                <meta name="twitter:image" alt="about us image" content="https://mocktest.site/pexels-kulik-stepan-2.jpg" />
                <link rel="icon" href="https://mocktest.vercel.app/aboutus/About" />
                <link rel="canonical" href="https://www.mocktest.site/aboutus/About" />
                <link rel="canonical" href="https://mocktest.site/aboutus/About" />
                <link rel="canonical" href="http://www.mocktest.site/aboutus/About" />
                <link rel="canonical" href="http://mocktest.site/aboutus/About" />
            </Head>

            <HomeNav />
            <AboutUs />
            <FooterBlack1 />
        </div>

    )
}