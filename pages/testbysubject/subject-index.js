import { useRouter } from 'next/router';
import React from 'react'
import Axios from 'axios'

import SubjectCard from '../../components/testbysubjectcards/subjectcard';
import SubjectTestListCardPrev from '../../components/testbysubjectcards/subjecttestcard';
import { BACKEND_URL } from '../../constants';
import HomeNav from '../../components/NavBar/HomeNavBar';



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

export async function getStaticProps() {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`${BACKEND_URL}/subject-list/`)
    const cities = await res.json()

    //const post = await res.json()

    //const institutes = await fetchInstitute(params);

    // Pass post data to the page via props
    return {
        props: {
            cities,
        },
        revalidate: 3600,

    }
}

export default function InstituteIndex({cities}){

    const router=useRouter();
    if (router.isFallback) {
        return <h1>Loading...</h1>
    }

    if (cities.length==0) {

        return <h1>No data</h1>;
    }

    console.log(cities.sort())
    

    return (
        <div>
            <HomeNav />
            
            <div class="md:grid grid-cols-3 grid-cols-1 gap-4 m-16">
            {
                cities.sort().map((item,index)=>{
                    return (
                        <div>
                            <SubjectCard key={index} item={item} />
                           
                            </div>
                    )
                })
            }

            </div>
           
         
        </div>
    )
}