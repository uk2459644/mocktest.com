import Axios from 'axios'
import { useState } from 'react';
import HomeNav from '../../components/NavBar/HomeNavBar';


const fetchPolicies = async () => await Axios.get('https://backend-mock-test-crash.herokuapp.com/terms-list/')
    .then(res => ({
        error: false,
        policylist: res.data,
    }
    )).catch(() => ({
        error: true,
        policylist: null,
    }

    ));

export async function getStaticProps() {


    const data1 = await fetchPolicies();

    //  const data=res.json()

    // console.log(`data from api req is ${data}`)

    return {
        props: {

            policylist: data1,
        },
        revalidate: 600,

    }
}

export default function TermsConditions({ policylist }) {

    return (
        <div>
            <HomeNav />
            <section class="text-gray-700">
                <div class="container px-5 py-24 mx-auto">
                    <div class="text-center mb-20">
                        <h1 class="sm:text-3xl text-2xl uppercase tracking-wider font-medium text-center title-font text-gray-900 mb-4">
                           Terms & Conditions
            </h1>
                        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                            Please read carefully. By using this website ,
                             we assume that you have read our privacy policy and terms & conditions and agree with them.
                             If not you can leave this website .

            </p>
                    </div>
                    <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        <div class="w-full  px-4 py-2">
                            {
                                policylist.policylist.length > 0 ? (
                                    <div>
                                        {
                                            policylist.policylist.map((policy) => {
                                                return (
                                                    <details class="mb-4">
                                                        <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                                            {policy.term_title}
                                                        </summary>

                                                        <span>
                                                           {policy.term_desc}
                                                        </span>
                                                    </details>

                                                )
                                            })
                                        }
                                    </div>
                                ) : null
                            }



                        </div>
                        {/* <div class="w-full lg:w-1/2 px-4 py-2">
                            <details class="mb-4">
                                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                    Can I change the domain you give me?
                               </summary>

                                <span class="px-4 py-2">
                                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                                    minim velit nostrud pariatur culpa magna in aute.
                </span>
                            </details>


                        </div> */}
                    </div>
                </div>
            </section>

        </div>
    )
}