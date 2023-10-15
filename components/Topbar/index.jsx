const people = [
  { imageUrl: "/assets/client1.svg" },
  { imageUrl: "/assets/client2.svg" },
  { imageUrl: "/assets/client3.svg" },
  { imageUrl: "/assets/client4.svg" },
  { imageUrl: "/assets/client5.svg" },
  { imageUrl: "/assets/client6.svg" },
];

export default function Topbar() {
  return (
    <div className="bg-white tracking-wide">
      <div className="max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
        <h2 className="text-primaryBlack font-bold text-[32px] mb-12">
          Let’s Fight <span className="text-primary">Piracy</span> Together with
          our Anti Piracy Protection Services!
        </h2>
        {/* Product image */}
        <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-span-2 lg:self-center">
          <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
            <img
              src="assets/hero.svg"
              alt="hero"
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>

        {/* Product details */}
        <div className="lg:max-w-lg lg:self-end">
          <section aria-labelledby="information-heading" className="mt-4">
            <div className="mt-4 space-y-6">
              <p className="text-base text-primaryGray">
                The advancement towards technology & world wide web has shown an
                exponential increase in attracting a large number of population
                to the digital platforms of health, education, entertainment,
                and many more.
              </p>
              <p className="text-base text-primaryGray">
                Content digitization increases the risk of infringements. There
                are a number of services & solutions available all over the
                globe to protect your content from Copyright infringement which
                makes it a difficult task to choose among the best available
                services.
              </p>
              <p className="text-base text-primaryGray">
                “Voila! BytesCare at Your Doorstep.”
              </p>
              <p className="text-base text-primaryGray">
                BytesCare, a content piracy solutions company stands at your
                doorstep to protect your content from infringements, pre/post
                piracy damage, and also protect & maintain your brand’s
                reputation.
              </p>
            </div>
          </section>
        </div>
      </div>
      <p className="text-primaryBlack font-bold text-xl text-center">
        Trusted by 100+ Clients
      </p>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-5 px-4 text-center sm:px-6 lg:px-8">
          <div className="space-y-8 sm:space-y-12">
            <div
              role="list"
              className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6"
            >
              {people.map((person, index) => (
                <div className="space-y-4" key={index}>
                  <img
                    className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24"
                    src={person.imageUrl}
                    alt={`client${index}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
