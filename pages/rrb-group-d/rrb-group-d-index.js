import Axios from 'axios'
import { useState } from 'react';
import HomeNav from '../../components/NavBar/HomeNavBar';
import Link from 'next/link'

const fetchPrevTestList = async () => await Axios.get('https://mocktestdjango-production.herokuapp.com/previous-year-rrb-group-d/')
    .then(res => ({
        error: false,
        prev_testlist: res.data,
    }
    )).catch(() => ({
        error: true,
        prev_testlist: null,
    }

    ));

const fetchTestList = async () => await Axios.get('https://mocktestdjango-production.herokuapp.com/rrb-group-d/')
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

    const data = await fetchPrevTestList();
    const data1 = await fetchTestList();

    //  const data=res.json()

    // console.log(`data from api req is ${data}`)

    return {
        props: {
            prev_testlist: data,
            testlist: data1,
        },
        revalidate: 7200,

    }
}

export default function RRBGROUPDIndex({ prev_testlist, testlist }) {
    const [latTest, setLetTest] = useState(true);
    const [prevTest, setPrevTest] = useState(false);
    return (
        <div>
            <HomeNav />
            <section >
                <div className="container mx-auto py-4">

                    <nav className="flex">
                        <button onClick={() => {
                            setLetTest(true)
                            setPrevTest(false)
                        }} className={` no-underline text-white py-2 px-2 font-medium mr-2 ml-4 bg-cyan-600 hover:bg-cyan-900`} >
                            Latest tests
                        </button>
                        <button onClick={() => {
                            setLetTest(false)
                            setPrevTest(true)
                        }} className={`no-underline text-white py-2 px-2 font-medium mx-2 bg-gray-900 hover:bg-gray-600 `} >
                            Previous year tests
                        </button>

                    </nav>
                </div>
            </section>
            <div>
                <div className="flex flex-col rounded-md m-4 p-4   ">
                    <div className={`${latTest ? 'block' : 'hidden'} flex-1  justify-items-center  `}>
                        <h4 className="text-center font-bold uppercase tracking-wider ">Latest test series</h4>

                        {
                            testlist.testlist.length > 0 ? (

                                <div>
                                    {
                                        testlist.testlist.map(test => (
                                            <div>
                                                <span class="flex shadow-md mb-5 text-xs m-4">
                                                    <Link href={`/rrb-group-d/${test.keyword}/${test.id}`}>
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
                    <div className={`${prevTest ? 'block' : 'hidden'} flex-1 justify-items-center `}>
                        <h4 className="text-center font-bold uppercase tracking-wider ">Previous year tests</h4>
                        {
                            prev_testlist.prev_testlist.length > 0 ? (

                                <div>
                                    {
                                        prev_testlist.prev_testlist.map(test => (
                                            <div>
                                                <span class="flex shadow-md mb-5 text-xs m-4">
                                                    <Link href={`/rrb-group-d/${test.keyword}/${test.id}`}>
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