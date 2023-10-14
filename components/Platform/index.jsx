export default function Platform() {
  const platforms = [
    { title: "Marketplaces", imageUrl: "/assets/marketplace.svg" },
    { title: "Social Media", imageUrl: "/assets/social.svg" },
    { title: "Websites", imageUrl: "/assets/website.svg" },
    { title: "Domains", imageUrl: "/assets/domain.svg" },
    { title: "Search Engines", imageUrl: "/assets/engine.svg" },
    { title: "Mobile Apps", imageUrl: "/assets/mobile.svg" },
    { title: "Video Platforms", imageUrl: "/assets/platform.svg" },
    { title: "Cyberlockers", imageUrl: "/assets/cyber.svg" },
  ];
  return (
    <div className="my-5 mx-2">
      <h1 className="text-primaryBlack text-center text-3xl font-bold my-12">
        <span className="text-primary">Platforms </span> We Serve
      </h1>

      <ul
        role="list"
        className="grid grid-cols-1 gap-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8"
      >
        {platforms.map((platform) => (
          <li
            key={platform.title}
            className="col-span-1 flex flex-col text-center bg-white shadow-md divide-y divide-gray-200"
          >
            <div className="flex-1 flex flex-col p-8">
              <img
                className="flex-shrink-0 mx-auto rounded-full"
                src={platform.imageUrl}
                alt="platform media"
              />
              <dl className="mt-3 flex-grow flex flex-col justify-between">
                <dd className="text-gray-500 text-xs">{platform.title}</dd>
              </dl>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
