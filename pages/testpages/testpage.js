import { useState } from "react"
import QuestionCard from "../../components/Cards/QuestionCard"

export default function TestPage() {

    const [panelOn, setPanelOn] = useState(false)

    return (
        <div>
            <div >
                <div >
                    <div className={`${panelOn ? 'bg-gray-300 bg-opacity-75' : 'bg-white'} absolute inset-0  transition-opacity`} aria-hidden="true">


                        <QuestionCard />
                        <div className=" object-none object-bottom md:object-bottom sm:object-bottom px-4 py-3 bottom-2 flex items-center justify-between border-t border-gray-200 sm:px-6">
                            <div className="flex-1 flex justify-between ">
                                <button href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-200 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500">
                                    Previous
                                </button>
                                <button href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-200 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500">
                                    Mark For View Later
                                </button>
                                
                                <button href="#" className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500">
                                    Save & Next
                                </button>
                            </div>
                        </div>
                    </div>
                    <section className="absolute h-screen inset-y-0 right-0 pl-10 max-w-full flex" aria-labelledby="slide-over-heading">
                        <div className={`${panelOn ? 'w-screen ease-in-out duration-500 opacity-0 opacity-100' : 'w-0 ease-in-out duration-500 opacity-100 opacity-0'} relative  max-w-md`}>
                            <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                                <button onClick={() => setPanelOn(!panelOn)} className="rounded-md text-cyan-500 hover:text-cyan-900 focus:outline-none ">
                                    <span className="sr-only">Close panel</span>

                                    <svg class={`${panelOn ? 'hidden' : 'block'} h-8 w-8`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                                    </svg> 
                                    <svg class={`${panelOn ? 'block' : 'hidden'} h-8 w-8`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                            <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                                <div className="px-4 sm:px-6">
                                    <h2 id="slide-over-heading" className="text-lg font-medium text-gray-900">
                                        Panel title
                                    </h2>
                                </div>
                                <div className="mt-6 relative flex-1 px-4 sm:px-6">

                                    <div className="absolute inset-0 px-4 sm:px-6">
                                        <div className="h-full border-2 border-dashed border-gray-200" aria-hidden="true">
                                        <div className="inline-block rounded-t-sm h-10 w-10 border-gray-400 border-4 pb-3 pl-3 pr-2 rounded-full align-middle">h</div>
                                        <div className="inline-block rounded-l-sm h-10 w-10 border-gray-400 border-4 pb-3 pl-3 pr-2 rounded-full align-middle">h</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}