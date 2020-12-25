import Head from "next/head";
import AboutUs from "../../components/CustomPages/AboutUs";
import FooterBlack1 from "../../components/Footer/FooterBlack1";
import HomeNav from "../../components/NavBar/HomeNavBar";


export default function About(){

    return(
        <div>
             <Head>
        <title>ABOUT US : WE BELIEVE IN “PEOPLE GOALS” YOURS AND OURS.</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
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
        <meta property="og:image" content="https://mocktest.vercel.app/pexels-kulik-stepan-2.jpg" /> 
        <link rel="icon" href="https://mocktest.vercel.app/aboutus/About" />
      </Head>

            <HomeNav />
 <AboutUs />
 <FooterBlack1 />
        </div>
       
    )
}