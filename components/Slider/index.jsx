import React, { useEffect } from "react";
import Glide from "@glidejs/glide";

export default function Slider() {
  useEffect(() => {
    const slider = new Glide(".glide-04", {
      type: "slider",
      focusAt: "center",
      perView: 1,
      autoplay: 3500,
      animationDuration: 700,
      gap: 0,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      <div className="relative w-full glide-04 md:px-28 mx-auto my-5">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <div className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <div className="bg-[#262833] flex flex-col md:flex-row">
              <div className="py-10 px-10 md:px-28">
                <h2 className="text-white text-3xl font-bold">
                  Industries We Serve
                </h2>
                <p className="text-primary">E-Learning</p>
                <div className="m-3">
                  <p>
                    With the advancement of the digital world, E-learning is the
                    new normal, and books on laptop is of utmost demand. This
                    may attract the pirates to download & publish your original
                    content on unauthorized platforms. But Bytescare is at your
                    doorstep to protect your content from infringements. The
                    tools & technologies used by us prevent the pirates from
                    illegally downloading the content and publishing it on
                    unauthorized platforms.
                  </p>
                  <p className="my-5">
                    Thereby, hindering content piracy, financial loss and
                    protecting brand reputation, thus uplifting the E-learning
                    culture.
                  </p>
                  <p className="my-5">
                    E-learning content includes: Audio & Video Tutorials Study
                    Materials including text and images Quiz & Mocks
                  </p>
                </div>
              </div>
              <img
                src="/assets/e-learning.svg"
                alt="e-learning"
                className="w-100 h-100 max-w-full max-h-full m-auto py-10"
              />
            </div>
          </div>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="flex items-center justify-center w-full gap-2 p-4"
          data-glide-el="controls"
        >
          <button
            className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
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
            className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
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
      {/*<!-- End Slider with controls outside --> */}
    </>
  );
}
