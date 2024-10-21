import React from "react";

const Education = () => {
  return (
    <section id="Education">
      <div className="bg-[#53f2fc] text-black py-8 lg:px-20 border-4 border-black md:mx-10 rounded-3xl">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-black heading_font">
              Education
            </h1>
          </div>
          <div className="ml-0 md:ml-12 lg:w-2/3 w-full">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div className="border-2-2 absolute h-full border-green-50 border-8 opacity-0"></div>

                {/* Timeline item 1 */}
                <div
                  className="mb-8 flex flex-col md:flex-row-reverse justify-between items-center w-full aos-init aos-animate"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <div className="order-1 w-full md:w-5/6 px-4 py-12 border-4 border-black shadow-[6px_6px_0_0_#000] transition hover:shadow-none bg-white rounded-base">
                    <span className="mb-3 text-base text-red-900">
                      July 2019 - June 2022
                    </span>
                    <h4 className="mb-1 text-2xl md:text-5xl text-red-900 heading_font font-bold">
                      SMPN 10 Banjar
                    </h4>
                    <h5 className="mb-4 font-semibold text-xs md:text-lg">
                      As an ordinary student
                    </h5>
                  </div>
                </div>

                {/* Timeline item 2 */}
                <div
                  className="mb-8 flex flex-col md:flex-row justify-between items-center w-full aos-init"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <div className="order-1 w-full md:w-5/6 px-4 py-12 border-4 border-black shadow-[6px_6px_0_0_#000] transition hover:shadow-none bg-white rounded-base">
                    <span className="mb-3 text-base text-cyan-900">
                      July 2022 - Present
                    </span>
                    <h4 className="mb-1 text-2xl md:text-5xl text-cyan-900 heading_font font-bold">
                      SMKN 1 Banjar
                    </h4>
                    <h5 className="mb-4 font-semibold text-xs md:text-lg">
                      Software Engineering
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
