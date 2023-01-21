import { useRouter } from 'next/router';
import React from 'react'
import CityCard from '../../components/Cards/citycard';
import { BACKEND_URL } from '../../constants';


const fetchInstitute = async (params) => await Axios.get(`${BACKEND_URL}/institute-list/${params.id}/`)
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
    const res = await fetch(`'${BACKEND_URL}/city-list/'`)
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

    if (!cities) {

        return <h1>No data</h1>;
    }

    console.log(cities.sort())
    

    return (
        <div>
            <div class="grid grid-cols-3 gap-4 m-16">
            {
                cities.sort().map((item,index)=>{
                    return (
                        <div>
                            <CityCard key={index} item={item} />
                           
                            </div>
                    )
                })
            }

            </div>
           
         
        </div>
    )
}