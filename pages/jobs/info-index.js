import BlogCard from "../../components/Cards/BlogCard";
import Axios from 'axios';
import HomeNav from "../../components/NavBar/HomeNavBar";
import Head from "next/head";
import { BACKEND_URL } from "../../constants";

const fs = require('fs');

async function generateSiteMap(pages) {


    const sitemap =
        `<?xml version="1.0" encoding="UTF-8"?>
<urlset xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages.map(page => {

            return `
    <url>
        <loc>${`https://mocktest.site/jobs/${page.keyword}/${page.id}`}</loc>
        <priority>0.80</priority>
    </url>
                `

        })
            .join('')}
</urlset>`

    fs.writeFileSync('public/sitemap-jobs.xml', sitemap);

    return true;
}

const fetchTestList = async () => await Axios.get(`'${BACKEND_URL}/jobs-info/'`)
    .then(res => ({
        error: false,
        testlist: res.data,
    }
    )).catch(() => ({
        error: true,
        testlist: null,
    }

    ));

export async function getStaticProps() {

    // const data = await fetchPrevTestList();
    const data1 = await fetchTestList();

    const d1 = await generateSiteMap(data1.testlist);

    //  const data=res.json()

    // console.log(`data from api req is ${data}`)

    return {
        props: {
            //   prev_testlist: data,
            testlist: data1,
        },
        revalidate: 3600,

    }
}
export default function JobInfoIndex({ testlist }) {


    return (
        <div>
            <Head>
                <title>Job Info : Get latest goverment job information.Latest notifications for government jobs, bank jobs and all state jobs</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <meta name="keywords" content="moct test , free mock test rrb ssc , latest free moc test,An exercise system that keeps you safe, makes things simple, and gives you support so you feel capable and confident.
        Free Mock Test: Get Online Test Series for Bank PO, Clerk, IBPS, SBI, SSC, LIC, RBI, RRB, JEE, CTET, GATE &amp; other 2020 Exams. Attempt Mock Test, Practice Set, Analyse your preparation and practice question answers in Hindi and English" />
                <meta name="description" content="
                   Get latest govt job informations of various departments like SSC , RRB etc and we provide practice set for free.
                   Free Mock Test: Get Online Test Series for Bank PO, Clerk, IBPS, SBI, SSC, LIC, RBI, RRB, JEE, CTET, GATE &amp; other 2020 Exams. Attempt Mock Test, Practice Set, Analyse your preparation and practice question answers in Hindi and English                         "/>
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Job Info : Get latest goverment job information " />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Get latest govt job informations of various departments like SSC , RRB etc and we provide practice set for free.
                   Free Mock Test: Get Online Test Series for Bank PO, Clerk, IBPS, SBI, SSC, LIC, RBI, RRB, JEE, CTET, GATE &amp; other 2020 Exams. Attempt Mock Test, Practice Set, Analyse your preparation and practice question answers in Hindi and English " />
                <meta property="og:image" content="https://mocktest.vercel.app/study-1.jpg" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:description" content=" Get latest govt job informations of various departments like SSC , RRB etc and we provide practice set for free.
              Free Mock Test: Get Online Test Series for Bank PO, Clerk, IBPS, SBI, SSC, LIC, RBI, RRB, JEE, CTET, GATE &amp; other 2020 Exams. Attempt Mock Test, Practice Set, Analyse your preparation and practice question answers in Hindi and English" />
                <meta name="twitter:title" content="Job Info : Get latest goverment job information" />
                <meta name="twitter:site" content="https://mocktest.site/jobs/info-index" />
                <meta name="twitter:image" content="https://mocktest.site/rishabh-agarwal-unsplash.jpg" />
                <link rel="icon" href="https://mocktest.site/jobs/info-index" />
                <link rel="canonical" href="https://www.mocktest.site/jobs/info-index" />
                <link rel="canonical" href="https://mocktest.site/jobs/info-index" />
                <link rel="canonical" href="http://www.mocktest.site/jobs/info-index" />
                <link rel="canonical" href="http://mocktest.site/jobs/info-index" />

            </Head>
            <HomeNav />
            {
                testlist.testlist.length > 0 ? (
                    <div>
                        {
                            testlist.testlist.map((job, index) => {
                                return (
                                    <div>
                                        <BlogCard
                                            key={index}
                                            job={job}
                                            path="/jobs"
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                ) : null
            }


        </div>
    )
}