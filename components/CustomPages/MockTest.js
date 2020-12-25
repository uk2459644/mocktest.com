import OverLapingCard from "../Cards/OverlaingCard";

export default function MockTest() {

  return (
    <div>
      <section className="pt-20 pb-48">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold uppercase">Mock Test Categories</h2>
              <p className="text-lg leading-relaxed m-4">
                Choose a category and do as many tests as you can .
            </p>
            </div>
          </div>
          {/* <!-- Trainer Card Wrapper --> */}
          <div className="flex flex-wrap">
            {/* <!-- Card 1 --> */}
            <div className="w-full md:w-4/12 lg:mb-0 mb-12 px-4" data-aos="flip-right">

              <OverLapingCard

              />

            </div>
            {/* <!-- Card 2 --> */}
            <div className="w-full md:w-4/12 lg:mb-0 mb-12 px-4" data-aos="flip-right">

              <OverLapingCard />

            </div>
            {/* <!-- Card 3 --> */}
            <div className="w-full md:w-4/12 lg:mb-0 mb-12 px-4" data-aos="flip-right">

              <OverLapingCard />

            </div>
          </div>
        </div>

        {/* <!-- Contact header section --> */}
      </section>
    </div>
  )
}