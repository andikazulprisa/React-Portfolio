import DataImage from "./data";
import { listTools, listProyek } from "./data";

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
              loading="lazy"
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
          loading="lazy"
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
            loading="lazy"
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
              loading="lazy"
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

        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4">Tools</h1>
          <p className="text-base/loose xl:w-2/5 lg:w-2/4 md:w-2/3 w-full sm:w-3/4 opacity-50">
            These are the tools I usually use for development projects.
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group key={tool.id}>">
                <img
                  src={tool.gambar}
                  alt="Tolls Image"
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <!-- End About --> */}

      {/* <!-- Projects --> */}
      <div className="project mt-32 py-10">
        <h1 className="text-center text-4xl font-bold mb-2">Projects</h1>
        <p className="text-base/loose opacity-50 text-center">
          Here are some projects that I have worked on.
        </p>
        <div className="project-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md">
              <img src={proyek.gambar} alt="Proyek Image" loading="lazy" />
              <div>
                <h1 className="font-bold text-2xl my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a
                    href="#"
                    className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600"
                  >
                    See Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <!-- End Projects --> */}

      {/* <!-- Contact --> */}
      <div className="contact mt-32 p-10">
        <h1 className="text-4xl mb-2 font-bold text-center">Contact</h1>
        <p className="text-base/loose opacity-50 text-center mb-10">
          Feel free to reach out for collaborations or just a friendly hello!
        </p>
        <form
          action="https://formsubmit.co/clipnime27@gmail.com"
          method="POST"
          className="bg-zinc-800 p-10 w-fit mx-auto rounded-md"
          autoComplete="off"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="border border-zinc-500 rounded-md p-2"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="border border-zinc-500 rounded-md p-2"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-semibold">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                cols="45"
                rows="7"
                placeholder="Your Message"
                className="border border-zinc-500 rounded-md p-2"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* <!-- End Contact --> */}
    </>
  );
}

export default App;
