const Pagination = () => (
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-1 text-sm text-gray-600 space-y-3 md:space-y-0 md:space-x-4">
    {/* Items Per Page */}
    <div className="flex items-center space-x-2">
      <span className="font-bold text-xs whitespace-nowrap">Items Per Page</span>
      <select className="border rounded px-2.5 py-1 text-xs">
        <option>50</option>
      </select>
    </div>

    {/* Pagination Buttons */}
    <div className="flex flex-wrap items-center space-x-5">
      <span className="text-xs font-bold mr-2">1-50 of 100</span>
      <button className="px-2 py-1 text-gray-500 hover:text-purple-600">&lt;</button>
      {[1, 2, 3, 4, '...', 10, 11, 12].map((n, i) => (
        <button
          key={i}
          className={`px-2 py-1 text-xs rounded ${
            n === 1
              ? 'bg-purple-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-purple-100'
          }`}
        >
          {n}
        </button>
      ))}
      <button className="px-2 py-1 text-gray-500 hover:text-purple-600">&gt;</button>
    </div>
  </div>
);

export default Pagination;
