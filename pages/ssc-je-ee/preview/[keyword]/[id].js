import Axios from 'axios'

import { useState,useEffect } from 'react';
import {useRouter} from 'next/router';
import ModalCard from '../../../../components/Cards/ModalCard';
import PracticeQuestionCard from '../../../../components/Cards/PracticeQuestionCard';
import AnalysisCard from '../../../../components/Cards/AnalysisCard';
import VerticalBarChart from '../../../../components/Charts/vertical-bar-chart';
import PieChart from '../../../../components/Charts/pie-chart';
import AnalysisFooter from '../../../../components/Cards/AnalysisFooter';


const fetchQuestions = async (params) => await Axios.get(`https://backend-mock-test-crash.herokuapp.com/ssc-je-ee/${params.id}/`)
    .then(res => ({
        error: false,
        questions: res.data,
    }
    )).catch(() => ({
        error: true,
        questions: null,
    }

    ));

// export async function getStaticPaths() {
//     // Call an external API endpoint to get posts
//     const res = await fetch('https://backend-mock-test-crash.herokuapp.com/ssc-je-ee/')
//     const tests = await res.json()
  
//     // Get the paths we want to pre-render based on posts
//     const paths = tests.map((post) => ({
//       params: { 
      
//       id:post.id.toString(),
     
//       keyword:post.keyword,
     
//   },
//     }))
  
//     // We'll pre-render only these paths at build time.
//     // { fallback: false } means other routes should 404.
//     return { paths, fallback: true }
//   }
  
  export async function getServerSideProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    //const res = await fetch(`https://premenv.herokuapp.com/singleshopdetail/${params.id}`)
    
    // const prods = await fetchData(params)
  
    //const post = await res.json()

    const questions =await fetchQuestions(params);
    
    // Pass post data to the page via props
    return { props: {
        questions,
       
      }
    
    }
  } 


  let elem;
export default function QuestionPageSSCJEEE ({questions})
{

  const router=useRouter();

  if(router.isFallback) {
    return <h1>Loading...</h1>
 }

 if(!questions){

  return <h1>No data</h1>;
 }

  const [qset,setQset] = useState(questions.questions)
  const [qlength,setQlength] = useState(questions.questions.length-1)
  const [questionNumber,setQuestionNumber] = useState(0)
 // const [testname,setTestname]=useState(keyword);
  // const [useranswer,setUserAnswer]=useState(new Array(questions.questions.length).fill(''));

  // const [panelOn, setPanelOn] = useState(false);

  const [ontest,setOntest] = useState(false);
  const [analysis_bool,setAnalysis_bool]= useState(false);
  const [analysis_data,setAnalysisData] = useState({});

 // let elem =document.getElementById('testpage');

  
  

  const [answerdata, setAnswerData] = useState(new Array(questions.questions.length).fill(null).map(()=>({
    id: '',
    correct_ans:'n',
    user_ans:'m',
    status:'',
    coorect:false,
    include:false,
    marks:0,
    answered:false,
  })))

  const submitTest = () =>{

    let attempt_array=answerdata.filter(function(el){
      return el.answered == true && el.include == true ;
    });
    let skiped_array = answerdata.filter(function (el){
       return el.answered == false && el.include == false;
    })
    let correct_array=answerdata.filter(function(el){
      return el.answered == true && el.include==true &&
             el.coorect == true ;
    })
    let wrong_array = answerdata.filter(function (el){
      return el.answered == true && el.coorect == false
       && el.include==true ;
    })

    let total_question=questions.questions.length;
    let attempt_question=attempt_array.length;
    let correct_question=correct_array.length;
    let wrong_question=wrong_array.length;
    let skiped_question=skiped_array.length;

    let correct_marks=correct_array.reduce(function(acc,obj){return acc + obj.marks},0).toFixed(3)
    let wrong_marks=wrong_array.reduce(function(acc,obj){return acc + obj.marks},0).toFixed(3)
    let total_marks=qset.reduce(function(acc,obj){return acc + obj.correct_mark},0).toFixed(3)
    let final_marks=correct_marks-wrong_marks;

    let submit_test_data={

      total_question:total_question,
      attempt_question:attempt_question,
      correct_question:correct_question,
      wrong_question:wrong_question,
      skiped_question:skiped_question,
      total_marks:total_marks,
      correct_marks:correct_marks,
      wrong_marks:wrong_marks,
      final_marks:final_marks,
    }

    setAnalysis_bool(true);
    setAnalysisData(submit_test_data);
    setOntest(false);
    closeFullscreen();
    console.log(`${submit_test_data} and  ${submit_test_data.total_question} attempt ${submit_test_data.attempt_question}
     correct ${submit_test_data.correct_question} wrong_ ${submit_test_data.wrong_question} marks ${submit_test_data.final_marks} correct_marks ${submit_test_data.correct_marks}
      wrong_marks ${submit_test_data.wrong_marks}`)

  }

//  console.log(`${ answerdata[0]}`);


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
    setAnalysis_bool(true);
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
    setOntest(true);
    setAnalysis_bool(true);
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
    setOntest(true);
    setAnalysis_bool(true);
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}
 
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

   
     
    const userAnswerData = (correct_ans,user_ans,status) => {

      let newArray=[...answerdata];

      if(correct_ans == user_ans){
        let marks = qset[questionNumber].correct_mark;

        newArray[questionNumber] ={
          id: questionNumber,
          correct_ans:correct_ans,
          user_ans:user_ans,
          status:status,
          coorect:true,
          include:true,
          marks:marks,
          answered:true,
        }
        setAnswerData(newArray);
        

      }else{

        let marks = qset[questionNumber].negative_mark;

        newArray[questionNumber] ={
          id: questionNumber,
          correct_ans:correct_ans,
          user_ans:user_ans,
          status:status,
          coorect:false,
          include:true,
          marks:marks,
          answered:true,
        }
        setAnswerData(newArray);
        

      }

     // alert(`some thing clicked  ${useranswer[questionNumber].user_ans}`);
     
    }

    const markViewLaterData = () => {
      let correct_ans = answerdata[questionNumber].correct_ans;
      let user_ans = answerdata[questionNumber].user_ans;
      let marks = answerdata[questionNumber].marks;
      let correct_st= answerdata[questionNumber].coorect;
      let include_st = answerdata[questionNumber].include;

      let newArray=[...answerdata];

      newArray[questionNumber] ={
        id: questionNumber,
        correct_ans:correct_ans,
        user_ans:user_ans,
        status:'mv',
        coorect:correct_st,
        include:include_st,
        marks:marks,
        answered:true,
      }
      setAnswerData(newArray);

    }

    const clearOptionData = () => {

      let correct_ans = answerdata[questionNumber].correct_ans;
     // let user_ans=useranswer[questionNumber].user_ans;
     // let answered=useranswer[questionNumber].answered;

      let newArray=[...answerdata];
      
      newArray[questionNumber] ={
        id: questionNumber,
        correct_ans:correct_ans,
        user_ans:'',
        status:'co',
        coorect:false,
        include:false,
        marks:0,
        answered:false,
      }
  
      setAnswerData(newArray);
      
     // alert(`some thing clicked  ${useranswer[questionNumber].user_ans}`);
    }


  return(
      <div id="testpage" className="bg-white opacity-100">
        
         {
                  qset.length > 0 && 
                  questionNumber !== 
                  qset.length &&
                  answerdata.length > 0 ? (
                    <div className={` ${ontest && analysis_bool ? 'block' :'hidden'} `}>
                    
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

                       submitTest={submitTest}

                       useranswer={answerdata[questionNumber]} 
                       
                       />
                     </div>
        
                  ) :
                   null
                }
               
                <div className={` ${!ontest && !analysis_bool ? 'block' :'hidden'} `}>
                  <ModalCard
                  openFullscreen={openFullscreenTr}
                   />
                </div>
                <div className={` ${!ontest && analysis_bool ? 'block' :'hidden'} `}>
                  <AnalysisCard

                  total_question={analysis_data.total_question}
                  attempt_question={analysis_data.attempt_question}
                  correct_question={analysis_data.correct_question}
                  wrong_question={analysis_data.wrong_question}
                  skiped_question={analysis_data.skiped_question}

                  final_marks={analysis_data.final_marks}
                  total_marks={analysis_data.total_marks}
                  
                  />
                  <div className="flex flex-row flex-wrap">
                      <VerticalBarChart
                            total_question={analysis_data.total_question}
                            attempt_question={analysis_data.attempt_question}
                            correct_question={analysis_data.correct_question}
                            wrong_question={analysis_data.wrong_question}
                            skiped_question={analysis_data.skiped_question}                     
                      />
                      <PieChart
                      final_marks={analysis_data.final_marks}
                      total_marks={analysis_data.total_marks}
                      correct_marks={analysis_data.correct_marks}
                      wrong_marks={analysis_data.wrong_marks}
                      />
                      </div>
                      <AnalysisFooter 
                      link="/ssc-je-ee/rrb-ntpc-index"
                       />
                </div>
  </div>
  )
}
