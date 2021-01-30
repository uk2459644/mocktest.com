import Axios from 'axios';
import {useRouter} from 'next/router';
import { useState,useEffect } from 'react';
import HomeNav from '../../../components/NavBar/HomeNavBar';

const fetchQuestions = async (params) => await Axios.get(`https://backend-mock-test-crash.herokuapp.com/jobs-points-list/${params.id}/`)
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
const res = await fetch('https://backend-mock-test-crash.herokuapp.com/jobs-info/')
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
return { paths, fallback: true }
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
  revalidate:21600,

}
} 

export default function JobsInfoPoints ({questions}){

    const router=useRouter();

    if(router.isFallback) {
      return <h1>Loading...</h1>
   }
  
   if(!questions){
  
    return <h1>No data</h1>;
   }

   const [points,setPoints] = useState(questions.questions)

    return (
        <div>
             <HomeNav />
            {
                points.length > 0 ? (
                    <div>
                        some data are presents
                        </div>

                ): null
            }
            
        </div>
    )
}