export default function Banner() {
  return (
    <div className="relative bg-[#141e36]">
      <div className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="w-full -mb-1 text-red text-[#101827]"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
        </svg>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative max-w-2xl mx-auto sm:max-w-xl md:max-w-2xl text-center">
          <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none md:text-[40px] lg:text-5xl">
            Welcome, to the Best
            <br className="block" />
            <span className="relative inline-block">
              Programming <div className="w-full h-3 -mt-3 bg-[#29b5f3]" />
            </span>{" "}
            Blog
          </h2>
          <p className="mb-6 text-base font-thin tracking-wide text-gray-300 md:text-lg">NahhasBlog is a student-run platform for programming enthusiasts, offering informative and engaging articles on coding problems and new tools.</p>
          {/* <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
            <div className="flex flex-wrap pb-7 pt-2 flex-row justify-center items-center">
              <div className="px-6 text-center md:border-r">
                <h6 className="text-4xl font-bold text-white lg:text-5xl xl:text-6xl">3</h6>
                <p className="text-sm font-medium tracking-widest text-gray-500 uppercase lg:text-base">
                  Downloads
                </p>
              </div>
              <div className="px-6 text-center md:border-r">
                <h6 className="text-4xl font-bold text-white lg:text-5xl xl:text-6xl">
                  12.9K
                </h6>
                <p className="text-sm font-medium tracking-widest text-gray-500 uppercase lg:text-base">
                  Follower
                </p>
              </div>
              <div className="px-6 text-center md:border-r">
                <h6 className="text-4xl font-bold text-white lg:text-5xl xl:text-6xl">
                  48.3K
                </h6>
                <p className="text-sm font-medium tracking-widest text-gray-500 uppercase lg:text-base">
                  Users
                </p>
              </div>
              <div className="px-6 text-center">
                <h6 className="text-4xl font-bold text-white lg:text-5xl xl:text-6xl">
                  24.5K
                </h6>
                <p className="text-sm font-medium tracking-widest text-gray-500 uppercase lg:text-base">
                  Cookies
                </p>
              </div>
            </div>
          </div> */}

          <a
            href="#Posts"
            aria-label="Scroll down"
            className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="currentColor"
            >
              <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
