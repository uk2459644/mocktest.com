import Axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { FacebookIcon, FacebookMessengerIcon, FacebookMessengerShareButton, FacebookShareButton, TelegramIcon, TelegramShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share';
import BlogCardNews from '../../../components/Cards/BlogCardNews';
import BlogCardOverLap from '../../../components/Cards/BlogCardOverLap';
import HomeNav from '../../../components/NavBar/HomeNavBar';

const fetchQuestions = async (params) => await Axios.get(`https://backend-mock-test-crash.herokuapp.com/article-points-list/${params.id}/`)
    .then(res => ({
        error: false,
        questions: res.data,
    }
    )).catch(() => ({
        error: true,
        questions: null,
    }

    ));

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://backend-mock-test-crash.herokuapp.com/article-info/')
    const tests = await res.json()

    // Get the paths we want to pre-render based on posts
    const paths = tests.map((post) => ({
        params: {

            id: post.id.toString(),

            keyword: post.keyword,

        },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    //const res = await fetch(`https://premenv.herokuapp.com/singleshopdetail/${params.id}`)

    // const prods = await fetchData(params)

    //const post = await res.json()

    const questions = await fetchQuestions(params);

    // Pass post data to the page via props
    return {
        props: {
            questions,
            id:params.id,
            keyword:params.keyword,

        },
        revalidate: 21600,

    }
}

export default function JobsInfoPoints({ questions , id,keyword }) {

    const router = useRouter();

    if (router.isFallback) {
        return <h1>Loading...</h1>
    }

    if (!questions) {

        return <h1>No data</h1>;
    }

    const [points, setPoints] = useState(questions.questions)

    return (
        <div className="">
            <Head>
            <title>{points[0].title}</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <meta name="keywords" content={keyword} />
                <meta name="description" content={points[0].description}/>
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content={points[0].title} />
                <meta property="og:type" content="website" />
                <meta property="og:description" content={points[0].description} />
                <meta property="og:image" content={points[0].image_url} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:description" content={points[0].description}/>
                <meta name="twitter:title" content={points[0].title} />
                <meta name="twitter:site" content={`https://mocktest.site/article/${keyword}/${id}`} />
                <meta name="twitter:image" alt="about us image" content={points[0].image_url} />
               
                <link rel="icon" href={`https://mocktest.site/article/${keyword}/${id}`} />

                <link rel="canonical" href={`https://mocktest.site/article/${keyword}/${id}`} />
               

            </Head>
            <HomeNav />
            {
                points.length > 0 ? (
                    <div>
                        {
                            points.map((point, index) => {

                                return (
                                    <div key={index}>
                                        {
                                            point.image_show ? (
                                                <div class="section py-28 w-full scree border  grid md:grid-cols-2  text-gray-800">
                                                    <div class="subsec flex-none overflow-hidden max-h-96">
                                                        <img class="w-full object-fit max-h-80" src={point.image_url} alt="" />
                                                    </div>
                                                    <div class="subsec my-auto p-8">
                                                        <div class="title font-semibold text-3xl mb-5">{point.title}</div>
                                                        {
                                                            point.description.split('@@').map((p, index) => {
                                                                return (
                                                                    <div>
                                                                        {
                                                                            p.includes('https://') ? (
                                                                                <div>
                                                                                    <button class="text-white m-4 px-4 w-auto h-10 bg-cyan-600 rounded-full hover:bg-green-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">

                                                                                        <a href={p}>Click Here</a>
                                                                                    </button>
                                                                                </div>
                                                                            ) : (
                                                                                    <div key={index} class="desc text-lg">{p}</div>

                                                                                )
                                                                        }
                                                                    </div>


                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>

                                            ) : (
                                                    <div class="section py-28 w-full scree border    text-gray-800">
                                                        <div class="subsec flex-none overflow-hidden max-h-96">
                                                            {/* <img class="w-full" src={point.image_url} alt="" /> */}
                                                        </div>
                                                        <div class="subsec my-auto p-8">
                                                            <div class="title font-semibold text-3xl mb-5">{point.title}</div>
                                                            {
                                                                point.description.split('@@').map((p, index) => {
                                                                    return (
                                                                        <div>
                                                                            {
                                                                                p.includes('https://') ? (
                                                                                    <div>
                                                                                        <button class="text-white m-4 px-4 w-auto h-10 bg-cyan-600 rounded-full hover:bg-green-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">

                                                                                            <a href={p}>Click Here</a>
                                                                                        </button>
                                                                                    </div>
                                                                                ) : (
                                                                                        <div key={index} class="desc text-lg">{p}</div>

                                                                                    )
                                                                            }
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                )
                                        }


                                    </div>
                                )
                            })
                        }


                    </div>


                ) : null
            }
            <div className="flex flex-row  justify-center align-center content-center m-4">
                <FacebookShareButton 
                url={`https://mocktest.site/article/${keyword}/${id}`}
                title={points[0].title}
                quote={points[0].description}
                className=" mr-4"
                
                >
                    <FacebookIcon 
                    size={40}
                    round={true}
                    />

                </FacebookShareButton>
                <FacebookMessengerShareButton
                  url={`https://mocktest.site/article/${keyword}/${id}`}
                  title={points[0].title}
                  className=" mr-4"
                  redirectUri={`https://mocktest.site/article/${keyword}/${id}`}
                 
                >
                    <FacebookMessengerIcon
                    size={40}
                    round={true}
                    />

                </FacebookMessengerShareButton>
                <TelegramShareButton
                 url={`https://mocktest.site/article/${keyword}/${id}`}
                 title={points[0].title}
                 className=" mr-4"
                
                >
                    <TelegramIcon 
                     size={40}
                     round={true}
                    />

                </TelegramShareButton>
                <WhatsappShareButton
                 url={`https://mocktest.site/article/${keyword}/${id}`}
                 title={points[0].title}
                 className=" mr-4"
                >
                    <WhatsappIcon 
                    size={40}
                    round={true}
                    />

                </WhatsappShareButton>

            </div>

        </div>
    )
}