import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MeetingTable from "./components/MeetingTable";
import Breadcrumb from "./components/Breadcrumb";
import FilterTabs from "./components/FilterTabs";
import Pagination from "./components/Pagination";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col h-screen font-sans overflow-hidden">
      {/* Top header */}
      <Header toggleSidebar={toggleSidebar} />

      {/* Layout: Sidebar + Content */}
      <div className="flex flex-1 bg-gray-100 overflow-hidden">
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        {/* Main content */}
        <main className="flex-1 p-4 sm:p-6 overflow-y-auto scrollbar-hide h-full">
          <Breadcrumb />
          <FilterTabs />
          {/* <Filters /> */}

          <div className="bg-white rounded shadow p-4 mt-4 flex flex-col">
            <MeetingTable />
            <Pagination />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
