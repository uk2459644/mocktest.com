import { useState } from "react"

export default function PracticeQuestionCard({ question, useranswer, userAnswer, answerset,
  markViewLater, clearOption, nextQ, prevQ, setQuestionNumber }) {

  const [compOn, setCompOn] = useState(false);
  const [infoOn, setInfoOn] = useState(false);

  return (
    <div class="flex flex-col flex-wrap h-screen justify-between">
      <header class="pt-3 p-1">
        <div class="flex flex-row flex-wrap  justify-around">
          <div className={`${question.comprehension_show ? 'block' : 'hidden'}`}>
            <button onClick={() => setCompOn(!compOn)} class={` ${compOn ? 'bg-cyan-400 border-cyan-400' : 'bg-white border-cyan-400'}  border-2 h-5 w-5 rounded-full ring-cyan-400 `}>
            </button>
            <a class="text-light   text-sm uppercase pl-2 font-semibold">comprehension</a>
          </div>
          <a class="text-light flex-wrap text-sm uppercase pl-12 font-semibold">time</a>
          <div>
            <button onClick={() => setInfoOn(!infoOn)} class={` ${infoOn ? 'bg-cyan-400 border-cyan-400' : 'bg-white border-cyan-400'}  border-2 h-5 w-5 rounded-full ring-cyan-400 `}>
            </button>
            <a class="text-light   text-sm uppercase pl-2 font-semibold">Info</a>
          </div>
          <button class="no-underline text-white py-1 px-2 font-medium mx-2 bg-cyan-600 hover:bg-cyan-900 rounded">Submit </button>
        </div>
      </header>
      <hr class="border-gray-400 " />
      <main class="mb-auto">
        <div class="flex flex-row  pt-3 ">
          <div class={`${infoOn ? 'hidden md:w-3/4 md:block' : 'w-full'} flex flex-col md:flex-row md:w-3/4 `}>
            {
              question.comprehension_doc ? (
                <div class={` ${compOn ? 'block' : 'hidden'} flex-1 flex-wrap text-md text-justify md:text-md text-gray-700 font-md font-serif pl-12 pr-12 pt-6 `}>
                  comprehensiont doc
                </div>

              ) : (
                  <div class={` ${compOn ? 'block' : 'hidden'} flex-1 flex-wrap text-md text-justify md:text-md text-gray-700 font-md font-serif pl-12 pr-12 pt-6 `}>
                    {question.comprehension}
                  </div>

                )
            }

            <div class="flex-1  flex-wrap text-md text-justify md:text-md text-gray-700 font-md font-serif pl-12 pr-12 pt-6">
              {
                question.question_doc ? (
                  <p>
                    doc file here
                  </p>

                ) : (
                    <p>
                      <h4 className="font-semibold">Q {question.question_number}</h4> {question.question}
                    </p>
                  )
              }
              <div className="flex-col flex-wrap text-md text-justify md:text-md text-gray-700 font-light font-serif ">
                <div className="flex items-start pt-4 flex-row">
                  <button onClick={() => { userAnswer(question.correct_opt, 'a', 'v') }}
                    className={`${useranswer.user_ans == 'a' ? 'bg-cyan-500' : 'border-gray-500'} block h-5 w-5  border-2 rounded-full `}> </button>
                  <p className="ml-2">{question.opt_a}</p>
                </div>
                <div className="flex items-start pt-4">
                  <button onClick={() => { userAnswer(question.correct_opt, 'b', 'v') }} className={`${useranswer.user_ans == 'b' ? 'bg-cyan-500' : 'border-gray-500'} block h-5 w-5  border-2 rounded-full `}> </button>
                  <p className="ml-2">{question.opt_b}</p>
                </div>
                <div className="flex items-start pt-4">
                  <button onClick={() => { userAnswer(question.correct_opt, 'c', 'v') }} className={`${useranswer.user_ans == 'c' ? 'bg-cyan-500' : 'border-gray-500'} block h-5 w-5  border-2 rounded-full `}> </button>
                  <p className="ml-2">{question.opt_c}</p>
                </div>
                <div className="flex items-start pt-4">
                  <button onClick={() => { userAnswer(question.correct_opt, 'd', 'v') }} className={`${useranswer.user_ans == 'd' ? 'bg-cyan-500' : 'border-gray-500'} block h-5 w-5  border-2 rounded-full `}> </button>
                  <p className="ml-2">{question.opt_d}</p>
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
                  <div class="m-2 h-56 overflow-y-scroll flex flex-row flex-wrap text-md text-justify md:text-md text-gray-700 font-light font-serif">

                  {
                    answerset.map((ans,index) =>{
                      return (
                      <div>
                        <div class=" m-1 ">
                          {
                            answerset[index].status == 'mv' ? (
                                <button onClick={()=>{setQuestionNumber(index+1)}} class="bg-indigo-500 text-center text-white block h-10 w-10 border-2 rounded-b-2xl">{index + 1} </button>

                            ):(
                              answerset[index].status == 'v' ? (
                                <button onClick={()=>{setQuestionNumber(index+1)}} class="bg-green-400 text-center text-white block h-10 w-10 border-2 rounded-b-2xl">{index + 1} </button>

                              ) : (
                                answerset[index].status == 'co' ? (
                                  <button onClick={()=>{setQuestionNumber(index+1)}} class="bg-gray-100 text-center text-white block h-10 w-10 border-2 rounded-b-2xl">{index + 1} </button>
  
                                ) :(

                                
                                
                                <button onClick={()=>{setQuestionNumber(index+1)}} class="bg-red-600 text-center text-white block h-10 w-10 border-2 rounded-b-2xl">{index + 1} </button>
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
      <hr class="border-gray-400 mt-0 mb-0" />
      <footer class={` ${infoOn ? 'hidden' : 'block'} flex flex-row   flex-wrap p-1 justify-around `}>
        <button onClick={() => { prevQ(); }} class="no-underline text-gray-900 border-2 py-2 px-2 font-normal mx-0  hover:bg-gray-400 rounded">Previous </button>
        <button onClick={() => { markViewLater(); }} class="no-underline text-white py-0 px-2 font-normal mx-0 bg-indigo-900 hover:bg-indigo-600 rounded">Mark for view later</button>
        <button onClick={() => { clearOption(); }} class="no-underline text-gray-900 border-2 py-2 px-2 font-normal mx-0  hover:bg-gray-400 rounded">Clear option</button>

        <button onClick={() => { nextQ(); }} class="no-underline text-white py-2 px-2 font-normal mx-0 bg-cyan-600 hover:bg-cyan-900 rounded">Save & next </button>
      </footer>
    </div>
  )
}