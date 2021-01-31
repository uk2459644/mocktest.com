export default function BlogCard({job,path}) {


    return (
        <div className="max-w-3xl flex flex-col justify-center md:flex-row px-4 py-10 mx-auto">
            <div className="w-full overflow-hidden rounded-xl shadow-xl z-10">
                <img src={job.image} alt="" className="w-full h-56 object-cover" />
            </div>
            <div className="bg-white flex flex-col justify-center px-10 py-8 md:pl-20 my-4 -mt-4 mx-4 md:my-auto md:-ml-10 rounded-xl shadow-xl">
                <a href="#">
                    <span className="text-gray-700 text-xs uppercase font-semibold">{job.cat_text}</span>
                </a>
                <a href={`${path}/${job.keyword}/${job.id}`}>
                    <h1 className="text-xl leading-tight pb-2 font-semibold">{job.title}</h1>
                </a>
                <p className="text-xs text-gray-700 leading-tight">{job.short_description}</p>
            </div>
        </div>
    )
}