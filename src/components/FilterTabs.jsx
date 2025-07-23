import React, { useState } from 'react';

// Tab Data
const tabs = [
  { label: 'All', count: 100 },
  { label: 'Draft', count: 50 },
  { label: 'Archive', count: 75 },
];

const FilterTabs = () => {
  const [selected, setSelected] = useState('All');

  return (
    <div>
      <div className="flex space-x-2 mb-4 border border-gray-300 rounded p-2 bg-white">
        {tabs.map((tab) => {
          const isSelected = selected === tab.label;

          return (
            <button
              key={tab.label}
              onClick={() => setSelected(tab.label)}
              className={`flex items-center gap-2 px-3 py-1 rounded text-sm font-medium focus:outline-none
                ${isSelected ? 'bg-purple-100 text-purple-700' : ' text-gray-800'}
              `}
            >
              <span>{tab.label}</span>
              <span
                className={`text-xs font-semibold px-1.5 py-0.5 rounded
                  ${isSelected ? 'bg-purple-700 text-white' : 'bg-gray-600 text-white'}
                `}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterTabs;
