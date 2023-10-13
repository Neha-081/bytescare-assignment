import { ChevronDownIcon } from "@heroicons/react/solid"
import React from "react"

export default function Accordion({data}) {
  return (
    <>
      <section className="w-full divide-y divide-primaryGray lg:w-[750px]">
        {data?.map((elem, index) => (
        <details className="group py-4" open={index == 0} key={index}>
        <summary className="flex justify-end text-sm relative cursor-pointer list-none font-medium text-primary transition-colors duration-300 focus-visible:outline-none">
          <p>{elem.title}</p>
          <ChevronDownIcon className="h-4 w-4 m-1" />
        </summary>
        <p className="mt-4 text-white text-xs">
          {elem.desc}
        </p>
      </details>
        ))}
      </section>
    </>
  )
}
