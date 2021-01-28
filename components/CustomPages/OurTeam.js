import Image from 'next/image'

export default function OurTeam(){

    return(
        <section className="pt-20 pb-48">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center text-center mb-24">
        <div className="w-full lg:w-6/12 px-4">
          <h2 className="text-4xl font-semibold uppercase">Meet Our Team</h2>
          {/* <p className="text-lg leading-relaxed m-4">
            Get the latest training tips and performance 
            information from the Guardian Gym team.
            </p> */}
        </div>
      </div>
      {/* <!-- Trainer Card Wrapper --> */}
      <div className="flex flex-wrap">
        {/* <!-- Card 1 --> */}
        <div className="w-full md:w-4/12 lg:mb-0 mb-12 px-16" data-aos="flip-right">
          <div className="px-6">
            <Image 
            src="/up_mock_img1.jpeg" 
            alt="team photo 1"
            className="shadow-lg rounded max-w-full mx-auto"
            width={250}
            height={350}
            />
            {/* <img alt="..." 
            src="https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" 
            className="shadow-lg rounded max-w-full mx-auto" 
            style={{
                maxWidth:`250px`,
            }}
        // style="max-width: 250px"
             /> */}
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold">Upendra Kumar</h5>
              <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">B. Tech. (expected-2022) / ceo , founder</p>
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
        <div className="w-full md:w-4/12 lg:mb-0 mb-12 px-16" data-aos="flip-right">
          <div className="px-6">
          <Image 
            src="/amit_mock_img2.jpeg" 
            alt="team photo 1"
            className="shadow-lg rounded max-w-full mx-auto"
            width={250}
            height={350}
            />
            {/* <img alt="..." 
            src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
             className="shadow-lg rounded max-w-full mx-auto" 
             style={{
                maxWidth:`250px`,
            }}
        // style="max-width: 250px" 
             /> */}
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold">Amit Kumar</h5>
              <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">B. Tech. / M.D.</p>
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
        <div className="w-full md:w-4/12 lg:mb-0 mb-12 px-16" data-aos="flip-right">
          <div className="px-6">
          <Image 
            src="/shashi_img_mock1.jpg" 
            alt="team photo 1"
            className="shadow-lg rounded max-w-full mx-auto"
            width={250}
            height={350}
            />
            {/* <img alt="..." 
            src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
             className="shadow-lg rounded max-w-full mx-auto" 
             style={{
                maxWidth:`250px`,
            }}
        // style="max-width: 250px" 
             /> */}
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold">Shashi Kumar</h5>
              <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">B. Tech. / B.D.E.</p>
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
        <div className="w-full md:w-4/12 lg:mb-0 mb-12 px-16 md:px-16" data-aos="flip-right">
          <div className="px-6">
          <Image 
            src="/prem_mock_image1.jpeg" 
            alt="team photo 1"
            className="shadow-lg rounded max-w-full mx-auto "
            width={250}
            height={350}
            />
            {/* <img alt="..." src="https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
            className="shadow-lg rounded max-w-full mx-auto"
            style={{
                maxWidth:`250px`,
            }}
        // style="max-width: 250px"
             /> */}
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold">Prem Kumar</h5>
              <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">Graduation (Account Honourss.) / H.R. & Sales</p>
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
        <div className="w-full md:w-4/12 lg:mb-0 mb-12 px-16 md:px-16" data-aos="flip-right">
          <div className="px-6">
          <Image 
            src="/vikash_mock1.jpeg" 
            alt="team photo 1"
            className="shadow-lg rounded max-w-full mx-auto "
            width={250}
            height={350}
            />
            {/* <img alt="..." src="https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
            className="shadow-lg rounded max-w-full mx-auto"
            style={{
                maxWidth:`250px`,
            }}
        // style="max-width: 250px"
             /> */}
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold">Vikash Kumar</h5>
              <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">Graduation  / H.R. & Sales</p>
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