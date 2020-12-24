export default function BlogCard() {

    return (
        <div className="max-w-3xl flex flex-col justify-center md:flex-row px-4 py-10 mx-auto">
            <div className="w-full overflow-hidden rounded-xl shadow-xl z-10">
                <img src="https://images.pexels.com/photos/4669109/pexels-photo-4669109.jpeg" alt="" className="w-full h-56 object-cover" />
            </div>
            <div className="bg-white flex flex-col justify-center px-10 py-8 md:pl-20 my-4 -mt-4 mx-4 md:my-auto md:-ml-10 rounded-xl shadow-xl">
                <a href="#">
                    <span className="text-gray-700 text-xs uppercase font-semibold">Politics</span>
                </a>
                <a href="#">
                    <h1 className="text-xl leading-tight pb-2 font-semibold">US Election 2020 : Why all eyes are on Pennsylvania, Goergia & Arizona</h1>
                </a>
                <p className="text-xs text-gray-700 leading-tight">All eyes remain on Arizona, Pennsylvania & Nevada as a win in any of these three states for Joe Biden would bring him closer to winning the race to the White House.</p>
            </div>
        </div>
    )
}