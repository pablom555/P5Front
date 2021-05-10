import React from 'react';

const TableHeader = ({titles}) => {
  return (
    <thead>
      <tr>
        {titles &&
          titles.map((title, index) => (
            <th key={index} className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">
              {title.name}
            </th>
          ))}
        <th className="w-10 title-font tracking-wider font-medium text-white text-sm bg-gray-800"></th>
      </tr>
    </thead>
  );
};

export default TableHeader;
