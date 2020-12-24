export default function OurTeam(){

    return(
        <section className="pt-20 pb-48">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center text-center mb-24">
        <div className="w-full lg:w-6/12 px-4">
          <h2 className="text-4xl font-semibold uppercase">Meat Our Team</h2>
          {/* <p className="text-lg leading-relaxed m-4">
            Get the latest training tips and performance 
            information from the Guardian Gym team.
            </p> */}
        </div>
      </div>
      {/* <!-- Trainer Card Wrapper --> */}
      <div className="flex flex-wrap">
        {/* <!-- Card 1 --> */}
        <div className="w-full md:w-4/12 lg:mb-0 mb-12 px-4" data-aos="flip-right">
          <div className="px-6">
            <img alt="..." src="https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" className="shadow-lg rounded max-w-full mx-auto" 
            style={{
                maxWidth:`250px`,
            }}
        // style="max-width: 250px"
             />
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold">Member Name</h5>
              <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">educational qualification / post name</p>
              <div className="mt-6">
                <button className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                  <i className="fab fa-twitter"></i></button
                ><button className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                  <i className="fab fa-facebook-f"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Card 2 --> */}
        <div className="w-full md:w-4/12 lg:mb-0 mb-12 px-4" data-aos="flip-right">
          <div className="px-6">
            <img alt="..." 
            src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
             className="shadow-lg rounded max-w-full mx-auto" 
             style={{
                maxWidth:`250px`,
            }}
        // style="max-width: 250px" 
             />
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold">Member Name</h5>
              <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">educational qualification / post name</p>
              <div className="mt-6">
                <button className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                  <i className="fab fa-twitter"></i></button
                ><button className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                  <i className="fab fa-instagram"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Card 3 --> */}
        <div className="w-full md:w-4/12 lg:mb-0 mb-12 px-4" data-aos="flip-right">
          <div className="px-6">
            <img alt="..." src="https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
            className="shadow-lg rounded max-w-full mx-auto"
            style={{
                maxWidth:`250px`,
            }}
        // style="max-width: 250px"
             />
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold">Member Name</h5>
              <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">educational qualification / post name</p>
              <div className="mt-6">
                <button className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                  <i className="fab fa-twitter"></i></button
                >
                <button className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                <i className="fab fa-twitter"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Contact header section --> */}
  </section>
    )
}