import Axios from 'axios'

import { useState } from 'react';
import PracticeQuestionCard from '../../../components/Cards/PracticeQuestionCard';


const fetchQuestions = async (params) => await Axios.get(`https://mocktestdjango-production.herokuapp.com/ssc-je-ce/${params.id}/`)
    .then(res => ({
        error: false,
        questions: res.data,
    }
    )).catch(() => ({
        error: true,
        questions: null,
    }

    ));

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://mocktestdjango-production.herokuapp.com/ssc-je-ce/')
    const tests = await res.json()
  
    // Get the paths we want to pre-render based on posts
    const paths = tests.map((post) => ({
      params: { 
      
      id:post.id.toString(),
     
      keyword:post.keyword,
     
  },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }
  
  export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    //const res = await fetch(`https://premenv.herokuapp.com/singleshopdetail/${params.id}`)
    
    // const prods = await fetchData(params)
  
    //const post = await res.json()

    const questions =await fetchQuestions(params);
  
    // Pass post data to the page via props
    return { props: {
        questions,
      
      },
      revalidate:7200,
    
    }
  } 


export default function QuestionPageSSCJECE ({questions}){

    const [qset,setQset] = useState(questions.questions)
    const [questionNumber,setQuestionNumber] = useState(1)
    const [useranswer,setUserAnswer]=useState(new Array(questions.questions.length).fill(''));
  
    const [panelOn, setPanelOn] = useState(false);

    

    const [answerdata, setAnswerData] = useState(new Array(questions.questions.length-1).fill(null).map(()=>({
      id: '',
      correct_ans:'',
      user_ans:'',
      status:'',
    })))

   console.log(`${ answerdata[0]}`);
   
    const nextQ =()=>{
        if( questionNumber === questions.questions.length-1){
          alert(`You have reached last question.`);
        }else{
          setQuestionNumber(questionNumber+1);
        }
      }
    
      const prevQ =()=>{
        if(questionNumber === 0){
          alert(`You have reached last question.`);
        }else{
          setQuestionNumber(questionNumber-1);
        }
      }

      const userAnswer = (correct_ans,user_ans,status) => {
  
        let newArray=[...useranswer];
        
        newArray[questionNumber] ={
          id: questionNumber,
          correct_ans:correct_ans,
          user_ans:user_ans,
          status:status,
        }
    
        setUserAnswer(newArray);
        
       // alert(`some thing clicked  ${useranswer[questionNumber].user_ans}`);
       
      }
    
      const userAnswerData = (correct_ans,user_ans,status) => {
  
        let newArray=[...answerdata];
        
        newArray[questionNumber-1] ={
          id: questionNumber,
          correct_ans:correct_ans,
          user_ans:user_ans,
          status:status,
        }
    
        setAnswerData(newArray);
        
       // alert(`some thing clicked  ${useranswer[questionNumber].user_ans}`);
       
      }
      const markViewLaterData = () => {

        let correct_ans = useranswer[questionNumber].correct_ans;
        let user_ans=useranswer[questionNumber].user_ans;
  
        let newArray=[...answerdata];
        
        newArray[questionNumber-1] ={
          id: questionNumber,
          correct_ans:correct_ans,
          user_ans:user_ans,
          status:'mv',
        }
    
        setAnswerData(newArray);
        
       // alert(`some thing clicked  ${useranswer[questionNumber].user_ans}`);
      }

      const clearOptionData = () => {

        let correct_ans = useranswer[questionNumber].correct_ans;
        let user_ans=useranswer[questionNumber].user_ans;
  
        let newArray=[...answerdata];
        
        newArray[questionNumber-1] ={
          id: questionNumber,
          correct_ans:correct_ans,
          user_ans:'',
          status:'co',
        }
    
        setAnswerData(newArray);
        
       // alert(`some thing clicked  ${useranswer[questionNumber].user_ans}`);
      }


      const markViewLater = () => {

        let correct_ans = useranswer[questionNumber].correct_ans;
        let user_ans=useranswer[questionNumber].user_ans;
  
        let newArray=[...useranswer];
        
        newArray[questionNumber] ={
          id: questionNumber,
          correct_ans:correct_ans,
          user_ans:user_ans,
          status:'mv',
        }
    
        setUserAnswer(newArray);
        
       // alert(`some thing clicked  ${useranswer[questionNumber].user_ans}`);
      }

      const clearOption = () => {

        let correct_ans = useranswer[questionNumber].correct_ans;
        let user_ans=useranswer[questionNumber].user_ans;
  
        let newArray=[...useranswer];
        
        newArray[questionNumber] ={
          id: questionNumber,
          correct_ans:correct_ans,
          user_ans:'',
          status:'co',
        }
    
        setUserAnswer(newArray);
        
       // alert(`some thing clicked  ${useranswer[questionNumber].user_ans}`);
      }

    return(
        <div>
           {
                    qset.length > 0 && 
                    questionNumber !== 
                    qset.length &&
                    useranswer.length > 0 ? (
                      <>
                        <PracticeQuestionCard
                         question={qset[questionNumber]} 
                         questionNumber={questionNumber}
                         answerset={answerdata}

                         userAnswer={userAnswerData}
                         markViewLater={markViewLaterData}
                         clearOption={clearOptionData}
                         nextQ={nextQ}
                         prevQ={prevQ}
                         setQuestionNumber={setQuestionNumber}

                         useranswer={answerdata[questionNumber-1]} 
                         
                         />
                       </>
          
                    ) :
                      null
                  }
              
        
    </div>
    )
}

//  <div >
//             <div >
//                 <div className={`${panelOn ? 'bg-gray-300 bg-opacity-75' : 'bg-white'} absolute   transition-opacity`} aria-hidden="true">


               
//                   <div className="flex px-4 bottom-2 flex max-w-screen  border-t border-gray-200 sm:px-6">
//                         <div >
//                             <button onClick={prevQ}  className="relative inline-flex items-center px-4 py-2 border border-gray-200 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500">
//                                 Previous
//                             </button>
//                             <button onClick={()=>{markViewLater()}}  className="m-4 relative inline-flex items-center px-4 py-2 border border-gray-200 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500">
//                                 Mark For View Later
//                             </button>
//                             <button onClick={nextQ}  className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500">                            
//                                 Save & Next
//                             </button>
                            
//                         </div>
//                     </div>
                   
//                 </div>
                
//                 <section className="absolute h-screen inset-y-0 right-0 pl-10  flex" aria-labelledby="slide-over-heading">
//                     <div className={`${panelOn ? 'w-screen ease-in-out duration-500 opacity-0 opacity-100' : 'w-0 ease-in-out duration-500 opacity-100 opacity-0'} relative  max-w-md`}>
//                         <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
//                             <button onClick={() => setPanelOn(!panelOn)} className="rounded-md text-cyan-500 hover:text-cyan-900 focus:outline-none ">
//                                 <span className="sr-only">Close panel</span>

//                                 <svg class={`${panelOn ? 'hidden' : 'block'} h-8 w-8`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
//                                 </svg> 
//                                 <svg class={`${panelOn ? 'block' : 'hidden'} h-8 w-8`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
//                                 </svg>
//                             </button>
//                         </div>
//                         <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
//                             <div className="px-4 sm:px-6">
//                                 <h2 id="slide-over-heading" className="text-lg font-medium text-gray-900">
//                                     Panel title
//                                 </h2>
//                             </div>
//                             <div className="mt-6 relative flex-1 px-4 sm:px-6">

//                                 <div className="absolute inset-0 px-4 sm:px-6">
//                                     <div className="h-full border-2 border-dashed border-gray-200" aria-hidden="true">
//                                     <div className="inline-block rounded-t-sm h-10 w-10 border-gray-400 border-4 pb-3 pl-3 pr-2 rounded-full align-middle">h</div>
//                                     <div className="inline-block rounded-l-sm h-10 w-10 border-gray-400 border-4 pb-3 pl-3 pr-2 rounded-full align-middle">h</div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
                
//             </div>
//         </div>