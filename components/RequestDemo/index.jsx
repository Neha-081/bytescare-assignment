import React from "react";

export default function RequestDemo() {
  return (
    <div
      className="relative overflow-hidden mt-5 bg-cover bg-no-repeat text-center"
      style={{ height: "400px", backgroundImage: `url("/assets/vector.svg")` }}
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed px-1">
        <div className="flex h-full items-center justify-center">
          <div className="text-white">
            <h4 className="mb-2 text-sm text-left">Convinced? Confused? Have Ideas?</h4>
            <h1 className="text-3xl text-primaryBlack font-bold">Let’s talk how Bytescare can help you and your business.</h1>
            <button
              type="button"
              className="rounded bg-white px-7 py-3 my-5 text-sm leading-normal text-primary transition duration-150 ease-in-out"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
