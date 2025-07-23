import { CiExport } from "react-icons/ci";
import { PiExportBold } from "react-icons/pi";

const Breadcrumb = () => (
    <div>
    <div className="flex justify-between mt-[-15px] items-center mb-1">
      <p className="text-lg font-bold text-gray-800 ">Buyer Meeting List View</p>
      <div className="flex gap-3">
<button className="flex items-center gap-2 bg-purple-600 text-white text-sm px-6 py-1 rounded">
  <PiExportBold  className="text-lg" />
  Export
</button>
        <button className="bg-black text-white px-5 py-1 text-sm rounded">+ Create New Meeting</button>
      </div>
    </div>
    {/* Header Breadcrumb */}
    <div className="text-xs font-bold	 text-gray-500 mb-1">
      <span className="text-purple-600 font-bold">Buyer Meeting</span> {'»'} Buyer Meeting List View
    </div>
    </div>
);

export default Breadcrumb;
