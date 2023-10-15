import React, { useEffect } from "react";
import Glide from "@glidejs/glide";

export default function Testimonials() {
  useEffect(() => {
    const sliderTest = new Glide(".glide-04", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      //   autoplay: 3500,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      sliderTest.destroy();
    };
  }, []);

  return (
    <>
      {/*<!-- Component: Carousel with controls outside --> */}
      <div className="glide-04 relative w-full">
        <h1 className="text-primaryBlack text-center text-3xl font-bold my-12">
          Testimonials
        </h1>

        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li className="shadow-xl bg-[#f8f8f8] bg-lightGray px-2 my-12 relative max-w-[450px]">
              <img
                src="/assets/expresslogo.svg"
                className="m-auto max-h-20 w-20 max-w-full rounded-full absolute -top-[45px] left-[180px]"
              />
              <div className="mt-14">
                <img
                  src="/assets/express.svg"
                  className="m-auto h-5 max-w-full"
                />
                <p className="text-primaryGray text-xs my-4 mb-14">
                  Bytescare offers solutions to detect and control the piracy of
                  your content from fraudulent websites and content pirates.
                  Bytescare solutions are like watchmen of Digital News
                  Publishers and we highly recommend their services
                </p>
                <p className="text-primary text-sm my-4 absolute font-medium bottom-0">
                  Ajay Karakoti
                </p>
              </div>
            </li>
            <li className="shadow-xl bg-[#f8f8f8] px-2 my-12 relative max-w-[450px]">
              <img
                src="/assets/geekslogo.svg"
                className="m-auto max-h-20 w-20 max-w-full rounded-full absolute -top-[45px] left-[180px]"
              />
              <div className="mt-14">
                <img
                  src="/assets/geeks.svg"
                  className="m-auto h-10 max-w-full"
                />
                <p className="text-primaryGray text-xs my-4 mb-14">
                  “We have found the entire Bytescare team to be technically
                  competent, enthusiastic, professional, easy to work with, and
                  can clearly understand our business requirements and help us
                  in the best possible manner.” are like watchmen of Digital
                  News Publishers and we highly recommend their services
                </p>
                <p className="text-primary text-sm my-4 absolute font-medium bottom-0">
                  Bhavook Khanna
                </p>
              </div>
            </li>
            <li className="shadow-xl bg-[#f8f8f8] px-2 my-12 relative max-w-[450px]">
              <img
                src="/assets/drishtilogo.svg"
                className="m-auto max-h-20 w-20 max-w-full rounded-full absolute -top-[45px] left-[180px]"
              />
              <div className="mt-14">
                <img
                  src="/assets/drishti.svg"
                  className="m-auto h-10 max-w-full"
                />
                <p className="text-primaryGray text-xs my-4 mb-14">
                  They have an exceptional understanding of Piracy & Cyber
                  Investigations. They save costs in technical & legal
                  operations
                </p>
                <p className="text-primary text-sm my-4 absolute font-medium bottom-0">
                  Ajay Karakoti
                </p>
              </div>
            </li>
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="flex w-full items-center justify-center gap-2 p-4"
          data-glide-el="controls"
        >
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
