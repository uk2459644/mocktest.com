import { useRouter } from 'next/router';
import React from 'react'
import Axios from 'axios';
import Link from 'next/link'
import { BACKEND_URL } from '../../../constants';
import HomeNav from '../../../components/NavBar/HomeNavBar';


const fetchInstitute = async (params) => await Axios.get(`${BACKEND_URL}/test-by-subject-list/${params.id}/`)
    .then(res => ({
        error: false,
        institutes: res.data,
    }
    )).catch(() => ({
        error: true,
        institutes: null,
    }

    ));

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch(`${BACKEND_URL}/subject-list/`)
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

    const institutes = await fetchInstitute(params);

    // Pass post data to the page via props
    return {
        props: {
            institutes,
            id: params.id,
            keyword: params.keyword,
        },
        revalidate: 3600,

    }
}

export default function InstituteIndex({ institutes,keyword }) {

    const router = useRouter();
    if (router.isFallback) {
        return <h1>Loading...</h1>
    }

    if (institutes.institutes.length == 0) {

        return <h1>No data found.</h1>;
    }

    return (
        <div>
            <HomeNav />
            <div class=" md:grid grid-cols-3 grid-cols-1 gap-4 m-16">
                {
                    institutes.institutes.sort().map((item, index) => {
                        return (
                            <div>
                                <div key={index}>
                                    <span class="flex shadow-md mb-5 text-xs m-4">
                                        <Link href={`/testbysubject/preview-test/${keyword}/${item.test_time}/${item.id}`}>
                                            <button class="bg-indigo-500 uppercase font-semibold w-44 text-center text-gray-200 p-3 px-5 rounded-l">Take Test</button>
                                        </Link>

                                        <span class="uppercase font-semibold field text-sm text-gray-600 p-2 px-3 rounded-r w-full">{item.test_name}</span>
                                    </span>

                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}