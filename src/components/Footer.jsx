const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
      <h1 className="font-bold text-2xl">Portfolio</h1>
      <div className="flex gap-7">
        <a href="#home" className="hover:text-violet-600 transition-colors">
          Home
        </a>
        <a href="#about" className="hover:text-violet-600 transition-colors">
          About
        </a>
        <a href="#projects" className="hover:text-violet-600 transition-colors">
          Projects
        </a>
      </div>
      <div className="flex gap-3 items-center">
        <a
          href="#"
          className="inline-block transition-transform duration-300 ease-in-out hover:scale-150"
        >
          <i className="ri-github-fill ri-2x"></i>
        </a>
        <a
          href="#"
          className="inline-block transition-transform duration-300 ease-in-out hover:scale-150"
        >
          <i className="ri-linkedin-fill ri-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
