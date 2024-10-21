import React from "react";
import Card from "./Card";
import portfolio from "./images/portfolio.png";
import freshmart from "./images/freshmart.png";
import landingpage from "./images/Thumbnail.png";
import cfc from "./images/cfct.png";
import bankfifo from "./images/Home.png";
import mading from "./images/mading.png";

import nextblog from "./images/nextblog.png";

const Projects = () => {
  return (
    <div className="py-6 sm:py-8 lg:py-12 my-20" id="Projects">
      <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
        <div className="justify-between items-center gap-8 mb-4 sm:mb-8 md:mb-12">
          <div className="flex flex-col items-center gap-4 my-8">
            <h2
              className="text-gray-800 text-4xl sm:text-5xl heading_font font-bold"
              data-svelte-h="svelte-3swl6p"
            >
              Projects
            </h2>{" "}
            <p className="text-xl lg:text-2xl text-gray-900 text-center">
              Some projects I am working on for school assignments :){" "}
            </p>
          </div>{" "}
          <div
            className="grid grid-cols-1 place-items-center justify-between lg:grid-cols-3 gap-14 p-10"
            data-svelte-h="svelte-1swfby4"
          >
            <Card
              date={"Jan 2024"}
              imgsrc={portfolio}
              desc={
                "Due to the simplicity of my first portfolio, I decided to create a new one."
              }
              link={"https://faridsidik.netlify.app/"}
              title={"Portfolio"}
              techused="Html, Css"
            />

            <Card
              date={"Dec 2023"}
              imgsrc={freshmart}
              desc={
                "A significant school project summarizing what I’ve learned throughout the semester, aimed at showcasing my knowledge and skills."
              }
              link={"https://freshmartf.netlify.app/"}
              title={"FreshMart"}
              techused="Html, Css"
            />

            <Card
              date={"May 2024"}
              imgsrc={landingpage}
              desc={
                "This digital banking landing page was actually created as a final semester project at school. I also referenced it from the internet."
              }
              link={
                "https://www.figma.com/design/cckw279xPAahykkt7ReIet/Farid-Sidik?node-id=0-1&t=YbWohSntzIUs1Jqt-1"
              }
              title={"Landing Page"}
              techused="Figma"
            />

            <Card
              date={"May 2024"}
              imgsrc={bankfifo}
              desc={
                "Just like the previous landing page, this one was also created as a final semester project, so it's pretty much the same."
              }
              link={"https://github.com/MODSetter/neubrutalism_portfolio"}
              title={"Landing Page"}
              techused="Figma"
            />

            <Card
              date={"Jun 2024"}
              imgsrc={mading}
              desc={
                "The website showcases school news, events, and articles, including teacher innovation contests, parent meetings, and program socialization."
              }
              link={"https://common-coming-soon-page.netlify.app/"}
              title={"Bulletin Board"}
              techused="Html, Css, PHP"
            />

            <Card
              date={"Oct 2018"}
              imgsrc={cfc}
              desc={
                "A SEO-optimized website which leveraged incentive CPA affiliate networks and BlackHat SEO techniques to generate maximum profit. Was on the first page of Google for a year on multiple search terms, generating 5K page views per day and nearly 40x ROI."
              }
              link={
                "https://web.archive.org/web/20210125225725/http://clashforacure.org/"
              }
              title={"ClashForACure"}
              techused="WordPress, BlackHat SEO, OnPage SEO, Off-Page SEO"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
