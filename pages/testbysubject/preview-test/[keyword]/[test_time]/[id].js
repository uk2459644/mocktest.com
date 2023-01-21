import Axios from 'axios'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ModalCard from '../../../../../components/Cards/ModalCard';
import PracticeQuestionCard from '../../../../../components/Cards/PracticeQuestionCard';
import AnalysisCard from '../../../../../components/Cards/AnalysisCard';
import VerticalBarChart from '../../../../../components/Charts/vertical-bar-chart';
import PieChart from '../../../../../components/Charts/pie-chart';
import AnalysisFooter from '../../../../../components/Cards/AnalysisFooter';
import AnalysisQuestionCard from '../../../../../components/Cards/AnalysisQuestionCard';
import Countdown from "react-countdown";
import { BACKEND_URL } from '../../../../../constants';



const fetchQuestions = async (params) => await Axios.get(`${BACKEND_URL}/questions-bysubject-test-list/${params.id}/`)
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
//     const res = await fetch('${BACKEND_URL}/rrb-group-d/')
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

  const questions = await fetchQuestions(params);

  // Pass post data to the page via props
  return {
    props: {
      questions,
      test_time: params.test_time,

    }

  }
}


let elem;
export default function QuestionPageRRBGROUPD({ questions, test_time }) {

  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  if (!questions) {

    return <h1>No data</h1>;
  }

  const [qset, setQset] = useState(questions.questions)
  const [qlength, setQlength] = useState(questions.questions.length - 1)
  const [questionNumber, setQuestionNumber] = useState(0)
  const [time_limit, setTimeLimit] = useState(test_time);
  // const [testname,setTestname]=useState(keyword);
  // const [useranswer,setUserAnswer]=useState(new Array(questions.questions.length).fill(''));

  // const [panelOn, setPanelOn] = useState(false);

  const [ontest, setOntest] = useState(false);
  const [analysis_bool, setAnalysis_bool] = useState(false);
  const [analysis_data, setAnalysisData] = useState({});
  const [analysis_answer_data, setAnalysisAnswerData] = useState(null);

  // let elem =document.getElementById('testpage');




  const [answerdata, setAnswerData] = useState(new Array(questions.questions.length).fill(null).map(() => ({
    id: '',
    comp_text: '',
    q_text: '',
    correct_text: '',
    user_text: '',
    correct_ans: 'n',
    user_ans: 'm',
    status: '',
    coorect: false,
    include: false,
    marks: 0,
    answered: false,
  })))

  const submitTest = () => {

    let attempt_array = answerdata.filter(function (el) {
      return el.answered == true && el.include == true;
    });
    let skiped_array = answerdata.filter(function (el) {
      return el.answered == false && el.include == false;
    })
    let correct_array = answerdata.filter(function (el) {
      return el.answered == true && el.include == true &&
        el.coorect == true;
    })
    let wrong_array = answerdata.filter(function (el) {
      return el.answered == true && el.coorect == false
        && el.include == true;
    })

    let total_question = questions.questions.length;
    let attempt_question = attempt_array.length;
    let correct_question = correct_array.length;
    let wrong_question = wrong_array.length;
    let skiped_question = skiped_array.length;

    let correct_marks = correct_array.reduce(function (acc, obj) { return acc + obj.marks }, 0).toFixed(3)
    let wrong_marks = wrong_array.reduce(function (acc, obj) { return acc + obj.marks }, 0).toFixed(3)
    let total_marks = qset.reduce(function (acc, obj) { return acc + obj.correct_mark }, 0).toFixed(3)
    let final_marks = correct_marks - wrong_marks;

    let submit_test_data = {

      total_question: total_question,
      attempt_question: attempt_question,
      correct_question: correct_question,
      wrong_question: wrong_question,
      skiped_question: skiped_question,
      total_marks: total_marks,
      correct_marks: correct_marks,
      wrong_marks: wrong_marks,
      final_marks: final_marks,
    }

    setAnalysis_bool(true);
    setAnalysisData(submit_test_data);
    setAnalysisAnswerData(attempt_array);
    setOntest(false);
    if (!window.screenTop && !window.screenY){
      closeFullscreen();
    }
    
    console.log(`${submit_test_data} and  ${submit_test_data.total_question} attempt ${submit_test_data.attempt_question}
     correct ${submit_test_data.correct_question} wrong_ ${submit_test_data.wrong_question} marks ${submit_test_data.final_marks} correct_marks ${submit_test_data.correct_marks}
      wrong_marks ${submit_test_data.wrong_marks}`)

  }

  //  console.log(`${ answerdata[0]}`);


  useEffect(() => {

    elem = document.getElementById('testpage');


  }, []);

  const openFullscreen = () => {

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }
  const openFullscreenTr = () => {

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

  const nextQ = () => {
    if (questionNumber === questions.questions.length - 1) {

      alert(`You have reached last question.`);
    } else {
      setQuestionNumber(questionNumber + 1);
    }
  }

  const prevQ = () => {
    if (questionNumber === 0) {
      alert(`You have reached last question.`);
    } else {
      setQuestionNumber(questionNumber - 1);
    }
  }



  const userAnswerData = (correct_ans, user_ans, status, user_text) => {

    let newArray = [...answerdata];

    if (correct_ans == user_ans) {
      let marks = qset[questionNumber].correct_mark;
      let comp_text = qset[questionNumber].comprehension;
      let q_text = qset[questionNumber].question;
      let correct_text = qset[questionNumber].correct_text;

      newArray[questionNumber] = {
        id: questionNumber,
        comp_text: comp_text,
        q_text: q_text,
        correct_text: correct_text,
        user_text: user_text,
        correct_ans: correct_ans,
        user_ans: user_ans,
        status: status,
        coorect: true,
        include: true,
        marks: marks,
        answered: true,
      }
      setAnswerData(newArray);


    } else {

      let marks = qset[questionNumber].negative_mark;
      let comp_text = qset[questionNumber].comprehension;
      let q_text = qset[questionNumber].question;
      let correct_text = qset[questionNumber].correct_text;


      newArray[questionNumber] = {
        id: questionNumber,
        comp_text: comp_text,
        q_text: q_text,
        correct_text: correct_text,
        user_text: user_text,
        correct_ans: correct_ans,
        user_ans: user_ans,
        status: status,
        coorect: false,
        include: true,
        marks: marks,
        answered: true,
      }
      setAnswerData(newArray);


    }

    // alert(`some thing clicked  ${useranswer[questionNumber].user_ans}`);

  }

  const markViewLaterData = () => {
    let correct_ans = answerdata[questionNumber].correct_ans;
    let user_ans = answerdata[questionNumber].user_ans;
    let marks = answerdata[questionNumber].marks;
    let correct_st = answerdata[questionNumber].coorect;
    let include_st = answerdata[questionNumber].include;
    let comp_text = qset[questionNumber].comprehension;
    let q_text = qset[questionNumber].question;
    let correct_text = qset[questionNumber].correct_text;
    let user_text = qset[questionNumber].user_text;


    let newArray = [...answerdata];

    newArray[questionNumber] = {
      id: questionNumber,
      comp_text: comp_text,
      q_text: q_text,
      correct_text: correct_text,
      user_text: user_text,
      correct_ans: correct_ans,
      user_ans: user_ans,
      status: 'mv',
      coorect: correct_st,
      include: include_st,
      marks: marks,
      answered: true,
    }
    setAnswerData(newArray);

  }

  const clearOptionData = () => {

    let correct_ans = answerdata[questionNumber].correct_ans;
    let comp_text = qset[questionNumber].comprehension;
    let q_text = qset[questionNumber].question;
    let correct_text = qset[questionNumber].correct_text;

    // let user_ans=useranswer[questionNumber].user_ans;
    // let answered=useranswer[questionNumber].answered;

    let newArray = [...answerdata];

    newArray[questionNumber] = {
      id: questionNumber,
      comp_text: comp_text,
      q_text: q_text,
      correct_text: correct_text,
      user_text: '',
      correct_ans: correct_ans,
      user_ans: '',
      status: 'co',
      coorect: false,
      include: false,
      marks: 0,
      answered: false,
    }

    setAnswerData(newArray);

    // alert(`some thing clicked  ${useranswer[questionNumber].user_ans}`);
  }



  return (
    <div id="testpage" className="bg-white opacity-100">


      {
        qset.length > 0 &&
          questionNumber !==
          qset.length &&
          answerdata.length > 0 ? (
            <div className={` ${ontest && analysis_bool ? 'block' : 'hidden'} `}>


              <PracticeQuestionCard

                test_time={test_time}

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

      <div className={` ${!ontest && !analysis_bool ? 'block' : 'hidden'} `}>
        <ModalCard
          openFullscreen={openFullscreenTr}
        />
      </div>
      <div className={` ${!ontest && analysis_bool ? 'block' : 'hidden'} `}>
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
          link="/testbysubject/subject-index"
        />
        <div>
          <div className="flex flex-row flex-wrap justify-center content-center align-center items-center">
           
            <div className="flex flex-row inline-flex items-center justify-center m-4 px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 ">
              <span className="h-6 flex items-center sm:h-7 p-2 ">
                <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>
              <p>
                Correct Answer
              </p>
            </div>
            <div className="flex flex-row inline-flex items-center justify-center m-4 px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              <span className="h-6 flex items-center sm:h-7 p-2 ">
                <svg className="flex-shrink-0 h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>
              <p>
                Your Answer
              </p>
            </div>

          </div>
          {
            analysis_answer_data !== null ? (
              <div>
                {analysis_answer_data.map((question, index) => {
                  return (
                    <div>
                      <AnalysisQuestionCard
                        key={index}
                        question={question}
                      />
                    </div>
                  )
                })}

              </div>

            ) : null
          }

        </div>
      </div>
    </div>
  )
}

