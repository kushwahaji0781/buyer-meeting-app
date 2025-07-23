import React from 'react';
import {
  AiFillDashboard,
  AiOutlineSetting
} from 'react-icons/ai';
import {
  FaCalendarCheck,
  FaMoneyBillWave,
  FaUserCog,
  FaFileInvoice,
  FaCogs
} from 'react-icons/fa';
import {
  BsClipboardCheck,
  BsClipboardData,
  BsFillFileTextFill,
  BsBoxSeam,
  BsTruck,
  BsPeople
} from 'react-icons/bs';
import {
  RiFileList3Line,
  RiFileSearchLine
} from 'react-icons/ri';
import {
  MdProductionQuantityLimits
} from 'react-icons/md';
import {
  HiOutlineDocumentReport
} from 'react-icons/hi';
import {
  TbBuildingWarehouse,
  TbReportSearch
} from 'react-icons/tb';
import {
  IoPeopleCircleOutline
} from 'react-icons/io5';
import {
  PiPackageFill
} from 'react-icons/pi';
import { RiSettingsLine } from "react-icons/ri";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { LuCalendarDays } from "react-icons/lu";



const Sidebar = ({ isOpen, onClose }) => {
  const [selected, setSelected] = React.useState(null);
  const [hovered, setHovered] = React.useState(null);

  const menus = [
    { name: 'Dashboard', icon: <AiFillDashboard /> },
    { name: 'Tasks', icon: <FaCalendarCheck /> },
    { name: 'Buyer Meeting', icon: <LuCalendarDays /> },
    { name: 'Quick Costing', icon: <AiOutlineDollarCircle /> },
    { name: 'Pre Order Costing', icon: <AiOutlineDollarCircle /> },
    { name: 'Style Library', icon: <BsBoxSeam /> },
    { name: 'Requisitions', icon: <RiFileList3Line /> },
    { name: 'Buyer Purchase', icon: <PiPackageFill /> },
    { name: 'Inventory', icon: <BsBoxSeam /> },
    { name: 'Sample Development', icon: <IoPeopleCircleOutline /> },
    { name: 'Production', icon: <MdProductionQuantityLimits /> },
    { name: 'Master Admin', icon: <FaUserCog /> },
    { name: 'Users', icon: <BsPeople /> },
    { name: 'Suppliers', icon: <BsPeople /> },
    { name: 'Showroom', icon: <TbBuildingWarehouse /> },
    { name: 'Shipment', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
</svg>},
    { name: 'KPI’s', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
</svg>
 },
    { name: 'E-Invoice / E-Way Bill', icon: <FaFileInvoice /> },
    { name: 'Reports', icon: <HiOutlineDocumentReport /> },
    { name: 'Master Data', icon: <RiFileSearchLine /> },
    { name: 'Settings', icon: <RiSettingsLine /> }
  ];
  const onMenuClick = (name) => setSelected(name);
  const onMenuMouseOver = (name) => setHovered(name);
  const onMenuMouseOut = () => setHovered(null);
  const onMenuKeyDown = (e, name) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setSelected(name);
    }
  };

  return (
    <>
      {/* Overlay for mobile view */}
      {isOpen && (
        <div
          className="font-sans fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
          onClick={onClose}
        ></div>
      )}

    <aside
  className={`fixed  z-40 top-0.5 left-0 w-64 h-screen bg-white shadow-md border-r transform transition-transform duration-300
    ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative md:block flex flex-col`}
>


  {/* Scrollable menu */}
  <nav
    className="flex-1 p-1 space-y-1  overflow-y-auto scrollbar-thin"
    aria-label="Sidebar Navigation"
  >
    <ul>
      {menus.map((menu, idx) => {
        const isSelected = selected === menu.name;
        const isHovered = hovered === menu.name;

        return (
          <li
            key={idx}
            role="button"
            tabIndex={0}
            aria-current={isSelected ? 'page' : undefined}
            onClick={() => onMenuClick(menu.name)}
            onMouseOver={() => onMenuMouseOver(menu.name)}
            onMouseOut={onMenuMouseOut}
            onKeyDown={(e) => onMenuKeyDown(e, menu.name)}
            className={`w-full px-4 py-1.5 flex items-center text-[12px] font-semibold text-gray-600 cursor-pointer rounded-2xl transition-colors
              ${
                isSelected
                  ? 'bg-gray-200 text-purple-700 font-semibold'
                  : isHovered
                  ? 'text-purple-700'
                  : 'text-black'
              }`}
          >
            <span className="mr-2">{menu.icon}</span>
            {menu.name}
          </li>
        );
      })}
    </ul>
  </nav>
</aside>

    </>
  );
};

export default Sidebar;
