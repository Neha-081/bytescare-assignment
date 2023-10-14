export default function GridBox({ gridArray }) {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 place-items-center md:mx-10"
    >
      {gridArray.map((person) => (
        <li
          key={person.email}
          className="col-span-1 lg:h-[300px] lg:w-[300px] flex flex-col text-center bg-white rounded-lg shadow-lg divide-y divide-gray-200"
        >
          <div className="flex-1 flex flex-col p-8">
            <img
              className="w-16 h-16 flex-shrink-0 mx-auto rounded-full"
              src={person.imageUrl}
              alt="grid-img"
            />
            <h3 className="mt-6 text-primaryBlack text-sm font-medium">
              {person.name}
            </h3>
            <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-primaryGray text-xs my-2">{person.title}</dd>
            </dl>
          </div>
        </li>
      ))}
    </ul>
  );
}
