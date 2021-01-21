import HomeNav from "../../../../components/NavBar/HomeNavBar";
import Link from 'next/link';
import { useState } from 'react';
import Axios from 'axios'



const fetchPrevTestList = async (params) => await Axios.get(`https://backend-mock-test-crash.herokuapp.com/${params.preview_keyword}/`)
    .then(res => ({
        error: false,
        prev_testlist: res.data,
    }
    )).catch(() => ({
        error: true,
        prev_testlist: null,
    }

    ));

const fetchTestList = async (params) => await Axios.get(`https://backend-mock-test-crash.herokuapp.com/${params.keyword}/`)
    .then(res => ({
        error: false,
        testlist: res.data,
    }
    )).catch(() => ({
        error: true,
        testlist: null,
    }

    ));

    export async function getServerSideProps({ params }) {

        const data = await fetchPrevTestList(params);
        const data1 = await fetchTestList(params);
    
        //  const data=res.json()
    
        // console.log(`data from api req is ${data}`)
    
        return {
            props: {
                prev_testlist: data,
                testlist: data1,
                keyword:params.keyword,
            }
    
        }
    }
    

export default function StaticTestList({ prev_testlist, testlist ,keyword}){
    const [latTest, setLetTest] = useState(true);
    const [prevTest, setPrevTest] = useState(false);

    const [lethindi,setLethindi] = useState(false);
    const [leteng,setLeteng] = useState(false);

    const [prevhindi,setPrevhindi] = useState(false);
    const [preveng,setPreveng] = useState(false);


    return (
        <div>
            <HomeNav />
            <section >
                <div className="container mx-auto py-4">
                    <nav className="flex">
                        <button onClick={() => {
                            setLetTest(true)
                            setPrevTest(false)
                        }} className={`${latTest ? 'bg-cyan-600 text-yellow-400 ' : 'bg-cyan-900 text-white'} no-underline py-2 px-2 font-medium mr-2 ml-4 rounded-sm  hover:bg-cyan-900`} >
                            Latest tests
                        </button>
                        <button onClick={() => {
                            setLetTest(false)
                            setPrevTest(true)
                        }} className={`${prevTest ? 'bg-gray-900 text-yellow-400 ' : 'bg-gray-600 text-white'} no-underline py-2 px-2 font-medium mx-2 rounded-sm  hover:bg-gray-600 `} >
                            Previous year tests
                        </button>
                    </nav>
                </div>
            </section>
            <section className={`${latTest ? 'block' : 'hidden'}`}>
                <div class="container mx-auto ">
                    <nav class="flex">
                        <button onClick={()=>{setLeteng(true); setLethindi(false)}} class={` ${leteng ? 'text-yellow-400' : 'text-white'} no-underline py-2 px-2 font-medium mr-2 ml-4 rounded-sm bg-cyan-600 hover:bg-cyan-900`}>ENGLISH</button>
                        <button onClick={()=>{setLethindi(true); setLeteng(false)}} class={` ${lethindi ? 'text-yellow-400' : 'text-white'} no-underline py-2 px-2 font-medium mr-2 ml-2 rounded-sm bg-cyan-600 hover:bg-cyan-900 `}>HINDI</button>
                    </nav>
                </div>
            </section>
            <section className={`${prevTest ? 'block' : 'hidden'}`}>
                <div class="container mx-auto ">
                    <nav class="flex">
                        <button onClick={()=>{setPreveng(true); setPrevhindi(false)}} class={` ${preveng ? 'text-yellow-400' : 'text-white'} no-underline  py-2 px-2 font-medium mr-2 ml-4 rounded-sm bg-gray-900 hover:bg-gray-600 `}>ENGLISH</button>
                        <button onClick={()=>{setPreveng(false); setPrevhindi(true)}} class={` ${prevhindi ? 'text-yellow-400' : 'text-white'} no-underline py-2 px-2 font-medium mr-2 ml-2 rounded-sm bg-gray-900 hover:bg-gray-600 `}>HINDI</button>
                    </nav>
                </div>
            </section>
            <div className={`${latTest ? 'block' : 'hidden' }`}>
                <div className="flex flex-col rounded-md m-4 p-4   ">
                    <div className={`${leteng ? 'block' : 'hidden'} flex-1  justify-items-center  `}>
                        <h4 className="text-center font-bold uppercase tracking-wider ">English tests series</h4>
                        {
                            testlist.testlist.length > 0 ? (

                                <div>
                                    {
                                        testlist.testlist.map(test => (
                                            <div>
                                                <span class="flex shadow-md mb-5 text-xs m-4">
                                                    <Link href={`/dynamic/preview-test/${keyword}/${test.id}`}>
                                                        <button class="bg-indigo-500 uppercase font-semibold w-44 text-center text-gray-200 p-3 px-5 rounded-l">Take Test</button>
                                                    </Link>

                                                    <span class="uppercase font-semibold field text-sm text-gray-600 p-2 px-3 rounded-r w-full">{test.test_name}</span>
                                                </span>

                                            </div>)
                                        )
                                    }


                                </div>


                            ) : (
                                    <h4 className="text-center font-bold uppercase tracking-wider ">Sorry ! no test record found.</h4>
                                )

                        }
                    </div>
                    <div className={`${lethindi ? 'block' : 'hidden'} flex-1 justify-items-center `}>
                        <h4 className="text-center font-bold uppercase tracking-wider ">Hindi tests series</h4>
                        {
                            prev_testlist.prev_testlist.length > 0 ? (

                                <div>
                                    {
                                        prev_testlist.prev_testlist.map(test => (
                                            <div>
                                                <span class="flex shadow-md mb-5 text-xs m-4">
                                                    <Link href={`/dynamic/preview-test/${keyword}/${test.id}`}>
                                                        <button class="bg-gray-900 uppercase font-semibold w-44 text-center text-gray-200 p-3 px-5 rounded-l">Take Test</button>
                                                    </Link>

                                                    <span class="uppercase font-semibold field text-sm text-gray-600 p-2 px-3 rounded-r w-full">{test.test_name}</span>
                                                </span>
                                            </div>)
                                        )
                                    }


                                </div>


                            ) : (
                                    <h4 className="text-center font-bold uppercase tracking-wider ">Sorry ! no test record found.</h4>
                                )

                        }
                    </div>
                </div>
            </div>



        </div>
    )
}