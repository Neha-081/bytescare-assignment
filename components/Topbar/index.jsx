export default function Topbar() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">

        {/* Product image */}
        <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
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
              <p className="text-base text-gray-500">
                The advancement towards technology & world wide web has shown an
                exponential increase in attracting a large number of population
                to the digital platforms of health, education, entertainment,
                and many more.
              </p>
              <p className="text-base text-gray-500">
                Content digitization increases the risk of infringements. There
                are a number of services & solutions available all over the
                globe to protect your content from Copyright infringement which
                makes it a difficult task to choose among the best available
                services.
              </p>
              <p className="text-base text-gray-500">“Voila! BytesCare at Your Doorstep.”</p>
              <p className="text-base text-gray-500">
                BytesCare, a content piracy solutions company stands at your
                doorstep to protect your content from infringements, pre/post
                piracy damage, and also protect & maintain your brand’s
                reputation.
              </p>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}
