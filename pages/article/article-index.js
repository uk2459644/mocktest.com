import BlogCard from "../../components/Cards/BlogCard";
import Axios from 'axios';
import HomeNav from "../../components/NavBar/HomeNavBar";
import Head from "next/head";
// import fs from 'fs'

const fs= require('fs');

async function generateSiteMap(pages) {
   
  
    const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages.map(page => {
               
                return `
                        <url>
                            <loc>${`https://mocktest.site/article/${page.keyword}/${page.id}`}</loc>
                        </url>
                    `
              })
              .join('')}
        </urlset>
    `
  
    fs.writeFileSync('public/sitemap-articles.xml', sitemap);

    return true;
  }

const fetchTestList = async () => await Axios.get('https://backend-mock-test-crash.herokuapp.com/article-info/')
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

    const d1= await generateSiteMap(data1.testlist);

    //  const data=res.json()

    // console.log(`data from api req is ${data}`)

    return {
        props: {
            //   prev_testlist: data,
            testlist: data1,
        },
        revalidate: 21600,

    }
}
export default function ArticleInfoIndex({ testlist }) {


    return (
        <div>
            <Head>
                <title>Articles : Get latest articles and goverment job information.</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <meta name="description" content="
                   Get latest articles on various topics , important for govt job  of various departments like SSC , RRB etc and we provide practice set for free.
                                             "/>
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Articles : Get latest articles and goverment job information " />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Get latest articles on various topics , important for govt job  of various departments like SSC , RRB etc and we provide practice set for free.
                   " />
                <meta property="og:image" content="https://mocktest.vercel.app/study-1.jpg" />
                <link rel="icon" href="https://mocktest.site/article/article-index" />

            </Head>
            <HomeNav />
            {
                testlist.testlist.length > 0 ? (
                    <div>
                        {
                            testlist.testlist.reverse().map((job, index) => {
                                return (
                                    <div>
                                        <BlogCard
                                            key={index}
                                            job={job}
                                            path="/article"
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