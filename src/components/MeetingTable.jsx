import React, { useState } from 'react';
import { Eye, Pencil, ActivitySquare, Trash2, MoreVertical } from 'lucide-react';
import { LuChevronsUpDown } from "react-icons/lu";
import { FiCalendar } from 'react-icons/fi';
import { BsArrowUpSquareFill, BsFillArrowDownSquareFill } from 'react-icons/bs';
import { AiOutlineBell } from 'react-icons/ai';
import { CiSearch } from 'react-icons/ci';

// Status badge styles
const statusClasses = {
  Completed: 'bg-green-500',
  Upcoming: 'bg-yellow-500',
  'Follow-up': 'bg-blue-500',
  'Re-scheduled': 'bg-purple-500',
  Overdue: 'bg-red-500',
  'In Progress': 'bg-orange-500',
  Ongoing: 'bg-black',
  Draft: 'bg-gray-400',
  Archived: 'bg-red-700',
};

// Dummy data
const data = [
  {
    dateTime: '01 May, 2025 at 2pm',
    status: 'Completed',
    type: 'Online',
    buyer: 'Mango Private Limited',
    brand: 'Mango',
    dept: 'Design',
    title: 'Costing Discussion with Zara',
    date: '01 May, 2025',
  },
  {
    dateTime: '02 May, 2025 at 3pm',
    status: 'Upcoming',
    type: 'Offline',
    buyer: 'Cherry Innovations',
    brand: 'Cherry',
    dept: 'Development',
    title: 'UI/UX Review',
    date: '02 May, 2025',
  },
  {
    dateTime: '03 May, 2025 at 10am',
    status: 'Follow-up',
    type: 'Offline',
    buyer: 'Pineapple Inc.',
    brand: 'Pineapple',
    dept: 'Marketing',
    title: 'Campaign Strategy',
    date: '03 May, 2025',
  },
  {
    dateTime: '04 May, 2025 at 1pm',
    status: 'Re-scheduled',
    type: 'Offline',
    buyer: 'Peach Corp.',
    brand: 'Peach',
    dept: 'Finance',
    title: 'Budget Review',
    date: '04 May, 2025',
  },
  {
    dateTime: '05 May, 2025 at 4pm',
    status: 'Overdue',
    type: 'Online',
    buyer: 'Banana Solutions',
    brand: 'Banana',
    dept: 'Product',
    title: 'Feature Prioritization',
    date: '05 May, 2025',
  },
  {
    dateTime: '06 May, 2025 at 11am',
    status: 'In Progress',
    type: 'Online',
    buyer: 'Coconut Group',
    brand: 'Coconut',
    dept: 'Support',
    title: 'Customer Feedback',
    date: '06 May, 2025',
  },
  {
    dateTime: '07 May, 2025 at 2pm',
    status: 'Ongoing',
    type: 'Online',
    buyer: 'Lemon Technologies',
    brand: 'Lemon',
    dept: 'Sales',
    title: 'Sales Strategy',
    date: '07 May, 2025',
  },
  {
    dateTime: '08 May, 2025 at 9am',
    status: 'Completed',
    type: 'Offline',
    buyer: 'Grapefruit LLC',
    brand: 'Grapefruit',
    dept: 'Research',
    title: 'Market Analysis',
    date: '08 May, 2025',
  },
  {
    dateTime: '09 May, 2025 at 3pm',
    status: 'Draft',
    type: 'Offline',
    buyer: 'Kiwi Systems',
    brand: 'Kiwi',
    dept: 'HR',
    title: 'Employee Engagement',
    date: '09 May, 2025',
  },
  {
    dateTime: '10 May, 2025 at 5pm',
    status: 'Archived',
    type: 'Offline',
    buyer: 'Orange Enterprises',
    brand: 'Orange',
    dept: 'Legal',
    title: 'Contract Review',
    date: '10 May, 2025',
  },
];


const ActionMenu = ({ id }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="p-1 text-gray-300  hover:text-black">
        <MoreVertical size={16} />
      </button>
      {open && (
        <div className="absolute right-0 top-6 w-40 bg-white shadow border rounded z-50 text-sm">
          <ul className="text-gray-400">
            <li className="flex items-center gap-2 px-3 py-2 font-semibold hover:bg-gray-100 cursor-pointer">
              <Eye size={14} /> View
            </li>
            <li className="flex items-center gap-2 px-3 py-2 font-semibold hover:bg-gray-100 cursor-pointer">
              <Pencil size={14} /> Edit
            </li>
            <li className="flex items-center gap-2 px-3 py-2 font-semibold hover:bg-gray-100 cursor-pointer">
              <ActivitySquare size={14} /> Activity Log
            </li>
            <li className="flex items-center gap-2 px-3 py-2 font-semibold hover:bg-gray-100  cursor-pointer">
              <Trash2 size={14} /> Delete
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
const MeetingTable = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    setSelectedRows(selectAll ? [] : data.map((_, i) => i));
    setSelectAll(!selectAll);
  };

  const handleRowSelect = (index) => {
    setSelectedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="w-full mt-[-10px]">
      {/* Filters */}
      <div className="grid grid-cols-11 gap-2 mb-2">
        <div className="col-span-2 relative">
          <CiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
          <input
            placeholder="Search anything here...."
            className="w-full pl-7 pr-2 py-1 text-[10px] font-bold border border-gray-300 rounded text-gray-400 bg-gray-50 focus:outline-none"
          />
        </div>
        {['Buyer Name', 'Brand', 'Dept', 'Meeting Type', 'Participants', 'Meeting Date', 'Status'].map((label, i) => (
          <select key={i} className="px-2 py-1 font-semibold border border-gray-300 rounded text-[10px] text-gray-400">
            <option>{label}</option>
          </select>
        ))}
      </div>

      {/* Table with scrollable body */}

      <div className="border-gray-50 rounded scrollbar-custom overflow-hidden">
        <div className="overflow-y-auto max-h-[440px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 ">

          <table className="min-w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-100 sticky top-0 z-10 text-[10px]">
              <tr>
                <th className="px-4 py-1  bg-gray">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectAll}
                      onChange={handleSelectAll}
                      className="peer appearance-none h-3 w-3 border border-gray-400 rounded-sm bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none"
                    />
                    <span className="absolute text-white text-[12px] left-[2px] top-[-2px] hidden peer-checked:inline-block">
                      ✓
                    </span>
                  </label>
                </th>
                {/* Data Headings with Icons */}
                {[
                  { label: 'Date & Time', icon: <LuChevronsUpDown className="text-gray-500 text-[13px]" /> },
                  { label: 'Status', icon: <LuChevronsUpDown className="text-gray-500 text-[13px]" /> },
                  { label: 'Type', icon: <BsArrowUpSquareFill className="text-orange-100 bg-purple-800 text-[13px] " /> },
                  { label: 'Buyer Name', icon: <BsFillArrowDownSquareFill className="text-orange-100 bg-purple-800 text-[13px]" /> },
                  { label: 'Brand', icon: <BsFillArrowDownSquareFill className="text-orange-100 bg-purple-800 text-[13px]" /> },
                  { label: 'Dept.', icon: <BsFillArrowDownSquareFill className="text-orange-100 bg-purple-800 text-[13px]" /> },
                  { label: 'Title', icon: <LuChevronsUpDown className="text-gray-500 text-[13px]" /> },
                  { label: 'Meeting Date', icon: <LuChevronsUpDown className="text-gray-500 text-[13px]" /> },
                  { label: 'Participants', icon: <LuChevronsUpDown className="text-gray-500 text-[13px]" /> },
                ].map((h, i) => (
                  <th key={i} className="px-6 py-1 text-[12px] whitespace-nowrap font-medium text-gray-700">
                    <div className="flex items-center gap-1">
                      <span>{h.label}</span>

                      {h.icon}
                    </div>
                  </th>
                ))}
                <th className="px-4 py-1 text-[12px] sticky right-0 bg-white z-20">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => {
                const isSelected = selectedRows.includes(i);
                return (
                  <tr key={i} className={`border-b border-gray-200 hover:bg-gray-300 text-[9px] ${isSelected ? 'bg-gray-100' : ''}`}>
                    <td className="px-4 py-1">

                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => handleRowSelect(i)}
                          className="peer appearance-none h-3 w-3 border border-gray-400 rounded-sm bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none"
                        />
                        <span className="absolute text-white text-[12px] left-[2px] top-[-2px] hidden peer-checked:inline-block">
                          ✓
                        </span>
                      </label>
                    </td>
                    <td className="px-6 py-.5  text-[12px] whitespace-nowrap">{item.dateTime}</td>

                    <td className="px-6 py-1">
                      <div
                        className={`inline-flex items-center justify-center gap-1 px-2 py-0.5 rounded text-white text-[10px] whitespace-nowrap ${statusClasses[item.status]}`}
                      >
                        {/* Follow-up */}
                        {item.status === 'Follow-up' && (
                          <>
                            Follow-up
                            <AiOutlineBell className="text-white text-[12px]" />
                            (3)
                          </>
                        )}

                        {/* In Progress */}
                        {item.status === 'In Progress' && (
                          <>
                            In Progress
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-3 h-3"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                              />
                            </svg>
                            (1/3)
                          </>
                        )}
                        {/* Default status */}
                        {item.status !== 'Follow-up' && item.status !== 'In Progress' && item.status}
                      </div>
                    </td>
                    <td className="px-6 py-2">
                      <span
                        className={`px-2 py-1 rounded text-[12px] ${item.type === 'Online'
                            ? 'bg-green-100 text-green-600'
                            : 'bg-gray-300 text-gray-800'
                          }`}
                      >
                        {item.type}
                      </span>
                    </td>


                    <td className="px-6 py-1  font-bold underline text-[12px] whitespace-nowrap">{item.buyer}</td>
                    <td className="px-6 py-1  font-bold underline text-[12px] whitespace-nowrap">{item.brand}</td>
                    <td className="px-6 py-1  font-bold underline text-[12px] whitespace-nowrap">{item.dept}</td>
                    <td className="px-6 py-1   font-bold underline text-[12px] whitespace-nowrap">{item.title}</td>
                    <td className="px-6 py-1  text-[12px] whitespace-nowrap">{item.date}</td>
                    <td className="px-2 py-1">
                      <div className="flex  items-center space-x-2 whitespace-nowrap">
                        <span className="w-4 h-4 rounded-full bg-green-500 text-white text-[10px] flex items-center justify-center">M</span>
                        <span className="text-[10px]">Mohd Saleem +2</span>
                      </div>
                      <div className="text-[10px] text-gray-400">Buyer, Sales</div>
                    </td>

                    <td className="px-4 py-1 sticky right-0 bg-white text-gray-500 z-20">

                      <ActionMenu meetingId={item.id} />

                    </td>

                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};


export default MeetingTable;