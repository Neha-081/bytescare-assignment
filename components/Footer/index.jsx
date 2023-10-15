import React from "react";

// Define the navigation links for the footer
const navigation = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },
  ],
  support: [
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
    { name: "API Status", href: "#" },
  ],
};

// Footer component
export default function Footer() {
  return (
    <footer className="bg-primaryBlack text-sm" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8 lg:px-8 px-4 sm:px-6 py-12 lg:py-16">
          <div className="space-y-8 xl:col-span-1">
            {/* Logo and contact information */}
            <img className="h-8" src="/assets/logowhite.svg" alt="bytescare" />
            <p className="text-white">
              2055 Limestone Rd, STE 200-C, Wilmington, New Castle, DE 19808
            </p>
            <p>Phone: +91 8756-621035 Email: contact@bytescare.com</p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                {/* Solutions section */}
                <h3 className="text-sm font-semibold tracking-wider uppercase">
                  Solutions
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                {/* Support section */}
                <h3 className="text-sm font-semibold tracking-wider uppercase">
                  Support
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div>
                {/* Join Our Company section */}
                <h3 className="text-sm font-semibold tracking-wider uppercase">
                  Join Our Company
                </h3>
                <p className="text-xs my-4">
                  Stay up to date with our products and offerings
                </p>
                <form className="mt-4 sm:flex sm:max-w-md lg:mt-0">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email-address"
                    id="email-address"
                    autoComplete="email"
                    required
                    className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400 sm:max-w-xs"
                    placeholder="Enter email address"
                  />
                  <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button
                      type="submit"
                      className="w-full bg-primary border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 py-4 bg-[#46505a] px-2">
          <p className="xl:text-center">
            &copy; Copyright 2022 Bytescare Inc. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
