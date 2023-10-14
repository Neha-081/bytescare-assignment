import React, { useEffect } from "react";
import Accordion from "../Accordion";

export default function Services() {

    const data = [
        {title: 'Pre-Piracy Solutions', desc: 'It is a prevention phase that comes into play before publishing the content. It helps creators to prevent their original content from piracy attacks and publish authorized, encrypted, and original content. Pre-Piracy solutions include watermarking and digital rights management, evaluating existing technologies for loopholes, implementing extra measures to stop leakages within the team, etc.'},
        {title: 'Post-Piracy Solutions', desc: 'It is a prevention phase that comes into play before publishing the content. It helps creators to prevent their original content from piracy attacks and publish authorized, encrypted, and original content. Pre-Piracy solutions include watermarking and digital rights management, evaluating existing technologies for loopholes, implementing extra measures to stop leakages within the team, etc.'},
        {title: 'Brand & Reputation Management', desc: 'It is a prevention phase that comes into play before publishing the content. It helps creators to prevent their original content from piracy attacks and publish authorized, encrypted, and original content. Pre-Piracy solutions include watermarking and digital rights management, evaluating existing technologies for loopholes, implementing extra measures to stop leakages within the team, etc.'}
    ]

  return (
    <>
      <div className="relative w-full mx-auto my-10">
        <div className="overflow-hidden" data-glide-el="track">
          <div className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <div className="bg-[#262833] flex flex-col md:flex-row-reverse w-full">
              <div className="py-10 px-10">
                <h2 className="text-white text-3xl font-bold text-right">
                Products & Services
                </h2>
                <div className="my-3">
                    <Accordion data={data} />
                </div>
              </div>
              <img
                src="/assets/privacy.svg"
                alt="privacy"
                className="w-100 h-100 max-w-full max-h-full m-auto py-10"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
