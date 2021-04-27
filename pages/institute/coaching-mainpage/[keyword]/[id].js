import { useRouter } from 'next/router';
import React from 'react'
import Axios from 'axios';
// import CoachingCard from '../../../../components/Cards/CoachingCard';
// import InstituteInfoCard from '../../../../components/instituecards/institueinfocard';
// import InstitueFooter from '../../../../components/instituecards/instituefooter';
// import InstituteHero from '../../../../components/instituecards/institutehero';
// import InstituteResult from '../../../../components/instituecards/instituteresult';
// import InstituteAppeal from '../../../../components/instituecards/instituteappeal';
// import InstituteTestList from '../../../../components/instituecards/institutetestlist';
// import InstituteContactUsForm from '../../../../components/instituecards/institutecontactusform';
// import InstituteNav from '../../../../components/instituecards/institutenav';



const fetchInstitute = async (params) => await Axios.get(`https://backend-mock-test-crash.herokuapp.com/testname-by-institute/${params.id}/`)
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
    const res = await fetch('https://backend-mock-test-crash.herokuapp.com/institute-list/')
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
            id:params.id,
            keyword:params.keyword,
        },
        revalidate: 3600,

    }
}

export default function InstituteIndex({institutes}){

    const router=useRouter();
    if (router.isFallback) {
        return <h1>Loading...</h1>
    }

    if (!institutes) {

        return <h1>No data</h1>;
    }

    console.log(institutes);

    return (
        <div>
            {/* <InstituteNav />
            <InstituteHero />
            <InstituteResult />
            <InstituteAppeal />
            <InstituteTestList />
            <InstituteContactUsForm />
            <InstituteInfoCard /> */}
             <div class="grid grid-cols-3 gap-4 m-16">
                 {
                     institutes.institutes.sort().map((item,index)=>{
                         return (
                             <div>
                                 {index}
                                 {/* <CoachingCard key={index} item={item} /> */}
                                 </div>
                         )
                     })
                 }
             </div>
             {/* <InstitueFooter />
           */}
        </div>
    )
}