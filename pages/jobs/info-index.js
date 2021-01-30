import BlogCard from "../../components/Cards/BlogCard";
import BlogCardNews from "../../components/Cards/BlogCardNews";
import QuintArticleCard from "../../components/Cards/QuintArticleCard";
import Axios from 'axios';
import HomeNav from "../../components/NavBar/HomeNavBar";



const fetchTestList = async () => await Axios.get('https://backend-mock-test-crash.herokuapp.com/jobs-info/')
    .then(res => ({
        error: false,
        testlist: res.data,
    }
    )).catch(() => ({
        error: true,
        testlist: null,
    }

    ));

export async function getStaticProps() {

   // const data = await fetchPrevTestList();
    const data1 = await fetchTestList();

    //  const data=res.json()

    // console.log(`data from api req is ${data}`)

    return {
        props: {
         //   prev_testlist: data,
            testlist: data1,
        },
        revalidate: 21600,

    }
}
export default function JobInfoIndex({testlist}){


    return(
        <div>
            <HomeNav />
            {
                testlist.testlist.length > 0 ?(
                    <div>
                        {
                            testlist.testlist.map((job,index)=>{
                                return(
                                    <div>
                                         <BlogCard 
                                         key={index}
                                         job={job}                                        
                                         />
                                        </div>
                                )
                            })
                        }
                        </div>
                ): null
            }
           
           
        </div>
    )
}