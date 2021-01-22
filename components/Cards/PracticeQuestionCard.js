import { useEffect, useState } from "react"
import Image from 'next/image'

export default function PracticeQuestionCard({ question, useranswer, userAnswer, answerset,
  markViewLater,openFullscreen, clearOption, nextQ, prevQ, setQuestionNumber,submitTest }) {

  const [compOn, setCompOn] = useState(true);
  const [infoOn, setInfoOn] = useState(false);

 

  

 
  return (
    <div class="">
      <header class="pt-3 p-1 ">
        <div class="flex  flex-row flex-wrap  justify-around">
          
          <button onClick={()=>{submitTest()}} class="no-underline text-white py-1  px-2 font-medium  bg-cyan-600 hover:bg-cyan-900 rounded">Submit </button>
          <a class="text-light flex-wrap text-sm uppercase pl-12 font-semibold">time</a>
          <div>
            <button onClick={() => setInfoOn(!infoOn)} class={` ${infoOn ? 'bg-cyan-400 border-cyan-400' : 'bg-white border-cyan-400'}  border-2 h-5 w-5 rounded-full ring-cyan-400 `}>
            </button>
            <a class="text-light   text-sm uppercase pl-2 font-semibold">Info</a>
          </div>
          <button onClick={()=>{
            openFullscreen();
          }} >
          <svg className="w-6 h-6 text-cyan-600" fill="none" viewBox="0 0 20 20" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"  />
          </svg>
          {/* <svg className="w-6 h-6 text-cyan-600" fill="none" viewBox="0 0 20 20" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path strokeWidth="1" d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path strokeWidth="1" d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg> */}

          </button>
          
         
        </div>
      </header>
      <hr class="border-gray-400 " />
      <main class="mb-auto ">
        <div class="flex flex-row  pt-3 ">
          <div class={`${infoOn ? 'hidden md:w-3/4 md:block' : 'w-full'} flex flex-col md:flex-row md:w-3/4 overflow-y-auto h-72 md:h-96`}>
            
            {
              question.comprehension_show ? (
                <div>
                   {
              question.comprehension_doc ? (
                <div class={` ${compOn ? 'block' : 'hidden'} flex-1  text-md  md:text-md text-gray-700 font-md font-serif pl-12 pr-12 pt-6 `}>
                
                  {
                       question.comprehension.split("@@").map(q=>{
                         return (
                           <div>
                             {
                               q.includes('https://firebasestorage') ? (
                                <Image 
                                src={q}
                                alt="comprehenionn photo"
                                className="w-full h-auto overflow-y-auto"
                                width={350}
                                height={350}
                               />

                               ):(
                                 <p>
                                   {q}
                                 </p>
                               )
                             }
                             </div>
                         )
                       })
                       }
                 {/* <img
                 src={question.comprehension}
                 alt="comprehenionn photo"
                  /> */}
                </div>

              ) : (
                  <div class={` ${compOn ? 'block' : 'hidden'} flex-1  text-md  md:text-md text-gray-700 font-md font-serif pl-12 pr-12 pt-6 `}>
                   
                    {
                       question.comprehension.split("@@").map(q=>{
                         return (
                           <p>
                             {q}
                           </p>
                         )
                       })
                       }
                  </div>

                )
            }
                </div>
              ):null
            }
           
           
            <div class="flex-1  flex-wrap text-md  md:text-md text-gray-700 font-md font-serif pl-12 pr-12 pt-6">
              {
                question.question_doc ? (
                  <div>
                     <h4 className="font-semibold">Q {question.question_number}</h4>
                     {
                       question.question.split("@@").map(q=>{
                         return (
                           <div>
                             {
                             q.includes('https://firebasestorage') ? (
                              <Image 
                              src={q}
                              alt="comprehenionn photo"
                              className="w-full h-auto overflow-y-auto"
                              width={350}
                              height={350}
                             />

                             ):(
                               <p>
                                 {q}
                                 </p>
                             )
                             }
                           </div>
                         )
                       })
                       }
                 
                 </div>

                ) : (
                    <p>
                      <h4 className="font-semibold">Q {question.question_number}</h4> 
                      {
                       question.question.split("@@").map(q=>{
                         return (
                           <p>
                             {q}
                           </p>
                         )
                       })
                       }
                    </p>
                  )
              }
              <div className="flex-col flex-wrap text-md  md:text-md text-gray-700 font-light font-serif ">
                <div className="flex items-start pt-4 flex-row">
                  <button onClick={() => { userAnswer(question.correct_opt, 'a', 'v') }}
                    className={`${useranswer.user_ans == 'a' ? 'bg-green-500 border-white' : 'border-gray-500'} block h-5 w-5  border-2 rounded-full `}> </button>
                 {
                   question.opt_a.includes('https://firebasestorage') ? (
                     <Image
                     src={question.opt_a}
                     width={100}
                     height={50} />
                   ) :
                   (
                    <p className="ml-2">{question.opt_a}</p>
                   )
                 }
                 
                </div>
                <div className="flex items-start pt-4">
                  <button onClick={() => { userAnswer(question.correct_opt, 'b', 'v') }} className={`${useranswer.user_ans == 'b' ? 'bg-green-500 border-white' : 'border-gray-500'} block h-5 w-5  border-2 rounded-full `}> </button>
                  {
                   question.opt_b.includes('@@@') ? (
                     <Image
                     src={question.opt_b}
                     width={100}
                     height={50} />
                   ) :
                   (
                    <p className="ml-2">{question.opt_b}</p>
                   )
                 }
                 
                </div>
                <div className="flex items-start pt-4">
                  <button onClick={() => { userAnswer(question.correct_opt, 'c', 'v') }} className={`${useranswer.user_ans == 'c' ? 'bg-green-500 border-white' : 'border-gray-500'} block h-5 w-5  border-2 rounded-full `}> </button>
                  {
                   question.opt_c.includes('https://firebasestorage') ? (
                     <Image
                     src={question.opt_c}
                     width={100}
                     height={50} />
                   ) :
                   (
                    <p className="ml-2">{question.opt_c}</p>
                   )
                 }
                 
                </div>
                <div className="flex items-start pt-4">
                  <button onClick={() => { userAnswer(question.correct_opt, 'd', 'v') }} className={`${useranswer.user_ans == 'd' ? 'bg-green-500 border-white' : 'border-gray-500'} block h-5 w-5  border-2 rounded-full `}> </button>
                  {
                   question.opt_d.includes('https://firebasestorage') ? (
                     <Image
                     src={question.opt_d}
                     width={100}
                     height={50} />
                   ) :
                   (
                    <p className="ml-2">{question.opt_d}</p>
                   )
                 }
                  
                </div>
              </div>

            </div>
          </div>
          <div class={` ${infoOn ? 'w-full  md:w-1/3 ' : 'hidden'}   border-l-2 `} >
            <div class="m-2  flex-col flex-wrap text-md text-justify md:text-md text-gray-700 font-light font-serif">
              <div class="flex items-start pt-2 flex-row">
                <button class="bg-green-400 text-center text-white block h-10 w-10 border-2 rounded-r-2xl"></button>
                <p className="ml-2"> Answered</p>
              </div>
              <div class="flex items-start pt-2 flex-row ">
                <button class="bg-indigo-500 text-center text-white block h-10 w-10 border-2 rounded-r-2xl"></button>
                <p className="ml-2 text-base"> Marked for view later</p>
              </div>
              <div class="flex items-start pt-2 flex-row ">
                <button class="bg-red-600 text-center text-gray-800 block h-10 w-10 border-2 rounded-r-2xl"></button>
                <p className="ml-2 text-base">Not visited / answered</p>
              </div>
              <div class="flex items-start pt-2 flex-row ">
                <button class="bg-gray-100 text-center text-gray-800 block h-10 w-10 border-2 rounded-r-2xl"></button>
                <p className="ml-2 text-base">Option cleared</p>
              </div>
            </div>
            <hr class="border-gray-400 border-1" />


            {
              answerset.length > 0 ? (
                <div>
                  <div class="m-2 h-56 overflow-y-auto flex flex-row flex-wrap text-md text-justify md:text-md text-gray-700 font-light font-serif">

                  {
                    answerset.map((ans,index) =>{
                      return (
                      <div>
                        <div class=" m-1 ">
                          {
                            answerset[index].status == 'mv' ? (
                                <button onClick={()=>{setQuestionNumber(index)}} class="bg-indigo-500 text-center text-white block h-10 w-10 border-2 rounded-b-2xl">{index + 1} </button>

                            ):(
                              answerset[index].status == 'v' ? (
                                <button onClick={()=>{setQuestionNumber(index)}} class="bg-green-400 text-center text-white block h-10 w-10 border-2 rounded-b-2xl">{index + 1} </button>

                              ) : (
                                answerset[index].status == 'co' ? (
                                  <button onClick={()=>{setQuestionNumber(index)}} class="bg-gray-100 text-center text-gray-600 block h-10 w-10 border-2 rounded-b-2xl">{index + 1} </button>
  
                                ) :(

                                
                                
                                <button onClick={()=>{setQuestionNumber(index)}} class="bg-red-600 text-center text-white block h-10 w-10 border-2 rounded-b-2xl">{index + 1} </button>
                                )
                              )
                            )
                          }
                          
                        </div>
                        {/* <div class=" m-1 ">
                          <button class="bg-indigo-500 text-center text-white block h-10 w-10 border-2 rounded-b-2xl"></button>

                        </div>
                        <div class=" m-1 ">
                          <button class="border-gray-500 text-center text-gray-800 block h-10 w-10 border-2 rounded-b-2xl"></button>

                        </div> */}
                      </div>


                    )})
                  }
                  </div>
                </div>

              ) : (
                  <div>

                  </div>
                )
            }



          </div>
        </div>

      </main>
      <hr class="border-gray-400 mt-0 mb-0 " />
      <footer class={` ${infoOn ? 'hidden  md:grid ' : 'block  '}  grid grid-cols-3 grid-row-2 gap-2 md:grid-cols-5   md:grid-rows-1 md:gap-6 p-2 md:p-2 `}>
        <button onClick={() => { prevQ(); }} class="no-underline text-gray-900 border-2 py-2 px-2 font-normal mx-0  hover:bg-gray-400 rounded">Previous </button>
        <button onClick={() => { markViewLater(); }} class="no-underline text-white py-0 px-2 font-normal mx-0 bg-indigo-900 hover:bg-indigo-600 rounded">Mark for view later</button>
        <button onClick={() => { clearOption(); }} class="no-underline text-gray-900 border-2 py-2 px-2 font-normal mx-0  hover:bg-gray-400 rounded">Clear option</button>
        <button onClick={() => { nextQ(); }} class="no-underline text-gray-900 border-2 py-2 px-2 font-normal mx-0  hover:bg-gray-400 rounded">Skip</button>

        <button onClick={() => { nextQ(); }} class="no-underline text-white py-2 px-2 font-normal mx-0 bg-cyan-600 hover:bg-cyan-900 rounded ">Save & next </button>
      </footer>
    </div>
  )
}