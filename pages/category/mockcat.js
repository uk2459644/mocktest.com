import Head from "next/head";
import FirstPageTop from "../../components/CustomPages/FirstPageTop";
import MockTest from "../../components/CustomPages/MockTest";
import FooterBlack1 from "../../components/Footer/FooterBlack1";
import HomeNav from "../../components/NavBar/HomeNavBar";

export default function MockCategoy(){

    return(
        <div>
              <Head>
        <title>MOCK-TESTS: Online tests to enrich your confidence.</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="description" content="It's always a great idea to boost your confidence, before exam.Choose a category and do as many tests as you can . "/>
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="MOCK-TESTS: Online tests to enrich your confidence" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="It's always a great idea to boost your confidence, before exam.Choose a category and do as many tests as you can . "/>
        <meta property="og:image" content="https://mocktest.vercel.app/pexels-kulik-stepan-2.jpg" /> 
        <link rel="icon" href="https://mocktest.vercel.app/category/mockcat" />
      </Head>
            <HomeNav />
            <FirstPageTop />
            <MockTest />
            <FooterBlack1 />
        </div>
    )
}