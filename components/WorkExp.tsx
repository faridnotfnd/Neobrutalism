import React from "react";

const WorkExp = () => {
  return (
    <section id="Work">
      <div className="bg-[#88aaee] text-black py-8 lg:px-20 border-4 border-black md:mx-10 rounded-3xl">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
            <h1
              className="text-4xl md:text-5xl font-bold text-black heading_font"
              data-svelte-h="svelte-3x10mm"
            >
              Work Experience
            </h1>{" "}
            <span className="text-gray-900 text-xl lg:text-2xl mt-4 mb-6 md:mb-8">
              Actually, this is an internship/practical work experience
            </span>
          </div>{" "}
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div className="border-2-2 absolute h-full border-green-50 border-8 opacity-0"></div>{" "}
                <div
                  className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline aos-init aos-animate"
                  data-aos="fade-up"
                  data-svelte-h="svelte-1oza2m"
                >
                  <div className="order-1 w-auto"></div>{" "}
                  <div className="order-1 w-5/6 px-4 py-12 border-4 border-black shadow-[6px_6px_0_0_#000] transition hover:shadow-none bg-white rounded-base">
                    <span className="mb-3 text-base text-blue-900">
                      July 2024 - Sept 2024
                    </span>{" "}
                    <h4 className="mb-1 text-2xl md:text-5xl text-blue-900 heading_font font-bold">
                      Prilude Studio
                    </h4>{" "}
                    <h5 className="mb-4 font-semibold text-xs md:text-lg">
                      Mobile Apps Developer
                    </h5>{" "}
                    <div className="text-sm md:text-base leading-snug tetx-900 text-opacity-100 gap-4 flex flex-col p-4">
                      <ul className="list-disc">
                        <li>
                          I interned at Prilude Studio as a mobile apps
                          Developer, where I gained hands-on experience in
                          developing mobile applications using modern
                          programming languages and tools.
                        </li>
                        <li>
                          During my internship at Prilude Studio, I collaborated
                          with the development team to create efficient mobile
                          apps, enhancing my skills in coding, debugging, and
                          UI/UX design.
                        </li>
                        <li>
                          At Prilude Studio, I worked as a mobile programmer
                          intern, learning to solve complex programming
                          challenges and improving the functionality of mobile
                          applications across various platforms.
                        </li>
                        <li>
                          My internship at Prilude Studio involved mobile app
                          development, where I utilized programming languages
                          like Java and Kotlin to deliver user-friendly,
                          feature-rich mobile applications.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExp;
