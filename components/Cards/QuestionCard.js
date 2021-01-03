import { useState } from "react"

export default function QuestionCard() {

    const[compOn,setCompOn]=useState(false)


    return (
        <div>
            <div  class={ ` flex flex-row flex-wrap pt-3 pl-12 pr-12`}>
                    
                    <button onClick={()=>setCompOn(!compOn)} class={`${compOn ?'bg-cyan-400 border-cyan-400' : 'bg-white border-gray-400'} border-2   h-5 w-5 rounded-full ring-cyan-400`}>
                    <div class={`${compOn ? 'block' : 'hidden'} border-2 bg-cyan-400  h-4 w-4 rounded-full `}></div>

                    </button>
                    <a class="text-light flex-wrap text-sm uppercase pl-2 font-semibold"> comprehension</a>
                    
                </div>
                <hr class="border-gray-400 mt-2" />
            <div className="flex  flex-col md:flex-row ">
                

                <div className={`${compOn ? 'block' : 'hidden'} flex-1 flex-wrap text-md text-justify md:text-md text-gray-700 font-md font-serif pl-12 pr-12 pt-6`}>By default, only responsive variants are generated for text alignment utilities. You can control which variants are generated for the text alignment utilities by modifying the textAlign property in the variants section of your tailwind.config.js file. For example, this config will also generate hover and focus variants:</div>
                <div className="flex-1 flex-wrap text-md text-justify md:text-md text-gray-700 font-light font-serif pl-12 pr-12 pt-6">
                    By default, only responsive variants are generated for text alignment utilities. You can control which variants are generated for the text alignment utilities by modifying the textAlign property in the variants section of your tailwind.config.js file. For example, this config will also generate hover and focus variants:
                    By default, only responsive variants are generated for text alignment utilities. You can control which variants are generated for the text alignment utilities by modifying the textAlign property in the variants section of your tailwind.config.js file. For example, this config will also generate hover and focus variants:
                    <div className="flex-col">
                        <div className="flex items-start pt-4 flex-row">
                            <a className="block h-5 w-5 border-gray-500 border-2 rounded-full"> </a>
                            <p className="ml-2">Option a</p>
                        </div>
                        <div className="flex items-start pt-4">
                            <a className="block h-5 w-5 border-gray-500 border-2 rounded-full"> </a>
                            <p className="ml-2">Option b</p>
                        </div>
                        <div className="flex items-start pt-4">
                            <a className="block h-5 w-5 border-gray-500 border-2 rounded-full"> </a>
                            <p className="ml-2">Option c</p>
                        </div>
                        <div className="flex items-start pt-4">
                            <a className="block h-5 w-5 border-gray-500 border-2 rounded-full"> </a>
                            <p className="ml-2">Option d</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}