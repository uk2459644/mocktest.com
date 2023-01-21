import Axios from 'axios'
import { useState } from 'react';

import Link from 'next/link'
import HomeNav from '../../components/NavBar/HomeNavBar';
import OverLapTestCatCard from '../../components/Cards/OverLapingTestCatCard';
import { BACKEND_URL } from '../../constants';

const fetchTestList = async () => await Axios.get(`${BACKEND_URL}/cat/`)
.then(res => ({
    error: false,
    catlist: res.data,
}
)).catch(() => ({
    error: true,
    catlist: null,
}

));

export async function getServerSideProps() {

//const data = await fetchPrevTestList();
const data1 = await fetchTestList();

//  const data=res.json()

// console.log(`data from api req is ${data}`)
if (!data1) {
    return {
      redirect: {
        destination: '/waiting/waiting-index',
        permanent: false,
      },
    }
  }

return {
    props: {
       // prev_testlist: data,
        catlist: data1,
    }
}
}

export default function PreviewDynamicTestCatIndex({catlist}){

    return(
        <div>
            <HomeNav />
            <section className="pt-20 pb-48">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold uppercase">Mock Test Categories</h2>
              <p className="text-lg leading-relaxed m-4">
                Choose a category and do as many tests as you can .
            </p>
            </div>
          </div>
          {/* <!-- Trainer Card Wrapper --> */}
          <div className="flex flex-row flex-wrap justify-center">
          <div className="">
              
              {
                  catlist.catlist.length > 0 ? (
                      <div className="flex flex-row flex-wrap justify-center">
                          {
                              catlist.catlist.map((cat,index)=>(
                                  
                                <div className="p-4">
                                  <OverLapTestCatCard
                                  key={index}

                                  cat={cat.category}
                                  link={`/dynamic/static-list/${cat.previous_year_keyword}/${cat.keyword}`}
                                  
                                  />
                                  </div>
                              )
                                 
                              )
                          }

                          </div>
                  ): null
              }
             

              </div>
           
          </div>
        </div>

        {/* <!-- Contact header section --> */}
      </section>
    
        </div>
    )
}