import DataImage from "./data";

function App() {
  return (
    <>
      {/* <!-- Hero --> */}
      <div className="hero grid md:grid-cols-2 item-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"
            />
            <q>Code Calm. Build Smart</q>
          </div>
          <h1 className="text-5xl/tight font-black mb-6">
            Hi, I'm Andika Adha.
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            I have a strong interest in programming, particularly in backend
            development, with a focus on building systems, databases, and REST
            APIs for web applications. I have been developing this interest over
            the past three years.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="#"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#"
              className="bg-zinc-800 p-4 rounded-2xl hover:bg-zinc-700"
            >
              My Projects <i class="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-125 md:ml-auto"
        />
      </div>
      {/* <!-- End Hero --> */}

      {/* <!-- About --> */}
      <div className="about mt-32 py-10">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto rounded-lg p-7 bg-zinc-800">
          <img
            src={DataImage.HeroImage}
            alt="Image"
            className="w-12 rounded-md sm:hidden mb-10"
          />
          <p className="text-base/loose mb-10">
            Hi, I’m Andika Zulprisa Adha, a Backend Engineer focused on building
            reliable backend systems and APIs for web applications. I believe
            that a strong and well-structured backend is the foundation of a
            great digital product. With a strong willingness to keep learning, I
            continuously strive to improve the quality of the solutions I build.
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt="image"
              className="w-12 rounded-md sm:block hidden"
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  10<span className="text-violet-500">+</span>
                </h1>
                <p>Projects Completed</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  2<span className="text-violet-500">+</span>
                </h1>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
