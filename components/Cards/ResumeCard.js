export default function ResumeCard(){

    return(
        <div className="bg-green-400 min-h-screen p-4 flex justify-center items-center">
  <div className="resume bg-white shadow-lg p-8 md:p-16">
    <header>
      <h1 className="flex flex-col md:flex-row md:justify-between md:items-baseline">
        <span className="text-3xl font-medium">Wilson Parson</span>
        <span className="text-xl text-gray-600 font-medium mt-2 md:mt-0">UI/UX Designer &middot; Front-end Developer</span>
      </h1>
    </header>
    <hr className="border-grey-light border-t"/>
    <main className="py-3">
      <section className="bio">
        <h2 className="flex items-center">
          <i className="em em-wave text-lg mr-2"></i>
          <span className="text-2xl font-semibold">Bio</span>
        </h2>
        <p className="text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet mollitia distinctio sed dolore quibusdam est ad, voluptate aspernatur totam molestias alias voluptatem? Officia cum quia expedita dolore adipisci pariatur odio.</p>
      </section>
      <section className="experience">
        <h2 className="flex items-center">
          <i className="em em-computer text-lg mr-2"></i>
          <span className="text-2xl font-semibold">Experience</span>
        </h2>
        <p className="text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quidem quis omnis quisquam dolor facere cum laborum dolores nesciunt magni eius, cumque reprehenderit modi sunt sed molestiae veritatis, atque eos?</p>
      </section>
      <section className="education">
        <h2 className="flex items-center">
          <i className="em em-mortar_board mr-2 text-lg"></i>
          <span className="font-semibold text-2xl">Education</span>
        </h2>
        <p className="text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ab cupiditate accusamus ut veniam ea expedita modi rem sequi exercitationem cum eius tempora repellat provident numquam dolore, reprehenderit adipisci eos.</p>
      </section>
      <aside className="skills bg-gray-200 px-4 py-3 rounded-lg">
        <h2 className="uppercase tracking-widest text-base text-xl text-gray-600 font-semibold">Skills</h2>
        <ul className="fa-ul">
          <li>
            <span className="fa-li">
              <i className="far fa-check-circle"></i>
            </span>
            UI design
          </li>
        </ul>
      </aside>
    </main>
    <hr className="border-grey-light border-t"/>
    <footer className="text-sm leading-loose mt-4 md:mt-8 text-grey-dark">
      <address className="not-italic flex flex-wrap justify-center text-sm text-gray-600">
        <a href="https://github.com/wilsonparson" className="mx-2">Github</a>
        &middot;
        <a href="https://codepen.com/wilsonparson" className="mx-2">CodePen</a>
        &middot;
        <a href="https://twitter.com/wilson_parson" className="mx-2">@wilson_parson</a>
        &middot;
        <a href="mailto:example@mail.com" className="mx-2">example@mail.com</a>
      </address>
      <address>
      </address>
    </footer>
  </div>
</div>
    )
}