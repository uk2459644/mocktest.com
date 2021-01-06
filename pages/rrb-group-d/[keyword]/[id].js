import Axios from 'axios'

import { useState,useEffect } from 'react';
import ModalCard from '../../../components/Cards/ModalCard';
import PracticeQuestionCard from '../../../components/Cards/PracticeQuestionCard';


const fetchQuestions = async (params) => await Axios.get(`https://mocktestdjango-production.herokuapp.com/rrb-group-d/${params.id}/`)
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
    const res = await fetch('https://mocktestdjango-production.herokuapp.com/rrb-group-d/')
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


  let elem;

export default function QuestionPageRRBGROUPD ({questions}){

     const [qset,setQset] = useState(questions.questions)
    const [questionNumber,setQuestionNumber] = useState(1)
    const [useranswer,setUserAnswer]=useState(new Array(questions.questions.length).fill(''));
  
    const [panelOn, setPanelOn] = useState(false);

    const [ontest,setOntest] = useState(false);

   // let elem =document.getElementById('testpage');

    
    

    const [answerdata, setAnswerData] = useState(new Array(questions.questions.length-1).fill(null).map(()=>({
      id: '',
      correct_ans:'',
      user_ans:'',
      status:'',
    })))

   console.log(`${ answerdata[0]}`);


   useEffect(()=>{

   elem =document.getElementById('testpage');
   

  },[]);

   const openFullscreen =() =>  {
   
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }
  const openFullscreenTr =() =>  {
   
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
      setOntest(true);
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
      setOntest(true);
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
      setOntest(true);
    }
  }
   
    const nextQ =()=>{
        if( questionNumber === questions.questions.length-1){
          window.scrollTo(0,1);
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
        <div id="testpage" className="bg-white opacity-100">
          
           {
                    qset.length > 0 && 
                    questionNumber !== 
                    qset.length &&
                    useranswer.length > 0 ? (
                      <div className={` ${ontest ? 'block' :'hidden'} `}>
                      
                        <PracticeQuestionCard
                         
                         question={qset[questionNumber]} 
                         questionNumber={questionNumber}
                         answerset={answerdata}

                         openFullscreen={openFullscreen}

                         userAnswer={userAnswerData}
                         markViewLater={markViewLaterData}
                         clearOption={clearOptionData}
                         nextQ={nextQ}
                         prevQ={prevQ}
                         setQuestionNumber={setQuestionNumber}

                         useranswer={answerdata[questionNumber-1]} 
                         
                         />
                       </div>
          
                    ) :
                      null
                  }
                  <div className={` ${ontest ? 'hidden' :'block'} `}>
                    <ModalCard
                    openFullscreen={openFullscreenTr}
                     />
                  </div>
              
        
    </div>
    )
}

